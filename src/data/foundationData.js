export const foundationConfig = {
  nameBn: "জনতা-দেশবন্ধু ফাউন্ডেশন",
  nameEn: "Janata-Deshbondhu Foundation",
  locationBn: "ফুলবাড়ী, দিনাজপুর, বাংলাদেশ",
  locationEn: "Phulbari, Dinajpur, Bangladesh",
  
  // Real Helpline & Contact Numbers extracted from official banners
  phone: "+8801786743802",
  phoneSecondary: "+8801814086362",
  phoneThird: "+8801780555732",
  whatsapp: "8801786743802",
  email: "janatadeshbondhu@gmail.com",
  facebookPage: "https://www.facebook.com/profile.php?id=61590893596931",
  facebookGroup: "https://www.facebook.com/groups/janatadeshbondhu",
  collaboratorBn: "মননশীল",
  collaboratorEn: "Mononshil",
  
  // Official Banner Motto
  mottoBn: "জনকল্যাণে আমাদের পথচলা — সততার আলো ছড়িয়ে পড়ুক চারদিকে। সমাজের পিছিয়ে পড়া জনগোষ্ঠীকে এগিয়ে নেওয়ার ক্ষুদ্র প্রয়াস।",
  mottoEn: "Walking together for public welfare — let the light of honesty spread everywhere. A modest endeavor to uplift marginalized communities.",

  // Real Donation Accounts extracted from official posters
  donationAccounts: {
    bkash: {
      number: "01786743802",
      recipientBn: "চিত্ররায় (Chitra Roy)",
      recipientEn: "Chitra Roy",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/images/activity-1.jpeg" // Official poster showing payment channels
    },
    nagad: {
      number: "01814086362",
      recipientBn: "বিকাশ চন্দ্র (Bikash Chandra)",
      recipientEn: "Bikash Chandra",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/images/activity-1.jpeg"
    },
    rocket: {
      number: "01780555732",
      recipientBn: "জাহাঙ্গীর (Md Jahangir Alom)",
      recipientEn: "Md Jahangir Alom",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/images/activity-1.jpeg"
    },
    bank: {
      bankNameBn: "সোনালী ব্যাংক পিএলসি",
      bankNameEn: "Sonali Bank PLC",
      branchBn: "ফুলবাড়ী শাখা, দিনাজপুর",
      branchEn: "Phulbari Branch, Dinajpur",
      accNameBn: "জনতা দেশবন্ধু ফাউন্ডেশন",
      accNameEn: "Janata Deshbondhu Foundation",
      accNumber: "XXXXXXXXXXXXX",
      routing: "XXXXXXXXX"
    }
  },

  // Google Sheet Public CSV URL for dynamic notices
  googleSheetCsvUrl: "",

  // Fallback Notices based on actual FB activities
  initialNotices: [
    {
      id: "notice-1",
      tagBn: "নতুন ব্যাচ",
      tagEn: "New Batch",
      type: "course",
      titleBn: "ফ্রি ইংরেজি ও গণিত বেসিক ক্লাস কার্যক্রম",
      titleEn: "Free English & Math Foundation Course",
      dateBn: "চলমান",
      dateEn: "Ongoing",
      descBn: "দিনাজপুরের ফুলবাড়ী অঞ্চলের পিছিয়ে পড়া স্কুল শিক্ষার্থীদের বিষয়ভীতি দূর ও মেধা বিকাশে বিভিন্ন বিশ্ববিদ্যালয়ের মেধাবী শিক্ষার্থীদের পরিচালনায় বিশেষ ক্লাস।",
      descEn: "Special remedial classes conducted by university scholars for rural students in Phulbari, Dinajpur.",
      formLink: "https://www.facebook.com/profile.php?id=61590893596931",
      active: true,
    },
    {
      id: "notice-2",
      tagBn: "বৃত্তির তথ্য",
      tagEn: "Scholarship",
      type: "scholarship",
      titleBn: "BIFFL ও CZM জিনিয়াস শিক্ষাবৃত্তি তথ্য ও পরামর্শ",
      titleEn: "BIFFL & CZM Genius Scholarship Assistance",
      dateBn: "সাম্প্রতিক",
      dateEn: "Recent",
      descBn: "উচ্চমাধ্যমিক ও বিশ্ববিদ্যালয় স্তরে অসচ্ছল কিন্তু মেধাবী শিক্ষার্থীদের জন্য জাতীয় পর্যায়ের শিক্ষাবৃত্তির তথ্য এবং আবেদন ভেরিফিকেশন সহায়তা।",
      descEn: "Application support and guidance for talented students from low-income families seeking national scholarships.",
      formLink: "https://www.facebook.com/profile.php?id=61590893596931",
      active: true,
    }
  ],

  // Carefully curated, categorized gallery with authentic photo captions
  galleryImages: [
    {
      id: 1,
      src: "/images/activity-30.jpeg",
      titleBn: "জনকল্যাণে আমাদের পথচলা — ফাউন্ডেশন ব্যানার সহ স্বেচ্ছাসেবক দল",
      titleEn: "Volunteer team with official foundation banner",
      category: "events"
    },
    {
      id: 2,
      src: "/images/activity-2.jpeg",
      titleBn: "শিক্ষার্থীদের মাঝে শিক্ষাসামগ্রী ও পুরস্কার বিতরণ",
      titleEn: "Distribution of educational gifts & recognition",
      category: "education"
    },
    {
      id: 3,
      src: "/images/activity-3.jpeg",
      titleBn: "স্কুল ক্লাসরুমে ইংরেজি ও গণিত বেসিক পাঠদান",
      titleEn: "English & Mathematics core classroom session",
      category: "education"
    },
    {
      id: 4,
      src: "/images/activity-4.jpeg",
      titleBn: "বিশ্ববিদ্যালয়ের মেন্টরদের সাথে সরাসরি মতবিনিময়",
      titleEn: "Interactive session with university mentors",
      category: "education"
    },
    {
      id: 5,
      src: "/images/activity-5.jpeg",
      titleBn: "বোর্ডে বিষয়ভিত্তিক কঠিন বিষয়ের সহজ সমাধান",
      titleEn: "Step-by-step academic problem solving on board",
      category: "education"
    },
    {
      id: 6,
      src: "/images/activity-6.jpeg",
      titleBn: "গ্রামীণ শিক্ষার্থীদের নিয়ে সচেতনতামূলক ক্লাসের সূচনা",
      titleEn: "Orientation class with rural school children",
      category: "education"
    },
    {
      id: 7,
      src: "/images/activity-7.jpeg",
      titleBn: "মনোযোগী শিক্ষার্থীদের ক্লাস পর্যবেক্ষণ ও নোট গ্রহণ",
      titleEn: "Attentive students taking notes in class",
      category: "education"
    },
    {
      id: 8,
      src: "/images/activity-8.jpeg",
      titleBn: "গ্রুপ ভিত্তিক স্টাডি ও টিম ওয়ার্ক প্র্যাকটিস",
      titleEn: "Group study & teamwork practice",
      category: "education"
    },
    {
      id: 9,
      src: "/images/activity-9.jpeg",
      titleBn: "ক্লাসের সমাপনী দিনে শিক্ষার্থীদের উৎসাহমূলক বক্তব্য",
      titleEn: "Closing remarks & inspirational speech",
      category: "education"
    },
    {
      id: 10,
      src: "/images/activity-10.jpeg",
      titleBn: "কৃতী শিক্ষার্থীদের বিশেষ স্মারক ও প্রশংসা প্রদান",
      titleEn: "Token of appreciation for meritorious students",
      category: "education"
    },
    {
      id: 11,
      src: "/images/activity-31.jpeg",
      titleBn: "বৃক্ষরোপণ কর্মসূচি — শিক্ষা প্রাঙ্গণে চারা রোপণ ও বিতরণ",
      titleEn: "Tree plantation drive in campus & community",
      category: "plantation"
    },
    {
      id: 12,
      src: "/images/activity-32.jpeg",
      titleBn: "সবুজায়নে তারুণ্যের অঙ্গীকার — বৃক্ষরোপণ সমাবেশ",
      titleEn: "Afforestation commitment by youth volunteers",
      category: "plantation"
    },
    {
      id: 13,
      src: "/images/activity-20.jpeg",
      titleBn: "বিরামপুর ও ফুলবাড়ী অঞ্চলে জব ফেয়ার ও তরুণ সমাবেশ",
      titleEn: "Job fair & youth congregation in Dinajpur",
      category: "events"
    },
    {
      id: 14,
      src: "/images/activity-22.jpeg",
      titleBn: "শিক্ষা প্রকৌশল ও কলেজ ক্যাম্পাস সংযোগ কর্মসূচি",
      titleEn: "Campus outreach & educational initiative",
      category: "events"
    },
    {
      id: 15,
      src: "/images/activity-11.jpeg",
      titleBn: "স্থানীয় শিক্ষক ও মুরব্বিদের সাথে মতবিনিময় সভা",
      titleEn: "Community consultation with teachers and elders",
      category: "events"
    },
    {
      id: 16,
      src: "/images/activity-12.jpeg",
      titleBn: "ভলান্টিয়ারদের নিয়মিত সমন্বয় ও ভবিষ্যৎ পরিকল্পনা সভা",
      titleEn: "Volunteer coordination & future roadmap meeting",
      category: "events"
    },
    {
      id: 17,
      src: "/images/activity-14.jpeg",
      titleBn: "বিদ্যালয়ের ব্ল্যাকবোর্ডে অনুপ্রেরণামূলক বাণী",
      titleEn: "Inspirational message on school blackboard",
      category: "education"
    },
    {
      id: 18,
      src: "/images/activity-1.jpeg",
      titleBn: "অফিসিয়াল ফান্ড ও অনুদান পাঠানোর নির্দেশিকা পোস্টার",
      titleEn: "Official donation channels & account notice poster",
      category: "events"
    }
  ]
};
