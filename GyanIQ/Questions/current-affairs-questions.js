const QUESTIONS = [
  // ── GENERAL ──
  {id:'ca_0001',cat:'general',diff:'easy',q:'Bharat ka Rashtriya Pashu (National Animal) kaun sa hai?',opts:['Bagh (Tiger)', 'Sher', 'Hathi', 'Gaay'],ans:'Bagh (Tiger)',src:'General Knowledge',year:2024},
  {id:'ca_0002',cat:'general',diff:'easy',q:'Bharat mein sabse lambi nadi kaun si hai?',opts:['Ganga', 'Yamuna', 'Brahmaputra', 'Narmada'],ans:'Ganga',src:'Indian Geography',year:2024},
  {id:'ca_0003',cat:'general',diff:'easy',q:'UPSC ka poora naam kya hai?',opts:['Union Public Service Commission', 'United Public Service Council', 'Union Personnel Service Commission', 'United Provincial Service Commission'],ans:'Union Public Service Commission',src:'UPSC Basics',year:2024},
  {id:'ca_0004',cat:'general',diff:'easy',q:'Bharat ka sabse bada rajya (area ke hisaab se) kaun sa hai?',opts:['Rajasthan', 'Madhya Pradesh', 'Maharashtra', 'Uttar Pradesh'],ans:'Rajasthan',src:'Indian Geography',year:2024},
  {id:'ca_0005',cat:'general',diff:'easy',q:'IAS officers ki training kis academy mein hoti hai?',opts:['Lal Bahadur Shastri National Academy of Administration (LBSNAA)', 'National Defence Academy', 'Indian Institute of Public Administration', 'Sardar Vallabhbhai Patel Academy'],ans:'Lal Bahadur Shastri National Academy of Administration (LBSNAA)',src:'UPSC Basics',year:2024},
  {id:'ca_0006',cat:'general',diff:'easy',q:'Bharat ka Rashtriya Phool (National Flower) kaun sa hai?',opts:['Kamal (Lotus)', 'Gulab', 'Sunflower', 'Champa'],ans:'Kamal (Lotus)',src:'Indian Symbols',year:2026},
  {id:'ca_0007',cat:'general',diff:'easy',q:'Bharat ka Rashtriya Pakshi (National Bird) kaun sa hai?',opts:['Mor (Peacock)', 'Tota', 'Kauwa', 'Bulbul'],ans:'Mor (Peacock)',src:'Indian Symbols',year:2026},
  {id:'ca_0008',cat:'general',diff:'easy',q:'Bharat ka Rashtriya Ped (National Tree) kaun sa hai?',opts:['Bargad (Banyan)', 'Peepal', 'Neem', 'Aam'],ans:'Bargad (Banyan)',src:'Indian Symbols',year:2026},
  {id:'ca_0009',cat:'general',diff:'easy',q:'Bharat ka Rashtriya Phal (National Fruit) kaun sa hai?',opts:['Aam (Mango)', 'Kela', 'Seb', 'Anaar'],ans:'Aam (Mango)',src:'Indian Symbols',year:2026},
  {id:'ca_0010',cat:'general',diff:'medium',q:'Bharat ka sabse chhota rajya (area ke hisaab se) kaun sa hai?',opts:['Goa', 'Sikkim', 'Tripura', 'Nagaland'],ans:'Goa',src:'Indian Geography',year:2026},
  {id:'ca_0011',cat:'general',diff:'easy',q:'Bharat mein kitne Union Territories hain?',opts:['8', '7', '9', '6'],ans:'8',src:'Indian Geography',year:2026},
  {id:'ca_0012',cat:'general',diff:'medium',q:'Bharat mein kitne rajya hain?',opts:['28', '29', '27', '30'],ans:'28',src:'Indian Geography',year:2026},
  {id:'ca_0013',cat:'general',diff:'easy',q:'Bharat ka sabse ooncha parvat shikhar kaun sa hai?',opts:['Kanchenjunga', 'Nanda Devi', 'Kamet', 'Everest'],ans:'Kanchenjunga',src:'Indian Geography',year:2026},
  {id:'ca_0014',cat:'general',diff:'medium',q:'Bharat ki sabse lambi tatiya rekha (coastline) kis rajya mein hai?',opts:['Gujarat', 'Tamil Nadu', 'Andhra Pradesh', 'Maharashtra'],ans:'Gujarat',src:'Indian Geography',year:2026},
  {id:'ca_0015',cat:'general',diff:'easy',q:'Bharat ka sabse bada registan kaun sa hai?',opts:['Thar', 'Kutch', 'Rann', 'Ladakh'],ans:'Thar',src:'Indian Geography',year:2026},
  {id:'ca_0016',cat:'general',diff:'medium',q:'India Gate kahan sthit hai?',opts:['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],ans:'New Delhi',src:'Indian Monuments',year:2026},
  {id:'ca_0017',cat:'general',diff:'easy',q:'Taj Mahal kis shahar mein hai?',opts:['Agra', 'Delhi', 'Jaipur', 'Lucknow'],ans:'Agra',src:'Indian Monuments',year:2026},
  {id:'ca_0018',cat:'general',diff:'hard',q:'Bharat ka sabse purana raashtriya udyan (national park) kaun sa hai?',opts:['Jim Corbett National Park', 'Kaziranga', 'Gir', 'Sundarbans'],ans:'Jim Corbett National Park',src:'Indian Wildlife',year:2026},
  {id:'ca_0019',cat:'general',diff:'medium',q:'Bharat ka sabse bada jheel (lake) kaun sa hai?',opts:['Vembanad Lake', 'Chilika Lake', 'Dal Lake', 'Wular Lake'],ans:'Vembanad Lake',src:'Indian Geography',year:2026},
  {id:'ca_0020',cat:'general',diff:'easy',q:'Bharat mein sabse zyada abaadi wala rajya kaun sa hai?',opts:['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal'],ans:'Uttar Pradesh',src:'Indian Demographics',year:2026},

  // ── POLITICS ──
  {id:'ca_0021',cat:'politics',diff:'easy',q:'Bharatiya Samvidhan ko kab lagu kiya gaya tha?',opts:['26 January 1950', '15 August 1947', '26 November 1949', '2 October 1948'],ans:'26 January 1950',src:'Indian Constitution',year:2024},
  {id:'ca_0022',cat:'politics',diff:'easy',q:'Lok Sabha ke sadasyon ka karyakaal kitne saal ka hota hai?',opts:['5 saal', '4 saal', '6 saal', '3 saal'],ans:'5 saal',src:'Indian Polity',year:2024},
  {id:'ca_0023',cat:'politics',diff:'easy',q:'Bharat ke Rashtrapati ka chunav kaun karta hai?',opts:['Electoral College (Sansad + Vidhan Sabha sadasya)', 'Aam Janta', 'Lok Sabha ke sadasya', 'Supreme Court'],ans:'Electoral College (Sansad + Vidhan Sabha sadasya)',src:'Indian Polity',year:2024},
  {id:'ca_0024',cat:'politics',diff:'easy',q:'Bharatiya Samvidhan ka janak (Father of Indian Constitution) kise kaha jaata hai?',opts:['Dr. B.R. Ambedkar', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel'],ans:'Dr. B.R. Ambedkar',src:'Indian Constitution',year:2024},
  {id:'ca_0025',cat:'politics',diff:'easy',q:'Bharatiya Samvidhan mein kul kitne Fundamental Rights (Moolbhoot Adhikar) diye gaye hain?',opts:['6', '5', '7', '8'],ans:'6',src:'Indian Constitution',year:2024},
  {id:'ca_0026',cat:'politics',diff:'easy',q:'2025 mein India ke Prime Minister kaun hain?',opts:['Narendra Modi', 'Rahul Gandhi', 'Amit Shah', 'Yogi Adityanath'],ans:'Narendra Modi',src:'Indian Politics',year:2025},
  {id:'ca_0027',cat:'politics',diff:'easy',q:'2024 Lok Sabha elections mein kaunsi party ne majority se jeeta?',opts:['BJP-led NDA', 'Congress-led INDIA', 'AAP', 'TMC'],ans:'BJP-led NDA',src:'Lok Sabha 2024',year:2024},
  {id:'ca_0028',cat:'politics',diff:'medium',q:'18vi Lok Sabha ke Speaker kaun chune gaye?',opts:['Om Birla', 'Rahul Gandhi', 'Amit Shah', 'Rajnath Singh'],ans:'Om Birla',src:'Lok Sabha 2024',year:2024},
  {id:'ca_0029',cat:'politics',diff:'medium',q:'November 2024 mein Maharashtra ke saath kaun se state mein chunav hue?',opts:['Jharkhand', 'Bihar', 'Rajasthan', 'Gujarat'],ans:'Jharkhand',src:'State Elections 2024',year:2024},
  {id:'ca_0030',cat:'politics',diff:'medium',q:'Maharashtra Assembly Elections 2024 mein kaun jeeta?',opts:['Mahayuti Alliance', 'MVA Alliance', 'Akela BJP', 'Congress'],ans:'Mahayuti Alliance',src:'Maharashtra Chunav',year:2024},
  {id:'ca_0031',cat:'politics',diff:'hard',q:'Article 370 hatane ke liye kaun sa Article use kiya gaya tha?',opts:['Article 367', 'Article 371', 'Article 356', 'Article 352'],ans:'Article 367',src:'Indian Constitution',year:2024},
  {id:'ca_0032',cat:'politics',diff:'easy',q:'India ki current Rashtrapati kaun hain?',opts:['Droupadi Murmu', 'Ram Nath Kovind', 'Pratibha Patil', 'APJ Abdul Kalam'],ans:'Droupadi Murmu',src:'Indian Politics',year:2025},
  {id:'ca_0033',cat:'politics',diff:'medium',q:'India ka 29va State kaun sa bana?',opts:['Telangana', 'Jharkhand', 'Chhattisgarh', 'Uttarakhand'],ans:'Telangana',src:'Indian States',year:2024},
  {id:'ca_0034',cat:'politics',diff:'hard',q:'2024 Lok Sabha mein NDA ko kitni seats mili?',opts:['293', '315', '272', '350'],ans:'293',src:'Lok Sabha 2024',year:2024},
  {id:'ca_0035',cat:'politics',diff:'medium',q:'India ke current Home Minister kaun hain?',opts:['Amit Shah', 'Rajnath Singh', 'S. Jaishankar', 'Nirmala Sitharaman'],ans:'Amit Shah',src:'Indian Cabinet',year:2025},
  {id:'ca_0036',cat:'politics',diff:'hard',q:'2025 Delhi Assembly Elections kaun jeeta?',opts:['BJP', 'AAP', 'Congress', 'JDU'],ans:'BJP',src:'Delhi Chunav 2025',year:2025},
  {id:'ca_0037',cat:'politics',diff:'easy',q:'Uttar Pradesh ke current Chief Minister kaun hain?',opts:['Yogi Adityanath', 'Akhilesh Yadav', 'Mayawati', 'Rajnath Singh'],ans:'Yogi Adityanath',src:'State Politics',year:2025},
  {id:'ca_0038',cat:'politics',diff:'medium',q:'India 2023 mein kaun se group ka full member bana?',opts:['SCO', 'NATO', 'BRICS', 'G7'],ans:'SCO',src:'International Politics',year:2024},
  {id:'ca_0039',cat:'politics',diff:'hard',q:'OBCs ko local bodies mein reservation kis Constitutional Amendment se mila?',opts:['105va Amendment', '102va Amendment', '100va Amendment', '107va Amendment'],ans:'105va Amendment',src:'Constitution',year:2024},
  {id:'ca_0040',cat:'politics',diff:'medium',q:'India ke current External Affairs Minister kaun hain?',opts:['S. Jaishankar', 'Amit Shah', 'Rajnath Singh', 'Nirmala Sitharaman'],ans:'S. Jaishankar',src:'Indian Cabinet',year:2025},

  // ── SCHEMES ──
  {id:'ca_0041',cat:'schemes',diff:'easy',q:'PM Vishwakarma Scheme kis varg ke logon ke liye hai?',opts:['Paramparik karigar aur shilpkar', 'Kisan', 'Students', 'Mahila udyami'],ans:'Paramparik karigar aur shilpkar',src:'Sarkar Yojanayen',year:2024},
  {id:'ca_0042',cat:'schemes',diff:'easy',q:'PMGKAY ka pura naam kya hai?',opts:['Pradhan Mantri Garib Kalyan Anna Yojana', 'PM Garib Kalyan Awas Yojana', 'PM Gram Kalyan Awas Yojana', 'PM Gramin Kalyan Abhiyan'],ans:'Pradhan Mantri Garib Kalyan Anna Yojana',src:'Sarkar Yojanayen',year:2024},
  {id:'ca_0043',cat:'schemes',diff:'medium',q:'PM Surya Ghar Muft Bijli Yojana mein kitni free units milti hain?',opts:['300 units', '200 units', '500 units', '100 units'],ans:'300 units',src:'Sarkar Yojanayen 2024',year:2024},
  {id:'ca_0044',cat:'schemes',diff:'medium',q:'Garib parivaron ko 5 lakh rupaye tak ka health coverage kaun si scheme deti hai?',opts:['Ayushman Bharat', 'PM Swasthya', 'Jan Arogya', 'Sehat Yojana'],ans:'Ayushman Bharat',src:'Health Yojanayen',year:2024},
  {id:'ca_0045',cat:'schemes',diff:'hard',q:'PM-KISAN scheme mein kisan ko saal mein kitni raashi milti hai?',opts:['₹6,000', '₹5,000', '₹8,000', '₹10,000'],ans:'₹6,000',src:'Krishi Yojanayen',year:2024},
  {id:'ca_0046',cat:'schemes',diff:'easy',q:'Pradhan Mantri Awas Yojana ka lakshya kya hai?',opts:['Sabko ghar', 'Muft khana', 'Education loan', 'Health insurance'],ans:'Sabko ghar',src:'Sarkar Yojanayen',year:2024},
  {id:'ca_0047',cat:'schemes',diff:'medium',q:'India ki semiconductor industry boost karne ke liye kaun si scheme launch hui?',opts:['India Semiconductor Mission', 'Make in India Chips', 'Silicon India', 'Digital Bharat Chip'],ans:'India Semiconductor Mission',src:'Technology Yojanayen',year:2024},
  {id:'ca_0048',cat:'schemes',diff:'hard',q:'Agnipath scheme mein sainik kitne saal ke liye bharti hote hain?',opts:['4 saal', '3 saal', '5 saal', '2 saal'],ans:'4 saal',src:'Raksha Yojanayen',year:2024},
  {id:'ca_0049',cat:'schemes',diff:'medium',q:'Jal Jeevan Mission sabhi gramin gharon mein nal ka paani kab tak dene ka lakshya hai?',opts:['2024', '2025', '2026', '2030'],ans:'2024',src:'Sarkar Yojanayen',year:2024},
  {id:'ca_0050',cat:'schemes',diff:'easy',q:'MUDRA ka pura naam kya hai?',opts:['Micro Units Development and Refinance Agency', 'Micro Urban Development Rural Authority', 'Multiple Unit Development Refinance Agency', 'Micro Unified Development Regulation Agency'],ans:'Micro Units Development and Refinance Agency',src:'Banking Yojanayen',year:2024},
  {id:'ca_0051',cat:'schemes',diff:'medium',q:'PM Gati Shakti scheme kis cheez se related hai?',opts:['Multi-modal connectivity infrastructure', 'Shiksha sudhar', 'Swasthya', 'Krishi'],ans:'Multi-modal connectivity infrastructure',src:'Infrastructure Yojanayen',year:2024},
  {id:'ca_0052',cat:'schemes',diff:'hard',q:'National Hydrogen Mission ka 2030 tak green hydrogen production target kya hai?',opts:['5 MMT', '3 MMT', '10 MMT', '7 MMT'],ans:'5 MMT',src:'Urja Yojanayen',year:2024},
  {id:'ca_0053',cat:'schemes',diff:'easy',q:'Beti Bachao Beti Padhao scheme kab launch hui thi?',opts:['2015', '2014', '2016', '2017'],ans:'2015',src:'Sarkar Yojanayen',year:2026},
  {id:'ca_0054',cat:'schemes',diff:'medium',q:'Swachh Bharat Mission kab launch hua tha?',opts:['2 October 2014', '15 August 2014', '26 January 2015', '1 January 2015'],ans:'2 October 2014',src:'Sarkar Yojanayen',year:2026},
  {id:'ca_0055',cat:'schemes',diff:'easy',q:'Digital India campaign ka mukhya lakshya kya hai?',opts:['Sarkari services ko digitally accessible banana', 'Sirf internet speed badhana', 'Mobile banking', 'Cashless economy'],ans:'Sarkari services ko digitally accessible banana',src:'Digital Yojanayen',year:2026},
  {id:'ca_0056',cat:'schemes',diff:'medium',q:'Skill India Mission ka lakshya kya hai?',opts:['Yuvao ko rozgar ke liye skilled banana', 'Sirf college education', 'Foreign education', 'Sirf IT training'],ans:'Yuvao ko rozgar ke liye skilled banana',src:'Skill Yojanayen',year:2026},
  {id:'ca_0057',cat:'schemes',diff:'hard',q:'Atal Pension Yojana kis varg ke logon ke liye hai?',opts:['Asangathit kshetra ke workers', 'Sirf government employees', 'Sirf students', 'Sirf mahila udyami'],ans:'Asangathit kshetra ke workers',src:'Pension Yojanayen',year:2026},
  {id:'ca_0058',cat:'schemes',diff:'medium',q:'Stand Up India scheme kis varg ko loan facilitate karti hai?',opts:['SC/ST aur mahila entrepreneurs', 'Sirf kisan', 'Sirf students', 'Sirf senior citizens'],ans:'SC/ST aur mahila entrepreneurs',src:'Business Yojanayen',year:2026},
  {id:'ca_0059',cat:'schemes',diff:'easy',q:'Ujjwala Yojana kis cheez se related hai?',opts:['Garib parivaron ko LPG connection', 'Bijli connection', 'Paani connection', 'Internet connection'],ans:'Garib parivaron ko LPG connection',src:'Sarkar Yojanayen',year:2026},
  {id:'ca_0060',cat:'schemes',diff:'medium',q:'Fasal Bima Yojana ka pura naam kya hai?',opts:['Pradhan Mantri Fasal Bima Yojana', 'Kisan Suraksha Yojana', 'Krishi Bima Yojana', 'Fasal Suraksha Yojana'],ans:'Pradhan Mantri Fasal Bima Yojana',src:'Krishi Yojanayen',year:2026},

  // ── BUDGET ──
  {id:'ca_0061',cat:'budget',diff:'easy',q:'Union Budget 2024-25 kisne pesh kiya?',opts:['Nirmala Sitharaman', 'Piyush Goyal', 'Arun Jaitley', 'Pranab Mukherjee'],ans:'Nirmala Sitharaman',src:'Budget 2024-25',year:2024},
  {id:'ca_0062',cat:'budget',diff:'medium',q:'Union Budget 2024-25 mein fiscal deficit target kya rakha gaya?',opts:['4.9% of GDP', '5.1% of GDP', '4.5% of GDP', '5.5% of GDP'],ans:'4.9% of GDP',src:'Budget 2024-25',year:2024},
  {id:'ca_0063',cat:'budget',diff:'hard',q:'Union Budget 2024-25 mein capital expenditure kitna tha?',opts:['₹11.11 lakh crore', '₹10 lakh crore', '₹12 lakh crore', '₹9 lakh crore'],ans:'₹11.11 lakh crore',src:'Budget 2024-25',year:2024},
  {id:'ca_0064',cat:'budget',diff:'medium',q:'Budget 2024-25 mein new tax regime ke under standard deduction kitni ho gayi?',opts:['₹75,000', '₹50,000', '₹1,00,000', '₹60,000'],ans:'₹75,000',src:'Budget 2024-25',year:2024},
  {id:'ca_0065',cat:'budget',diff:'easy',q:'Budget 2024-25 mein madhyam varg ke liye kaun sa shabd use kiya gaya?',opts:['Purvodaya', 'Amrit Kaal', 'Sankalp', 'Viksit'],ans:'Purvodaya',src:'Budget 2024-25',year:2024},
  {id:'ca_0066',cat:'budget',diff:'hard',q:'Union Budget 2024-25 mein kul kharch kitna tha?',opts:['₹48.21 lakh crore', '₹45 lakh crore', '₹50 lakh crore', '₹42 lakh crore'],ans:'₹48.21 lakh crore',src:'Budget 2024-25',year:2024},
  {id:'ca_0067',cat:'budget',diff:'medium',q:'Budget 2024-25 mein Agriculture sector ka allocation lagbhag kitna tha?',opts:['₹1.52 lakh crore', '₹1 lakh crore', '₹2 lakh crore', '₹1.8 lakh crore'],ans:'₹1.52 lakh crore',src:'Budget 2024-25',year:2024},
  {id:'ca_0068',cat:'budget',diff:'hard',q:'Budget 2024 mein listed equities par LTCG tax kitna kiya gaya?',opts:['12.5%', '10%', '15%', '20%'],ans:'12.5%',src:'Budget 2024-25',year:2024},
  {id:'ca_0069',cat:'budget',diff:'medium',q:'Interim budget 2024 kab pesh kiya gaya?',opts:['1 February 2024', '1 February 2023', '15 March 2024', '31 January 2024'],ans:'1 February 2024',src:'Budget 2024',year:2024},
  {id:'ca_0070',cat:'budget',diff:'hard',q:'Angel tax kaun se union budget mein khatam kiya gaya?',opts:['Budget 2024-25', 'Budget 2023-24', 'Budget 2022-23', 'Budget 2025-26'],ans:'Budget 2024-25',src:'Budget 2024-25',year:2024},
  {id:'ca_0071',cat:'budget',diff:'easy',q:'Union Budget 2026-27 kab pesh kiya gaya?',opts:['1 February 2026', '1 February 2025', '15 March 2026', '31 January 2026'],ans:'1 February 2026',src:'Budget 2026-27',year:2026},
  {id:'ca_0072',cat:'budget',diff:'medium',q:'Budget 2026-27 Nirmala Sitharaman ka kaunsa consecutive budget tha?',opts:['9va', '8va', '7va', '10va'],ans:'9va',src:'Budget 2026-27',year:2026},
  {id:'ca_0073',cat:'budget',diff:'medium',q:'Budget 2026-27 mein capital expenditure kitna rakha gaya?',opts:['₹12.2 lakh crore', '₹11.11 lakh crore', '₹10 lakh crore', '₹13 lakh crore'],ans:'₹12.2 lakh crore',src:'Budget 2026-27',year:2026},
  {id:'ca_0074',cat:'budget',diff:'hard',q:'Budget 2026-27 mein fiscal deficit ka target FY27 ke liye kya rakha gaya?',opts:['4.3% of GDP', '4.9% of GDP', '3.9% of GDP', '5.1% of GDP'],ans:'4.3% of GDP',src:'Budget 2026-27',year:2026},
  {id:'ca_0075',cat:'budget',diff:'medium',q:'Budget 2026-27 mein defence allocation kitna kiya gaya?',opts:['₹7.85 lakh crore', '₹6.81 lakh crore', '₹8.5 lakh crore', '₹5 lakh crore'],ans:'₹7.85 lakh crore',src:'Budget 2026-27',year:2026},
  {id:'ca_0076',cat:'budget',diff:'hard',q:'Budget 2026-27 mein Semiconductor Mission ka naya version kya launch hua?',opts:['ISM 2.0', 'ISM 3.0', 'Chip India 2.0', 'Semicon Bharat'],ans:'ISM 2.0',src:'Budget 2026-27',year:2026},
  {id:'ca_0077',cat:'budget',diff:'medium',q:'Budget 2026-27 mein Biopharma manufacturing ke liye kaun si initiative announce hui?',opts:['Biopharma Shakti (₹10,000 crore)', 'Pharma Mission', 'Health Shakti', 'Medi Bharat'],ans:'Biopharma Shakti (₹10,000 crore)',src:'Budget 2026-27',year:2026},
  {id:'ca_0078',cat:'budget',diff:'hard',q:'Budget 2026-27 mein rare-earth manufacturing corridors kin 4 rajyon mein banenge?',opts:['Odisha, Kerala, Andhra Pradesh, Tamil Nadu', 'Gujarat, Rajasthan, MP, UP', 'Maharashtra, Karnataka, Goa, Kerala', 'Bihar, Jharkhand, WB, Odisha'],ans:'Odisha, Kerala, Andhra Pradesh, Tamil Nadu',src:'Budget 2026-27',year:2026},
  {id:'ca_0079',cat:'budget',diff:'medium',q:'Budget 2026-27 ke hisaab se personal use ke liye import hone waale dutiable goods par tariff rate kitna kam kiya gaya?',opts:['20% se 10%', '15% se 5%', '25% se 15%', '30% se 20%'],ans:'20% se 10%',src:'Budget 2026-27',year:2026},
  {id:'ca_0080',cat:'budget',diff:'easy',q:'Budget 2026-27 kis theme/spirit se prerit tha, jaisa FM ne bataya?',opts:['Yuva Shakti', 'Amrit Kaal', 'Viksit Bharat', 'Sabka Vikas'],ans:'Yuva Shakti',src:'Budget 2026-27',year:2026},

  // ── ECONOMY ──
  {id:'ca_0081',cat:'economy',diff:'easy',q:'FY2024-25 mein India ki GDP growth rate ka anuman kya hai?',opts:['6.4%', '7.2%', '5.8%', '8.0%'],ans:'6.4%',src:'Economy',year:2025},
  {id:'ca_0082',cat:'economy',diff:'hard',q:'RBI ka CPI inflation target kya hai?',opts:['4% ± 2%', '3% ± 1%', '5% ± 2%', '6% ± 2%'],ans:'4% ± 2%',src:'RBI Mandate',year:2024},
  {id:'ca_0083',cat:'economy',diff:'easy',q:'India duniya ka sabse bada producer kiska hai?',opts:['Doodh', 'Chawal', 'Gehun', 'Chini'],ans:'Doodh',src:'Krishi Economy',year:2024},
  {id:'ca_0084',cat:'economy',diff:'hard',q:'UDAN scheme ke under 2024 tak kitne airports operational ho gaye?',opts:['70+', '50+', '100+', '30+'],ans:'70+',src:'Aviation Economy',year:2024},
  {id:'ca_0085',cat:'economy',diff:'easy',q:'GDP ka pura naam kya hai?',opts:['Gross Domestic Product', 'Gross Direct Product', 'General Domestic Product', 'Gross Development Product'],ans:'Gross Domestic Product',src:'Economy Basics',year:2026},
  {id:'ca_0086',cat:'economy',diff:'medium',q:'2026 Union Budget ke document ke anusaar, 2025-26 mein India ki real GDP growth kitni anumanit ki gayi?',opts:['7.4%', '6.5%', '8.2%', '5.9%'],ans:'7.4%',src:'Union Budget 2026-27 (PIB)',year:2026},
  {id:'ca_0087',cat:'economy',diff:'hard',q:'Fiscal deficit kya darshata hai?',opts:['Sarkar ki income aur expenditure ke beech ka gap', 'Total tax collection', 'Export-import ka antar', 'GDP growth rate'],ans:'Sarkar ki income aur expenditure ke beech ka gap',src:'Economy Basics',year:2026},
  {id:'ca_0088',cat:'economy',diff:'easy',q:'Inflation kya hota hai?',opts:['Vastuo aur seva ki keemat mein overall vridhi', 'Keemat mein girawat', 'GDP mein vridhi', 'Berozgari mein vridhi'],ans:'Vastuo aur seva ki keemat mein overall vridhi',src:'Economy Basics',year:2026},
  {id:'ca_0089',cat:'economy',diff:'medium',q:'Repo rate kya darshata hai?',opts:['Rate jispar RBI commercial banks ko loan deta hai', 'Bank ka apna interest rate', 'Fixed deposit ka rate', 'Inflation rate'],ans:'Rate jispar RBI commercial banks ko loan deta hai',src:'RBI Basics',year:2026},
  {id:'ca_0090',cat:'economy',diff:'hard',q:'India ka Chief Economic Advisor (CEA) role kis mantralaya ke under aata hai?',opts:['Ministry of Finance', 'Ministry of Commerce', 'NITI Aayog', 'RBI'],ans:'Ministry of Finance',src:'Economy Structure',year:2026},
  {id:'ca_0091',cat:'economy',diff:'medium',q:'Fiscal year (vittiya varsh) India mein kab se kab tak hota hai?',opts:['1 April se 31 March', '1 January se 31 December', '1 July se 30 June', '1 October se 30 September'],ans:'1 April se 31 March',src:'Economy Basics',year:2026},
  {id:'ca_0092',cat:'economy',diff:'easy',q:'India ki currency ka naam kya hai?',opts:['Indian Rupee', 'Indian Dollar', 'Indian Pound', 'Indian Dinar'],ans:'Indian Rupee',src:'Economy Basics',year:2026},
  {id:'ca_0093',cat:'economy',diff:'hard',q:'GST kis saal se implement hui thi?',opts:['2017', '2016', '2018', '2015'],ans:'2017',src:'GST Basics',year:2026},
  {id:'ca_0094',cat:'economy',diff:'medium',q:'GST ka pura naam kya hai?',opts:['Goods and Services Tax', 'General Sales Tax', 'Government Service Tax', 'Gross Service Tax'],ans:'Goods and Services Tax',src:'GST Basics',year:2026},
  {id:'ca_0095',cat:'economy',diff:'easy',q:'Bharat duniya ka sabse bada exporter kis cheez ka hai?',opts:['IT services', 'Automobiles', 'Textiles', 'Electronics'],ans:'IT services',src:'Indian Economy',year:2026},
  {id:'ca_0096',cat:'economy',diff:'hard',q:'Disinvestment ka matlab kya hota hai?',opts:['Sarkar apne stake ko private sector ko bechti hai', 'Sarkar naya business shuru karti hai', 'Foreign investment lena', 'Loan lena'],ans:'Sarkar apne stake ko private sector ko bechti hai',src:'Economy Basics',year:2026},
  {id:'ca_0097',cat:'economy',diff:'medium',q:'NITI Aayog ne Planning Commission ki jagah kab li thi?',opts:['2015', '2014', '2016', '2017'],ans:'2015',src:'Economy Structure',year:2026},
  {id:'ca_0098',cat:'economy',diff:'hard',q:'MSME ka pura naam kya hai?',opts:['Micro, Small and Medium Enterprises', 'Major Small Manufacturing Entities', 'Medium Scale Manufacturing Enterprises', 'Micro Sector Manufacturing Entities'],ans:'Micro, Small and Medium Enterprises',src:'MSME Basics',year:2026},
  {id:'ca_0099',cat:'economy',diff:'medium',q:'India mein sabse zyada rozgar kis sector mein milta hai?',opts:['Agriculture', 'IT', 'Manufacturing', 'Banking'],ans:'Agriculture',src:'Indian Economy',year:2026},
  {id:'ca_0100',cat:'economy',diff:'easy',q:'Stock exchange mein NSE ka pura naam kya hai?',opts:['National Stock Exchange', 'National Securities Exchange', 'New Stock Exchange', 'National Share Exchange'],ans:'National Stock Exchange',src:'Share Market Basics',year:2026},

  // ── TAX ──
  {id:'ca_0101',cat:'tax',diff:'easy',q:'Budget 2024 mein new tax regime ke under tax rebate limit kya hai?',opts:['₹7 lakh', '₹5 lakh', '₹8 lakh', '₹10 lakh'],ans:'₹7 lakh',src:'Income Tax 2024',year:2024},
  {id:'ca_0102',cat:'tax',diff:'medium',q:'E-commerce operators par TDS rate 2024 mein kitna kiya gaya?',opts:['0.1%', '1%', '2%', '0.5%'],ans:'0.1%',src:'TDS Rules 2024',year:2024},
  {id:'ca_0103',cat:'tax',diff:'hard',q:'24 mahine se zyada rakhe unlisted shares par capital gains tax kitna hai?',opts:['12.5%', '20%', '10%', '15%'],ans:'12.5%',src:'Capital Gains Tax',year:2024},
  {id:'ca_0104',cat:'tax',diff:'easy',q:'Old regime mein basic income tax exemption limit kya hai?',opts:['₹2.5 lakh', '₹3 lakh', '₹5 lakh', '₹2 lakh'],ans:'₹2.5 lakh',src:'Income Tax',year:2024},
  {id:'ca_0105',cat:'tax',diff:'medium',q:'Section 80C mein maximum deduction limit kitni hai?',opts:['₹1.5 lakh', '₹1 lakh', '₹2 lakh', '₹2.5 lakh'],ans:'₹1.5 lakh',src:'Income Tax Deductions',year:2024},
  {id:'ca_0106',cat:'tax',diff:'hard',q:'New regime mein ₹15 lakh se upar income par tax rate kya hai?',opts:['30%', '25%', '20%', '35%'],ans:'30%',src:'New Tax Regime',year:2024},
  {id:'ca_0107',cat:'tax',diff:'medium',q:'Updated ITR (ITR-U) assessment year ke end se kitne saal mein file ho sakti hai?',opts:['2 saal', '1 saal', '3 saal', '5 saal'],ans:'2 saal',src:'ITR Filing',year:2024},
  {id:'ca_0108',cat:'tax',diff:'easy',q:'Income tax mein Faceless Assessment Scheme kyun launch ki gayi?',opts:['Transparency aur efficiency ke liye', 'Zyada tax collection ke liye', 'Filing simplify karne ke liye', 'Sab ke liye'],ans:'Transparency aur efficiency ke liye',src:'Income Tax Reform',year:2024},
  {id:'ca_0109',cat:'tax',diff:'hard',q:'Budget 2024 mein F&O par STT rate kitna kiya gaya?',opts:['0.02% on options', '0.01%', '0.05%', '0.1%'],ans:'0.02% on options',src:'STT Budget 2024',year:2024},
  {id:'ca_0110',cat:'tax',diff:'medium',q:'New tax regime mein salaried employees ke liye kaun si deduction milti hai?',opts:['Sirf Standard Deduction', '80C aur 80D', 'HRA', 'Sab deductions'],ans:'Sirf Standard Deduction',src:'New Tax Regime',year:2024},
  {id:'ca_0111',cat:'tax',diff:'easy',q:'GST kitne slabs mein divide hai (main rates)?',opts:['4 (5%,12%,18%,28%)', '3', '5', '6'],ans:'4 (5%,12%,18%,28%)',src:'GST Structure',year:2026},
  {id:'ca_0112',cat:'tax',diff:'medium',q:'Direct tax aur Indirect tax mein kya fark hai?',opts:['Direct tax income par lagta hai, Indirect tax kharch par', 'Dono same hain', 'Direct tax sirf companies par lagta hai', 'Indirect tax sirf imports par lagta hai'],ans:'Direct tax income par lagta hai, Indirect tax kharch par',src:'Tax Basics',year:2026},
  {id:'ca_0113',cat:'tax',diff:'hard',q:'TDS ka pura naam kya hai?',opts:['Tax Deducted at Source', 'Total Deduction System', 'Tax Distribution System', 'Tax Deferred Savings'],ans:'Tax Deducted at Source',src:'Tax Basics',year:2026},
  {id:'ca_0114',cat:'tax',diff:'easy',q:'PAN card ka pura naam kya hai?',opts:['Permanent Account Number', 'Personal Account Number', 'Public Account Number', 'Primary Account Number'],ans:'Permanent Account Number',src:'Tax Basics',year:2026},
  {id:'ca_0115',cat:'tax',diff:'medium',q:'Income Tax Department kis mantralaya ke under aata hai?',opts:['Ministry of Finance', 'Ministry of Commerce', 'Ministry of Home Affairs', 'NITI Aayog'],ans:'Ministry of Finance',src:'Tax Structure',year:2026},
  {id:'ca_0116',cat:'tax',diff:'hard',q:'Capital Gains Tax kis par lagta hai?',opts:['Asset bechne se hone waale profit par', 'Salary par', 'Business income par', 'Rent par'],ans:'Asset bechne se hone waale profit par',src:'Tax Basics',year:2026},
  {id:'ca_0117',cat:'tax',diff:'medium',q:'GSTN ka pura naam kya hai?',opts:['Goods and Services Tax Network', 'General Sales Tax Number', 'Government Services Tax Network', 'GST Notification'],ans:'Goods and Services Tax Network',src:'GST Basics',year:2026},
  {id:'ca_0118',cat:'tax',diff:'easy',q:'India mein Income Tax Return file karne ki last date generally kab hoti hai (non-audit cases)?',opts:['31 July', '31 March', '30 June', '31 December'],ans:'31 July',src:'Tax Basics',year:2026},
  {id:'ca_0119',cat:'tax',diff:'hard',q:'Advance Tax kya hota hai?',opts:['Saal ke dauraan pehle se estimate karke pay kiya gaya tax', 'Refund ka advance', 'Loan par tax', 'TDS ka doosra naam'],ans:'Saal ke dauraan pehle se estimate karke pay kiya gaya tax',src:'Tax Basics',year:2026},
  {id:'ca_0120',cat:'tax',diff:'medium',q:'CBDT ka pura naam kya hai?',opts:['Central Board of Direct Taxes', 'Central Bureau of Direct Tax', 'Central Board of Domestic Tax', 'Central Bureau of Direct Trade'],ans:'Central Board of Direct Taxes',src:'Tax Structure',year:2026},

  // ── BANKING ──
  {id:'ca_0121',cat:'banking',diff:'easy',q:'2026 mein RBI ka repo rate kya hai?',opts:['5.25%', '6.50%', '6.0%', '6.75%'],ans:'5.25%',src:'RBI Monetary Policy 2026',year:2026},
  {id:'ca_0122',cat:'banking',diff:'medium',q:'RBI ka digital currency CBDC pilot kya kehlata hai?',opts:['e-Rupee', 'Digital INR', 'CryptoRupee', 'eINR'],ans:'e-Rupee',src:'RBI CBDC',year:2024},
  {id:'ca_0123',cat:'banking',diff:'easy',q:'Kaun sa payment system 24×7 seconds mein fund transfer karta hai?',opts:['IMPS', 'NEFT', 'RTGS', 'Cheque'],ans:'IMPS',src:'Payment Systems',year:2024},
  {id:'ca_0124',cat:'banking',diff:'medium',q:'Small Finance Banks (SFB) ko kaun regulate karta hai?',opts:['RBI', 'SEBI', 'NABARD', 'Finance Ministry'],ans:'RBI',src:'Banking Regulation',year:2024},
  {id:'ca_0125',cat:'banking',diff:'hard',q:'2026 mein CRR (Cash Reserve Ratio) kitna hai?',opts:['4.0%', '4.25%', '3.00%', '3.75%'],ans:'3.00%',src:'RBI CRR 2026',year:2026},
  {id:'ca_0126',cat:'banking',diff:'medium',q:'2023 mein HDFC Bank ke saath kaun sa merge hua?',opts:['HDFC Ltd', 'Centurion Bank', 'Bank of Baroda', 'Yes Bank'],ans:'HDFC Ltd',src:'Bank Mergers',year:2024},
  {id:'ca_0127',cat:'banking',diff:'easy',q:'PMJDY ka pura naam kya hai?',opts:['Pradhan Mantri Jan-Dhan Yojana', 'Pradhan Mantri Jan-Dhaan Yojna', 'Pradhan Mantri Jal-Dhan Yojana', 'Pradhan Mantri Jaan-Dhan Yojana'],ans:'Pradhan Mantri Jan-Dhan Yojana',src:'Banking Schemes',year:2024},
  {id:'ca_0128',cat:'banking',diff:'hard',q:'India mein Universal Bank ke liye minimum capital requirement kya hai?',opts:['₹1,000 crore', '₹500 crore', '₹200 crore', '₹2,000 crore'],ans:'₹1,000 crore',src:'RBI Regulations',year:2024},
  {id:'ca_0129',cat:'banking',diff:'medium',q:'India Post Payments Bank apni banking services kahan deta hai?',opts:['Post offices', 'Mobile vans', 'Kiosks', 'Teeno jagah'],ans:'Teeno jagah',src:'IPPB',year:2024},
  {id:'ca_0130',cat:'banking',diff:'hard',q:'UPI 123 Pay kis ke liye bana hai?',opts:['Feature phone users ke liye', 'Visually impaired ke liye', 'Senior citizens ke liye', 'Sirf rural users ke liye'],ans:'Feature phone users ke liye',src:'UPI Innovation',year:2024},
  {id:'ca_0131',cat:'banking',diff:'easy',q:'Current RBI repo rate (2026) kya hai?',opts:['5.25%', '6.50%', '5.50%', '6.25%'],ans:'5.25%',src:'RBI Monetary Policy 2026',year:2026},
  {id:'ca_0132',cat:'banking',diff:'medium',q:'Current CRR (Cash Reserve Ratio) 2026 mein kitna hai?',opts:['3.00%', '4.00%', '4.50%', '3.75%'],ans:'3.00%',src:'RBI CRR 2026',year:2026},
  {id:'ca_0133',cat:'banking',diff:'hard',q:'RBI ke Monetary Policy Committee (MPC) mein kul kitne members hote hain?',opts:['6', '5', '7', '4'],ans:'6',src:'RBI MPC',year:2026},
  {id:'ca_0134',cat:'banking',diff:'easy',q:'RBI ki sthapna kab hui thi?',opts:['1935', '1947', '1950', '1930'],ans:'1935',src:'RBI History',year:2026},
  {id:'ca_0135',cat:'banking',diff:'medium',q:'NEFT ka pura naam kya hai?',opts:['National Electronic Funds Transfer', 'National Electronic Fund Transaction', 'New Electronic Funds Transfer', 'National Economic Funds Transfer'],ans:'National Electronic Funds Transfer',src:'Payment Systems',year:2026},
  {id:'ca_0136',cat:'banking',diff:'hard',q:'RTGS transactions ka minimum amount kitna hota hai?',opts:['₹2 lakh', '₹1 lakh', '₹50,000', 'No minimum'],ans:'₹2 lakh',src:'Payment Systems',year:2026},
  {id:'ca_0137',cat:'banking',diff:'easy',q:'NPA ka pura naam kya hai?',opts:['Non-Performing Asset', 'New Payment Account', 'National Payment Authority', 'Non-Payment Account'],ans:'Non-Performing Asset',src:'Banking Basics',year:2026},
  {id:'ca_0138',cat:'banking',diff:'medium',q:'India ka sabse bada public sector bank kaun sa hai?',opts:['State Bank of India', 'Punjab National Bank', 'Bank of Baroda', 'Canara Bank'],ans:'State Bank of India',src:'Banking Structure',year:2026},
  {id:'ca_0139',cat:'banking',diff:'hard',q:'Basel norms kis cheez se related hain?',opts:['International banking regulations (capital adequacy)', 'Sirf India ke banking rules', 'Tax rules', 'Stock market rules'],ans:'International banking regulations (capital adequacy)',src:'Banking Regulation',year:2026},
  {id:'ca_0140',cat:'banking',diff:'medium',q:'KYC ka pura naam kya hai?',opts:['Know Your Customer', 'Keep Your Cash', 'Know Your Credit', 'Keep Your Customer'],ans:'Know Your Customer',src:'Banking Basics',year:2026},

  // ── INTERNATIONAL ──
  {id:'ca_0141',cat:'international',diff:'easy',q:'2023 mein G20 summit kaun se desh ne host kiya?',opts:['India', 'South Africa', 'Brazil', 'Italy'],ans:'India',src:'G20 2023',year:2024},
  {id:'ca_0142',cat:'international',diff:'easy',q:'November 2024 US Presidential election kaun jeeta?',opts:['Donald Trump', 'Joe Biden', 'Kamala Harris', 'Ron DeSantis'],ans:'Donald Trump',src:'US Elections 2024',year:2024},
  {id:'ca_0143',cat:'international',diff:'medium',q:'2024 mein BRICS ka naya member kaun bana?',opts:['Saudi Arabia', 'Turkey', 'Iran', 'Egypt'],ans:'Saudi Arabia',src:'BRICS Expansion',year:2024},
  {id:'ca_0144',cat:'international',diff:'medium',q:'COP29 climate summit 2024 kahan hua?',opts:['Azerbaijan (Baku)', 'Dubai', 'Brazil', 'Germany'],ans:'Azerbaijan (Baku)',src:'Climate Summit',year:2024},
  {id:'ca_0145',cat:'international',diff:'hard',q:'India ki G20 Presidency ka theme kya tha?',opts:['One Earth One Family One Future', 'Sustainability for All', 'Together for Change', 'Global Unity'],ans:'One Earth One Family One Future',src:'G20 India',year:2024},
  {id:'ca_0146',cat:'international',diff:'easy',q:'Russia-Ukraine conflict kab shuru hua?',opts:['2022', '2021', '2023', '2020'],ans:'2022',src:'Global Affairs',year:2024},
  {id:'ca_0147',cat:'international',diff:'medium',q:'QUAD mein kaun se 4 desh hain?',opts:['USA India Japan Australia', 'USA India UK Australia', 'USA UK Japan India', 'USA India Japan Canada'],ans:'USA India Japan Australia',src:'QUAD',year:2024},
  {id:'ca_0148',cat:'international',diff:'hard',q:'India ne MQ-9B Predator drones kaun se desh se kharide?',opts:['USA', 'Israel', 'France', 'Russia'],ans:'USA',src:'Raksha International',year:2024},
  {id:'ca_0149',cat:'international',diff:'medium',q:'China ko pichhe karte hue duniya ki sabse zyada aabaadi wala desh kaun bana?',opts:['India', 'USA', 'Indonesia', 'Nigeria'],ans:'India',src:'World Population',year:2024},
  {id:'ca_0150',cat:'international',diff:'easy',q:'UN Secretary General kaun hain?',opts:['António Guterres', 'Ban Ki-moon', 'Kofi Annan', 'Tedros Adhanom'],ans:'António Guterres',src:'United Nations',year:2025},
  {id:'ca_0151',cat:'international',diff:'medium',q:'India-Middle East-Europe Corridor (IMEC) kahan announce kiya gaya?',opts:['G20 New Delhi', 'BRICS Johannesburg', 'SCO Summit', 'QUAD Meeting'],ans:'G20 New Delhi',src:'IMEC',year:2024},
  {id:'ca_0152',cat:'international',diff:'hard',q:'2024 mein India ne UN Security Council mein kaun se desh ke against vote se parhez kiya?',opts:['Russia', 'Israel', 'USA', 'China'],ans:'Russia',src:'UN Votes',year:2024},
  {id:'ca_0153',cat:'international',diff:'easy',q:'United Nations ka headquarters kahan hai?',opts:['New York', 'Geneva', 'Paris', 'London'],ans:'New York',src:'United Nations',year:2026},
  {id:'ca_0154',cat:'international',diff:'medium',q:'SAARC mein kul kitne member countries hain?',opts:['8', '7', '6', '9'],ans:'8',src:'SAARC',year:2026},
  {id:'ca_0155',cat:'international',diff:'easy',q:'WHO ka headquarters kahan hai?',opts:['Geneva', 'New York', 'Paris', 'Vienna'],ans:'Geneva',src:'World Health Organization',year:2026},
  {id:'ca_0156',cat:'international',diff:'hard',q:'G20 ke permanent members kitne hain?',opts:['19 desh + European Union + African Union', '20 desh', '18 desh', '19 desh'],ans:'19 desh + European Union + African Union',src:'G20',year:2026},
  {id:'ca_0157',cat:'international',diff:'medium',q:'BRICS naam kis countries se bana hai (original 5)?',opts:['Brazil, Russia, India, China, South Africa', 'Brazil, Russia, India, Canada, Spain', 'Britain, Russia, India, China, Spain', 'Brazil, Romania, India, China, Sweden'],ans:'Brazil, Russia, India, China, South Africa',src:'BRICS',year:2026},
  {id:'ca_0158',cat:'international',diff:'easy',q:'IMF ka pura naam kya hai?',opts:['International Monetary Fund', 'International Money Fund', 'Indian Monetary Fund', 'International Marketing Fund'],ans:'International Monetary Fund',src:'International Organizations',year:2026},
  {id:'ca_0159',cat:'international',diff:'hard',q:'World Bank aur IMF dono ka headquarters kis shahar mein hai?',opts:['Washington D.C.', 'New York', 'Geneva', 'London'],ans:'Washington D.C.',src:'International Organizations',year:2026},
  {id:'ca_0160',cat:'international',diff:'medium',q:'NATO ka pura naam kya hai?',opts:['North Atlantic Treaty Organization', 'New Atlantic Trade Organization', 'North American Treaty Org', 'National Atlantic Treaty Org'],ans:'North Atlantic Treaty Organization',src:'International Organizations',year:2026},

  // ── SPORTS ──
  {id:'ca_0161',cat:'sports',diff:'easy',q:'2024 Paris Olympics kahan hue?',opts:['Paris, France', 'Lyon, France', 'Marseille', 'Nice'],ans:'Paris, France',src:'Olympics 2024',year:2024},
  {id:'ca_0162',cat:'sports',diff:'easy',q:'Paris Olympics 2024 mein India ne kitne medals jeete?',opts:['6', '5', '7', '4'],ans:'6',src:'Olympics 2024',year:2024},
  {id:'ca_0163',cat:'sports',diff:'medium',q:'Paris Olympics 2024 mein Neeraj Chopra ne kaun sa medal jeeta?',opts:['Silver', 'Gold', 'Bronze', 'Medal nahi mila'],ans:'Silver',src:'Olympics 2024',year:2024},
  {id:'ca_0164',cat:'sports',diff:'easy',q:'ICC T20 World Cup 2024 ke final mein India ne kaun se desh ko haraya?',opts:['South Africa', 'England', 'Australia', 'Pakistan'],ans:'South Africa',src:'Cricket 2024',year:2024},
  {id:'ca_0165',cat:'sports',diff:'medium',q:'ICC T20 World Cup 2024 mein India ki captain kaun the?',opts:['Rohit Sharma', 'Virat Kohli', 'Hardik Pandya', 'Jasprit Bumrah'],ans:'Rohit Sharma',src:'Cricket 2024',year:2024},
  {id:'ca_0166',cat:'sports',diff:'hard',q:'Paris Olympics 2024 mein Manu Bhaker ne kaun se medals jeete?',opts:['Do Bronze medals', 'Gold aur Bronze', 'Silver aur Bronze', 'Do Silver medals'],ans:'Do Bronze medals',src:'Olympics 2024',year:2024},
  {id:'ca_0167',cat:'sports',diff:'medium',q:'ICC Champions Trophy 2025 India ke saath kaun se desh mein bhi hua?',opts:['Pakistan', 'Sri Lanka', 'Bangladesh', 'Afghanistan'],ans:'Pakistan',src:'Cricket 2025',year:2025},
  {id:'ca_0168',cat:'sports',diff:'easy',q:'FIFA World Cup 2022 kaun jeeta?',opts:['Argentina', 'France', 'Brazil', 'Germany'],ans:'Argentina',src:'FIFA 2022',year:2024},
  {id:'ca_0169',cat:'sports',diff:'hard',q:'India 2036 mein kaun si sports event host karega?',opts:['Olympics', 'FIFA World Cup', 'Commonwealth Games', 'Asian Games'],ans:'Olympics',src:'Olympics 2036',year:2024},
  {id:'ca_0170',cat:'sports',diff:'medium',q:'Virat Kohli ne Test cricket se retirement kab li?',opts:['2025', '2024', '2023', '2026'],ans:'2025',src:'Cricket 2025',year:2025},
  {id:'ca_0171',cat:'sports',diff:'easy',q:'2024 ka World Chess Champion kaun hai?',opts:['Gukesh D', 'Magnus Carlsen', 'Ian Nepomniachtchi', 'Fabiano Caruana'],ans:'Gukesh D',src:'Chess 2024',year:2024},
  {id:'ca_0172',cat:'sports',diff:'medium',q:'Gukesh D sabse kam umar mein World Chess Champion bane — woh umar kya thi?',opts:['18 saal', '17 saal', '19 saal', '20 saal'],ans:'18 saal',src:'Chess 2024',year:2024},
  {id:'ca_0173',cat:'sports',diff:'easy',q:'ICC Champions Trophy 2025 kisne jeeta?',opts:['India', 'New Zealand', 'Australia', 'Pakistan'],ans:'India',src:'Champions Trophy 2025',year:2025},
  {id:'ca_0174',cat:'sports',diff:'medium',q:'Champions Trophy 2025 final mein India ne kis desh ko haraya?',opts:['New Zealand', 'Pakistan', 'Australia', 'England'],ans:'New Zealand',src:'Champions Trophy 2025',year:2025},
  {id:'ca_0175',cat:'sports',diff:'hard',q:'Champions Trophy 2025 mein India ka yeh kaunsa title tha (overall)?',opts:['3ra', '2ra', '4tha', '1la'],ans:'3ra',src:'Champions Trophy 2025',year:2025},
  {id:'ca_0176',cat:'sports',diff:'medium',q:'Champions Trophy 2025 kin desho mein host hui (hybrid model)?',opts:['Pakistan aur UAE', 'Sirf Pakistan', 'India aur UAE', 'Sri Lanka aur Bangladesh'],ans:'Pakistan aur UAE',src:'Champions Trophy 2025',year:2025},
  {id:'ca_0177',cat:'sports',diff:'easy',q:'Cricket World Cup pehli baar kab khela gaya tha?',opts:['1975', '1970', '1980', '1983'],ans:'1975',src:'Cricket History',year:2026},
  {id:'ca_0178',cat:'sports',diff:'medium',q:'Olympic Games kitne saal mein ek baar hote hain?',opts:['4 saal', '2 saal', '5 saal', '3 saal'],ans:'4 saal',src:'Olympics Basics',year:2026},
  {id:'ca_0179',cat:'sports',diff:'hard',q:'Khel Ratna Award ka naam 2021 mein badalkar kya rakha gaya?',opts:['Major Dhyan Chand Khel Ratna', 'Rajiv Gandhi Khel Ratna', 'Indira Gandhi Khel Ratna', 'Sardar Patel Khel Ratna'],ans:'Major Dhyan Chand Khel Ratna',src:'Sports Awards',year:2026},
  {id:'ca_0180',cat:'sports',diff:'easy',q:'FIFA ka pura naam kya hai?',opts:['Fédération Internationale de Football Association', 'Federal International Football Association', 'French International Football Association', 'Federation of International Football Athletics'],ans:'Fédération Internationale de Football Association',src:'FIFA Basics',year:2026},

  // ── SCIENCE ──
  {id:'ca_0181',cat:'science',diff:'easy',q:'ISRO ka Chandrayaan-3 Chaand ke kis hisse par utara?',opts:['South Pole', 'North Pole', 'Near Side', 'Far Side'],ans:'South Pole',src:'ISRO 2023',year:2024},
  {id:'ca_0182',cat:'science',diff:'medium',q:'ISRO ka Aditya-L1 mission kiska adhyayan karta hai?',opts:['Surya', 'Mars', 'Jupiter', 'Asteroids'],ans:'Surya',src:'ISRO 2024',year:2024},
  {id:'ca_0183',cat:'science',diff:'hard',q:'India ka pehla homegrown 5G chipset kisne banaya?',opts:['CDOT', 'ISRO', 'IIT Bombay', 'BEL'],ans:'CDOT',src:'Technology 2024',year:2024},
  {id:'ca_0184',cat:'science',diff:'medium',q:'ISRO ke PSLV-C58 ne kaun sa space docking experiment launch kiya?',opts:['SpaDeX', 'DISHA', 'GSAT', 'RISAT'],ans:'SpaDeX',src:'ISRO 2024',year:2024},
  {id:'ca_0185',cat:'science',diff:'easy',q:'Meta ka 2024 mein GPT-4 se compete karne wala AI model kaun sa hai?',opts:['Llama 3', 'DALL-E 3', 'Gemini', 'Claude'],ans:'Llama 3',src:'AI Technology 2024',year:2024},
  {id:'ca_0186',cat:'science',diff:'hard',q:'India ka quantum computing mission kitne qubit computer ka target rakhta hai?',opts:['1000 qubit', '500 qubit', '50 qubit', '100 qubit'],ans:'1000 qubit',src:'Quantum Computing',year:2024},
  {id:'ca_0187',cat:'science',diff:'medium',q:'ISRO ka Venus mission kya kehlata hai?',opts:['Shukrayaan-1', 'VenusOrbit', 'Shukra-1', 'Venus Mission'],ans:'Shukrayaan-1',src:'ISRO Future Missions',year:2024},
  {id:'ca_0188',cat:'science',diff:'easy',q:'Google/Alphabet ke CEO kaun hain?',opts:['Sundar Pichai', 'Satya Nadella', 'Arvind Krishna', 'Shantanu Narayen'],ans:'Sundar Pichai',src:'Tech Leaders',year:2025},
  {id:'ca_0189',cat:'science',diff:'hard',q:'Nobel Prize in Physics 2024 kis kaam ke liye mila?',opts:['AI aur Neural Networks', 'Quantum Mechanics', 'Black Holes', 'Neutrinos'],ans:'AI aur Neural Networks',src:'Nobel 2024',year:2024},
  {id:'ca_0190',cat:'science',diff:'medium',q:'2024 mein duniya ka pehla AI-powered fighter jet kaun se desh ne launch kiya?',opts:['USA', 'China', 'Russia', 'India'],ans:'USA',src:'Raksha Technology',year:2024},
  {id:'ca_0191',cat:'science',diff:'easy',q:'India mein 5G commercially kisne launch kiya?',opts:['Jio aur Airtel', 'BSNL', 'Vodafone Idea', 'Sirf Jio'],ans:'Jio aur Airtel',src:'Telecom 2024',year:2024},
  {id:'ca_0192',cat:'science',diff:'medium',q:'India ka semiconductor manufacturing plant kahan ban raha hai?',opts:['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Karnataka'],ans:'Gujarat',src:'Semiconductor India',year:2024},
  {id:'ca_0193',cat:'science',diff:'easy',q:'ISRO ka pura naam kya hai?',opts:['Indian Space Research Organisation', 'Indian Satellite Research Organisation', 'International Space Research Org', 'Indian Science Research Org'],ans:'Indian Space Research Organisation',src:'ISRO Basics',year:2026},
  {id:'ca_0194',cat:'science',diff:'medium',q:'Chandrayaan-3 ka launch kab hua tha?',opts:['14 July 2023', '23 August 2023', '15 July 2023', '5 September 2023'],ans:'14 July 2023',src:'ISRO 2023',year:2026},
  {id:'ca_0195',cat:'science',diff:'easy',q:'ISRO ka headquarters kahan hai?',opts:['Bengaluru', 'New Delhi', 'Chennai', 'Hyderabad'],ans:'Bengaluru',src:'ISRO Basics',year:2026},
  {id:'ca_0196',cat:'science',diff:'hard',q:'India ka Gaganyaan mission kis cheez ke liye hai?',opts:['Manned space mission', 'Mangal mission', 'Chaand mission', 'Surya mission'],ans:'Manned space mission',src:'ISRO Missions',year:2026},
  {id:'ca_0197',cat:'science',diff:'medium',q:'5G technology ka mukhya fayda kya hai?',opts:['Bahut fast internet speed aur low latency', 'Sirf battery saving', 'Sirf calling quality', 'Sirf storage'],ans:'Bahut fast internet speed aur low latency',src:'Technology Basics',year:2026},
  {id:'ca_0198',cat:'science',diff:'hard',q:'AI ka pura naam kya hai?',opts:['Artificial Intelligence', 'Automated Intelligence', 'Advanced Information', 'Artificial Information'],ans:'Artificial Intelligence',src:'AI Basics',year:2026},
  {id:'ca_0199',cat:'science',diff:'medium',q:'ISRO ka satellite launch vehicle jo sabse heavy payload le ja sakta hai, uska naam kya hai?',opts:['LVM3 (GSLV Mk III)', 'PSLV', 'SSLV', 'ASLV'],ans:'LVM3 (GSLV Mk III)',src:'ISRO Vehicles',year:2026},
  {id:'ca_0200',cat:'science',diff:'easy',q:'CERN kis cheez ke liye jaana jaata hai?',opts:['Particle physics research', 'Space research', 'AI research', 'Medical research'],ans:'Particle physics research',src:'World Science',year:2026},

  // ── AWARDS ──
  {id:'ca_0201',cat:'awards',diff:'easy',q:'Nobel Peace Prize 2024 kisne jeeta?',opts:['Nihon Hidankyo', 'Malala Yousafzai', 'Greta Thunberg', 'WHO'],ans:'Nihon Hidankyo',src:'Nobel 2024',year:2024},
  {id:'ca_0202',cat:'awards',diff:'medium',q:'Nobel Prize in Literature 2024 kishe mila?',opts:['Han Kang', 'Salman Rushdie', 'Arundhati Roy', 'Haruki Murakami'],ans:'Han Kang',src:'Nobel 2024',year:2024},
  {id:'ca_0203',cat:'awards',diff:'medium',q:'2024 mein Bharat Ratna kishe mila?',opts:['LK Advani aur Charan Singh', 'Atal Bihari Vajpayee', 'APJ Abdul Kalam', 'MS Swaminathan'],ans:'LK Advani aur Charan Singh',src:'Bharat Ratna 2024',year:2024},
  {id:'ca_0204',cat:'awards',diff:'easy',q:'India ka sabse bada civilian samman kaun sa hai?',opts:['Bharat Ratna', 'Padma Vibhushan', 'Padma Bhushan', 'Padma Shri'],ans:'Bharat Ratna',src:'Indian Awards',year:2024},
  {id:'ca_0205',cat:'awards',diff:'hard',q:'Nobel Prize in Economics 2024 kis research ke liye tha?',opts:['Samridhi aur institutions', 'Climate change economics', 'Digital economy', 'Garibi measurement'],ans:'Samridhi aur institutions',src:'Nobel Economics 2024',year:2024},
  {id:'ca_0206',cat:'awards',diff:'medium',q:'Oscars 2024 mein Best Picture kaun si film ko mili?',opts:['Oppenheimer', 'Barbie', 'Poor Things', 'Killers of the Flower Moon'],ans:'Oppenheimer',src:'Oscars 2024',year:2024},
  {id:'ca_0207',cat:'awards',diff:'easy',q:'Arjuna Award kiske liye diya jaata hai?',opts:['Khel mein uttkrishtata', 'Kala', 'Vigyan', 'Sahitya'],ans:'Khel mein uttkrishtata',src:'Sports Awards',year:2024},
  {id:'ca_0208',cat:'awards',diff:'hard',q:'Pulitzer Prize 2024 kisi Indian journalist ko mila?',opts:['Kisi ko nahi mila', 'Aakar Patel', 'Barkha Dutt', 'Rana Ayyub'],ans:'Kisi ko nahi mila',src:'Pulitzer 2024',year:2024},
  {id:'ca_0209',cat:'awards',diff:'medium',q:'Miss World 2024 kaun se desh ki hai?',opts:['Czech Republic', 'India', 'USA', 'Philippines'],ans:'Czech Republic',src:'Beauty Pageant 2024',year:2024},
  {id:'ca_0210',cat:'awards',diff:'hard',q:'Dadasaheb Phalke Award 2024 kaun si actress ko mila?',opts:['Waheeda Rehman', 'Asha Parekh', 'Hema Malini', 'Sharmila Tagore'],ans:'Waheeda Rehman',src:'Dadasaheb Phalke 2024',year:2024},
  {id:'ca_0211',cat:'awards',diff:'easy',q:'Padma Vibhushan kis category ka award hai?',opts:['Doosra sabse bada civilian award', 'Sabse bada civilian award', 'Teesra sabse bada civilian award', 'Military award'],ans:'Doosra sabse bada civilian award',src:'Indian Awards',year:2026},
  {id:'ca_0212',cat:'awards',diff:'medium',q:'Padma Shri kis number ka civilian award hai?',opts:['Chautha sabse bada', 'Sabse bada', 'Doosra sabse bada', 'Teesra sabse bada'],ans:'Chautha sabse bada',src:'Indian Awards',year:2026},
  {id:'ca_0213',cat:'awards',diff:'hard',q:'Nobel Prize kis desh se diya jaata hai (mostly)?',opts:['Sweden (aur Peace Prize Norway se)', 'USA', 'UK', 'Switzerland'],ans:'Sweden (aur Peace Prize Norway se)',src:'Nobel Prize Basics',year:2026},
  {id:'ca_0214',cat:'awards',diff:'easy',q:'Jnanpith Award kis field ke liye diya jaata hai?',opts:['Sahitya (Literature)', 'Vigyan', 'Khel', 'Kala'],ans:'Sahitya (Literature)',src:'Indian Awards',year:2026},
  {id:'ca_0215',cat:'awards',diff:'medium',q:'Param Vir Chakra kis category ka award hai?',opts:['Sabse bada military gallantry award', 'Civilian award', 'Sports award', 'Literature award'],ans:'Sabse bada military gallantry award',src:'Military Awards',year:2026},
  {id:'ca_0216',cat:'awards',diff:'hard',q:'Ramon Magsaysay Award kis desh se related hai?',opts:['Philippines', 'India', 'Sweden', 'USA'],ans:'Philippines',src:'International Awards',year:2026},
  {id:'ca_0217',cat:'awards',diff:'medium',q:'Grammy Awards kis field se related hain?',opts:['Music', 'Film', 'Literature', 'Sports'],ans:'Music',src:'International Awards',year:2026},
  {id:'ca_0218',cat:'awards',diff:'easy',q:'Sahitya Akademi Award kis field ke liye diya jaata hai?',opts:['Sahitya (Literature)', 'Sangeet', 'Vigyan', 'Khel'],ans:'Sahitya (Literature)',src:'Indian Awards',year:2026},
  {id:'ca_0219',cat:'awards',diff:'hard',q:'Nobel Prize kitne categories mein diya jaata hai?',opts:['6 (Physics, Chemistry, Medicine, Literature, Peace, Economics)', '5', '7', '4'],ans:'6 (Physics, Chemistry, Medicine, Literature, Peace, Economics)',src:'Nobel Prize Basics',year:2026},
  {id:'ca_0220',cat:'awards',diff:'medium',q:'Ashoka Chakra kis tarah ka award hai?',opts:['Shanti kaal ka sabse bada gallantry award', 'Yudh kaal ka award', 'Sports award', 'Civilian award'],ans:'Shanti kaal ka sabse bada gallantry award',src:'Military Awards',year:2026},

  // ── DEFENCE ──
  {id:'ca_0221',cat:'defence',diff:'easy',q:'Operation Sindoor India ne kaun se desh ke khilaf chalaya?',opts:['Pakistan', 'China', 'Bangladesh', 'Myanmar'],ans:'Pakistan',src:'Indian Raksha 2025',year:2025},
  {id:'ca_0222',cat:'defence',diff:'medium',q:'India ka swadeshi aircraft carrier kaun sa hai?',opts:['INS Vikrant', 'INS Vikramaditya', 'INS Viraat', 'INS Virendra'],ans:'INS Vikrant',src:'Indian Navy',year:2024},
  {id:'ca_0223',cat:'defence',diff:'hard',q:'Project 75-I mein kitni submarines ki kharidi hogi?',opts:['6', '4', '8', '10'],ans:'6',src:'Indian Navy',year:2024},
  {id:'ca_0224',cat:'defence',diff:'medium',q:'BrahMos missile India aur kaun se desh ka joint venture hai?',opts:['Russia', 'France', 'USA', 'Israel'],ans:'Russia',src:'Raksha Hathiyaar',year:2024},
  {id:'ca_0225',cat:'defence',diff:'easy',q:'Tejas India ka swadeshi kya hai?',opts:['Fighter jet', 'Missile', 'Tank', 'Submarine'],ans:'Fighter jet',src:'Indian Raksha',year:2024},
  {id:'ca_0226',cat:'defence',diff:'hard',q:'Exercise Malabar 2024 mein India, USA, Japan aur kaun sa desh shaamil tha?',opts:['Australia', 'France', 'UK', 'Canada'],ans:'Australia',src:'Military Exercise',year:2024},
  {id:'ca_0227',cat:'defence',diff:'medium',q:'2025 ke liye India ka defence export target kya hai?',opts:['₹50,000 crore', '₹25,000 crore', '₹1 lakh crore', '₹75,000 crore'],ans:'₹50,000 crore',src:'Defence Export',year:2024},
  {id:'ca_0228',cat:'defence',diff:'easy',q:'Chief of Defence Staff (CDS) ka pad kab banaya gaya?',opts:['2019', '2020', '2021', '2018'],ans:'2019',src:'CDS',year:2024},
  {id:'ca_0229',cat:'defence',diff:'hard',q:'S-400 air defence system kaun se desh se kharida gaya?',opts:['Russia', 'USA', 'France', 'Israel'],ans:'Russia',src:'Air Defence',year:2024},
  {id:'ca_0230',cat:'defence',diff:'medium',q:'Exercise Tasman Saber India aur kaun se desh ke beech hoti hai?',opts:['Australia', 'New Zealand', 'UK', 'Canada'],ans:'Australia',src:'Military Exercise',year:2024},
  {id:'ca_0231',cat:'defence',diff:'easy',q:'Bharatiya Sena ke Chief of Army Staff kaun se rank ke officer hote hain?',opts:['General', 'Lieutenant General', 'Brigadier', 'Major General'],ans:'General',src:'Defence Basics',year:2026},
  {id:'ca_0232',cat:'defence',diff:'medium',q:'Budget 2026-27 mein defence allocation mein kitna % increase hua (over previous year)?',opts:['~15%', '~10%', '~20%', '~5%'],ans:'~15%',src:'Budget 2026-27',year:2026},
  {id:'ca_0233',cat:'defence',diff:'hard',q:'DRDO ka pura naam kya hai?',opts:['Defence Research and Development Organisation', 'Defence Research Development Office', 'Defence Rocket Development Organisation', 'Defence Regiment Development Org'],ans:'Defence Research and Development Organisation',src:'DRDO Basics',year:2026},
  {id:'ca_0234',cat:'defence',diff:'easy',q:'Bharatiya sena ke teen ang kaun se hain?',opts:['Army, Navy, Air Force', 'Army, Navy, Coast Guard', 'Army, Air Force, Marines', 'Navy, Air Force, Police'],ans:'Army, Navy, Air Force',src:'Defence Basics',year:2026},
  {id:'ca_0235',cat:'defence',diff:'medium',q:'NDA (National Defence Academy) kahan sthit hai?',opts:['Khadakwasla, Pune', 'Dehradun', 'Chennai', 'Bengaluru'],ans:'Khadakwasla, Pune',src:'Defence Training',year:2026},
  {id:'ca_0236',cat:'defence',diff:'hard',q:'Agni missile series kaisi missile hai?',opts:['Ballistic missile', 'Cruise missile', 'Anti-tank missile', 'Surface-to-air missile'],ans:'Ballistic missile',src:'Missile Systems',year:2026},
  {id:'ca_0237',cat:'defence',diff:'medium',q:'INS Vikrant kya hai?',opts:['India ka swadeshi aircraft carrier', 'Submarine', 'Destroyer', 'Frigate'],ans:'India ka swadeshi aircraft carrier',src:'Indian Navy',year:2026},
  {id:'ca_0238',cat:'defence',diff:'easy',q:'IAF ka pura naam kya hai?',opts:['Indian Air Force', 'International Air Force', 'Indian Aviation Force', 'Indian Army Force'],ans:'Indian Air Force',src:'Defence Basics',year:2026},
  {id:'ca_0239',cat:'defence',diff:'hard',q:'Akash missile system kis type ki missile hai?',opts:['Surface-to-air missile', 'Ballistic missile', 'Anti-ship missile', 'Cruise missile'],ans:'Surface-to-air missile',src:'Missile Systems',year:2026},
  {id:'ca_0240',cat:'defence',diff:'medium',q:'India ka defence budget world mein kitne number par aata hai (approx rank)?',opts:['3rd ya 4th largest', '1st largest', '10th largest', '7th largest'],ans:'3rd ya 4th largest',src:'Defence Spending',year:2026},

  // ── ENVIRONMENT ──
  {id:'ca_0241',cat:'environment',diff:'easy',q:'India ka net zero carbon emissions ka target kab tak ka hai?',opts:['2070', '2050', '2060', '2045'],ans:'2070',src:'Climate Policy',year:2024},
  {id:'ca_0242',cat:'environment',diff:'medium',q:'2030 tak India ka renewable energy target kya hai?',opts:['500 GW', '300 GW', '400 GW', '600 GW'],ans:'500 GW',src:'Renewable Energy',year:2024},
  {id:'ca_0243',cat:'environment',diff:'hard',q:'Loss and Damage Fund kaun se COP mein operational hua?',opts:['COP28', 'COP27', 'COP26', 'COP29'],ans:'COP28',src:'Climate Fund',year:2024},
  {id:'ca_0244',cat:'environment',diff:'medium',q:'Project Cheetah kab launch hua?',opts:['2022', '2021', '2023', '2020'],ans:'2022',src:'Wildlife Conservation',year:2024},
  {id:'ca_0245',cat:'environment',diff:'easy',q:'International Solar Alliance India aur kaun se desh ne milkar banaya?',opts:['France', 'USA', 'Germany', 'UK'],ans:'France',src:'Solar Alliance',year:2024},
  {id:'ca_0246',cat:'environment',diff:'hard',q:'Paris Agreement ke hisaab se global temperature rise limit kya hai?',opts:['1.5°C se 2°C', '1°C se 1.5°C', '2°C se 2.5°C', '3°C se neeche'],ans:'1.5°C se 2°C',src:'Paris Agreement',year:2024},
  {id:'ca_0247',cat:'environment',diff:'medium',q:'India ki MISHTI scheme kis cheez se related hai?',opts:['Mangrove sanrakshan', 'Solar energy', 'Jal sanrakshan', 'Van cover'],ans:'Mangrove sanrakshan',src:'Environment Schemes',year:2024},
  {id:'ca_0248',cat:'environment',diff:'easy',q:'World Environment Day kab manaya jaata hai?',opts:['5 June', '5 July', '22 April', '16 September'],ans:'5 June',src:'Important Days',year:2024},
  {id:'ca_0249',cat:'environment',diff:'hard',q:'India ka pehla green hydrogen plant kahan hai?',opts:['Gujarat', 'Rajasthan', 'Maharashtra', 'Tamil Nadu'],ans:'Gujarat',src:'Green Hydrogen',year:2024},
  {id:'ca_0250',cat:'environment',diff:'medium',q:'National Action Plan on Climate Change mein kitne missions hain?',opts:['8', '6', '10', '12'],ans:'8',src:'Climate Policy',year:2024},
  {id:'ca_0251',cat:'environment',diff:'easy',q:'Global warming ka mukhya karan kya hai?',opts:['Greenhouse gases ka excessive emission', 'Sirf deforestation', 'Sirf industrial waste', 'Sirf plastic pollution'],ans:'Greenhouse gases ka excessive emission',src:'Environment Basics',year:2026},
  {id:'ca_0252',cat:'environment',diff:'medium',q:'Kyoto Protocol kis cheez se related hai?',opts:['Greenhouse gas emissions kam karna', 'Wildlife conservation', 'Water conservation', 'Soil conservation'],ans:'Greenhouse gas emissions kam karna',src:'Climate Agreements',year:2026},
  {id:'ca_0253',cat:'environment',diff:'hard',q:'Biodiversity Hotspot India mein kitne hain?',opts:['4', '2', '6', '3'],ans:'4',src:'Indian Biodiversity',year:2026},
  {id:'ca_0254',cat:'environment',diff:'easy',q:'Ozone layer kya protect karti hai?',opts:['Harmful UV radiation se', 'Global warming se', 'Air pollution se', 'Acid rain se'],ans:'Harmful UV radiation se',src:'Environment Basics',year:2026},
  {id:'ca_0255',cat:'environment',diff:'medium',q:'Chipko Movement kis cheez se related tha?',opts:['Ped kaatne ke khilaf andolan (forest conservation)', 'Water conservation', 'Wildlife protection', 'Air pollution'],ans:'Ped kaatne ke khilaf andolan (forest conservation)',src:'Environment History',year:2026},
  {id:'ca_0256',cat:'environment',diff:'hard',q:'Ramsar Sites kis cheez ke liye designate kiye jaate hain?',opts:['Wetlands conservation', 'Forest conservation', 'Marine life', 'Mountain conservation'],ans:'Wetlands conservation',src:'Wetland Conservation',year:2026},
  {id:'ca_0257',cat:'environment',diff:'medium',q:'Namami Gange programme kis nadi se related hai?',opts:['Ganga', 'Yamuna', 'Brahmaputra', 'Godavari'],ans:'Ganga',src:'River Conservation',year:2026},
  {id:'ca_0258',cat:'environment',diff:'easy',q:'Carbon footprint kya darshata hai?',opts:['Kisi vyakti/activity se hone waale carbon emissions ki matra', 'Sirf vehicle pollution', 'Sirf factory pollution', 'Ped kaatne ki matra'],ans:'Kisi vyakti/activity se hone waale carbon emissions ki matra',src:'Environment Basics',year:2026},
  {id:'ca_0259',cat:'environment',diff:'hard',q:'India ka pehla Ramsar Site kaun sa tha?',opts:['Chilika Lake aur Keoladeo National Park (1981)', 'Sundarbans', 'Dal Lake', 'Vembanad Lake'],ans:'Chilika Lake aur Keoladeo National Park (1981)',src:'Wetland Conservation',year:2026},
  {id:'ca_0260',cat:'environment',diff:'medium',q:'Green Hydrogen kya hai?',opts:['Renewable energy se banaya gaya hydrogen', 'Coal se banaya gaya hydrogen', 'Natural gas se banaya gaya hydrogen', 'Nuclear se banaya gaya hydrogen'],ans:'Renewable energy se banaya gaya hydrogen',src:'Clean Energy',year:2026},

  // ── DAYS ──
  {id:'ca_0261',cat:'days',diff:'easy',q:'World Yoga Day kab manaya jaata hai?',opts:['21 June', '21 July', '21 May', '21 August'],ans:'21 June',src:'Important Days',year:2024},
  {id:'ca_0262',cat:'days',diff:'easy',q:'India mein National Sports Day kab manaya jaata hai?',opts:['29 August', '29 July', '29 September', '29 June'],ans:'29 August',src:'Sports Days',year:2024},
  {id:'ca_0263',cat:'days',diff:'medium',q:'World Mental Health Day kab hota hai?',opts:['10 October', '10 September', '10 November', '10 August'],ans:'10 October',src:'Health Days',year:2024},
  {id:'ca_0264',cat:'days',diff:'easy',q:'India ka Constitution Day kab hai?',opts:['26 November', '26 January', '15 August', '2 October'],ans:'26 November',src:'National Days',year:2024},
  {id:'ca_0265',cat:'days',diff:'easy',q:'World Water Day kab manaya jaata hai?',opts:['22 March', '22 April', '22 May', '22 June'],ans:'22 March',src:'UN Days',year:2024},
  {id:'ca_0266',cat:'days',diff:'hard',q:'World Environment Day 2024 ka theme kya tha?',opts:['Zameen ki wapsi, sukhakhand aur sukha', 'Ocean restoration', 'Vayu guna', 'Plastic pradushan'],ans:'Zameen ki wapsi, sukhakhand aur sukha',src:'Environment Day 2024',year:2024},
  {id:'ca_0267',cat:'days',diff:'medium',q:'International Day of Yoga 2024 ka theme kya tha?',opts:['Yoga for Self and Society', 'Yoga for Humanity', 'Yoga for Peace', 'Yoga for Wellness'],ans:'Yoga for Self and Society',src:'Yoga Day 2024',year:2024},
  {id:'ca_0268',cat:'days',diff:'easy',q:'India ka Republic Day kab manaya jaata hai?',opts:['26 January', '15 August', '2 October', '26 November'],ans:'26 January',src:'National Days',year:2024},
  {id:'ca_0269',cat:'days',diff:'medium',q:'World Press Freedom Day kab hai?',opts:['3 May', '3 April', '3 June', '3 March'],ans:'3 May',src:'Press Days',year:2024},
  {id:'ca_0270',cat:'days',diff:'easy',q:'India ka Independence Day kab manaya jaata hai?',opts:['15 August', '26 January', '2 October', '26 November'],ans:'15 August',src:'National Days',year:2024},
  {id:'ca_0271',cat:'days',diff:'easy',q:'World Health Day kab manaya jaata hai?',opts:['7 April', '7 May', '7 March', '7 June'],ans:'7 April',src:'Important Days',year:2026},
  {id:'ca_0272',cat:'days',diff:'medium',q:'World Population Day kab hota hai?',opts:['11 July', '11 June', '11 August', '11 May'],ans:'11 July',src:'Important Days',year:2026},
  {id:'ca_0273',cat:'days',diff:'easy',q:'World AIDS Day kab manaya jaata hai?',opts:['1 December', '1 November', '1 October', '1 January'],ans:'1 December',src:'Important Days',year:2026},
  {id:'ca_0274',cat:'days',diff:'medium',q:'Hindi Diwas India mein kab manaya jaata hai?',opts:['14 September', '14 August', '14 October', '14 July'],ans:'14 September',src:'National Days',year:2026},
  {id:'ca_0275',cat:'days',diff:'easy',q:'National Science Day kab manaya jaata hai?',opts:['28 February', '28 January', '28 March', '28 April'],ans:'28 February',src:'National Days',year:2026},
  {id:'ca_0276',cat:'days',diff:'medium',q:'World Food Day kab manaya jaata hai?',opts:['16 October', '16 September', '16 November', '16 August'],ans:'16 October',src:'UN Days',year:2026},
  {id:'ca_0277',cat:'days',diff:'easy',q:'International Women\'s Day kab manaya jaata hai?',opts:['8 March', '8 April', '8 February', '8 May'],ans:'8 March',src:'UN Days',year:2026},
  {id:'ca_0278',cat:'days',diff:'medium',q:'National Voters Day kab manaya jaata hai?',opts:['25 January', '26 January', '15 August', '1 January'],ans:'25 January',src:'National Days',year:2026},
  {id:'ca_0279',cat:'days',diff:'easy',q:'Teachers Day India mein kab manaya jaata hai?',opts:['5 September', '5 October', '5 August', '5 November'],ans:'5 September',src:'National Days',year:2026},
  {id:'ca_0280',cat:'days',diff:'medium',q:'World Tourism Day kab manaya jaata hai?',opts:['27 September', '27 August', '27 October', '27 July'],ans:'27 September',src:'UN Days',year:2026},

  // ── APPOINTMENTS ──
  {id:'ca_0281',cat:'appointments',diff:'medium',q:'2026 mein India ke Chief Justice of India kaun hain?',opts:['Justice Surya Kant', 'DY Chandrachud', 'BR Gavai', 'Hima Kohli'],ans:'Justice Surya Kant',src:'Judiciary 2026',year:2026},
  {id:'ca_0282',cat:'appointments',diff:'easy',q:'RBI ke current Governor kaun hain?',opts:['Sanjay Malhotra', 'Shaktikanta Das', 'Urjit Patel', 'Raghuram Rajan'],ans:'Sanjay Malhotra',src:'RBI Governor',year:2025},
  {id:'ca_0283',cat:'appointments',diff:'medium',q:'2022 French elections ke baad France ke President kaun bane?',opts:['Emmanuel Macron', 'Marine Le Pen', 'Nicolas Sarkozy', 'François Hollande'],ans:'Emmanuel Macron',src:'World Leaders',year:2024},
  {id:'ca_0284',cat:'appointments',diff:'hard',q:'2024 mein naye SEBI Chairperson kaun niyukt hue?',opts:['Tuhin Kanta Pandey', 'Madhabi Puri Buch', 'Ajay Tyagi', 'UK Sinha'],ans:'Tuhin Kanta Pandey',src:'SEBI 2024',year:2024},
  {id:'ca_0285',cat:'appointments',diff:'medium',q:'2026 mein India ke Chief Election Commissioner kaun hain?',opts:['Gyanesh Kumar', 'Sushil Chandra', 'OP Rawat', 'Nasim Zaidi'],ans:'Gyanesh Kumar',src:'Election Commission 2026',year:2026},
  {id:'ca_0286',cat:'appointments',diff:'easy',q:'NITI Aayog ke current Chairperson kaun hain?',opts:['PM Narendra Modi', 'Amit Shah', 'Nirmala Sitharaman', 'Rajnath Singh'],ans:'PM Narendra Modi',src:'NITI Aayog',year:2025},
  {id:'ca_0287',cat:'appointments',diff:'hard',q:'2024 mein India ke naye Cabinet Secretary kaun niyukt hue?',opts:['TV Somanathan', 'Rajiv Gauba', 'PK Sinha', 'Ajit Seth'],ans:'TV Somanathan',src:'Cabinet 2024',year:2024},
  {id:'ca_0288',cat:'appointments',diff:'easy',q:'2026 mein India ke Chief Justice of India (CJI) kaun hain?',opts:['Justice Surya Kant', 'Justice Sanjiv Khanna', 'Justice DY Chandrachud', 'Justice BR Gavai'],ans:'Justice Surya Kant',src:'Judiciary 2026',year:2026},
  {id:'ca_0289',cat:'appointments',diff:'medium',q:'Justice Surya Kant 53rd CJI ke roop mein kab office mein aaye?',opts:['24 November 2025', '1 January 2026', '14 May 2025', '9 February 2026'],ans:'24 November 2025',src:'Judiciary 2026',year:2026},
  {id:'ca_0290',cat:'appointments',diff:'hard',q:'Justice Surya Kant se pehle 52nd CJI kaun the?',opts:['Justice BR Gavai', 'Justice Sanjiv Khanna', 'Justice DY Chandrachud', 'Justice UU Lalit'],ans:'Justice BR Gavai',src:'Judiciary History',year:2026},
  {id:'ca_0291',cat:'appointments',diff:'easy',q:'2026 mein India ke Chief Election Commissioner (CEC) kaun hain?',opts:['Gyanesh Kumar', 'Rajiv Kumar', 'Sukhbir Singh Sandhu', 'Vivek Joshi'],ans:'Gyanesh Kumar',src:'Election Commission 2026',year:2026},
  {id:'ca_0292',cat:'appointments',diff:'medium',q:'Gyanesh Kumar ne CEC ka charge kab liya?',opts:['19 February 2025', '1 January 2025', '15 March 2025', '1 June 2025'],ans:'19 February 2025',src:'Election Commission 2026',year:2026},
  {id:'ca_0293',cat:'appointments',diff:'easy',q:'2026 mein India ke SEBI Chairman kaun hain?',opts:['Tuhin Kanta Pandey', 'Madhabi Puri Buch', 'Ajay Tyagi', 'UK Sinha'],ans:'Tuhin Kanta Pandey',src:'SEBI 2026',year:2026},
  {id:'ca_0294',cat:'appointments',diff:'medium',q:'2026 mein India ke RBI Governor kaun hain?',opts:['Sanjay Malhotra', 'Shaktikanta Das', 'Urjit Patel', 'Raghuram Rajan'],ans:'Sanjay Malhotra',src:'RBI 2026',year:2026},
  {id:'ca_0295',cat:'appointments',diff:'hard',q:'Sanjay Malhotra ne RBI Governor ka charge kab liya tha?',opts:['11 December 2024', '1 January 2025', '15 August 2024', '1 April 2025'],ans:'11 December 2024',src:'RBI History',year:2026},
  {id:'ca_0296',cat:'appointments',diff:'medium',q:'Bihar Assembly Elections 2025 (Nov 2025) mein NDA ne kitni seats jeeti?',opts:['202', '190', '150', '170'],ans:'202',src:'Bihar Chunav 2025',year:2025},
  {id:'ca_0297',cat:'appointments',diff:'easy',q:'Bihar Assembly Elections 2025 ke baad Bihar ke Chief Minister kaun bane rahe?',opts:['Nitish Kumar', 'Tejashwi Yadav', 'Sushil Modi', 'Lalu Prasad Yadav'],ans:'Nitish Kumar',src:'Bihar Chunav 2025',year:2025},
  {id:'ca_0298',cat:'appointments',diff:'hard',q:'India ke Rashtrapati ka current karyakaal (Droupadi Murmu) kab khatam hoga?',opts:['2027', '2026', '2028', '2025'],ans:'2027',src:'Indian Politics',year:2026},
  {id:'ca_0299',cat:'appointments',diff:'medium',q:'UN Secretary General António Guterres ka current term kab tak hai?',opts:['End of 2026', 'End of 2025', 'End of 2027', 'End of 2028'],ans:'End of 2026',src:'United Nations',year:2026},
  {id:'ca_0300',cat:'appointments',diff:'easy',q:'Delhi ki current Chief Minister (2025 se) kaun hain?',opts:['Rekha Gupta', 'Arvind Kejriwal', 'Atishi', 'Sheila Dikshit'],ans:'Rekha Gupta',src:'Delhi Politics 2025',year:2025},

];
// ============================================================
// NO-REPEAT ROTATION HELPER
// localStorage mein "seen" question IDs track karta hai (category
// wise), taaki jab tak kisi category ke saare questions dekhe
// nahi jaate, wahi purane repeat nahi honge. Sab dekh liye jaane
// par sirf usi category/pool ki rotation reset hoti hai.
// ============================================================
(function (global) {
  const STORAGE_KEY = 'currentAffairsSeenIds';

  function loadSeen() {
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? new Set(parsed) : new Set();
    } catch (e) { return new Set(); }
  }

  function saveSeen(seenSet) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(seenSet)));
      }
    } catch (e) { /* localStorage unavailable — rotation bas is session tak hi chalegi */ }
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * getQuizQuestions(count, opts)
   * opts.cat    - optional: 'general'|'politics'|'schemes'|'budget'|'economy'|
   *               'tax'|'banking'|'international'|'sports'|'science'|'awards'|
   *               'defence'|'environment'|'days'|'appointments'. Omit for all.
   * opts.diff   - optional: 'easy'|'medium'|'hard'. Omit for all difficulties.
   * opts.markSeen - default true: turant "seen" mark kar deta hai.
   */
  function getQuizQuestions(count, opts) {
    opts = opts || {};
    let pool = QUESTIONS;
    if (opts.cat) pool = pool.filter(q => q.cat === opts.cat);
    if (opts.diff) pool = pool.filter(q => q.diff === opts.diff);
    const n = Math.min(count || pool.length, pool.length);

    let seen = loadSeen();
    let unseen = pool.filter(q => !seen.has(q.id));

    if (unseen.length < n) {
      const poolIds = new Set(pool.map(q => q.id));
      seen = new Set(Array.from(seen).filter(id => !poolIds.has(id)));
      unseen = pool.slice();
    }

    const chosen = shuffle(unseen).slice(0, n);

    if (opts.markSeen !== false) {
      chosen.forEach(q => seen.add(q.id));
      saveSeen(seen);
    }

    return chosen;
  }

  function resetQuizRotation() {
    try { if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY); }
    catch (e) { /* noop */ }
  }

  global.getQuizQuestions = getQuizQuestions;
  global.resetQuizRotation = resetQuizRotation;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getQuizQuestions = getQuizQuestions;
    module.exports.resetQuizRotation = resetQuizRotation;
  }
})(typeof window !== 'undefined' ? window : globalThis);
