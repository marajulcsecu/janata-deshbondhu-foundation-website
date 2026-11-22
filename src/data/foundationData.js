export const foundationConfig = {
  nameBn: "জনতা-দেশবন্ধু ফাউন্ডেশন",
  nameEn: "Janata-Deshbondhu Foundation",
  estBn: "স্থাপিত: ২০২৬",
  estEn: "Est. 2026",
  locationBn: "ফুলবাড়ী, দিনাজপুর, বাংলাদেশ",
  locationEn: "Phulbari, Dinajpur, Bangladesh",
  
  // Official Helpline & Contact Numbers from Banner & Poster
  phone: "+8801340232979",
  phoneSecondary: "+8801780555732",
  phoneThird: "+8801786743802",
  phoneFourth: "+8801814086362",
  whatsapp: "8801786743802",
  email: "janatadeshbondhu@gmail.com",
  facebookPage: "https://www.facebook.com/profile.php?id=61590893596931",
  facebookGroup: "https://www.facebook.com/groups/janatadeshbondhu",
  
  // Collaborator info with Brand Sticker
  collaboratorBn: "মননশীল ইন্টারন্যাশনাল",
  collaboratorEn: "Mononshil International",
  collaboratorTaglineEn: "Education, Research & Business Group",
  collaboratorSticker: "/logo/mononshil-sticker.png",
  
  // Official Banner Motto
  mottoBn: "জনকল্যাণে আমাদের পথচলা — সততার আলো ছড়িয়ে পড়ুক চারদিকে। সমাজের পিছিয়ে পড়া জনগোষ্ঠীকে এগিয়ে নেওয়ার ক্ষুদ্র প্রয়াস।",
  mottoEn: "Walking together for public welfare — let the light of honesty spread everywhere. A modest endeavor to uplift marginalized communities.",

  // Real Donation Accounts extracted from official poster (activity-1.jpeg)
  donationAccounts: {
    bkash: {
      number: "01786743802",
      recipientBn: "চিত্র রায় (Chitra Roy)",
      recipientEn: "Chitra Roy",
      typeBn: "পার্সোনাল (Send Money)",
      typeEn: "Personal (Send Money)",
      qrImage: "/images/activity-1.jpeg"
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
      number: "017805557325",
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
      tagBn: "রক্তদান কর্মসূচি",
      tagEn: "Blood Donation",
      type: "blood",
      titleBn: "জরুরি রক্তদান ও স্বেচ্ছায় রক্তদাতা তালিকাভুক্তকরণ কর্মসূচি",
      titleEn: "Emergency Blood Support & Voluntary Blood Donor Registration",
      dateBn: "সার্বক্ষণিক",
      dateEn: "24/7 Active",
      descBn: "ফুলবাড়ী ও দিনাজপুর অঞ্চলে মুমূর্ষু রোগীদের জরুরি রক্তের প্রয়োজনে রক্তদাতা সমন্বয় এবং তরুণদের রক্তদাতা হিসেবে নিবন্ধন কার্যক্রম চলমান রয়েছে।",
      descEn: "Coordinating voluntary blood donors for emergency patients in Phulbari & Dinajpur. Register today as a lifesaving donor.",
      formLink: "#blood-donation",
      active: true,
    }
  ],

  // Curated gallery with all girls blurred for privacy & authentic captions
  galleryImages: [
    {
      id: 1,
      src: "/images/official-banner.jpg",
      titleBn: "জনকল্যাণে আমাদের পথচলা — জনতা দেশবন্ধু ফাউন্ডেশনের অফিসিয়াল ব্যানার",
      titleEn: "Official Banner of Janata-Deshbondhu Foundation",
      category: "events"
    },
    {
      id: 2,
      src: "/images/activity-22.jpeg",
      titleBn: "সরস্বতীপুর শ্রীরামপুর উচ্চ বিদ্যালয় প্রাঙ্গণে শিক্ষার্থীদের সাথে ফাউন্ডেশন টিম",
      titleEn: "Foundation team with students at Saraswatipur Srirampur High School, Phulbari",
      category: "education"
    },
    {
      id: 3,
      src: "/images/activity-4.jpeg",
      titleBn: "ক্লাসরুমে শিক্ষার্থীর হাতে শিক্ষা উপকরণ ও খাতা তুলে দিচ্ছেন শিক্ষক ও ভলান্টিয়ারবৃন্দ",
      titleEn: "Teachers and volunteers presenting study materials to a student",
      category: "education"
    },
    {
      id: 4,
      src: "/images/activity-25.jpeg",
      titleBn: "শিক্ষামূলক দিকনির্দেশনা ও শিক্ষার্থীদের মাঝে কলম ও শিক্ষা সামগ্রী বিতরণ",
      titleEn: "Educational guidance and distribution of pens to students",
      category: "education"
    },
    {
      id: 5,
      src: "/images/activity-28.jpeg",
      titleBn: "ফুলবাড়ীতে কিশোর শিক্ষার্থীদের উৎসাহ প্রদান ও শিক্ষা উপহার বিতরণ",
      titleEn: "Encouraging young learners with educational gifts in Phulbari",
      category: "education"
    },
    {
      id: 6,
      src: "/images/activity-15.jpeg",
      titleBn: "শ্রেণিকক্ষে ফ্রি ইংরেজি ও গণিত বেসিক ক্লাসের ওরিয়েন্টেশন সেশন",
      titleEn: "Classroom orientation session for Free English & Math Foundation Class",
      category: "education"
    },
    {
      id: 7,
      src: "/images/activity-30.jpeg",
      titleBn: "বৃক্ষরোপণ কর্মসূচি — চারা গাছ হাতে ফাউন্ডেশনের স্বেচ্ছাসেবক দল",
      titleEn: "Tree plantation campaign by foundation volunteers",
      category: "plantation"
    },
    {
      id: 8,
      src: "/images/activity-31.jpeg",
      titleBn: "সবুজ গ্রাম গড়ার লক্ষ্যে সড়ক ও বিদ্যালয় প্রাঙ্গণে বৃক্ষরোপণ অভিযান",
      titleEn: "Roadside and campus tree plantation drive for a greener village",
      category: "plantation"
    },
    {
      id: 9,
      src: "/images/activity-32.jpeg",
      titleBn: "পরিবেশ রক্ষায় বৃক্ষরোপণ ও জনসচেতনতা কর্মসূচি",
      titleEn: "Environmental conservation and tree plantation awareness program",
      category: "plantation"
    },
    {
      id: 10,
      src: "/images/activity-14.jpeg",
      titleBn: "এস. শ্রীরামপুর উচ্চ বিদ্যালয় গেটে বৃক্ষের চারা হাতে ভলান্টিয়ার",
      titleEn: "Volunteer with tree saplings at S. Srirampur High School gate",
      category: "plantation"
    },
    {
      id: 11,
      src: "/images/activity-17.jpeg",
      titleBn: "বিদ্যালয় প্রাঙ্গণে রোপণের জন্য ফলজ ও বনজ চারা বিতরণ",
      titleEn: "Saplings ready for plantation at school campus",
      category: "plantation"
    },
    {
      id: 12,
      src: "/images/activity-12.jpeg",
      titleBn: "একাডেমিক ভবনের সামনে শিক্ষক, মুরব্বি ও স্বেচ্ছাসেবীদের সম্মিলিত ছবি",
      titleEn: "Group photo with teachers, community elders, and volunteers in front of Academic Building",
      category: "events"
    },
    {
      id: 13,
      src: "/images/activity-6.jpeg",
      titleBn: "ফ্রি বেসিক ক্লাস শেষে শিক্ষক ও ফাউন্ডেশন সদস্যদের মিলনমেলা",
      titleEn: "Teachers and foundation members after foundation class session",
      category: "events"
    },
    {
      id: 14,
      src: "/images/activity-2.jpeg",
      titleBn: "মেধাবী শিক্ষার্থীদের মাঝে শিক্ষাসামগ্রী ও পুরস্কার বিতরণ মুহূর্ত",
      titleEn: "Distribution of educational notebooks & awards",
      category: "education"
    },
    {
      id: 15,
      src: "/images/activity-21.jpeg",
      titleBn: "হোয়াইটবোর্ডে ইংরেজি গ্রামার ও বেসিক গণিতের ব্যবহারিক পাঠদান",
      titleEn: "Practical classroom teaching on whiteboard",
      category: "education"
    },
    {
      id: 16,
      src: "/images/activity-1.jpeg",
      titleBn: "ফান্ডে অনুদান পাঠানোর অফিসিয়াল মাধ্যম ও নির্দেশনা পোস্টার",
      titleEn: "Official donation channels & instruction poster",
      category: "events"
    }
  ]
};
