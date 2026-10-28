export const foundationConfig = {
  nameBn: "জনতা-দেশবন্ধু ফাউন্ডেশন",
  nameEn: "Janata-Deshbondhu Foundation",
  locationBn: "ফুলবাড়ী, দিনাজপুর, বাংলাদেশ",
  locationEn: "Phulbari, Dinajpur, Bangladesh",
  phone: "+8801700000000", // Placeholder for foundation to customize
  whatsapp: "8801700000000",
  email: "janatadeshbondhu@gmail.com",
  facebookPage: "https://www.facebook.com/profile.php?id=61590893596931",
  facebookGroup: "https://www.facebook.com/groups/janatadeshbondhu",
  
  // Real Donation Accounts (can be updated anytime)
  donationAccounts: {
    bkash: {
      number: "017XXXXXXXX",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/logo/logo.jpeg" // or dedicated qr
    },
    nagad: {
      number: "017XXXXXXXX",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/logo/logo.jpeg"
    },
    rocket: {
      number: "017XXXXXXXX-X",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/logo/logo.jpeg"
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
  // Instructions on how to generate this are provided in README and docs
  googleSheetCsvUrl: "",

  // Fallback / Initial Notices (Active if no Google Sheet is set or offline)
  initialNotices: [
    {
      id: "notice-1",
      tagBn: "নতুন ব্যাচ",
      tagEn: "New Batch",
      type: "course",
      titleBn: "ফ্রি ইংরেজি ও গণিত বেসিক ক্লাস (৩য় ব্যাচ) নিবন্ধন চলছে",
      titleEn: "Registration Open: Free English & Math Foundation Course (Batch 3)",
      dateBn: "২৫ অক্টোবর ২০২৬",
      dateEn: "October 25, 2026",
      descBn: "দিনাজপুরের ফুলবাড়ী অঞ্চলের পিছিয়ে পড়া স্কুল শিক্ষার্থীদের বেসিক ভিত্তি মজবুত করার বিশেষ ক্লাস। ক্লাসে অংশগ্রহণের জন্য নিচের গুগল ফর্মে তথ্য দিয়ে আবেদন করুন।",
      descEn: "Special remedial classes for rural school students to master core subjects. Apply now through the Google Form.",
      formLink: "https://forms.gle/sampleRegistrationForm",
      active: true,
    },
    {
      id: "notice-2",
      tagBn: "জরুরি নোটিস",
      tagEn: "Urgent Notice",
      type: "scholarship",
      titleBn: "BIFFL ও CZM শিক্ষাবৃত্তি আবেদন সহায়তা ও কাউন্সেলিং",
      titleEn: "National Higher Education Scholarship Assistance & Guidance",
      dateBn: "১৫ অক্টোবর ২০২৬",
      dateEn: "October 15, 2026",
      descBn: "উচ্চমাধ্যমিক ও বিশ্ববিদ্যালয় স্তরে অসচ্ছল কিন্তু মেধাবী শিক্ষার্থীদের জন্য বিভিন্ন সরকারি ও ট্রাস্টের বৃত্তির আবেদন নিয়মাবলী ও ভেরিফিকেশন সহায়তা দেওয়া হচ্ছে।",
      descEn: "Guidance and verification assistance for talented students from low-income families to apply for national scholarships.",
      formLink: "https://www.facebook.com/profile.php?id=61590893596931",
      active: true,
    }
  ],

  // Real photos from Dinajpur classes & field work in public/images
  galleryImages: [
    {
      id: 1,
      src: "/images/activity-2.jpeg",
      titleBn: "ক্লাসরুমে পাঠদান ও আলোচনা",
      titleEn: "Classroom Session & Discussion",
      category: "education"
    },
    {
      id: 2,
      src: "/images/activity-3.jpeg",
      titleBn: "শিক্ষার্থীদের একাগ্র পাঠগ্রহণ",
      titleEn: "Students Attending Foundation Class",
      category: "education"
    },
    {
      id: 3,
      src: "/images/activity-4.jpeg",
      titleBn: "বিশ্ববিদ্যালয় মেন্টরদের সাথে প্রশ্নোত্তর",
      titleEn: "Interactive Q&A with University Mentors",
      category: "education"
    },
    {
      id: 4,
      src: "/images/activity-5.jpeg",
      titleBn: "গণিত বেসিক ক্লাসের ব্যবহারিক উপস্থাপন",
      titleEn: "Mathematics Core Concepts Demonstration",
      category: "education"
    },
    {
      id: 5,
      src: "/images/activity-6.jpeg",
      titleBn: "ইংরেজি ভাষার ভিত্তি মজবুত করার সেশন",
      titleEn: "English Language Foundation Session",
      category: "education"
    },
    {
      id: 6,
      src: "/images/activity-7.jpeg",
      titleBn: "শিক্ষার্থীদের মাঝে শিক্ষাসামগ্রী পর্যালোচনা",
      titleEn: "Study Materials Review with Students",
      category: "education"
    },
    {
      id: 7,
      src: "/images/activity-8.jpeg",
      titleBn: "গ্রুপ স্টাডি ও টিম ডিসকাশন",
      titleEn: "Group Study & Team Problem Solving",
      category: "education"
    },
    {
      id: 8,
      src: "/images/activity-9.jpeg",
      titleBn: "উচ্চশিক্ষা ও ক্যারিয়ার মোটিভেশন",
      titleEn: "Higher Education & Career Motivation",
      category: "events"
    },
    {
      id: 9,
      src: "/images/activity-10.jpeg",
      titleBn: "ক্লাস শেষে স্মারক ও শুভকামনা",
      titleEn: "Token of Appreciation & Best Wishes",
      category: "events"
    },
    {
      id: 10,
      src: "/images/activity-11.jpeg",
      titleBn: "ফাউন্ডেশন নেতৃবৃন্দের সাথে শিক্ষক মতবিনিময়",
      titleEn: "Exchange with Local Teachers and Elders",
      category: "events"
    },
    {
      id: 11,
      src: "/images/activity-12.jpeg",
      titleBn: "স্বেচ্ছাসেবীদের যৌথ পরিকল্পনা সভা",
      titleEn: "Volunteer Team Planning Meeting",
      category: "events"
    },
    {
      id: 12,
      src: "/images/activity-13.jpeg",
      titleBn: "গ্রীষ্ম ও বর্ষা মৌসুমে পরিবেশ সচেতনতা ও বৃক্ষরোপণ",
      titleEn: "Environmental Awareness & Plantation Drive",
      category: "plantation"
    }
  ]
};
