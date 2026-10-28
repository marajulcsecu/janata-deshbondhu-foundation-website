import { foundationConfig } from '../data/foundationData';

// Simple CSV parser for Google Sheet public CSV output
function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== '');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map((h) => h.trim().toLowerCase().replace(/['"]/g, ''));
  const results = [];

  for (let i = 1; i < lines.length; i++) {
    // Basic CSV splitting handling simple quotes
    const row = [];
    let inQuotes = false;
    let entry = '';
    const currentLine = lines[i];

    for (let charIndex = 0; charIndex < currentLine.length; charIndex++) {
      const char = currentLine[charIndex];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(entry.trim());
        entry = '';
      } else {
        entry += char;
      }
    }
    row.push(entry.trim());

    if (row.length === headers.length) {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index].replace(/^["']|["']$/g, '');
      });
      results.push(obj);
    }
  }

  return results;
}

export async function fetchLiveNotices() {
  const csvUrl = foundationConfig.googleSheetCsvUrl;

  if (!csvUrl) {
    // Return fallback notices if no sheet configured
    return foundationConfig.initialNotices;
  }

  try {
    const response = await fetch(csvUrl, {
      method: 'GET',
      headers: {
        'Accept': 'text/csv, text/plain, */*'
      },
      cache: 'no-cache'
    });

    if (!response.ok) {
      console.warn('Google Sheet fetch failed, falling back to local notices.');
      return foundationConfig.initialNotices;
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);

    if (!rows || rows.length === 0) {
      return foundationConfig.initialNotices;
    }

    // Map sheet rows to notice objects
    const mappedNotices = rows
      .filter((r) => r.active && r.active.toLowerCase() === 'true')
      .map((r, index) => ({
        id: `sheet-notice-${index}`,
        tagBn: r.tag_bn || 'ঘোষণা',
        tagEn: r.tag_en || 'Notice',
        titleBn: r.title_bn || 'শিরোনাম',
        titleEn: r.title_en || 'Title',
        dateBn: r.date_bn || 'সাম্প্রতিক',
        dateEn: r.date_en || 'Recent',
        descBn: r.desc_bn || '',
        descEn: r.desc_en || '',
        formLink: r.form_link || '',
        active: true
      }));

    return mappedNotices.length > 0 ? mappedNotices : foundationConfig.initialNotices;
  } catch (error) {
    console.error('Error fetching Google Sheets notices:', error);
    return foundationConfig.initialNotices;
  }
}
