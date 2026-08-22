const QUESTION_BANK = [

  /* ── NEWEST ADDITIONS (top = shown more often; add future new Qs right here) ── */
  {q:"Bharatiya Railway mein WAG-12B locomotive ki pramukh visheshta kya hai?", opts:["6,000 HP ka diesel loco","12,000 HP ka electric loco","9,000 HP ka electric loco","12,000 HP ka diesel-electric loco"], ans:"12,000 HP ka electric loco", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Railway ke 25 kV AC traction system mein OHE se prapt vidyut ko traction motor ke liye upyukt banane mein mukhya roop se kis prakar ki power conversion vyavastha prayukt hoti hai?", opts:["Keval Transformer","Transformer + Converter/Inverter","Keval Rectifier","Transformer + Alternator"], ans:"Transformer + Converter/Inverter", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Bharatiya Railway mein CBTC ka mukhya uddeshya kya hai?", opts:["Keval ticket booking ko automatic karna","Train ki sthiti aur movement authority ke aadhar par signalling/control ko unnat karna","Keval station ki lighting niyantrit karna","Locomotive ke fuel consumption ko mapna"], ans:"Train ki sthiti aur movement authority ke aadhar par signalling/control ko unnat karna", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Yadi kisi DC motor ki field flux ko lagbhag sthir rakhte hue armature voltage badhaya jaye, toh motor ki speed par samanyatah kya prabhav padega?", opts:["Ghategi","Lagbhag samaan rahegi","Badhegi","Pehle ghategi phir sthir hogi"], ans:"Badhegi", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Railway traction mein regenerative braking ka sabse mahatvapurna labh kya hai?", opts:["Mechanical brake ka poorn elimination","Kinetic energy ko electrical energy mein wapas badalna","Locomotive ki maximum speed dogunee karna","Keval brake shoe ki life badhana"], ans:"Kinetic energy ko electrical energy mein wapas badalna", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Bharatiya Railway mein WAP aur WAG mein antim akshar ka sambandh mukhyatah kisse hai?", opts:["Voltage","Gauge","Service/Application","Power rating"], ans:"Service/Application", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Broad Gauge track mein sleepers ka mukhya karya kya hai?", opts:["Keval rail ko corrosion se bachana","Rail gauge aur alignment ko banaye rakhna tatha load ko ballast par vitrit karna","Train ki speed badhana","Keval vibration samapt karna"], ans:"Rail gauge aur alignment ko banaye rakhna tatha load ko ballast par vitrit karna", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Kisi railway signalling system mein interlocking ka mool uddeshya kya hai?", opts:["Train ki speed badhana","Conflicting routes ko ek saath set hone se rokna","Platform ticket automatic banana","Locomotive ka voltage control karna"], ans:"Conflicting routes ko ek saath set hone se rokna", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Yadi train ki gati 72 km/h hai, toh wo 25 second mein kitni doori tay karegi?", opts:["400 m","450 m","500 m","550 m"], ans:"500 m", exams:["Railway"], topic:"Maths", diff:"hard"},
  {q:"Railway mein Axle Counter mukhyatah kiske liye upyog kiya jata hai?", opts:["Axle ka weight mapne ke liye","Track section ke occupied/clear hone ka pata lagane ke liye","Wheel diameter mapne ke liye","Train speed directly calculate karne ke liye"], ans:"Track section ke occupied/clear hone ka pata lagane ke liye", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Kisi locomotive mein traction motor ke liye induction motor ka upyog karne ka pramukh labh kya hai?", opts:["Commutator ki avashyakta","Saral evam robust construction aur kam maintenance","Keval DC supply par operation","Bahut adhik mechanical contacts"], ans:"Saral evam robust construction aur kam maintenance", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Yadi kisi transformer ka secondary voltage badhaya jaye aur load resistance samaan rahe, toh ideal condition mein secondary current par kya prabhav padega?", opts:["Badhega","Ghatega","Samaan rahega","Pehle badhega phir ghatega"], ans:"Badhega", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Railway track mein cant dene ka mukhya uddeshya kya hai?", opts:["Rail ko lamba karna","Curves par centrifugal effect ko compensate karna","Track resistance badhana","Train braking distance kam karna"], ans:"Curves par centrifugal effect ko compensate karna", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Ek train 90 km/h ki speed se chal rahi hai. Driver reaction time 2 second hai. Keval reaction period mein train lagbhag kitni doori tay karegi?", opts:["25 m","40 m","50 m","60 m"], ans:"50 m", exams:["Railway"], topic:"Maths", diff:"hard"},
  {q:"Railway mein Neutral Section mukhyatah kyun pradan kiya jata hai?", opts:["Track ko electrically isolate karne ke liye","Alag-alag electrical supply phases/sections ko alag rakhne ke liye","Train ko automatically rokne ke liye","Keval maintenance workers ke liye"], ans:"Alag-alag electrical supply phases/sections ko alag rakhne ke liye", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Yadi kisi induction motor ki supply frequency ghata di jaye lekin V/f ratio lagbhag constant rakha jaye, toh mukhyatah kya maintain karne ka prayas kiya jata hai?", opts:["Rotor resistance","Magnetic flux","Slip hamesha zero","Power factor hamesha unity"], ans:"Magnetic flux", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Railway signalling mein Absolute Block System ka mool siddhant kya hai?", opts:["Ek block section mein kisi bhi samay unlimited trains","Ek block section mein samanyatah ek hi train ko pravesh ki anumati","Keval passenger trains ko anumati","Keval din mein operation"], ans:"Ek block section mein samanyatah ek hi train ko pravesh ki anumati", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Ek locomotive ka tractive effort 300 kN hai aur wo 54 km/h ki speed se chal raha hai. Ideal mechanical output power lagbhag kitni hogi?", opts:["3.5 MW","4.0 MW","4.5 MW","5.0 MW"], ans:"4.5 MW", exams:["Railway"], topic:"Maths", diff:"hard"},
  {q:"Railway mein Wheel Slip Protection (WSP) system ka pramukh uddeshya kya hai?", opts:["Wheel diameter badhana","Excessive wheel slip/slide ko detect aur control karna","Train ki horn frequency badalna","Brake pressure ko hamesha maximum rakhna"], ans:"Excessive wheel slip/slide ko detect aur control karna", exams:["Railway"], topic:"Science", diff:"hard"},
  {q:"Kisi electric locomotive mein pantograph ka contact OHE se tootne-judne par arcing ko kam karne ke liye electrical system mein kaunsa factor vishesh roop se mahatvapurna hai?", opts:["Keval wheel diameter","Current interruption tatha circuit switching characteristics","Keval locomotive weight","Keval rail gauge"], ans:"Current interruption tatha circuit switching characteristics", exams:["Railway"], topic:"Science", diff:"hard"},



  /* ── GENERAL (all exams) ── */
  {q:"India ka Rashtrapati Bhavan kahan sthit hai?",       opts:["Mumbai","New Delhi","Kolkata","Chennai"],              ans:"New Delhi",       exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Geography",  diff:"easy"},
  {q:"Bharat ka Rashtragaan kya hai?",                     opts:["Vande Mataram","Jana Gana Mana","Sare Jahan Se Achha","Jai Hind"], ans:"Jana Gana Mana", exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Polity",     diff:"easy"},
  {q:"Pani ka chemical formula kya hai?",                  opts:["CO2","H2O","O2","NaCl"],                              ans:"H2O",             exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Science",    diff:"easy"},
  {q:"Bharat ke pehle Prime Minister kaun the?",           opts:["Sardar Patel","Dr. Ambedkar","Jawaharlal Nehru","Rajendra Prasad"], ans:"Jawaharlal Nehru", exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"History",   diff:"easy"},
  {q:"Taj Mahal kahan hai?",                               opts:["Delhi","Jaipur","Agra","Lucknow"],                    ans:"Agra",            exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Geography",  diff:"easy"},
  {q:"Bharat ka Rashtriya Pakshi kaun sa hai?",            opts:["Hans","Mor","Tota","Kabootar"],                       ans:"Mor",             exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Current", diff:"easy"},
  {q:"Duniya ki sabse lambi nadi kaun si hai?",            opts:["Amazon","Nile","Ganga","Yangtze"],                    ans:"Nile",            exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Geography", diff:"easy"},
  {q:"Bharat ki rajdhani kya hai?",                        opts:["Mumbai","Chennai","New Delhi","Kolkata"],             ans:"New Delhi",       exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Geography",  diff:"easy"},
  {q:"Sabse bada mahasagar kaun sa hai?",                  opts:["Atlantic","Arctic","Indian","Pacific"],               ans:"Pacific",         exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Geography", diff:"easy"},
  {q:"Insan ke sharir mein kitni haddiyan hoti hain?",     opts:["206","186","226","196"],                             ans:"206",             exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Science", diff:"easy"},
  {q:"Light ki speed kitni hoti hai?",                     opts:["3 lakh km/s","1 lakh km/s","5 lakh km/s","2 lakh km/s"], ans:"3 lakh km/s", exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Science", diff:"easy"},
  {q:"Bharat ka national animal kaun sa hai?",             opts:["Lion","Elephant","Tiger","Leopard"],                  ans:"Tiger",           exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Current", diff:"easy"},
  {q:"Bharat ka Constitution kab lagu hua?",               opts:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1950"], ans:"26 Jan 1950",  exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Polity", diff:"easy"},
  {q:"Sabse bada grah kaun sa hai?",                       opts:["Saturn","Neptune","Uranus","Jupiter"],                ans:"Jupiter",         exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Science", diff:"easy"},
  {q:"Sabse bada mahadeep (continent) kaun sa hai?",       opts:["Africa","North America","Europe","Asia"],             ans:"Asia",            exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Geography", diff:"easy"},

  /* ── SSC specific ── */
  {q:"SSC CGL ka pura naam kya hai?",                      opts:["Combined Graduate Level","Central Government Level","Common Grade Level","Combined General Level"], ans:"Combined Graduate Level", exams:["SSC"], topic:"Current", diff:"easy"},
  {q:"12 × 12 kitna hota hai?",                            opts:["124","134","144","154"],                              ans:"144",             exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},
  {q:"15 × 8 kitna hota hai?",                             opts:["100","110","120","130"],                              ans:"120",             exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},
  {q:"√144 kitna hota hai?",                               opts:["11","12","13","14"],                                  ans:"12",              exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},
  {q:"18 × 5 kitna hota hai?",                             opts:["80","90","100","110"],                                ans:"90",              exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},
  {q:"25 ka varg (square) kitna hota hai?",                opts:["525","625","725","425"],                              ans:"625",             exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},
  {q:"7 × 9 kitna hota hai?",                              opts:["54","62","63","72"],                                  ans:"63",              exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},
  {q:"Ek triangle ke anon ka yog kitna hota hai?",          opts:["90°","180°","270°","360°"],                          ans:"180°",            exams:["SSC","Railway","Patwari"],                 topic:"Maths", diff:"easy"},
  {q:"Ek rectangle ki sides 6cm aur 4cm hain, area?",      opts:["20 cm²","24 cm²","28 cm²","18 cm²"],                ans:"24 cm²",          exams:["SSC","Railway","Patwari"],                 topic:"Maths", diff:"easy"},
  {q:"Yadi A = 10, B = 20, A+B ka 50% kya hoga?",         opts:["10","15","20","25"],                                  ans:"15",              exams:["SSC","Railway","Patwari","Police"],        topic:"Maths", diff:"easy"},

  /* ── UPSC specific ── */
  {q:"Bharat ka sabse bada rajya (area mein) kaun sa hai?", opts:["Uttar Pradesh","Maharashtra","Madhya Pradesh","Rajasthan"], ans:"Rajasthan", exams:["UPSC","SSC"],                          topic:"Geography", diff:"easy"},
  {q:"Bharat mein kitne rajya hain?",                      opts:["26","27","28","29"],                                  ans:"28",              exams:["UPSC","SSC","Patwari","Police"],           topic:"Polity", diff:"easy"},
  {q:"Bharat ke Rajya Sabha mein kitne sadsya hote hain?", opts:["245","250","240","230"],                              ans:"245",             exams:["UPSC","SSC"],                             topic:"Polity", diff:"easy"},
  {q:"Bharat ki sabse lambi nadi kaun si hai?",             opts:["Yamuna","Brahmaputra","Ganga","Godavari"],            ans:"Ganga",           exams:["UPSC","SSC","Patwari"],                   topic:"Geography", diff:"easy"},
  {q:"Duniya ka sabse bada desert kaun sa hai?",            opts:["Arabian","Gobi","Sahara","Antarctic"],               ans:"Antarctic",        exams:["UPSC","SSC"],                             topic:"Geography", diff:"easy"},
  {q:"Panchayati Raj kis Article ke antargat aata hai?",   opts:["Article 40","Article 44","Article 51","Article 32"], ans:"Article 40",      exams:["UPSC","Patwari"],                         topic:"Polity", diff:"easy"},
  {q:"Bharat ka sabse purana High Court kaun sa hai?",     opts:["Mumbai HC","Delhi HC","Calcutta HC","Madras HC"],    ans:"Calcutta HC",     exams:["UPSC","SSC"],                             topic:"Polity", diff:"easy"},
  {q:"GDP ka pura naam kya hai?",                          opts:["Gross Domestic Product","General Domestic Product","Gross Daily Product","General Daily Production"], ans:"Gross Domestic Product", exams:["UPSC","SSC","Banking"], topic:"Economics", diff:"easy"},
  {q:"RBI ki sthapna kab hui?",                            opts:["1930","1935","1940","1945"],                          ans:"1935",            exams:["UPSC","Banking","SSC"],                   topic:"Economics", diff:"easy"},

  /* ── RAILWAY specific ── */
  {q:"Bharat ki pehli rail kab chali thi?",                opts:["1853","1863","1873","1883"],                          ans:"1853",            exams:["Railway"],                                topic:"History", diff:"easy"},
  {q:"Bharat ka sabse lamba railway platform kahan hai?",  opts:["Mumbai","Gorakhpur","Kolkata","Chennai"],             ans:"Gorakhpur",       exams:["Railway"],                                topic:"Current", diff:"easy"},
  {q:"Vande Bharat Express ki maximum speed kitni hai?",   opts:["130 km/h","150 km/h","160 km/h","180 km/h"],         ans:"160 km/h",        exams:["Railway"],                                topic:"Current", diff:"easy"},
  {q:"RRB ka pura naam kya hai?",                          opts:["Railway Recruitment Board","Railway Regulation Board","Rail Route Bureau","Railway Ranking Body"], ans:"Railway Recruitment Board", exams:["Railway"], topic:"Current", diff:"easy"},
  {q:"Diesel locomotive India mein kahan banti hain?",     opts:["Varanasi","Lucknow","Patna","Agra"],                  ans:"Varanasi",        exams:["Railway"],                                topic:"Current", diff:"easy"},

  /* ── PATWARI specific ── */
  {q:"Rajasthan mein kitne zile hain?",                    opts:["30","33","35","50"],                                  ans:"50",              exams:["Patwari"],                                topic:"Geography", diff:"easy"},
  {q:"Bhumi record ke liye kaunsa document use hota hai?", opts:["Khatauni","Challan","FIR","Gazette"],                ans:"Khatauni",        exams:["Patwari"],                                topic:"Current", diff:"easy"},
  {q:"Patwari ka kaam kya hota hai?",                      opts:["Police karna","Land records rakhna","Tax collect karna","Court mein kaam karna"], ans:"Land records rakhna", exams:["Patwari"], topic:"Current", diff:"easy"},
  {q:"Rajasthan ka kshetrafal kitna hai?",                 opts:["2,42,236 km²","3,42,239 km²","4,42,239 km²","1,42,239 km²"], ans:"3,42,239 km²", exams:["Patwari"],                        topic:"Geography", diff:"easy"},
  {q:"Gram Panchayat mein chunav kitne saalo mein hota hai?", opts:["3 saal","4 saal","5 saal","6 saal"],             ans:"5 saal",          exams:["Patwari"],                                topic:"Polity", diff:"easy"},

  /* ── POLICE specific ── */
  {q:"IPC ki dhara 302 kis apradh se sambandhit hai?",     opts:["Chhori","Hatya","Dharakhol","Dhoka"],                ans:"Hatya",           exams:["Police"],                                 topic:"Polity", diff:"easy"},
  {q:"FIR ka pura naam kya hai?",                          opts:["First Information Report","Final Investigation Record","First Investigation Report","Final Information Record"], ans:"First Information Report", exams:["Police","SSC"], topic:"Current", diff:"easy"},
  {q:"Bharat mein Police ka vishayadhikar kaunsi suchi mein hai?", opts:["Union List","State List","Concurrent List","Residual List"], ans:"State List", exams:["Police","UPSC"],             topic:"Polity", diff:"easy"},
  {q:"Prithvi apni dhuri par ek chakkar kitne ghante mein lagati hai?", opts:["12 ghante","24 ghante","48 ghante","36 ghante"], ans:"24 ghante", exams:["SSC","Railway","Patwari","Police"],  topic:"Science", diff:"easy"},
  {q:"Oxygen ka symbol kya hai?",                          opts:["Ox","O2","O","Op"],                                  ans:"O",               exams:["SSC","Railway","Patwari","Police"],        topic:"Science", diff:"easy"},
  {q:"Sabse halka element kaun sa hai?",                   opts:["Helium","Oxygen","Hydrogen","Carbon"],               ans:"Hydrogen",        exams:["SSC","Railway","Patwari","Police"],        topic:"Science", diff:"easy"},
  {q:"Mahatma Gandhi ka poora naam kya tha?",              opts:["Mohan Das Karam Chand Gandhi","Mohan Lal Gandhi","Mahesh Das Gandhi","Mohan Das Gandhi"], ans:"Mohan Das Karam Chand Gandhi", exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"History", diff:"easy"},
  {q:"Pehli baar chand par kadam kisne rakha tha?",        opts:["Yuri Gagarin","Buzz Aldrin","Neil Armstrong","Alan Shepard"], ans:"Neil Armstrong", exams:["SSC","Railway","Police"],      topic:"Science", diff:"easy"},
  {q:"Paani ka ubalane ka temperature kitna hota hai?",    opts:["90°C","95°C","100°C","105°C"],                       ans:"100°C",           exams:["SSC","Railway","Patwari","Police"],        topic:"Science", diff:"easy"},
  {q:"CO2 mein kitne oxygen atom hote hain?",              opts:["1","2","3","4"],                                     ans:"2",               exams:["SSC","Railway","Police"],                  topic:"Science", diff:"easy"},
  {q:"Sabse chota grah kaun sa hai?",                      opts:["Mars","Venus","Mercury","Saturn"],                    ans:"Mercury",         exams:["SSC","UPSC","Railway","Police"],           topic:"Science", diff:"easy"},
  {q:"Bharat ka Rashtriya Khel kaun sa hai?",              opts:["Cricket","Kabaddi","Hockey","Badminton"],             ans:"Hockey",          exams:["SSC","UPSC","Railway","Patwari","Police"], topic:"Current", diff:"easy"},

  /* ── BANKING specific ── */
  {q:"RBI ka pura naam kya hai?",                          opts:["Reserve Bank of India","Royal Bank of India","Regulated Bank of India","Revenue Bank of India"], ans:"Reserve Bank of India", exams:["Banking","UPSC","SSC","GK"],              topic:"Economics", diff:"easy"},
  {q:"IBPS ka pura naam kya hai?",                         opts:["Institute of Banking Personnel Selection","Indian Banking Personnel System","International Banking Personnel Selection","Institute of Business Personnel Study"], ans:"Institute of Banking Personnel Selection", exams:["Banking"],                               topic:"Economics", diff:"easy"},
  {q:"Bank mein FD ka pura naam kya hai?",                 opts:["Fixed Deposit","Final Deposit","Finance Deposit","Firm Deposit"],                               ans:"Fixed Deposit",     exams:["Banking","GK","CET"],                     topic:"Economics", diff:"easy"},
  {q:"NEFT ka pura naam kya hai?",                         opts:["National Electronic Funds Transfer","National Entry Funds Transfer","New Electronic Funds Transfer","Net Electronic Funds Transaction"], ans:"National Electronic Funds Transfer", exams:["Banking","GK"],                          topic:"Economics", diff:"easy"},

  /* ── CET specific ── */
  {q:"Agar ek cheez ka mul mulya Rs 100 hai aur 20% discount de to bikri mulya kya hoga?", opts:["Rs 70","Rs 75","Rs 80","Rs 85"],                              ans:"Rs 80",             exams:["CET","SSC","Railway","Patwari","Police"], topic:"Maths", diff:"easy"},
  {q:"Ek train 60 km/h ki speed se 2 ghante mein kitni door jayegi?",                      opts:["100 km","110 km","120 km","130 km"],                           ans:"120 km",            exams:["CET","SSC","Railway"],                    topic:"Maths", diff:"easy"},
  {q:"Yadi ABCD ek series hai to agle 2 akshar kya honge? A, C, E, G, __?",               opts:["H, I","I, J","I, K","H, K"],                                  ans:"I, K",              exams:["CET","SSC","Police","Railway"],           topic:"Reasoning", diff:"easy"},

  /* ── REET specific ── */
  {q:"Bharat mein RTE Act kab lagu hua?",                  opts:["2005","2008","2010","2012"],                           ans:"2010",              exams:["REET","UPSC","SSC","GK"],                topic:"Polity", diff:"easy"},
  {q:"Bal Vikas ka siddhant kaunse pedagog ne diya?",      opts:["Piaget","Skinner","Pavlov","Thorndike"],               ans:"Piaget",            exams:["REET"],                                  topic:"Reasoning", diff:"easy"},
  {q:"REET ka pura naam kya hai?",                         opts:["Rajasthan Eligibility Examination for Teachers","Rajasthan Education Eligibility Test","Rajasthan Entry Exam for Teachers","Rajasthan Evaluation Exam for Teachers"], ans:"Rajasthan Eligibility Examination for Teachers", exams:["REET"],                                  topic:"Current", diff:"easy"},

  /* ── GENERAL KNOWLEDGE ── */
  {q:"Olympics mein sabse zyada gold medals kaunse desh ne jeete hain?",                   opts:["China","Russia","Great Britain","USA"],                        ans:"USA",               exams:["GK","CurrentAffairs","SSC","UPSC"],       topic:"Current", diff:"easy"},
  {q:"Bharat ka sabse uncha parvat kaun sa hai?",          opts:["Nanda Devi","K2","Kangchenjunga","Everest"],           ans:"Kangchenjunga",     exams:["GK","SSC","UPSC","CET"],                 topic:"Geography", diff:"easy"},

  /* ── CURRENT AFFAIRS ── */
  {q:"Bharat ke varman Pradhan Mantri kaun hain?",         opts:["Rahul Gandhi","Narendra Modi","Amit Shah","Yogi Adityanath"],                                  ans:"Narendra Modi",     exams:["CurrentAffairs","GK","SSC","UPSC","Railway","Patwari","Police","Banking","CET","REET"], topic:"Current", diff:"easy"},
  {q:"Bharat ne 2023 mein G20 ki adhyakshata ki, next summit kahan hui?",                  opts:["Brazil","South Africa","USA","China"],                         ans:"Brazil",            exams:["CurrentAffairs","GK","UPSC","SSC"],       topic:"Current", diff:"easy"},

  /* ── NEW: Previous Year Style Questions (with difficulty) ── */
  /* EASY */
  {q:"Bharat ka sabse chota rajya (area mein) kaun sa hai?",   opts:["Sikkim","Goa","Tripura","Manipur"],                ans:"Goa",                exams:["SSC","UPSC","Railway","Patwari","Police","GK","CET"],        topic:"Geography", diff:"easy"},
  {q:"Ek ghante mein kitne second hote hain?",                  opts:["1800","3000","3600","4200"],                       ans:"3600",                exams:["SSC","Railway","CET","Police","Patwari"],                    topic:"Maths",     diff:"easy"},
  {q:"Sabse halka element kaun sa hai?",                        opts:["Helium","Carbon","Hydrogen","Oxygen"],             ans:"Hydrogen",            exams:["SSC","Railway","Police","GK"],                               topic:"Science",   diff:"easy"},
  {q:"Bharat ki currency ka naam kya hai?",                     opts:["Dinar","Rupee","Taka","Pound"],                    ans:"Rupee",               exams:["SSC","Railway","Patwari","Police","GK","CET","REET"],        topic:"Economics", diff:"easy"},
  {q:"Mahatma Gandhi ka janmdin kab hai?",                      opts:["2 Oct","15 Aug","26 Jan","14 Nov"],                ans:"2 Oct",               exams:["SSC","UPSC","Railway","Patwari","Police","GK","REET"],       topic:"History",   diff:"easy"},

  /* MEDIUM */
  {q:"Bharat mein Lok Sabha ki kitni seats hain?",              opts:["542","543","544","545"],                           ans:"543",                 exams:["SSC","UPSC","Police","GK","CET","REET"],                     topic:"Polity",    diff:"medium"},
  {q:"GDP mein sabse bada yogdan kaunse sector ka hota hai?",   opts:["Agriculture","Industry","Services","Mining"],      ans:"Services",            exams:["UPSC","SSC","Banking","GK"],                                 topic:"Economics", diff:"medium"},
  {q:"Kaunsa Article mool adhikaron se sambandhit hai?",        opts:["Article 12-35","Article 36-51","Article 1-11","Article 51A"], ans:"Article 12-35",   exams:["UPSC","SSC","Police","REET","CET"],                         topic:"Polity",    diff:"medium"},
  {q:"Railway Budget ko General Budget mein kab mila diya gaya?", opts:["2015","2016","2017","2018"],                    ans:"2017",                exams:["Railway","UPSC","SSC","GK","CurrentAffairs"],                topic:"Current",   diff:"medium"},
  {q:"'Arthashastra' kiska granth hai?",                        opts:["Chanakya","Ashoka","Chandragupta","Vikramaditya"], ans:"Chanakya",            exams:["UPSC","SSC","GK","REET","CET"],                              topic:"History",   diff:"medium"},

  /* HARD — Previous Year Style */
  {q:"Bharat ke sangathan mein 'Concurrent List' mein kitne vishay hain? (42nd Amendment ke baad)", opts:["47","52","66","97"], ans:"52",             exams:["UPSC","SSC"],                                               topic:"Polity",    diff:"hard"},
  {q:"NABARD ki sthapna kab aur kis committee ki sifarish par hui?",  opts:["1982, Shivaraman","1980, Narasimham","1985, Kelkar","1975, Gadgil"], ans:"1982, Shivaraman", exams:["UPSC","Banking","SSC"],               topic:"Economics", diff:"hard"},
  {q:"Bharat mein pehli panchvarshiya yojana kab shuru hui?",  opts:["1950","1951","1952","1956"],                       ans:"1951",                exams:["UPSC","SSC","GK"],                                           topic:"Economics", diff:"hard"},
  {q:"'Kesavananda Bharati Case' kab decide hua tha?",          opts:["1971","1973","1975","1977"],                       ans:"1973",                exams:["UPSC","SSC"],                                                topic:"Polity",    diff:"hard"},
  {q:"Railway mein 'broad gauge' ki track width kitni hoti hai?", opts:["1435 mm","1676 mm","1000 mm","762 mm"],         ans:"1676 mm",             exams:["Railway","SSC"],                                             topic:"Science",   diff:"hard"},
];
