import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { fetchLiveNotices } from '../services/googleSheetsService';
import { Bell, Calendar, ExternalLink, RefreshCw, AlertCircle, FileText } from 'lucide-react';

export const NoticeBoard = () => {
  const { lang, isBn } = useLanguage();
  const t = translations[lang].noticeBoard;

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadNotices() {
      setLoading(true);
      const data = await fetchLiveNotices();
      if (isMounted) {
        setNotices(data);
        setLoading(false);
      }
    }
    loadNotices();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="notices" className="py-16 md:py-20 bg-white border-y border-stone-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          {/* Status Indicator */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.sheetSyncStatus}</span>
          </div>
        </div>

        {/* Notices Content */}
        {loading ? (
          <div className="py-16 text-center text-stone-500 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-6 h-6 animate-spin text-brand-600" />
            <p className="text-sm font-medium">
              {isBn ? 'নোটিস লোড হচ্ছে...' : 'Loading notices...'}
            </p>
          </div>
        ) : notices.length === 0 ? (
          <div className="bg-stone-50 rounded-2xl p-8 text-center border border-dashed border-stone-300 max-w-xl mx-auto">
            <AlertCircle className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <p className="text-stone-600 text-sm leading-relaxed">{t.emptyState}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notices.map((notice) => {
              const tag = isBn ? notice.tagBn : notice.tagEn;
              const title = isBn ? notice.titleBn : notice.titleEn;
              const date = isBn ? notice.dateBn : notice.dateEn;
              const desc = isBn ? notice.descBn : notice.descEn;

              return (
                <div
                  key={notice.id}
                  className="group rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-brand-300 hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Tag and Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-100 text-brand-800">
                        {tag}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>{date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-800 transition-colors leading-snug">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-stone-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Action Link (e.g. Google Form or Facebook Link) */}
                  {notice.formLink && (
                    <div className="mt-6 pt-4 border-t border-stone-200/70">
                      <a
                        href={notice.formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-200"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{t.applyBtn}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
