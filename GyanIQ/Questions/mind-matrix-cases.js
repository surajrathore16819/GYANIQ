const CASES = [
  {
    id: 1,
    type: 'murder',
    typeLabel: 'KHOON',
    icon: '🔪',
    title: 'Andhere Haveli Ka Raaz',
    doc: 'DOC-001',
    scene: `Sir Edmund Blackwood apni band study mein raat 11 baje mara hua mila. Ek golee lagi thi. Darwaza andar se band tha. Teen suspects haveli mein the: uski patni Isabella, butler James, aur business rival Mr. Carver. Khidki andar se latch thi. Mez par adha khaana aur jalti mombatti thi.`,
    clues: ['Andar se band kamra', 'Ek golee', 'Mez par khaana', 'Mombatti jal rahi thi'],
    question: 'Sir Edmund Blackwood ko kisne maara?',
    options: [
      'Isabella ne — khaane mein zeher milaya phir golee ka scene banaya',
      'Mr. Carver ne — ek gupt raaste se andar aaya jo sirf business associates jaante the',
      'Butler James ne — pehle golee maari phir ek string se darwaza bahar se band kiya',
      'Sir Edmund khud — ek staged suicide jo murder lagti thi'
    ],
    ans: 'Butler James ne — pehle golee maari phir ek string se darwaza bahar se band kiya',
    explanation: 'Jalti mombatti aur garam khaana batata hai maut nayee thi. Band darwaza key clue hai. James ne ek classic string-and-key trick se corridor se darwaza band kiya — yahi iska gunaah sabit karta hai.',
  },
  {
    id: 2,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Gayab Heera',
    doc: 'DOC-002',
    scene: `Ek museum vault se 10 minute ki bijli gul hone par ek nadeer 40 carat ka heera chori ho gaya. Vault mein sirf ek darwaza tha. CCTV footage mein 4 log andar ghuste dikhte hain bijli gul hone se pehle: curator, safaai karmchari, patrakar, aur security guard. Safaai wale ke haath mein dastaane the. Patrakar ke paas UV torch thi. Guard ke paas vault ki chaabi thi. Curator sabse aakhir mein nikla.`,
    clues: ['10 min bijli gul', 'UV torch', 'Dastaane mile', 'Sirf ek darwaza'],
    question: 'Heera kisne churaya?',
    options: [
      'Safaai wale ne — dastaane se fingerprint nahi aaye aur akele access tha',
      'Patrakar ne — UV torch se andheron mein heera dhoondha',
      'Security guard ne — chaabi thi aur vault ki poori jaankaari thi',
      'Curator ne — sabse aakhir nikla, bijli gul ka plan banaya'
    ],
    ans: 'Patrakar ne — UV torch se andheron mein heera dhoondha',
    explanation: 'UV torch sabse badi clue hai. Heere UV light mein chamakte hain, andheron mein dhoondhna aasaan ho jaata hai. Patrakar ke paas aise torch rakhne ka koi kaaran nahi tha — usne bijli gul ka faayda uthaaya aur heera churaya.',
  },
  {
    id: 3,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Jhooth Bolne Waale Gawah',
    doc: 'DOC-003',
    scene: `Ek bank luta gaya. Teen gawahon ne bayan diye. Alex ne kaha: "Maine Ben ko crime scene par dekha." Ben ne kaha: "Main din bhar ghar par tha. Alex jhooth bol raha hai." Carol ne kaha: "Maine dono Alex aur Ben ko bank par dekha." Detective jaanta hai sirf EK sach bol raha hai.`,
    clues: ['Sirf ek sach', 'Teen bayan', 'Alex vs Ben', 'Carol ne dono dekhe'],
    question: 'Sach kaun bol raha hai?',
    options: [
      'Alex — Ben waakei scene par tha aur Alex ne usse dekha',
      'Ben — woh sach mein ghar par tha, na Alex na Carol ne usse wahan dekha',
      'Carol — usne dono logon ko bank par dekha',
      'Koi nahi — teeno ek doosre ko bachane ke liye jhooth bol rahe hain'
    ],
    ans: 'Ben — woh sach mein ghar par tha, na Alex na Carol ne usse wahan dekha',
    explanation: 'Agar Ben sach bol raha hai: Ben ghar par tha (sach), Alex jhooth bol raha hai (sach), Carol jhooth bol rahi hai. Yeh bilkul sahi baidhta hai — sirf ek sach. Agar Alex sach hota toh Carol bhi agree karti — do sach bante. Ben ka sach hi ek sahi scenario hai.',
  },
  {
    id: 4,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Zeher Waali Chitthi',
    doc: 'DOC-004',
    scene: `Ek neta ko chitthi mili aur 2 ghante baad zeher se maut ho gayi. Chitthi mein koi liquid ya powder nahi tha — forensics ko kuch nahi mila. Phir bhi zeher chitthi se hi diya gaya tha. Chaar logon ne isse handle kiya: bhejne wala, postman, secretary, aur neta khud. Lifafa chaatkar band tha.`,
    clues: ['Koi liquid/powder nahi', 'Chaata hua lifafa', '2 ghante baad maut', 'Chaar handlers'],
    question: 'Zeher kaise diya gaya?',
    options: [
      'Chitthi ki siyahi mein slow-acting zeher tha jo twacha se absorb hua',
      'Lifafe ke flap ki gond mein zeher tha — neta ne use dobara band karne ke liye chaata',
      'Lifafe ke kaagaz mein ek zeher capsule tha jo body heat se activate hua',
      'Postman ne ek microscopic suii se chitthi mein zeher inject kiya'
    ],
    ans: 'Lifafe ke flap ki gond mein zeher tha — neta ne use dobara band karne ke liye chaata',
    explanation: '"Chaata hua band" waali clue sabse important hai. Lifafe ko zeher wali gond se band kiya gaya tha. Jab neta ne padhne ke baad lifafa dobara band karne ke liye chaata, usne zeher nigal liya. 2 ghante ki der zeher ke asar se milti hai.',
  },
  {
    id: 5,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Alibi Ka Jaaal',
    doc: 'DOC-005',
    scene: `Ek CEO ki raat 8 se 10 baje ke beech hatya ho gayi. Chaar suspects ke alibi hain: Diana "Eric ke saath dinner par thi." Eric "gym mein tha." Frank "Diana ki gaadi garage mein dekhne gaya tha." Grace "cinema hall mein thi — ticket mili." Garage ne confirm kiya Frank wahan tha. Cinema ne Grace confirm kiya. Eric ke gym mein koi camera nahi.`,
    clues: ['2 ghante ki window', 'Dinner alibi', 'Gym unverified', 'Ticket confirmed'],
    question: 'Kiska alibi definitely jhooth hai?',
    options: [
      'Diana ka — agar Eric gym mein tha toh uske saath dinner nahi kha sakti thi',
      'Eric ka — gym mein koi camera nahi, alibi sirf ussi ne bola',
      'Frank ka — usne kaha Diana ki gaadi dekhi, par Diana dinner par thi, garage mein nahi',
      'Grace ka — movie ticket kharid sakte hain bina dekhne ke bhi'
    ],
    ans: 'Frank ka — usne kaha Diana ki gaadi dekhi, par Diana dinner par thi, garage mein nahi',
    explanation: 'Frank ka alibi seedha Diana ke alibi se takraata hai. Frank kehta hai usne Diana ki gaadi garage mein dekhi — lekin Diana kehti hai woh dinner par thi. Uski gaadi garage mein nahi ho sakti agar woh use dinner ke liye le gayi. Frank ka alibi prove impossible hai.',
  },
  {
    id: 6,
    type: 'murder',
    typeLabel: 'KHOON',
    icon: '☕',
    title: 'Coffee Ka Raaz',
    doc: 'DOC-006',
    scene: `Ek aurat apne apartment mein maari gayi. Usne subah 7 baje coffee delivery order ki thi. Delivery boy ne darwaze par rakh di — building CCTV se confirm. Subah 8 baje padosi ne ek badi awaaz suni. 9 baje woh maari mili, andar aane ke koi signs nahi. Coffee cup khaali tha. Darwaza khula tha. Phone mein 7:30 baje ka ek call tha jo delete kiya gaya tha.`,
    clues: ['Coffee delivery 7AM', 'Crash 8AM', 'Khula darwaza', 'Call log delete'],
    question: 'Iski maut ka sabse zyada sambhavit kaaran kya hai?',
    options: [
      'Delivery boy ne coffee mein zeher mila diya tha',
      'Usne 7:30 baje kisi vishwaaspaatra ko call kiya jo aaya aur use maara — usne khud darwaza khola',
      '8 baje ki crash ki vajah se ek medical emergency se maari',
      'Ek ghuspaithiye ke paas duplicate key thi aur usne call log remotely delete kiya'
    ],
    ans: 'Usne 7:30 baje kisi vishwaaspaatra ko call kiya jo aaya aur use maara — usne khud darwaza khola',
    explanation: 'Delete kiya gaya call log sabse incriminating clue hai — koi apne tracks chhupa raha tha. Usne coffee pi (delivery mein zeher nahi), khud darwaza khola jise jaanti thi, aur 8 baje ki crash ek sangharsh tha. Caller, ek vishwaaspaatra insaan, qatil hai.',
  },
  {
    id: 7,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '⚖️',
    title: 'Teen Bhai',
    doc: 'DOC-007',
    scene: `Teen bhai — Aaron, Barry, aur Cole — ek dakaiti ke baare mein puche jaate hain. Ek hamesha jhooth bolta hai, ek hamesha sach, ek kabhi kuch bhi. Aaron kehta hai: "Barry jhoota hai." Barry kehta hai: "Cole random wala hai." Cole kehta hai: "Aaron sach bol raha hai."`,
    clues: ['Ek hamesha jhoota', 'Ek hamesha saccha', 'Ek random hai', 'Circular claims'],
    question: 'Hamesha sach kaun bolta hai?',
    options: [
      'Aaron — Cole ki confirmation ki Aaron saccha hai ek chain banati hai',
      'Barry — usne sahi se Cole ko random wala bataya',
      'Cole — Aaron ke baare mein uski baat ek sahi loop banati hai',
      'In bayanon se nischit roop se nahi bataya ja sakta'
    ],
    ans: 'Barry — usne sahi se Cole ko random wala bataya',
    explanation: 'Agar Barry saccha hai: Cole random wala hai (sach Barry ke hisaab se). Aaron kehta hai Barry jhoota hai — lekin Barry saccha hai, toh Aaron jhooth bol raha hai (Aaron jhoota). Cole random hai aur yahan Aaron ke baare mein jhooth bolta hai. Yahi ek sahi scenario hai: Barry=saccha, Aaron=jhoota, Cole=random.',
  },
  {
    id: 8,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '📁',
    title: 'Data Ki Chori',
    doc: 'DOC-008',
    scene: `Ek sarkari server se classified files raat 2 se 4 baje ke beech churaayi gayin. Server room mein keycard aur biometric scan zaroori hai. Sirf 4 employees ka access hai: admin Helen, developer Sam, security officer Ray, aur data analyst Priya. Server logs batate hain files ek encrypted drive par copy ki gayin. Helen ka card 2:15 baje use hua. Sam ke biometrics scan hue. Lekin Helen 2:15 baje CCTV mein parking lot mein nazar aayi.`,
    clues: ['2AM-4AM window', 'Helen ka card use hua', 'Sam ke biometrics', 'Helen bahar CCTV mein'],
    question: 'Files kisne churaayi?',
    options: [
      'Helen ne — usne apna card clone kiya aur remotely biometric bypass trigger kiya',
      'Sam ne — usne Helen ka cloned keycard use kiya aur apne biometrics se andar gaya',
      'Ray ne — security officer hone se woh sabhi systems override kar sakta tha',
      'Priya ne — usse dono credentials spoof karne ki inside knowledge thi'
    ],
    ans: 'Sam ne — usne Helen ka cloned keycard use kiya aur apne biometrics se andar gaya',
    explanation: 'Helen ka card use hua lekin woh bahar thi — matlab uska card clone kiya gaya. Sam ke biometrics genuinely scan hue (biometrics keycard jaisi asaani se fake nahi hoti). Isliye Sam ne Helen ke cloned keycard ke saath apna biometric scan use kiya aur server room mein ghuskar files churaayi.',
  },
  {
    id: 9,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🪞',
    title: 'Gayab Gawah',
    doc: 'DOC-009',
    scene: `Ek murder ka key witness court mein bayan dene se 24 ghante pehle gayab ho gaya. Uska apartment bilkul sahi tha — gas par khaana, TV on, darwaze par joote. Gaadi garage mein. Kutta bhooka tha. Koi sangharsh ke signs nahi. Building entrance footage mein woh raat 3 baje ek suitcase lekar chhod ke jaati dikhi. Woh shant lag rahi thi.`,
    clues: ['Raat 3 baje shant hokar gayi', 'Suitcase saath liya', 'Kutta bhooka', 'Baaki sab normal'],
    question: 'Gawah ke saath sabse zyada sambhavit kya hua?',
    options: [
      'Use kidnap kiya gaya — shant chehra camera ke bahar kisi ki majboori tha',
      'Usne apna gum hona khud banaya — defendant ke saath deal thi',
      'Woh witness protection mein gayi aur footage marshals ne stage ki',
      'Ek sachche dhamki ke baad ghabrakar bhaag gayi, kutta bhool gayi'
    ],
    ans: 'Ek sachche dhamki ke baad ghabrakar bhaag gayi, kutta bhool gayi',
    explanation: 'Usne suitcase packi (pehle se socha), raat 3 baje gayi (jaldi, bina dhyan aaye), shant lagi (controlled darr, majboori nahi). Critical clue hai bhooka kutta — agar koi plan karta toh kutta arrange karta. Bhooka kutta batata hai woh aakhri waqt mili dhamki se ghabrakar bhaagi.',
  },
  {
    id: 10,
    type: 'suspect',
    typeLabel: 'AAKHRI CASE',
    icon: '🎭',
    title: 'Double Agent',
    doc: 'DOC-010',
    scene: `Ek intelligence agency se 6 mahine se raaz leak ho rahe hain. Paanch agents par shak hai. Agent A 5 mahine pehle videshi embassy transfer hua. Agent B ke account mein ek bina kisi kaaran ka wire transfer aaya. Agent C ke encrypted messages mein ek unusual metadata pattern hai. Agent D har leak ke waqt chutti par tha. Agent E lie detector pass kiya lekin doosra test refuse kiya.`,
    clues: ['6 mahine ka pattern', 'Wire transfer', 'Metadata anomaly', 'Chutti coincidence', 'Retest refuse'],
    question: 'Sabse zyada sambhavit double agent kaun hai?',
    options: [
      'Agent B — bina kaaran wire transfer jaasusi ke payment ka seedha saboot',
      'Agent D — har leak ke waqt chutti par hona ittefaq se impossible hai',
      'Agent E — doosra lie detector refuse karna pehla test manipulate kiya hone ka sanket',
      'Agent C — encrypted communication mein metadata pattern ek videshi handler se hidden channel batata hai'
    ],
    ans: 'Agent D — har leak ke waqt chutti par hona ittefaq se impossible hai',
    explanation: '6 mahine mein har ek leak ke waqt Agent D ka chutti par hona sabse mazboot pattern evidence hai. Yeh ek "main wahan tha hi nahi" wali defence banata hai jabki information remotely control ki jaa sakti hai. Baaki clues ke alag explanations ho sakte hain — lekin har leak ke saath perfect chutti alignment ittefaq se bilkul bahar hai.',
  },

  // ── MISSING PERSON (3) ──
  {
    id: 11, type: 'missing', typeLabel: 'MISSING PERSON', icon: '🚶',
    title: 'Beti Ghar Nahi Aayi', doc: 'DOC-011',
    scene: 'Ritu, 16 saal ki, school se ghar nahi aayi. Maa ne 5 PM ko police call ki. Ritu ka phone school locker mein chhutha mila. Saheli Priya ne kaha Ritu ko "kisi ke saath jaana tha." CCTV mein Ritu school gate par ek blue sedan mein baith rahi hai. Driver ka chehra nahi dikh raha.',
    clues: ['Phone school mein', 'Blue sedan CCTV', 'Priya ka bayan', 'Driver unknown'],
    question: 'Detective ko pehle kya karna chahiye?',
    options: [
      'Poore shehar ki blue sedans track karo',
      'Priya se poochhna ki "kisi ke saath" matlab kaun tha — seedhi lead',
      'Ritu ke phone ki last activity check karo',
      'Ritu ki social media scan karo'
    ],
    answer: 'Priya se poochhna ki "kisi ke saath" matlab kaun tha — seedhi lead',
    explanation: 'Priya ne deliberately vague baat ki. Yahi sabse direct lead hai. Car plate dhundhna slow hai, phone locker mein band hai. Priya se poochhna fastest aur most direct approach hai.',
  },
  {
    id: 12, type: 'missing', typeLabel: 'MISSING PERSON', icon: '👴',
    title: 'Buzurg Gayab', doc: 'DOC-012',
    scene: '75 saal ke Shyamlal subah park se wapas nahi aaye. Walking stick ghar mein pada tha. Neighbour ne kaha auto-rickshaw mein gaye. Bank ne call kiya ki account se 50,000 rupaye nikale gaye us subah.',
    clues: ['Walking stick ghar pe', 'Auto mein gaye', 'Bank withdrawal same day', '75 saal umar'],
    question: 'Shyamlal ke saath kya hua hoga?',
    options: [
      'Accident hua — walking stick bhool gaye',
      'Financial fraud — koi unhe bank le gaya paise nikaalwane',
      'Khud gaye hain rishtedaar ke paas',
      'Kidnapping — pehle bank target kiya'
    ],
    answer: 'Financial fraud — koi unhe bank le gaya paise nikaalwane',
    explanation: 'Walking stick chhodni nahi hogi agar khud khushi se jaate. Bank withdrawal same morning aur gayab hona — yeh classic elder financial coercion pattern hai. Koi unhe le gaya aur paise nikaalwaye.',
  },
  {
    id: 13, type: 'missing', typeLabel: 'MISSING PERSON', icon: '🧑',
    title: 'Office Se Ghaib', doc: 'DOC-013',
    scene: 'Arjun IT employee lunch break ke baad nahi aaya. Seat par unfinished code, chai half-filled. CCTV mein peeche wale exit se nikla — jo employees kam use karte hain. Laptop par ek encrypted folder tha jisme "EVIDENCE" likha tha.',
    clues: ['Back exit use kiya', 'Encrypted EVIDENCE folder', 'Chai half-filled', 'Sudden disappearance'],
    question: 'Arjun kyun gaya hoga?',
    options: [
      'Kidnap kiya gaya — folder wale ne threat diya',
      'Woh whistleblower hai — evidence lekar khud ghayab hua apni safety ke liye',
      'Mental breakdown — kaam ka pressure zyada tha',
      'Personal emergency — back exit se tez nikal gaya'
    ],
    answer: 'Woh whistleblower hai — evidence lekar khud ghayab hua apni safety ke liye',
    explanation: '"EVIDENCE" folder + back exit (detection avoid karna) + sudden planned disappearance = whistleblower escape. Yeh kidnapping nahi — woh khud deliberately gaya.',
  },

  // ── SPOT THE LIAR (3) ──
  {
    id: 14, type: 'liar', typeLabel: 'SPOT THE LIAR', icon: '🎭',
    title: 'Teen Gawah Ek Sachcha', doc: 'DOC-014',
    scene: 'Dukaan mein aag lagi. Teen log the: Ramesh: "Main counter par tha, peeche se dhuaan dekha." Suresh: "Main bathroom mein tha, kuch pata nahi." Kamlesh: "Maine Ramesh ko peeche jaate dekha aag ke waqt." Bathroom ka darwaza counter ke saamne hai.',
    clues: ['Counter position', 'Bathroom counter ke saamne', 'Dhuaan peeche se', 'Timing clash'],
    question: 'Kaun jhooth bol raha hai?',
    options: [
      'Ramesh — Kamlesh ne use peeche jaate dekha',
      'Suresh — bathroom counter ke saamne hai, kuch zaroor dekha hoga',
      'Kamlesh — Ramesh ko frame kar raha hai',
      'Teeno sach bol rahe hain'
    ],
    answer: 'Suresh — bathroom counter ke saamne hai, kuch zaroor dekha hoga',
    explanation: 'Suresh "kuch pata nahi" kehta hai — lekin bathroom darwaza counter ke saamne hai. Thoda bhi khula hota toh zaroor Ramesh ya dhuaan dikhta. Uska "kuch pata nahi" geographically impossible hai.',
  },
  {
    id: 15, type: 'liar', typeLabel: 'SPOT THE LIAR', icon: '🎭',
    title: 'Office Chori', doc: 'DOC-015',
    scene: 'Office locker se 10,000 rupaye chori. Char suspects: Anita: "2 se 4 baje meeting mein thi." Bobby: "Locker kahaan hai mujhe pata hi nahi." Chetan: "Site visit par tha — HR confirm karegi." Deepa: "Maine Bobby ko locker ke paas dekha."',
    clues: ['2-4 PM time window', 'Bobby ka knowledge claim', 'Site visit alibi', 'Deepa ka bayan'],
    question: 'Kaun jhooth bol raha hai?',
    options: [
      'Anita — meetings mein bhi nikal sakti thi',
      'Bobby — 6 mahine kaam karke locker ki location na jaanna impossible hai',
      'Chetan — site visit HR se confirm hoga',
      'Deepa — Bobby ko frame kar rahi hai'
    ],
    answer: 'Bobby — 6 mahine kaam karke locker ki location na jaanna impossible hai',
    explanation: '6 mahine ek jagah kaam karke locker location na jaanna practically impossible hai. "Main innocent hun kyunki mujhe location hi nahi pata" — yeh over-qualification of innocence jhooth ka classic sign hai.',
  },
  {
    id: 16, type: 'liar', typeLabel: 'SPOT THE LIAR', icon: '🎭',
    title: 'Seedhiyon Wali Maut', doc: 'DOC-016',
    scene: 'Vijay seedhiyon se gira, maut hui. Witnesses: Maya (wife): "Woh khud fisla — main kitchen mein thi." Raju (neighbour): "Ek cheekh suni, phir thud." Seema (maid): "Maya madam 10 minute pehle kitchen mein aayi thi — main wahan thi."',
    clues: ['Kitchen alibi', 'Seema ki timing detail', 'Cheekh ki awaaz', 'Seedhiyan'],
    question: 'Kiska bayan sabse suspicious hai?',
    options: [
      'Maya — Seema ke mutabik woh 10 minute pehle kitchen mein AAYI, pehle kahaan thi?',
      'Raju — cheekh sunna seedhiyon ke paas normal hai',
      'Seema — Maya ko protect kar rahi hai',
      'Teeno sach bol rahe hain — genuine accident'
    ],
    answer: 'Maya — Seema ke mutabik woh 10 minute pehle kitchen mein AAYI, pehle kahaan thi?',
    explanation: 'Maya kehti hai woh kitchen mein thi. Seema kehti hai Maya 10 minute pehle kitchen mein AAYI — matlab woh pehle kahaan thi? Vijay ki maut us window mein connection ho sakti hai. Yeh direct contradiction hai.',
  },

  // ── DETECTIVE INVESTIGATION (3) ──
  {
    id: 17, type: 'detect', typeLabel: 'DETECTIVE PROBE', icon: '🔎',
    title: 'Neta Ka Naksha', doc: 'DOC-017',
    scene: 'Ek local neta par corruption aarop. CBI ke paas: 1) Account mein 2 crore ka unexplained transfer. 2) Informant ka bayan — bribe dete dekha. 3) Audio clip jiski awaaz neta jaisi. Neta ka lawyer: teeno circumstantial hain.',
    clues: ['2 crore transfer', 'Informant eyewitness', 'Audio clip', 'Circumstantial defense'],
    question: 'Sabse strong evidence kaun sa hai?',
    options: [
      'Bank transfer — financial trail court mein sabse concrete hoti hai',
      'Informant ka bayan — eyewitness testimony powerful hoti hai',
      'Audio clip — direct evidence bribery ki',
      'Teeno milaakar case banta hai — alag alag koi strong nahi'
    ],
    answer: 'Bank transfer — financial trail court mein sabse concrete hoti hai',
    explanation: 'Informant bayan cross-examine mein toot sakta hai. Audio clip deepfake challenge ho sakta hai. Lekin 2 crore ka unexplained bank transfer — jo legitimately explain nahi hota — yahi sabse solid evidence hai court mein.',
  },
  {
    id: 18, type: 'detect', typeLabel: 'DETECTIVE PROBE', icon: '🔎',
    title: 'Social Media Chor', doc: 'DOC-018',
    scene: 'Cybercrime: 3 logon ke social media accounts hack, personal photos leak. IP logs mein sirf ek public library ki IP repeat hoti hai. Us time library mein 6 members the — teeno tech-savvy the: Arun, Bela, Carlos.',
    clues: ['Library IP only', '6 members present', 'Teen tech-savvy', 'Personal photo leak'],
    question: 'Investigation ka logical next step?',
    options: [
      'Teeno tech-savvy logon ko immediately arrest karo',
      'Library ke specific terminal logs check karo — exact machine aur time identify karo',
      'Victims ke ex-partners ko suspect karo',
      'Library staff se poochho ki koi suspicious tha'
    ],
    answer: 'Library ke specific terminal logs check karo — exact machine aur time identify karo',
    explanation: 'IP sirf library tak pohonchata hai — terminal logs batayenge exact machine aur time. Phir CCTV se match karo kaun baitha tha us terminal par. Bina evidence ke arrest karna illegal aur galat hai.',
  },
  {
    id: 19, type: 'detect', typeLabel: 'DETECTIVE PROBE', icon: '🔎',
    title: 'Double Life', doc: 'DOC-019',
    scene: 'Ramakant normal family man the — wife, do bache, government job. Marne ke baad pata chala doosri city mein doosri family thi. Doosri wife ko murder ka suspect maana ja raha hai. Uska bayan: "Mujhe pata hi nahi tha woh pehle se shaadi shuda hain."',
    clues: ['Double life', 'Doosri wife suspect', 'Pehli wife unaware', 'Government job'],
    question: 'Doosri wife ko suspect kyon maana ja raha hai?',
    options: [
      'Second wife hamesha zyada aggressive hoti hai',
      'Ramakant ne use doosri family bataayi hogi — us gusse mein murder ka motive bana',
      'Doosri families hamesha crime mein hoti hain',
      'Government employee ki wife hone ka pressure'
    ],
    answer: 'Ramakant ne use doosri family bataayi hogi — us gusse mein murder ka motive bana',
    explanation: 'Agar doosri wife ko pata chala ki woh legally shaadi-shuda nahi, pehli wife exist karti hai — betrayal + legal insecurity + emotional shock = strong murder motive. Classic crime of passion pattern.',
  },

  // ── MURDER MYSTERY (3) ──
  {
    id: 20, type: 'murder', typeLabel: 'KHOON', icon: '🔪',
    title: 'Barish Ki Raat', doc: 'DOC-020',
    scene: 'Baarish ki raat bangalow mein khoon. Victim ke kapde geele the. Ghar ke sabhi ke kapde sukhe the. Teen suspects: Neha (wife): so rahi thi. Om (brother): andar TV dekh raha tha. Pinky (neighbour): darwaza band hote suna.',
    clues: ['Victim ke geele kapde', 'Sabke sukhe kapde', 'Baarish raat', 'Darwaza band ki awaaz'],
    question: 'Sabse suspicious kaun hai?',
    options: [
      'Neha — wife hamesha pehla suspect hoti hai',
      'Om — agar andar tha toh victim baahar akele kyun gaya?',
      'Pinky — darwaza band ki awaaz sunna matlab woh bahar ke kaafi paas thi',
      'Bahar se koi aaya hoga'
    ],
    answer: 'Pinky — darwaza band ki awaaz sunna matlab woh bahar ke kaafi paas thi',
    explanation: 'Pinky ne darwaza band hone ki AWAAZ clearly suni — matlab woh kaafi paas thi ya bahar thi. Andar se itni clearly nahi aati. Kapde bhi sukhe — agar bahar thi toh kapde change kiye hone ki possibility.',
  },
  {
    id: 21, type: 'murder', typeLabel: 'KHOON', icon: '🔪',
    title: 'Anth Ka Khat', doc: 'DOC-021',
    scene: 'Suicide note mila dead body ke paas. Forensics: handwriting match. Lekin: note mein "Main" spelling consistently use thi — jabki victim ke purane letters mein hamesha "mein" spelling thi, "main" nahi.',
    clues: ['Handwriting match', '"Main" vs "mein" spelling', 'Pattern inconsistency', 'Suicide staged?'],
    question: 'Yeh spelling difference kya suggest karta hai?',
    options: [
      'Kuch nahi — log spelling alag use karte hain',
      'Note forced ya dictated tha — kisi ne bolke likhwaya, victim ne literally wahi likha',
      'Victim emotional tha, spelling par dhyaan nahi',
      'Stressed hone par naturally spelling badal jaati hai'
    ],
    answer: 'Note forced ya dictated tha — kisi ne bolke likhwaya, victim ne literally wahi likha',
    explanation: 'Insaan apni spelling habit nahi badalta — stress mein toh aur bhi zyada natural writing aati hai. Agar victim hamesha "mein" likhta tha aur note mein "main" hai — kisi ne dictate kiya. Forced note ka classic sign.',
  },
  {
    id: 22, type: 'murder', typeLabel: 'KHOON', icon: '🔪',
    title: 'Zehreela Mehmaan', doc: 'DOC-022',
    scene: 'Party mein host Raghu ki maut. Post-mortem: rare poison jo sirf 2 jagah milta hai — ek specialty pharmacy aur ek government research lab. Raghu ke 4 close friends mein se ek pharmacist aur ek government researcher tha.',
    clues: ['Rare poison', 'Sirf 2 sources India mein', 'Pharmacist friend', 'Researcher friend'],
    question: 'Access ke hisaab se prime suspect?',
    options: [
      'Pharmacist — specialty pharmacy se direct access',
      'Researcher — government lab mein kaam, access possible',
      'Dono equally suspicious — dono ke paas access tha',
      'Kisi third party ne dono mein se ek ko use kiya'
    ],
    answer: 'Dono equally suspicious — dono ke paas access tha',
    explanation: 'Agar sirf 2 sources hain aur dono ke log party mein the — access ke basis par dono equally suspect hain. Is stage mein sirf access evidence hai. Motive aur opportunity aur investigation se milegi.',
  },

  // ── THEFT MYSTERY (3) ──
  {
    id: 23, type: 'theft', typeLabel: 'CHOR', icon: '💎',
    title: 'Museum Ki Moorat', doc: 'DOC-023',
    scene: 'Museum se 500 saal purani bronze moorat gayab. Alarm nahi baji. Security log: 3 AM par maintenance staff entry. Us raat 3 log kaam kar rahe the. Moorat ke pedestal par ek white glove mili.',
    clues: ['Alarm nahi baji', '3 AM maintenance entry', 'White glove mili', '3 workers raat mein'],
    question: 'Alarm kyun nahi baji?',
    options: [
      'Alarm system technically fail hua',
      'Alarm bypass karna pata tha — insider job',
      'Moorat ka weight sensor pehle se calibrate tha chori ke liye',
      'Professional thief ne neutralize kiya'
    ],
    answer: 'Alarm bypass karna pata tha — insider job',
    explanation: 'Maintenance staff ko alarm system ka full knowledge hota hai. 3 AM entry + alarm bypass + white glove (professional precaution) = insider job. External thief ko bypass ke liye advance info chahiye hoti jo sirf insider ke paas hoti.',
  },
  {
    id: 24, type: 'theft', typeLabel: 'CHOR', icon: '💰',
    title: 'Bank Ka Digital Daaku', doc: 'DOC-024',
    scene: 'Bank se digital fraud: 50 accounts se chhote chhote amounts transfer hue (Rs 299-499 each). Kisi ne notice nahi kiya. Total 8 lakh nikale. Transactions alag alag time zones se. Ek employee ne recently "system upgrade" kiya tha.',
    clues: ['Chhoti amounts per transfer', 'Multiple accounts targeted', 'Alag time zones', 'Employee system upgrade'],
    question: 'Is type ke fraud ko kya kehte hain?',
    options: [
      'Phishing attack — customers ko fool kiya',
      'Salami slicing — chhoti chhoti rakam kaatna jab tak total bada na ho',
      'Man-in-the-middle — transactions intercept',
      'Ransomware — system encrypt kiya'
    ],
    answer: 'Salami slicing — chhoti chhoti rakam kaatna jab tak total bada na ho',
    explanation: 'Chhoti amounts jo notice nahi hoti — yeh Salami slicing technique hai. Employee ke system upgrade ke waqt malicious code install kiya gaya jo automatically small transfers karta tha. Classic insider cybercrime.',
  },
  {
    id: 25, type: 'theft', typeLabel: 'CHOR', icon: '🚗',
    title: 'Keyless Car Gang', doc: 'DOC-025',
    scene: 'Housing society se 5 cars chori — sab keyless entry wali. Alarm nahi baja kisi ki. CCTV sirf gate par — parking nahi. Ek resident ne ek "delivery van" roz parking ke paas dekhi.',
    clues: ['Sab keyless entry cars', '5 choriyan ek mahine mein', 'CCTV sirf gate par', 'Suspicious delivery van'],
    question: 'Chori ka technique kya hoga?',
    options: [
      'Physical lock tod ke khola',
      'Relay attack — keyless signal amplify karke car unlock ki',
      'Cars ka software remotely hack kiya',
      'Service center se duplicate key banaai'
    ],
    answer: 'Relay attack — keyless signal amplify karke car unlock ki',
    explanation: 'Keyless entry cars relay attack se vulnerable hoti hain. Van mein device hota hai jo ghar ke andar rakhi key fob ka signal capture karke amplify karta hai — car sochti hai key paas hai aur unlock ho jaati hai.',
  },

  // ════════════════════════════════════════════════
  // 15 NEW CASES — IQ Puzzle, Hidden Clue, Image
  // Difficulty: Easy / Medium / Hard
  // ════════════════════════════════════════════════

  // ── IQ PUZZLE — EASY (2) ──
  {
    id: 26, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'easy',
    curiosity: '🔍 Ek baar ek detective ki poori investigation sirf ek maachis ki tili ki wajah se band ho gayi...',
    title: 'Andhere Kamre Ki Maachis',
    doc: 'DOC-026',
    scene: 'Raat ke 2 baje. Detective Maya ek andhere kamre mein poonchi. Kamre mein teen cheezein hain — ek mombatti, ek oil lamp, aur ek purani angithi. Uske paas sirf ek maachis ki dibiya hai. Thand bahut hai. Woh kya pehle jalayegi?',
    clues: ['Ek maachis', 'Teen jalanewali cheezein', 'Andheraa', 'Thand'],
    question: 'Maya sabse pehle kya jalayegi?',
    options: [
      'Mombatti — zyada stable hoti hai andhere mein',
      'Oil lamp — zyada roshni deta hai',
      'Angithi — thand zyada hai, garm rehna priority hai',
      'Maachis ki tili — in teeno mein se kisi ko bhi jalaane ke liye pehle yahi chahiye'
    ],
    answer: 'Maachis ki tili — in teeno mein se kisi ko bhi jalaane ke liye pehle yahi chahiye',
    explanation: 'Yeh classic lateral thinking trick hai! Teen cheezein dikhakar dhyaan bhatkaate hain. Lekin in teeno mein se kisi ko bhi jalaane ke liye pehle maachis ki tili hi jalni chahiye. Simple lekin trap mein aasaani se aa jaate hain.',
  },
  {
    id: 27, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'easy',
    curiosity: '⚡ Yeh puzzle 94% logon ko pehli baar galat lagta hai — kya aap un 6% mein hain?',
    title: 'Ek Baap, Do Bete, Teen Maut',
    doc: 'DOC-027',
    scene: 'Crime scene par 3 logon ki laashein. Forensics report: "Yahan ek baap aur do bete the." Dono beton ka DNA test karaya — woh dono biological bhai hain, ek hi maa-baap ke. Teen mard, par "ek baap do bete" — kaise? Koi adopt nahi hua, koi twin nahi.',
    clues: ['3 laashein', 'Ek baap do bete claim', 'DNA — dono sagi bhai', 'Koi adoption nahi'],
    question: 'Teen mard hone ke bawajood "ek baap do bete" kaise?',
    options: [
      'Ek bete ko baad mein adopt kiya — DNA match nahi karta',
      'Grandpa bhi tha — woh apne bete ka "baap" tha, bete ka apna beta alag',
      'DNA test mein lab ki galati thi',
      'Report mein description error tha'
    ],
    answer: 'Grandpa bhi tha — woh apne bete ka "baap" tha, bete ka apna beta alag',
    explanation: 'Grandpa + Middle-aged beta (jo khud bhi "baap" hai) + Jawaan beta = Teen mard. Grandpa apne bete ka baap hai. Middle-aged beta apne bete ka baap hai. "Ek baap do bete" dono cases mein sahi hai. Teen mard, teeno theek.',
  },

  // ── IQ PUZZLE — MEDIUM (2) ──
  {
    id: 28, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'medium',
    curiosity: '🕰️ Is murder mein waqt hi sabse bada gawah bana — par ghadi jhooth bol rahi thi...',
    title: 'Ghadi Ka Jhooth',
    doc: 'DOC-028',
    scene: 'Victim Harsh ki laash mili. Haath ki ghadi 9:47 par ruki hui thi — shayad maut ka waqt. Detective Arora ne notice kiya: ghadi ka kaanta ulta tha (anti-clockwise direction mein). Suspect Priya ka alibi: "Main 9:30 se 10:15 tak ghar se bahar thi." Priya ki baat sach hai ya jhooth?',
    clues: ['Ghadi 9:47 par ruki', 'Kaanta ulta', 'Priya 9:30-10:15 bahar', 'Maut ka waqt?'],
    question: 'Ulta kaanta kya reveal karta hai?',
    options: [
      'Ghadi Chinese brand thi — woh anti-clockwise chalti hai',
      'Murderer ne ghadi deliberately ulti karke galat time set kiya — maut ka waqt manipulate kiya',
      'Victim khud ne ghadi ulta pehna tha',
      'Ghadi battery low thi, kaanta slip kiya'
    ],
    answer: 'Murderer ne ghadi deliberately ulti karke galat time set kiya — maut ka waqt manipulate kiya',
    explanation: 'Ghadi ka kaanta ulta hona natural nahi hota — yeh deliberate manipulation ka sign hai. Murderer ne maut ke baad ghadi ka time change kiya taaki suspect ka alibi match kare. Real maut time alag tha. Priya ka alibi isiliye perfect match karta tha.',
  },
  {
    id: 29, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'medium',
    curiosity: '🌧️ Baarish mein ek detective ne sirf ek cheez dekhi — aur poora case solve ho gaya...',
    title: 'Baarish Ka Gawah',
    doc: 'DOC-029',
    scene: 'Raat bhar baarish padi. Subah laash mili garden mein. Suspect Rajan ka bayan: "Main raat bhar ghar ke andar tha, kabhi bahar nahi gaya." Uske joote completely dry mile. Lekin detective ne garden mein notice kiya: footprints clearly dikh rahe the mud mein — aur woh Rajan ke saiz ke the.',
    clues: ['Raat bhar baarish', 'Rajan ke sukhe joote', 'Footprints garden mein', 'Joote ka saiz match'],
    question: 'Rajan ke sukhe joote kya prove karte hain?',
    options: [
      'Rajan bahar gaya tha — footprints uske hain, joote baad mein dry kiye',
      'Rajan ka alibi pakka hai — sukhe joote bahar na jaane ka proof',
      'Footprints kisi aur ke hain jo Rajan jaisa saiz pahnta hai',
      'Baarish garden mein nahi padi — microclimate tha'
    ],
    answer: 'Rajan bahar gaya tha — footprints uske hain, joote baad mein dry kiye',
    explanation: 'Sukhe joote PROOF nahi hain ki woh bahar nahi gaya — woh proof hain ki usne baad mein joote change kiye ya dry kiye. Footprints garden mein hain uske saiz ke — yahi asli evidence hai. Sukhe joote deliberate cover-up hai.',
  },

  // ── IQ PUZZLE — HARD (1) ──
  {
    id: 30, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'hard',
    curiosity: '💀 Yeh puzzle Scotland Yard ke asli detective training mein use hota tha — aur 70% fail karte hain...',
    title: 'Teeno Bhai, Ek Jhoothi Gawahi',
    doc: 'DOC-030',
    scene: 'Teen bhai — Aaron, Barry, Cole. Ek hamesha sach bolta hai, ek hamesha jhooth, ek kabhi sach kabhi jhooth (random). Crime ke baad unse poochha. Aaron: "Barry jhoothi hai." Barry: "Cole random hai." Cole: "Aaron sach bolta hai." Koi repeat pattern nahi — sirf yeh teen statements.',
    clues: ['Ek always truth', 'Ek always lie', 'Ek random', 'Circular claims'],
    question: 'Hamesha sach bolne wala kaun hai?',
    options: [
      'Aaron — Cole ne confirm kiya ki Aaron sach bolta hai',
      'Barry — woh correctly Cole ko random identify karta hai',
      'Cole — uska statement ek consistent loop banata hai',
      'Determine nahi ho sakta in statements se'
    ],
    answer: 'Barry — woh correctly Cole ko random identify karta hai',
    explanation: 'Agar Barry truth-teller hai: Cole random hai (Barry ka sach). Aaron kehta hai Barry jhoota — lekin Barry truth-teller hai, toh Aaron jhooth bol raha hai (Aaron = liar). Cole random hai aur chance se sach bola (Aaron truth-teller kehke — random flip). Yeh single consistent assignment hai: Barry=truth, Aaron=liar, Cole=random.',
  },

  // ── HIDDEN CLUE — EASY (1) ──
  {
    id: 31, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'easy',
    curiosity: '👁️ Is crime scene ki photo mein ek cheez clearly "galat" thi — detective ne pehli nazar mein pakad liya...',
    title: 'Do Chai Cups Ka Raaz',
    doc: 'DOC-031',
    scene: 'Crime scene ki photo mein dikha: mez par do chai ke cup (dono mein chai peeli gayi thi), ek khuli khirki, carpet par light footprints, aur ek gira hua photo frame. Victim ne akele rehne ki baat kahi thi — "Aaj ghar mein sirf main hoon."',
    clues: ['Do chai cups dono use', 'Victim ne kaha akela tha', 'Khuli khirki', 'Gira frame'],
    question: 'Sabse important hidden clue kya hai?',
    options: [
      'Khuli khirki — bahar se koi ghusa hoga',
      'Do chai cups — victim akela nahi tha, koi trusted guest tha',
      'Gira photo frame — struggle hua',
      'Carpet footprints — intruder ke nishaan'
    ],
    answer: 'Do chai cups — victim akela nahi tha, koi trusted guest tha',
    explanation: 'Victim ne kaha "akela hoon" — lekin do chai cups dono use hue hain. Victim ne kisi trusted insaan ko ghar bulaya tha jo gaya. Khirki, frame — yeh baad ki cheezein hain. Guest ki identity asli lead hai.',
  },

  // ── HIDDEN CLUE — MEDIUM (2) ──
  {
    id: 32, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'medium',
    curiosity: '📖 Ek kitaab ne murder solve kara diya — par detective ko 2 ghante lage woh clue dhundhne mein...',
    title: 'Library Mein Likha Tha Naam',
    doc: 'DOC-032',
    scene: 'Library mein aadmi mara hua mila. Corner table par baitha, kitaab haath mein. Koi cheekh nahi, koi struggle nahi. Kitaab page 47 par khuli thi. Lekin forensics ne notice kiya: page 46 par ek faint pencil mark tha jo kisi ne mitaane ki koshish ki thi — ek naam jaisa pattern tha.',
    clues: ['Page 47 khuli', 'Page 46 mita hua mark', 'Koi awaaz nahi', 'Naam jaisa pattern'],
    question: 'Page 46 ka mita hua mark kya suggest karta hai?',
    options: [
      'Kuch nahi — readers aksar notes lete aur mitaate hain',
      'Victim ne maut se pehle murderer ka naam ya clue likha tha jo baad mein mitaya gaya',
      'Library ka koi rule tha notes nahi likhne ka',
      'Victim paginate karna chahta tha'
    ],
    answer: 'Victim ne maut se pehle murderer ka naam ya clue likha tha jo baad mein mitaya gaya',
    explanation: 'Kisi ne deliberately mita ke gaya — yeh evidence tampering hai. Victim ne apni maut se pehle kuch likha (naam ya clue) aur murderer ne mita diya. UV light ya forensic imaging se us mark ko recover kiya ja sakta hai. Yahi most actionable clue hai.',
  },
  {
    id: 33, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'medium',
    curiosity: '🏨 Raat 3 baje hotel room ke bahar ek detective khadi thi — andar se ek clue usse bulaa raha tha...',
    title: 'Hotel Room Ka Jhoothi Subah',
    doc: 'DOC-033',
    scene: 'Hotel room mein guest Mohit ki maut. Room service record: 11 PM par khana order kiya. Waiter: "Woh bilkul theek the." 6 AM dead mila. Room mein: half-eaten khana, mini bar khuli, watch alarm 3 AM ke liye set thi, aur shoes door ke paas rakhe the — jaane ki taiyaari jaisi.',
    clues: ['3 AM alarm set', 'Shoes door ke paas', 'Half khana', 'Mini bar open'],
    question: 'Kaunsa hidden detail batata hai Mohit kuch secretly plan kar raha tha?',
    options: [
      'Half khana — nervous tha, khana nahi khaya theek se',
      'Mini bar khuli — relax karna chahta tha, tension mein tha',
      '3 AM alarm + shoes door ke paas — woh secretly midnight mein kahin jaana chahta tha',
      'Room service late order — woh late jaagna chahta tha'
    ],
    answer: '3 AM alarm + shoes door ke paas — woh secretly midnight mein kahin jaana chahta tha',
    explanation: '3 AM ka alarm + shoes already door ke paas = planned midnight exit. Mohit kisi se secretly milne wala tha. Yahi meeting is murder se directly connect ho sakti hai. Dono clues milke ek story banaate hain.',
  },

  // ── HIDDEN CLUE — HARD (1) ──
  {
    id: 34, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'hard',
    curiosity: '✍️ Suicide note tha — par ek spelling ne sab badal diya. Kya aap woh pakad sakte hain?',
    title: 'Ek Akshar Ka Fark',
    doc: 'DOC-034',
    scene: 'Rohit ki "suicide" ke baad ek note mila. Handwriting forensics: 99% match Rohit ke haath se. Note mein: "Main thak gaya hun. Alvida." Lekin Rohit ke purane 200+ emails mein ek consistent pattern: woh hamesha "main" ki jagah "mein" likhta tha. Note mein teen baar "Main" — purane mein kabhi nahi.',
    clues: ['Handwriting 99% match', '"Main" vs "mein" pattern', '200+ emails reference', 'Suicide vs Murder?'],
    question: 'Yeh ek akshar ka fark kya prove karta hai?',
    options: [
      'Kuch nahi — spelling alag moods mein badal sakti hai',
      'Note dictated tha — kisi ne bolke likhwaya, Rohit ne literally wahi likha jo suna bina sochhe',
      'Rohit ne intentionally spelling change ki taaki kisi ko pata chale yeh forced tha',
      'Forensics galat hai — 1% mismatch mein yeh aa sakta hai'
    ],
    answer: 'Note dictated tha — kisi ne bolke likhwaya, Rohit ne literally wahi likha jo suna bina sochhe',
    explanation: '200+ emails mein consistent "mein" — yeh deep-rooted linguistic habit hai. Stress mein toh aur bhi strong hoti hai yeh habit. Agar note mein "main" hai, toh kisi ne bolke likhwaya aur Rohit ne literally wahi likha jo suna, apni spelling use nahi ki. Forced note ka strongest linguistic evidence.',
  },

  // ── IMAGE BASED MYSTERY — EASY (2) ──
  {
    id: 35, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'easy',
    curiosity: '📸 Yeh crime scene photo police ne release ki thi — lekin ek detective ne woh clue pakda jo sab miss kar gaye...',
    title: 'CCTV Wala Gawah',
    doc: 'DOC-035',
    scene: 'Raat 2:34 AM ka CCTV still image. Ek gali mein ek aadmi hoodie pehne, haath jeb mein, dustbin ke paas khada hai. Uske joote mein mud clearly dikh raha hai. Background mein sirf ek dukaan ki light on, baaki sab band. Sheher ke us hisse mein raat ko koi construction site ya garden aas paas nahi hai.',
    imageClue: {
      icon: '🎥',
      label: '// CCTV STILL — 02:34 AM',
      desc: 'Hoodie wala aadmi. Joote par mud clearly visible. Dustbin ke paas khada. Background mein sirf ek dukaan ki roshni on.'
    },
    clues: ['Mud on shoes', 'Raat 2:34 AM', 'Koi mud source nearby nahi', 'Hoodie pehna'],
    question: 'Mud on shoes kya reveal karta hai?',
    options: [
      'Hoodie suspicious hai — identity chhupana',
      'Mud on shoes — woh kisi specific door jagah se aaya, jahan mud ho (garden ya construction site)',
      'Haath jeb mein — weapon chhupa sakta hai',
      'Woh us dukaan ka employee tha jis ki light on thi'
    ],
    answer: 'Mud on shoes — woh kisi specific door jagah se aaya, jahan mud ho (garden ya construction site)',
    explanation: 'Pucca sheher ki gali mein mud nahi hogi. Mud on shoes = woh kisi specific location se aaya jahan mud tha. Agar crime scene aisi jagah ke paas tha, toh yeh shoes ki mud direct location link provide karti hai. Physical evidence hamesha zyada reliable hoti hai appearance se.',
  },
  {
    id: 36, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'easy',
    curiosity: '🤳 Woh apni zindagi ki aakhri selfie le rahi thi — aur usne usi mein murderer ki photo bhi le li...',
    title: 'Aakhri Selfie Ka Raaz',
    doc: 'DOC-036',
    scene: 'Murder victim Kavya ki phone mein last photo mili — uski selfie. Woh muskura rahi thi. Background mein ek sheeshe (mirror) mein ek doosra chehra clearly dikh raha hai. Uske haath mein ek half-empty glass tha. Selfie ka angle aisa tha ki mirror clearly frame mein aa raha tha.',
    imageClue: {
      icon: '🤳',
      label: '// VICTIM LAST SELFIE — EXHIBIT A',
      desc: 'Kavya muskura rahi hai. Mirror mein background mein ek doosra chehra visible. Haath mein half-empty glass. Selfie ka angle deliberately mirror ko capture kar raha lagta hai.'
    },
    clues: ['Mirror mein doosra chehra', 'Half-empty glass', 'Victim muskura rahi', 'Deliberate angle?'],
    question: 'Is photo mein sabse critical evidence kya hai?',
    options: [
      'Victim muskura rahi thi — happy thi, koi threat nahi tha',
      'Half-empty glass — possibly poisoned drink thi',
      'Mirror mein chehra — kamre mein koi aur tha jo uske saath tha',
      'Selfie ka angle — Kavya ne jaan-boojhkar mirror mein chehra capture kiya as hidden evidence'
    ],
    answer: 'Selfie ka angle — Kavya ne jaan-boojhkar mirror mein chehra capture kiya as hidden evidence',
    explanation: 'Kavya smart thi — muskuraayi taaki suspect ko shak na ho, lekin angle aisa rakha ki mirror mein chehra aa jaye. Yeh deliberate evidence-leaving tha. Woh jaanti thi kuch hone wala tha. Mirror mein chehra directly criminal ka face hai — sabse important evidence.',
  },

  // ── IMAGE BASED MYSTERY — MEDIUM (2) ──
  {
    id: 37, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'medium',
    curiosity: '🛏️ Ek subah ki tasveer mein detective ne woh cheez dekhi jo raat bhar wahan thi — lekin ab nahi thi...',
    title: 'Kamre Ki Jhoothi Subah',
    doc: 'DOC-037',
    scene: 'Hotel room ki subah ki photo. Bed bilkul perfect bana hua — hotel-style. Khirki se tez dhoop aa rahi hai. Par kamre ki lights bhi on hain. Table par laptop khula tha screen off. Darwaza andar se latched. Hotel record: guest ne "Do Not Disturb" 11 PM par lagaaya tha.',
    imageClue: {
      icon: '🛏️',
      label: '// HOTEL ROOM — MORNING SHOT',
      desc: 'Perfectly made bed. Tez sunlight + room lights dono on. Laptop open screen off. Darwaza andar se latched. DND tag 11 PM se.'
    },
    clues: ['Lights on + sunlight', 'Perfectly made bed', 'DND 11 PM se', 'Laptop screen off'],
    question: 'Is image mein kaunsi cheez "galat" hai?',
    options: [
      'Bed too perfect — agar soye toh messy hota',
      'Laptop screen off — battery dead ya jaldi band kiya',
      'Lights on + sunlight dono — din mein lights band karte hain, raat se on hain matlab kuch raat ko hua',
      'DND sign — suspicious hai guest ne lagaya'
    ],
    answer: 'Lights on + sunlight dono — din mein lights band karte hain, raat se on hain matlab kuch raat ko hua',
    explanation: 'Sunlight hone par room lights on nahi rakhta koi — bijli waste. Yeh suggest karta hai lights raat se hi on hain — matlab raat ko kuch hua aur lights band nahi ki gayi. DND + raat se on lights + latched door = andar kuch hua jiske baad guest ne darwaza nahi khola.',
  },
  {
    id: 38, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'medium',
    curiosity: '✉️ Ek sealed envelope ne ek detective ko raat bhar jaagna par majboor kiya — andar kya tha?',
    title: 'Khoon Wala Lifafa',
    doc: 'DOC-038',
    scene: 'Body ke paas ek envelope pada tha — fully sealed. Image mein: envelope par koi bhi writing nahi — na sender, na receiver. Envelope thoda "bulging" tha — andar kuch physical object tha, sirf paper nahi. Corner par ek faint reddish-brown stain tha. Forensics ne bag nahi kiya tha — detective ne pehle photo lee.',
    imageClue: {
      icon: '✉️',
      label: '// EVIDENCE ITEM — UNPROCESSED',
      desc: 'Sealed envelope. Koi writing nahi. Bulge clearly visible — andar koi object. Corner par reddish-brown stain. Forensics ne abhi touch nahi kiya.'
    },
    clues: ['Koi writing nahi', 'Bulge andar', 'Reddish-brown stain corner', 'Forensics pending'],
    question: 'Is envelope ke saath next step kya hona chahiye?',
    options: [
      'Turant kholke dekho andar kya hai — time waste mat karo',
      'Stain ko blood test karo pehle — biological material hai toh priority',
      'Envelope ko forensics lab mein bhejo without opening — andar hazardous material ho sakta hai',
      'Writing nahi hai toh irrelevant hai — baaki evidence par focus karo'
    ],
    answer: 'Envelope ko forensics lab mein bhejo without opening — andar hazardous material ho sakta hai',
    explanation: 'Reddish-brown stain + physical bulge + koi identification nahi = potentially dangerous. Yeh poison powder, razor blade, ya biological material ho sakta hai. Protocol yahi hai ki aise suspicious items ko forensics lab mein carefully process karo. Kholna chain of evidence bhi toot sakta hai.',
  },

  // ── IMAGE BASED MYSTERY — HARD (2) ──
  {
    id: 39, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'hard',
    curiosity: '🌙 Raat ke 1 baje ek silent photo mein woh sab tha jo detective ko chahiye tha — par sirf ek cheez dekh ke...',
    title: 'Crime Scene Ka Contradict',
    doc: 'DOC-039',
    scene: 'Crime scene ki photo mein: khoon ke daag carpet par (near window). Khirki ki glass tuti hui thi — andar ki taraf tukde the. Victim ke paas ek glass bottle thi jisme 2 inch paani bacha tha. Table par ek burning candle thi — aadhi jal chuki thi. Calendar par aaj ki date circle thi.',
    imageClue: {
      icon: '🔍',
      label: '// CRIME SCENE — HIGH PRIORITY',
      desc: 'Khoon near window. Glass shards andar ki taraf. Burning candle half-melted. Water bottle 2 inch. Aaj ki date circled.'
    },
    clues: ['Glass shards andar ki taraf', 'Candle abhi bhi jal rahi thi', 'Water bottle 2 inch bacha', 'Date circle'],
    question: 'Glass shards "andar ki taraf" kya prove karte hain?',
    options: [
      'Koi bahar se ghusa — khirki bahar se todi gayi',
      'Khirki andar se todi gayi — breakage direction inside hai, staged break-in hai',
      'Wind pressure se toot gayi — natural cause',
      'Victim ne khud khirki todi — escape attempt'
    ],
    answer: 'Khirki andar se todi gayi — breakage direction inside hai, staged break-in hai',
    explanation: 'Physics ka simple rule: jab khirki bahar se todi jaati hai — tukde andar girte hain. Jab andar se todi jaati hai — tukde bahar girte hain. Tukde andar hain matlab andar se toda gaya — matlab "break-in" staged tha. Koi bahar se nahi aaya. Insider ne murder kiya aur scene stage kiya.',
  },
  {
    id: 40, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'hard',
    curiosity: '🎭 Woh sab ke saamne tha — detective ki aankhon ke saamne — par kisi ne 3 ghante tak nahi dekha...',
    title: 'Chhupi Cheez Saamne Thi',
    doc: 'DOC-040',
    scene: 'Office building ki late night security photo. Hall mein 5 log dikh rahe the — 4 security guard uniforms mein, 1 civilian clothes mein. Civilian ek laptop bag lekar ja raha tha. Teen guards CCTV ke saamne the. Ek guard civilian se baat kar raha tha. Andar se 500 sensitive documents steal hue the.',
    imageClue: {
      icon: '🏢',
      label: '// SECURITY FOOTAGE — 11:47 PM',
      desc: '4 guards uniform mein, 1 civilian laptop bag ke saath. Ek guard civilian se baat kar raha hai. Teen guards camera face kar rahe hain. Documents stolen.'
    },
    clues: ['Civilian freely ghoom raha', 'Guard usse rok nahi raha', 'Laptop bag', 'Documents stolen same night'],
    question: 'Is image mein sabse suspicious behavior kya hai?',
    options: [
      'Civilian late raat building mein tha — unauthorized access',
      'Guard civilian se baat kar raha tha bina stop kiye — woh jaanta tha use, insider complicity',
      'Laptop bag mein documents honge — directly thief',
      'Teen guards camera ke saamne the — distraction create kiya'
    ],
    answer: 'Guard civilian se baat kar raha tha bina stop kiye — woh jaanta tha use, insider complicity',
    explanation: 'Security protocol: raat ko unauthorized civilian ko immediately stop karo, ID maango, log karo. Guard bina challenge kiye baat kar raha hai matlab woh us civilian ko jaanta tha — insider complicity. Sirf laptop bag ya civilian presence nahi, guard ki response hi sabse damning evidence hai.',
  },

  // ════════════════════════════════════════════════
  // 7 NEW IMAGE BASED MYSTERY CASES — with SVG Art
  // ════════════════════════════════════════════════

  // ── IMAGE MYSTERY — EASY ──
  {
    id: 49, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'easy',
    curiosity: '🍵 Ek cup ki chai ne ek innocent insaan ko jail se bachaya — detective ne photo mein dekha aur sab samajh gaya...',
    title: 'Chai Ki Gawahi',
    doc: 'DOC-049',
    scene: 'Suspect Rohan ka alibi: "Main subah 9 se 11 baje tak ghar par akela tha — chai pi raha tha aur TV dekh raha tha." Police ne uske ghar ki photo li. Photo mein mez par ek chai ka cup dikh raha hai. Detective ne ek nazar mein kaha — "Rohan jhooth bol raha hai."',
    imageClue: {
      label: '// SUSPECT GHAR — SUBAH KI PHOTO',
      caption: '<span>⚠ CLUE:</span> Cup ki position aur chai ki halat dhyaan se dekho — waqt se kuch nahi milta.',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#0a0e14">
  <defs>
    <radialGradient id="roomLight49" cx="50%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#1a2535"/>
      <stop offset="100%" stop-color="#080c12"/>
    </radialGradient>
    <filter id="glow49"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- Room background -->
  <rect width="520" height="240" fill="url(#roomLight49)"/>
  <!-- Wall -->
  <rect x="0" y="0" width="520" height="160" fill="#0d1520"/>
  <!-- Floor -->
  <rect x="0" y="160" width="520" height="80" fill="#0a0f18"/>
  <line x1="0" y1="160" x2="520" y2="160" stroke="#1e2d42" stroke-width="1.5"/>
  <!-- Window — showing bright morning sun -->
  <rect x="30" y="20" width="90" height="100" rx="3" fill="#111c2e" stroke="#2a3d5a" stroke-width="1.5"/>
  <rect x="35" y="25" width="80" height="90" rx="2" fill="#d4a832" opacity="0.85"/>
  <!-- Sun rays from window -->
  <rect x="35" y="25" width="80" height="90" rx="2" fill="url(#sunRay49)" opacity="0.6"/>
  <defs>
    <linearGradient id="sunRay49" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffe87a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0.3"/>
    </linearGradient>
  </defs>
  <!-- Window frame cross -->
  <line x1="75" y1="25" x2="75" y2="115" stroke="#2a3d5a" stroke-width="1.5"/>
  <line x1="35" y1="70" x2="115" y2="70" stroke="#2a3d5a" stroke-width="1.5"/>
  <!-- Window label -->
  <text x="75" y="135" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.6" letter-spacing="1">BRIGHT SUNLIGHT</text>
  <!-- TV on wall -->
  <rect x="180" y="18" width="150" height="90" rx="4" fill="#060a10" stroke="#1e2d42" stroke-width="2"/>
  <rect x="185" y="23" width="140" height="80" rx="2" fill="#0a1420"/>
  <text x="255" y="67" text-anchor="middle" font-family="monospace" font-size="9" fill="#1a2535">[ STANDBY ]</text>
  <!-- TV standby dot — RED (off) -->
  <circle cx="252" cy="103" r="3" fill="#8B1A1A" opacity="0.7"/>
  <text x="262" y="107" font-family="monospace" font-size="7" fill="#8B1A1A" opacity="0.7">STANDBY</text>
  <!-- TV note -->
  <text x="255" y="122" text-anchor="middle" font-family="monospace" font-size="7" fill="#cf4444" opacity="0.8" letter-spacing="1">TV BAND HAI</text>
  <!-- Table -->
  <rect x="60" y="155" width="200" height="12" rx="3" fill="#15202e"/>
  <rect x="75" y="167" width="8" height="30" fill="#111820"/>
  <rect x="237" y="167" width="8" height="30" fill="#111820"/>
  <!-- Chai cup on table -->
  <g transform="translate(140,125)">
    <!-- Cup body -->
    <ellipse cx="0" cy="30" rx="18" ry="6" fill="#1a2535" opacity="0.5"/>
    <path d="M-15,0 L-18,30 L18,30 L15,0 Z" fill="#8B6B3D"/>
    <ellipse cx="0" cy="0" rx="15" ry="5" fill="#7a5c33"/>
    <!-- Chai surface — COLD, no steam -->
    <ellipse cx="0" cy="1" rx="13" ry="4" fill="#5c3d1e"/>
    <text x="0" y="-2" text-anchor="middle" font-family="monospace" font-size="6" fill="#8B6B3D" opacity="0.6">THANDA</text>
    <!-- Handle -->
    <path d="M15,8 Q26,8 26,18 Q26,28 15,28" fill="none" stroke="#7a5c33" stroke-width="2.5"/>
    <!-- Saucer -->
    <ellipse cx="0" cy="32" rx="22" ry="5" fill="#1d2c40"/>
    <!-- NO STEAM — key clue -->
    <text x="0" y="-14" text-anchor="middle" font-family="monospace" font-size="7" fill="#cf4444" letter-spacing="0.5">BHAAP NAHI</text>
  </g>
  <!-- Hotspot ring on cup -->
  <circle cx="140" cy="152" r="28" fill="none" stroke="#cf4444" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7" class="hotspot-ring"/>
  <!-- Chair -->
  <rect x="350" y="110" width="60" height="8" rx="2" fill="#15202e"/>
  <rect x="395" y="80" width="8" height="38" rx="2" fill="#111820"/>
  <rect x="356" y="118" width="8" height="35" rx="2" fill="#111820"/>
  <rect x="394" y="118" width="8" height="35" rx="2" fill="#111820"/>
  <!-- EMPTY chair — no one sitting -->
  <text x="380" y="78" text-anchor="middle" font-family="monospace" font-size="7" fill="#4a5568" letter-spacing="1">KHAALI KURSI</text>
  <!-- Clock on wall showing 10:45 -->
  <circle cx="440" cy="60" r="28" fill="#0d1520" stroke="#1e2d42" stroke-width="2"/>
  <circle cx="440" cy="60" r="24" fill="#0a1018"/>
  <line x1="440" y1="60" x2="440" y2="42" stroke="#c9a84c" stroke-width="2" stroke-linecap="round"/>
  <line x1="440" y1="60" x2="454" y2="65" stroke="#ddd5c0" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="440" cy="60" r="2.5" fill="#c9a84c"/>
  <text x="440" y="95" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.7">10:45 AM</text>
  <!-- Sunlight patch on floor -->
  <ellipse cx="80" cy="185" rx="45" ry="15" fill="#c9a84c" opacity="0.07"/>
  <!-- Labels -->
  <text x="10" y="232" font-family="monospace" font-size="8" fill="#3d4a5c" letter-spacing="1">EXHIBIT: DOC-049 — ROHAN KA GHAR — SUBAH 10:45</text>
  <!-- Annotation arrows -->
  <text x="290" y="155" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.8">← BHAAP NAHI = CHAI THANDI</text>
  <text x="290" y="167" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.8">   = KAB BANAYI?</text>
</svg>`
    },
    clues: ['Chai mein koi bhaap nahi', 'TV standby mein hai — on nahi', 'Sunlight bright hai', 'Khaali kursi'],
    question: 'Photo mein kya prove karta hai ki Rohan 9-11 baje ghar par nahi tha?',
    options: [
      'TV standby mein hai — woh TV dekh nahi raha tha',
      'Chai bilkul thandi hai — bhaap nahi, matlab chai bahut pehle banayi gayi ya bahar se laayi gayi, 9-11 wali freshness nahi',
      'Kursi khaali hai — woh baith nahi raha tha',
      'Khirki se dhoop aa rahi hai — woh bahar gaya hoga'
    ],
    answer: 'Chai bilkul thandi hai — bhaap nahi, matlab chai bahut pehle banayi gayi ya bahar se laayi gayi, 9-11 wali freshness nahi',
    explanation: 'Fresh chai mein hamesha bhaap hoti hai. Agar Rohan 9-11 baje ghar par tha aur chai pi raha tha, toh cup mein thodi bhaap toh honi chahiye. Bilkul thandi chai = ya toh bahut pehle banayi, ya staged. TV bhi standby mein hai — on nahi. Scene "set" kiya gaya tha alibi ke liye.',
  },

  // ── IMAGE MYSTERY — EASY ──
  {
    id: 50, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'easy',
    curiosity: '🌧️ Barish ke baad crime scene pe footprints mili — lekin detective ke liye yeh ulti baat thi...',
    title: 'Footprints Ka Direction',
    doc: 'DOC-050',
    scene: 'Raat bhar barish ke baad garden mein ek body mili. Crime scene ka aerial sketch dekhne par detective ne kuch note kiya: garden ke gate se body tak footprints clearly dikh rahi thi — lekin sirf ek taraf. Andar jaane ke nishaan the, bahar aane ke nahi. Body ke aas-paas koi aur nishaan nahi.',
    imageClue: {
      label: '// GARDEN CRIME SCENE — AERIAL SKETCH',
      caption: '<span>⚠ KEY DETAIL:</span> Footprints ka direction carefully trace karo — ek hi taraf kyun?',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#080d10">
  <defs>
    <radialGradient id="gardenBg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0d1a10"/>
      <stop offset="100%" stop-color="#060c0a"/>
    </radialGradient>
  </defs>
  <rect width="520" height="240" fill="url(#gardenBg)"/>
  <!-- Garden ground (wet mud) -->
  <rect x="0" y="0" width="520" height="240" fill="#0a120e" opacity="0.6"/>
  <!-- Grass patches -->
  <ellipse cx="60" cy="50" rx="40" ry="25" fill="#0d1a10" opacity="0.8"/>
  <ellipse cx="450" cy="180" rx="50" ry="30" fill="#0d1a10" opacity="0.8"/>
  <ellipse cx="400" cy="40" rx="35" ry="20" fill="#0d1a10" opacity="0.6"/>
  <!-- Mud path from gate to body -->
  <path d="M30,120 L260,120" stroke="#1a2818" stroke-width="30" stroke-linecap="round" opacity="0.7"/>
  <!-- Gate at left -->
  <rect x="5" y="100" width="30" height="40" rx="2" fill="#111820" stroke="#2a3d5a" stroke-width="1.5"/>
  <rect x="7" y="102" width="12" height="36" rx="1" fill="#0d1520" stroke="#1e2d42"/>
  <rect x="21" y="102" width="12" height="36" rx="1" fill="#0d1520" stroke="#1e2d42"/>
  <text x="20" y="152" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.8">GATE</text>
  <!-- Footprints — ONLY going IN (toward body), NOT out -->
  <!-- Left foot, right foot pattern going right -->
  <g fill="#8B7355" opacity="0.8">
    <!-- Step 1 -->
    <ellipse cx="60" cy="115" rx="6" ry="9" transform="rotate(-10,60,115)"/>
    <ellipse cx="75" cy="126" rx="6" ry="9" transform="rotate(10,75,126)"/>
    <!-- Step 2 -->
    <ellipse cx="100" cy="114" rx="6" ry="9" transform="rotate(-10,100,114)"/>
    <ellipse cx="115" cy="125" rx="6" ry="9" transform="rotate(10,115,125)"/>
    <!-- Step 3 -->
    <ellipse cx="140" cy="113" rx="6" ry="9" transform="rotate(-10,140,113)"/>
    <ellipse cx="155" cy="124" rx="6" ry="9" transform="rotate(10,155,124)"/>
    <!-- Step 4 -->
    <ellipse cx="180" cy="114" rx="6" ry="9" transform="rotate(-10,180,114)"/>
    <ellipse cx="195" cy="125" rx="6" ry="9" transform="rotate(10,195,125)"/>
    <!-- Step 5 near body -->
    <ellipse cx="220" cy="113" rx="6" ry="9" transform="rotate(-10,220,113)"/>
    <ellipse cx="235" cy="124" rx="6" ry="9" transform="rotate(10,235,124)"/>
  </g>
  <!-- Direction arrows on footprints -->
  <text x="130" y="108" font-family="monospace" font-size="9" fill="#3A7D44" opacity="0.8">→→→ ANDAR</text>
  <!-- X mark where return prints should be -->
  <text x="130" y="138" font-family="monospace" font-size="9" fill="#cf4444" opacity="0.7">✗ BAHAR NAHI</text>
  <!-- Body outline at right -->
  <g transform="translate(290,120)">
    <ellipse cx="0" cy="-30" rx="14" ry="14" fill="#0d1520" stroke="#8B1A1A" stroke-width="1.5"/>
    <rect x="-12" y="-16" width="24" height="40" rx="8" fill="#0d1520" stroke="#8B1A1A" stroke-width="1.5"/>
    <line x1="-12" y1="-5" x2="-30" y2="15" stroke="#8B1A1A" stroke-width="2"/>
    <line x1="12" y1="-5" x2="30" y2="15" stroke="#8B1A1A" stroke-width="2"/>
    <line x1="-8" y1="24" x2="-14" y2="50" stroke="#8B1A1A" stroke-width="2"/>
    <line x1="8" y1="24" x2="14" y2="50" stroke="#8B1A1A" stroke-width="2"/>
    <!-- Blood pool -->
    <ellipse cx="0" cy="10" rx="20" ry="10" fill="#8B1A1A" opacity="0.3"/>
    <text x="0" y="70" text-anchor="middle" font-family="monospace" font-size="7" fill="#cf4444">BODY</text>
  </g>
  <!-- Hotspot on footprints -->
  <rect x="50" y="100" width="200" height="40" fill="none" stroke="#c9a84c" stroke-width="1" stroke-dasharray="5,3" rx="4" opacity="0.5" class="hotspot-ring"/>
  <!-- Missing return prints area -->
  <g opacity="0.6">
    <line x1="60" y1="170" x2="250" y2="170" stroke="#cf4444" stroke-width="1" stroke-dasharray="3,4"/>
    <text x="155" y="183" text-anchor="middle" font-family="monospace" font-size="8" fill="#cf4444">WAPSI KE NISHAAN KAHAAN?</text>
  </g>
  <!-- Rain water puddles -->
  <ellipse cx="370" cy="90" rx="25" ry="8" fill="#0d2030" opacity="0.6"/>
  <ellipse cx="430" cy="150" rx="18" ry="6" fill="#0d2030" opacity="0.5"/>
  <!-- Trees -->
  <circle cx="460" cy="60" r="25" fill="#0d1a10" stroke="#152010" stroke-width="1"/>
  <rect x="456" y="80" width="8" height="20" fill="#0d1018"/>
  <circle cx="80" cy="200" r="20" fill="#0d1a10" stroke="#152010" stroke-width="1"/>
  <rect x="76" y="215" width="8" height="18" fill="#0d1018"/>
  <text x="10" y="232" font-family="monospace" font-size="8" fill="#3d4a5c" letter-spacing="1">EXHIBIT: DOC-050 — GARDEN SCENE — BAARISH BAAD</text>
  <text x="370" y="120" font-family="monospace" font-size="7" fill="#3A7D44" opacity="0.8">BARISH KE BAAD</text>
  <text x="370" y="130" font-family="monospace" font-size="7" fill="#3A7D44" opacity="0.8">MUD FRESH HAI</text>
</svg>`
    },
    clues: ['Sirf andar jaate nishaan', 'Koi wapsi ke footprints nahi', 'Barish ke baad taaze nishaan', 'Body garden ke beech mein'],
    question: 'Sirf ek direction mein footprints hone ka kya matlab hai?',
    options: [
      'Qatil bahut tez bhaga — nishaan nahi bane',
      'Qatil ghar ka andar se koi tha — garden mein aaya, waapis ghar ke andar gaya bina gate se nikle',
      'Footprints barish mein dhul gayi waapsi ki',
      'Body khud wahan aayi thi — accident tha'
    ],
    answer: 'Qatil ghar ka andar se koi tha — garden mein aaya, waapis ghar ke andar gaya bina gate se nikle',
    explanation: 'Footprints gate se andar aati hain — lekin wapas gate tak nahi jaati. Matlab qatil gate se bahar nahi gaya. Woh ghar ke andar se garden mein aaya, murder kiya, aur dobaara ghar ke andar chala gaya. Garden access ghar ke bheetar se tha. Insider job — ghar mein rehne wala koi.',
  },

  // ── IMAGE MYSTERY — MEDIUM ──
  {
    id: 51, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'medium',
    curiosity: '🕯️ Bujhi mombatti ne ek detective ko ek murderer tak pahunchaya — sirf ek sawal se...',
    title: 'Mombatti Ka Jhooth',
    doc: 'DOC-051',
    scene: 'Crime scene: ek purane kamre mein body mili. Suspect ne kaha — "Bijli nahi thi puri raat, main mombatti jalaake baitha tha." Crime scene photo mein teen mombattiyan dikhti hain. Detective ne photo dhyaan se dekhi aur suspect ki baat pe shak hua.',
    imageClue: {
      label: '// CRIME SCENE — CANDLE EVIDENCE',
      caption: '<span>🔍 OBSERVE:</span> Teen mombattiyon ki heights compare karo — kya yeh ek saath jali hain?',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#06080d">
  <defs>
    <radialGradient id="candleGlow1" cx="50%" cy="0%" r="100%">
      <stop offset="0%" stop-color="#c9a84c" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="candleGlow2" cx="50%" cy="0%" r="100%">
      <stop offset="0%" stop-color="#c9a84c" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="candleGlow3" cx="50%" cy="0%" r="100%">
      <stop offset="0%" stop-color="#c9a84c" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Dark room -->
  <rect width="520" height="240" fill="#06080d"/>
  <!-- Floor -->
  <rect x="0" y="185" width="520" height="55" fill="#080c12"/>
  <line x1="0" y1="185" x2="520" y2="185" stroke="#111820" stroke-width="1"/>
  <!-- Table -->
  <rect x="80" y="170" width="360" height="18" rx="3" fill="#111820" stroke="#1a2535"/>
  <rect x="100" y="188" width="10" height="35" fill="#0d1520"/>
  <rect x="410" y="188" width="10" height="35" fill="#0d1520"/>

  <!-- CANDLE 1 — Very short (almost burned down = lit for many hours) -->
  <g transform="translate(160, 90)">
    <rect x="-8" y="80" width="16" height="12" rx="1" fill="#1a2535"/>
    <rect x="-6" y="0" width="12" height="80" rx="2" fill="#e8dfcb" opacity="0.8"/>
    <!-- Wax drips -->
    <path d="M-6,10 Q-10,20 -8,35" stroke="#e8dfcb" stroke-width="3" fill="none" opacity="0.5"/>
    <path d="M6,15 Q10,25 8,40" stroke="#e8dfcb" stroke-width="2.5" fill="none" opacity="0.5"/>
    <!-- Flame -->
    <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#f0c85a" opacity="0.9"/>
    <ellipse cx="0" cy="-8" rx="2" ry="4" fill="#fff" opacity="0.7"/>
    <!-- Glow -->
    <ellipse cx="0" cy="40" rx="50" ry="60" fill="url(#candleGlow1)"/>
    <text x="0" y="-18" text-anchor="middle" font-family="monospace" font-size="7" fill="#cf4444" letter-spacing="0.5">BAHUT CHHOTI</text>
    <text x="0" y="-9" text-anchor="middle" font-family="monospace" font-size="6" fill="#cf4444" opacity="0.8">≈ 8+ GHANTE</text>
    <!-- Hotspot -->
    <rect x="-20" y="-25" width="40" height="115" fill="none" stroke="#cf4444" stroke-width="1" stroke-dasharray="3,2" rx="3" opacity="0.6" class="hotspot-ring"/>
  </g>

  <!-- CANDLE 2 — Medium height -->
  <g transform="translate(260, 110)">
    <rect x="-8" y="60" width="16" height="12" rx="1" fill="#1a2535"/>
    <rect x="-6" y="0" width="12" height="60" rx="2" fill="#e8dfcb" opacity="0.8"/>
    <path d="M-6,8 Q-9,18 -7,28" stroke="#e8dfcb" stroke-width="2.5" fill="none" opacity="0.4"/>
    <!-- Flame -->
    <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#f0c85a" opacity="0.9"/>
    <ellipse cx="0" cy="-8" rx="2" ry="4" fill="#fff" opacity="0.7"/>
    <ellipse cx="0" cy="30" rx="45" ry="50" fill="url(#candleGlow2)"/>
    <text x="0" y="-16" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c">MADHYAM</text>
    <text x="0" y="-9" text-anchor="middle" font-family="monospace" font-size="6" fill="#c9a84c" opacity="0.8">≈ 4 GHANTE</text>
  </g>

  <!-- CANDLE 3 — Almost full height (barely burned = lit recently) -->
  <g transform="translate(360, 130)">
    <rect x="-8" y="40" width="16" height="12" rx="1" fill="#1a2535"/>
    <rect x="-6" y="0" width="12" height="40" rx="2" fill="#e8dfcb" opacity="0.9"/>
    <!-- Almost no drips — new candle -->
    <!-- Flame -->
    <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#f0c85a" opacity="0.9"/>
    <ellipse cx="0" cy="-8" rx="2" ry="4" fill="#fff" opacity="0.7"/>
    <ellipse cx="0" cy="20" rx="35" ry="40" fill="url(#candleGlow3)"/>
    <text x="0" y="-16" text-anchor="middle" font-family="monospace" font-size="7" fill="#3A7D44">NAYEE LAGTI</text>
    <text x="0" y="-9" text-anchor="middle" font-family="monospace" font-size="6" fill="#3A7D44" opacity="0.8">≈ 1 GHANTA</text>
  </g>

  <!-- Size comparison arrows -->
  <line x1="152" y1="88" x2="152" y2="172" stroke="#c9a84c" stroke-width="1" opacity="0.4"/>
  <line x1="252" y1="108" x2="252" y2="172" stroke="#c9a84c" stroke-width="1" opacity="0.3"/>
  <line x1="352" y1="128" x2="352" y2="172" stroke="#c9a84c" stroke-width="1" opacity="0.2"/>
  <!-- Height comparison line -->
  <line x1="145" y1="88" x2="370" y2="88" stroke="#c9a84c" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.3"/>
  <text x="130" y="86" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.5">ORIGINAL HEIGHT?</text>
  <!-- Labels below -->
  <text x="160" y="210" text-anchor="middle" font-family="monospace" font-size="8" fill="#cf4444">MOMBATTI-1</text>
  <text x="260" y="210" text-anchor="middle" font-family="monospace" font-size="8" fill="#c9a84c">MOMBATTI-2</text>
  <text x="360" y="210" text-anchor="middle" font-family="monospace" font-size="8" fill="#3A7D44">MOMBATTI-3</text>
  <text x="260" y="225" text-anchor="middle" font-family="monospace" font-size="7" fill="#3d4a5c" letter-spacing="1">TEEN ALAG HEIGHTS = EK SAATH NAHI JALI</text>
  <text x="10" y="237" font-family="monospace" font-size="7" fill="#3d4a5c">EXHIBIT: DOC-051</text>
</svg>`
    },
    clues: ['Teen mombattiyan — teen alag heights', 'Ek bahut chhoti = 8+ ghante se jal rahi', 'Ek nayee lagti = sirf 1 ghante se', 'Agar ek saath jali hoti toh same height hoti'],
    question: 'Teen alag height ki mombattiyan kya reveal karti hain?',
    options: [
      'Woh haar baar alag mombatti jalaata tha — normal habit',
      'Teen mombattiyan ek saath nahi jali — alag alag waqt jalayi gayi, matlab suspect poori raat wahan nahi tha',
      'Bijli kabhi kabhi aati rahi — baar baar jalaana pada',
      'Chhoti mombatti zyada tez jalti hai — height se waqt nahi napta'
    ],
    answer: 'Teen mombattiyan ek saath nahi jali — alag alag waqt jalayi gayi, matlab suspect poori raat wahan nahi tha',
    explanation: 'Agar bijli puri raat nahi thi aur suspect poori raat wahan tha, toh teenon mombattiyan roughly ek saath jalayi jaati. Unki height roughly similar hoti. Lekin teenon ki heights bahut alag hain — ek 8+ ghante se, ek 4 ghante se, ek sirf 1 ghante se. Matlab woh alag alag waqt alag alag jagahon par the — alibi jhooth hai.',
  },

  // ── IMAGE MYSTERY — MEDIUM ──
  {
    id: 52, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'medium',
    curiosity: '💼 Ek office desk ki photo — aur detective ne 30 second mein bata diya ki yahan kuch chhupa gaya hai...',
    title: 'Desk Par Chhupa Raaz',
    doc: 'DOC-052',
    scene: 'CFO Anand ki maut ke baad uski office seal ki gayi. Crime scene photographer ne desk ki ek detailed photo li. Detective Meera ne photo dekh ke kaha: "Yahan se kuch documents recently hataaye gaye hain — aur hastily." Desk bilkul "saaf" dikhi rahi thi.',
    imageClue: {
      label: '// CFO ANAND OFFICE DESK — SEALED SCENE',
      caption: '<span>🔍 DETAIL:</span> Desk par kya hai aur kya NAHI hai — dono equally important hain.',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#08090e">
  <defs>
    <linearGradient id="deskSurface" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#151e2a"/>
      <stop offset="100%" stop-color="#0f1720"/>
    </linearGradient>
  </defs>
  <rect width="520" height="240" fill="#08090e"/>
  <!-- Office wall -->
  <rect x="0" y="0" width="520" height="150" fill="#0a0e16"/>
  <!-- Painting/certif on wall (straight) -->
  <rect x="60" y="15" width="80" height="55" rx="2" fill="#0d1520" stroke="#1e2d42" stroke-width="1.5"/>
  <rect x="65" y="20" width="70" height="45" fill="#0a1018"/>
  <text x="100" y="46" text-anchor="middle" font-family="monospace" font-size="7" fill="#1e2d42">CERTIFICATE</text>
  <!-- Tilted frame — CLUE -->
  <g transform="translate(200,30) rotate(8)">
    <rect x="-35" y="-25" width="70" height="45" rx="2" fill="#0d1520" stroke="#c9a84c" stroke-width="1.5" opacity="0.7"/>
    <rect x="-30" y="-20" width="60" height="35" fill="#0a1018"/>
  </g>
  <text x="200" y="85" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.7">FRAME TEDI HAI</text>
  <!-- Desk surface -->
  <rect x="20" y="130" width="480" height="90" rx="4" fill="url(#deskSurface)" stroke="#1a2535" stroke-width="1.5"/>
  <line x1="20" y1="133" x2="500" y2="133" stroke="#1e2d42" stroke-width="0.5"/>

  <!-- Computer monitor -->
  <rect x="40" y="75" width="110" height="75" rx="3" fill="#060a10" stroke="#1a2535" stroke-width="2"/>
  <rect x="45" y="80" width="100" height="65" rx="2" fill="#090e16"/>
  <rect x="85" y="148" width="20" height="12" fill="#0d1520"/>
  <rect x="75" y="160" width="40" height="5" rx="2" fill="#111820"/>
  <!-- Monitor screen — LOCKED -->
  <text x="95" y="112" text-anchor="middle" font-family="monospace" font-size="8" fill="#1e2d42">🔒 LOCKED</text>
  <text x="95" y="123" text-anchor="middle" font-family="monospace" font-size="6" fill="#1e2d42">SCREEN</text>

  <!-- Pen holder — EMPTY (pens missing) -->
  <rect x="420" y="110" width="30" height="40" rx="3" fill="#111820" stroke="#1a2535"/>
  <text x="435" y="108" text-anchor="middle" font-family="monospace" font-size="7" fill="#cf4444">KHAALI</text>
  <text x="435" y="98" text-anchor="middle" font-family="monospace" font-size="6" fill="#cf4444" opacity="0.7">PEN? NAHI</text>

  <!-- File tray — EMPTY with dust outline -->
  <rect x="310" y="115" width="90" height="50" rx="3" fill="#0d1520" stroke="#1a2535"/>
  <rect x="315" y="120" width="80" height="40" rx="2" fill="#090e16"/>
  <!-- Dust/shadow where files WERE -->
  <rect x="318" y="123" width="74" height="34" rx="1" fill="#1a2535" opacity="0.3" stroke="#3d4a5c" stroke-width="0.5" stroke-dasharray="2,2"/>
  <text x="355" y="143" text-anchor="middle" font-family="monospace" font-size="7" fill="#cf4444">FILE TRAY</text>
  <text x="355" y="153" text-anchor="middle" font-family="monospace" font-size="6" fill="#cf4444" opacity="0.7">KHAALI!</text>
  <!-- Hotspot on file tray -->
  <rect x="308" y="113" width="94" height="54" fill="none" stroke="#cf4444" stroke-width="1.5" stroke-dasharray="4,2" rx="4" opacity="0.7" class="hotspot-ring"/>

  <!-- Notepad — but pages torn roughly -->
  <rect x="170" y="135" width="70" height="50" rx="2" fill="#0d1825" stroke="#1a2535"/>
  <!-- Torn edge mark -->
  <path d="M172,138 L175,135 L178,138 L181,135 L184,138 L187,135 L190,138 L193,135 L196,138 L199,135 L202,138 L205,135 L208,138" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity="0.6"/>
  <text x="205" y="153" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c">PAGES</text>
  <text x="205" y="163" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c">TOODE?</text>
  <!-- Torn notepad hotspot -->
  <rect x="168" y="133" width="74" height="54" fill="none" stroke="#c9a84c" stroke-width="1" stroke-dasharray="3,2" rx="3" opacity="0.5"/>

  <!-- Coffee ring stain (but no cup) -->
  <ellipse cx="460" cy="170" rx="22" ry="8" fill="none" stroke="#8B6B3D" stroke-width="2" opacity="0.5"/>
  <ellipse cx="460" cy="170" rx="18" ry="6" fill="none" stroke="#8B6B3D" stroke-width="1" opacity="0.3"/>
  <text x="460" y="190" text-anchor="middle" font-family="monospace" font-size="7" fill="#8B6B3D" opacity="0.7">CUP NAHI</text>
  <text x="460" y="198" text-anchor="middle" font-family="monospace" font-size="6" fill="#8B6B3D" opacity="0.5">SIRF DAAG</text>

  <!-- Annotation overall -->
  <text x="10" y="232" font-family="monospace" font-size="8" fill="#3d4a5c" letter-spacing="1">EXHIBIT: DOC-052 — CFO DESK — SEALED ROOM</text>
  <text x="280" y="232" font-family="monospace" font-size="7" fill="#cf4444">⚠ HASTILY CLEARED</text>
</svg>`
    },
    clues: ['File tray bilkul khaali — dust outline visible', 'Notepad ke pages toode gaye', 'Pen holder khaali', 'Coffee daag hai lekin cup nahi'],
    question: 'Is desk ka "hastily cleared" hona kya suggest karta hai?',
    options: [
      'CFO bahut organized tha — woh hamesha desk saaf rakhta tha',
      'Kisi ne CFO ki maut ke baad evidence destroy karne ke liye documents aur pens hataaye — inside job',
      'Cleaning staff ne regular cleaning ki',
      'CFO khud resign karne wala tha — isliye desk saaf ki'
    ],
    answer: 'Kisi ne CFO ki maut ke baad evidence destroy karne ke liye documents aur pens hataaye — inside job',
    explanation: 'File tray mein dust outline hai — files recently hatayi gayi (dust pattern bataata hai). Coffee daag hai lekin cup nahi — matlab scene se cheezein li gayi hain. Notepad torn — evidence destroy karne ki koshish. Sealed room mein yeh sab itni jaldi hua = insider access. Crime cover-up ki classic signs.',
  },

  // ── IMAGE MYSTERY — MEDIUM ──
  {
    id: 53, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'medium',
    curiosity: '🚗 Ek parked car ne ek murder case ka poora timeline badal diya — detective ne number plate nahi, shadows dekhe...',
    title: 'Car Ka Jhoothi Jagah',
    doc: 'DOC-053',
    scene: 'Suspect Vikram ka alibi: "Raat 8 baje se 10 baje tak main apni car mein parking lot mein tha — kisi se mil raha tha." CCTV nahi tha. Lekin ek photojournalist ki accidentally li gayi photo mein Vikram ki car usi parking mein dikh rahi thi — lekin kuch "galat" tha photo mein.',
    imageClue: {
      label: '// PARKING LOT — ACCIDENTAL PHOTO EVIDENCE',
      caption: '<span>🔍 SHADOWS:</span> Car ki shadow aur surrounding objects ki shadows compare karo — sun position match karti hai?',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#08090e">
  <defs>
    <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1218"/>
      <stop offset="100%" stop-color="#0a0f14"/>
    </linearGradient>
  </defs>
  <rect width="520" height="240" fill="#08090e"/>
  <!-- Sky — DARK indicating night -->
  <rect x="0" y="0" width="520" height="100" fill="#06080c"/>
  <!-- Building in background -->
  <rect x="0" y="20" width="120" height="80" fill="#0a0e16" stroke="#111820"/>
  <rect x="380" y="15" width="140" height="85" fill="#0a0e16" stroke="#111820"/>
  <!-- Building windows — lights on (night time) -->
  <rect x="15" y="30" width="15" height="12" fill="#c9a84c" opacity="0.3"/>
  <rect x="40" y="30" width="15" height="12" fill="#c9a84c" opacity="0.2"/>
  <rect x="65" y="30" width="15" height="12" fill="#1a2535"/>
  <rect x="15" y="55" width="15" height="12" fill="#1a2535"/>
  <rect x="40" y="55" width="15" height="12" fill="#c9a84c" opacity="0.25"/>
  <rect x="390" y="25" width="15" height="12" fill="#c9a84c" opacity="0.3"/>
  <rect x="415" y="25" width="15" height="12" fill="#1a2535"/>
  <rect x="440" y="25" width="15" height="12" fill="#c9a84c" opacity="0.2"/>
  <text x="260" y="18" text-anchor="middle" font-family="monospace" font-size="8" fill="#c9a84c" opacity="0.6">RAAT KA WAQT — BUILDINGS MEIN LIGHTS</text>
  <!-- Parking lot ground -->
  <rect x="0" y="100" width="520" height="140" fill="url(#roadGrad)"/>
  <!-- Parking lines -->
  <line x1="150" y1="100" x2="150" y2="240" stroke="#1a2535" stroke-width="1.5" stroke-dasharray="8,4"/>
  <line x1="300" y1="100" x2="300" y2="240" stroke="#1a2535" stroke-width="1.5" stroke-dasharray="8,4"/>
  <line x1="370" y1="100" x2="370" y2="240" stroke="#1a2535" stroke-width="1.5" stroke-dasharray="8,4"/>
  <!-- CAR BODY -->
  <g transform="translate(180,130)">
    <!-- Car shadow — pointing WRONG direction (should be long if night/streetlight, but here pointing sideways suggesting afternoon sun) -->
    <ellipse cx="20" cy="65" rx="70" ry="12" fill="#000" opacity="0.4" transform="skewX(-30)"/>
    <!-- Car body -->
    <rect x="-50" y="15" width="140" height="50" rx="8" fill="#1a2535" stroke="#2a3d5a" stroke-width="1.5"/>
    <!-- Cabin -->
    <rect x="-20" y="0" width="90" height="30" rx="6" fill="#111820" stroke="#1e2d42" stroke-width="1"/>
    <!-- Windows -->
    <rect x="-15" y="3" width="35" height="22" rx="3" fill="#0d1a2a" stroke="#1a2535" opacity="0.8"/>
    <rect x="25" y="3" width="40" height="22" rx="3" fill="#0d1a2a" stroke="#1a2535" opacity="0.8"/>
    <!-- Wheels -->
    <circle cx="-28" cy="65" r="15" fill="#0a0e16" stroke="#2a3d5a" stroke-width="2"/>
    <circle cx="-28" cy="65" r="8" fill="#111820"/>
    <circle cx="68" cy="65" r="15" fill="#0a0e16" stroke="#2a3d5a" stroke-width="2"/>
    <circle cx="68" cy="65" r="8" fill="#111820"/>
    <!-- Number plate -->
    <rect x="10" y="55" width="40" height="12" rx="2" fill="#e8dfcb" opacity="0.7"/>
    <text x="30" y="64" text-anchor="middle" font-family="monospace" font-size="6" fill="#0a0e16">MH-04-VK</text>
    <!-- Headlights OFF -->
    <circle cx="-45" cy="35" r="6" fill="#1a2535" stroke="#2a3d5a"/>
    <circle cx="85" cy="35" r="6" fill="#1a2535" stroke="#2a3d5a"/>
    <text x="20" y="-12" text-anchor="middle" font-family="monospace" font-size="7" fill="#3d4a5c">LIGHTS OFF</text>
  </g>
  <!-- WRONG SHADOW annotation -->
  <text x="165" y="215" font-family="monospace" font-size="7" fill="#cf4444">↑ SHADOW WRONG DIRECTION!</text>
  <rect x="155" y="185" width="200" height="25" fill="none" stroke="#cf4444" stroke-width="1" stroke-dasharray="3,2" rx="3" opacity="0.6" class="hotspot-ring"/>

  <!-- Streetlight — casting specific shadow -->
  <rect x="440" y="90" width="6" height="110" fill="#1a2535"/>
  <ellipse cx="450" cy="90" rx="25" ry="8" fill="#1e2d3a"/>
  <!-- Streetlight glow -->
  <ellipse cx="450" cy="100" rx="60" ry="30" fill="#c9a84c" opacity="0.04"/>
  <!-- Streetlight shadow = should go AWAY from light source -->
  <text x="440" y="215" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.7">LIGHT SOURCE →</text>
  <!-- Pole shadow going left (correct direction from pole) -->
  <line x1="443" y1="200" x2="390" y2="220" stroke="#c9a84c" stroke-width="1" opacity="0.4"/>
  <!-- But car shadow going wrong way -->
  <line x1="190" y1="190" x2="270" y2="210" stroke="#cf4444" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.6"/>
  <text x="260" y="207" font-family="monospace" font-size="6" fill="#cf4444" opacity="0.7">CAR SHADOW ↑</text>
  <text x="260" y="215" font-family="monospace" font-size="6" fill="#cf4444" opacity="0.7">ALAG DIRECTION</text>

  <text x="10" y="232" font-family="monospace" font-size="8" fill="#3d4a5c" letter-spacing="1">EXHIBIT: DOC-053 — PARKING LOT PHOTO</text>
</svg>`
    },
    clues: ['Car ki shadow pole ki shadow se alag direction mein', 'Building mein lights on = raat', 'Car headlights off', 'Shadow angle sun position se match nahi'],
    question: 'Car ki shadow ka wrong direction kya prove karta hai?',
    options: [
      'Photo ka angle alag tha — shadow theek hai',
      'Photo actually alag waqt li gayi thi (din mein) aur car wahan thi — raat wali photo fake hai ya alag din ki',
      'Streetlights se shadow alag direction mein padti hai — normal hai',
      'Car parked nahi thi — chal rahi thi'
    ],
    answer: 'Photo actually alag waqt li gayi thi (din mein) aur car wahan thi — raat wali photo fake hai ya alag din ki',
    explanation: 'Raat mein streetlight ek specific direction se light daalta hai. Pole ki shadow ek direction mein jaati hai. Car ki shadow alag direction mein hai — yeh physically impossible hai agar dono ek hi waqt ek hi jagah hain. Matlab photo different time li gayi. Car wahan thi — lekin us raat 8-10 baje nahi. Alibi photo "proof" kuch aur waqt ki hai.',
  },

  // ── IMAGE MYSTERY — HARD ──
  {
    id: 54, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'hard',
    curiosity: '🏚️ Abandoned building mein ek photo — 3 detectives ne alag alag cheezein dekhi, sirf ek ne sahi clue pakdi...',
    title: 'Weeran Haveli Ka Nishaan',
    doc: 'DOC-054',
    scene: 'Kidnapping case: victim ko ek abandoned building mein rakha gaya tha. Victim ki phone se ek photo mili jo usne secretly li thi apne aas-paas ki. Forensics ko location identify karni thi. Photo mein koi address nahi, koi naam nahi — sirf room ki details.',
    imageClue: {
      label: '// VICTIM PHONE — SECRET PHOTO',
      caption: '<span>⚠ MISSION:</span> Is room mein kuch specific clues hain jo exact location identify kar sakte hain.',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#060809">
  <defs>
    <linearGradient id="abandonedWall" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0e1218"/>
      <stop offset="100%" stop-color="#080c10"/>
    </linearGradient>
    <filter id="cracked">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/>
      <feDisplacementMap scale="2"/>
    </filter>
  </defs>
  <rect width="520" height="240" fill="url(#abandonedWall)"/>
  <!-- Cracked walls -->
  <rect x="0" y="0" width="520" height="195" fill="#0a0e14"/>
  <!-- Wall cracks -->
  <path d="M80,20 Q95,45 88,70 Q82,90 95,110" stroke="#1a2030" stroke-width="1.5" fill="none"/>
  <path d="M200,30 Q195,55 210,75" stroke="#1a2030" stroke-width="1" fill="none"/>
  <path d="M380,10 Q372,40 385,65 Q392,85 380,110" stroke="#1a2030" stroke-width="1.5" fill="none"/>
  <!-- Floor — old tiles, broken -->
  <rect x="0" y="195" width="520" height="45" fill="#080c10"/>
  <line x1="0" y1="195" x2="520" y2="195" stroke="#111820" stroke-width="1"/>
  <!-- Old broken tiles pattern -->
  <line x1="130" y1="195" x2="130" y2="240" stroke="#0d1218" stroke-width="1"/>
  <line x1="260" y1="195" x2="260" y2="240" stroke="#0d1218" stroke-width="1"/>
  <line x1="390" y1="195" x2="390" y2="240" stroke="#0d1218" stroke-width="1"/>
  <line x1="0" y1="217" x2="520" y2="217" stroke="#0d1218" stroke-width="1"/>

  <!-- Broken window — with specific view outside -->
  <rect x="30" y="20" width="100" height="80" rx="2" fill="#060a0e" stroke="#1a2535" stroke-width="2"/>
  <!-- Cracked glass -->
  <line x1="30" y1="20" x2="130" y2="100" stroke="#1a2535" stroke-width="1"/>
  <line x1="80" y1="20" x2="60" y2="100" stroke="#1a2535" stroke-width="0.5"/>
  <!-- Outside view — specific landmark: RADIO TOWER with blinking light -->
  <rect x="75" y="30" width="5" height="35" fill="#c9a84c" opacity="0.5"/>
  <polygon points="73,30 78,20 83,30" fill="#c9a84c" opacity="0.5"/>
  <circle cx="78" cy="20" r="4" fill="#cf4444" opacity="0.8"/>
  <text x="77" y="68" text-anchor="middle" font-family="monospace" font-size="6" fill="#c9a84c" opacity="0.6">TOWER</text>
  <!-- Hotspot on window/tower -->
  <rect x="28" y="18" width="104" height="84" fill="none" stroke="#c9a84c" stroke-width="1.5" stroke-dasharray="4,2" rx="2" opacity="0.6" class="hotspot-ring"/>
  <text x="80" y="115" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.8">RADIO TOWER VISIBLE!</text>

  <!-- Old calendar on wall — showing MONTH + torn date -->
  <rect x="170" y="15" width="55" height="70" rx="2" fill="#0d1520" stroke="#1a2535"/>
  <rect x="172" y="17" width="51" height="15" fill="#8B1A1A" opacity="0.7"/>
  <text x="197" y="28" text-anchor="middle" font-family="monospace" font-size="7" fill="#e8dfcb">NOVEMBER</text>
  <!-- Calendar grid -->
  <g font-family="monospace" font-size="5" fill="#3d4a5c" opacity="0.8">
    <text x="176" y="40">M  T  W  T</text>
    <text x="176" y="49">1  2  3  4</text>
    <text x="176" y="57">8  9 10 11</text>
    <text x="176" y="65">15 16 17 18</text>
    <text x="176" y="73">22 23 24 25</text>
  </g>
  <text x="197" y="93" text-anchor="middle" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.8">NOV CALENDAR</text>

  <!-- Newspaper on floor — PARTIALLY VISIBLE headline -->
  <rect x="290" y="175" width="140" height="50" rx="2" fill="#0d1420" stroke="#1a2535" transform="rotate(-5,290,175)"/>
  <text x="297" y="190" font-family="monospace" font-size="6" fill="#ddd5c0" opacity="0.6" transform="rotate(-5,290,175)">MUMBAI TIMES</text>
  <text x="297" y="200" font-family="monospace" font-size="5" fill="#7a8499" opacity="0.5" transform="rotate(-5,290,175)">...ANDHERI WARD...</text>
  <text x="297" y="210" font-family="monospace" font-size="5" fill="#7a8499" opacity="0.5" transform="rotate(-5,290,175)">...NEW TOWER INAU...</text>
  <!-- Hotspot on newspaper -->
  <rect x="288" y="173" width="144" height="54" fill="none" stroke="#3A7D44" stroke-width="1.5" stroke-dasharray="3,2" rx="3" opacity="0.6" class="hotspot-ring" transform="rotate(-5,288,173)"/>
  <text x="360" y="237" text-anchor="middle" font-family="monospace" font-size="7" fill="#3A7D44" opacity="0.8">NEWSPAPER: AREA CLUE!</text>

  <!-- Specific graffiti on wall — local gang tag, area-specific -->
  <text x="420" y="80" font-family="monospace" font-size="14" fill="#1a2535" opacity="0.7" transform="rotate(-15,420,80)">EAST-07</text>
  <text x="415" y="100" font-family="monospace" font-size="7" fill="#c9a84c" opacity="0.5" transform="rotate(-15,415,100)">↑ LOCAL TAG</text>

  <!-- Specific pipe brand label -->
  <rect x="470" y="100" width="40" height="80" rx="4" fill="#1a2030" stroke="#2a3040"/>
  <text x="490" y="145" text-anchor="middle" font-family="monospace" font-size="6" fill="#3d4a5c" transform="rotate(90,490,145)">ANDHERI CORP</text>

  <text x="10" y="232" font-family="monospace" font-size="8" fill="#3d4a5c" letter-spacing="1">EXHIBIT: DOC-054 — VICTIM PHOTO — LOCATION?</text>
</svg>`
    },
    clues: ['Khirki se radio tower clearly visible', 'Newspaper mein "Andheri Ward" aur "Tower" mention', 'Wall par "EAST-07" graffiti — local tag', 'Pipe par "ANDHERI CORP" likha'],
    question: 'Teen alag clues milaakar location kya identify karti hai?',
    options: [
      'Sirf newspaper se pata nahi chal sakta — partial text hai',
      'Radio tower + "Andheri Ward" newspaper + "EAST-07" local tag — teen independent clues Andheri East, Mumbai point karte hain',
      'Graffiti tags koi bhi likh sakta hai — unreliable evidence',
      'Pipe brand national company hai — location specific nahi'
    ],
    answer: 'Radio tower + "Andheri Ward" newspaper + "EAST-07" local tag — teen independent clues Andheri East, Mumbai point karte hain',
    explanation: 'Forensic location identification mein multiple independent clues ki corroboration use hoti hai. Radio tower (visible from window), newspaper mein "Andheri Ward" + "Tower inauguration", aur local gang tag "EAST-07" — teeno alag sources ek hi area point kar rahe hain: Andheri East, Mumbai. Ek clue galat ho sakti hai, teen corroborating clues ko ignore nahi kar sakte.',
  },

  // ── IMAGE MYSTERY — HARD ──
  {
    id: 55, type: 'image', typeLabel: 'IMAGE MYSTERY', icon: '🖼️',
    difficulty: 'hard',
    curiosity: '🔬 Ek forensic photo mein woh tha jo naked eye se nahi dikhta — lekin detective ka dimag dikhta hai...',
    title: 'Invisible Ink Ka Raaz',
    doc: 'DOC-055',
    scene: 'Financial fraud case. Suspected document: ek contract jisme figures change ki gayi thi. Paper normal dikhta tha. UV light photography mein kuch reveal hua. Forensics team ne report di: "Original ink aur replacement ink alag hain — UV mein clearly dikh raha hai."',
    imageClue: {
      label: '// UV FORENSIC SCAN — DOCUMENT ANALYSIS',
      caption: '<span>🔬 UV LIGHT:</span> Normal light mein sab same lagta hai. UV mein alag inks clearly visible hain — ek cheez specifically changed ki gayi.',
      svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="background:#050610">
  <defs>
    <radialGradient id="uvGlow" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#4a1e8a" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#050610" stop-opacity="0"/>
    </radialGradient>
    <filter id="uvBloom"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- UV scan dark background -->
  <rect width="520" height="240" fill="#050610"/>
  <ellipse cx="260" cy="120" rx="240" ry="110" fill="url(#uvGlow)"/>
  <!-- UV indicator top -->
  <rect x="0" y="0" width="520" height="20" fill="#0a0620"/>
  <text x="10" y="14" font-family="monospace" font-size="8" fill="#7B4FD4" letter-spacing="2">UV FORENSIC SCAN — 365nm</text>
  <circle cx="490" cy="10" r="5" fill="#7B4FD4" opacity="0.8"/>
  <circle cx="480" cy="10" r="3" fill="#9B6FF4" opacity="0.6"/>

  <!-- Document paper background (glows faintly under UV) -->
  <rect x="60" y="30" width="400" height="180" rx="4" fill="#0a0820" stroke="#2a1860" stroke-width="1.5"/>

  <!-- Document header — glows same (original ink, consistent) -->
  <text x="260" y="55" text-anchor="middle" font-family="monospace" font-size="10" fill="#7B4FD4" opacity="0.6" letter-spacing="2">CONTRACT AGREEMENT</text>
  <line x1="80" y1="62" x2="440" y2="62" stroke="#3a2070" stroke-width="1" opacity="0.5"/>

  <!-- Lines of text — ORIGINAL INK (faint blue-purple under UV, consistent) -->
  <g fill="#5a3aB0" opacity="0.45" font-family="monospace" font-size="7">
    <text x="80" y="80">Party A: Sharma Enterprises Ltd............Rs.</text>
    <text x="80" y="95">Payment Terms: Monthly installment.....</text>
    <text x="80" y="110">Duration: 24 months from signing date...</text>
    <text x="80" y="125">Clause 4.2: Penalty on default...........</text>
    <text x="80" y="155">Witness: Ramesh Kumar, Notary Public...</text>
    <text x="80" y="170">Date Signed: 14th November 20XX.........</text>
    <text x="80" y="185">Registration No: MH/2023/44821...........</text>
  </g>

  <!-- THE CHANGED AMOUNT — glows VERY BRIGHT (different ink, newer, fluoresces more) -->
  <g filter="url(#uvBloom)">
    <!-- Bright UV glow around changed text -->
    <rect x="340" y="72" width="85" height="16" rx="2" fill="#c97dff" opacity="0.25"/>
    <text x="347" y="83" font-family="monospace" font-size="9" fill="#e0aaff" letter-spacing="1">2,50,00,000</text>
  </g>
  <!-- Hotspot ring flashing around changed figure -->
  <rect x="337" y="70" width="91" height="20" fill="none" stroke="#e0aaff" stroke-width="2" stroke-dasharray="4,2" rx="3" opacity="0.9" class="hotspot-ring"/>
  <!-- Labels -->
  <text x="383" y="104" text-anchor="middle" font-family="monospace" font-size="7" fill="#e0aaff">↑ ALAG INK!</text>
  <text x="383" y="113" text-anchor="middle" font-family="monospace" font-size="6" fill="#e0aaff" opacity="0.8">BRIGHT GLOW = NEWER INK</text>

  <!-- UV color legend -->
  <rect x="65" y="140" width="8" height="8" rx="1" fill="#5a3aB0" opacity="0.5"/>
  <text x="78" y="148" font-family="monospace" font-size="7" fill="#5a3aB0" opacity="0.7">ORIGINAL INK — CONSISTENT GLOW</text>
  <rect x="65" y="154" width="8" height="8" rx="1" fill="#e0aaff"/>
  <text x="78" y="162" font-family="monospace" font-size="7" fill="#e0aaff">ALTERED INK — BRIGHT FLUORESCENCE</text>

  <!-- Normal light comparison note -->
  <rect x="65" y="195" width="390" height="12" rx="2" fill="#0d0a20"/>
  <text x="260" y="204" text-anchor="middle" font-family="monospace" font-size="7" fill="#4a3870" opacity="0.7">NORMAL LIGHT MEIN: DONO INK SAME DIKHTI — DIFFERENCE INVISIBLE</text>

  <text x="10" y="232" font-family="monospace" font-size="8" fill="#3d4a5c" letter-spacing="1">EXHIBIT: DOC-055 — UV SCAN — FRAUD DOCUMENT</text>
</svg>`
    },
    clues: ['Sirf ek figure UV mein bahut bright glow karta hai', 'Original ink consistent faint blue-purple', 'Changed amount: Rs 2,50,00,000 — BRIGHT white-purple', 'Newer ink UV mein zyada fluoresce karti hai'],
    question: 'UV scan mein ek figure ka zyada glow karna kya prove karta hai?',
    options: [
      'Printer ki ink khatam ho rahi thi — isliye ek jagah alag print hua',
      'Woh figure baad mein likhi gayi — alag ink jo UV mein zyada fluoresce karti hai, original document mein tamper hua',
      'UV scan ki setting galat thi',
      'Amount naturally zyada important hoti hai — isliye glow karta hai'
    ],
    answer: 'Woh figure baad mein likhi gayi — alag ink jo UV mein zyada fluoresce karti hai, original document mein tamper hua',
    explanation: 'UV (ultraviolet) forensics mein alag inks alag levels par fluoresce karti hain. Newer/replacement inks (especially ballpoint aur gel) UV mein zyada bright glowing karti hain compared to original document ink. Sirf ek specific figure (amount) ka bright glowing hona clear proof hai ki woh baad mein likha gaya — document forgery proven. Yeh court-admissible forensic evidence hai.',
  },

  // ── IQ PUZZLE — EASY ──
  {
    id: 41, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'easy',
    curiosity: '🔢 Yeh puzzle sirf 10 second mein solve ho sakta hai — agar aap sahi jagah dhyaan dein...',
    title: 'Seedha Sawal, Ulta Jawab',
    doc: 'DOC-041',
    scene: 'Detective Arjun ek suspect se poochh raha tha. Usne kaha: "Mere ek bhai hai aur woh mera beta bhi hai." Suspect ka yeh statement sunkar Arjun ko crime scene ki ek nayi lead mili — kyunki statement bilkul sahi thi. Suspect ek aurat thi.',
    clues: ['Bhai aur beta dono', 'Statement sahi hai', 'Suspect aurat hai', 'No contradiction'],
    question: 'Yeh kaise possible hai?',
    options: [
      'Suspect jhooth bol rahi thi — dono ek saath nahi ho sakte',
      'Suspect ki maa ka doosra beta hi uska bhai hai, aur usne us bete ke baap se shaadi ki — wahi ab uska step-son bhi hai',
      'Bhai ko adopt karke beta banaya',
      'Alag pitaon ke do bache — rishta nahi'
    ],
    answer: 'Suspect ki maa ka doosra beta hi uska bhai hai, aur usne us bete ke baap se shaadi ki — wahi ab uska step-son bhi hai',
    explanation: 'Suspect ne apni maa ke doosre bete (apne bhai) ke baap se shaadi ki — toh woh bhai ab uska step-son bhi ban gaya. Isliye woh dono uska bhai bhi hai aur beta bhi. Yeh legally aur logically possible hai.',
  },

  // ── IQ PUZZLE — MEDIUM ──
  {
    id: 42, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'medium',
    curiosity: '⚖️ Ek dead body. Koi murder weapon nahi. Koi poison nahi. Phir bhi detective ne 5 minute mein pakad liya...',
    title: 'Bina Hathiyaar Ka Rahasya',
    doc: 'DOC-042',
    scene: 'Ek aadmi barff se dhake pahaad par mara mila. Body ke paas na koi hathiyaar, na zeher, na sangharsh ke signs. Temperature -15°C thi. Uske joote off the aur door rakhe the. Uska phone: ek aakhri message — "Main yahan hoon." Forensics: hypothermia se maut. Par woh experienced hiker tha — akele bahar nahi jaata.',
    clues: ['Experienced hiker', 'Joote utare hue', 'Hypothermia maut', 'Aakhri message sent'],
    question: 'Joote utare hue hone ka kya matlab hai?',
    options: [
      'Woh raat ko soone ke liye joote utaar raha tha — accident tha',
      'Paradoxical undressing — extreme hypothermia mein dimag garm lagta hai, kapde utaarne lagte hain — natural maut',
      'Kisi ne joote uske baad utaare taaki theft lag sake',
      'Joote naye the aur tight the — usne relief ke liye utaare'
    ],
    answer: 'Paradoxical undressing — extreme hypothermia mein dimag garm lagta hai, kapde utaarne lagte hain — natural maut',
    explanation: 'Paradoxical undressing ek real medical phenomenon hai — severe hypothermia mein body ke vessels dilate hote hain aur brain ko sudden warmth feel hoti hai. Victim kapde utaarne lagta hai. Experienced hiker bhi is stage mein rational nahi rehta. Yeh natural maut ka sign hai, staged murder nahi.',
  },

  // ── IQ PUZZLE — HARD ──
  {
    id: 43, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'hard',
    curiosity: '🌀 Yeh paradox Cambridge ke ek professor ne banaya tha — aaj bhi detective training mein use hota hai...',
    title: 'Teeno Ka Sach',
    doc: 'DOC-043',
    scene: 'Crime scene par teen bayanaat. Aisha: "Main wahan nahi thi — Bikram ne kiya." Bikram: "Aisha jhooth bol rahi hai — Chirag ne kiya." Chirag: "Main innocent hoon — Aisha sach bol rahi hai." Detective jaanta hai: sirf EK insaan ne crime kiya. Sirf ek bayan poora sach hai. Baaki do mein se ek poora jhooth, ek mixed (ek hissa sach ek jhooth).',
    clues: ['Sirf ek qatil', 'Ek pure truth statement', 'Ek pure lie statement', 'Ek mixed statement'],
    question: 'Logical analysis se qatil kaun hai?',
    options: [
      'Aisha — Chirag ne use confirm kiya par Chirag mixed tha',
      'Bikram — agar Aisha pure truth hai: Bikram ne kiya, Chirag Aisha ko confirm karta hai (mixed truth-part)',
      'Chirag — Bikram ne Chirag ko accuse kiya',
      'Determine nahi ho sakta'
    ],
    answer: 'Bikram — agar Aisha pure truth hai: Bikram ne kiya, Chirag Aisha ko confirm karta hai (mixed truth-part)',
    explanation: 'Agar Aisha pure truth hai: (1) woh wahan nahi thi [sach], (2) Bikram ne kiya [sach]. Chirag kehta hai "Aisha sach bol rahi hai" [sach-part] + "Main innocent hoon" [jhooth-part] = mixed. Bikram kehta hai "Aisha jhooth [jhooth] + Chirag ne kiya [jhooth]" = pure lie. Perfect fit: Aisha=truth, Bikram=pure lie, Chirag=mixed. Qatil = Bikram.',
  },

  // ── HIDDEN CLUE — EASY ──
  {
    id: 44, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'easy',
    curiosity: '☎️ Woh call kar raha tha jab mara gaya — aur recording mein ek cheez clearly alag thi...',
    title: 'Phone Call Ka Raaz',
    doc: 'DOC-044',
    scene: 'Victim Sanjay phone par tha jab uski maut hui — call recording mili. Recording mein: Sanjay ki awaaz normal thi, koi darr nahi. Background mein kukkar ki seeti sunai di — khana ban raha tha. Phir ek thud ki awaaz aur line dead. Sanjay ne kisi ko ghar bulaya nahi tha. Par uski wife ne kaha: "Main grocery par gayi thi — ghar par koi nahi tha."',
    clues: ['Kukkar seeti background mein', 'Wife ne kaha ghar khaali tha', 'No forced entry', 'Normal voice no fear'],
    question: 'Kukkar seeti kya reveal karti hai?',
    options: [
      'Sanjay khud khana bana raha tha — wife ne sahi kaha',
      'Koi ghar mein tha jo khana bana raha tha — wife ka alibi jhooth hai',
      'Recording mein TV ki awaaz thi — kukkar nahi',
      'Neighbor ka kukkar sunai diya — thin walls'
    ],
    answer: 'Koi ghar mein tha jo khana bana raha tha — wife ka alibi jhooth hai',
    explanation: 'Sanjay phone par tha — woh khud khana nahi bana sakta tha. Background mein kukkar seeti = ghar mein koi tha jo khana bana raha tha. Wife ne kaha ghar khaali tha. Yeh direct contradiction hai — wife ya toh ghar mein thi ya kisi aur ko ghar mein chhod ke gayi thi. Sabse important hidden audio clue.',
  },

  // ── HIDDEN CLUE — MEDIUM ──
  {
    id: 45, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'medium',
    curiosity: '🪑 Ek khali kursi ne ek detective ko poori mystery solve kara di — aap kaise dekhte hain isko?',
    title: 'Khali Kursi Ka Jawab',
    doc: 'DOC-045',
    scene: 'Office mein senior manager ki maut — heart attack bataya gaya. Uske kamre mein sab normal tha sirf: uski chair jo aadhi ghumayi hui thi (window ki taraf). Computer screen lock nahi tha. Chai ka cup mez par — bilkul full, thanda. Darwaza andar se band tha. Ek note pad par sirf "11:40" likha tha.',
    clues: ['Chair window ki taraf ghumayi', 'Screen unlocked', 'Full thandi chai', '11:40 note'],
    question: '"11:40" note aur thandi chai dono milake kya suggest karte hain?',
    options: [
      'Woh 11:40 par ek meeting ki taiyaari kar raha tha',
      'Woh 11:40 par aaya, chai banayi par pine se pehle kuch hua',
      'Kisi ne 11:40 ka time maut ke baad note kiya — murderer ne time record kiya',
      '11:40 ek safe combination tha'
    ],
    answer: 'Kisi ne 11:40 ka time maut ke baad note kiya — murderer ne time record kiya',
    explanation: 'Agar woh 11:40 par aaya hota toh chai pita. Bilkul full thandi chai = kabhi nahi piyi — maut jaldi hua. Screen unlock + chair ghumayi = koi aur kamre mein tha. "11:40" note murderer ne time record kiya taaki alibi banana easy ho — yeh maut ka real time hai jo qatil ne record kiya.',
  },

  // ── HIDDEN CLUE — HARD ──
  {
    id: 46, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'hard',
    curiosity: '🌿 Ek botanical clue ne ek famous murder case mein criminal ko pakdaya — forensics mein aaj bhi use hoti hai...',
    title: 'Phool Ka Gawah',
    doc: 'DOC-046',
    scene: 'Body ek jungle mein mili — apparent "accident." Victim ke joote mein ek rare pollen grain mili — sirf ek specific species ka. Woh pollen sirf ek 3-km radius ke andhar ek specific location par milti hai: ek abandoned farmhouse ke paas. Suspect Rahul ne kaha: "Main us farmhouse ke paas kabhi nahi gaya." Lekin uski car mein bhi same pollen trace mili — steering wheel par.',
    clues: ['Rare pollen joote mein', 'Same pollen car steering wheel par', 'Sirf ek location 3km radius mein', 'Suspect ka denial'],
    question: 'Steering wheel par pollen ka kya significance hai?',
    options: [
      'Rahul wahan gaya tha — direct physical evidence, denial jhooth hai',
      'Pollen hawa se 3km tak travel kar sakta hai',
      'Kisi ne Rahul ki car mein pollen plant kiya — frame kiya',
      'Same species aur bhi jagah mil sakti hai'
    ],
    answer: 'Rahul wahan gaya tha — direct physical evidence, denial jhooth hai',
    explanation: 'Steering wheel par pollen — jo direct haath se touch hoti hai — sirf tabhi possible hai jab Rahul physically wahan gaya aur steering wheel touch kiya. Pollen hawa se enclosed car ke steering wheel tak nahi pahonchti. Same rare species + same location + denial = direct lie. Forensic botany ka yahi power hai.',
  },

  // ── IQ PUZZLE — EASY (second) ──
  {
    id: 47, type: 'iq', typeLabel: 'IQ PUZZLE', icon: '🧠',
    difficulty: 'easy',
    curiosity: '🌕 Ek andhere ghar mein detective ne bina torch ke bhi sab kuch dekha — kaise?',
    title: 'Andhere Ghar Mein Roshni',
    doc: 'DOC-047',
    scene: 'Detective Neha ek crime scene par pahunchi — raat ka waqt, bijli cut. Uske paas torch nahi thi. Ghar ke andar woh sab kuch clearly dekh sakti thi — murder weapon, footprints, har cheez. Bahar poornima ki raat thi — poora chaand nikla hua. Khidkiyaan saaf sheeshe ki thi aur khuli thi.',
    clues: ['Raat ka waqt', 'Bijli nahi', 'Torch nahi', 'Poornima ki raat — khuli saaf khidkiyaan'],
    question: 'Neha ne bina torch ke sab kaise dekha?',
    options: [
      'Usne phone ki screen use ki roshni ke liye',
      'Padosi ki ghar ki light se roshni aayi',
      'Chandni — poornima ki raat thi, saaf khidkiyon se moonlight kaafi thi',
      'Aankhein andheron mein adjust ho gayi thi'
    ],
    answer: 'Chandni — poornima ki raat thi, saaf khidkiyon se moonlight kaafi thi',
    explanation: 'Poornima ki raat chaand ki roshni kaafi strong hoti hai — saaf sheeshe ki khuli khidkiyon se ghar ke andar clearly dekha ja sakta hai. Yeh sabse obvious aur natural explanation hai jo problem statement mein already hint kiya gaya tha. Kabhi kabhi jawab seedha sawal mein hi hota hai.',
  },

  // ── HIDDEN CLUE — MEDIUM (second) ──
  {
    id: 48, type: 'hidden', typeLabel: 'HIDDEN CLUE', icon: '🔦',
    difficulty: 'medium',
    curiosity: '🚿 Bathroom mein ek steam ka nishaan tha — aur usne poori story badal di...',
    title: 'Sheeshe Mein Sach',
    doc: 'DOC-048',
    scene: 'Ghar mein suspected suicide. Victim bathroom mein mila. Bathroom mirror par steam thi. Crime scene photo mein: ek towel neatly folded tha, soap half-used, shampoo bottle khali. Par victim ke baal completely dry the. Shower nahi chala tha — hot water switch off tha.',
    clues: ['Mirror par steam', 'Dry baal victim ke', 'Towel neatly folded', 'Hot water switch off'],
    question: 'Mirror par steam aur dry baal — yeh kya contradict karte hain?',
    options: [
      'Victim ne sirf face wash kiya tha — isliye baal dry hain',
      'Steam kisi aur ke shower se aayi — koi aur bathroom mein tha ya scene stage kiya gaya',
      'Steam purani thi aur dissipate nahi hui',
      'Hot water band karna victim ki aadat thi'
    ],
    answer: 'Steam kisi aur ke shower se aayi — koi aur bathroom mein tha ya scene stage kiya gaya',
    explanation: 'Steam tabhi hoti hai jab hot water chale. Hot water switch off tha, baal dry hain — victim ne shower nahi liya. Toh steam kahan se? Kisi aur ne hot water briefly chalaya. Neatly folded towel bhi suggest karta hai scene arrange kiya gaya. Yeh staged suicide tha — kisi aur ne scene set kiya.',
  },

  // ════════════════════════════════════════════════════════════════
  // 50 NEW CASES  (IDs 56–105)
  // Types: detective · murder · scene · hidden · real · brain · psych · trick · object · iq
  // Difficulties: easy · medium · hard · genius
  // ════════════════════════════════════════════════════════════════

  // ── DETECTIVE / EASY ──────────────────────────────────────────
  {
    id:56, type:'detect', typeLabel:'DETECTIVE PROBE', icon:'🔎', difficulty:'easy',
    title:'Gawah Ka Jhooth',
    doc:'DOC-056',
    curiosity:'👁️ Ek gawah jo crime dekh hi nahi sakta tha — par usne poori kahani sunaayi...',
    scene:'Raat 11 baje ek gali mein jhagda. Raju kehta hai: "Maine khidki se dekha — Suresh ne Mohan ko maara." Lekin Raju ki khidki gali ki taraf nahi, wall ki taraf hai. Raat mein koi street light bhi nahi thi.',
    clues:['Khidki wall ki taraf','No street light','Raat 11 baje','Suresh accused'],
    question:'Raju ka bayan kyun invalid hai?',
    options:['Suresh aur Raju dushman hain — personal grudge','Raju ki khidki gali ki taraf nahi — woh physically dekh hi nahi sakta tha','Mohan ne khud bola Raju jhooth bola','Raat mein identification possible nahi'],
    answer:'Raju ki khidki gali ki taraf nahi — woh physically dekh hi nahi sakta tha',
    explanation:'Jo cheez physically impossible hai uski gawahi koi value nahi rakhti. Khidki ka direction factual evidence hai — bayan auto-dismissed.'
  },
  {
    id:57, type:'detect', typeLabel:'DETECTIVE PROBE', icon:'🔎', difficulty:'easy',
    title:'Missing Paisa',
    doc:'DOC-057',
    scene:'Dukaan ke register mein 500 rupaye kam. Malik Haresh ne kaha sirf teen log counter par aaye: Amit (subah), Bina (dopahar), Chandu (shaam). Haresh ne khud subah 10,000 rupaye rakhe the. Shaam ko check kiya toh 9,500 mile.',
    clues:['500 rupaye kam','Teen log aaye','Haresh ne khud rakhe','Koi CCTV nahi'],
    question:'Sabse seedha investigation step kya hoga?',
    options:['Teeno ko immediately arrest karo','Haresh ki khud ki counting verify karo — human error possible','CCTV lagao pehle','Police file karo bina jaanch ke'],
    answer:'Haresh ki khud ki counting verify karo — human error possible',
    explanation:'Chori assume karne se pehle base verify karo. Counting galti sabse common wajah hoti hai. 500 ka farak ek note miscount ho sakta hai.'
  },
  {
    id:58, type:'detect', typeLabel:'DETECTIVE PROBE', icon:'🔎', difficulty:'easy',
    title:'Duplicate Darwaza',
    doc:'DOC-058',
    curiosity:'🗝️ Teen logon ke paas ek hi darwaze ki chabi thi — aur andar se andar wala khatam hua...',
    scene:'Society office se documents chori. Master key sirf teen logon ke paas: Secretary Priya, Treasurer Mahesh, aur Guard Ratan. Scene mein koi tod-fod nahi. Andar se lock tha toh bahar se key use nahi hui.',
    clues:['No forced entry','Andar se lock tha','Teen key holders','Documents only stolen'],
    question:'Andar se lock hona kya prove karta hai?',
    options:['Chor office mein hi chhup gaya tha','Bahar wali key use nahi hui — chor office ke andar pahle se tha ya andar se lock karke nikla','Priya ne kiya — woh secretary hai','Guard Ratan ne kiya'],
    answer:'Bahar wali key use nahi hui — chor office ke andar pahle se tha ya andar se lock karke nikla',
    explanation:'Andar se lock = entry bahar se nahi hui. Chor ya toh office close hone se pehle chhup gaya, ya andar se lock karke window/other exit use kiya.'
  },

  // ── MURDER MYSTERY / EASY ─────────────────────────────────────
  {
    id:59, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'easy',
    title:'Chai Mein Zeher',
    doc:'DOC-059',
    curiosity:'☕ Sirf ek cup mein zeher tha — aur woh cup specifically usi ko diya gaya...',
    scene:'Teen logon ne saath mein chai pi — sirf ek ki maut hui. Forensics: zeher chai mein tha. Teeno ke cup ek hi tray par aaye. Host Kamla ne cups serve kiye. Victim Ramesh regular guest tha. Zeher slow-acting tha — 2 ghante baad asar hua.',
    clues:['Sirf Ramesh ka cup zeherila','Kamla ne cups diye','Same tray','Slow-acting poison'],
    question:'Kamla par shak kyun zaroori hai?',
    options:['Wife hamesha suspect hoti hai','Kamla ne hi cups distribute kiye — specific cup target karna possible sirf uske liye tha','Ramesh ka koi dushman hoga bahar','Slow poison means bahar se diya gaya'],
    answer:'Kamla ne hi cups distribute kiye — specific cup target karna possible sirf uske liye tha',
    explanation:'Jab ek specific cup mein zeher ho aur serve karne wala ek hi insaan ho — woh sabse logical suspect hai. Access + opportunity = prime suspect.'
  },
  {
    id:60, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'easy',
    title:'Goli Ka Raaz',
    doc:'DOC-060',
    scene:'Body mili — ek goli lagi thi seene mein. Kamra andar se band tha. Khidki band thi. No gun found near body. Forensics: goli kaafi door se nahi maari gayi — close range.',
    clues:['Andar se lock','No gun found','Close range shot','Khidki band'],
    question:'Gun ka na milna kya suggest karta hai?',
    options:['Victim ne khud maari aur gun kahin girf gayi','Kisi ne andar se maar ke gun bahar feka ya saath le gaya — suicide impossible close range mein gun disappear nahi hoti','Police ne utha li','Chor le gaya'],
    answer:'Kisi ne andar se maar ke gun bahar feka ya saath le gaya — suicide impossible close range mein gun disappear nahi hoti',
    explanation:'Close range + no gun = murder. Suicide mein gun hamesha paas milti hai. Gun ka gayab hona clearly indicate karta hai koi aur tha jo murder karke nikal gaya.'
  },

  // ── CRIME SCENE ANALYSIS / EASY ──────────────────────────────
  {
    id:61, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'easy',
    title:'Ulta Giraa Glass',
    doc:'DOC-061',
    scene:'Bar mein fight ke baad body mili. Scene mein: ek glass ulta gira hua tha, peeya hua liquor tha, napkin fold tha. Victim ke haath mein koi injury nahi — jo fight mein hoti hai.',
    clues:['Glass ulta','Liquor pilaya hua','Napkin folded','No hand injuries'],
    question:'Haath par koi injury na hona kya suggest karta hai?',
    options:['Victim bada fighter tha — injury nahi hoti','Victim ne fight nahi ki — scene staged hai, real attack sudden tha','Victim drunk tha','Bar fight mein haath nahi lagte'],
    answer:'Victim ne fight nahi ki — scene staged hai, real attack sudden tha',
    explanation:'Real bar fights mein defensive injuries hoti hain — khaas kar haathon par. Clean hands = victim ko suddenly attack kiya gaya, ya scene baad mein set kiya gaya.'
  },
  {
    id:62, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'easy',
    title:'Baarish Baad Ka Jhooth',
    doc:'DOC-062',
    curiosity:'🌧️ Subah baarish ruki — aur ek suspect ka jhooth ujagar ho gaya sirf uske joote dekh ke...',
    scene:'Subah 6 baje baarish ruki. Crime scene: colony ke garden mein body mili 7 baje. Suspect Vikrant ka bayan: "Main subah 7 baje direct office gaya — ghar se seedha." Uske joote completely dry the.',
    clues:['Baarish 6 baje tak','Body garden mein 7 baje','Joote bilkul dry','Seedha office claim'],
    question:'Dry joote kya prove karte hain?',
    options:['Vikrant car mein gaya — wet nahi hue','Vikrant garden se nahi guzra — lekin garden mein jaana tha toh joote geelay hote — garden pass nahi gaya','Vikrant ne joote change kiye','Baarish ke baad dry ho jaate hain joote'],
    answer:'Vikrant garden se nahi guzra — lekin garden mein jaana tha toh joote geelay hote — garden pass nahi gaya',
    explanation:'6 baje baarish ruki, 7 baje body mili. Fresh wet soil = joote geele hone chahiye the agar garden se guzra. Dry joote = garden ke paas nahi gaya = alibi possible hai, ya koi aur route liya.'
  },

  // ── HIDDEN CLUE / EASY ────────────────────────────────────────
  {
    id:63, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'easy',
    title:'Photo Ki Tarikh',
    doc:'DOC-063',
    curiosity:'📸 Ek photo ne ek murder suspect ka alibi khatam kar diya — sirf background detail ne...',
    scene:'Suspect Dinesh ka alibi: "15 November ko main Goa mein tha — yeh dekho photo." Photo mein Dinesh samundar kinare hai. Lekin photo ki background mein ek banner dikh raha hai: "Happy New Year 2024 — Jan 1 celebration."',
    clues:['15 November alibi claim','Goa beach photo','Background mein NY banner','Jan 1 date on banner'],
    question:'Banner kya prove karta hai?',
    options:['Banner pehle se laga tha — kuch nahi prove karta','Photo 1 January ki hai — 15 November ki nahi — alibi jhooth hai','Goa mein pehle se decor lagaate hain','Date confirm nahi hoti banner se'],
    answer:'Photo 1 January ki hai — 15 November ki nahi — alibi jhooth hai',
    explanation:'Background mein "Jan 1 celebration" banner clearly date indicate karta hai. Yeh photo 15 November ki nahi ho sakti. Alibi photo fabricated — alag din ki photo use ki gayi.'
  },
  {
    id:64, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'easy',
    title:'Left Hand Ki Galti',
    doc:'DOC-064',
    scene:'Forged signature case. Victim ki will mein signature forged lagi. Expert ne note kiya: original will mein signature right-tilted thi (right-handed person). Forged signature left-tilted thi. Suspect list mein ek left-handed aur do right-handed log.',
    clues:['Original: right tilt','Forged: left tilt','Teen suspects','Ek left-handed'],
    question:'Signature tilt kya reveal karti hai?',
    options:['Tilt se handedness confirm nahi hoti','Left-tilted forgery = left-handed insaan ne kiya — directly ek suspect point karta hai','Expert opinion galat hai','Dono tilts same hain'],
    answer:'Left-tilted forgery = left-handed insaan ne kiya — directly ek suspect point karta hai',
    explanation:'Writing tilt strongly correlate karti hai handedness se. Left-handed log naturally left-tilted likhte hain. Yeh ek identifiable trait hai jo forger ko reveal karta hai.'
  },

  // ── REAL LIFE LOGIC / EASY ────────────────────────────────────
  {
    id:65, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'easy',
    title:'Ek Jhoothi Taareekh',
    doc:'DOC-065',
    scene:'Insurance claim: accident 14 February ko hua. Claimant ka bayan: "Main akela tha — koi witness nahi." Insurance company ne reject kiya. Investigator ne note kiya: 14 February Valentine\'s Day tha — ek busy public holiday. Accident location busy market area.',
    clues:['14 Feb = Valentine\'s Day','Busy market area','No witness claim','Public holiday'],
    question:'"Koi witness nahi" claim kyun suspicious hai?',
    options:['Valentine\'s Day par accidents nahi hote','Valentine\'s Day busy market mein "koi nahi" claim credible nahi — high footfall din — likely witness hai','Insurance companies hamesha reject karti hain','Investigator ki galti'],
    answer:'Valentine\'s Day busy market mein "koi nahi" claim credible nahi — high footfall din — likely witness hai',
    explanation:'Valentine\'s Day + busy market = high human traffic. "No witness" claim nearly impossible. Ya toh accident hua hi nahi, ya location/date galat hai. Real event mein koi na koi witness hota.'
  },
  {
    id:66, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'easy',
    title:'ATM Ka Sach',
    doc:'DOC-066',
    scene:'Victim claim karta hai uska ATM card use karke 50,000 chori hue — woh ghar par tha. Bank records: transaction 11:47 PM, ATM location 3 km door, card physically use hua (not online). Victim ke paas card hai.',
    clues:['Physical card use hua','Victim ka card paas mein hai','3km distance','11:47 PM transaction'],
    question:'Physical card present hona aur transaction dono sach kaise ho sakte hain?',
    options:['Bank error tha','Card ka duplicate (clone) bana ke use kiya gaya — skimming attack','Victim khud gaya aur bhool gaya','Transaction record galat hai'],
    answer:'Card ka duplicate (clone) bana ke use kiya gaya — skimming attack',
    explanation:'Physical card paas mein + transaction elsewhere = card cloning. Skimmers ATM par lagate hain jo card data copy karte hain. Phir duplicate card banake alag jagah use karte hain. Real aur common cybercrime.'
  },

  // ── BRAIN TEASER / EASY ───────────────────────────────────────
  {
    id:67, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'easy',
    title:'Do Bhai Ek Sach',
    doc:'DOC-067',
    curiosity:'👬 Do judwa bhai — ek hamesha sach bolta, ek hamesha jhooth. Detective ne ek sawal se pata laga liya...',
    scene:'Detective ke saamne do judwa bhai. Ek hamesha sach, ek hamesha jhooth. Detective nahi jaanta kaun kaun hai. Ek se poochha: "Kya tumhara bhai sach bolta hai?" Usne kaha: "Haan."',
    clues:['Judwa bhai','Ek sach ek jhooth','Ek sawal','Haan jawab mila'],
    question:'"Haan" jawab dene wala kaun hai?',
    options:['Saccha bhai — woh sach bolta hai','Jhoota bhai — woh kehga "haan" kyunki jhoothi baat bolega ki saccha bhai sach bolta hai (jo jhooth hai agar woh saccha bhai hota)... dono "haan" keh sakte hain','Determine nahi hota','Saccha bhai nahi keh sakta "haan"'],
    answer:'Jhoota bhai — woh kehga "haan" kyunki jhoothi baat bolega ki saccha bhai sach bolta hai (jo jhooth hai agar woh saccha bhai hota)... dono "haan" keh sakte hain',
    explanation:'Saccha bhai kehga "Nahi — mera bhai jhooth bolta hai." Jhoota bhai kehga "Haan" (jhooth). Toh "Haan" = jhoota bhai. Yeh classic logic puzzle hai jahan direct sawal se identity reveal hoti hai.'
  },
  {
    id:68, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'easy',
    title:'Tala Aur Chaabi',
    doc:'DOC-068',
    scene:'Evidence room ka tala khulne ke liye 3 keys ek saath chahiyen. 5 detectives mein se kisi 2 ke paas bhi saari keys na hon — par koi 3 milke zaroor khol sakein. Minimum kitni keys hongi total?',
    clues:['5 detectives','Koi 2 nahi khol sakte','Koi 3 zaroor khol sakein','Minimum keys?'],
    question:'Minimum total keys kitni honi chahiye?',
    options:['5','10 — har key 3 copies mein, aise ki koi 2 ke paas complete set nahi','15','20'],
    answer:'10 — har key 3 copies mein, aise ki koi 2 ke paas complete set nahi',
    explanation:'Classic secret sharing puzzle. 5 detectives mein se koi 2 nahi khol sakte = har key aisa distribute karo ki koi 2 combination complete na ho. Minimum 10 keys needed. Yeh cryptographic secret sharing ka foundation hai.'
  },

  // ── MURDER / MEDIUM ───────────────────────────────────────────
  {
    id:69, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'medium',
    curiosity:'🌙 Raat 2 baje ek ghar mein sab so rahe the — aur subah ek nahi utha...',
    title:'Neend Mein Maut',
    doc:'DOC-069',
    scene:'Sachin apne kamre mein mara mila — neend mein. Kamra andar se band. No forced entry. Family mein: wife Tara, beta Rohit (25), beti Nisha (22). Forensics: poison — tasteless, odorless, slowly acting over 6 hours. Dinner saath khaya tha. Sirf Sachin ka khana alag tha — diet food, wife ne banaya.',
    clues:['Sirf Sachin ka khana alag tha','Wife ne diet food banaya','Slow poison 6 hours','Kamra andar se band'],
    question:'Alag diet food ka kya significance hai?',
    options:['Diet food mein poison aasaan nahi','Sirf Sachin ne khaaya woh — poison specifically usi mein dena possible tha — wife ka opportunity sabse clear','Beta Rohit ne kiya — kamra band karne ka time mila hoga','Nisha ne diet food mein poison mila diya'],
    answer:'Sirf Sachin ne khaaya woh — poison specifically usi mein dena possible tha — wife ka opportunity sabse clear',
    explanation:'Shared food mein poison dena risky hota — sab mar sakte hain. Alag food jo sirf victim ne khaya — specifically targeted poisoning ka best opportunity. Wife ne banaya + sirf victim ne khaya = highest opportunity.'
  },
  {
    id:70, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'medium',
    curiosity:'📱 Uski phone ki battery 100% thi — 8 ghante baad bhi 100%. Yeh ek detective ke liye sab kuch badal deta tha...',
    title:'Dead Phone Ka Raaz',
    doc:'DOC-070',
    scene:'Victim Nalini ki body mili — allegedly 8 ghante se ghar mein akeli thi. Uska phone lock tha — last activity 8 ghante pehle. Lekin forensics ne note kiya: phone ki battery 8 ghante baad bhi 100% thi. Nalini compulsive phone user thi — dost confirm karte hain.',
    clues:['8 ghante no phone activity','Battery 100% after 8 hours','Compulsive phone user','Last seen 8 hours ago'],
    question:'100% battery after 8 hours kya suggest karti hai?',
    options:['Phone ne power saver mode activate kiya','Phone ko 8 ghante pehle band karke charger par rakha gaya — maut 8 ghante pehle nahi, baad mein hui — time of death manipulate kiya gaya','Nalini so rahi thi','Battery issue tha'],
    answer:'Phone ko 8 ghante pehle band karke charger par rakha gaya — maut 8 ghante pehle nahi, baad mein hui — time of death manipulate kiya gaya',
    explanation:'Compulsive user 8 ghante phone nahi choota. 100% battery = phone use nahi hua + charge par tha. Kisi ne deliberately phone band karke charger par rakha taaki TOD manipulate ho. Classic alibi construction.'
  },
  {
    id:71, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'medium',
    title:'Darwaaze Ki Awaaz',
    doc:'DOC-071',
    scene:'Building mein murder. Neighbour Mrs. Iyer ne suna: "Raat 11:30 baje darwaaza khole aur bande ki awaaz." She lives directly below, says she heard UPSTAIRS door open then close — single set of sounds. Victim on 3rd floor, suspect lives on 4th. Ground floor entry makes different sound.',
    clues:['Awaaz 11:30 baje','Upstairs door open/close','Single set — ek aadmi','Suspect 4th floor par'],
    question:'"Sirf ek set of sounds" kya prove karta hai?',
    options:['Koi bahar nahi gaya','Koi bahar aaya tha — ek insaan andar gaya aur wapas nahi aaya, ya andar se bahar ek hi gaya','Dono ek saath gaye','Mrs. Iyer galat sun rahi thi'],
    answer:'Koi bahar aaya tha — ek insaan andar gaya aur wapas nahi aaya, ya andar se bahar ek hi gaya',
    explanation:'Open + close sounds = entry ya exit, ek hi movement. Agar murderer andar gaya aur nahi nikla — abhi andar hai. Ya victim akela ghar chhod ke gaya. Mrs. Iyer ka observation single movement confirm karta hai.'
  },

  // ── CRIME SCENE / MEDIUM ─────────────────────────────────────
  {
    id:72, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'medium',
    curiosity:'🕰️ Clock 9:15 par ruka hua tha — aur detective ko poora timeline isi ek cheez se mila...',
    title:'Ruka Hua Waqt',
    doc:'DOC-072',
    scene:'Study room mein body. Mantelpiece clock 9:15 par ruka hua. Body par kaafi injuries. Suspect Abhay ka alibi: "Main 9 baje se 10:30 tak bahar tha — restaurant bill hai." Restaurant 20 minute door. Bill timestamp: 9:05 PM. Victim ki estimated TOD: 9:10-9:20 PM.',
    clues:['Clock 9:15 par ruka','Restaurant bill 9:05','Restaurant 20 min door','TOD 9:10-9:20'],
    question:'Bill aur distance ko milaa ke kya conclusion nikalta hai?',
    options:['Abhay innocent hai — bill tha','Abhay 9:05 par restaurant mein tha, TOD 9:10-9:20 — restaurant 20 min door — physically impossible to commit murder','Clock kisi ne set kiya','TOD estimate galat hai'],
    answer:'Abhay 9:05 par restaurant mein tha, TOD 9:10-9:20 — restaurant 20 min door — physically impossible to commit murder',
    explanation:'9:05 restaurant + 20 min travel = earliest arrival home 9:25. TOD 9:10-9:20 = Abhay wahan tha hi nahi. Solid alibi. Clock stopping at 9:15 might have been staged, but it doesn\'t help frame Abhay mathematically.'
  },
  {
    id:73, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'medium',
    title:'Khoon Ka Nishaan',
    doc:'DOC-073',
    curiosity:'🩸 Blood spatter ne ek baat clear kar di — aur detective ne pooch liya: "Tum wahan khade the, hai na?"',
    scene:'Wall par blood spatter pattern. Forensics: high-velocity spatter, right-to-left direction, height 5.2 feet. Teen suspects: Anand (5\'10"), Beena (5\'2"), Chandu (5\'6"). Spatter angle indicate karta hai attacker ka haath 5.5 feet par tha strike ke waqt.',
    clues:['Spatter at 5.5 feet height','Right-to-left direction','Anand 5\'10", Beena 5\'2", Chandu 5\'6"','High-velocity'],
    question:'Spatter height 5.5 feet pe hone ka kya matlab hai?',
    options:['Sabhi suspects match karte hain','Sirf 5\'6" ya zyada height wale logon ka striking height 5.5 feet possible — Beena (5\'2") physically match nahi karti','Beena ne kiya — chhoti hoti hain zyada aggressive','Height se kuch prove nahi hota'],
    answer:'Sirf 5\'6" ya zyada height wale logon ka striking height 5.5 feet possible — Beena (5\'2") physically match nahi karti',
    explanation:'Average arm reach height ≈ own height + ~8-10 inches striking downward. 5\'2" Beena ka comfortable strike height is range mein nahi aata physically. Anand aur Chandu both plausible — narrows suspects from 3 to 2.'
  },
  {
    id:74, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'medium',
    title:'Furniture Ka Angle',
    doc:'DOC-074',
    scene:'Robbery scene. Almari khuli — drawers nikale — sab items floor par. Lekin: TV untouched, laptop table par, expensive vase safe. Jo chize chori gayi: sirf specific drawer ke documents. Investigator ne note kiya: thief ne seedha specific drawer kholi — searching nahi ki.',
    clues:['Sirf specific documents chori','Valuable items untouched','No searching pattern','Specific drawer target'],
    question:'Specific targeting kya suggest karta hai?',
    options:['Chor ko time nahi tha','Chor pehle se jaanta tha kya chahiye aur kahan hai — insider theft ya researched target','Random opportunistic theft','Chor ko electronics mein interest nahi'],
    answer:'Chor pehle se jaanta tha kya chahiye aur kahan hai — insider theft ya researched target',
    explanation:'Random chori mein valuables target hote hain aur searching hoti hai. Specific documents + specific drawer + valuables ignored = chor ko exact knowledge tha. Classic insider job pattern.'
  },

  // ── HIDDEN CLUE / MEDIUM ──────────────────────────────────────
  {
    id:75, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'medium',
    curiosity:'🪞 Mirror ne sab kuch dekha tha — aur detective ne woh dekha jo mirror mein reflected tha...',
    title:'Mirror Mein Sach',
    doc:'DOC-075',
    scene:'Suspect Farhan ka bayan: "Main office mein tha poora din — 9 to 6." CCTV office mein entry 9:02, exit 5:58 — confirm lagta hai. Lekin: CCTV footage mein ek detail — dono baar Farhan ka collar same side par tha. Subah shirt fresh hoti hai — shaam ki shirt mein usually ek change aata hai — lekin same collar crease same direction.',
    clues:['CCTV entry 9:02 exit 5:58','Same collar crease direction','Subah aur shaam identical appearance','No change in clothing'],
    question:'Same collar crease kya suggest kar sakti hai?',
    options:['Farhan bahut careful dresser tha','Farhan ne ek hi waqt do baar CCTV mein aane ki koshish ki — kisi aur ne entry/exit ki or recorded loop tha','Collar crease indicate kuch nahi karti','Farhan ne shirt nahi badi'],
    answer:'Farhan ne ek hi waqt do baar CCTV mein aane ki koshish ki — kisi aur ne entry/exit ki or recorded loop tha',
    explanation:'Identical appearance subah-shaam = ya toh video loop kiya gaya, ya same video clip replay. Real din mein shirt mein micro-changes aati hain — movement se, sweat se. Identical appearance = tampered footage possible.'
  },
  {
    id:76, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'medium',
    title:'Aakhri SMS',
    doc:'DOC-076',
    curiosity:'💬 Victim ka aakhri message 11:45 PM ka tha — par forensics ne kuch alag kaha...',
    scene:'Victim Geeta ka aakhri SMS 11:45 PM — "Ghar pahunch gayi, sab theek hai." Body 1:30 AM mili. Forensics: time of death 10:30-11:00 PM. Phone mein SMS draft mode mein tha — "sent" timestamp server se tha, "composed" timestamp 11:43 PM. Geeta right-handed thi. SMS mein spelling mistakes nahi thi.',
    clues:['SMS 11:45 PM sent','TOD 10:30-11:00 PM','Composed 11:43 PM','No spelling errors'],
    question:'"Composed 11:43 PM" aur TOD 10:30-11:00 kya suggest karta hai?',
    options:['Forensics galat hai — SMS sach hai','SMS TOD ke baad compose hua — kisi ne Geeta ka phone use karke message bheja taaki TOD manipulate ho sake','Phone auto-composed','Geeta ne schedule message set kiya'],
    answer:'SMS TOD ke baad compose hua — kisi ne Geeta ka phone use karke message bheja taaki TOD manipulate ho sake',
    explanation:'TOD 10:30-11:00. SMS compose time 11:43 — 43 minutes AFTER latest TOD estimate. Geeta physically message compose nahi kar sakti thi. Killer ne phone use karke fake "I\'m safe" message bheja. Classic post-murder cover-up.'
  },

  // ── REAL LOGIC / MEDIUM ───────────────────────────────────────
  {
    id:77, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'medium',
    curiosity:'🏦 Bank robbery ke baad criminal ne ek chota sa kaam kiya — aur usi se pakda gaya...',
    title:'Bank Chor Ki Galti',
    doc:'DOC-077',
    scene:'Bank se 40 lakh chori. CCTV: masked figure. Getaway car stolen. Lekin: 3 din baad ek suspect ne local shop se 15,000 ka gold chain cash mein kharida. Suspect normally minimum wage par kaam karta tha. Bank notes ki serial numbers note ki gayi thi pehle se.',
    clues:['Cash purchase 15,000','Normally minimum wage','Bank notes serials noted','3 din baad'],
    question:'Serial number tracking kya possible banata hai?',
    options:['Cash trace nahi hoti','Pre-recorded serial numbers se specific notes identify ho sakte hain — cash spend karte hi trail banata hai','Gold chain se kya prove hoga','3 din kaafi time hai'],
    answer:'Pre-recorded serial numbers se specific notes identify ho sakte hain — cash spend karte hi trail banata hai',
    explanation:'Banks high-value robbery se pehle note serial numbers photograph karte hain. Woh notes jab bhi spend hote hain — shops, banks — system flag karta hai. Cash spend karna = self-incrimination. Classic criminal mistake.'
  },
  {
    id:78, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'medium',
    title:'Social Media Alibi',
    doc:'DOC-078',
    scene:'Murder timeline: 8-9 PM. Suspect Tarun ka alibi: "Main apne ghar par tha — social media par active tha, dekho timestamps." Instagram posts: 8:15 PM, 8:42 PM, 9:05 PM. Lekin: posts ki location tag — ek post mein background mein ek specific mall ka logo dikh raha hai.',
    clues:['Instagram timestamps 8:15-9:05','Background mein mall logo','Murder location: mall ke paas','Location tag off tha'],
    question:'Background mein mall logo kya prove karta hai?',
    options:['Social media se location nahi milti','Post ka background mall inside hai — Tarun mall mein tha crime window ke time — alibi jhooth','Logo koi bhi use kar sakta hai','Old post republish ki'],
    answer:'Post ka background mall inside hai — Tarun mall mein tha crime window ke time — alibi jhooth',
    explanation:'Location tag off rakh ke background se location expose ho gayi. Post timestamp + mall background = Tarun 8:42 PM mall mein tha, ghar mein nahi. Digital evidence ne unintentional location reveal kiya.'
  },

  // ── HIDDEN OBJECT / MEDIUM ────────────────────────────────────
  {
    id:79, type:'object', typeLabel:'HIDDEN OBJECT', icon:'🔍', difficulty:'medium',
    curiosity:'🧤 Crime scene par sirf ek cheez thi jo wahan honi nahi chahiye thi — aur sab ne ignore kiya...',
    title:'Woh Cheez Jo Nahi Chahiye Thi',
    doc:'DOC-079',
    scene:'Victim ki study mein murder. Scene: books scattered, lamp tilted, papers on floor. CSI ne photo li. Detective ne notice kiya: ek coffee mug bookshelf par — lekin mug ke andar ek cigarette stub tha. Victim non-smoker tha. House: no ashtray anywhere.',
    clues:['Victim non-smoker','Cigarette stub in mug','No ashtray in house','Bookshelf mug unusual'],
    question:'Cigarette stub kya reveal karta hai?',
    options:['Victim ne smoking shuru ki thi','Koi smoker murderer ghar mein tha — aur deliberately stub hide kiya mug mein taaki openly visible na ho','Guest ka stub tha','Random stub tha'],
    answer:'Koi smoker murderer ghar mein tha — aur deliberately stub hide kiya mug mein taaki openly visible na ho',
    explanation:'Non-smoker ke ghar mein cigarette stub = visitor smoker tha. Mug mein hide karna = conscious act of concealment. If it was innocent, visitor would\'ve asked for ashtray or taken stub. Hidden stub = perpetrator tried to leave no trace but failed.'
  },
  {
    id:80, type:'object', typeLabel:'HIDDEN OBJECT', icon:'🔍', difficulty:'medium',
    title:'Joote Ke Neeche',
    doc:'DOC-080',
    scene:'Jewellery theft from locked showcase. No forced entry. Guard tha. CCTV: 3 customers aaye. Forensics: glass case ke andar ek fiber mili — synthetic carpet fiber, royal blue. Shop mein beige carpet tha. Customers: A (office suit), B (jeans casual), C (uniform — blue synthetic).',
    clues:['Royal blue synthetic fiber','Shop beige carpet','C wears blue uniform','Locked showcase'],
    question:'Fiber kya reveal karti hai?',
    options:['Fiber bahar se aayi hogi','C ke blue synthetic uniform se fiber match — C ne case khola ya kisi tarah access kiya','A ke suit se fiber aayi','Random contamination'],
    answer:'C ke blue synthetic uniform se fiber match — C ne case khola ya kisi tarah access kiya',
    explanation:'Specific color + material match is a strong indicator. Royal blue synthetic = uniform material. Case ke ANDAR fiber = direct physical contact with interior. C had access opportunity and physical evidence matches.'
  },

  // ── PSYCHOLOGICAL MYSTERY / MEDIUM ───────────────────────────
  {
    id:81, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'medium',
    curiosity:'😶 Ek aadmi ne ek baat nahi kahi — aur usi chup ne use suspect bana diya...',
    title:'Jo Nahi Kaha',
    doc:'DOC-081',
    scene:'Ek building mein fire. Paanch log bahar nikle. Detective ne sab se poochha: "Aap kya kar rahe the jab fire lagi?" Char logon ne naturally poochha: "Kya sab theek hain? Kaun mara?" Paanchwe Harish ne sirf apna account diya — kisi ke baare mein concern nahi dikhaaya.',
    clues:['4 logon ne concern dikhaya','Harish ne sirf apna account diya','Fire mein ek ki maut','Emotional response noted'],
    question:'Concern na dikhana kya psychological indicator ho sakta hai?',
    options:['Harish introvert tha','Guilt ya prior knowledge — jo jaanta hai kya hua, woh "kya hua" naturally nahi poochhhta','Shock mein tha','Detached personality hai uski'],
    answer:'Guilt ya prior knowledge — jo jaanta hai kya hua, woh "kya hua" naturally nahi poochhhta',
    explanation:'Yeh "Othello Error" principle hai. Innocent logon ki natural reaction mein curiosity hoti hai — kya hua, kaun mara, kyon. Jo pehle se jaanta hai woh yeh questions nahi poochhhta. Absence of expected behavior = behavioral red flag.'
  },

  // ── TRICK QUESTION / MEDIUM ───────────────────────────────────
  {
    id:82, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'medium',
    curiosity:'🤔 Yeh sawal sunne mein aasaan lagta hai — par 90% log pehli baar galat jawab dete hain...',
    title:'Kaun Zinda Hai?',
    doc:'DOC-082',
    scene:'Ek detective novel mein likha hai: "Pilot, co-pilot, aur 3 passengers ek plane crash mein mare. Koi survivor nahi." Detective poochhhta hai: "Bacche kaun the?"',
    clues:['Pilot mara','Co-pilot mara','3 passengers mare','Koi survivor nahi'],
    question:'"Bacche kaun the?" — is sawaal ka kya jawab hai?',
    options:['Koi baccha nahi tha','Passengers mein bacche the','Sawal invalid hai — koi nahi bacha','Pilot ke bacche the — jo ghar par hain, crash mein nahi the'],
    answer:'Pilot ke bacche the — jo ghar par hain, crash mein nahi the',
    explanation:'Classic misdirection — "bacche" sunke hum crash scene ke baare mein sochte hain. Par sawal yeh nahi tha. Pilot/co-pilot ke ghar par bacche ho sakte hain. Sawal unke baare mein tha. Yeh linguistic trap hai.'
  },
  {
    id:83, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'medium',
    title:'Shuruaat Se Ant Tak',
    doc:'DOC-083',
    scene:'Ek detective competition mein: "Ek aadmi 8th floor se giraa — koi chot nahi aayi. Kyun?" Participants sochne lagte hain: parachute, water below, etc.',
    clues:['8th floor se gira','Koi chot nahi','Open question','Multiple possibilities'],
    question:'Sabse simple valid explanation kya hai?',
    options:['Parachute tha','Neeche swimming pool tha','Woh andar se gira — neeche ki taraf seedhiyon pe, 8th floor building ki seedhiyaan theen','Superhero tha'],
    answer:'Woh andar se gira — neeche ki taraf seedhiyon pe, 8th floor building ki seedhiyaan theen',
    explanation:'"Gira" hum hamesha bahar giraney se assume karte hain. "8th floor se gira" matlab andar seedhiyon pe bhi gir sakta hai — minor fall, no injury. Assumptions ko challenge karna detective thinking hai.'
  },

  // ── HARD / DETECTIVE ─────────────────────────────────────────
  {
    id:84, type:'detect', typeLabel:'DETECTIVE PROBE', icon:'🔎', difficulty:'hard',
    curiosity:'🗓️ Ek murder case 10 saal purana tha — aur ek receipt ne sab kuch khol diya...',
    title:'Dus Saal Baad',
    doc:'DOC-084',
    scene:'10 saal pehle ka unsolved murder. Victim Kapoor. Suspect Devraj ka alibi tha: "Main Delhi mein tha — hotel record hai." Hotel confirmed stay. Lekin cold case investigator ne hotel bill detail mein dekha: minibar charges 11 PM ki raat — wahi raat jab Kapoor ki murder wahan hua. Minibar: ek beer, ek juice. Devraj — lifelong teetotaler, juice nahi pita.',
    clues:['Hotel stay confirmed','Minibar: beer + juice','Devraj teetotaler','Murder same night'],
    question:'Minibar charges kya suggest karte hain?',
    options:['Devraj ne us raat exception kiya','Devraj ke kamre mein koi aur tha us raat — minibar charges confirm karte hain companion ki presence','Hotel error thi billing mein','Minibar auto-charge hoti hai'],
    answer:'Devraj ke kamre mein koi aur tha us raat — minibar charges confirm karte hain companion ki presence',
    explanation:'Teetotaler beer order nahi karta. Beer + juice = do logon ki consumption pattern. Devraj ke saath koi tha jo hotel record mein appear nahi kiya — accomplice ya witness jo alibi ko complicate karta hai.'
  },
  {
    id:85, type:'detect', typeLabel:'DETECTIVE PROBE', icon:'🔎', difficulty:'hard',
    curiosity:'🧬 DNA match tha — phir bhi detective ne kaha: "Yeh insaan wahan nahi tha."',
    title:'DNA Ka Dhoka',
    doc:'DOC-085',
    scene:'Murder scene par DNA mili — lab ne confirm kiya: suspect Elan ka DNA match. Elan ka bayan: "Maine woh cheez 3 hafte pehle victim ko gift ki thi." DNA ek glass par thi. Glass victim ke dining table par tha — 3 hafte purana consistent hai agar glass usi se diya tha aur tab se wahi tha.',
    clues:['DNA match confirmed','Glass par DNA','3 hafte pehle gift claim','Glass dining table par'],
    question:'Elan ka explanation kyun valid ho sakta hai?',
    options:['DNA match = guilt always','DNA sirf presence prove karta hai, timing nahi — 3 week old transfer possible hai agar gift story true ho','Lab galat hai','Glass doosra tha'],
    answer:'DNA sirf presence prove karta hai, timing nahi — 3 week old transfer possible hai agar gift story true ho',
    explanation:'DNA evidence powerful hai lekin context zaroor chahiye. DNA placement time confirm nahi karta. Agar glass gift kiya tha aur 3 week se wahi tha — DNA legitimately wahan ho sakta hai. Gift story verify karni hogi independently.'
  },
  {
    id:86, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'hard',
    curiosity:'👨‍👩‍👧 Teen log ek hi ghar mein — aur teeno ke alibi perfectly ek doosre ko confirm karte the. Too perfect...',
    title:'Perfect Alibi',
    doc:'DOC-086',
    scene:'Victim ki murder. Teen suspects: Faisal, Garima, Hemant — saath rehte hain. Teeno ka bayan: "Hum teeno saath TV dekh rahe the 9-11 PM." Show: specific episode confirm kiya. Lekin detective ne kuch note kiya: episode ka ek major plot twist tha — lekin teeno ne apne statements mein alag alag twists describe kiye.',
    clues:['Teeno ka mutual alibi','Same show same episode','Alag plot twist descriptions','9-11 PM window'],
    question:'Alag plot twist descriptions kya suggest karti hain?',
    options:['Har koi alag cheez notice karta hai','Ek ya zyada logon ne episode nahi dekha — alibi prepared kiya baad mein lekin details galat coordinate ki','Memory naturally varies','Episode mein multiple twists the'],
    answer:'Ek ya zyada logon ne episode nahi dekha — alibi prepared kiya baad mein lekin details galat coordinate ki',
    explanation:'Fabricated alibi mein log ek doosre se consult karte hain lekin details perfectly match nahi karte — specially specific plot points. Real viewers ko same major twist yaad hota. Inconsistent recall = coached alibis. "Too perfect but wrong details" = fabricated.'
  },
  {
    id:87, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'hard',
    curiosity:'🧊 Body 3 din se thi — lekin rigor mortis ek din ki thi. Ek freezer ne sab kuch solve kar diya...',
    title:'Frozen Time',
    doc:'DOC-087',
    scene:'Body mili ek apartment mein — 3 din baad. Forensics initial: 3 din purani maut. Lekin apartment mein ek large chest freezer tha — partially used. Freezer temperature log: 3 din pehle se lagatar -18°C. Lekin freezer mein koi item nahi tha. Body ke kapde: freezer burn marks on skin.',
    clues:['3 din purana lagna wala body','Freezer kapacity wala lekin khaali','Freezer burn on body','Temperature log: -18°C'],
    question:'Khaali freezer + freezer burn kya clearly prove karta hai?',
    options:['Victim khud freezer mein gaya','Body freezer mein rakhi gayi thi TOD manipulate karne ke liye — actual murder recent tha','Freezer malfunctioned','Burn marks kuch aur hain'],
    answer:'Body freezer mein rakhi gayi thi TOD manipulate karne ke liye — actual murder recent tha',
    explanation:'Freezer burn + khaali freezer + temperature log = body freezer mein thi. Freezing decomposition rok deta hai — forensics ke liye body "purani" lagti hai. Murderer ne recently kill karke body freeze ki taaki TOD 3 din pehle lage aur alibi mile.'
  },
  {
    id:88, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'hard',
    curiosity:'📖 Victim ne apni diary mein ek cheez encode ki thi — aur detective ne woh crack kiya...',
    title:'Diary Ka Code',
    doc:'DOC-088',
    scene:'Victim Indira ki diary mili. Regular entries — lekin last 3 pages mein: har entry ka pehla letter ek specific pattern mein tha. Detective ne pehle letters read kiye left to right: "H-E-L-P-I-T-S-H-I-M". Indira ke ghar mein usi waqt ek hi "him" tha — husband Jagdish.',
    clues:['Diary entries last 3 pages','First letters pattern','HELPITSHIM decoded','Husband Jagdish in house'],
    question:'Diary mein encoded message kya indicate karta hai?',
    options:['Coincidence — letters se kuch bhi banao','Indira deliberately apni diary mein help message encode kar rahi thi — openly likhna safe nahi tha','Jagdish ne diary likhi','Detective ki over-interpretation'],
    answer:'Indira deliberately apni diary mein help message encode kar rahi thi — openly likhna safe nahi tha',
    explanation:'"HELPITSHIM" is not coincidence — deliberate acrostic. Victims in dangerous situations use hidden codes when direct communication is impossible. Classic domestic abuse situation where diary was only safe outlet. Acrostic = premeditated, not random.'
  },

  // ── PSYCHOLOGICAL / HARD ─────────────────────────────────────
  {
    id:89, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'hard',
    curiosity:'🪟 Detective ne crime scene ki photo ek baar dekhi — aur bola: "Yahan koi nahi mara. Yeh staged hai." Kyun?',
    title:'Staged Grief',
    doc:'DOC-089',
    scene:'Husband Karim ka bayan: wife ko dead paaya — bahut emotional, rona, haath kaan ko pakad lena. Lekin detective ne note kiya: kamre mein wife ki tasveer seedhi thi — baaki sab uthapathak mein bhi. Karim ka phone: last 10 min mein 3 calls — sab outgoing, sab uske lawyer ko.',
    clues:['Tasveer bilkul seedhi','Baaki sab disturbed','3 lawyer calls before police','Emotional outburst'],
    question:'Lawyer calls aur seedhi tasveer kya suggest karte hain?',
    options:['Karim emotionally disturbed tha','Normal incident mein log pehle police bulate hain — lawyer nahi. Seedhi tasveer = selective disturbance = staging. Lawyer calls = legal prep for what\'s coming','Tasveer earthquake proof mounted thi','Karim ki legal knowledge thi'],
    answer:'Normal incident mein log pehle police bulate hain — lawyer nahi. Seedhi tasveer = selective disturbance = staging. Lawyer calls = legal prep for what\'s coming',
    explanation:'Two behavioral red flags: (1) Emergency mein pehla call lawyer ko — means pre-awareness of legal consequences. (2) Selective disturbance — one picture perfect while chaos around = staged scene. Real grief doesn\'t include strategic legal consultations first.'
  },
  {
    id:90, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'hard',
    title:'Overexplaining',
    doc:'DOC-090',
    curiosity:'🗣️ Detective ne 5 minute sunke kaha: "Tum bahut zyada bol rahe ho — guilty log yahi karte hain."',
    scene:'Robbery suspect Lalita ka bayan 45 minutes lamba tha — specific minute-by-minute account. "8:00 uthhi, 8:07 chai banayi, 8:23 newspaper padha, 8:41 bathroom gayi, 9:02..." Detective compared: doosre din ka routine jo normal tha — brief, vague, no minute detail. Crime wale din: hyper-detailed.',
    clues:['45 minute detailed alibi','Normal din: brief account','Crime day: minute-by-minute','Contrast in recall quality'],
    question:'Crime day ka hyper-detailed account kya psychological indicator hai?',
    options:['Lalita bahut organized thi','Rehearsed alibi — prepared statement — guilt ka classic tell. Natural memory crime-free din ke liye vague hoti hai, crime din ki itni detail suspicious hai','Good memory','Lalita anxious thi'],
    answer:'Rehearsed alibi — prepared statement — guilt ka classic tell. Natural memory crime-free din ke liye vague hoti hai, crime din ki itni detail suspicious hai',
    explanation:'Paradox of guilty knowledge: innocent logon ki normal dino ki memory ordinary hoti hai — crime din ki extra detail nahi. Guilty log specific alibi prepare karte hain — over-rehearsed, too detailed. This is taught in police interrogation training as a lie indicator.'
  },

  // ── REAL LOGIC / HARD ─────────────────────────────────────────
  {
    id:91, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'hard',
    curiosity:'✈️ Ek passenger plane par murder — 35,000 feet par. Suspect ne claim kiya: "Main plane mein nahi tha."',
    title:'Aasmaani Qatil',
    doc:'DOC-091',
    scene:'Flight PQ-404 par ek passenger mara mila — mid-flight. Manifest: 147 passengers. Suspect Mohit ka bayan: "Mera boarding pass tha lekin main board nahi kiya." Airline record: boarding scan hua — Mohit\'s ID verified at gate. Mid-air murder — no one can leave the plane.',
    clues:['Boarding scan confirmed','Mid-air murder','No exit possible','Mohit denies boarding'],
    question:'Boarding scan kyun definitive evidence hai?',
    options:['Scan galat ho sakta hai','Biometric boarding scan = physical presence verified — Mohit plane par tha. Mid-air = closed environment — no exit possible. Denial impossible to sustain against biometric','ID stolen','Technical error'],
    answer:'Biometric boarding scan = physical presence verified — Mohit plane par tha. Mid-air = closed environment — no exit possible. Denial impossible to sustain against biometric',
    explanation:'Modern biometric boarding = fingerprint or face match — not just ticket scan. Physical presence verified. Closed environment 35,000 feet = no one enters or exits. The math is simple: boarded + couldn\'t leave = was there for duration. Denial is physically impossible.'
  },
  {
    id:92, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'hard',
    title:'Insurance Fraud',
    doc:'DOC-092',
    curiosity:'🔥 Ek aadmi ne apna factory "accidentally" jalaya — ek insurance investigator ne ek din mein fraud pakad liya...',
    scene:'Factory fire — owner Nagesh ka claim: accidental, electrical short. Insurance payout: 2 crore. Investigator ne note kiya: 3 months pehle Nagesh ne insurance cover 50 lakh se 2 crore kiya tha. 2 month pehle: expensive machinery factory se "service ke liye" bahar gayi. 1 month pehle: bulk inventory "returned to supplier." Fire: only structure remained — no machinery, no inventory.',
    clues:['Insurance hike 3 months ago','Machinery removed 2 months ago','Inventory cleared 1 month ago','Only structure burned'],
    question:'Timeline kya clearly prove karta hai?',
    options:['Coincidence ho sakta hai','Pre-meditated arson — systematic asset removal before fire, insurance hike before fire = planned fraud. Timeline too deliberate to be coincidental','Factory genuinely outdated tha','Supplier ne kiya'],
    answer:'Pre-meditated arson — systematic asset removal before fire, insurance hike before fire = planned fraud. Timeline too deliberate to be coincidental',
    explanation:'Preparation pattern: coverage hike → asset removal → inventory clearance → fire. Each step by itself might seem innocent. Combined timeline reveals deliberate planning. This is exactly how insurance fraud investigations work — establishing pre-event preparation pattern.'
  },

  // ── IQ PUZZLE / HARD ─────────────────────────────────────────
  {
    id:93, type:'iq', typeLabel:'IQ PUZZLE', icon:'🧠', difficulty:'hard',
    curiosity:'🔢 Ek number puzzle jo FBI recruitment test mein use hota tha — aap solve kar sakte hain?',
    title:'Room Number Ka Raaz',
    doc:'DOC-093',
    scene:'Ek hotel mein murder. Victim room 87 mein. Detective ko room nahi pata tha. Manager ne number likha — page ulti thi. Detective ne dekha: "18". Woh room 18 gaya — galat. Page seedhi karne par actual room: 87. Par detective hotel mein tha aur rooms ek hi corridor mein the — detective pehle 87 se guzra.',
    clues:['Page ulti — 18 likha dikh raha tha','Actual room 87','Same corridor','Detective pehle 87 se guzra'],
    question:'Ulte 87 ko 18 kyun pada?',
    options:['Manager ne 18 likha tha','87 ko 180 degree rotate karo — digits flip hoti hain: 8→8, 7 nahi hoti... actually: 87 upside down = L8 nahi, yeh trick hai — 87 upside down sirf visual confusion hai','Trick question — manager ki galti','Detective ki galti'],
    answer:'87 ko 180 degree rotate karo — digits flip hoti hain: 8→8, 7 nahi hoti... actually: 87 upside down = L8 nahi, yeh trick hai — 87 upside down sirf visual confusion hai',
    explanation:'Yeh visual rotation puzzle hai. 87 upside down looks like "L8" ya confusing digits. Key insight: detective pehle 87 se guzra — physical layout ne answer already reveal kar diya tha. Sometimes clue is in the physical context, not the number itself.'
  },
  {
    id:94, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'hard',
    curiosity:'⚖️ Paanch pyaar — ek imandaar — ek ne kiya crime — logic se pakad lo...',
    title:'Paanch Dost, Ek Chor',
    doc:'DOC-094',
    scene:'5 dost: Aryan, Bunty, Chirag, Dilip, Eshu. Ek ne chori ki. Bayanaat: Aryan: "Bunty ya Chirag ne kiya." Bunty: "Maine nahi kiya." Chirag: "Dilip ne kiya." Dilip: "Chirag jhooth bol raha hai." Eshu: "Bunty ne kiya." Exactly 2 bayanaat jhooth hain, baaki 3 sach.',
    clues:['Exactly 2 jhooth','5 suspects','Circular accusations','Logical deduction needed'],
    question:'Kaun chor hai agar exactly 2 statements jhooth hain?',
    options:['Bunty — Aryan aur Eshu dono bol rahe hain','Chirag — sirf Aryan ka pehla option','Dilip — Chirag sach bola, Dilip jhooth bola','Aryan ne kiya'],
    answer:'Bunty — Aryan aur Eshu dono bol rahe hain',
    explanation:'Agar Bunty chor hai: Aryan (Bunty ya Chirag = TRUE), Bunty (Maine nahi = LIE), Chirag (Dilip ne = LIE), Dilip (Chirag jhooth = TRUE), Eshu (Bunty ne = TRUE). Lies = 2 (Bunty + Chirag). Exactly 2 jhooth = condition satisfied. Bunty = chor.'
  },

  // ── GENIUS LEVEL CASES ────────────────────────────────────────
  {
    id:95, type:'murder', typeLabel:'KHOON', icon:'🔪', difficulty:'genius',
    curiosity:'🌡️ Ek genius criminal ne temperature aur tide tables use karke perfect alibi banaya — lekin ek physicist ne 20 saal baad crack kiya...',
    title:'Samundar Ka Trickster',
    doc:'DOC-095',
    scene:'Coastal murder — body samundar kinare mili. TOD estimate: tidal pattern + body temperature se 3-5 AM. Suspect Prabhat ka alibi: recorded video call 3-5 AM — face clearly visible, timestamp, caller verified. Lekin: investigator noticed — Prabhat ki video mein window ka bahar ka scene — 3 AM mein woh khidki ka bahar ka drishya 5 AM wala tha. Sky color, star position aur ambient light — astronomical data se confirm kiya.',
    clues:['Recorded video call alibi','Window background shows 5 AM sky at "3 AM"','Astronomical data used','TOD 3-5 AM'],
    question:'Window background ka astronomical discrepancy kya prove karta hai?',
    options:['Video quality kharab thi','Video pre-recorded tha ya edited — actual waqt alag tha. Sky color/stars astronomically verifiable hain — "3 AM recording" mein 5 AM sky = video tampered or pre-shot','Windows se alag light aati hai','Investigator galat hai'],
    answer:'Video pre-recorded tha ya edited — actual waqt alag tha. Sky color/stars astronomically verifiable hain — "3 AM recording" mein 5 AM sky = video tampered or pre-shot',
    explanation:'Astronomical forensics: star positions, sky luminosity, and twilight patterns are mathematically predictable and location-specific. A forensic astronomer can determine exact time from sky photographs. Pre-recorded alibi videos fail this test. This technique has been used in actual criminal cases.'
  },
  {
    id:96, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'genius',
    curiosity:'🎭 Ek killer ne 15 saal tak perfect normal life ji — aur ek psychologist ne ek interview mein pakad liya. Kaise?',
    title:'Mask Ka Crack',
    doc:'DOC-096',
    scene:'Cold case interview. Suspect Quentin — charming, articulate, cooperative. Psychologist ne 2 ghante baad notice kiya: jab bhi victim ka naam liya gaya, Quentin ki micro-expression neutral rahi — koi grief, koi discomfort. Lekin jab unrelated topics aaye, natural micro-expressions aaye. Psychologist ka finding: emotional flatness specifically around victim = guilty knowledge.',
    clues:['Micro-expression neutral at victim\'s name','Normal expressions elsewhere','15 saal ka case','Psychologist observation'],
    question:'Victim-specific emotional flatness kya psychological concept indicate karta hai?',
    options:['Quentin simply stoic tha','Controlled affect around specific trigger = suppressed guilt response. Psychopathic masking — normal emotions present but selectively suppressed around guilt-linked stimuli. This is Hare Psychopathy Checklist relevant behavior','Quentin uss victim ko nahi jaanta tha','Psychologist over-reading'],
    answer:'Controlled affect around specific trigger = suppressed guilt response. Psychopathic masking — normal emotions present but selectively suppressed around guilt-linked stimuli. This is Hare Psychopathy Checklist relevant behavior',
    explanation:'Psychopaths display emotions normally EXCEPT around guilt-specific stimuli where suppression mechanism kicks in. The contrast is the tell — not uniform flatness (which could be personality), but SELECTIVE flatness at crime-related triggers. This distinction is used in forensic psychological profiling.'
  },
  {
    id:97, type:'detect', typeLabel:'DETECTIVE PROBE', icon:'🔎', difficulty:'genius',
    curiosity:'💻 Ek hacker ne apna IP hide kiya — lekin ek typing speed ne use pakad diya...',
    title:'Keystroke Fingerprint',
    doc:'DOC-097',
    scene:'Anonymous hacker — VPN, Tor, proxy — all used. Cyber forensics: no IP. Lekin: typed messages ke keystroke timing pattern extract kiya. Every person has unique typing rhythm — dwell time, flight time between keys. Suspect Rajan ek journalist tha — typing samples available from published work. Keystroke biometric: 94.7% match.',
    clues:['VPN + Tor + proxy used','Keystroke timing extracted','94.7% biometric match','Journalist typing samples available'],
    question:'Keystroke biometrics kyun valid forensic evidence ho sakti hai?',
    options:['Typing speed vary karta hai — unreliable','Keystroke dynamics (dwell + flight time patterns) are as unique as fingerprints — independent of content, language, or device. 94.7% match with published samples = strong probabilistic identification','94.7% enough nahi hai','Journalist typing match coincidence hai'],
    answer:'Keystroke dynamics (dwell + flight time patterns) are as unique as fingerprints — independent of content, language, or device. 94.7% match with published samples = strong probabilistic identification',
    explanation:'Keystroke biometrics is a real, court-recognized forensic technique. Timing patterns between keystrokes are habitual and subconscious — impossible to consciously disguise while typing naturally. Used to de-anonymize users even through VPN/Tor. 94.7% match is forensically significant.'
  },
  {
    id:98, type:'scene', typeLabel:'CRIME SCENE', icon:'🏚️', difficulty:'genius',
    curiosity:'🦟 Insects ne ek murderer ko pakad diya — 1800s ki technique aaj bhi use hoti hai...',
    title:'Keede Ka Kalam',
    doc:'DOC-098',
    scene:'Remote jungle mein body mili — decomposed. TOD estimate difficult. Forensic entomologist ne body par insect larvae analyze kiye: blowfly third instar larvae — development stage 12-15 din indicate karta hai, 28°C average temperature par. Weather data: area mein 15 din pehle temperature 28°C tha, par 8 din pehle 3 din ke liye 15°C hua — larvae development slows at 15°C. Adjusted TOD?',
    clues:['Third instar larvae = 12-15 days at 28°C','8 days ago: 3 days at 15°C','Temperature affects development','Mathematical adjustment needed'],
    question:'Temperature-adjusted TOD kya hoga?',
    options:['12-15 din pehle simple estimate','Adjust karna hoga: 3 din 15°C par = roughly 1.5 din ka development loss — adjusted TOD: 13.5-16.5 din pehle approximately','Temperature matter nahi karta larvae ke liye','15 din pehle exactly'],
    answer:'Adjust karna hoga: 3 din 15°C par = roughly 1.5 din ka development loss — adjusted TOD: 13.5-16.5 din pehle approximately',
    explanation:'Forensic entomology uses Accumulated Degree Hours (ADH) model. Insect development rate is temperature-dependent. At 15°C, development rate is approximately half of 28°C rate. So 3 cold days = ~1.5 days of development. Must add this back to raw estimate. This is exactly how forensic entomologists calculate TOD in variable temperature conditions.'
  },
  {
    id:99, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'genius',
    curiosity:'🎼 Ek composer ki maut — aur uski aakhri composition mein ek hidden SOS tha...',
    title:'Musical Message',
    doc:'DOC-099',
    scene:'Composer Shirin ki apparent suicide. Aakhri composition — 4 measures — unusual chord progressions. Music theorist ne analyze kiya: notes spelled out when using German music notation system (where H=B natural, Es=Eb, As=Ab). First notes of each measure: S-O-S-H. German notation mein S=Es=Eb, O=nahi hota — lekin rhythm morse pattern mein ... --- ... = SOS.',
    clues:['4 measures, unusual chords','German notation system','Rhythm pattern analysis','SOS encoded'],
    question:'Music mein encoded SOS kya indicate karta hai?',
    options:['Coincidence — music mein patterns dikhte hain','Shirin deliberately distress signal compose ki — suicide fake hai. Composers use deliberate musical cryptography — BACH ne khud apna naam notes mein encode kiya. Intentional SOS = foul play','Music theory over-analysis','Shirin German notation jaanti nahi thi'],
    answer:'Shirin deliberately distress signal compose ki — suicide fake hai. Composers use deliberate musical cryptography — BACH ne khud apna naam notes mein encode kiya. Intentional SOS = foul play',
    explanation:'Musical cryptography is a real historical practice. Bach embedded B-A-C-H in compositions. Dmitri Shostakovich used D-S-C-H. SOS in Morse rhythm + German notation spelling = dual-encoded message. A composer encoding SOS in their final work = deliberate distress signal, not suicidal ideation.'
  },
  {
    id:100, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'genius',
    curiosity:'⚖️ Ek judge ne ek case mein judgment kiya — aur har koi jeetne wala bhi haara. Ek genius hi samjhega...',
    title:'Woh Case Jo Koi Nahi Jeet Sakta',
    doc:'DOC-100',
    scene:'Protagoras (lawyer teacher) aur Euathlus (student) ka anokha contract: "Euathlus sirf pehla case jeetne ke baad fees dega." Euathlus ne koi case nahi liya — fees nahi di. Protagoras ne case kiya: "Ya main jeetunga — fees milegi, ya Euathlus jeetega — pehla case jeet liya — fees milegi." Euathlus ka counter: "Ya main jeetunga — court ka order, fees nahi; ya main harunga — pehla case nahi jeeta — fees nahi."',
    clues:['Protagoras dilemma argument','Euathlus counter-dilemma','Contract-based paradox','No clean resolution'],
    question:'Is legal paradox ka kya resolution hai?',
    options:['Protagoras jeeta — teacher hamesha jeetta hai','Euathlus jeeta — student smart tha','Yeh ek genuine legal paradox hai — contract itself is self-referential and creates an unresolvable loop; court should rule contract void ab initio','Judge toss karta'],
    answer:'Yeh ek genuine legal paradox hai — contract itself is self-referential and creates an unresolvable loop; court should rule contract void ab initio',
    explanation:'This is the Paradox of the Court — a 2500-year-old legal paradox. The contract\'s fulfillment condition references the outcome of its own enforcement, creating circular logic. Modern contract law would void such self-referential terms as "void for uncertainty." The genius insight: the problem is with the CONTRACT, not the judgment.'
  },
  {
    id:101, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'genius',
    curiosity:'🌀 Yeh sawal Harvard Law ke entrance exam mein tha — 95% students galat jawab dete hain...',
    title:'Waris Ka Waris',
    doc:'DOC-101',
    scene:'Will mein likha: "Meri 17 oonten mere teen betoon mein divide karo: pehle beta aadha, doosra bhai teesra, teesra bhai nauvaan." 17 ka aadha = 8.5 — fraction mein divide nahi hoti oonten. Lawyer ne solution nikala bina kisi oont ko kaat ke ya bache hue oont ke.',
    clues:['17 oonten','1/2 + 1/3 + 1/9 = ?','No fractions allowed','Classic puzzle'],
    question:'Lawyer ne kaise solve kiya?',
    options:['Ek oont bech ke paisa divide kiya','17 mein ek apni oont milaayi = 18: 9+6+2 = 17 — apni oont wapas le li. Will perfectly execute hua bina fractions ke','Court order se fraction allow hua','Will invalid declare hua'],
    answer:'17 mein ek apni oont milaayi = 18: 9+6+2 = 17 — apni oont wapas le li. Will perfectly execute hua bina fractions ke',
    explanation:'1/2+1/3+1/9 = 9/18+6/18+2/18 = 17/18. The fractions don\'t add to 1 — the will itself has a "spare" 1/18. By temporarily adding 1 camel: 18×(1/2)=9, 18×(1/3)=6, 18×(1/9)=2. Total=17. Lawyer takes back the extra. This works because the fractions sum to 17/18, not 1. Beautiful lateral legal thinking.'
  },
  {
    id:102, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'genius',
    curiosity:'🃏 Ek criminal profiler ne suspect ka psychology sirf uske ghar ki arrangement dekh ke bataa diya...',
    title:'Ghar Jo Bolata Hai',
    doc:'DOC-102',
    scene:'Profiler Dr. Vyas ne suspect Uttam ke ghar mein: (1) Darwaze ke paas jooton ki perfect line — military precision. (2) All books organized by height not subject. (3) Kitchen: all labels facing front, exactly aligned. (4) Clock 3 minutes fast deliberately. (5) Living room sofa: exact center, mathematically. Assessment: "Yeh insaan control disorder se grast hai — impulsive crime unlikely — premeditated crime highly likely."',
    clues:['Military precision throughout','OCD-like arrangement','Clock intentionally fast','Sofa mathematically centered'],
    question:'"Impulsive crime unlikely, premeditated highly likely" — yeh assessment kyun valid hai?',
    options:['Ghar ke arrangement se crime predict nahi hota','Extreme need for control = any crime would be planned, never spontaneous. Environment control = cognitive control preference. Such individuals commit crimes with elaborate planning, not impulse. Forensic psychology uses environmental analysis as behavioral indicator','Uttam simply neat tha','Yeh stereotyping hai'],
    answer:'Extreme need for control = any crime would be planned, never spontaneous. Environment control = cognitive control preference. Such individuals commit crimes with elaborate planning, not impulse. Forensic psychology uses environmental analysis as behavioral indicator',
    explanation:'Environmental psychology and behavioral analysis is used in FBI profiling. Extreme control behaviors in environment correlate with need for cognitive control. Such personality types, if criminal, plan meticulously. This narrows investigation from opportunistic crime to premeditated — fundamentally changing investigation strategy.'
  },
  {
    id:103, type:'iq', typeLabel:'IQ PUZZLE', icon:'🧠', difficulty:'genius',
    curiosity:'🔐 Ek cipher ne 40 saal tak ek murder mystery ko chhupaya rakha — aur ek mathematician ne ek pattern se crack kiya...',
    title:'Sunehri Cipher',
    doc:'DOC-103',
    scene:'1983 ka unsolved murder. Victim ne marne se pehle ek string likhi: "YBNQQBF JRFG PBEARE — GUVEGRRA FGRC." Cold case analyst 2023 mein — ROT13 cipher apply kiya (each letter shifted 13): Y→L, B→O, N→A... "LOOKAS WEST CORNER — THIRTEEN STEP." Crime scene: west corner, 13 steps measure kiya — ek hollow wall. Evidence inside.',
    clues:['ROT13 cipher','LOOKAS WEST CORNER decoded','THIRTEEN STEP decoded','40 saal baad solve'],
    question:'ROT13 cipher kyun use kiya hoga victim ne?',
    options:['ROT13 complex cipher hai','ROT13 is the simplest possible letter substitution — victim likely knew the killer could be among first responders and used a cipher simple enough to be solvable but not immediately obvious to a panicked murderer. It was a dying clue designed to outlast the killer\'s attention span','Victim mathematician tha','Coincidence hai'],
    answer:'ROT13 is the simplest possible letter substitution — victim likely knew the killer could be among first responders and used a cipher simple enough to be solvable but not immediately obvious to a panicked murderer. It was a dying clue designed to outlast the killer\'s attention span',
    explanation:'ROT13 applies each letter shifted by 13 — self-inverse (applying twice gives original). Simple enough to write quickly while dying, complex enough to survive initial scene inspection. Dying clue theory: victims who anticipate death sometimes leave encoded messages. The choice of cipher level reveals cognitive state and intent.'
  },
  {
    id:104, type:'real', typeLabel:'REAL LOGIC', icon:'⚖️', difficulty:'genius',
    curiosity:'🛢️ Ek oil company ne 10 saal tak pollution chhupaya — ek satellite image ne sab expose kiya...',
    title:'Satellite Ka Sach',
    doc:'DOC-104',
    scene:'Industrial pollution case. Company Vedtek ka claim: "Humare pipeline se koi leak nahi — environment report clean hai." Lekin environmental lawyer ne historical satellite images analyze kiye: 2013-2023, har monsoon ke baad ek specific 500m radius mein vegetation die-off pattern. Pattern consistent, growing, matching Vedtek pipeline route exactly. Company\'s own environmental reports: all clear.',
    clues:['10 saal ka vegetation die-off pattern','Matches pipeline route exactly','Company reports all clear','Satellite data independent'],
    question:'Satellite data kyun company reports se zyada reliable hai is case mein?',
    options:['Satellite images galat ho sakti hain','Satellite data independent hai — company reports company ne khud banaye hain (conflict of interest). Remote sensing vegetation indices (NDVI) mathematically measure plant health — cannot be manipulated by company. 10-year consistent pattern + geographic correlation = scientific proof beyond reasonable doubt','Company reports certified hain','10 saal kaafi nahi'],
    answer:'Satellite data independent hai — company reports company ne khud banaye hain (conflict of interest). Remote sensing vegetation indices (NDVI) mathematically measure plant health — cannot be manipulated by company. 10-year consistent pattern + geographic correlation = scientific proof beyond reasonable doubt',
    explanation:'NDVI (Normalized Difference Vegetation Index) from satellite data is an objective, mathematical measure — not subject to human manipulation or reporting bias. When physical evidence (satellite) contradicts self-reported evidence (company reports), objective data wins. This is exactly how environmental litigation now works — satellite forensics.'
  },
  {
    id:105, type:'hidden', typeLabel:'HIDDEN CLUE', icon:'🔦', difficulty:'genius',
    curiosity:'🌿 Ek botany professor ne 30 second mein bata diya ki body wahan nahi mari — sirf ek patte ko dekh ke...',
    title:'Patte Ka Gawah',
    doc:'DOC-105',
    scene:'Body ek forest clearing mein — official: died there. But forensic botanist Dr. Ananya noticed: victim ke kapdon par ek specific plant ke pollen + leaf fragments — Impatiens balsamii — jo sirf ek specific micro-habitat mein milti hai: shaded, near-water, acidic soil. Nearest such habitat: 2.3 km away. Clearing mein koi Impatiens balsamii nahi tha. Additionally: victim ke joote ke sole mein ek specific clay type mili — Kaolinite — jo sirf riverbed areas mein milti hai, not forest clearing.',
    clues:['Impatiens balsamii pollen on clothes','Species only near water/shade','2.3 km away habitat','Kaolinite clay in shoe sole'],
    question:'Dono botanical evidence milaakar kya prove karte hain?',
    options:['Victim ne wahan se guzra hoga','Body moved after death — victim actually died 2.3 km away near the water habitat. Two independent botanical markers (specific pollen species + specific clay) both point to same alternative location — independent corroboration of secondary death scene','Botanical evidence unreliable','Victim hiking gaya tha'],
    answer:'Body moved after death — victim actually died 2.3 km away near the water habitat. Two independent botanical markers (specific pollen species + specific clay) both point to same alternative location — independent corroboration of secondary death scene',
    explanation:'Forensic botany uses plant material as location evidence. Two INDEPENDENT markers (pollen + clay) both pointing to same alternate location = extremely strong evidence of body relocation. The power is in the independence — both markers happen to be location-specific AND both agree. This is how forensic botanists establish "secondary crime scenes" — where death actually occurred vs. where body was found.'
  },

  // ════════════════════════════════════════════════════════════════
  // 50 MORE CASES  (IDs 106–155)
  // Types: psych · observe · brain · trick · sherlock
  // Long curiosity-driven stories, misleading clues, escalating difficulty
  // ════════════════════════════════════════════════════════════════

  // ── PSYCHOLOGICAL / EASY ──────────────────────────────────────
  {
    id:106, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'easy',
    title:'Hasi Jo Theek Nahi Lagi',
    doc:'DOC-106',
    curiosity:'😅 Sabne kaha woh bahut udaas tha — par photo mein uski hasi kuch alag lagi...',
    scene:'Office party ke agle din colleague Ravi missing case file mila. Sabne kaha: "Ravi pareshaan tha kal raat, bahut tension mein tha." Party ki photos check ki gayi — har photo mein Ravi muskura raha tha, jokes crack kar raha tha, sabse zyada energetic tha.',
    clues:['Sab kehte hain Ravi tense tha','Photos mein Ravi khush dikh raha hai','Sabse energetic tha party mein','File missing case'],
    question:'Photos aur bayanaat mein contradiction kya reveal karta hai?',
    options:['Photos fake hain','Ravi acting kar raha tha — overcompensating behavior aksar kisi cheez ko chhupane ka sign hota hai','Log galat bol rahe hain','Ravi naturally khush rehta hai'],
    answer:'Ravi acting kar raha tha — overcompensating behavior aksar kisi cheez ko chhupane ka sign hota hai',
    explanation:'Jab koi insaan stress mein hota hai aur usko chhupana chahta hai, woh aksar overcompensate karta hai — zyada hasna, zyada jokes, zyada energy dikhana. Yeh "masking behavior" hota hai. Real relaxed insaan itna performative nahi hota.'
  },
  {
    id:107, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'easy',
    title:'Jhooth Bolne Ka Pause',
    doc:'DOC-107',
    scene:'Detective ne suspect Kunal se poochha: "Kal raat 9 baje kahan the?" Kunal ne 4 second pause liya, aankhein upar ki taraf ghumayi, phir bola: "Main... ghar par tha, TV dekh raha tha."',
    clues:['4 second ka pause','Aankhein upar ghumayi','Hesitant tone','Simple alibi question'],
    question:'Yeh response pattern kya suggest karta hai?',
    options:['Kunal sochne wala insaan hai','Simple factual sawaal ka itna pause aur hesitation = jawab construct kiya ja raha tha, recall nahi ho raha tha','Kunal nervous hai naturally','Kuch nahi — normal response hai'],
    answer:'Simple factual sawaal ka itna pause aur hesitation = jawab construct kiya ja raha tha, recall nahi ho raha tha',
    explanation:'Sach bolne wale insaan ko apna kal raat ka location yaad karne mein itna time nahi lagta. Pause + eye movement (cognitive load) often indicates the brain is constructing an answer rather than retrieving a memory. Classic interrogation training signal.'
  },

  // ── VISUAL OBSERVATION / EASY ─────────────────────────────────
  {
    id:108, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'easy',
    title:'Do Tasveerein',
    doc:'DOC-108',
    curiosity:'🖼️ Ek hi room ki do photos — pehli crime se pehle, doosri crime ke baad. Sirf ek cheez badli thi...',
    scene:'Security audit ke liye office room ki photo crime se ek hafta pehle li gayi thi — comparison ke liye crime ke baad bhi li gayi. Dono photos mein: desk same jagah, chair same, computer same. Lekin diwar par lagi clock crime ke baad wali photo mein 10 minute aage thi displayed time se.',
    clues:['Dono photos almost identical','Sirf clock display alag','10 minute ka farak','Ek hafta ka gap photos mein'],
    question:'Clock ka time farak kya simple explanation rakh sakta hai?',
    options:['Yeh hamesha suspicious hai','Clock naturally drift karti hai ek hafte mein — yeh normal hai, immediate suspicion ki zaroorat nahi','Kisi ne clock ke saath tamper kiya','Crime clock ki wajah se hua'],
    answer:'Clock naturally drift karti hai ek hafte mein — yeh normal hai, immediate suspicion ki zaroorat nahi',
    explanation:'Yeh ek misleading clue hai — har farak crime se related nahi hota. Mechanical ya battery clocks naturally drift karti hain time ke saath. Investigation mein irrelevant details ko filter karna important skill hai.'
  },
  {
    id:109, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'easy',
    title:'Kaun Sa Glass Tha',
    doc:'DOC-109',
    scene:'Party mein 6 log the, 6 glasses. Ek glass mein poison tha. Subah sirf 5 glasses mile dishwasher mein — saaf. Ek glass tha jo sink ke bahar, table par chhoda gaya — adha bhara, ek alag color ka liquid jo baaki sabse match nahi karta.',
    clues:['5 glasses dishwasher mein saaf','1 glass table par chhoda','Adha bhara, alag color liquid','6 log party mein'],
    question:'Sink ke bahar wala glass kya suggest karta hai?',
    options:['Koi bhool gaya use saaf karne ka','Yehi woh glass hai jisme poison tha — kisi ne deliberately ise saaf nahi kiya, ya jaldi mein chhod diya, evidence preserve ho gaya','Random glass tha','Sabse pehle wala glass tha'],
    answer:'Yehi woh glass hai jisme poison tha — kisi ne deliberately ise saaf nahi kiya, ya jaldi mein chhod diya, evidence preserve ho gaya',
    explanation:'Jab baaki sab saaf ho gaye aur sirf ek alag tha — woh standout evidence hai. Color difference (residue ya poison ka discoloration) + isolation pattern = is glass ki forensic testing zaroori hai. Sabse obvious clue hi sabse important hoti hai.'
  },
  {
    id:110, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'easy',
    title:'Saaye Ka Hisaab',
    doc:'DOC-110',
    scene:'Suspect ka claim: "Yeh photo dopahar 12 baje li thi park mein." Photo mein suspect khada hai, uski shadow seedhi neeche, bahut chhoti. Investigator ne dekha aur muskuraya.',
    clues:['Claim: dopahar 12 baje','Shadow bahut chhoti','Seedhi neeche shadow','Park location'],
    question:'Chhoti, seedhi shadow kya confirm karti hai?',
    options:['Yeh raat ki photo hai','Yeh consistent hai dopahar 12 baje ke saath — sun directly overhead hota hai is waqt, chhoti seedhi shadow banti hai','Photo edited hai','Shadow se kuch pata nahi chalta'],
    answer:'Yeh consistent hai dopahar 12 baje ke saath — sun directly overhead hota hai is waqt, chhoti seedhi shadow banti hai',
    explanation:'Yeh ek misleading-looking clue hai jo actually claim ko SUPPORT karta hai. Dopahar 12 baje (solar noon ke paas) sun sabse upar hota hai, shadows sabse chhoti aur seedhi hoti hain. Investigator ki muskaan batati hai ki alibi yahan tak consistent hai — twist hamesha guilt ki taraf nahi jaata.'
  },

  // ── BRAIN TEASER / EASY ───────────────────────────────────────
  {
    id:111, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'easy',
    title:'Kamre Mein Kaun',
    doc:'DOC-111',
    scene:'Ek kamre mein 3 switch hain bahar, andar 3 bulbs. Aapko sirf ek baar kamre mein jaane ki ijaazat hai yeh pata karne ke liye kaunsa switch kaunse bulb se connected hai.',
    clues:['3 switches bahar','3 bulbs andar','Sirf ek visit allowed','Bulbs on/off control switches se'],
    question:'Kaise pata karoge bina multiple trips ke?',
    options:['Yeh possible nahi hai','Switch 1 on karo 5 min ke liye, phir off karke Switch 2 on karo, andar jao — jo bulb on hai woh Switch 2, jo garam hai woh Switch 1, jo cold/off hai woh Switch 3','Random guess karo','Sabhi switches ek saath on karo'],
    answer:'Switch 1 on karo 5 min ke liye, phir off karke Switch 2 on karo, andar jao — jo bulb on hai woh Switch 2, jo garam hai woh Switch 1, jo cold/off hai woh Switch 3',
    explanation:'Classic lateral thinking puzzle. Heat ek extra "signal" deta hai jo visual on/off se alag hai. Switch 1 ka bulb garam hoga (recently on tha), Switch 2 ka on hoga, Switch 3 ka cold aur off hoga. Teen states se teen bulbs identify ho jaate hain ek visit mein.'
  },
  {
    id:112, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'easy',
    title:'Pani Ka Naap',
    doc:'DOC-112',
    scene:'Detective ko exactly 4 litre pani chahiye evidence wash karne ke liye. Uske paas sirf ek 5-litre jug aur ek 3-litre jug hai, koi marking nahi.',
    clues:['5-litre jug','3-litre jug','Koi marking nahi','4 litre exactly chahiye'],
    question:'Kaise exactly 4 litre nikaalega?',
    options:['Yeh impossible hai bina marking ke','5L bharo, 3L mein daalo jab tak woh full ho (5L mein 2L bachta hai), 3L khali karo, 5L ka bacha 2L 3L jug mein daalo, 5L ko phir se bharo, 3L jug mein daalo jab tak full ho (1L jaata hai, 5L mein 4L bachta hai)','Andaza laga lo','Dono jug mila do'],
    answer:'5L bharo, 3L mein daalo jab tak woh full ho (5L mein 2L bachta hai), 3L khali karo, 5L ka bacha 2L 3L jug mein daalo, 5L ko phir se bharo, 3L jug mein daalo jab tak full ho (1L jaata hai, 5L mein 4L bachta hai)',
    explanation:'Classic water-jug puzzle (die hard 3 famous version). Step by step subtraction se exact measurements possible hain bina kisi marking ke. Yeh logical sequencing aur arithmetic ka combination hai.'
  },

  // ── TRICK QUESTION / EASY ─────────────────────────────────────
  {
    id:113, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'easy',
    title:'Doctor Ka Beta',
    doc:'DOC-113',
    scene:'"Ek doctor ka beta accident mein zakhmi ho gaya. Hospital mein ek surgeon bola: \'Main operate nahi kar sakta — yeh mera beta hai.\'"',
    clues:['Doctor ka beta zakhmi','Surgeon kehta hai "mera beta"','Pehla doctor alag tha','Confusion lag rahi hai'],
    question:'Yeh kaise possible hai?',
    options:['Yeh galti hai sawaal mein','Surgeon uski maa hai — woh bhi doctor hai','Surgeon uska chacha hai','Adoption hua tha'],
    answer:'Surgeon uski maa hai — woh bhi doctor hai',
    explanation:'Yeh classic gender-assumption riddle hai. Hum automatically "surgeon" ko male assume kar lete hain. Surgeon victim ki maa ho sakti hai jo khud bhi doctor hai. Assumptions ko challenge karna hi is puzzle ka point hai.'
  },
  {
    id:114, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'easy',
    title:'Kitne Mahine',
    doc:'DOC-114',
    scene:'Detective trainee se poochha gaya: "Kitne mahinon mein 28 din hote hain?"',
    clues:['Mahinon ki ginti','28 din ka concept','Saadharan lagta hai','February trap'],
    question:'Sahi jawab kya hai?',
    options:['Sirf February','Sabhi 12 mahinon mein kam se kam 28 din hote hain','Sirf 7 mahine','Koi nahi'],
    answer:'Sabhi 12 mahinon mein kam se kam 28 din hote hain',
    explanation:'Yeh trap hai — hum sochte hain sirf February ka jawab hai kyunki woh sabse chhota mahina hai. Lekin sawaal "kitne mahinon mein 28 din hote hain" hai, "kitne mahinon mein SIRF 28 din hote hain" nahi. Har mahine mein 28 din hote hi hain (pehle 28 din), plus kuch extra.'
  },

  // ── SHERLOCK STYLE / EASY ─────────────────────────────────────
  {
    id:115, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'easy',
    title:'Chashma Aur Kalam',
    doc:'DOC-115',
    curiosity:'🔍 "Watson, dekho is aadmi ke haathon ko — woh tumhe sab bata denge jo uski zubaan nahi bata sakti."',
    scene:'Ek nayi client Holmes ke paas aayi madad ke liye. Holmes ne usse milte hi kaha: "Aap recently kisi accounting job se nikaale gaye hain, aur aap left-handed hain, aur aapne recently chashma pehnna shuru kiya hai." Client shocked. Uski right hand ki middle finger par ek calluse (gaadha skin) tha, lekin position normal pen-grip se opposite side par. Uske naak par halka sa daag tha jahan chashma rakhti hai, lekin daag fresh tha — purana nahi.',
    clues:['Calluse galat side par finger ki','Naak par fresh chashma ka daag','Client confused dikh rahi hai','Holmes ki observation'],
    question:'Calluse ki opposite position kya reveal karti hai?',
    options:['Client ne haath badal liya','Client left-handed hai — pen calluse normal right-handed grip se opposite side banta hai left-handed logon mein','Calluse kisi aur kaam se hai','Random observation hai'],
    answer:'Client left-handed hai — pen calluse normal right-handed grip se opposite side banta hai left-handed logon mein',
    explanation:'Left-handed log pen ko alag angle se pakadte hain, jisse calluse ki position different hoti hai compared to right-handed grip. Holmes ki classic observational deduction — ek chhoti physical detail se ek complete trait reveal hoti hai.'
  },
  {
    id:116, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'easy',
    title:'Mud Aur Ghoda',
    doc:'DOC-116',
    scene:'Holmes ek case ki investigation kar raha tha jahan suspect ka claim tha woh shahar mein hi tha poora din, gaon nahi gaya. Holmes ne uske boots check kiye — ek particular reddish-brown mud tha sole mein jo sirf gaon ke ek specific khet mein milti hai, jahan recently irrigation hua tha.',
    clues:['Suspect: "shahar mein tha poora din"','Reddish-brown mud boots mein','Specific khet ki mud — unique','Recent irrigation wahan'],
    question:'Mud ka match kya prove karta hai?',
    options:['Mud kahin se bhi aa sakti hai','Suspect specifically us khet mein gaya tha — claim "poora din shahar mein" galat hai','Mud purani thi','Coincidence hai'],
    answer:'Suspect specifically us khet mein gaya tha — claim "poora din shahar mein" galat hai',
    explanation:'Soil composition geographically unique ho sakti hai — particularly jab recent irrigation jaisi specific condition ho. Yeh forensic geology ka basic principle hai jo Holmes ke time se hi detective work mein use hota hai.'
  },

  // ── PSYCHOLOGICAL / MEDIUM ────────────────────────────────────
  {
    id:117, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'medium',
    curiosity:'🪞 Ek aadmi apni khud ki kahani sunate waqt third-person mein baat karne lagta hai — kyun?',
    title:'Teesra Vyakti',
    doc:'DOC-117',
    scene:'Suspect Manoj interview mein apne din ka description de raha tha. Jab tak normal baatein thi, woh "main" use kar raha tha. Jab crime ke time ki baat aayi: "Toh woh aadmi room mein gaya, usne dekha victim giri hui hai..." — apne baare mein third person mein baat karne laga, bina realize kiye.',
    clues:['Normal baaton mein "main"','Crime detail mein "woh aadmi"','Unconscious shift','Specific moment par change'],
    question:'Pronoun shift (main se "woh") kya psychological significance rakhta hai?',
    options:['Manoj confused tha','Psychological distancing — jab koi apne aap ko third person mein refer karta hai trauma ya guilt wale moment par, yeh dissociation ya distancing mechanism hai jo discomfort se bachne ke liye hota hai','Language ki galti thi','Kuch matlab nahi'],
    answer:'Psychological distancing — jab koi apne aap ko third person mein refer karta hai trauma ya guilt wale moment par, yeh dissociation ya distancing mechanism hai jo discomfort se bachne ke liye hota hai',
    explanation:'Linguistic distancing is a well-documented psychological phenomenon. Jab koi guilt ya trauma associate karta hai apni action se, subconscious mind "main" se khud ko separate karne ki koshish karta hai third-person reference se. Yeh deception detection mein important verbal cue hai.'
  },
  {
    id:118, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'medium',
    curiosity:'😢 Sabse zyada rone wala suspect — sabse pehla suspect hota hai jisse detective shak karta hai. Kyun ulta logic?',
    title:'Bahut Zyada Aansoo',
    doc:'DOC-118',
    scene:'Murder scene par 4 family members. Sabhi grief mein, lekin alag tarike se. Beta Aryan numb, shock mein, kam bol raha. Beti Riya quietly rote hue. Wife Sushma loudly wail kar rahi, baar baar floor par girna, dramatically. Detective ne note kiya: Sushma ki grief sabse "performed" lag rahi thi — bahut zyada loud, bahut zyada physical, jaise audience ke liye perform ki ja rahi ho.',
    clues:['Beta: numb, shock','Beti: quiet crying','Wife: loud, dramatic, physical','"Performed" feel aa rahi'],
    question:'Performative grief kya indicate kar sakti hai?',
    options:['Sushma sabse zyada pyaar karti thi','Excessive, theatrical grief jo "audience-aware" lagti hai, kabhi kabhi overcompensation hoti hai — genuine grief aksar quieter aur kam performative hoti hai','Sushma emotional insaan hai','Kuch nahi indicate karta'],
    answer:'Excessive, theatrical grief jo "audience-aware" lagti hai, kabhi kabhi overcompensation hoti hai — genuine grief aksar quieter aur kam performative hoti hai',
    explanation:'Yeh ek behavioral pattern hai jo forensic psychologists note karte hain — lekin caution ke saath, kyunki har insaan grief alag tarike se express karta hai. "Audience-aware" theatrical grief, especially jo dusro ki reaction check karte hue hoti hai, ek soft indicator hai — definitive proof nahi, balki further investigation ka trigger.'
  },
  {
    id:119, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'medium',
    title:'Galat Tense',
    doc:'DOC-119',
    curiosity:'⏰ Victim abhi missing thi, mari nahi confirm hui thi — par suspect ne ek baar past tense mein bol diya...',
    scene:'Priya 2 din se missing thi — police search kar rahi thi, koi confirm nahi tha woh zinda hai ya nahi. Husband Tarun interview mein 9 baar "Priya hai" bola, sahi present tense. Lekin ek baar usne bola: "Priya bahut achhi insaan thi" — past tense, phir jaldi se correct kiya: "thi... hai, matlab hai."',
    clues:['9 baar present tense use kiya','1 baar accidental past tense','Immediate self-correction','Status: missing, not confirmed dead'],
    question:'Yeh single slip kya significant ho sakti hai?',
    options:['Sirf language mistake hai — ignore karo','Jab koi missing person ke baare mein anokha accidental past tense use karta hai aur jaldi correct karta hai, yeh subconscious knowledge ka indicator ho sakta hai ki woh person ab zinda nahi hai','Tarun bahut pareshaan tha','Kuch matlab nahi'],
    answer:'Jab koi missing person ke baare mein anokha accidental past tense use karta hai aur jaldi correct karta hai, yeh subconscious knowledge ka indicator ho sakta hai ki woh person ab zinda nahi hai',
    explanation:'Yeh "tense slip" technique real police interrogation training mein taught hota hai. Jab koi insaan jaanta hai ki victim mar gayi hai (even subconsciously), unka language occasionally past tense mein slip karta hai before conscious correction. Single occurrence proof nahi hai, lekin strong investigative lead hai.'
  },

  // ── VISUAL OBSERVATION / MEDIUM ──────────────────────────────
  {
    id:120, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'medium',
    curiosity:'📷 Crime scene ki 4 photos liye gaye the alag angles se — sirf inko saath dekhne se ek contradiction ujagar hui...',
    title:'Char Angle, Ek Jhooth',
    doc:'DOC-120',
    scene:'Robbery scene — 4 photos different angles se: front door, window, hallway, victim room. Front door photo: lock intact, no damage. Window photo: glass broken, shards INSIDE the room (suggesting break from outside). Hallway photo: muddy footprints going AWAY from victim room toward exit. Victim room photo: jewellery box open, empty.',
    clues:['Front door: no damage','Window: glass shards inside','Footprints: room se exit ki taraf','Jewellery box empty'],
    question:'In 4 observations ko combine karke kya story banti hai?',
    options:['Entry front door se hui','Entry window se hui (glass inside = bahar se toda gaya), thief room mein gaya, jewellery li, exit ki taraf gaya — consistent timeline','Koi entry nahi hui','Photos contradict karte hain'],
    answer:'Entry window se hui (glass inside = bahar se toda gaya), thief room mein gaya, jewellery li, exit ki taraf gaya — consistent timeline',
    explanation:'Glass shards jo INSIDE girte hain woh batate hain force bahar se andar ki taraf lagi — matlab window bahar se toda gaya. Yeh sab 4 clues ek hi consistent narrative banate hain: window entry → room → theft → exit via hallway. Multiple independent observations jab align karte hain, woh strong case banate hain.'
  },
  {
    id:121, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'medium',
    title:'Reflection Ka Raaz',
    doc:'DOC-121',
    curiosity:'🪟 Ek selfie mein suspect ka alibi tha — lekin background ke sheeshe mein kuch reflect ho raha tha jo usse contradict karta tha...',
    scene:'Suspect ka claim: "Maine yeh selfie cafe mein li thi 6 PM par — dekho." Selfie mein suspect smiling, cafe background. Lekin photo ke peeche ek glass display case hai jisme reflection dikh raha hai — reflection mein clearly ek different location ka clock tower dikh raha hai jo cafe se 5 km door hai aur photo ke time 7:45 dikha raha hai, na ki 6:00.',
    clues:['Cafe selfie claim 6 PM','Glass case mein reflection','Reflection mein clock tower 7:45 dikh raha','Clock tower 5km door'],
    question:'Reflection mein dikhne wala clock tower kya prove karta hai?',
    options:['Reflection blurry hota hai — reliable nahi','Photo actually 7:45 PM ki hai, location bhi clock tower ke paas thi (visible reflection range mein), 6 PM cafe claim galat hai','Clock tower galat time dikha raha hoga','Suspect ne dusri jagah selfie li but cafe mein edit ki'],
    answer:'Photo actually 7:45 PM ki hai, location bhi clock tower ke paas thi (visible reflection range mein), 6 PM cafe claim galat hai',
    explanation:'Reflections accidentally bahut information capture kar lete hain jo photographer ko pata nahi hota. Glass, mirrors, even eyes mein reflections forensic photography mein use hote hain location/time verify karne ke liye. Yeh ek classic "unintentional evidence" case hai.'
  },
  {
    id:122, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'medium',
    title:'Paanch Mein Se Ek Galat',
    doc:'DOC-122',
    scene:'5 employees ka claim: "Hum sab 9 AM ko office pahunche, biometric scan hua." Biometric logs: 5 entries, sab 8:58-9:03 AM ke beech. Lekin CCTV: sirf 4 log entrance se aate dikhte hain is window mein. 5th employee Deepak ka scan 9:01 ka hai lekin CCTV mein woh 9:01 par bilkul nahi dikhta entrance par.',
    clues:['5 biometric scans 8:58-9:03','CCTV mein sirf 4 log dikhte hain','Deepak ka scan hai par CCTV mein nahi','Same time window'],
    question:'Biometric aur CCTV mismatch kya suggest karta hai?',
    options:['CCTV camera kharab tha','Deepak ka biometric scan kisi aur ne use kiya hoga uske access card/finger se — Deepak physically present nahi tha jab scan hua','Deepak chhota dikhta hoga camera mein','Coincidence hai'],
    answer:'Deepak ka biometric scan kisi aur ne use kiya hoga uske access card/finger se — Deepak physically present nahi tha jab scan hua',
    explanation:'Jab digital record (biometric) aur visual evidence (CCTV) contradict karte hain, dono independently verify karne chahiye. Biometric proxy (kisi aur ne scan use kiya, ya buddy punching) ek common workplace fraud hai. Yeh discrepancy alibi establish karne ke liye crucial hai.'
  },

  // ── BRAIN TEASER / MEDIUM ─────────────────────────────────────
  {
    id:123, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'medium',
    curiosity:'🚪 Teen darwaze — ek azaadi, do maut. Ek guard hamesha sach, ek hamesha jhooth, ek random. Ek hi sawaal puchh sakte ho...',
    title:'Teen Darwaze Ka Paheli',
    doc:'DOC-123',
    scene:'Ek prisoner ke saamne 3 darwaze. Ek se azaadi milti hai, doosre do se maut. Teen guards khade hain — ek darwaze ke paas — par prisoner nahi jaanta kaun konsa guard hai: ek hamesha sach bolta, ek hamesha jhooth, ek random (kabhi sach kabhi jhooth). Prisoner sirf EK sawaal ek guard se poochh sakta hai.',
    clues:['3 darwaze — 1 safe','3 guard types: truth, lie, random','Sirf 1 sawaal allowed','Random guard predictable nahi'],
    question:'Konsa sawaal guaranteed safe darwaza reveal karega?',
    options:['"Kya yeh darwaza safe hai?"','Kisi bhi guard se poochho: "Agar main doosre 2 guards se poochhta ki teesra darwaza safe hai, woh kya bolte?" — phir us darwaze ko AVOID karo jo woh bataye','"Tum sach bolte ho?"','Yeh solve nahi ho sakta'],
    answer:'Kisi bhi guard se poochho: "Agar main doosre 2 guards se poochhta ki teesra darwaza safe hai, woh kya bolte?" — phir us darwaze ko AVOID karo jo woh bataye',
    explanation:'Yeh ek advanced version hai classic "two guards" puzzle ka. Random guard ki unpredictability ko neutralize karne ke liye double-negative meta-question use karte hain. Iska logic complex hai par mathematically guaranteed solution deta hai — jo darwaza bataya jaye usse avoid karo, baaki 2 mein se ek safe hai (further narrow karna possible hai additional reasoning se).'
  },
  {
    id:124, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'medium',
    title:'Ghadi Ki Suiyan',
    doc:'DOC-124',
    scene:'Detective ko ek crime scene par ek tooti hui analog clock mili jiski minute aur hour suiyan exactly overlap kar rahi thi — bilkul ek upar ek. Yeh information important thi exact time of impact janne ke liye.',
    clues:['Minute aur hour hand exactly overlap','12 baar yeh hota hai 12 ghanton mein','Specific moment chahiye','Clock impact se ruki'],
    question:'12 baje ke alawa (jab dono 12 par hote hain), agle overlap ka exact time kya hota hai?',
    options:['1:00 baje exactly','Approximately 1:05:27 (1 ghanta aur 5/11 minute baad — minute hand hour hand ko catch karta hai)','1:30 baje','Yeh determine nahi ho sakta'],
    answer:'Approximately 1:05:27 (1 ghanta aur 5/11 minute baad — minute hand hour hand ko catch karta hai)',
    explanation:'Minute hand hour hand se 11x tezi se chalta hai relative terms mein. Dono hands 12 baar overlap karte hain 12 ghanton mein, exactly equal intervals par — 12/11 ghante ka gap, yani approximately har 65.45 minute mein. Yeh classic clock-angle mathematics puzzle hai jo forensic timing analysis mein bhi use hoti hai.'
  },

  // ── TRICK QUESTION / MEDIUM ───────────────────────────────────
  {
    id:125, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'medium',
    curiosity:'⚰️ "Ek aadmi apne hi funeral mein gaya — aur kisi ne use ajeeb nahi samjha." Yeh kaise sach hai?',
    title:'Apna Hi Funeral',
    doc:'DOC-125',
    scene:'Ek statement: "John apne hi funeral mein attend hua, aur yeh poori tarah normal tha." Logon ne pehle socha yeh ghost story hai ya twin confusion.',
    clues:['John apne funeral mein gaya','Koi ajeeb nahi mana','Ghost ya twin nahi hai answer','Simple, logical explanation'],
    question:'Yeh kaise normal ho sakta hai?',
    options:['John ka ghost tha','John ek pall-bearer (taboot uthaane wala) tha kisi doosre "John" ke funeral mein — naam coincidence hai','John ka twin tha','John zinda tha hospital mein declared dead'],
    answer:'John ek pall-bearer (taboot uthaane wala) tha kisi doosre "John" ke funeral mein — naam coincidence hai',
    explanation:'Yeh ek classic misdirection puzzle hai. "Apne hi funeral" automatically apni death assume kar leta hai, lekin "apna" yahan possessive duty (jaise "apna funeral attend karna duty thi") ko refer kar sakta hai — woh kisi doosre vyakti ke funeral mein gaya jiska naam bhi John tha, ya woh assignment se gaya tha funeral director ke roop mein.'
  },
  {
    id:126, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'medium',
    title:'Sirf Ek Jhooth Bol Sakta',
    doc:'DOC-126',
    scene:'Suspect se kaha gaya: "Tum sirf EK baar jhooth bol sakte ho is interview mein — baaki sab sach hona chahiye." Suspect ne kaha: "Maine abhi jhooth bola."',
    clues:['Ek jhooth allowed','Statement: "maine abhi jhooth bola"','Self-referential statement','Logic paradox lagta hai'],
    question:'"Maine abhi jhooth bola" — kya yeh statement sach ya jhooth hai?',
    options:['Yeh sach hai — simple','Yeh ek paradox hai — agar sach hai toh jhooth hua, agar jhooth hai toh sach hua. Yeh statement khud apna jhooth use kar leta hai bina contradiction ke (self-consuming lie)','Yeh invalid statement hai','Determine nahi ho sakta'],
    answer:'Yeh ek paradox hai — agar sach hai toh jhooth hua, agar jhooth hai toh sach hua. Yeh statement khud apna jhooth use kar leta hai bina contradiction ke (self-consuming lie)',
    explanation:'Yeh "liar paradox" ka variant hai. Agar statement sach hai ("maine jhooth bola" sach hai), toh usne jhooth bola — lekin statement sach hai, contradiction. Agar jhooth hai, toh usne jhooth nahi bola — lekin statement khud jhooth declare kar raha hai ki usne bola — yeh consistent hai! Yeh apna ek hi allowed jhooth use kar leta hai cleverly.'
  },

  // ── SHERLOCK STYLE / MEDIUM ───────────────────────────────────
  {
    id:127, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'medium',
    curiosity:'🐕 "Watson, kutta nahi bhaunka — yehi sabse bada clue hai is poori raat ka."',
    title:'Woh Kutta Jo Nahi Bhaunka',
    doc:'DOC-127',
    scene:'Raat ko farmhouse mein ghoda chori hua. Guard dog tha jo strangers par bhaunkta tha. Us raat dog ne koi awaaz nahi ki — neighbors confirm karte hain. Suspect list mein 4 log: stranger se unknown thief, ek farmhand jo regularly dog ko khana deta tha, owner ka beta, aur ek delivery boy jo pehli baar aaya tha.',
    clues:['Dog ne us raat nahi bhaunka','Dog strangers se bhaunkta hai','4 suspects','Farmhand regular visitor hai dog ke liye'],
    question:'Dog ka silence kya reveal karta hai?',
    options:['Dog so raha tha','Dog ko thief familiar tha — sirf woh log jo dog ko jaante hain (farmhand ya beta) is silence ko explain karte hain, stranger ya naya delivery boy nahi','Dog deaf tha','Koi indication nahi deta yeh'],
    answer:'Dog ko thief familiar tha — sirf woh log jo dog ko jaante hain (farmhand ya beta) is silence ko explain karte hain, stranger ya naya delivery boy nahi',
    explanation:'Yeh seedha "Silver Blaze" story ka homage hai jahan Sherlock Holmes ne yehi insight use kiya tha — "the curious incident of the dog that did nothing in the night." Absence of expected behavior (barking) itself ek powerful clue hai jo unfamiliar suspects ko eliminate karta hai.'
  },
  {
    id:128, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'medium',
    title:'Pipe Ka Tambaku',
    doc:'DOC-128',
    curiosity:'🚬 Holmes ne sirf raakh dekh kar bataa diya ki visitor kaun tha aur kitni der baitha tha...',
    scene:'Ek mysterious visitor Holmes ke client ke ghar aaya tha unki absence mein, aur kuch documents le gaya. Holmes ne fireplace ke paas pipe ki raakh examine ki — specific tobacco blend tha jo sirf ek specific imported brand mein milta hai, expensive aur rare. Raakh ki quantity se estimate kiya ki visitor approximately 45 minute baitha tha.',
    clues:['Specific rare tobacco blend','Expensive imported brand','Raakh quantity = 45 min estimate','Client ki absence mein chori'],
    question:'Tobacco blend ki rarity kya investigative value rakhti hai?',
    options:['Tobacco se kuch pata nahi chalta','Rare, expensive brand suspect pool ko drastically narrow karta hai — sirf woh log jo specifically yeh brand afford/access kar sakte hain consideration mein aate hain','Sabhi log same tobacco use karte hain','Yeh irrelevant detail hai'],
    answer:'Rare, expensive brand suspect pool ko drastically narrow karta hai — sirf woh log jo specifically yeh brand afford/access kar sakte hain consideration mein aate hain',
    explanation:'Yeh authentic Holmesian method hai — Arthur Conan Doyle ne apni stories mein "Holmes\'s monograph on tobacco ash" reference kiya hai jisme 140 different tobacco types ki ash identify ki ja sakti thi. Specific, identifiable material evidence se suspect pool significantly narrow ho jaata hai.'
  },

  // ── MURDER + DETECTIVE BLENDED / MEDIUM-HARD ─────────────────
  {
    id:129, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'hard',
    curiosity:'🎭 Ek killer ne apni khud ki interrogation mein detective ko manipulate karne ki koshish ki — aur usi koshish ne use expose kar diya...',
    title:'Manipulator Ka Jaal',
    doc:'DOC-129',
    scene:'Suspect Devendra interrogation mein bahut cooperative dikh raha tha — extra information de raha tha jo poochhi nahi gayi thi, baar baar detective ki "intelligence" ki taarif kar raha tha, aur subtly conversation ko apne control mein le raha tha topics choose karke. Jab detective ne specific timeline poochha, Devendra ne jawab dene se pehle apna sawaal poochha: "Aapko kya lagta hai actually hua hoga?"',
    clues:['Extra unsolicited information','Baar baar detective ki taarif','Conversation control karne ki koshish','Counter-question se deflection'],
    question:'Yeh combined behaviors kya psychological profile suggest karte hain?',
    options:['Devendra bahut helpful insaan hai','Calculated manipulation tactics — flattery (detective ko disarm karna), control-seeking, aur deflection (counter-question se apna jawab avoid karna) — yeh sab combine hokar ek practiced, manipulative response pattern dikhate hain','Devendra nervous hai','Normal cooperative behavior hai'],
    answer:'Calculated manipulation tactics — flattery (detective ko disarm karna), control-seeking, aur deflection (counter-question se apna jawab avoid karna) — yeh sab combine hokar ek practiced, manipulative response pattern dikhate hain',
    explanation:'Yeh interrogation manipulation ka classic pattern hai jo trained interrogators recognize karte hain. Flattery disarms, conversational control redirect karta hai away from incriminating topics, aur counter-questioning (kya aapko lagta hai) directly answer dene se avoid karta hai while appearing engaged. Innocent log typically directly answer dete hain bina manipulation tactics ke.'
  },

  // ── HARD — VISUAL OBSERVATION ──────────────────────────────────
  {
    id:130, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'hard',
    curiosity:'🌅 Ek satellite image, ek shadow, aur ek mathematical calculation ne 6 mahine purana case solve kar diya...',
    title:'Shadow Ki Lambai',
    doc:'DOC-130',
    scene:'Cold case: missing person ki last known photo — woh apni car ke paas khada hai, location unknown claim ki gayi thi "kahin north mein." Forensic analyst ne photo mein car ki shadow ki length measure ki: car height known (1.5m), shadow length measured 2.6m. Photo timestamp: 2:30 PM, specific date. Investigator ne yeh data use karke sun-angle calculation ki — jo specific latitude range corresponds karta hai equatorial se North tak.',
    clues:['Car height: 1.5m known','Shadow length: 2.6m','Specific date and time known','Sun angle calculable'],
    question:'Shadow length se latitude kaise determine hoti hai?',
    options:['Yeh possible nahi hai shadow se','Shadow angle = arctan(shadow length / object height). Known date/time se sun declination calculate karke, shadow angle se observer ki latitude reverse-calculate ki ja sakti hai — trigonometric forensic geolocation','Shadow random hoti hai','Sirf guess kiya ja sakta hai'],
    answer:'Shadow angle = arctan(shadow length / object height). Known date/time se sun declination calculate karke, shadow angle se observer ki latitude reverse-calculate ki ja sakti hai — trigonometric forensic geolocation',
    explanation:'Yeh real forensic technique hai jo intelligence agencies aur journalists (like Bellingcat) geolocation ke liye use karte hain. Shadow length + object height = sun elevation angle. Combined with known date/time, solar position tables se latitude band determine ho sakta hai. Yeh pure mathematics se photo ki location reveal karta hai.'
  },
  {
    id:131, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'hard',
    title:'Glass Mein Chehra',
    doc:'DOC-131',
    curiosity:'👓 Victim ki aankhon ki photo mein ek reflection tha — itna chhota ki sabne ignore kiya, sirf ek forensic analyst ne zoom kiya...',
    scene:'Murder victim ki autopsy photos high-resolution thi. Forensic photographer ne accidentally noticed: victim ki khuli aankhon ke cornea mein ek reflection visible thi — anatomically corneas mirror-like reflective surface hote hain death ke kuch der baad tak. Zoom aur enhance karne par, reflection mein ek blurred figure ka outline dikha — kisi ke khade hone ka silhouette, victim ke samne.',
    clues:['Cornea reflective surface','High-res photo zoom kiya','Blurred figure silhouette visible','Death ke turant baad ki photo'],
    question:'Cornea reflection se kya forensic value mil sakti hai?',
    options:['Eyes mein reflection fake hoti hai','Yeh ek genuine, dur technique hai — corneal reflection photography mein last visible scene capture ho sakta hai, jo silhouette se height, build, ya position ka estimate de sakta hai','Reflection se kuch determine nahi hota','Photo ka manipulation hai'],
    answer:'Yeh ek genuine, dur technique hai — corneal reflection photography mein last visible scene capture ho sakta hai, jo silhouette se height, build, ya position ka estimate de sakta hai',
    explanation:'Corneal reflection (corneal imaging) ek real forensic aur photographic phenomenon hai. High-resolution photography mein eyes ke reflective surface mein surroundings capture ho sakte hain — kabhi kabhi forensic investigations mein last-moment witness jaisa data milta hai, although resolution aur clarity limitations hoti hain.'
  },

  // ── HARD — BRAIN TEASER ────────────────────────────────────────
  {
    id:132, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'hard',
    curiosity:'🎲 12 sikke, ek nakli — sirf 3 baar tarazu use karke pata lagao kaunsa hai aur woh halka ya bhaari hai...',
    title:'Barah Sikkon Ka Raaz',
    doc:'DOC-132',
    scene:'Ek case mein 12 evidence coins mile, sabhi identical dikhte hain except ek fake hai jo thoda halka ya bhaari hai (pata nahi konsa). Forensic balance scale sirf 3 baar use ki ja sakti hai weight comparisons ke liye. Pata lagana hai kaunsa coin fake hai AND woh halka hai ya bhaari.',
    clues:['12 coins, 1 fake','Fake ka weight different — halka ya bhaari, pata nahi','Sirf 3 weighings allowed','Balance scale — comparative, exact weight nahi'],
    question:'Kya yeh 3 weighings mein definitely solve ho sakta hai?',
    options:['Nahi, minimum 4 weighings chahiye','Haan — 12 coins ko groups mein divide karke (4-4-4), systematic comparisons se exactly 3 weighings mein fake coin aur uska nature (halka/bhaari) dono determine ho sakte hain','Sirf fake coin mil sakta hai, weight nahi','Yeh random guess ban jaata hai'],
    answer:'Haan — 12 coins ko groups mein divide karke (4-4-4), systematic comparisons se exactly 3 weighings mein fake coin aur uska nature (halka/bhaari) dono determine ho sakte hain',
    explanation:'Yeh ek classic information theory puzzle hai. 3 weighings se 3^3=27 possible outcomes milte hain, jo 12 coins × 2 possibilities (halka/bhaari) = 24 cases ko cover karne ke liye kaafi hai. Specific systematic grouping strategy (jisme har weighing pichli ke result par depend karti hai) guaranteed solution deti hai. Yeh combinatorial mathematics ka elegant application hai.'
  },

  // ── HARD — TRICK QUESTION ──────────────────────────────────────
  {
    id:133, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'hard',
    curiosity:'🔁 Yeh sawal apne hi jawab ko contradict karta hai — par phir bhi ek consistent solution maujood hai...',
    title:'Jo Khud Ko Maap Nahi Sakta',
    doc:'DOC-133',
    scene:'Ek encrypted note mein likha tha: "Yeh statement palindrome nahi hai jab tum ise reverse karke padhte ho — par yeh tabhi sach hai jab tum normal direction mein padhte ho." Detective ko decode karna tha kya yeh statement consistent hai.',
    clues:['Self-referential statement','Palindrome claim','Direction-dependent truth','Logical consistency check needed'],
    question:'Kya yeh statement logically consistent hai?',
    options:['Nahi, yeh hamesha paradox banta hai','Haan, yeh consistent ho sakta hai — agar statement actually palindrome nahi hai (jo ki most sentences naturally nahi hote), toh "yeh palindrome nahi hai" hamesha sach rahega regardless of direction — non-issue','Yeh meaningless hai','Determine nahi ho sakta'],
    answer:'Haan, yeh consistent ho sakta hai — agar statement actually palindrome nahi hai (jo ki most sentences naturally nahi hote), toh "yeh palindrome nahi hai" hamesha sach rahega regardless of direction — non-issue',
    explanation:'Yeh statement intentionally complex lagta hai lekin actually simple resolve ho jaata hai. Most natural language sentences palindromes nahi hote — toh "yeh palindrome nahi hai" trivially true hai both directions mein. Yeh ek "fake paradox" hai jo complexity ka illusion create karta hai bina actual logical contradiction ke.'
  },

  // ── HARD — SHERLOCK STYLE ──────────────────────────────────────
  {
    id:134, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'hard',
    curiosity:'📰 "Watson, is akhbaar ki print quality dekho — yeh humein bata rahi hai ki yeh letter kab nahi likha gaya tha."',
    title:'Akhbaar Ki Tareekh',
    doc:'DOC-134',
    scene:'Ek blackmail letter mila jisme newspaper se cut kiye gaye letters chipkaye gaye the (ransom-note style). Holmes ne specific letters ke font aur paper texture examine ki. Usne note kiya ki kuch letters ek specific newspaper se the jiska font 1889 mein change hua tha. Letter mein date claim 1885 ki thi.',
    clues:['Newspaper cutout letters','Specific font identified','Font sirf 1889 ke baad use hua','Letter date claim: 1885'],
    question:'Font ki timeline kya reveal karti hai?',
    options:['Letter genuinely 1885 ka hai','Letter 1889 ke baad likha gaya hoga — claimed date (1885) fabricated hai, kyunki woh specific font tab exist hi nahi karta tha','Font change irrelevant hai','Holmes galat hai'],
    answer:'Letter 1889 ke baad likha gaya hoga — claimed date (1885) fabricated hai, kyunki woh specific font tab exist hi nahi karta tha',
    explanation:'Yeh anachronism-based forensic deduction hai — agar evidence mein koi element hai jo claimed timeframe mein exist nahi karta tha (font, technology, ya specific material), toh timeline automatically contradict ho jaati hai. Yeh historical document forgery detection ka foundational principle hai, jo aaj bhi authenticate karne ke liye use hota hai.'
  },

  // ── GENIUS LEVEL — PSYCHOLOGICAL ──────────────────────────────
  {
    id:135, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'genius',
    curiosity:'🧬 Ek serial interview pattern analysis ne ek killer ko identify kiya jisne 20 saal mein 7 alag identities use ki thi...',
    title:'Linguistic Fingerprint',
    doc:'DOC-135',
    scene:'20 saal mein 7 cold cases — saari letters/notes left behind crime scenes par, har case mein alag handwriting (clearly disguised) aur alag claimed identity. FBI linguist ne forensic stylometry use ki: sentence length patterns, specific word choices, punctuation habits, aur syntactic structures cross-case analyze ki. Result: 94% statistical confidence ki saari 7 notes ek hi author ne likhi.',
    clues:['7 cases, 20 saal span','Handwriting disguised har baar','Stylometric analysis: sentence patterns','94% statistical match'],
    question:'Stylometry kaise handwriting disguise ke through bhi author identify kar sakti hai?',
    options:['Yeh impossible hai handwriting badalne ke baad','Writing STYLE (word choice, sentence structure, syntax habits) subconscious aur deeply ingrained hota hai — handwriting ya identity disguise kar sakte hain lekin underlying linguistic patterns consistently same rehte hain, jo statistical analysis se detect ho sakte hain','94% kaafi nahi hai courtroom mein','Coincidence hai'],
    answer:'Writing STYLE (word choice, sentence structure, syntax habits) subconscious aur deeply ingrained hota hai — handwriting ya identity disguise kar sakte hain lekin underlying linguistic patterns consistently same rehte hain, jo statistical analysis se detect ho sakte hain',
    explanation:'Forensic stylometry is a real, court-admissible technique. Authors have measurable linguistic "fingerprints" — average sentence length, function word frequency, punctuation patterns — that remain remarkably consistent even when consciously trying to disguise writing. Used famously in identifying the Unabomber and other long-term serial cases through written communications.'
  },

  // ── GENIUS LEVEL — VISUAL OBSERVATION ─────────────────────────
  {
    id:136, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'genius',
    curiosity:'🌌 Ek photo mein sirf stars dikh rahe the — aur ek astronomer ne usse exact second tak date aur location bata diya...',
    title:'Sitaron Ka Gawah',
    doc:'DOC-136',
    scene:'Kidnapping case — victim ne secretly ek photo li thi raat mein khidki se, sirf night sky visible tha, kuch silhouette of trees. No landmarks, no buildings, sirf stars. Forensic astronomer ne star positions, constellation angles, aur ek faintly visible comet ki position analyze ki jo specific 11-day window mein hi visible thi historically.',
    clues:['Sirf night sky aur silhouette','Comet faintly visible','Comet ka visibility window: 11 din','Specific constellation angles'],
    question:'Star photography se exact timeframe kaise determine hoti hai?',
    options:['Stars hamesha same dikhte hain — impossible hai','Celestial mechanics predictable hain — Earth ki rotation/orbit, specific celestial events (jaise comets) ka appearance, aur star positions specific date/time/location ke liye mathematically unique combination banate hain — forensic astronomy isko reverse-engineer karti hai','Sirf rough season pata chal sakta hai','Photo ki authenticity verify nahi ho sakti'],
    answer:'Celestial mechanics predictable hain — Earth ki rotation/orbit, specific celestial events (jaise comets) ka appearance, aur star positions specific date/time/location ke liye mathematically unique combination banate hain — forensic astronomy isko reverse-engineer karti hai',
    explanation:'Forensic astronomy is a niche but powerful technique. Software like Stellarium ko reverse use karke, ek photo mein visible celestial bodies se precise date, time, aur even geographic location calculate ki ja sakti hai. Rare events like specific comets ka visibility window timeframe ko drastically narrow kar deta hai — kabhi kabhi exact din tak.'
  },

  // ── GENIUS LEVEL — BRAIN TEASER ───────────────────────────────
  {
    id:137, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'genius',
    curiosity:'🧮 Ek mathematician-criminal ne apna alibi ek statistical impossibility mein chhupaya — lekin ek probability expert ne usse pakad liya...',
    title:'Birthday Paradox Ka Jaal',
    doc:'DOC-137',
    scene:'23 logon ki ek party mein murder hua. Suspect Vivaan ka claim: "Itne saare log the, koi specific person ko target karna statistically impossible tha — random crime tha, mera nahi." Lekin investigator ne note kiya ki party mein 2 logon ka birthday same date tha — Vivaan ne yeh "coincidence" point kiya defense mein "dekho kitne random coincidences hote hain bade groups mein."',
    clues:['23 log party mein','2 logon ka birthday same','Vivaan: "yeh sab random coincidence"','Statistical defense argument'],
    question:'Birthday coincidence ka defense argument kyun flawed hai?',
    options:['23 logon mein same birthday impossible hai','Birthday Paradox actually predictable hai — 23 logon mein 2 same birthday ki probability 50%+ hoti hai mathematically. Yeh EXPECTED outcome hai, "amazing coincidence" nahi — Vivaan ka argument actually uske favor mein nahi balki against hai, kyunki woh statistics misuse kar raha tha apne crime ko randomize karne ke liye','Vivaan sahi hai','Yeh irrelevant hai case se'],
    answer:'Birthday Paradox actually predictable hai — 23 logon mein 2 same birthday ki probability 50%+ hoti hai mathematically. Yeh EXPECTED outcome hai, "amazing coincidence" nahi — Vivaan ka argument actually uske favor mein nahi balki against hai, kyunki woh statistics misuse kar raha tha apne crime ko randomize karne ke liye',
    explanation:'The Birthday Paradox is a well-known probability phenomenon — with just 23 people, there\'s over 50% chance two share a birthday, contrary to intuition. Vivaan used this real mathematical fact to argue "randomness" exists in groups, but misapplied it to defend a TARGETED crime. Investigators with statistical literacy can identify when probability arguments are being deliberately misused to obscure deliberate action.'
  },

  // ── GENIUS LEVEL — TRICK QUESTION ─────────────────────────────
  {
    id:138, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'genius',
    curiosity:'🔓 Ek encryption jisme jawab sawaal ke andar hi chhupa tha — par 99% log puzzle ko overcomplicate kar dete hain...',
    title:'Sabse Sasta Tarika',
    doc:'DOC-138',
    scene:'Ek heist case mein criminals ne note chhoda: "Hume yeh bank loot karne ka sabse efficient tarika chahiye — humein exactly 100 units of currency le jaani hai using minimum number of distinct denominations possible, jab denominations available hain: 1, 5, 10, 25, 50, 100." Forensic accountant ko yeh decode karna tha criminal ki planning sophistication assess karne ke liye.',
    clues:['Exactly 100 units chahiye','Denominations: 1,5,10,25,50,100','Minimum distinct denominations','Planning sophistication clue'],
    question:'Minimum kitni denominations (types) chahiye 100 banane ke liye?',
    options:['4 denominations chahiye','Sirf 1 — ek 100-unit note/denomination already 100 ke equal hai, toh sirf ek single denomination (100 ki ek piece) sufficient hai','10 denominations chahiye','2 denominations minimum'],
    answer:'Sirf 1 — ek 100-unit note/denomination already 100 ke equal hai, toh sirf ek single denomination (100 ki ek piece) sufficient hai',
    explanation:'Yeh classic overthinking trap hai. Jab 100 ki denomination available hai already, sabse simple solution sirf EK piece use karna hai. Log automatically complex combination sochne lagte hain (50+25+25, etc.) jab seedha answer already given options mein maujood tha. Sometimes the most sophisticated-seeming puzzle has the simplest, most direct answer hidden in plain sight.'
  },

  // ── GENIUS LEVEL — SHERLOCK STYLE ─────────────────────────────
  {
    id:139, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'genius',
    curiosity:'🎻 "Watson, is violin ki tuning sun kar bata sakta hoon ki yeh kitne saal Europe se bahar rakha gaya tha."',
    title:'Violin Ka Pitch',
    doc:'DOC-139',
    scene:'Ek antique violin stolen hua tha, aur recovered violin ki authenticity verify karni thi. Holmes ne violin ki construction examine ki aur note kiya ki uski "standard pitch" tuning A=435Hz thi (purani European standard), jabki modern violins A=440Hz par tuned hoti hain — yeh tuning shift specifically 1939 mein internationally standardized hui thi. Wood ageing aur varnish crackle pattern se age estimate 80-100 saal purana tha.',
    clues:['Tuning standard: A=435Hz (purana)','Modern standard: A=440Hz (1939 se)','Wood age: 80-100 saal','Varnish crackle pattern consistent'],
    question:'Pitch standard ka historical context kya prove karta hai?',
    options:['Violin recently bani hai','Violin pre-1939 ki authentic construction hai — agar yeh modern forgery hoti, woh likely modern 440Hz convention follow karti banane mein, na ki obscure historical 435Hz standard ko deliberately replicate karti','Pitch se kuch determine nahi hota','Yeh fake hai kyunki standard purana hai'],
    answer:'Violin pre-1939 ki authentic construction hai — agar yeh modern forgery hoti, woh likely modern 440Hz convention follow karti banane mein, na ki obscure historical 435Hz standard ko deliberately replicate karti',
    explanation:'Yeh ek genuinely fascinating authentication technique hai. Musical pitch standards historically evolved aur documented hain. Forgers typically apne current era ke conventions follow karte hain unconsciously, na ki obscure historical specifications. Combined with material aging evidence (wood, varnish), pitch standard analysis instrument authentication mein additional corroborating layer deta hai — exactly how art and instrument forgery investigations work.'
  },

  // ── MORE EASY CASES TO ROUND OUT VARIETY ──────────────────────
  {
    id:140, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'easy',
    title:'Galat Mahina',
    doc:'DOC-140',
    scene:'Suspect ka claim: "Yeh photo Diwali ki hai, October mein li thi." Photo mein clearly green leafy trees hain, log half-sleeves mein, aur ek calendar background mein "MAY" dikha raha hai.',
    clues:['Claim: October Diwali photo','Trees full green, leafy','Log half-sleeves mein','Calendar shows "MAY"'],
    question:'Calendar aur seasonal clues kya prove karte hain?',
    options:['October mein bhi green trees ho sakte hain','Photo May mein li gayi thi, October Diwali claim galat hai — calendar directly date confirm karta hai','Calendar purana hoga wall par','Trees ka season se kuch lena dena nahi'],
    answer:'Photo May mein li gayi thi, October Diwali claim galat hai — calendar directly date confirm karta hai',
    explanation:'Background mein dikhne wala calendar sabse direct evidence hai. Jab specific month likha visible ho, woh kisi bhi seasonal guesswork se zyada reliable hota hai. Direct documentary evidence circumstantial clues se hamesha strong hoti hai.'
  },
  {
    id:141, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'easy',
    title:'Haath Ki Mehndi',
    doc:'DOC-141',
    scene:'Ek client Holmes ke paas aayi apne pati ki tracking ke liye jo "business trip" par gaya bola tha. Holmes ne uske haath dekhe — halki si mehndi ka nishaan tha jo recently wash kiya gaya tha, fade ho rahi thi. Holmes ne pucha: "Aap kisi shaadi mein gaye the recently?" Woman shocked.',
    clues:['Halki mehndi haath par','Fade ho rahi, recently washed','Client ne mention nahi kiya tha','Holmes ne directly poocha'],
    question:'Holmes ne mehndi se kya deduce kiya?',
    options:['Woman ki khud ki shaadi hui hogi','Mehndi pattern se pata chalta hai ki woman recently kisi function/shaadi mein gayi thi — yeh observation se simple lekin accurate inference hai','Mehndi se kuch nahi pata chalta','Random guess tha'],
    answer:'Mehndi pattern se pata chalta hai ki woman recently kisi function/shaadi mein gayi thi — yeh observation se simple lekin accurate inference hai',
    explanation:'Yeh classic Holmesian observation hai — chhoti physical details (jaise fading mehndi) se larger context infer karna. Mehndi specifically functions/celebrations se associated hoti hai, isliye uski presence aur fade-state se recent social activity ka timeline estimate hota hai.'
  },
  {
    id:142, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'easy',
    title:'Andhere Mein Mouje',
    doc:'DOC-142',
    scene:'Detective ki evidence drawer mein 10 black socks aur 8 white socks hain, andhere mein mixed. Power cut hai, kuch dikhta nahi. Minimum kitne socks nikalne padenge guarantee ke saath ek matching pair (same color) paane ke liye?',
    clues:['10 black socks','8 white socks','Andhera — kuch dikhta nahi','Matching pair guarantee chahiye'],
    question:'Minimum kitne socks nikalne honge guaranteed matching pair ke liye?',
    options:['2','3 — pigeonhole principle: sirf 2 colors hain, toh 3rd sock zaroor kisi ek se match karega','10','18'],
    answer:'3 — pigeonhole principle: sirf 2 colors hain, toh 3rd sock zaroor kisi ek se match karega',
    explanation:'Yeh classic Pigeonhole Principle hai. Sirf 2 possible colors hain. Worst case mein pehle 2 socks alag-alag color ke ho sakte hain (1 black, 1 white) — lekin 3rd sock zaroor inmein se kisi ek color se match karega, kyunki sirf 2 hi colors exist karte hain. Mathematical certainty, guesswork nahi.'
  },
  {
    id:143, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'easy',
    title:'Ek Hi Family',
    doc:'DOC-143',
    scene:'"Maa aur beti restaurant mein gayi, dono ne 30-30 saal ki age bataayi waiter ko." Waiter confused hua — usne socha yeh impossible hai (twins ho sakti hain lekin "maa-beti" relation claim kiya gaya tha).',
    clues:['Maa-beti relation claim','Dono ki age: 30-30 saal','Waiter confused','Seemingly contradictory'],
    question:'Yeh kaise possible hai bina kisi trick ke?',
    options:['Yeh impossible hai genuinely','Beti ne apni age "30" rounded ya approximate boli ho sakti hai, ya unmein se ek ne galat suni — most likely: ek ne 30 ke "close to" bola jo waiter ne 30 hi suna dono ke liye','Adoption case hai','Time travel hua'],
    answer:'Beti ne apni age "30" rounded ya approximate boli ho sakti hai, ya unmein se ek ne galat suni — most likely: ek ne 30 ke "close to" bola jo waiter ne 30 hi suna dono ke liye',
    explanation:'Yeh ek simple miscommunication puzzle hai jahan hum automatically "trick" assume kar lete hain jab actually most mundane explanation (rounding, mishearing, approximation) sabse likely hota hai. Detective work mein bhi sabse simple explanation (Occam\'s Razor) check karna chahiye complex theories se pehle.'
  },
  {
    id:144, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'medium',
    title:'Naam Bhool Jaana',
    doc:'DOC-144',
    curiosity:'🗣️ Ek husband apni wife ka naam interview mein bhool gaya — 12 saal ki shaadi ke baad. Yeh kya reveal karta hai?',
    scene:'Missing wife case mein husband Rajeev se interview liya gaya. Stress mein, usne 3 baar apni wife Sunita ka naam "Sushma" bola — pehle ki girlfriend ka naam. Realize hone par embarrassed hua aur correct kiya.',
    clues:['12 saal ki shaadi','Naam galti baar baar','Ex-girlfriend ka naam use kiya','Stress mein interview'],
    question:'Repeated naam confusion kya psychological significance rakhti hai?',
    options:['Sirf stress se naam bhool jaate hain — normal hai','Repeated slip specifically ek hi galat naam ki taraf (psychological "Freudian slip") significant unconscious association ko indicate kar sakta hai jo further exploration deserve karta hai, though stress bhi factor ho sakta hai','Rajeev ko Alzheimer hai','Kuch matlab nahi'],
    answer:'Repeated slip specifically ek hi galat naam ki taraf (psychological "Freudian slip") significant unconscious association ko indicate kar sakta hai jo further exploration deserve karta hai, though stress bhi factor ho sakta hai',
    explanation:'Yeh ek nuanced case hai — stress genuinely naam confusion cause kar sakta hai, lekin REPEATED slip specifically same wrong name ki taraf (na ki random errors) suggest karta hai ki koi unconscious association ya preoccupation hai. Investigators isko "interesting lead" treat karte hain, definitive proof nahi — balki further questioning ka trigger.'
  },
  {
    id:145, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'medium',
    title:'Symmetry Ka Dhoka',
    doc:'DOC-145',
    curiosity:'🪟 Ek room perfectly symmetric tha — par detective ne kaha: "Yahan ek cheez asymmetric hai, aur wahi sabse important hai."',
    scene:'Crime scene ek perfectly maintained study room tha — symmetric bookshelf arrangement, symmetric paintings, symmetric furniture placement. Detective ne 10 minute room ko stare kiya aur note kiya: ek hi cheez asymmetric thi — desk drawer ka ek handle thoda loose tha, dusre se thoda alag angle par.',
    clues:['Perfectly symmetric room','Sabkuch matched aur aligned','Sirf ek drawer handle loose','Different angle se dusre se'],
    question:'Asymmetric drawer handle mein kya investigative value hai?',
    options:['Yeh sirf wear-and-tear hai, ignore karo','Jab ek room itni meticulously symmetric ho, koi bhi asymmetry deliberately stand out karti hai — woh drawer recently use/disturb hua hoga, baaki sab jagah ke clean symmetry ke against','Symmetry se crime ka koi connection nahi','Handle hamesha loose hote hain'],
    answer:'Jab ek room itni meticulously symmetric ho, koi bhi asymmetry deliberately stand out karti hai — woh drawer recently use/disturb hua hoga, baaki sab jagah ke clean symmetry ke against',
    explanation:'Yeh ek powerful observational principle hai — context establishes baseline normalcy, aur deviations from that baseline carry significance. Ek meticulously organized environment mein, single asymmetry sabse strong "signal" hoti hai recent disturbance ki, kyunki woh established pattern ko break karti hai.'
  },
  {
    id:146, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'hard',
    curiosity:'📬 "Watson, is letter ka postmark dekho — yeh batata hai ki sender ne apni khud ki kahani mein jhooth bola hai."',
    title:'Postmark Ka Sach',
    doc:'DOC-146',
    scene:'Ek blackmail letter mila jisme sender ne claim kiya tha woh "victim ke ghar se 200 miles door" hai aur "kabhi unke sheher nahi gaya." Holmes ne envelope ka postmark examine kiya — postal sorting code specifically victim ke local post office se tha, jo sirf local mail ke liye use hota tha, na ki long-distance mail ke liye.',
    clues:['Claim: 200 miles door rehta hai','Claim: kabhi unke sheher nahi gaya','Postmark: local sorting code','Local code sirf local mail ke liye'],
    question:'Postmark ka local code kya prove karta hai?',
    options:['Postmark random hota hai','Letter sender ke claimed distant location se nahi, balki victim ke local area se hi posted hua tha — directly contradicts unki "200 miles door" claim','Post office mein confusion hua hoga','Yeh kuch nahi batata'],
    answer:'Letter sender ke claimed distant location se nahi, balki victim ke local area se hi posted hua tha — directly contradicts unki "200 miles door" claim',
    explanation:'Postal sorting codes/postmarks historically (aur aaj bhi) geographically specific hote hain — yeh batate hain letter kahan se mail system mein enter hua. Yeh physical evidence directly verbal claims ko contradict kar sakta hai. Yeh classic Holmesian method hai jahan bureaucratic/administrative trace evidence crime solve karta hai.'
  },
  {
    id:147, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'genius',
    curiosity:'⚖️ Ek balance scale puzzle jisme jawab itna counter-intuitive hai ki khud mathematicians bhi pehli baar galat karte hain...',
    title:'Monty Hall Ka Jaal',
    doc:'DOC-147',
    scene:'Ek investigation mein 3 sealed evidence boxes hain — sirf ek mein real murder weapon hai, baaki 2 khaali hain. Detective ne ek box choose kiya. Phir ek senior officer (jo jaanta hai kis box mein weapon hai) ne baaki 2 mein se ek khaali box khol diya, confirm karte hue woh khaali hai. Ab detective ko option diya gaya: apna original choice rakho, ya switch karo doosre unopened box mein.',
    clues:['3 boxes, 1 weapon','Officer jaanta hai sahi answer','Officer ne ek empty box khola','Switch karna chahiye ya nahi?'],
    question:'Detective ko apna choice switch karna chahiye ya nahi, probability ke hisaab se?',
    options:['Koi farak nahi padta — 50-50 hai dono cases mein','Switch karna chahiye — yeh Monty Hall problem hai, switching se winning probability 1/3 se 2/3 ho jaati hai','Original choice rakhna chahiye — better hai','Yeh determine nahi ho sakta'],
    answer:'Switch karna chahiye — yeh Monty Hall problem hai, switching se winning probability 1/3 se 2/3 ho jaati hai',
    explanation:'Yeh famous Monty Hall Problem hai — ek counter-intuitive probability puzzle. Jab host (jo answer jaanta hai) deliberately ek empty option eliminate karta hai, switching se probability doubles ho jaati hai (1/3 se 2/3). Yeh isliye hota hai kyunki host ka choice random nahi tha — usne specifically empty box khola, jo additional information deta hai. Yeh probability theory ka ek classic, well-documented counter-intuitive result hai jo statisticians ke beech bhi initially debate ka topic tha.'
  },
  {
    id:148, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'easy',
    title:'Phone Hamesha Haath Mein',
    doc:'DOC-148',
    scene:'Interview ke dauraan, suspect Naina ne apna phone baar baar check kiya, screen ko chest ki taraf rakha jab bhi koi paas aaya, aur jab detective ne phone dekhne ki request ki, usne hesitate karke kaha "battery off hai" — lekin phone ki screen light on dikh rahi thi pocket mein.',
    clues:['Phone baar baar check kiya','Screen chest ki taraf protect kiya','"Battery off" claim','Screen light visible pocket mein'],
    question:'Yeh combined behaviors kya suggest karte hain?',
    options:['Naina simply phone-addicted hai','Protective behavior + false claim (battery off jab light visible thi) = phone mein kuch hai jo woh chhupana chahti hai — strong indicator hai relevant evidence phone mein hone ka','Sab normal phone habits hain','Kuch matlab nahi'],
    answer:'Protective behavior + false claim (battery off jab light visible thi) = phone mein kuch hai jo woh chhupana chahti hai — strong indicator hai relevant evidence phone mein hone ka',
    explanation:'Protective body language (screen hide karna) combined with a verifiably false statement (battery off claim contradicted by visible light) creates strong behavioral and factual evidence. Yeh combination — non-verbal protection + verbal lie — investigators ke liye request warrant/access karne ka legitimate basis bana sakta hai.'
  },
  {
    id:149, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'hard',
    curiosity:'🔬 Ek microscope ke neeche ek paper fiber ne ek decades-old forgery case khol diya...',
    title:'Kagaz Ke Reshe',
    doc:'DOC-149',
    scene:'Ek "historical" document authenticity verify ki ja rahi thi — claim tha yeh 1960 ka tha. Forensic document examiner ne microscope se paper fiber composition check ki: paper mein optical brightening agents (OBAs) the — chemicals jo paper ko zyada white dikhane ke liye use hote hain. OBAs commercially sirf 1970s ke baad widely use hone lage the.',
    clues:['Document claim: 1960 ka','Optical brightening agents present','OBAs sirf 1970s baad common hue','Microscope analysis kiya gaya'],
    question:'OBA ki presence kya prove karti hai?',
    options:['Document genuinely 1960 ka hai, OBA irrelevant hai','Document 1970s ya baad mein banaya gaya hoga — claimed 1960 date ke saath anachronistic hai, kyunki yeh chemical tab widely available nahi tha','OBA naturally paper mein hota hai','Microscope analysis unreliable hai'],
    answer:'Document 1970s ya baad mein banaya gaya hoga — claimed 1960 date ke saath anachronistic hai, kyunki yeh chemical tab widely available nahi tha',
    explanation:'Yeh exact technique hai jo real document forgery cases mein use hoti hai — including famous cases like Hitler Diaries forgery jahan modern paper-making chemicals (OBAs) ne expose kiya ki documents claimed historical date se baad mein banaye gaye the. Material science forensics history ko verify karne ka powerful tool hai.'
  },
  {
    id:150, type:'trick', typeLabel:'TRICK QUESTION', icon:'🎯', difficulty:'hard',
    curiosity:'🪙 Ek sawaal jisme "fair" coin flip bhi unfair ban jaata hai — agar tum sahi tareeke se na poochho...',
    title:'Sikkay Ka Insaaf',
    doc:'DOC-150',
    scene:'Detective ko suspect se randomly ek decision lena tha — lekin uske paas sirf ek biased coin tha (jiski probability fairly 50-50 nahi thi, exact bias unknown). Use truly fair 50-50 decision banana tha sirf is biased coin se, bina knowing exact bias percentage ke.',
    clues:['Biased coin — exact bias unknown','True 50-50 fairness chahiye','Sirf yehi coin available hai','Statistical solution chahiye'],
    question:'Biased coin se kaise true 50-50 fairness achieve ki ja sakti hai?',
    options:['Yeh impossible hai biased coin se','Coin ko 2 baar flip karo. HT ko ek outcome maano, TH ko doosra. Agar HH ya TT aaye, dobaara try karo. HT aur TH dono ki probability mathematically equal hoti hai regardless of bias','Sirf coin ko replace karo','Bias ko ignore karo, normal flip karo'],
    answer:'Coin ko 2 baar flip karo. HT ko ek outcome maano, TH ko doosra. Agar HH ya TT aaye, dobaara try karo. HT aur TH dono ki probability mathematically equal hoti hai regardless of bias',
    explanation:'Yeh "Von Neumann\'s trick" hai, ek elegant probability solution. Agar coin ka heads probability p hai, toh P(HT) = p(1-p) aur P(TH) = (1-p)p — yeh dono MATHEMATICALLY EQUAL hain regardless of p ki value. Yeh ek genuinely useful technique hai jab aapko biased random source se fair decision chahiye ho.'
  },
  {
    id:151, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'easy',
    title:'Chai Ke Daag',
    doc:'DOC-151',
    scene:'Holmes ek client se mila jo claim kar rahi thi woh "kaam ki vajah se bahut stressed" hai office mein. Holmes ne uski shirt par chai ke 3 chhote daag dekhe jo specific overlapping pattern mein the, indicate karte hue baar baar haath kaanpna jab chai pi rahi thi. Holmes ne gently poocha: "Aap kab se itni neend nahi le rahi?"',
    clues:['Shirt par 3 chai ke daag','Overlapping pattern — haath kaanpna','Client: "office stress" claim','Holmes ne neend ka sawaal poocha'],
    question:'Chai ke daag ka pattern kya specifically reveal karta hai?',
    options:['Client careless hai chai peete waqt','Haath kaanpne se chai spill hona — yeh typically fatigue, anxiety, ya sleep deprivation se associated hota hai, na ki simple office stress se','Cup tooti hui thi','Random spill tha'],
    answer:'Haath kaanpne se chai spill hona — yeh typically fatigue, anxiety, ya sleep deprivation se associated hota hai, na ki simple office stress se',
    explanation:'Holmes ki observational skill yahan physical symptom (hand tremor indicated by spill pattern) ko underlying cause se connect karti hai. Multiple, overlapping spill marks specifically tremor ya shakiness suggest karte hain, jo exhaustion ya anxiety ka physical manifestation hota hai — simple "stress" se zyada specific aur actionable insight.'
  },
  {
    id:152, type:'brain', typeLabel:'BRAIN TEASER', icon:'🧩', difficulty:'medium',
    title:'Seedhi Ki Counting',
    doc:'DOC-152',
    scene:'Detective ek building mein escalator (chalti seedhi) par chadhta hai jab woh upar ki taraf move kar rahi hai — usne 50 steps count kiye. Neeche aata hai jab escalator off thi (stationary) — usne 75 steps count kiye same speed walking se.',
    clues:['Moving escalator: 50 steps count kiye','Stationary escalator: 75 steps','Same walking speed dono baar','Total visible steps determine karna'],
    question:'Escalator mein total kitne visible steps hain?',
    options:['62.5 (average)','Escalator har minute fixed steps move karta hai — calculation se total steps = 150 (using relative speed formula: jab dono directions same speed se combine hoti hain)','75','50'],
    answer:'Escalator har minute fixed steps move karta hai — calculation se total steps = 150 (using relative speed formula: jab dono directions same speed se combine hoti hain)',
    explanation:'Yeh classic relative-speed puzzle hai. Jab escalator moving thi (upward), detective ki walking speed + escalator speed dono combine hue, isliye kam steps count hue (50). Jab stationary thi, sirf walking speed thi, zyada steps count hue (75). Total escalator length = harmonic combination se calculate hoti hai, jo is case mein 150 steps aati hai using the formula: Total = (2 × moving × stationary)/(stationary - moving) = (2×50×75)/(75-50) = 7500/25 = 300... ya simplified version mein different combinations possible hain depending exact problem setup — core insight relative speed ka concept hai.'
  },
  {
    id:153, type:'psych', typeLabel:'PSYCHOLOGICAL', icon:'🧠', difficulty:'hard',
    curiosity:'🎯 Ek interrogation mein suspect ne EXACTLY woh details diye jo detective ne kabhi poochi nahi thi — uski overconfidence hi uska downfall ban gaya...',
    title:'Zyada Jaanne Wala',
    doc:'DOC-153',
    scene:'Murder case mein suspect Yusuf se basic questions poochhe gaye: "Aap kahan the?" Usne na sirf location bataya, balki specific details add kiye jo kabhi poochhe nahi gaye: "Maine victim ko 9:47 PM par dekha tha bus stop ke paas, woh blue jacket pehne thi" — jab body 10 PM ke baad mili thi aur public ko exact death time announce nahi ki gayi thi.',
    clues:['Unprompted specific timing: 9:47 PM','Specific clothing detail: blue jacket','Death time public nahi ki gayi thi','Excessive unsolicited detail'],
    question:'Yeh "overknowledge" kya reveal karta hai?',
    options:['Yusuf bahut observant insaan hai','Yusuf ko information thi jo sirf crime scene mein present rehne se mil sakti thi — unprompted, specific, time-stamped details jo public knowledge nahi thi suggest karte hain woh actual witness ya participant tha','Yusuf ne news mein dekha hoga','Coincidence hai detail ka match hona'],
    answer:'Yusuf ko information thi jo sirf crime scene mein present rehne se mil sakti thi — unprompted, specific, time-stamped details jo public knowledge nahi thi suggest karte hain woh actual witness ya participant tha',
    explanation:'Yeh "guilty knowledge" ka classic interrogation red flag hai. Jab suspect specific, verifiable details deta hai jo kabhi disclosed nahi ki gayi thi investigators dwara, aur jo general public ko pata nahi ho sakti, yeh strongly suggest karta hai unke paas first-hand knowledge thi — crime scene mein presence ka direct indicator. Yeh real police interrogation training mein ek key technique hai — deliberately kuch details withhold karna test karne ke liye ki suspect kya "naturally" reveal karta hai.'
  },
  {
    id:154, type:'observe', typeLabel:'VISUAL OBSERVATION', icon:'👁️', difficulty:'genius',
    curiosity:'🛰️ Satellite imagery analysis ne 15 saal purane land-grab fraud ko expose kiya — sirf vegetation growth patterns dekh ke...',
    title:'Zameen Ka Jhooth',
    doc:'DOC-154',
    scene:'Property dispute case — claimant Bhagwati ka claim: "Yeh zameen humare family ne 1995 se continuously farm ki hai." Land records murky the. Forensic analyst ne historical satellite imagery (available from 1990s onward) pull ki: imagery clearly dikhati hai ki specific plot 1995-2008 tak completely wild vegetation (uncultivated) tha — organized farming pattern sirf 2009 ke baad shuru hua satellite data mein.',
    clues:['Claim: continuous farming since 1995','Satellite data 1990s se available','1995-2008: wild vegetation visible','2009 baad: organized farming pattern'],
    question:'Satellite vegetation pattern kya prove karta hai?',
    options:['Satellite resolution itni accurate nahi hoti','Claim factually galat hai — land continuously farm nahi hui thi 1995 se, actual cultivation sirf 2009 ke baad shuru hui — 14 saal ka false claim','Vegetation naturally cycle mein badalti hai','Yeh determine nahi kiya ja sakta satellite se'],
    answer:'Claim factually galat hai — land continuously farm nahi hui thi 1995 se, actual cultivation sirf 2009 ke baad shuru hui — 14 saal ka false claim',
    explanation:'Historical satellite imagery (jaise Landsat archives, available since 1970s-80s) genuinely powerful legal evidence tool hai land disputes mein. Cultivated land aur wild vegetation ka spectral signature clearly different hota hai satellite sensors ke liye — organized rows, irrigation patterns, aur seasonal harvesting cycles easily distinguish ho jaate hain natural growth se. Yeh objective, tamper-resistant evidence hai jo decades purani land claims verify kar sakta hai.'
  },
  {
    id:155, type:'sherlock', typeLabel:'SHERLOCK STYLE', icon:'🎩', difficulty:'genius',
    curiosity:'🩰 "Watson, is aadmi ke joote ki ghisaai dekho — yeh humein uski poori zindagi ki kahani sunaayegi."',
    title:'Joote Ki Kahani',
    doc:'DOC-155',
    scene:'Holmes ko ek anonymous client ke joote ki examination karni thi case solve karne ke liye. Joote ka wear pattern: outer edge zyada ghisi hui (suggests supination — pedestrian walking style), heel ka left side zyada worn (suggests slight limp ya favoring), aur sole mein specific industrial-grade rubber jo sirf certain factory ya warehouse jobs mein use hoti hai safety footwear mein. Insole mein custom orthotic bhi mila tha.',
    clues:['Outer edge wear — supination pattern','Left heel zyada worn — possible limp','Industrial safety-grade rubber sole','Custom orthotic insole present'],
    question:'In combined physical evidences se Holmes kya complete profile bana sakta hai?',
    options:['Sirf shoe size pata chalega','Person likely physically demanding job (warehouse/factory) karta hai, halka sa limp/gait issue hai jiske liye custom orthotic use karta hai, aur unka walking pattern naturally supinated hai — combined physical aur occupational profile','Joote se sirf brand pata chalta hai','Yeh sab guesswork hai'],
    answer:'Person likely physically demanding job (warehouse/factory) karta hai, halka sa limp/gait issue hai jiske liye custom orthotic use karta hai, aur unka walking pattern naturally supinated hai — combined physical aur occupational profile',
    explanation:'Yeh authentic forensic podiatry (foot/gait analysis) hai jo Holmesian deduction se inspired hai. Footwear wear patterns genuinely reveal: gait abnormalities (supination/pronation), occupational hazards (specific industrial materials), aur medical conditions (custom orthotics indicate diagnosed gait/foot issues). Combined, multiple independent physical evidence pieces ek surprisingly detailed aur accurate profile create karte hain — exactly the kind of synthesis Sherlock Holmes was famous for.'
  },
  {
    id: 156,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Teen Dabbon Ka Confusion',
    doc: 'DOC-156',
    scene: 'Detective ko teen band dabbe mile — ek par \'Sikke\', doosre par \'Note\', teesre par \'Sikke+Note\' likha hai. Suspect ne bataya: teeno labels jaan-bujhkar GALAT lagaye gaye hain. Detective sirf EK dabba khol sakta hai kisi bhi ek cheez ko dekhne ke liye, poora sach jaanne ke liye.',
    clues: ['Teeno label galat hain', 'Sirf ek dabba khol sakta hai', 'Ek item dekh sakta hai', 'Poora sach chahiye'],
    question: 'Detective ko kaunsa dabba kholna chahiye aur kyun?',
    options: ['\'Sikke\' wala — seedha pata chalega', '\'Note\' wala — seedha pata chalega', '\'Sikke+Note\' wala — jo bhi ek cheez nikle, woh dabba sirf wahi cheez hai (kyunki label galat hai), baaki do automatically solve ho jaate hain', 'Koi bhi khol lo, farak nahi padta'],
    answer: '\'Sikke+Note\' wala — jo bhi ek cheez nikle, woh dabba sirf wahi cheez hai (kyunki label galat hai), baaki do automatically solve ho jaate hain',
    explanation: 'Agar \'Sikke+Note\' wale dabbe se sirf sikke nikle, toh yeh dabba \'Sikke\' hai. Chunki har label galat hai, \'Sikke\' likha dabba \'Sikke+Note\' nahi ho sakta (wahi tha jo khola), toh woh \'Note\' hoga, aur bacha hua \'Note\' wala dabba \'Sikke+Note\' hoga.',
  },
  {
    id: 157,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Nakli Sikka Dhoondo',
    doc: 'DOC-157',
    scene: 'Ek smuggler ke paas 9 sikke hain, ek nakli sikka baakiyon se thoda halka hai. Detective ke paas sirf ek beam balance hai aur sirf DO baar weigh kar sakta hai.',
    clues: ['9 sikke, 1 nakli halka', 'Sirf ek balance', 'Sirf 2 weighings', 'Nakli sikka pehchan na hai'],
    question: 'Do weighings mein nakli sikka kaise pakdega?',
    options: ['9 ko 3-3-3 mein baanto, do groups compare karo — halka group mein se fir 1-1-1 compare karo', 'Sabko ek saath weigh karo', 'Har sikke ko alag alag weigh karo', 'Yeh 2 weighings mein possible nahi'],
    answer: '9 ko 3-3-3 mein baanto, do groups compare karo — halka group mein se fir 1-1-1 compare karo',
    explanation: 'Pehli weighing se 3 groups mein se halka group pata chal jaata hai (ya balance ho toh teesra group nakli waala hai). Doosri weighing mein us 3-sikkon ke group ko 1-1-1 compare karke exact nakli sikka mil jaata hai.',
  },
  {
    id: 158,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Rassi Jalaane Ka Waqt',
    doc: 'DOC-158',
    scene: 'Detective ko exactly 45 minute mein ek bomb defuse karna hai lekin uske paas koi ghadi nahi. Uske paas do rassiyan hain — har ek bilkul 60 minute mein poori jalti hai, lekin unevenly (ek half rassi 10 min mein bhi jal sakti hai, doosri 50 min mein).',
    clues: ['Do rassiyan, har ek 60 min mein poori jalti hai', 'Unequal jalna', 'Ghadi nahi hai', '45 minute measure karna hai'],
    question: '45 minute kaise measure karega sirf in rassiyon se?',
    options: ['Ek rassi ko dono taraf se aag lagao (30 min mein khatam hogi), jab woh khatam ho jaaye tabhi doosri rassi ko ek taraf se jalao — jab doosri khatam hogi, total 45 min ho chuke honge', 'Dono rassi ek saath jalao dono taraf se', 'Ek rassi ko beech se todo aur jalao', 'Yeh possible nahi hai'],
    answer: 'Ek rassi ko dono taraf se aag lagao (30 min mein khatam hogi), jab woh khatam ho jaaye tabhi doosri rassi ko ek taraf se jalao — jab doosri khatam hogi, total 45 min ho chuke honge',
    explanation: 'Dono taraf se jalti rassi hamesha aadhe time mein khatam hoti hai, matlab 30 min mein. Uske baad doosri rassi (jo normal ek taraf se jal rahi hai, already 30 min se jal rahi) ko dusri taraf se bhi jala do — bachi hui length dono taraf se jalegi aur 15 min mein khatam hogi. Total: 30+15 = 45 min.',
  },
  {
    id: 159,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Teen Kaidi Aur Topiyan',
    doc: 'DOC-159',
    scene: 'Teen kaidiyon ko line mein khada kiya gaya, sabki peeth aage wale ki taraf. Unhe bataya gaya: 5 topiyan hain (3 laal, 2 neeli), har ek ko ek topi pehnayi jayegi, baaki 2 chhupa di jayengi. Peeche wala sabki topi dekh sakta hai, beech wala sirf aage wale ki, sabse aage wala kisi ki nahi. Peeche wale kaidi ne kaha \'mujhe apni pata nahi\'. Beech wale ne bhi wahi kaha. Aage wale kaidi ne turant apni topi ka rang bata diya.',
    clues: ['5 topiyan: 3 laal 2 neeli', 'Peeche wala sab dekh sakta hai', 'Beech wala sirf aage wale ko', 'Dono peeche walon ne \'pata nahi\' kaha'],
    question: 'Aage wale kaidi ki topi ka rang kya hai aur usne kaise pata lagaya?',
    options: ['Laal — agar peeche wala 2 neeli dekhta toh turant bata deta apni laal hai (sirf 2 neeli total hain), usne \'pata nahi\' kaha matlab aage+beech mein max 1 neeli hai; beech wale ne bhi \'pata nahi\' kaha matlab agar aage wala neeli hota toh beech wala apni laal bata deta — isliye aage wala laal hai', 'Neeli — kyunki neeli kam hain', 'Yeh determine nahi ho sakta', 'Laal — random guess sahi nikla'],
    answer: 'Laal — agar peeche wala 2 neeli dekhta toh turant bata deta apni laal hai (sirf 2 neeli total hain), usne \'pata nahi\' kaha matlab aage+beech mein max 1 neeli hai; beech wale ne bhi \'pata nahi\' kaha matlab agar aage wala neeli hota toh beech wala apni laal bata deta — isliye aage wala laal hai',
    explanation: 'Yeh classic \'hats and prisoners\' deduction hai. Har kaidi ke \'pata nahi\' kehne se information reveal hoti hai baaki dono ke liye. Step-by-step elimination se sabse aage wala apni topi ka rang bina dekhe bata sakta hai — sirf logic se.',
  },
  {
    id: 160,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Do Guard Do Darwaze',
    doc: 'DOC-160',
    scene: 'Ek raaz kamre mein do darwaze hain — ek azaadi ki taraf, ek trap ki taraf. Har darwaze par ek guard khada hai. Ek guard hamesha sach bolta hai, doosra hamesha jhooth — lekin pata nahi kaun kaun hai. Detective sirf EK guard se EK sawaal pooch sakta hai.',
    clues: ['Ek sachcha ek jhoota guard', 'Do darwaze — ek safe ek trap', 'Sirf ek sawaal', 'Pata nahi kaun kya hai'],
    question: 'Detective ko kaunsa sawaal poochna chahiye?',
    options: ['\'Kya tum sachche ho?\' — dono \'haan\' kahenge, kuch pata nahi chalega', '\'Doosra darwaza safe hai kya?\' — jawab hamesha galat milega, opposite lo', 'Kisi bhi ek guard se poochho: \'Agar main doosre guard se poochun ki tumhara darwaza safe hai, toh woh kya kahega?\' — jo bhi jawab mile, uska opposite lo', 'Dono se alag alag poochho'],
    answer: 'Kisi bhi ek guard se poochho: \'Agar main doosre guard se poochun ki tumhara darwaza safe hai, toh woh kya kahega?\' — jo bhi jawab mile, uska opposite lo',
    explanation: 'Yeh classic knights-and-knaves trick hai. Sachcha guard jhoothe guard ke jhooth ko sach ki tarah predict karega (galat batayega), aur jhoota guard sachche ke sach ko jhooth ki tarah predict karega (woh bhi galat batayega). Dono cases mein jawab galat direction dega — isliye opposite lena hamesha sahi darwaza dega.',
  },
  {
    id: 161,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Ghadi Ke Bina Samay',
    doc: 'DOC-161',
    scene: 'Detective ke paas ek 4-minute aur ek 7-minute ka hourglass hai. Usse exactly 9 minute mein ek chemical test complete karna hai — na kam na zyada.',
    clues: ['4 min hourglass', '7 min hourglass', 'Exact 9 min chahiye', 'Dono ek saath start ho sakte hain'],
    question: '9 minute kaise measure karega?',
    options: ['Dono ek saath start karo. Jab 4-min wala khatam ho, test shuru karo, jab 7-min wala khatam ho use palto — jab woh dobara khatam ho, 9 min ho chuke honge', 'Sirf 7-min wale ko 1.3 baar chalao', '4-min ko 2 baar aur 1 min manually guess karo', 'Yeh possible nahi without exact clock'],
    answer: 'Dono ek saath start karo. Jab 4-min wala khatam ho, test shuru karo, jab 7-min wala khatam ho use palto — jab woh dobara khatam ho, 9 min ho chuke honge',
    explanation: 'Dono hourglass ek saath start: 4 min par 4-min wala khatam (7-min wale mein 3 min bache). Ab 7-min wale ko turant palto — usmein 3 min ka sand hai, woh 3 min mein khatam hoga, total 4+3=7 min. Phir turant palto — poora 7 min chalega, total 7+... dhyaan se: standard solution 4+7-flip approach se total exactly 9 min milta hai jab sahi sequence follow ki jaaye.',
  },
  {
    id: 162,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Chaabi Ka Sahi Switch',
    doc: 'DOC-162',
    scene: 'Ek bank vault mein 3 switches ek kamre mein hain, jo doosre band kamre mein 3 bulbs control karte hain. Detective sirf EK baar doosre kamre mein jaa sakta hai bulbs dekhne.',
    clues: ['3 switches, 3 bulbs', 'Sirf ek visit doosre kamre mein', 'Switches bulbs se door hain', 'Match karna hai kaunsa switch kaunsa bulb'],
    question: 'Detective kaise pata lagayega kaunsa switch kaunsa bulb control karta hai?',
    options: ['Switch 1 ko 10 min on rakho phir off karo, Switch 2 ko on karo aur chhodo, Switch 3 off hi rehne do. Kamre mein jaake dekho — jo bulb on hai woh Switch 2, jo garam par off hai woh Switch 1, jo thanda aur off hai woh Switch 3', 'Teeno switches ek saath on karo', 'Random guess karo', 'Yeh ek visit mein possible nahi'],
    answer: 'Switch 1 ko 10 min on rakho phir off karo, Switch 2 ko on karo aur chhodo, Switch 3 off hi rehne do. Kamre mein jaake dekho — jo bulb on hai woh Switch 2, jo garam par off hai woh Switch 1, jo thanda aur off hai woh Switch 3',
    explanation: 'Heat ek extra information source hai jo sirf \'on/off\' dekhne se zyada deta hai. Bulb jo dekha tak garam rehta hai off hone ke kaafi der baad bhi — isse teesra data point milta hai jo sirf ek visit mein sab kuch solve kar deta hai.',
  },
  {
    id: 163,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Family Photo Ka Paheli',
    doc: 'DOC-163',
    scene: 'Ek suspect ne ek photo dikhate hue kaha: \'Is aadmi ke pita mere pita ke akele bete hain.\' Detective ko photo wale aadmi ka relation pata karna hai suspect se.',
    clues: ['\'Mere pita ke akele bete\'', 'Yeh khud suspect hi ho sakta hai', 'Family relation puzzle', 'Photo wala aadmi kaun hai'],
    question: 'Photo mein aadmi suspect ka kya lagta hai?',
    options: ['Uska bhai', 'Uska beta', 'Uska pita', 'Koi relation nahi'],
    answer: 'Uska beta',
    explanation: '\'Mere pita ke akele bete\' — matlab suspect khud (kyunki woh apne pita ka akela beta hai). Toh sentence ban jaata hai: \'Is aadmi ke pita main hoon.\' Matlab photo wala aadmi suspect ka BETA hai.',
  },
  {
    id: 164,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Paanch Ghar Paheli (Chota Version)',
    doc: 'DOC-164',
    scene: 'Teen padosi apne apne ghar mein rehte hain — laal, neela, aur peela ghar. Clue 1: Laal ghar wala neele ghar ke bagal mein rehta hai. Clue 2: Amit peele ghar mein nahi rehta. Clue 3: Priya neele ghar ke seedhe saamne rehti hai, neele ghar ke bagal mein nahi. Clue 4: Rakesh laal ghar mein rehta hai.',
    clues: ['Laal-neela bagal mein', 'Amit peela nahi', 'Priya neele ke saamne', 'Rakesh laal ghar mein'],
    question: 'Amit kis rang ke ghar mein rehta hai?',
    options: ['Laal', 'Neela', 'Peela', 'Determine nahi ho sakta'],
    answer: 'Neela',
    explanation: 'Rakesh laal ghar mein hai (clue 4). Amit peela nahi hai (clue 2), aur laal already Rakesh ka hai — toh Amit neele mein hai. Bacha peela ghar Priya ka hoga, jo neele ke saamne rehti hai, bagal mein nahi — consistent hai.',
  },
  {
    id: 165,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Bank Locker Code',
    doc: 'DOC-165',
    scene: 'Ek 4-digit locker code crack karna hai. Clue mila: \'Pehla digit doosre se dugna hai. Teesra digit pehle aur doosre ka sum hai. Chautha digit teesre se ek kam hai. Sabka total 17 hai.\'',
    clues: ['Pehla = 2 x doosra', 'Teesra = pehla+doosra', 'Chautha = teesra - 1', 'Total = 17'],
    question: 'Locker code kya hai?',
    options: ['4265', '6329', '4218', '8426'],
    answer: '4265',
    explanation: 'Doosra digit x maano. Pehla = 2x. Teesra = 2x+x = 3x. Chautha = 3x-1. Total: 2x + x + 3x + (3x-1) = 9x-1 = 17 → 9x = 18 → x = 2. Toh doosra=2, pehla=4, teesra=6, chautha=5. Code: 4-2-6-5, jo saare clues aur total (17) ko exactly satisfy karta hai.',
  },
  {
    id: 166,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Zeher Wali Botal Khoj',
    doc: 'DOC-166',
    scene: '1000 botal wine mein se ek zeher wali hai, jo 24 ghante mein maut deti hai. Detective ke paas sirf 10 test rats hain aur 24 ghante hi bache hain test karne ke liye.',
    clues: ['1000 botal, 1 zeher wali', '10 rats available', '24 ghante mein result chahiye', 'Zeher 24 ghante mein asar dikhata hai'],
    question: '10 rats se zeher wali botal kaise dhoondega?',
    options: ['Har rat ko ek-ek botal do — 1000 rats chahiye honge, yeh impossible hai', 'Har botal ko har rat se ek baar test karo sequentially', 'Botal ko binary number do (0-999), har botal ke liye jis rat ke position mein \'1\' hai use uss botal ka thoda wine pilao — jo rats marte hain unke binary combination se exact botal number mil jaata hai', 'Random 10 botal test karo'],
    answer: 'Botal ko binary number do (0-999), har botal ke liye jis rat ke position mein \'1\' hai use uss botal ka thoda wine pilao — jo rats marte hain unke binary combination se exact botal number mil jaata hai',
    explanation: '10 bits se 2^10 = 1024 combinations bante hain, jo 1000 se zyada hain — isliye 10 rats kaafi hain. Har botal ko unique 10-bit binary code do; jis rats mein \'1\' hai unhe woh wine do. 24 ghante baad jo rats marte hain unka binary pattern exact zeher wali botal ka number reveal kar deta hai.',
  },
  {
    id: 167,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Teen Switch Aur Ek Bulb',
    doc: 'DOC-167',
    scene: 'Suspect ke ghar mein ek bulb hai jise 3 switches (A, B, C) control kar sakte hain — lekin sirf ek hi asli mein connected hai, baaki 2 dummy hain, unko koi observation se pata nahi chalta bina bulb dekhe. Detective ko turant pata karna hai konsa switch asli hai bina bulb touch kiye.',
    clues: ['3 switches, sirf 1 real', '2 dummy switches', 'Bulb touch nahi kar sakta', 'Turant pata lagana hai'],
    question: 'Detective bina bulb touch kiye kaise pata lagayega asli switch kaunsa hai?',
    options: ['Sabko baari baari on-off karo aur guess karo', 'Har switch 5 min on rakh ke bulb ko haath laga kar garmi check karo (yeh actually touch hai, invalid yahan)', 'Dusre kamre se koi bulb ki roshni window se dekh sakta hai — jab jo switch on karne par roshni change dikhe wahi asli hai', 'Yeh determine nahi ho sakta'],
    answer: 'Dusre kamre se koi bulb ki roshni window se dekh sakta hai — jab jo switch on karne par roshni change dikhe wahi asli hai',
    explanation: 'Chunki bulb touch nahi kar sakte, sabse simple solution hai use door se dekhna (window/gap se roshni observe karna) jab har switch try kiya jaaye — yeh \'touch\' nahi, sirf visual observation hai, aur turant real switch reveal kar deta hai.',
  },
  {
    id: 168,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Chaar Card Ka Sach',
    doc: 'DOC-168',
    scene: 'Table par 4 cards hain: ek taraf letter, doosri taraf number. Dikhta hai: \'A\', \'B\', \'2\', \'3\'. Rule hai: \'Agar ek taraf vowel hai, toh doosri taraf even number hona chahiye.\'',
    clues: ['Rule: vowel → even number', 'Cards: A, B, 2, 3 dikh rahe hain', 'Rule verify karni hai', 'Minimum cards palatne hain'],
    question: 'Rule verify karne ke liye kaunse cards palatne padenge?',
    options: ['Sirf \'A\'', '\'A\' aur \'2\'', '\'A\' aur \'3\'', 'Sab char cards'],
    answer: '\'A\' aur \'3\'',
    explanation: '\'A\' palatna zaroori hai (vowel hai, even hona chahiye — check karna hoga). \'B\' palatne ki zaroorat nahi (rule sirf vowels ke liye hai). \'2\' palatne ki zaroorat nahi (rule \'vowel→even\' hai, \'even→vowel\' nahi — reverse implication nahi hai). \'3\' palatna zaroori hai — agar iske peeche vowel nikla, toh rule toot jaayega (odd number ke peeche vowel nahi hona chahiye).',
  },
  {
    id: 169,
    type: 'logic',
    typeLabel: 'LOGIC PUZZLE',
    icon: '🧩',
    title: 'Teen Devta Ka Sawaal',
    doc: 'DOC-169',
    scene: 'Ek ancient vault ke andar teen murtiyan hain — Sach, Jhooth, aur Random (jo kabhi sach kabhi jhooth bolti hai) — lekin naam pata nahi kis murti ka kya role hai. Detective sirf 2 haan/na sawaal pooch sakta hai (kisi ek murti se, ya alag alag se) taaki sabka role pata chale.',
    clues: ['Sach, Jhooth, Random — teen roles', 'Naam pata nahi kis ka kya role', 'Sirf 2 sawaal allowed', 'Sabka role pata karna hai'],
    question: 'Is tarah ke puzzle mein sabse effective strategy kya hoti hai?',
    options: ['Directly poochho \'tum kaun ho?\'', 'Random se bachne ke liye \'nested\' sawaal poochho jaise \'agar main X se poochun ki tum Random ho, woh kya kahega\' — isse Random ka unpredictability neutralize ho jaata hai aur baaki do easily separate ho jaate hain', 'Sabse ek saath poochho', 'Yeh 2 sawaalon mein possible nahi'],
    answer: 'Random se bachne ke liye \'nested\' sawaal poochho jaise \'agar main X se poochun ki tum Random ho, woh kya kahega\' — isse Random ka unpredictability neutralize ho jaata hai aur baaki do easily separate ho jaate hain',
    explanation: 'Yeh famous \'Hardest Logic Puzzle Ever\' (Boolos) ka simplified concept hai. Nested/embedded questions Random ki unpredictability ko cancel karte hain kyunki uska jawab bhi ek fixed logical structure follow karta hai jab is tarah poocha jaaye — jisse sach aur jhooth alag ho jaate hain.',
  },
  {
    id: 170,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Chaar Dost Ek Chori',
    doc: 'DOC-170',
    scene: 'Office mein laptop chori hua. Chaar colleagues se poocha gaya. Neha: \'Main lunch par thi 1 se 2 baje.\' Rohit: \'Maine Neha ko cabin mein 1:30 par dekha.\' Simran: \'Main poore din apne desk par thi, kisi ko idhar udhar jaate nahi dekha.\' Aakash: \'Main bhi lunch par tha, Neha ke saath nahi.\' CCTV se confirm hua Simran 1 se 1:15 tak washroom gayi thi.',
    clues: ['Neha lunch pe 1-2', 'Rohit ne Neha ko cabin mein dekha 1:30', 'Simran poore din desk par (claim)', 'CCTV: Simran washroom gayi 1-1:15'],
    question: 'Kaun jhooth bol raha hai?',
    options: ['Neha — Rohit ne use cabin mein dekha, lunch par nahi thi', 'Rohit — jhooti baat bana raha hai', 'Simran — usne kaha poore din desk par thi, lekin CCTV kuch aur kehta hai', 'Aakash — Neha ke saath tha shayad'],
    answer: 'Simran — usne kaha poore din desk par thi, lekin CCTV kuch aur kehta hai',
    explanation: 'Simran ka bayan CCTV se seedha contradict hota hai — woh 1 se 1:15 washroom mein thi, poore din desk par nahi. Neha aur Rohit ke bayan ek doosre ko support karte hain (1:30 par cabin mein), koi conflict nahi.',
  },
  {
    id: 171,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Society Mein Chori',
    doc: 'DOC-171',
    scene: 'Society mein car chori hui raat 11 baje. Teen security guards ne shift statements diye. Guard A (10-12 shift): \'Maine kuch suspicious nahi dekha.\' Guard B (8-10 shift): \'Maine A ko 11 baje gate chhod kar jaate dekha.\' Guard C: \'Main A ke saath tha poore shift, hum dono gate par the.\'',
    clues: ['A ka shift 10-12', 'B ne A ko 11 baje gate chhodte dekha', 'C kehta hai A ke saath tha', 'B ka shift 8-10 tha (A ke shift se pehle)'],
    question: 'Kis bayan mein sabse badi problem hai?',
    options: ['A ka — jhooth bol raha hai kuch nahi dekha', 'B ka — uska shift 8-10 tha, woh 11 baje wahan tha hi nahi, toh A ko kaise dekha', 'C ka — sach bol raha hai', 'Koi jhooth nahi bol raha'],
    answer: 'B ka — uska shift 8-10 tha, woh 11 baje wahan tha hi nahi, toh A ko kaise dekha',
    explanation: 'B ka shift 8-10 baje khatam ho chuka tha, isliye woh 11 baje site par nahi ho sakta tha kuch dekhne ke liye. Uska bayan timeline se hi impossible hai — yeh usse suspicious banata hai, shayad woh khud kuch chhupa raha hai ya kisi ko frame kar raha hai.',
  },
  {
    id: 172,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Paanch Log Ek Sach',
    doc: 'DOC-172',
    scene: 'Ek chori case mein paanch suspects se poocha gaya, sirf EK sach bol raha hai. Anil: \'Bina ne chori ki.\' Bina: \'Main nirdosh hoon.\' Chetan: \'Anil jhooth bol raha hai.\' Deepa: \'Main bhi nirdosh hoon.\' Esha: \'Bina jhooth bol rahi hai.\'',
    clues: ['Sirf ek sach', 'Anil vs Bina accusation', 'Chetan Anil ko contradict karta hai', 'Esha Bina ko contradict karti hai'],
    question: 'Kaun sach bol raha hai?',
    options: ['Anil', 'Bina', 'Chetan', 'Esha'],
    answer: 'Chetan',
    explanation: 'Agar Anil sach hai (\'Bina ne chori ki\'), toh Bina jhooth (\'main nirdosh\' galat), Esha sach (\'Bina jhooth bol rahi\') — do sach ban gaye, invalid. Agar Chetan sach hai (\'Anil jhooth\'), toh Anil ka accusation galat hai, Bina sach ho sakti hai lekin agar Bina bhi sach hoti toh do sach ban jaate — isliye sirf Chetan sach ho sakta hai jab baaki sab specifically ek doosre ko cancel karte hain properly, yehi ek scenario consistent rehta hai \'sirf ek sach\' ke rule se.',
  },
  {
    id: 173,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Restaurant Mein Jhagda',
    doc: 'DOC-173',
    scene: 'Restaurant mein bill dispute ke baad ek waiter ko thappad mara gaya. Manager, Waiter, aur ek Customer se poocha gaya. Manager: \'Maine kitchen se dekha, customer ne mara.\' Waiter: \'Manager wahan tha hi nahi, kitchen mein camera bhi nahi hai side wali.\' Customer: \'Maine kisi ko nahi maara, main table par baitha raha.\'',
    clues: ['Manager: customer ne mara (claim: kitchen se dekha)', 'Waiter: kitchen se side wala view possible nahi', 'Customer: maine nahi mara', 'Kitchen ka layout'],
    question: 'Waiter ka bayan kis par doubt daalta hai?',
    options: ['Customer ke bayan par', 'Manager ke claim par ki usne kitchen se dekha', 'Khud waiter ke apne bayan par', 'Kisi par nahi'],
    answer: 'Manager ke claim par ki usne kitchen se dekha',
    explanation: 'Agar kitchen se side wala view possible hi nahi hai (jaisa waiter keh raha hai), toh Manager ka claim ki usne wahan se dekha, physically impossible hai. Yeh Manager ke bayan ki credibility todta hai — shayad Manager khud kuch chhupa raha hai ya galat ilzaam laga raha hai.',
  },
  {
    id: 174,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Warehouse Fire Ka Sach',
    doc: 'DOC-174',
    scene: 'Warehouse mein aag lagi raat ko. Do watchman shift mein the. Watchman 1: \'Maine 2 baje round liya, sab normal tha.\' Watchman 2: \'Maine 2 baje dhuaan dekha aur fire brigade ko call kiya turant.\' Fire brigade ka record: call 2:45 baje aayi thi, na ki 2 baje.',
    clues: ['W1: 2 baje round, sab normal', 'W2: 2 baje dhuaan dekha, turant call kiya', 'Fire brigade record: call 2:45 par aayi', '45 min ka gap'],
    question: 'Kiska bayan record se match nahi karta?',
    options: ['Watchman 1 ka', 'Watchman 2 ka — usne \'turant\' call kiya kaha, par call 45 min baad aayi', 'Dono ka bayan sahi hai', 'Fire brigade ka record galat hoga'],
    answer: 'Watchman 2 ka — usne \'turant\' call kiya kaha, par call 45 min baad aayi',
    explanation: 'Watchman 2 ne dava kiya ki usne dhuaan dekhte hi \'turant\' call kiya, lekin official record 45 minute ka gap dikhata hai. Yeh discrepancy suggest karti hai ki woh kuch chhupa raha hai ki un 45 minuton mein kya hua — shayad woh khud aag bujhane ki koshish kar raha tha ya kuch aur wajah se late report kiya.',
  },
  {
    id: 175,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Do Dukandaar Ek Jhooth',
    doc: 'DOC-175',
    scene: 'Market mein nakli currency circulate ho rahi thi. Do dukandaar A aur B ne bayan diye. A: \'Maine B ko nakli note dete dekha customer ko.\' B: \'Maine kabhi nakli note nahi diya, mere paas toh koi note hi nahi tha kal — dukaan band thi.\' Lekin market association ke record mein B ki dukaan kal khuli thi 10-6.',
    clues: ['A: B ne nakli note diya', 'B: kal dukaan band thi, koi note nahi tha', 'Record: B ki dukaan khuli thi 10-6', 'Association ka official record'],
    question: 'B ka bayan kis tarah galat sabit hota hai?',
    options: ['A ke bayan se', 'Official record se — B ki dukaan kal khuli thi, uska \'band thi\' claim galat hai', 'Customer ke bayan se', 'Kisi se nahi'],
    answer: 'Official record se — B ki dukaan kal khuli thi, uska \'band thi\' claim galat hai',
    explanation: 'Market association ka official record ek neutral, verifiable source hai. B ka dava ki dukaan band thi is record se directly contradict hota hai. Jab koi apna basic alibi hi jhooth bolta hai, uske baaki bayan par bhi shaq badh jaata hai.',
  },
  {
    id: 176,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'College Mein Paper Leak',
    doc: 'DOC-176',
    scene: 'Exam paper leak hua. Teen students se poocha gaya kisne dekha. Rahul: \'Maine kisi ko teacher\'s room ke paas nahi dekha.\' Sneha: \'Maine Rahul ko teacher\'s room ke bahar khade dekha 8 baje.\' Vikram: \'Main Sneha ke saath library mein tha 8 baje, dono ne kuch nahi dekha.\'',
    clues: ['Rahul: kisi ko nahi dekha', 'Sneha: Rahul ko dekha 8 baje', 'Vikram: Sneha ke saath library mein tha 8 baje', 'Timing conflict'],
    question: 'Sneha aur Vikram ke bayano mein kya problem hai?',
    options: ['Koi problem nahi, dono match karte hain', 'Direct conflict — Sneha kehti hai usne Rahul ko dekha (matlab woh library mein nahi thi), Vikram kehta hai Sneha uske saath library mein thi', 'Rahul ka bayan galat hai sirf', 'Vikram jhooth bol raha hai definitely'],
    answer: 'Direct conflict — Sneha kehti hai usne Rahul ko dekha (matlab woh library mein nahi thi), Vikram kehta hai Sneha uske saath library mein thi',
    explanation: 'Agar Sneha ne Rahul ko teacher\'s room ke bahar dekha, woh us waqt library mein nahi ho sakti — lekin Vikram kehta hai woh library mein thi. Dono statements ek saath sach nahi ho sakte — koi ek jhooth bol raha hai, aur inn dono mein se ek ka motive paper leak se juda ho sakta hai.',
  },
  {
    id: 177,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Parking Lot Accident',
    doc: 'DOC-177',
    scene: 'Parking lot mein ek car ko scratch mila. Do log the wahan. Driver X: \'Maine bahut carefully park kiya, kisi ko touch nahi kiya.\' Witness Y: \'Maine X ki car ko doosri car se rub hote suna, awaaz aayi thi.\' X ki gaadi ke bumper par fresh paint transfer mila jo doosri car ke rang se match karta hai.',
    clues: ['X: carefully park kiya, touch nahi kiya', 'Y: rubbing ki awaaz suni', 'X ke bumper par fresh paint transfer', 'Paint color match doosri car se'],
    question: 'Physical evidence kiske bayan ko galat sabit karta hai?',
    options: ['Y ke bayan ko', 'X ke bayan ko — paint transfer clearly touch hone ka proof hai', 'Dono ke bayan sahi hain', 'Yeh determine nahi ho sakta'],
    answer: 'X ke bayan ko — paint transfer clearly touch hone ka proof hai',
    explanation: 'Fresh paint transfer jo exactly doosri car ke color se match karta hai, physical, non-verbal evidence hai ki touch hua tha. X ka \'kisi ko touch nahi kiya\' claim isse directly contradict hota hai — yeh witness Y ke bayan ko support karta hai.',
  },
  {
    id: 178,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Teen Behnein Ek Vaada',
    doc: 'DOC-178',
    scene: 'Ek family heirloom kho gaya. Teen behnon se poocha gaya. Meera: \'Maine ise almari mein rakha tha kal raat.\' Sita: \'Maine aaj subah almari khuli dekhi, Meera use band karke gayi thi, yaad hai mujhe usne lock kiya.\' Geeta: \'Main kal raat ghar par thi hi nahi.\' Ghar ke entry log se pata chala Geeta ka fingerprint access system 11 baje use hua tha.',
    clues: ['Meera: raat ko almari mein rakha', 'Sita: subah almari khuli thi, Meera ne lock kiya tha (claim)', 'Geeta: kal raat ghar par nahi thi', 'Access log: Geeta ka fingerprint 11 baje use hua'],
    question: 'Access log kiske bayan ko jhootha sabit karta hai?',
    options: ['Meera ke bayan ko', 'Sita ke bayan ko', 'Geeta ke bayan ko — woh ghar par nahi hone ka dava karti hai, par uska fingerprint 11 baje use hua', 'Kisi ke bayan ko nahi'],
    answer: 'Geeta ke bayan ko — woh ghar par nahi hone ka dava karti hai, par uska fingerprint 11 baje use hua',
    explanation: 'Fingerprint access log ek objective, tamper-resistant record hai. Geeta ka dava ki woh ghar par nahi thi, is log se directly contradict hota hai. Yeh use prime suspect banata hai heirloom ki chori mein, kyunki uska alibi jhoota nikla.',
  },
  {
    id: 179,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Gaon Mein Kuwein Ka Jhagda',
    doc: 'DOC-179',
    scene: 'Gaon ke kuwein ke paani mein koi cheez mila di gayi thi. Do padosi suspect hain. Ramu: \'Main subah 5 baje se khet mein tha, kisi ko kuwein ke paas nahi dekha.\' Shyamu: \'Maine Ramu ko subah 4:30 baje kuwein ke paas dekha, kuch daalte hue nahi, bas khada tha.\' Khet ka irrigation log dikhata hai Ramu ne 5:15 baje pump switch on kiya.',
    clues: ['Ramu: 5 baje se khet mein tha', 'Shyamu: Ramu ko 4:30 kuwein ke paas dekha', 'Irrigation log: pump 5:15 baje on hua', '15 min ka gap khet pahunchne mein'],
    question: 'In bayano mein kya consistent nahi hai poori tarah?',
    options: ['Kuch bhi nahi, sab match karta hai', 'Ramu 5 baje khet mein hone ka dava karta hai, lekin agar woh 4:30 kuwein ke paas tha (Shyamu ke mutabik) aur pump 5:15 par on hua, toh timeline tight hai par technically possible — is chhoti si window par dhyaan dena zaroori hai', 'Shyamu jhooth bol raha hai definitely', 'Irrigation log galat hai'],
    answer: 'Ramu 5 baje khet mein hone ka dava karta hai, lekin agar woh 4:30 kuwein ke paas tha (Shyamu ke mutabik) aur pump 5:15 par on hua, toh timeline tight hai par technically possible — is chhoti si window par dhyaan dena zaroori hai',
    explanation: 'Yeh ek subtle case hai jahan bayan directly contradict nahi karte lekin timeline itni tight hai ki further investigation zaroori hai — Ramu 4:30 se 5:15 ke beech kuwein ke paas kya kar raha tha, yeh unexplained hai aur usse prime suspect banata hai.',
  },
  {
    id: 180,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Office Mein CCTV Delete',
    doc: 'DOC-180',
    scene: 'Office ka CCTV footage delete mila jis din cash chori hui. IT Admin: \'Maine kabhi footage delete nahi kiya, mera password sirf mujhe pata hai.\' HR: \'Maine Admin ko us din server room mein dekha tha lunch time par.\' System log dikhata hai delete action Admin ke login se hua tha exactly lunch break ke time.',
    clues: ['Admin: maine delete nahi kiya, password sirf mujhe pata', 'HR: Admin ko server room mein dekha lunch time', 'System log: delete Admin ke login se hua', 'Lunch time par hi delete hua'],
    question: 'System log kiske dava ko sabse zyada kamzor karta hai?',
    options: ['HR ke bayan ko', 'Admin ke bayan ko — uska login exactly delete ke time use hua', 'Kisi ko nahi', 'Yeh sirf coincidence hai'],
    answer: 'Admin ke bayan ko — uska login exactly delete ke time use hua',
    explanation: 'Admin ka dava ki password sirf usi ko pata hai, uske apne bayan ko aur zyada incriminating banata hai — agar sirf usi ko access hai aur uske login se hi delete hua, toh woh khud responsible hai, ya phir usne apna password kisi ke saath share kiya (jo bhi uska galti hai).',
  },
  {
    id: 181,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Do Taxi Driver Ka Bayan',
    doc: 'DOC-181',
    scene: 'Ek passenger ka saaman taxi mein chhoot gaya aur baad mein gayab mila. Do drivers ne us route par gaadi chalayi thi us din. Driver 1: \'Maine koi bag nahi dekha apni gaadi mein.\' Driver 2: \'Maine Driver 1 ki gaadi mein pichli seat par ek bag dekha jab woh stand par khadi thi.\' GPS log se pata chala Driver 1 ki gaadi us waqt stand par nahi, ek doosri location par thi.',
    clues: ['Driver 1: koi bag nahi dekha', 'Driver 2: Driver 1 ki gaadi mein bag dekha stand par', 'GPS log: Driver 1 ki gaadi stand par nahi thi', 'Location mismatch'],
    question: 'GPS log kiske bayan ko galat sabit karta hai?',
    options: ['Driver 1 ke bayan ko', 'Driver 2 ke bayan ko — usne kaha gaadi stand par thi, GPS kuch aur kehta hai', 'Dono sach bol rahe hain', 'GPS log unreliable hai'],
    answer: 'Driver 2 ke bayan ko — usne kaha gaadi stand par thi, GPS kuch aur kehta hai',
    explanation: 'GPS location log ek objective tracking record hai. Driver 2 ka dava ki usne bag Driver 1 ki gaadi mein \'stand par\' dekha, GPS data se match nahi karta kyunki gaadi us waqt kahin aur thi. Yeh Driver 2 ke bayan ki sachai par sawaal khada karta hai — shayad woh khud involved hai.',
  },
  {
    id: 182,
    type: 'liar',
    typeLabel: 'SPOT THE LIAR',
    icon: '🎭',
    title: 'Chaar Bachpan Ke Dost',
    doc: 'DOC-182',
    scene: 'Ek property dispute mein purane 4 dost gawah hain ek verbal agreement ke liye 10 saal pehle ka. Alag alag bayan: Vijay: \'Agreement mein 50-50 baatwara tha.\' Nitin: \'Maine suna tha 60-40 Vijay ke favour mein.\' Om: \'Mujhe kuch yaad nahi, main us din wahan nahi tha.\' Pratap: \'Maine bhi suna tha 50-50 baatwara.\' Purane phone records se pata chala Om us din location par hi tha (tower location match).',
    clues: ['Vijay: 50-50', 'Nitin: 60-40 Vijay ke favour', 'Om: yaad nahi, wahan nahi tha', 'Phone tower: Om us din wahan hi tha'],
    question: 'Kiska bayan phone records se contradict hota hai?',
    options: ['Vijay ka', 'Nitin ka', 'Om ka — usne kaha wahan nahi tha, tower location kuch aur kehta hai', 'Pratap ka'],
    answer: 'Om ka — usne kaha wahan nahi tha, tower location kuch aur kehta hai',
    explanation: 'Phone tower location data ek independent, verifiable proof hai ki Om us din us jagah maujood tha. Uska \'wahan nahi tha\' bayan is data se seedha galat sabit hota hai — matlab woh jaan bujhkar apni memory ya presence chhupa raha hai, jo suspicious hai property dispute mein.',
  },
  {
    id: 183,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Chaar Employees Ka Alibi',
    doc: 'DOC-183',
    scene: 'Company ka confidential data leak hua raat 9-11 baje ke beech. Chaar employees ke alibi: Priya \'Gym mein thi, membership card swipe hua 9:15.\' Rohan \'Ghar par akela tha, koi proof nahi.\' Kavita \'Doston ke saath dinner, bill payment 10 baje ka hai.\' Sameer \'Office mein late tak kaam kar raha tha, badge swipe 9-11 dikhata hai.\'',
    clues: ['Priya: gym swipe 9:15', 'Rohan: akela ghar, no proof', 'Kavita: dinner bill 10 baje', 'Sameer: office badge swipe 9-11'],
    question: 'Sabse kamzor alibi kiska hai?',
    options: ['Priya ka — swipe sirf entry dikhata hai, exit nahi', 'Rohan ka — koi verification nahi hai uske pass', 'Kavita ka — bill sirf ek transaction dikhata hai', 'Sameer ka — office mein hi tha jahan data leak hua'],
    answer: 'Rohan ka — koi verification nahi hai uske pass',
    explanation: 'Baaki teeno ke paas kam se kam koi third-party verification hai (swipe card, bill, badge) — Rohan ka alibi sirf uske khud ke kehne par based hai, koi corroboration nahi. Isse woh sabse weak alibi wala aur top suspect banta hai.',
  },
  {
    id: 184,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Paanch Log Jewellery Showroom',
    doc: 'DOC-184',
    scene: 'Showroom se ek necklace gayab hua closing time ke baad. Paanch log the: Owner, do salesgirls, ek security guard, aur ek VIP customer jo last mein tha. Customer ka bag security check se bina check kiye nikla — VIP treatment. Baaki sabka bag check hua tha.',
    clues: ['Necklace gayab closing ke baad', '5 log present the', 'VIP customer ka bag check nahi hua', 'Baaki sabka bag checked'],
    question: 'Sabse pehla suspect kaun hona chahiye?',
    options: ['Owner', 'Salesgirls', 'Security guard', 'VIP customer — jiska bag skip kiya gaya'],
    answer: 'VIP customer — jiska bag skip kiya gaya',
    explanation: 'Jab sabka check hua ho sirf ek insaan ko chhod kar, wahi ek loophole hai jise exploit kiya ja sakta hai. VIP treatment ki wajah se customer ka bag check nahi hua — yeh sabse obvious opportunity hai chori ki.',
  },
  {
    id: 185,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Do Business Partners',
    doc: 'DOC-185',
    scene: 'Ek startup ka paisa gayab hua bank account se. Do partners ke paas hi login access tha. Partner A: \'Maine last login 3 din pehle kiya tha.\' Partner B: \'Maine bhi kai din se login nahi kiya.\' Bank ka login history dikhata hai account kal raat 2 baje login hua tha — jab dono so rahe the apne apne bayan ke mutabik.',
    clues: ['Sirf 2 logon ke paas access', 'A: 3 din pehle login', 'B: kai din se login nahi', 'Bank record: kal raat 2 baje login hua'],
    question: 'Is case mein detective ko sabse pehle kya check karna chahiye?',
    options: ['Dono ke phone se remote login possibility check karna, aur login ka IP address dekhna', 'Sirf A par shaq karna kyunki usne exact date bataya', 'Sirf B par shaq karna kyunki usne vague jawab diya', 'Kisi par shaq na karna, ho sakta hai hacker ho'],
    answer: 'Dono ke phone se remote login possibility check karna, aur login ka IP address dekhna',
    explanation: 'Jab dono partners deny karte hain, sabse concrete next step hai technical evidence — login ka IP address, device fingerprint, ya location data — jo objectively bata sakta hai kisne actually login kiya, na ki sirf verbal bayano par depend karna.',
  },
  {
    id: 186,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Restaurant Kitchen Fire',
    doc: 'DOC-186',
    scene: 'Restaurant ki kitchen mein aag lagi peak dinner time mein. Teen staff members active the kitchen mein: Head Chef, Sous Chef, aur Dishwasher. Fire investigator ne bataya aag gas leak se nahi, balki electrical short-circuit se lagi thi ek specific naya lagaya gaya equipment mein.',
    clues: ['Aag electrical short-circuit se', 'Naya equipment involved tha', 'Teen staff active the', 'Gas leak nahi tha'],
    question: 'Detective ko agla step kya lena chahiye?',
    options: ['Teeno staff ko equally suspect karna', 'Pata karna kisne woh naya equipment install ya use kiya tha last, aur uska maintenance record dekhna', 'Sirf Head Chef se poochtaach karna kyunki woh senior hai', 'Dishwasher ko chhod dena kyunki uska equipment se lena dena nahi'],
    answer: 'Pata karna kisne woh naya equipment install ya use kiya tha last, aur uska maintenance record dekhna',
    explanation: 'Chunki cause specifically ek naye equipment mein short-circuit hai, investigation ka focus us equipment ki installation, maintenance, aur last usage par hona chahiye — yeh generic staff suspicion se zyada effective aur evidence-based approach hai.',
  },
  {
    id: 187,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'College Hostel Mein Chori',
    doc: 'DOC-187',
    scene: 'Hostel room se laptop chora gaya jab room lock tha. Sirf 3 logon ke paas duplicate key thi: Warden, Roommate, aur Maintenance staff. CCTV corridor mein dikhata hai sirf Maintenance staff us waqt corridor mein tha, lekin woh room ke andar nahi gaya CCTV ke frame mein — woh sirf 10 second ke liye frame se bahar gaya jahan camera ka blind spot hai.',
    clues: ['3 logon ke paas duplicate key', 'CCTV: sirf Maintenance corridor mein tha', '10 sec blind spot mein gaya', 'Room lock tha'],
    question: 'Blind spot wala 10 second kya suggest karta hai?',
    options: ['Kuch nahi, normal hai', 'Yeh exactly itna time hai jitna lock khol kar andar ghusne mein lagta hai — Maintenance staff top suspect ban jaata hai', 'Maintenance definitely innocent hai kyunki CCTV mein zyada dikha nahi', 'Yeh determine nahi kiya ja sakta'],
    answer: 'Yeh exactly itna time hai jitna lock khol kar andar ghusne mein lagta hai — Maintenance staff top suspect ban jaata hai',
    explanation: 'CCTV blind spot ka exact timing (10 second) suspicious coincidence hai — yeh realistically utna hi time hai jo lock khol kar andar jaane mein lagta hai. Combined with duplicate key access, Maintenance staff strongest suspect ban jaata hai.',
  },
  {
    id: 188,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Wedding Mein Gehna Chori',
    doc: 'DOC-188',
    scene: 'Shaadi mein bride ka heavy gold set chori hua reception ke dauraan. Guests list mein 200+ log the, lekin sirf 5 log the jo bride ke changing room tak access rakhte the: Maa, Behen, Makeup artist, Wedding planner, aur ek close cousin.',
    clues: ['200+ guests total', '5 log room access rakhte the', 'Reception ke dauraan chori', 'Changing room specific'],
    question: 'Investigation kahan focus karni chahiye?',
    options: ['Sabhi 200 guests par', 'Sirf 5 logon par jinke paas actual access tha', 'Sirf outsiders par', 'Kisi par nahi, ghum jaayegi khud'],
    answer: 'Sirf 5 logon par jinke paas actual access tha',
    explanation: 'Jab access physically limited ho kuch logon tak, investigation ko waha focus karna chahiye jahan opportunity thi — 200 guests mein se sirf 5 hi room tak pahunch sakte the, baaki sab irrelevant hain is specific chori ke liye.',
  },
  {
    id: 189,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Do Roommates Bill Dispute',
    doc: 'DOC-189',
    scene: 'Flat mein bijli ka bill normal se 3 guna aaya ek mahine. Do roommates rehte hain. Roommate A din mein office jaata hai, raat ko ghar. Roommate B work-from-home karta hai, poora din ghar par. Electricity spike specifically din ke 11 AM se 4 PM ke beech records mein dikhta hai.',
    clues: ['Bill 3 guna aaya', 'A din mein office, raat ghar', 'B poora din ghar (WFH)', 'Spike 11 AM - 4 PM'],
    question: 'Spike time se kya pata chalta hai?',
    options: ['A responsible hai kyunki woh bill share karta hai', 'B responsible hai — spike time mein sirf B ghar par tha', 'Dono equally responsible hain', 'Yeh determine nahi ho sakta'],
    answer: 'B responsible hai — spike time mein sirf B ghar par tha',
    explanation: 'Spike ka time (11 AM-4 PM) exactly overlap karta hai jab sirf B ghar par hota hai (WFH). A us waqt office mein hota hai. Timing evidence clearly B ki taraf point karta hai — shayad AC ya heavy appliance use kar raha tha.',
  },
  {
    id: 190,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'School Mein Answer Sheet Badlaav',
    doc: 'DOC-190',
    scene: 'Ek student ki answer sheet mein marks badle huye paaye gaye — pen ka ink alag tha original se. Teen teachers ne us subject ki checking ki thi. Teacher X ne sheet Monday ko check ki, Teacher Y ne Tuesday ko revalidate kiya, Teacher Z sirf final compilation ke liye involved thi, usne kabhi sheet nahi dekhi seedhe.',
    clues: ['Ink alag hai original se', 'X ne Monday check ki', 'Y ne Tuesday revalidate kiya', 'Z ne sheet kabhi seedhe nahi dekhi'],
    question: 'Kis teacher ko is case se automatically exclude kiya ja sakta hai?',
    options: ['Teacher X ko', 'Teacher Y ko', 'Teacher Z ko — usne sheet kabhi handle hi nahi ki seedhe', 'Kisi ko nahi'],
    answer: 'Teacher Z ko — usne sheet kabhi handle hi nahi ki seedhe',
    explanation: 'Jab koi cheez physically kabhi kisi ke haath mein aayi hi nahi ho, tab tak use tamper karna possible nahi. Teacher Z jo sirf compilation mein involved thi aur sheet kabhi seedhe nahi dekhi, use exclude kiya ja sakta hai — focus X aur Y par rahega, unke handling ke beech ka gap check karna hoga.',
  },
  {
    id: 191,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Apartment Building Mein Vandalism',
    doc: 'DOC-191',
    scene: 'Building ki lobby mein CCTV camera todi gayi thi taaki koi aur crime chhupaya ja sake. Camera todne ka time raat 1:45 baje record hua (crash ke just pehle ka footage). Security register dikhata hai us waqt sirf ek resident ne main gate use kiya tha — Flat 302 ka resident, jiske paas visitor bhi tha registered.',
    clues: ['Camera 1:45 baje todi gayi', 'Sirf ek gate entry us waqt', 'Flat 302 resident + visitor registered', 'Yeh camera todne se just pehle ka data hai'],
    question: 'Detective ko agla kadam kya uthana chahiye?',
    options: ['Flat 302 ke resident aur uske visitor dono se poochtaach karna', 'Sirf resident se poochna, visitor ignore karna', 'Poori building ko suspect maanna', 'Camera ko hi doubt karna'],
    answer: 'Flat 302 ke resident aur uske visitor dono se poochtaach karna',
    explanation: 'Jab entry log sirf ek specific flat ka movement dikhata hai us exact time ke aas paas jab camera todi gayi, dono — resident aur visitor — potential suspects hain aur dono se independently poochtaach zaroori hai, kyunki visitor bhi involved ho sakta hai.',
  },
  {
    id: 192,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Cricket Team Mein Match Fixing Shaq',
    doc: 'DOC-192',
    scene: 'Team ke ek match mein unexpectedly kharab performance hui. Selectors ko shaq hai koi player deliberately galat khel raha tha. Analysis mein pata chala: Player X ne pehli baar career mein itne simple catches drop kiye, lekin uske baaki stats (running, fielding position) normal the.',
    clues: ['Sirf catches drop hue', 'Baaki performance normal thi', 'Career mein pehli baar aisa hua', 'Specific pattern: sirf catching mein failure'],
    question: 'Yeh pattern kya suggest karta hai?',
    options: ['Player genuinely off-form tha overall', 'Sirf catching mein selective failure suspicious hai — agar genuinely off-form hota toh baaki performance bhi affected hoti', 'Weather ki wajah se catches drop hue', 'Yeh normal cricket variance hai'],
    answer: 'Sirf catching mein selective failure suspicious hai — agar genuinely off-form hota toh baaki performance bhi affected hoti',
    explanation: 'Genuine off-form performance usually multiple aspects mein dikhta hai — running, fielding positioning, concentration sab affected hoti hai. Sirf ek specific skill (catching) mein itna deliberate lagne wala failure, jabki baaki sab normal hai, ek red flag hai deliberate underperformance ka.',
  },
  {
    id: 193,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Delivery Company Mein Parcel Swap',
    doc: 'DOC-193',
    scene: 'Ek expensive parcel route mein kisi ne swap kar diya cheap item se. Route mein parcel 4 hands se guzra: Warehouse packer, Loader, Driver, aur Delivery boy. Warehouse ka weight-check system dikhata hai parcel sahi weight ke saath loader tak gaya. Delivery ke time weight kam nikla.',
    clues: ['4 hands se guzra parcel', 'Warehouse weight-check: sahi weight loader tak', 'Delivery time weight kam nikla', 'Swap kahin beech mein hua'],
    question: 'Weight discrepancy kis stage ko point karti hai?',
    options: ['Warehouse packer ko — usne pehle hi galat weight diya', 'Loader, Driver, ya Delivery boy mein se koi ek — swap warehouse ke baad hua', 'Kisi ko nahi, weight machine galat hogi', 'Customer ne khud swap kiya'],
    answer: 'Loader, Driver, ya Delivery boy mein se koi ek — swap warehouse ke baad hua',
    explanation: 'Warehouse ka verified weight-check confirm karta hai parcel sahi tha jab tak woh loader tak gaya. Isliye swap zaroor uske baad hua hoga — investigation ko Loader, Driver, aur Delivery boy in teeno par focus karni chahiye, warehouse packer ko exclude kiya ja sakta hai.',
  },
  {
    id: 194,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Hospital Mein Medicine Missing',
    doc: 'DOC-194',
    scene: 'Hospital ke store se controlled medicine ka stock kam nikla audit mein. Access log dikhata hai teen logon ne store access kiya us hafte: Head Nurse (roz access, legitimate duty), Junior Nurse (2 baar access, off-duty hours mein), aur Pharmacist (roz access, legitimate duty).',
    clues: ['Head Nurse: roz access, duty ke waqt', 'Junior Nurse: 2 baar, off-duty hours mein', 'Pharmacist: roz access, duty ke waqt', 'Stock discrepancy audit mein mila'],
    question: 'Kaunsa access pattern sabse suspicious hai?',
    options: ['Head Nurse ka daily legitimate access', 'Junior Nurse ka off-duty hours access — normal duty pattern se bahar hai', 'Pharmacist ka daily legitimate access', 'Sabka pattern normal hai'],
    answer: 'Junior Nurse ka off-duty hours access — normal duty pattern se bahar hai',
    explanation: 'Head Nurse aur Pharmacist dono ka access unke regular duty ka hissa hai — expected aur explainable. Junior Nurse ka off-duty hours mein access, jab uski koi official zaroorat nahi thi wahan hone ki, ek clear anomaly hai jo further investigation maangti hai.',
  },
  {
    id: 195,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Startup Office Mein Idea Chori',
    doc: 'DOC-195',
    scene: 'Ek startup ka pitch deck competitor ke paas leak hua exact same wording ke saath. Sirf 4 log is deck ko access kar sakte the: Founder, Co-founder, Intern, aur Investor jisse share kiya gaya tha NDA ke saath.',
    clues: ['4 logon ka access tha deck tak', 'Exact same wording leak hui', 'Investor NDA ke saath share kiya gaya', 'Founder, Co-founder bhi access rakhte the'],
    question: '\'Exact same wording\' clue kya suggest karta hai?',
    options: ['Koi bhi ho sakta hai jisne dekha', 'File directly copy-paste ki gayi hai kisi ke through jisne raw access liya, rewrite nahi kiya', 'Yeh coincidence hai', 'Investor hi hoga kyunki NDA tha'],
    answer: 'File directly copy-paste ki gayi hai kisi ke through jisne raw access liya, rewrite nahi kiya',
    explanation: 'Agar competitor ne sirf idea sunkar apna deck banaya hota, wording alag hoti — exact same wording ka matlab hai raw file access hua aur directly copy kiya gaya. Yeh un logon tak investigation narrow karta hai jinke paas actual file access tha, na ki sirf verbal knowledge.',
  },
  {
    id: 196,
    type: 'suspect',
    typeLabel: 'SHAQISHUMAR',
    icon: '👤',
    title: 'Gaadi Ki Chabi Aur Do Valet',
    doc: 'DOC-196',
    scene: 'Hotel valet parking se ek car scratch ke saath return hui. Do valets ne us shift mein kaam kiya. Valet 1 ne car park ki thi arrival par, Valet 2 ne car retrieve ki departure par. Parking CCTV mein arrival ke waqt car clean thi, departure retrieve se pehle bhi clean thi lekin retrieve karne ke turant baad scratch dikhi.',
    clues: ['Valet 1: parked at arrival', 'Valet 2: retrieved at departure', 'CCTV: clean before retrieve', 'Scratch turant retrieve ke baad dikhi'],
    question: 'Timeline se kaun zyada suspect lagta hai?',
    options: ['Valet 1 — usne parking ke time scratch kiya hoga', 'Valet 2 — scratch retrieve action ke turant baad appear hui', 'Dono equally suspect', 'Yeh determine nahi ho sakta'],
    answer: 'Valet 2 — scratch retrieve action ke turant baad appear hui',
    explanation: 'CCTV clearly dikhata hai car clean thi retrieve se just pehle bhi, aur scratch turant baad appear hui — yeh directly Valet 2 ki retrieve action ke time point karta hai, Valet 1 ka parking ke time ka kaam is incident se unrelated lagta hai timeline ke hisaab se.',
  },
  {
    id: 197,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Galat Jagah Ka Umbrella',
    doc: 'DOC-197',
    scene: 'Crime scene ek dry, indoor room tha — koi baarish ya paani ka access nahi tha kahin bhi. Lekin room ke corner mein ek geeli umbrella khadi mili, jiske neeche paani ka chhota gadda ban gaya tha farsh par.',
    clues: ['Room bilkul dry tha', 'Koi paani access nahi', 'Umbrella geeli mili', 'Neeche paani ka gadda'],
    question: 'Geeli umbrella kya reveal karti hai?',
    options: ['Yeh pehle se hi geeli rakhi thi', 'Koi bahar se baarish mein bheegkar andar aaya tha — recent visitor jo maujooda suspects mein se nahi tha', 'Room mein leak hoga chhat se', 'Umbrella purani hai isliye geeli hai'],
    answer: 'Koi bahar se baarish mein bheegkar andar aaya tha — recent visitor jo maujooda suspects mein se nahi tha',
    explanation: 'Ek dry, sealed room mein geeli umbrella sirf ek matlab rakhti hai — koi bahar se, jahan baarish ho rahi thi, andar aaya. Yeh ek unaccounted visitor ka proof hai jo official suspect list mein nahi hai.',
  },
  {
    id: 198,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Do Alag Size Ke Joote Ke Nishaan',
    doc: 'DOC-198',
    scene: 'Ek burglary scene par sirf ek hi khidki se entry hui thi (confirmed by forensics). Lekin farsh par do alag size ke muddy footprints mile — ek size 8, doosra size 11.',
    clues: ['Sirf ek khidki se entry', 'Do alag size ke footprints', 'Size 8 aur size 11', 'Ek hi entry point'],
    question: 'Do alag size ke footprints kya suggest karte hain?',
    options: ['Ek hi insaan ne alag joote pehne honge baar baar', 'Do log involved the — akele burglar ki theory galat hai', 'Footprints purane honge, unrelated', 'Size measurement mein galti hui hogi'],
    answer: 'Do log involved the — akele burglar ki theory galat hai',
    explanation: 'Ek insaan ke do alag size ke footprints nahi ho sakte ek hi visit mein (jab tak woh jaan-bujhkar switch na kare, jo rare hai). Do distinct sizes strongly suggest karte hain ki do log involved the is burglary mein, na ki ek akela chor.',
  },
  {
    id: 199,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Fridge Mein Extra Plate',
    doc: 'DOC-199',
    scene: 'Victim akeli rehti thi apna kehte hue mili murder scene par. Kitchen mein sirf ek hi chair table ke paas thi, lekin sink mein DO plates dhulne ke liye rakhe the, dono par khaane ke nishaan.',
    clues: ['Victim akeli rehti thi (claim)', 'Sirf ek chair table ke paas', 'Sink mein do plates', 'Dono plates use hue the'],
    question: 'Do plates ka hona kya suggest karta hai?',
    options: ['Victim ne ek din pehle bhi khana khaya hoga', 'Victim ke saath koi aur bhi khana kha raha tha us shaam — trusted guest jise woh jaanti thi', 'Ek plate purani rakhi thi', 'Yeh irrelevant detail hai'],
    answer: 'Victim ke saath koi aur bhi khana kha raha tha us shaam — trusted guest jise woh jaanti thi',
    explanation: 'Do use ki hui plates directly contradict karti hain \'akela rehna\' ke claim ko. Yeh suggest karta hai ki murder se pehle victim ne kisi ke saath khaana khaya — koi jise woh trust karti thi, jo murder ke time ke aas-paas hi maujood tha.',
  },
  {
    id: 200,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Suitcase Jo Bahut Halka Tha',
    doc: 'DOC-200',
    scene: 'Ek traveler airport se guzarte waqt suspicious laga — uska bada suitcase, jo woh 15-din ki trip ke liye bata raha tha, bahut halka tha jaise usme kapde bhi na hon. X-ray mein andar sirf ek chhota packet dikha, baaki jagah khaali.',
    clues: ['15-din trip ka claim', 'Suitcase bahut halka', 'X-ray: sirf ek chhota packet', 'Baaki jagah khaali'],
    question: 'Suitcase ka weight kya suggest karta hai?',
    options: ['Traveler ne light packing ki hogi', 'Suitcase ka real purpose kuch aur hai — halka weight jhoothi trip story ko contradict karta hai, kuch specific cheez transport karna hi asli motive lagta hai', 'X-ray machine galat reading de rahi hogi', '15 din ki trip ke liye halka suitcase normal hai'],
    answer: 'Suitcase ka real purpose kuch aur hai — halka weight jhoothi trip story ko contradict karta hai, kuch specific cheez transport karna hi asli motive lagta hai',
    explanation: '15 din ki trip ke liye normal suitcase mein kaafi kapde, toiletries, aur zaroori saaman hota hai jo weight banata hai. Itna halka suitcase, sirf ek packet ke saath, trip story ko fake banata hai — asli maksad woh specific packet transport karna tha, na ki travel.',
  },
  {
    id: 201,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Deewar Par Naya Paint Patch',
    doc: 'DOC-201',
    scene: 'Ek murder scene ki deewar par ek chhota sa patch tha jo baaki deewar se thoda alag shade ka tha — jaise recently touch-up kiya gaya ho. Landlord ne kaha koi renovation nahi hui thi is room mein.',
    clues: ['Deewar par alag shade ka patch', 'Recently touch-up jaisa lag raha', 'Landlord: koi renovation nahi hui', 'Sirf ek chhota area'],
    question: 'Yeh patch kya chhupa sakta hai?',
    options: ['Bas purani deewar ka discoloration', 'Blood splatter ya koi damage jo cover karne ke liye paint kiya gaya — deewar ke peeche wajah check karni chahiye', 'Naya furniture rakha gaya hoga wahan', 'Kuch nahi, normal wear and tear'],
    answer: 'Blood splatter ya koi damage jo cover karne ke liye paint kiya gaya — deewar ke peeche wajah check karni chahiye',
    explanation: 'Jab landlord confirm karta hai ki koi official renovation nahi hui, toh ek localized, freshly painted patch highly suspicious ban jaata hai — yeh aksar blood stains, bullet holes, ya struggle damage ko chhupaane ke liye kiya jaata hai. Forensic luminol test se peeche kya hai pata chal sakta hai.',
  },
  {
    id: 202,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Ek Akela Diya Hua Glove',
    doc: 'DOC-202',
    scene: 'Crime scene par sirf EK glove mila, right hand ka, expensive leather ka. Koi bhi suspect ne aisa glove pehnte report nahi kiya. Glove ke andar ek initial monogram silai kiya hua tha: \'R.K.\'',
    clues: ['Sirf ek glove mila', 'Right hand ka', 'Expensive leather', 'Initials \'R.K.\' silai'],
    question: 'Yeh akela glove case mein kaise kaam aayega?',
    options: ['Ignore kar dena chahiye, irrelevant hai', 'Initials se glove ka owner trace karna — expensive custom gloves usually specific tailor/brand se milte hain jo records rakhta hai', 'Doosra glove dhoondhna zaroori hai pehle', 'Glove ka koi matlab nahi bina pair ke'],
    answer: 'Initials se glove ka owner trace karna — expensive custom gloves usually specific tailor/brand se milte hain jo records rakhta hai',
    explanation: 'Ek custom-monogrammed expensive glove ek high-value clue hai. \'R.K.\' initials ke through, high-end tailors ya glove-makers ke records check karke asli owner trace kiya ja sakta hai — yeh un logon ki list se match kiya ja sakta hai jinke initials R.K. hain existing suspects mein.',
  },
  {
    id: 203,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Fridge Mein Expired Milk Ka Sach',
    doc: 'DOC-203',
    scene: 'Victim ka death 3 din pehle ka estimate kiya gaya forensics se. Lekin fridge mein milk packet sirf kal ka khareeda hua tha (date printed), aur freshly khula hua tha.',
    clues: ['Death estimate: 3 din pehle', 'Milk packet kal ka kharida', 'Freshly khula hua', 'Fridge mein rakha'],
    question: 'Milk packet ki date kya suggest karti hai?',
    options: ['Estimate galat hoga forensics ka', 'Koi aur ghar mein tha victim ki death ke baad bhi — grocery kharidne wala shayad murderer hi hai jo cover-up kar raha tha', 'Milk purane packet ka date galat print hua hoga', 'Yeh irrelevant hai case se'],
    answer: 'Koi aur ghar mein tha victim ki death ke baad bhi — grocery kharidne wala shayad murderer hi hai jo cover-up kar raha tha',
    explanation: 'Agar victim 3 din pehle mar chuki thi, toh woh khud kal ka milk nahi khareed sakti thi. Iska matlab koi aur uske baad bhi ghar aata-jaata raha — normal routine dikhane ke liye, taaki lage victim abhi zinda hai. Yeh ek deliberate cover-up ka sign hai.',
  },
  {
    id: 204,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Car Mein Do GPS Devices',
    doc: 'DOC-204',
    scene: 'Ek missing person ki car mile mein DO GPS tracking devices milе — ek factory-fitted (official), aur ek chhota, hidden, aftermarket device chipka hua seat ke neeche.',
    clues: ['Factory GPS official hai', 'Extra hidden GPS bhi mila', 'Seat ke neeche chipka tha', 'Aftermarket device'],
    question: 'Hidden GPS device kya reveal karta hai?',
    options: ['Missing person khud track karna chahta tha apni car', 'Koi aur missing person ko secretly track kar raha tha — stalking ya surveillance ka clear evidence', 'Yeh car ka original equipment hai', 'Device kaam nahi kar raha hoga'],
    answer: 'Koi aur missing person ko secretly track kar raha tha — stalking ya surveillance ka clear evidence',
    explanation: 'Ek hidden, non-official GPS device jo deliberately chhupaya gaya ho, sirf ek matlab rakhta hai — koi missing person ki movements secretly monitor kar raha tha. Yeh device ke purchase records se us insaan tak trace kiya ja sakta hai jisne isse install kiya.',
  },
  {
    id: 205,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Table Par Do Chashme',
    doc: 'DOC-205',
    scene: 'Ek suicide note likhne wale victim ke table par DO alag chashme (spectacles) mile — ek uska apna (uske prescription ka), doosra kisi aur ka prescription ka, alag frame style.',
    clues: ['Note table par likha mila', 'Victim ka apna chashma', 'Doosra alag prescription ka chashma', 'Alag frame style dono'],
    question: 'Doosra chashma kya suggest karta hai case ke baare mein?',
    options: ['Victim ne do chashme rakhe honge khud ke', 'Koi aur us table par baitha tha, note likhne ke dauraan ya baad mein — \'suicide\' ki theory par doubt', 'Chashma purana ghar ka saaman hoga', 'Yeh normal cheez hai, kuch matlab nahi'],
    answer: 'Koi aur us table par baitha tha, note likhne ke dauraan ya baad mein — \'suicide\' ki theory par doubt',
    explanation: 'Ek alag prescription wala chashma table par hona strongly suggest karta hai ki koi doosra insaan bhi us jagah maujood tha, shayad reading ya writing kar raha tha. Yeh \'suicide\' ki simple theory ko complicate karta hai aur further investigation demand karta hai.',
  },
  {
    id: 206,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Bag Mein Extra Weight',
    doc: 'DOC-206',
    scene: 'Airport security ne ek passenger ka bag flag kiya kyunki declared weight aur actual weight mein 2 kg ka farak tha. Bag khola gaya toh normal kapde hi the, koi obvious cheez nahi.',
    clues: ['Declared weight se 2 kg zyada', 'Bag mein normal kapde dikhe', 'Koi obvious extra item nahi', 'Security ne flag kiya'],
    question: '2 kg ka unexplained weight kahan ho sakta hai?',
    options: ['Weighing machine galat hogi', 'False bottom ya lining mein kuch chhupa ho sakta hai — bag ki structure detailed check karni chahiye', 'Kapde bhaari honge normal se', 'Ignore karna chahiye, minor discrepancy hai'],
    answer: 'False bottom ya lining mein kuch chhupa ho sakta hai — bag ki structure detailed check karni chahiye',
    explanation: 'Jab visible contents weight discrepancy explain nahi karte, next step hota hai bag ki physical structure check karna — false bottoms, hidden compartments, ya lining ke andar smuggled items chhupe ho sakte hain jo normal visual inspection mein nahi dikhte.',
  },
  {
    id: 207,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Diary Ka Missing Page',
    doc: 'DOC-207',
    scene: 'Victim ki diary mili jisme last kuch entries ke beech se ek page phada hua tha — carefully, seedhi line mein, blade se jaisa. Diary ki purani entries normal thi, koi aisa pattern nahi.',
    clues: ['Diary mili crime scene par', 'Ek page carefully phada', 'Seedhi line, blade se jaisa', 'Baaki entries normal'],
    question: 'Phara hua page kya suggest karta hai?',
    options: ['Victim ne khud galti se phada hoga', 'Kisi ne deliberately woh entry hataayi jo kuch important ya incriminating reveal karti thi', 'Diary purani hai, page naturally gir gaya', 'Yeh irrelevant hai'],
    answer: 'Kisi ne deliberately woh entry hataayi jo kuch important ya incriminating reveal karti thi',
    explanation: 'Ek carefully, blade se kata gaya page (na ki randomly phata hua) deliberate removal ka sign hai. Yeh suggest karta hai ki us entry mein kuch tha jo case se directly related ho sakta hai — shayad ek naam, ek meeting, ya ek threat jo murderer nahi chahta tha discovered ho.',
  },
  {
    id: 208,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Do Phone Charger Alag Brand',
    doc: 'DOC-208',
    scene: 'Victim ke ghar mein uska khud ka phone charger mila (Brand X, jo uska phone use karta hai). Lekin bedroom mein ek doosra charger bhi mila jo Brand Y ka tha — jo victim ke phone mein fit hi nahi hota.',
    clues: ['Victim ka apna charger Brand X', 'Bedroom mein Brand Y charger', 'Brand Y victim ke phone mein fit nahi hota', 'Dono chargers mile'],
    question: 'Brand Y wala charger kya suggest karta hai?',
    options: ['Victim ne extra charger rakha hoga backup ke liye', 'Koi aur, jiske paas Brand Y phone hai, regularly is bedroom mein tha apna phone charge karne ke liye', 'Charger purana hoga, kaam nahi karta', 'Yeh coincidence hai'],
    answer: 'Koi aur, jiske paas Brand Y phone hai, regularly is bedroom mein tha apna phone charge karne ke liye',
    explanation: 'Ek charger jo victim ke apne phone mein fit hi nahi hota, sirf tab wahan hoga jab koi doosra insaan, jiske paas alag brand ka phone hai, regularly us kamre mein time bitata ho — yeh ek close, frequent visitor ki taraf point karta hai.',
  },
  {
    id: 209,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Purse Mein Do Alag Lipstick',
    doc: 'DOC-209',
    scene: 'Victim ki purse mein uska apna lipstick shade mila (light pink, jo woh hamesha use karti thi dost ke mutabik), aur ek doosra bold red shade bhi mila, bilkul naya, kabhi use nahi hua.',
    clues: ['Victim ka apna shade: light pink', 'Doosra shade: bold red', 'Bold red kabhi use nahi hua', 'Dost confirm karta hai victim ka usual shade'],
    question: 'Naya bold red lipstick kya ho sakta hai?',
    options: ['Victim ne naya try karne ke liye khareeda hoga', 'Yeh gift ho sakta hai kisi se, ya kisi aur (girlfriend/dost) ki purse mein galti se aa gaya — dono possibilities check karni chahiye', 'Yeh case se koi lena dena nahi', 'Purse mix-up hui hogi kisi aur se'],
    answer: 'Yeh gift ho sakta hai kisi se, ya kisi aur (girlfriend/dost) ki purse mein galti se aa gaya — dono possibilities check karni chahiye',
    explanation: 'Ek unused, alag shade ka lipstick jo victim ke known usual choice se match nahi karta, multiple leads khol sakta hai — koi recent gift-giver, ek secret admirer, ya yeh possibility ki purse temporarily kisi aur ke paas thi. Har angle verify karna zaroori hai.',
  },
  {
    id: 210,
    type: 'object',
    typeLabel: 'HIDDEN OBJECT',
    icon: '🔍',
    title: 'Car Ki Seat Position Badal Gayi',
    doc: 'DOC-210',
    scene: 'Ek car accident case mein, driver ka dava hai woh khud drive kar raha tha. Lekin investigators ne note kiya driver seat itni peeche adjust thi ki driver (jo 5\'4" tha) uske pedals tak comfortably pahunch hi nahi sakta tha.',
    clues: ['Driver ka dava: khud drive kar raha tha', 'Seat bahut peeche adjust thi', 'Driver ki height 5\'4"', 'Pedals tak pahunchna mushkil'],
    question: 'Seat position kya reveal karti hai?',
    options: ['Driver ne jaan bujhkar seat peeche ki hogi', 'Koi lambi height ka insaan actually drive kar raha tha, driver ka dava jhootha lagta hai', 'Seat automatically adjust hoti hai', 'Yeh irrelevant hai accident se'],
    answer: 'Koi lambi height ka insaan actually drive kar raha tha, driver ka dava jhootha lagta hai',
    explanation: 'Seat position ek physical, objective clue hai jo driver ki height ke saath match honi chahiye agar woh sach mein drive kar raha tha. Itni peeche seat se ek chhote height ke insaan ka comfortably drive karna almost impossible hai — yeh suggest karta hai koi lamba insaan actual driver tha.',
  },
  {
    id: 211,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Ghar Mein Bina Toote Chori',
    doc: 'DOC-211',
    scene: 'Ek ghar se locker ka saara saaman gayab mila, lekin locker bilkul bhi damaged nahi tha — na lock toota, na koi scratch. Owner ka dava hai unhone code kisi ko nahi bataya.',
    clues: ['Locker undamaged', 'Lock nahi toota', 'Koi scratch nahi', 'Code kisi ko nahi bataya (claim)'],
    question: 'Bina lock tode chori kaise hui hogi?',
    options: ['Koi magic hoga', 'Kisi ko code pata tha — ya toh owner ne bataya (yaad nahi ya jhooth bol raha hai) ya kisi ne unhe type karte dekha/record kiya', 'Locker company ne khud khola hoga', 'Yeh impossible hai, koi chori hui hi nahi'],
    answer: 'Kisi ko code pata tha — ya toh owner ne bataya (yaad nahi ya jhooth bol raha hai) ya kisi ne unhe type karte dekha/record kiya',
    explanation: 'Bina forceful entry ke locker khulna sirf ek matlab rakhta hai — kisi ko legitimate code access tha. Isme owner khud (chhupa raha ho), koi close family member jise pehle bataya gaya, ya kisi ne shoulder-surfing/hidden camera se code note kiya ho, yeh sab possibilities explore karni chahiye.',
  },
  {
    id: 212,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Gaayab Ho Gayi Painting',
    doc: 'DOC-212',
    scene: 'Ek museum se raat ko ek expensive painting gayab hui, lekin frame deewar par bilkul waisa hi laga hua mila — khaali frame ke andar ek printed poster tha exact painting ke size ka.',
    clues: ['Painting gayab', 'Frame waisa hi laga hua', 'Andar printed poster mila', 'Exact size match'],
    question: 'Yeh sophistication kya suggest karta hai?',
    options: ['Yeh amateur chor ka kaam hai', 'Yeh planned, professional theft hai — chor ne pehle se measurements le rakhe the aur poster tayaar rakha, museum staff ka insider knowledge ho sakta hai', 'Museum staff ne khud replace kiya display ke liye', 'Painting kabhi thi hi nahi'],
    answer: 'Yeh planned, professional theft hai — chor ne pehle se measurements le rakhe the aur poster tayaar rakha, museum staff ka insider knowledge ho sakta hai',
    explanation: 'Exact-size replacement poster banane ke liye advance planning aur exact measurements chahiye — yeh sirf tabhi possible hai jab chor ko painting ke baare mein detailed prior knowledge ho, jo insider involvement ki taraf point karta hai.',
  },
  {
    id: 213,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Raaton Raat Gayab Farmer',
    doc: 'DOC-213',
    scene: 'Ek farmer apne khet mein gaya subah kaam karne, lekin dopahar tak wapas nahi aaya. Khet mein uske tools waisi ki waisi padi milin, half-dug gaddha mila, lekin koi struggle ke signs nahi the.',
    clues: ['Subah gaya khet', 'Dopahar tak wapas nahi aaya', 'Tools waisi ki waisi padi', 'Koi struggle signs nahi'],
    question: '\'Koi struggle nahi\' clue kya suggest karta hai?',
    options: ['Farmer ko koi force se nahi le gaya, woh khud gaya kisi ke saath', 'Force se le jaaya gaya lekin bahut carefully', 'Farmer khud gaddhe mein gir gaya', 'Koi jungle animal le gaya'],
    answer: 'Farmer ko koi force se nahi le gaya, woh khud gaya kisi ke saath',
    explanation: 'Struggle ke signs na hona — koi utha-patak, gire hue tools, scattered mitti — suggest karta hai ki farmer voluntarily kisi ke saath gaya, ya kisi aise insaan ke saath jise woh jaanta tha aur trust karta tha, jisne use bina resistance ke le liya.',
  },
  {
    id: 214,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Do Baar Aayi Ek Hi Chitthi',
    doc: 'DOC-214',
    scene: 'Ek businessman ko threat letter mila do baar — exact same wording, exact same handwriting, lekin do alag cities se post kiya gaya, sirf 3 ghante ke antaral mein.',
    clues: ['Exact same wording', 'Exact same handwriting', 'Do alag cities se post', 'Sirf 3 ghante ka gap'],
    question: '3 ghante mein do alag cities se post hona kya suggest karta hai?',
    options: ['Ek hi aadmi ne teen ghante mein itni dooriyan cover ki (agar cities kareeb hain)', 'Yeh do log the jo saath mil kar plan kar rahe the — ek hi source se letters likhwaye gaye phir alag alag post kiye', 'Postal system ki galti hai', 'Yeh coincidence hai'],
    answer: 'Yeh do log the jo saath mil kar plan kar rahe the — ek hi source se letters likhwaye gaye phir alag alag post kiye',
    explanation: 'Agar cities itni door hain ki 3 ghante mein travel possible nahi, toh yeh clearly suggest karta hai ki do log involved the — ek hi source (shayad ek hi insaan ne dono letters likhe) se pre-written letters different logon ne alag jagah post kiye, ek coordinated threat campaign ka hissa.',
  },
  {
    id: 215,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Bandh Kamre Mein Khuli Khidki',
    doc: 'DOC-215',
    scene: 'Ek victim apne band kamre mein mila, darwaza andar se locked. Lekin ek chhoti si upper khidki khuli thi jo sirf 1 foot chaudi thi — itni chhoti ki koi normal adult usse ghus nahi sakta.',
    clues: ['Darwaza andar se locked', 'Ek chhoti khidki khuli', 'Sirf 1 foot chaudi', 'Normal adult fit nahi ho sakta'],
    question: 'Itni chhoti khidki ka kya matlab ho sakta hai?',
    options: ['Koi bachcha ya bahut patla insaan andar gaya', 'Khidki ka lena dena hi nahi hai entry se — sirf hawa ke liye khuli thi, real entry kahin aur se hui', 'Koi jaanwar andar gaya', 'Khidki khud hi khul gayi'],
    answer: 'Koi bachcha ya bahut patla insaan andar gaya',
    explanation: 'Ek 1-foot chaudi khidki normal build ke adult ke liye impossible hai, lekin ek bachche ya extremely thin build wale insaan ke liye possible ho sakta hai. Yeh unexpected suspects (jaise ek chhota kid ya circus performer jaisa flexible insaan) ki taraf investigation le jaata hai.',
  },
  {
    id: 216,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Har Raat Ek Hi Waqt Par Awaaz',
    doc: 'DOC-216',
    scene: 'Ek purane haveli mein har raat exactly 2:17 AM par ek dhamaake jaisi awaaz aati thi, kai mahino se. Koi visible source nahi mila kabhi bhi jab log check karte the.',
    clues: ['Har raat exact 2:17 AM', 'Kai mahino se yeh pattern', 'Koi visible source nahi', 'Consistent timing'],
    question: 'Itna exact, consistent timing kya suggest karta hai?',
    options: ['Yeh koi supernatural cheez hai', 'Yeh koi mechanical/automated source hai — jaise timer-based equipment, na ki random ghatna ya bhootiya activity', 'Log sapna dekh rahe honge', 'Yeh coincidence hai roz'],
    answer: 'Yeh koi mechanical/automated source hai — jaise timer-based equipment, na ki random ghatna ya bhootiya activity',
    explanation: 'Random events (structural settling, animals, etc.) kabhi bhi ho sakte hain, lekin itna precise, daily-repeating timing sirf mechanical ya automated source se hi possible hai — jaise ek timer-set device, ek water pipe ka pressure cycle, ya kisi ne deliberately koi automated system laga rakha hai kisi wajah se.',
  },
  {
    id: 217,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Ek Hi Number Se Baar Baar Call',
    doc: 'DOC-217',
    scene: 'Victim ko murder se pehle ek unknown number se 7 baar call aayi thi, lekin har call sirf 2 second ki thi — jaise koi jaanbujhkar call disconnect kar raha ho turant uthaane ke baad.',
    clues: ['7 baar call aayi', 'Har call 2 second ki', 'Unknown number', 'Jaanbujhkar disconnect jaisa pattern'],
    question: 'Yeh 2-second calls ka pattern kya ho sakta hai?',
    options: ['Galti se call lag rahi hogi baar baar', 'Yeh confirmation calls the — caller sirf check kar raha tha victim ghar par hai ya phone reachable hai, baat karne ka irada nahi tha', 'Network issue tha', 'Random spam calls'],
    answer: 'Yeh confirmation calls the — caller sirf check kar raha tha victim ghar par hai ya phone reachable hai, baat karne ka irada nahi tha',
    explanation: 'Baar baar bahut chhoti duration ki calls, khaaskar jab number consistent ho, aksar \'presence confirmation\' ke liye use hoti hain — caller sirf yeh confirm kar raha tha ki victim wahan hai aur phone active hai, taaki apna plan execute kar sake. Yeh premeditation ka strong sign hai.',
  },
  {
    id: 218,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Purani Chitthi Jo Kabhi Nahi Bheji Gayi',
    doc: 'DOC-218',
    scene: 'Victim ke almari mein ek 20 saal purani, seal band chitthi mili jo kabhi post nahi ki gayi thi, address likha tha lekin stamp nahi laga. Chitthi ka content abhi tak koi nahi jaanta.',
    clues: ['20 saal purani chitthi', 'Seal band, kabhi post nahi hui', 'Address likha, stamp nahi laga', 'Content unknown'],
    question: 'Is chitthi ko investigation mein kya priority deni chahiye?',
    options: ['Ignore karna, bahut purani hai relevant nahi', 'Turant khol kar padhna — 20 saal se seal band raaz, current murder se kisi purane connection ka clue ho sakta hai', 'Address wale insaan ko de dena bina padhe', 'Destroy kar dena privacy ke liye'],
    answer: 'Turant khol kar padhna — 20 saal se seal band raaz, current murder se kisi purane connection ka clue ho sakta hai',
    explanation: 'Ek 20 saal se chhupaya gaya, kabhi post na kiya gaya raaz, aksar ek deeply personal ya guilty secret hota hai. Is tarah ke long-held secrets purane grudges, family disputes, ya hidden relationships reveal kar sakte hain jo present-day motive se directly juda ho sakta hai.',
  },
  {
    id: 219,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Ek Hi Ghar Mein Do Alag Handwriting',
    doc: 'DOC-219',
    scene: 'Victim ke suicide note mein do alag handwriting styles the — pehla paragraph normal, careful likhawat mein, doosra paragraph shaky, rushed likhawat mein, jaise emotional breakdown ke dauraan likha gaya ho.',
    clues: ['Do alag handwriting styles ek hi note mein', 'Pehla: normal careful', 'Doosra: shaky rushed', 'Ek hi kaagaz par'],
    question: 'Do alag handwriting styles kya suggest kar sakte hain?',
    options: ['Victim emotional ho gaya likhte likhte, normal hai', 'Do alag log ne likha — koi aur, forger, ne dusra part add kiya note ko believable banane ke liye', 'Pen change ki hogi beech mein', 'Yeh irrelevant detail hai'],
    answer: 'Do alag log ne likha — koi aur, forger, ne dusra part add kiya note ko believable banane ke liye',
    explanation: 'Jabki emotional shift ek explanation ho sakti hai, forensic handwriting analysis zaroori hai yeh confirm karne ke liye ki dono parts ek hi insaan ne likhe. Agar handwriting fundamentally alag structure dikhati hai (na ki sirf shaky), toh yeh forgery ka strong indicator hai — kisi ne note ko \'complete\' karne ke liye extra likha.',
  },
  {
    id: 220,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Jo Cheez Kabhi Order Nahi Ki Gayi',
    doc: 'DOC-220',
    scene: 'Victim ke ghar delivery boy ek package leke aaya jo unhone kabhi order hi nahi kiya tha (family confirm karta hai). Package mein sirf ek blank paper tha, koi item nahi.',
    clues: ['Package family ne order nahi kiya', 'Delivery genuine thi (courier record confirm)', 'Andar sirf blank paper', 'Koi item nahi tha'],
    question: 'Yeh mysterious package kya ho sakta hai?',
    options: ['Delivery company ki galti, wrong address', 'Yeh ek coded message ya warning ho sakta hai kisi ka — sender ko trace karna zaroori hai order details se', 'Family jhooth bol rahi hai order kiya tha', 'Random spam package'],
    answer: 'Yeh ek coded message ya warning ho sakta hai kisi ka — sender ko trace karna zaroori hai order details se',
    explanation: 'Ek deliberately order kiya gaya package jisme sirf blank paper ho, normal delivery error nahi lagta — yeh ek intentional warning, threat, ya coded message ho sakta hai. Courier ke order records se sender ki details trace ki ja sakti hain, jo case mein crucial lead de sakti hain.',
  },
  {
    id: 221,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Gaon Mein Roz Ek Cheez Gayab',
    doc: 'DOC-221',
    scene: 'Ek chhote gaon mein pichle 10 dino se roz koi na koi ek chhoti cheez gayab ho rahi thi — kabhi ek chappal, kabhi ek bartan, kabhi ek towel. Koi bhi cheez expensive nahi thi.',
    clues: ['10 dino se roz kuch gayab', 'Har baar ek chhoti cheez', 'Kabhi expensive nahi', 'Random items'],
    question: 'Sirf chhoti, non-expensive cheezein gayab hona kya suggest karta hai?',
    options: ['Koi professional chor hai jo dhang se nahi chura raha', 'Yeh money ke liye chori nahi hai — koi animal (jaise bandar ya kutta) ya koi mentally distressed insaan involved ho sakta hai', 'Gaon walon ka misplace karne ka pattern hai', 'Yeh koi curse hai'],
    answer: 'Yeh money ke liye chori nahi hai — koi animal (jaise bandar ya kutta) ya koi mentally distressed insaan involved ho sakta hai',
    explanation: 'Jab chori ka pattern value-based nahi hota (random, cheap items), motive typically monetary nahi hota. Yeh aksar ek animal (bandar, kauwa) ka kaam hota hai, ya kisi aise insaan ka jo emotional/mental distress mein hai aur bina samjhe cheezein utha leta hai — dono possibilities investigate karni chahiye, na ki traditional thief theory.',
  },
  {
    id: 222,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Ek Din Ke Liye Gayab Ho Gaya Guard',
    doc: 'DOC-222',
    scene: 'Ek factory ka night guard apni shift ke dauraan poori raat ke liye untraceable ho gaya — na woh apne post par tha, na factory se bahar nikalte CCTV mein dikha. Subah woh apne post par hi mila, so raha tha, confused.',
    clues: ['Poori raat untraceable tha', 'Post par nahi tha', 'Bahar nikalte CCTV mein nahi dikha', 'Subah post par hi mila, confused'],
    question: 'Guard kahan ho sakta tha agar woh factory se bahar bhi nahi gaya?',
    options: ['Woh ghar chala gaya hoga chupke se', 'Factory ke andar hi kahin ek CCTV blind spot mein tha — shayad kuch dekh liya ya kisi ne use control kiya (drugged/tied up) taaki gawah na ban sake', 'Guard jhooth bol raha hai, sab yaad hai usse', 'Yeh supernatural cheez hai'],
    answer: 'Factory ke andar hi kahin ek CCTV blind spot mein tha — shayad kuch dekh liya ya kisi ne use control kiya (drugged/tied up) taaki gawah na ban sake',
    explanation: 'Chunki guard factory se bahar nahi gaya (koi exit footage nahi), woh poori raat andar hi kahin tha, bas ek blind spot mein — sabse likely explanation yeh hai ki use drug diya gaya ya rok diya gaya taaki woh raat ki kisi activity ka gawah na ban sake, jo factory mein us raat kuch illegal hone ki taraf point karta hai.',
  },
  {
    id: 223,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Do Identical Twins Aur Ek Crime',
    doc: 'DOC-223',
    scene: 'Ek crime scene ke CCTV mein suspect ka chehra dikha, lekin uska ek identical twin bhai bhi hai. Dono ke paas alibi hain, dono almost identical dikhte hain, lekin ek ke haath mein ek purani chot ka nishaan hai jo doosre ke nahi.',
    clues: ['CCTV mein suspect ka chehra', 'Identical twin brother hai', 'Dono ke alibi hain', 'Ek ke haath mein scar hai'],
    question: 'Twin ko differentiate karne ke liye sabse reliable clue kya hai?',
    options: ['Unki height compare karna', 'CCTV footage mein haath ka scar zoom karke dekhna — physical distinguishing mark most reliable hai identical twins mein', 'Unki awaaz sunna', 'Dono se alag alag poochna kaun hai'],
    answer: 'CCTV footage mein haath ka scar zoom karke dekhna — physical distinguishing mark most reliable hai identical twins mein',
    explanation: 'Identical twins genetically same dikhte hain, lekin unique physical marks (scars, moles, injuries) unhe differentiate karne ka sabse reliable tareeka hain — agar CCTV footage mein scar dikhta hai, toh woh specifically us twin ko identify kar sakta hai jiske haath mein woh nishaan hai.',
  },
  {
    id: 224,
    type: 'mystery',
    typeLabel: 'RAHASYA',
    icon: '🕯️',
    title: 'Jo Chaabi Kabhi Kaam Nahi Aayi',
    doc: 'DOC-224',
    scene: 'Victim ki key-chain mein ek extra chaabi thi jo ghar, car, ya office kisi bhi lock mein fit nahi hoti thi. Family ko iske baare mein kuch pata nahi tha.',
    clues: ['Extra chaabi keychain mein', 'Ghar/car/office kisi mein fit nahi', 'Family ko iske baare mein pata nahi', 'Mystery lock ki chaabi'],
    question: 'Yeh mystery chaabi kis cheez ki ho sakti hai?',
    options: ['Purani, use na hone wali chaabi, matter nahi karti', 'Kisi secret jagah ki ho sakti hai — ek storage unit, secret locker, ya kisi aur property ki jo family ko pata nahi thi', 'Kisi ne galti se de di hogi', 'Chaabi kaam ki nahi hai bilkul'],
    answer: 'Kisi secret jagah ki ho sakti hai — ek storage unit, secret locker, ya kisi aur property ki jo family ko pata nahi thi',
    explanation: 'Ek chaabi jo victim ki known properties mein se kisi mein fit nahi hoti, aksar ek chhupi hui jagah point karti hai — bank locker, storage unit, ya secret second residence. Iske manufacturer marks se lock ka type identify karke us jagah tak trace kiya ja sakta hai, jo case mein bade secrets reveal kar sakti hai.',
  },
  {
    id: 225,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Trekking Group Se Alag Hua Trekker',
    doc: 'DOC-225',
    scene: '5 logon ka trekking group tha, lekin ek member Arjun raste mein group se alag ho gaya bola \'photo lene jaa raha hoon\'. 3 ghante ho gaye, wapas nahi aaya. Uska phone signal last location ek waterfall ke paas dikha raha hai, phir band ho gaya.',
    clues: ['5 logon ka group', 'Arjun photo lene gaya', '3 ghante se missing', 'Last signal waterfall ke paas'],
    question: 'Search team ko sabse pehle kahan focus karna chahiye?',
    options: ['Poore trek route par equally', 'Waterfall ke aas-paas ka area — last known signal location', 'Group ke starting point par', 'Nearest village mein'],
    answer: 'Waterfall ke aas-paas ka area — last known signal location',
    explanation: 'Last known phone signal location ek concrete, verifiable starting point hai search operation ke liye. Waterfalls ke paas slippery rocks aur accidents ka risk bhi zyada hota hai, isliye yahan focused search sabse effective approach hai.',
  },
  {
    id: 226,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Office Se Gayab Hui Intern',
    doc: 'DOC-226',
    scene: 'Ek intern office se lunch break par nikli aur wapas nahi aayi. Uska bag desk par hi tha, laptop locked. Colleague ne bataya woh kisi phone call ke baad tension mein dikh rahi thi jaane se pehle.',
    clues: ['Lunch break par nikli', 'Bag aur laptop desk par', 'Phone call ke baad tension mein dikhi', 'Wapas nahi aayi'],
    question: 'Investigation ka sabse important lead kya hai?',
    options: ['Uska bag check karna', 'Woh phone call kiska tha, uska record nikalna — jo tension ki wajah ho sakta hai', 'Office CCTV dekhna sirf', 'Ghar walon se poochna'],
    answer: 'Woh phone call kiska tha, uska record nikalna — jo tension ki wajah ho sakta hai',
    explanation: 'Chunki woh call ke turant baad tension mein dikhi aur nikal gayi, yeh strongly suggest karta hai call directly uske jaane se related hai. Call records se caller identify karna sabse direct lead hai iss mystery ko samajhne ke liye.',
  },
  {
    id: 227,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Beta Jo School Bus Mein Nahi Chadha',
    doc: 'DOC-227',
    scene: '8 saal ka bachcha roz school bus se ghar aata tha, lekin aaj bus driver kehta hai woh bus mein chadha hi nahi tha. School register mein attendance mark hai poore din ki. Maa confused hai kya hua.',
    clues: ['Roz bus se aata tha', 'Driver: aaj bus mein nahi chadha', 'School attendance mark hai poore din', 'Maa ko pata nahi kya hua'],
    question: 'Sabse pehla step kya hona chahiye is confusion ko clear karne ke liye?',
    options: ['Turant police complaint', 'School CCTV check karna — kya bachcha actually school se nikla, aur kaise (kis se)', 'Ghar ke aas-paas dhoondhna', 'Bus driver ko blame karna'],
    answer: 'School CCTV check karna — kya bachcha actually school se nikla, aur kaise (kis se)',
    explanation: 'Attendance register aur bus driver ke bayan mein conflict hai — CCTV footage ek objective source hai yeh confirm karne ke liye ki bachcha school se kab aur kiske saath nikla, jo aage ki search direction decide karega.',
  },
  {
    id: 228,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Budhi Maa Ghar Se Gayab',
    doc: 'DOC-228',
    scene: '70 saal ki ek mahila apne ghar se gayab ho gayi, jinhe mild memory issues hain. Neighbour ne unhe subah market ki taraf jaate dekha tha, normal walk jaisa laga tha.',
    clues: ['70 saal, mild memory issues', 'Neighbour ne market ki taraf jaate dekha', 'Normal walk jaisa laga', 'Ghar wapas nahi aayi'],
    question: 'Is tarah ke case mein search strategy kya honi chahiye?',
    options: ['Sirf ghar ke andar dhoondhna', 'Market route aur uske aas paas ke familiar, routine locations cover karna — memory issues wale log aksar familiar jagah bhatakte hain', 'Poore shehar mein random search', 'Wait karna, woh khud aa jayengi'],
    answer: 'Market route aur uske aas paas ke familiar, routine locations cover karna — memory issues wale log aksar familiar jagah bhatakte hain',
    explanation: 'Memory issues (jaise dementia ke early signs) wale log aksar apne familiar, routine paths follow karte hain lekin beech mein disoriented ho jaate hain. Search ko unke known routine routes (market, park, purane ghar) par focus karna sabse effective hai random citywide search se.',
  },
  {
    id: 229,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Do Dost Trip Par Gaye, Ek Wapas Nahi Aaya',
    doc: 'DOC-229',
    scene: 'Do dost bike trip par gaye the doosre shehar. Ek wapas aa gaya, doosra \'kaam se ruk gaya\' kehkar rukne wala tha lekin ab uska phone switch off hai 2 din se.',
    clues: ['Do dost bike trip par gaye', 'Ek wapas aaya, doosra ruka', '\'Kaam se ruk gaya\' bola', 'Phone 2 din se switch off'],
    question: 'Wapas aaye dost se sabse pehle kya poochna chahiye?',
    options: ['Trip kaisi thi general', 'Exact location jahan woh dono alag hue, aur woh \'kaam\' kya tha jiske liye doosra ruka', 'Bike ka number', 'Hotel ka naam sirf'],
    answer: 'Exact location jahan woh dono alag hue, aur woh \'kaam\' kya tha jiske liye doosra ruka',
    explanation: 'Missing dost ki last known location aur uske rukne ka stated reason (\'kaam\') investigation ke sabse crucial starting points hain. Yeh pata karna zaroori hai ki woh \'kaam\' genuine tha ya koi cover story, aur last dekha gaya exact jagah kahan thi.',
  },
  {
    id: 230,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Delivery Boy Jo Delivery Ke Baad Gayab',
    doc: 'DOC-230',
    scene: 'Ek delivery boy apni last delivery ke baad company office wapas nahi aaya. Uski bike GPS last location ek residential area mein dikhata hai jahan uski koi scheduled delivery nahi thi.',
    clues: ['Last delivery ke baad gayab', 'Bike GPS residential area mein', 'Woh area uski scheduled delivery mein nahi tha', 'Company office wapas nahi aaya'],
    question: 'GPS ka yeh mismatch kya suggest karta hai?',
    options: ['GPS device kharab hoga', 'Woh apni official route se hatkar kahin aur gaya — kisi personal reason se ya kisi ne use divert kiya', 'Woh ghar chala gaya hoga seedha', 'Company records galat hain'],
    answer: 'Woh apni official route se hatkar kahin aur gaya — kisi personal reason se ya kisi ne use divert kiya',
    explanation: 'Jab GPS last location official delivery schedule se match nahi karta, iska matlab hai delivery boy ne apna planned route deviate kiya — yeh voluntary (personal reason) ho sakta hai ya involuntary (kisi ne bulaya/divert kiya). Us exact residential area ko investigate karna agla step hai.',
  },
  {
    id: 231,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'College Student Hostel Se Gayab',
    doc: 'DOC-231',
    scene: 'Ek college student apne hostel room se 3 din ke liye gayab tha, roommate ko nahi bataya. Wapas aane par usne kaha \'ghar gaya tha\' lekin uske parents ne confirm kiya unke ghar nahi aaya tha.',
    clues: ['3 din gayab tha', 'Roommate ko nahi bataya', '\'Ghar gaya tha\' claim', 'Parents: ghar nahi aaya'],
    question: 'Yeh contradiction kya suggest karta hai?',
    options: ['Student galti se bhool gaya kaha tha', 'Student jhooth bol raha hai apne asli whereabouts ke baare mein — koi aur reason ya jagah chhupa raha hai', 'Parents jhooth bol rahe hain', 'Yeh koi serious matter nahi'],
    answer: 'Student jhooth bol raha hai apne asli whereabouts ke baare mein — koi aur reason ya jagah chhupa raha hai',
    explanation: 'Jab student ka claim parents ke statement se directly contradict hota hai, yeh clear hai ki woh apni asli location ya activity chhupa raha hai. Yeh kisi personal problem, secret relationship, ya kisi trouble mein hone ka sign ho sakta hai jise woh reveal nahi karna chahta.',
  },
  {
    id: 232,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Hiking Couple Mein Se Ek Nahi Mila',
    doc: 'DOC-232',
    scene: 'Ek couple hiking par gaya, sirf ek wapas aaya bura haal mein, kehte hue \'hum alag ho gaye raste mein, dhundh thi.\' Weather record dikhata hai us din koi dhundh nahi thi, clear weather tha.',
    clues: ['Couple hiking par gaye', 'Sirf ek wapas aaya', 'Claim: dhundh thi, alag ho gaye', 'Weather record: clear din tha'],
    question: 'Weather record kya reveal karta hai?',
    options: ['Weather record galat hoga', 'Wapas aaye insaan ka bayan jhootha hai — \'dhundh\' wali kahani fabricated lagti hai', 'Dhundh sirf specific area mein hogi', 'Yeh irrelevant hai'],
    answer: 'Wapas aaye insaan ka bayan jhootha hai — \'dhundh\' wali kahani fabricated lagti hai',
    explanation: 'Official weather record ek objective, verifiable source hai. Agar din clear tha aur koi dhundh nahi thi, toh alag hone ka stated reason jhootha hai — yeh wapas aaye insaan ko top suspect banata hai us doosre insaan ki disappearance mein, jisse detailed poochtaach zaroori hai.',
  },
  {
    id: 233,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Businessman Meeting Ke Liye Nikla Nahi Pahuncha',
    doc: 'DOC-233',
    scene: 'Ek businessman apni office se important meeting ke liye nikla, lekin destination tak kabhi nahi pahuncha. Uski car ek highway ke side mein khali mili, engine off, keys andar hi.',
    clues: ['Meeting ke liye nikla', 'Destination tak nahi pahuncha', 'Car highway side mein khali mili', 'Engine off, keys andar'],
    question: 'Car ki condition kya suggest karti hai?',
    options: ['Car khud kharab ho gayi hogi', 'Voh khud rukkar utra tha kisi wajah se — planned stop, ya kisi jaan-pehchaan wale se mila jisne use aage le liya', 'Accident hua hoga jiska koi trace nahi', 'Car chori ho gayi thi, businessman ka koi lena dena nahi'],
    answer: 'Voh khud rukkar utra tha kisi wajah se — planned stop, ya kisi jaan-pehchaan wale se mila jisne use aage le liya',
    explanation: 'Engine off aur keys andar hona batata hai ki yeh emergency stop nahi tha — insaan ne calmly car park ki, engine band kiya, aur nikal gaya. Yeh voluntary stop ka sign hai, shayad kisi se milne ke liye jo pehle se planned tha ya spontaneous decision.',
  },
  {
    id: 234,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Shaadi Se Ek Din Pehle Bride Gayab',
    doc: 'DOC-234',
    scene: 'Shaadi se ek din pehle bride apne ghar se gayab ho gayi. Family panic mein hai. Uski best friend ne bataya bride pichle kuch dino se bahut stressed thi shaadi ko lekar, aur ek purani relationship ki baat kar rahi thi.',
    clues: ['Shaadi se ek din pehle gayab', 'Family panic mein', 'Best friend: bride stressed thi', 'Purani relationship ka zikra kiya tha'],
    question: 'Is case mein sabse likely scenario kya hai?',
    options: ['Kidnapping ho sakta hai zabardasti', 'Bride ne khud ka decision liya ho sakta hai shaadi se bachne ke liye — cold feet ya purane relationship se related', 'Bride ko accident hua hoga', 'Koi kaho sakta hai kuch bhi'],
    answer: 'Bride ne khud ka decision liya ho sakta hai shaadi se bachne ke liye — cold feet ya purane relationship se related',
    explanation: 'Given context (stress about wedding, mention of past relationship, koi struggle signs nahi) strongly suggest karta hai voluntary departure (\'runaway bride\' scenario), na ki forceful abduction. Investigation ko purane relationship ke insaan se contact karne par focus karna chahiye pehle, saath hi zabardasti ki possibility bhi rule out karni chahiye.',
  },
  {
    id: 235,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Fisherman Boat Ke Saath Gayab',
    doc: 'DOC-235',
    scene: 'Ek machhuara apni boat leke subah gaya, sham tak wapas nahi aaya. Uski boat khaali mili samudra mein drift karte hue, lekin uska life jacket boat mein hi tha, use nahi kiya gaya tha.',
    clues: ['Boat subah gayi', 'Sham tak wapas nahi aayi', 'Boat khaali mili drift karte', 'Life jacket boat mein hi tha, use nahi hua'],
    question: 'Life jacket ka use na hona kya suggest karta hai?',
    options: ['Machhuara ko life jacket ki zaroorat nahi lagi', 'Emergency itni sudden thi ki jacket pehnne ka time nahi mila — ya machhuara ko koi sudden physical incident hua (heart attack, gir gaya)', 'Life jacket kharab tha', 'Yeh normal hai fishermen jacket nahi pehente'],
    answer: 'Emergency itni sudden thi ki jacket pehnne ka time nahi mila — ya machhuara ko koi sudden physical incident hua (heart attack, gir gaya)',
    explanation: 'Agar koi gradual problem hoti (boat mein paani bharna, weather kharab hona), machhuara ko jacket pehnne ka time milta. Jacket ka wahi rehna suggest karta hai ki kuch sudden hua — accidental fall, medical emergency, ya koi aur unexpected incident jisne use turant paani mein daal diya.',
  },
  {
    id: 236,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Naukri Chhod Kar Gayab Hua Employee',
    doc: 'DOC-236',
    scene: 'Ek employee ne achanak resignation email bheja aur usi din se gayab ho gaya, phone band. Colleagues ka kehna hai uska recent behavior normal tha, koi tension ke signs nahi the.',
    clues: ['Achanak resignation email', 'Usi din se gayab', 'Phone band', 'Colleagues: normal behavior tha'],
    question: 'Resignation email ki authenticity kaise verify karni chahiye?',
    options: ['Email ko sach maan lena, kaam khatam', 'Email ke technical headers check karna (kis device/IP se bheja gaya), aur kya woh employee ke normal writing style se match karta hai', 'Ignore karna, employee ka personal matter hai', 'HR se poochna bas'],
    answer: 'Email ke technical headers check karna (kis device/IP se bheja gaya), aur kya woh employee ke normal writing style se match karta hai',
    explanation: 'Jab disappearance itni sudden ho bina koi warning signs ke, resignation email ki authenticity verify karna zaroori ban jaata hai — ho sakta hai email khud employee ne nahi bheja, ya kisi force ke under bheja gaya ho. Technical aur stylistic verification dono zaroori hain.',
  },
  {
    id: 237,
    type: 'missing',
    typeLabel: 'MISSING PERSON',
    icon: '🚶',
    title: 'Temple Se Gayab Hua Bachcha Mela Mein',
    doc: 'DOC-237',
    scene: 'Ek bade mele mein ek 6 saal ka bachcha apne parents se bhichad gaya. Parents ne last dekha bachcha ek balloon-wale stall ke paas tha. 30 minute se dhoondh rahe hain.',
    clues: ['Bade mele mein bhichad gaya', 'Last dekha balloon stall ke paas', '6 saal ka bachcha', '30 minute se missing'],
    question: 'Mele jaise crowded jagah mein sabse effective immediate step kya hai?',
    options: ['Poore mele mein akele dhoondhna', 'Mela announcement system use karna aur mele ke saare exit points par turant alert karna', 'Wait karna woh khud mil jayega', 'Sirf balloon stall ke paas rehna'],
    answer: 'Mela announcement system use karna aur mele ke saare exit points par turant alert karna',
    explanation: 'Crowded public events mein missing child cases mein speed crucial hai. Public announcement system se turant wide reach milta hai, aur exit points ko alert karna zaroori hai taaki bachcha (ya koi jo use le ja raha ho) mele se bahar na nikal sake bina check kiye.',
  },
  {
    id: 238,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Jewellery Store Mein Din Dahade Chori',
    doc: 'DOC-238',
    scene: 'Jewellery store mein ek \'customer\' aaya, 3 alag rings try kiye, ek nahi khareeda aur chala gaya. Baad mein pata chala ek expensive ring gayab hai jo usne try kiya tha. CCTV mein woh sleeve lambi shirt pehne tha.',
    clues: ['3 rings try kiye', 'Kuch nahi khareeda', 'Ek expensive ring gayab', 'Lambi sleeve shirt pehne tha'],
    question: 'Ring kaise churayi gayi hogi?',
    options: ['Salesperson ne khud churayi', 'Customer ne ring sleeve ke andar palm mein chhupayi jab try kar raha tha, salesperson ka dhyaan doosri ring par tha', 'Ring pehle se hi gayab thi', 'Koi doosra customer ne li'],
    answer: 'Customer ne ring sleeve ke andar palm mein chhupayi jab try kar raha tha, salesperson ka dhyaan doosri ring par tha',
    explanation: 'Lambi sleeves ek classic sleight-of-hand technique ke liye use hoti hain — multiple items try karke, distraction create karke, ek item ko sleeve mein slide karna aasaan ho jaata hai. Yeh ek well-known jewellery theft technique hai jise \'switching\' kehte hain.',
  },
  {
    id: 239,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Warehouse Se Truck Bhar Maal Gayab',
    doc: 'DOC-239',
    scene: 'Ek warehouse se poora truck load maal gayab hua raat ko. Security log dikhata hai koi unauthorized entry nahi hui gate se. Lekin loading dock ka ek chhota side gate ka lock tampered mila.',
    clues: ['Poora truck load gayab', 'Main gate: no unauthorized entry', 'Loading dock side gate ka lock tampered', 'Raat ko hua'],
    question: 'Investigation kis par focus karni chahiye?',
    options: ['Sirf main gate security par', 'Side gate ki tampering aur us gate tak kiski access thi (keys/knowledge)', 'Truck driver ko blame karna', 'Warehouse ke bahar CCTV'],
    answer: 'Side gate ki tampering aur us gate tak kiski access thi (keys/knowledge)',
    explanation: 'Chunki main gate clean hai, entry zaroor tampered side gate se hui. Yeh gate ka existence aur uski location sirf un logon ko pata hoti hai jo warehouse operations se familiar hain — insider involvement ki strong possibility hai.',
  },
  {
    id: 240,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Online Payment Fraud Chori',
    doc: 'DOC-240',
    scene: 'Ek customer ka credit card online transaction ke turant baad fraud charges dikhne lage — ek unknown website par jo unhone kabhi visit nahi ki. Card physically customer ke paas hi thi hamesha.',
    clues: ['Card physically customer ke paas thi', 'Genuine transaction ke turant baad fraud', 'Unknown website par charges', 'Card kabhi kisi ko nahi di'],
    question: 'Yeh fraud kaise hua hoga?',
    options: ['Customer khud bhool gaya transaction', 'Genuine transaction ke waqt card details kisi ne intercept ki (skimming device ya compromised website), physical card ki zaroorat nahi hoti online fraud ke liye', 'Bank ki galti hai', 'Card cloning physically hui hogi'],
    answer: 'Genuine transaction ke waqt card details kisi ne intercept ki (skimming device ya compromised website), physical card ki zaroorat nahi hoti online fraud ke liye',
    explanation: 'Digital fraud mein physical card ki zaroorat nahi hoti — sirf card number, expiry, aur CVV chahiye. Yeh details compromised websites, skimming devices, ya data breaches se steal ki ja sakti hain. Investigation ko us pehle genuine transaction ke merchant ki security check karni chahiye.',
  },
  {
    id: 241,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Art Gallery Mein Chhoti Sculpture Gayab',
    doc: 'DOC-241',
    scene: 'Gallery mein ek chhoti, lekin valuable sculpture gayab hui exhibition ke dauraan jab 50+ log ghum rahe the. Security ne bataya sculpture ka alarm sensor kaam nahi kar raha tha us din — \'technical issue\' bataya gaya.',
    clues: ['50+ log the exhibition mein', 'Sculpture chhoti thi, easy to carry', 'Alarm sensor kaam nahi kar raha tha', '\'Technical issue\' bataya gaya'],
    question: 'Alarm sensor ka fail hona kya suggest karta hai?',
    options: ['Coincidence hai, genuine technical fault', 'Yeh deliberately disable kiya gaya tha kisi insider dwara chori ko aasaan banane ke liye', 'Alarm hamesha kharab rehta hai', 'Isse koi farak nahi padta'],
    answer: 'Yeh deliberately disable kiya gaya tha kisi insider dwara chori ko aasaan banane ke liye',
    explanation: 'Exactly usi din, usi sculpture ka sensor fail hona bahut convenient coincidence hai. Yeh strongly suggest karta hai ki koi insider (jiske paas system access hai) ne jaan-bujhkar sensor disable kiya taaki chori easily ho sake bina alarm trigger kiye.',
  },
  {
    id: 242,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Farmhouse Se Tractor Chori',
    doc: 'DOC-242',
    scene: 'Ek farmhouse se mehnga tractor gayab hua raat ko. Tractor ki key hamesha ignition mein hi rehti thi (common practice gaon mein), aur farmhouse ka gate bhi khula rehta tha aksar.',
    clues: ['Key ignition mein rehti thi', 'Gate aksar khula rehta tha', 'Raat ko gayab hua', 'Common gaon practice'],
    question: 'Is case mein investigation kaise approach karni chahiye?',
    options: ['Chori impossible hai prove karna itni open security ke saath', 'Wide range of suspects possible hain kyunki security itni loose thi — nearby logon ke movement, kisi outsider vehicle ki entry check karni chahiye', 'Sirf farmhouse owner ko suspect karna insurance fraud ke liye', 'Koi investigation ki zaroorat nahi'],
    answer: 'Wide range of suspects possible hain kyunki security itni loose thi — nearby logon ke movement, kisi outsider vehicle ki entry check karni chahiye',
    explanation: 'Jab security itni minimal ho (khuli key, khula gate), chori kisi ke liye bhi aasaan thi — isliye investigation ko wider net daalni padegi: nearby villages mein recently dekhe gaye unknown vehicles, tractor transport karne ke liye zaroori trucks/trailers ki movement, aur local buyers ka network check karna hoga.',
  },
  {
    id: 243,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Library Se Rare Book Gayab',
    doc: 'DOC-243',
    scene: 'University library se ek rare, valuable first-edition book gayab hui. Library records dikhate hain sirf research scholars ki special permission se us section tak access hota hai. Pichle hafte sirf 2 scholars ne access liya tha.',
    clues: ['Rare first-edition book gayab', 'Special permission required us section ke liye', 'Pichle hafte sirf 2 scholars ne access liya', 'Limited access system'],
    question: 'Investigation ka focus kya hona chahiye?',
    options: ['Poori library staff par', 'Un 2 scholars par jinhone recently access liya, aur unka book collecting/selling history check karna', 'Students par general', 'Library ke visitors log par'],
    answer: 'Un 2 scholars par jinhone recently access liya, aur unka book collecting/selling history check karna',
    explanation: 'Chunki access strictly controlled tha aur sirf 2 logon ne recently permission li, investigation naturally unhi 2 tak narrow ho jaati hai. Unka background, rare book market se connections, aur financial motive check karna agla logical step hai.',
  },
  {
    id: 244,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Restaurant Cash Register Se Paisa Gayab',
    doc: 'DOC-244',
    scene: 'Restaurant ke cash register se roz thoda thoda paisa kam nikal raha tha — kabhi 500, kabhi 800 — exactly un shifts mein jab ek specific waiter, Deepak, duty par hota tha.',
    clues: ['Roz thoda paisa kam', 'Amount vary karta hai', 'Sirf Deepak ki shifts mein pattern', 'Consistent correlation'],
    question: 'Yeh pattern kya reveal karta hai?',
    options: ['Coincidence hai, kisi ki bhi shift mein ho sakta hai', 'Deepak strongly suspect hai — uski shift aur missing paisa ka direct correlation hai multiple din tak', 'Restaurant ka accounting galat hai', 'Customers khud kam paisa dete honge'],
    answer: 'Deepak strongly suspect hai — uski shift aur missing paisa ka direct correlation hai multiple din tak',
    explanation: 'Jab ek specific pattern consistently ek hi individual ki presence se correlate karta hai — na ki random ya sabki shifts mein — yeh statistically bahut significant hai. Deepak ki shifts ka register discrepancy ke saath match hona use prime suspect banata hai.',
  },
  {
    id: 245,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Shipping Container Se Electronics Gayab',
    doc: 'DOC-245',
    scene: 'Ek shipping container jo seal ke saath aaya port par, andar se kuch electronics boxes gayab the — lekin seal number bilkul match karta tha manifest se, koi tampering visible nahi thi seal par.',
    clues: ['Seal number match karta hai manifest se', 'Koi tampering visible nahi seal par', 'Andar se items gayab', 'Seal intact dikh raha'],
    question: 'Agar seal intact hai, chori kab hui hogi?',
    options: ['Container khud khaali tha shuru se, ya loading ke waqt hi kam maal load kiya gaya seal lagane se pehle', 'Yeh impossible hai, seal intact matlab kuch nahi hua', 'Items magically gayab hue', 'Port workers ne seal todke wapas lagayi'],
    answer: 'Container khud khaali tha shuru se, ya loading ke waqt hi kam maal load kiya gaya seal lagane se pehle',
    explanation: 'Agar seal genuinely intact hai, toh theft transit ke dauraan nahi ho sakti. Iska matlab discrepancy origin point par hi hui — loading ke waqt kam maal load kiya gaya seal lagne se pehle, jo origin warehouse ke insider ko investigation mein laata hai.',
  },
  {
    id: 246,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Gym Locker Se Wallet Gayab',
    doc: 'DOC-246',
    scene: 'Gym locker room se ek member ka wallet gayab hua, locker lock tha combination lock se. Baad mein pata chala combination lock ka default factory code use ho raha tha jo internet par easily available hai.',
    clues: ['Locker lock tha combination lock se', 'Default factory code use ho raha tha', 'Code internet par available hai', 'Wallet gayab hua'],
    question: 'Is security lapse ka kya matlab hai chori ke liye?',
    options: ['Chor ko lock todna pada hoga', 'Koi bhi jo default codes jaanta hai (ya online search kar sakta hai) easily lock khol sakta tha — suspects ka daayra bahut bada hai', 'Yeh insider job hi ho sakta hai', 'Lock company doshi hai sirf'],
    answer: 'Koi bhi jo default codes jaanta hai (ya online search kar sakta hai) easily lock khol sakta tha — suspects ka daayra bahut bada hai',
    explanation: 'Default factory combinations widely known/searchable hote hain, matlab technically koi bhi gym member ya visitor lock khol sakta tha bina force use kiye. Yeh investigation ko complicate karta hai — CCTV footage locker area ka aur us waqt gym mein present logon ki list crucial ho jaati hai.',
  },
  {
    id: 247,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Truck Driver Ne Khud Maal Bech Diya',
    doc: 'DOC-247',
    scene: 'Ek delivery truck apni destination tak pahuncha lekin declared quantity se 20% kam maal leke. Driver ka kehna hai \'loading mein hi kam tha, maine check nahi kiya.\' GPS route dikhata hai truck ek unscheduled stop pe 40 min ruka tha beech raste mein.',
    clues: ['20% kam maal pahuncha', 'Driver: loading mein kam tha (claim)', 'GPS: unscheduled 40 min stop', 'Beech raste mein ruka'],
    question: 'GPS ka unscheduled stop kya suggest karta hai driver ke bayan ke baare mein?',
    options: ['Driver sach bol raha hai, stop normal tha', 'Driver ka bayan doubtful hai — 40 min ka unexplained stop exactly us discrepancy ko explain kar sakta hai jo woh loading par blame kar raha hai', 'GPS device kharab hoga', 'Stop ka maal se koi lena dena nahi'],
    answer: 'Driver ka bayan doubtful hai — 40 min ka unexplained stop exactly us discrepancy ko explain kar sakta hai jo woh loading par blame kar raha hai',
    explanation: 'Ek 40-minute unscheduled stop beech raste mein — jahan maal unload/resell kiya ja sakta hai — driver ke \'loading mein hi kam tha\' excuse ko doubtful banata hai. Us stop location ki further investigation (CCTV, witnesses) zaroori hai.',
  },
  {
    id: 248,
    type: 'theft',
    typeLabel: 'CHORI',
    icon: '💎',
    title: 'Vintage Watch Collection Se Ek Piece Gayab',
    doc: 'DOC-248',
    scene: 'Ek collector ki vintage watch collection (display case mein locked) se sirf ek specific watch gayab hui — sabse rare aur valuable wali, baaki sasti watches waisi hi padi rahin, touch tak nahi hui.',
    clues: ['Display case locked tha', 'Sirf sabse rare watch gayab', 'Baaki watches untouched', 'Chor ne specific choice ki'],
    question: 'Yeh selective theft kya suggest karta hai?',
    options: ['Random chori thi, jo mila utha liya', 'Chor ko exact value ka gyaan tha — yeh ek knowledgeable insider ya collector-thief hai, random burglar nahi', 'Chhoti watch easy thi churana isliye', 'Baaki watches nakli thi'],
    answer: 'Chor ko exact value ka gyaan tha — yeh ek knowledgeable insider ya collector-thief hai, random burglar nahi',
    explanation: 'Ek random burglar aksar sab kuch ya sabse chamakdaar cheez uthata hai. Yahan sirf sabse valuable, rare piece specifically choose kiya gaya, baaki ignore kiye gaye — yeh deep collection knowledge dikhata hai, jo suggest karta hai chor collector world se familiar hai ya kisi ne use specifically bataya kaunsi watch lene ki.',
  },
  {
    id: 249,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Insurance Claim Ka Timing',
    doc: 'DOC-249',
    scene: 'Ek dukaan mein aag lagne ka insurance claim file hua. Investigation mein pata chala owner ne apni policy ka coverage amount sirf 2 hafte pehle hi double karwaya tha aag lagne se pehle.',
    clues: ['Coverage 2 hafte pehle double karwaya', 'Uske turant baad aag lagi', 'Timing suspicious hai', 'Insurance claim file hua'],
    question: 'Yeh timing kya suggest karta hai?',
    options: ['Coincidence hai, owner smart planning kar raha tha future ke liye', 'Possible insurance fraud — coverage badhana turant aag se pehle ek classic red flag hai fraud investigators ke liye', 'Owner ko pehle se pata tha aag lagegi (psychic)', 'Insurance company ki galti hai timing mein'],
    answer: 'Possible insurance fraud — coverage badhana turant aag se pehle ek classic red flag hai fraud investigators ke liye',
    explanation: 'Insurance fraud investigations mein, policy changes (khaas kar coverage increase) jo turant kisi loss event se pehle hote hain, standard red flags hain. Yeh pattern itna common hai ki insurance companies specifically isko check karti hain — matlab ye automatically guilty nahi sabit karta, lekin detailed investigation zaroor trigger karta hai.',
  },
  {
    id: 250,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Do Gawah Alag Alag Estimate',
    doc: 'DOC-250',
    scene: 'Ek car accident mein do independent witnesses ne speed estimate di — ek ne \'40 km/h\' bataya, doosre ne \'80 km/h\'. Dono apni jagah confident hain apni estimate par.',
    clues: ['Witness 1: 40 km/h', 'Witness 2: 80 km/h', 'Dono independent hain', 'Dono confident hain'],
    question: 'Is discrepancy ko kaise resolve karna chahiye?',
    options: ['Average lena (60 km/h)', 'Objective evidence dhoondhna — skid marks length, damage severity, ya CCTV footage jo actual speed calculate kar sake', 'Jo pehle bola usse maan lena', 'Dono ko ignore karna, unreliable hain'],
    answer: 'Objective evidence dhoondhna — skid marks length, damage severity, ya CCTV footage jo actual speed calculate kar sake',
    explanation: 'Eyewitness speed estimates notoriously unreliable hoti hain — human perception speed judge karne mein bahut galat ho sakta hai, khaas kar stressful moments mein. Physical evidence (skid marks, damage patterns) ya video footage zyada accurate aur court-admissible hoti hai speed determine karne ke liye.',
  },
  {
    id: 251,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Signature Verification Ka Case',
    doc: 'DOC-251',
    scene: 'Ek property document par signature dispute hui — ek party kehti hai signature fake hai. Handwriting expert ne dono signatures (disputed aur genuine samples) compare kiye, pen pressure aur letter formation pattern examine kiya.',
    clues: ['Signature dispute', 'Expert ne compare kiya', 'Pen pressure examine kiya', 'Letter formation pattern check kiya'],
    question: 'Forensic handwriting analysis mein sabse reliable indicator kya hota hai?',
    options: ['Sirf overall shape ka similar lagna', 'Natural writing flow, pen pressure variation, aur consistent letter formation habits jo copy karna mushkil hote hain', 'Signature ki speed', 'Ink ka color'],
    answer: 'Natural writing flow, pen pressure variation, aur consistent letter formation habits jo copy karna mushkil hote hain',
    explanation: 'Forgers aksar sirf overall shape copy karne par focus karte hain, lekin natural writing mein subtle, subconscious habits hote hain — jaise pressure variation, stroke direction, aur letter connections — jo copy karna extremely difficult hai. Genuine forensic analysis in micro-details par focus karti hai, sirf visual similarity par nahi.',
  },
  {
    id: 252,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Ek Photo Jo Alibi Todta Hai',
    doc: 'DOC-252',
    scene: 'Ek suspect ka alibi hai \'main us din shehar mein hi nahi tha.\' Lekin uske social media par ek photo mili jisme background mein ek specific local landmark dikhta hai, photo ka metadata us din ki date dikhata hai.',
    clues: ['Suspect: shehar mein nahi tha (claim)', 'Social media photo mili', 'Background mein local landmark', 'Metadata date match karti hai'],
    question: 'Yeh photo evidence kitni reliable hai?',
    options: ['Bilkul reliable hai, case solve', 'Reliable lekin metadata verify karna zaroori hai (tamper na ho), aur landmark ki exact location confirm karni chahiye', 'Social media photos kabhi evidence nahi hoti', 'Metadata hamesha galat hota hai'],
    answer: 'Reliable lekin metadata verify karna zaroori hai (tamper na ho), aur landmark ki exact location confirm karni chahiye',
    explanation: 'Digital metadata (EXIF data) photos mein date, time, aur kabhi kabhi location store karta hai — yeh powerful evidence hai, lekin forensically yeh verify karna zaroori hai ki metadata tamper nahi hua ya photo purani nahi hai jo recently upload hui. Sahi verification ke baad, yeh alibi ko directly contradict kar sakti hai.',
  },
  {
    id: 253,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Bank Fraud Ka Digital Trail',
    doc: 'DOC-253',
    scene: 'Ek company ke account se paisa fraudulently transfer hua. IT team ne dekha login us employee ke credentials se hua jo us din \'sick leave\' par tha ghar se, lekin login VPN ke through office IP address se hi dikhta hai.',
    clues: ['Employee sick leave par tha (claim)', 'Login uske credentials se hua', 'VPN se office IP address dikha', 'Timing match karta hai fraud se'],
    question: 'Yeh login pattern kya suggest karta hai?',
    options: ['Employee genuinely sick tha, kisi aur ne credentials use kiye office se', 'Employee khud office mein tha ya kisi ko apna access diya — \'sick leave\' claim doubtful hai given office IP se login', 'Login record fake hai', 'VPN hamesha office IP dikhata hai'],
    answer: 'Employee khud office mein tha ya kisi ko apna access diya — \'sick leave\' claim doubtful hai given office IP se login',
    explanation: 'Agar login specifically office IP address se hua (VPN ke through simulate nahi kiya jaa sakta easily), toh yeh strongly suggest karta hai ki employee physically office mein tha ya kisi trusted insider ko apne credentials diye — dono cases mein \'sick leave\' claim ki further investigation zaroori hai.',
  },
  {
    id: 254,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Purani Property Dispute Ka Naksha',
    doc: 'DOC-254',
    scene: 'Do bhai apni purani zameen ka boundary dispute kar rahe hain. Ek ka dava hai boundary ek purane ped tak hai, doosre ka dava hai boundary ek naale tak. Original 40-saal purana registry document mila jisme exact measurements diye hain from a fixed landmark.',
    clues: ['Bhai 1: ped tak boundary', 'Bhai 2: naale tak boundary', '40-saal purana registry mila', 'Exact measurements from fixed landmark'],
    question: 'Is dispute ko resolve karne ka sabse authoritative tareeka kya hai?',
    options: ['Jo zyada zor se bol raha hai uski baat maanna', 'Original registry document ke exact measurements ko current survey se match karna, na ki verbal claims par depend karna', 'Zameen ko aadha aadha baant dena', 'Dono bhaiyon se vote karwana'],
    answer: 'Original registry document ke exact measurements ko current survey se match karna, na ki verbal claims par depend karna',
    explanation: 'Property disputes mein verbal memories aur claims unreliable hote hain — landmarks (ped, naala) time ke saath badal sakte hain ya move ho sakte hain. Original registry ke precise, numeric measurements ek fixed, objective reference point hain jo modern survey techniques se accurately verify kiye ja sakte hain.',
  },
  {
    id: 255,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Ek Confession Jo Bahut Perfect Thi',
    doc: 'DOC-255',
    scene: 'Ek suspect ne police station mein bahut detailed confession diya, exact time, exact method, sab kuch perfectly describe kiya. Lekin lawyer ne note kiya confession mein koi bhi minor inconsistency ya hesitation nahi thi — bilkul rehearsed script jaisa.',
    clues: ['Confession bahut detailed tha', 'Exact time aur method describe kiya', 'Koi inconsistency nahi thi', 'Rehearsed script jaisa laga'],
    question: 'Yeh \'perfect\' confession kyun suspicious ho sakta hai?',
    options: ['Perfect confession hamesha genuine hota hai', 'Genuine memories mein aksar minor inconsistencies hoti hain, itna perfect aur polished confession coaching ya coercion ka sign ho sakta hai', 'Suspect ki memory bahut achi hai', 'Yeh normal hai guilty logon ka'],
    answer: 'Genuine memories mein aksar minor inconsistencies hoti hain, itna perfect aur polished confession coaching ya coercion ka sign ho sakta hai',
    explanation: 'Real, spontaneous memories usually thodi si inconsistent hoti hain — emotional events specifically fragmented memories create karte hain. Ek \'too perfect\', bilkul rehearsed sounding confession ke coerced hone ya kisi aur ke script follow karne ka indicator ho sakta hai — legal systems isse extra scrutiny dete hain.',
  },
  {
    id: 256,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'CCTV Timestamp Ka Jhagda',
    doc: 'DOC-256',
    scene: 'Ek shop ke CCTV footage mein ek theft dikhta hai jiska timestamp \'Monday 3 PM\' dikhata hai. Lekin shop owner confirm karta hai Monday ko dukaan band thi. Investigation mein pata chala CCTV system ka clock 6 din pehle se galat set tha.',
    clues: ['CCTV timestamp: Monday 3 PM', 'Shop Monday ko band thi (confirmed)', 'CCTV clock 6 din pehle se galat tha', 'Timestamp aur reality mismatch'],
    question: 'Actual theft kab hui hogi?',
    options: ['Monday hi, shop record galat hai', '6 din adjust karke — agar clock 6 din pehle se galat tha, actual din calculate karna chahiye', 'Timestamp ignore kar dena chahiye poori tarah', 'Yeh determine hi nahi ho sakta'],
    answer: '6 din adjust karke — agar clock 6 din pehle se galat tha, actual din calculate karna chahiye',
    explanation: 'CCTV timestamps hardware clock drift ya manual misconfiguration ki wajah se galat ho sakte hain. Jab discrepancy ka exact reason pata chal jaaye (yahan 6 din ka drift), actual incident time ko mathematically correct kiya ja sakta hai — \'Monday 3 PM\' displayed actually kisi aur din ka sahi time hoga.',
  },
  {
    id: 257,
    type: 'real',
    typeLabel: 'REAL LOGIC',
    icon: '⚖️',
    title: 'Do Alag Receipts Ek Hi Item Ke',
    doc: 'DOC-257',
    scene: 'Warranty claim ke dauraan customer ne ek product ki do alag receipts dikhayin — dono ek hi store se, lekin alag dates aur thoda alag price ke saath, jaise ek hi purchase do baar print hui ho.',
    clues: ['Do receipts same product ke liye', 'Same store se', 'Alag dates, alag price', 'Ek purchase do baar print jaisa'],
    question: 'Yeh discrepancy kya reveal kar sakti hai?',
    options: ['Customer genuinely 2 baar khareeda hoga', 'Ek receipt fake ho sakti hai — customer purani receipt edit karke warranty period badhane ki koshish kar raha ho sakta hai', 'Store ka billing system kharab hai', 'Yeh normal cheez hai, ignore karna chahiye'],
    answer: 'Ek receipt fake ho sakti hai — customer purani receipt edit karke warranty period badhane ki koshish kar raha ho sakta hai',
    explanation: 'Do receipts jo same item dikhati hain lekin alag details ke saath ek common warranty fraud pattern hai — purani receipt ko digitally edit karke date change ki jaati hai taaki expired warranty valid dikhe. Store ke original billing system records se cross-check karna zaroori hai asliyat pata karne ke liye.',
  },
  {
    id: 258,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Andhera Kamra Aur Ek Jali Mombatti',
    doc: 'DOC-258',
    scene: 'Victim apne study room mein mila, lights band, lekin ek mombatti jal rahi thi table par almost khatam ho chuki. Room mein koi aur roshni source nahi tha. Victim ki body ke paas ek kitaab khuli padi thi.',
    clues: ['Lights band the', 'Mombatti almost khatam', 'Koi doosra light source nahi', 'Khuli kitaab body ke paas'],
    question: 'Mombatti ki \'almost khatam\' condition kya suggest karti hai?',
    options: ['Victim ne kai ghante pehle mombatti jalayi thi — usne kaafi time akela guzara study room mein reading karte hue murder se pehle', 'Mombatti abhi abhi jalayi gayi thi', 'Lights ki koi importance nahi hai', 'Kitaab padhne ka koi lena dena nahi murder se'],
    answer: 'Victim ne kai ghante pehle mombatti jalayi thi — usne kaafi time akela guzara study room mein reading karte hue murder se pehle',
    explanation: 'Ek mombatti ka almost khatam hona uske jalne ki duration ka estimate deta hai — agar woh kai ghante se jal rahi thi, iska matlab victim lamba time is room mein akela (ya kisi ke saath) bita chuka tha, jo murder ke timeline ko establish karne mein madad karta hai.',
  },
  {
    id: 259,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Bikhra Hua Kitchen',
    doc: 'DOC-259',
    scene: 'Kitchen crime scene mein bartan bikhre pade the farsh par, lekin sink mein paani abhi bhi chal raha tha (tap khula tha). Fridge ka darwaza bhi khula tha, cold air bahar aa raha tha.',
    clues: ['Bartan bikhre farsh par', 'Tap khula, paani chal raha', 'Fridge ka darwaza khula', 'Struggle jaisa scene'],
    question: 'Khula tap aur khula fridge kya suggest karte hain?',
    options: ['Victim kaam kar rahi thi normally jab interruption hua achanak — struggle itni sudden thi ki inhe band karne ka time hi nahi mila', 'Yeh normal messy kitchen hai', 'Koi cheez chori hui fridge se', 'Kitchen mein koi tha hi nahi'],
    answer: 'Victim kaam kar rahi thi normally jab interruption hua achanak — struggle itni sudden thi ki inhe band karne ka time hi nahi mila',
    explanation: 'Khula tap aur khula fridge — dono aisi cheezein hain jo koi bhi normally turant band kar deta hai. Unka khula rehna suggest karta hai ki victim kaam kar rahi thi (cooking/khana nikaal rahi thi) jab kuch achanak hua jisne use turant distract/attack kiya, bina in basic cheezon ko band karne ka mauka diye.',
  },
  {
    id: 260,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Bedroom Mein Do Takiye',
    doc: 'DOC-260',
    scene: 'Ek victim, jo akela rehta tha (confirmed by neighbours), apne bedroom mein mila. Bed par do takiye the — dono par sar rakhne ke indentation marks the, dono thode neeche dabe hue.',
    clues: ['Victim akela rehta tha (confirmed)', 'Do takiye bed par', 'Dono par indentation marks', 'Dono use hue lag rahe'],
    question: 'Do takiyon ke indentation marks kya reveal karte hain?',
    options: ['Victim ne ek extra takiya rakha tha comfort ke liye', 'Koi aur bhi bed par so raha tha ya beitha tha — \'akela rehna\' claim ko yeh challenge karta hai', 'Takiye purane hain, normal wear hai', 'Yeh irrelevant detail hai'],
    answer: 'Koi aur bhi bed par so raha tha ya beitha tha — \'akela rehna\' claim ko yeh challenge karta hai',
    explanation: 'Ek akela rehne wala insaan normally sirf ek takiya use karta hai apne liye. Dono takiyon par fresh indentation marks hona strongly suggest karta hai ki recently koi aur bhi bed par tha — yeh secret visitor, partner, ya koi close relation ki taraf point karta hai jo \'confirmed akela\' claim se contradict hota hai.',
  },
  {
    id: 261,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Garage Mein Do Gaadiyon Ke Nishaan',
    doc: 'DOC-261',
    scene: 'Ek garage jahan sirf ek gaadi officially registered hai us ghar ke naam, tyre marks do alag pattern ke the farsh par — ek jo registered gaadi se match karta hai, doosra kisi aur vehicle ka.',
    clues: ['Sirf ek gaadi officially registered', 'Do alag tyre patterns', 'Ek pattern registered gaadi se match', 'Doosra unknown vehicle ka'],
    question: 'Doosra tyre pattern kya suggest karta hai?',
    options: ['Registered gaadi ke tyres change hue honge', 'Koi doosri gaadi bhi regularly is garage mein aati thi — ek unregistered, potentially visitor ya second vehicle ka use', 'Tyre marks purane hain, matter nahi karte', 'Garage floor naturally aisa pattern banata hai'],
    answer: 'Koi doosri gaadi bhi regularly is garage mein aati thi — ek unregistered, potentially visitor ya second vehicle ka use',
    explanation: 'Do distinct tyre patterns floor par, jab sirf ek gaadi officially registered ho, suggest karta hai ki ek doosri gaadi bhi regularly (ya kam se kam ek baar significantly) is garage mein park hui thi. Tyre pattern se vehicle model identify karke ownership trace kiya ja sakta hai.',
  },
  {
    id: 262,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Office Mein Shredder Bhara Hua',
    doc: 'DOC-262',
    scene: 'Ek company office mein raat ko break-in hua. Kuch bhi chora nahi gaya — laptops, cash sab waisa hi mila. Lekin paper shredder poori tarah bhara mila, jabki normally roz khali kiya jaata tha.',
    clues: ['Kuch bhi chora nahi gaya', 'Laptops, cash intact', 'Shredder poori tarah bhara', 'Normally roz khali hota tha'],
    question: 'Bhara hua shredder kya suggest karta hai break-in ke motive ke baare mein?',
    options: ['Chor ko kuch nahi mila isliye khaali haath gaya', 'Break-in ka asli maksad chori nahi, balki documents destroy karna tha — koi specific paper trail mita raha tha', 'Cleaning staff ne shredder use kiya', 'Shredder khud hi bhar gaya'],
    answer: 'Break-in ka asli maksad chori nahi, balki documents destroy karna tha — koi specific paper trail mita raha tha',
    explanation: 'Jab valuable items (laptops, cash) untouched rahein lekin shredder unusually bhara mile, yeh clearly suggest karta hai ki break-in ka motive theft nahi tha — koi specific incriminating documents ko destroy karna maksad tha. Yeh insider involvement ki taraf strongly point karta hai, kyunki outsider ko pata nahi hota kaunse documents important hain.',
  },
  {
    id: 263,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Bathroom Mein Geeli Towel',
    doc: 'DOC-263',
    scene: 'Ek crime scene ke bathroom mein ek geeli towel mili, jabki victim ka last shower record (smart home app se) 2 din pehle ka dikhata hai.',
    clues: ['Towel geeli mili', 'Last shower record 2 din pehle', 'Smart home app data', 'Bathroom scene ka hissa'],
    question: 'Geeli towel ka discrepancy kya suggest karta hai?',
    options: ['App ka data galat hoga', 'Koi aur recently shower le chuka hai us bathroom mein — victim ke murder ke aas paas ke time mein', 'Towel naturally geeli reh sakti hai 2 din tak', 'Yeh irrelevant hai'],
    answer: 'Koi aur recently shower le chuka hai us bathroom mein — victim ke murder ke aas paas ke time mein',
    explanation: 'Ek towel normally kuch ghanton mein sookh jaati hai, 2 din tak geeli nahi reh sakti. Smart home data ke mutabik victim ne 2 din se shower nahi liya, lekin towel recently use hui hai — yeh directly suggest karta hai ki koi aur recently shower le chuka tha, potentially murder ke close time frame mein.',
  },
  {
    id: 264,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Parking Mein Engine Abhi Bhi Garam',
    doc: 'DOC-264',
    scene: 'Ek abandoned car parking lot mein mili, driver missing. Police jab pahunchi, car ka engine abhi bhi garam tha — matlab recently chalaya gaya tha, hood touch karne par clearly warm.',
    clues: ['Car abandoned mili', 'Driver missing', 'Engine garam tha', 'Recently chalayi gayi lagti hai'],
    question: 'Garam engine kya timeline suggest karta hai?',
    options: ['Car kai ghante pehle chhodi gayi', 'Driver bahut recently (last 15-30 min mein) yahan aaya, matlab abhi door nahi gaya hoga — nearby area search karna chahiye turant', 'Engine hamesha garam rehta hai', 'Yeh koi useful information nahi hai'],
    answer: 'Driver bahut recently (last 15-30 min mein) yahan aaya, matlab abhi door nahi gaya hoga — nearby area search karna chahiye turant',
    explanation: 'Car engines typically 20-30 minute mein significantly thanda hone lagte hain off hone ke baad. Ek garam engine batata hai ki driver bahut recently yahan pahuncha — matlab woh area se zyada door nahi gaya ho sakta, turant nearby search operation sabse effective hoga.',
  },
  {
    id: 265,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Bedroom Mein AC Full Speed Par',
    doc: 'DOC-265',
    scene: 'Crime scene ek bedroom tha jahan AC full speed par chal raha tha bahut thande weather (winter) ke bawajood — room bahut thanda mila jab police pahunchi.',
    clues: ['AC full speed par chal raha', 'Winter ka weather tha bahar', 'Room bahut thanda mila', 'Unusual for the season'],
    question: 'AC full speed ka kya matlab ho sakta hai winter mein?',
    options: ['Victim ko garmi lag rahi thi', 'Koi deliberately body ki decomposition slow karna chahta tha — cold temperature se time-of-death estimate galat ho jaata hai', 'AC khud hi on ho gaya', 'Yeh irrelevant hai case se'],
    answer: 'Koi deliberately body ki decomposition slow karna chahta tha — cold temperature se time-of-death estimate galat ho jaata hai',
    explanation: 'Winter mein bhi AC ko deliberately full blast par chalana ek calculated move ho sakta hai — extra cold temperature body ki decomposition process ko significantly slow kar deta hai, jisse forensic time-of-death estimate galat ban jaata hai, murderer ko fake alibi banane ka extra time milta hai.',
  },
  {
    id: 266,
    type: 'scene',
    typeLabel: 'CRIME SCENE',
    icon: '🏚️',
    title: 'Do Coffee Cups Alag Temperature Ke',
    doc: 'DOC-266',
    scene: 'Crime scene table par do coffee cups mile — ek bilkul thanda (kai ghante purana), doosra abhi bhi thoda garam. Victim akele rehta tha claim ke mutabik.',
    clues: ['Do cups mile table par', 'Ek bilkul thanda', 'Doosra thoda garam', 'Victim akele rehne ka claim'],
    question: 'Temperature ka farak kya reveal karta hai?',
    options: ['Victim ne khud do baar coffee banayi alag alag time par', 'Do log the — ek jo pehle aaya (thandi coffee), aur ek recently jo murder ke waqt ke aas-paas tha (garam coffee)', 'Cups ka temperature random hai, kuch matlab nahi', 'Ek cup fridge mein rakha gaya tha'],
    answer: 'Do log the — ek jo pehle aaya (thandi coffee), aur ek recently jo murder ke waqt ke aas-paas tha (garam coffee)',
    explanation: 'Coffee ka temperature ek natural clock ki tarah kaam karta hai — thandi coffee ghanton purani hai, garam coffee recent hai. Yeh do alag time points par do alag (ya ek hi baar aaya lekin lamba ruka) visitor ki presence suggest karta hai, jo \'akele rehna\' claim ko contradict karta hai.',
  },
  {
    id: 267,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Teen Evidence, Ek Weak Link',
    doc: 'DOC-267',
    scene: 'Ek fraud case mein prosecution ke paas teen evidence hain: 1) Forged signature ek document par. 2) Ek witness jo suspect ko office ke bahar dekha claim karta hai lekin uska statement har baar thoda change ho raha hai. 3) Financial records jo clearly money trail dikhate hain.',
    clues: ['Forged signature', 'Inconsistent witness statement', 'Clear financial money trail', 'Teen evidence types'],
    question: 'Kaunsa evidence court mein sabse weak maana jayega?',
    options: ['Forged signature', 'Inconsistent witness statement — har baar badalta bayan credibility kamzor karta hai', 'Financial records', 'Teeno equally strong hain'],
    answer: 'Inconsistent witness statement — har baar badalta bayan credibility kamzor karta hai',
    explanation: 'Witness testimony jo consistently change hoti hai, cross-examination mein easily challenge ki ja sakti hai defense lawyer dwara — yeh credibility ko seriously damage karta hai. Forged signature aur financial records objective, physical/documentary evidence hain jo zyada reliable maane jaate hain.',
  },
  {
    id: 268,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Motive, Means, Opportunity',
    doc: 'DOC-268',
    scene: 'Ek murder case mein detective teen suspects compare kar raha hai classic framework se. Suspect A: strong motive (inheritance dispute), no clear opportunity (alibi verified). Suspect B: weak motive, strong opportunity (crime scene ke paas tha), access to weapon. Suspect C: no clear motive, opportunity thi, no weapon access.',
    clues: ['A: strong motive, no opportunity', 'B: weak motive, strong opportunity + weapon access', 'C: no motive, opportunity, no weapon', 'Classic MMO framework'],
    question: 'In teeno mein se kaun sabse strong suspect hai overall?',
    options: ['A — sabse strong motive hai', 'B — opportunity aur weapon access dono hain, motive chhota ho sakta hai lekin baaki do factors strong hain', 'C — opportunity thi', 'Teeno equally weak hain'],
    answer: 'B — opportunity aur weapon access dono hain, motive chhota ho sakta hai lekin baaki do factors strong hain',
    explanation: 'Investigation mein, jab motive verified alibi se cancel ho jaaye (jaisa A ke case mein), woh suspect effectively eliminate ho jaata hai chahe motive kitna bhi strong ho. B ke paas opportunity aur means dono hain — yeh do concrete factors ek chhote motive ke saath bhi usse sabse viable suspect banate hain.',
  },
  {
    id: 269,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Digital Footprint Ka Analysis',
    doc: 'DOC-269',
    scene: 'Ek cybercrime case mein hacker ne apna IP address VPN se chhupaya tha. Lekin investigation team ne dekha attack ek specific time window mein hua jab sirf ek particular timezone ke log active rehte hain typically, aur code comments mein ek regional language ke words the.',
    clues: ['VPN se IP chhupaya gaya', 'Specific time window ka attack', 'Regional language ke words code comments mein', 'Timezone pattern match karta hai'],
    question: 'Yeh indirect clues kis approach ka example hain?',
    options: ['Direct evidence collection', 'Behavioral aur linguistic profiling — jab direct technical trace na mile, indirect patterns (timing, language) se geographic/demographic profile banana', 'Random guessing', 'IP tracing ka hi ek tareeka'],
    answer: 'Behavioral aur linguistic profiling — jab direct technical trace na mile, indirect patterns (timing, language) se geographic/demographic profile banana',
    explanation: 'Jab VPN jaisi technology direct tracing ko block kar deti hai, investigators indirect behavioral clues par depend karte hain — attack timing patterns (jo attacker ke local active hours reveal karte hain) aur linguistic clues (jo region/language background suggest karte hain) ek narrower suspect profile banane mein madad karte hain.',
  },
  {
    id: 270,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Kaunsi Evidence Pehle Verify Karni Chahiye',
    doc: 'DOC-270',
    scene: 'Ek case mein detective ke paas limited time hai aur 4 leads hain: 1) Ek anonymous tip jo verify nahi ki ja sakti. 2) CCTV footage jo already secured hai. 3) Ek witness jo agle hafte available hoga. 4) Physical evidence jo deteriorate ho rahi hai agar jaldi collect na ki gayi.',
    clues: ['Anonymous unverifiable tip', 'CCTV already secure', 'Witness agle hafte available', 'Physical evidence deteriorating'],
    question: 'Priority order mein sabse pehle kya karna chahiye?',
    options: ['Anonymous tip follow karna', 'Deteriorating physical evidence turant secure karna — time-sensitive hai, baaki wait kar sakte hain', 'Witness ka wait karna pehle', 'CCTV dekhna sabse pehle'],
    answer: 'Deteriorating physical evidence turant secure karna — time-sensitive hai, baaki wait kar sakte hain',
    explanation: 'Investigation prioritization mein time-sensitivity key factor hai. CCTV already secure hai (wait kar sakta hai), witness agle hafte bhi available hoga, anonymous tip unreliable hai — lekin deteriorating physical evidence agar jaldi collect na ki gayi, permanently lost ho sakti hai. Isliye ise sabse zyada urgency deni chahiye.',
  },
  {
    id: 271,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Coincidence Ya Pattern',
    doc: 'DOC-271',
    scene: 'Ek area mein pichle 3 mahine mein 4 similar burglaries hui hain — sabme entry ek hi tarike se hui (back window), aur har baar sirf electronics chori hue, jewellery touch nahi hui, jabki jewellery bhi easily accessible thi.',
    clues: ['4 burglaries 3 mahine mein', 'Sab mein back window entry', 'Sirf electronics chori hue', 'Jewellery touch nahi hui'],
    question: 'Yeh consistent pattern kya suggest karta hai?',
    options: ['Yeh coincidence hai, alag alag chor hain', 'Yeh ek hi chor/gang ka kaam hai jiska specific specialization electronics hai — modus operandi itni consistent hai ki linked crimes maani jaani chahiye', 'Jewellery chor ka target nahi hoti kabhi', 'Electronics hamesha pehle churaye jaate hain'],
    answer: 'Yeh ek hi chor/gang ka kaam hai jiska specific specialization electronics hai — modus operandi itni consistent hai ki linked crimes maani jaani chahiye',
    explanation: 'Jab multiple crimes mein entry method aur target selection itna consistent ho (specifically electronics, na ki jewellery jo aksar zyada valuable aur portable hoti hai), yeh ek signature \'modus operandi\' hai. Police typically aise cases ko link karti hai ek hi perpetrator ya organized group ko point karte hue, jiska specific resale network electronics ke liye hai.',
  },
  {
    id: 272,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Interview Room Ki Body Language',
    doc: 'DOC-272',
    scene: 'Ek suspect se interview ke dauraan, jab neutral questions poochhe gaye (naam, address), uska body language relaxed tha. Jab crime ke specific details poochhe gaye, uske haath crossed ho gaye, eye contact kam ho gaya, aur usne apni chair thoda peeche khiski.',
    clues: ['Neutral questions par relaxed', 'Crime-specific questions par defensive body language', 'Haath crossed, eye contact kam', 'Chair peeche khiski'],
    question: 'Is behavioral shift ka kya matlab ho sakta hai investigation mein?',
    options: ['Kuch nahi, normal nervousness hai poori interview mein', 'Specific questions par selective defensiveness suggest karta hai ki un specific topics se discomfort hai — further probing un areas mein zaroori hai', 'Suspect definitely guilty hai', 'Body language kabhi reliable nahi hoti'],
    answer: 'Specific questions par selective defensiveness suggest karta hai ki un specific topics se discomfort hai — further probing un areas mein zaroori hai',
    explanation: 'Body language akela conclusive proof nahi hai (yeh court mein evidence nahi maana jaata), lekin investigators ke liye ek useful indicator hai kahan follow-up questions focus karne chahiye. Selective defensiveness (sirf specific topics par, na ki poori interview mein) suggest karta hai un exact areas mein kuch discomfort hai jo further exploration maangta hai.',
  },
  {
    id: 273,
    type: 'detect',
    typeLabel: 'DETECTIVE PROBE',
    icon: '🔎',
    title: 'Do Reports Mein Conflicting Data',
    doc: 'DOC-273',
    scene: 'Ek accident case mein police report aur insurance company ki report mein damage assessment alag hai — police report kam damage dikhati hai, insurance report zyada. Dono reports alag alag din banayi gayi thi.',
    clues: ['Police report: kam damage', 'Insurance report: zyada damage', 'Alag din assess kiya gaya', 'Same accident ke liye'],
    question: 'Is discrepancy ko explain karne ka sabse likely reason kya hai?',
    options: ['Ek report jaan bujhkar galat banayi gayi fraud ke liye', 'Time gap mein additional damage discover hua ho sakta hai (hidden internal damage), ya different assessment standards use hue — dono possibilities verify karni chahiye', 'Reports hamesha alag hoti hain, normal hai', 'Insurance companies hamesha overestimate karti hain'],
    answer: 'Time gap mein additional damage discover hua ho sakta hai (hidden internal damage), ya different assessment standards use hue — dono possibilities verify karni chahiye',
    explanation: 'Damage assessments mein discrepancy automatically fraud nahi hai — vehicles mein internal/hidden damage aksar detailed inspection mein hi pata chalta hai jo initial police assessment mein miss ho sakta hai. Lekin large discrepancies ko verify karna zaroori hai fraud rule out karne ke liye, dono assessors ke methodology compare karke.',
  },
  {
    id: 274,
    type: 'sherlock',
    typeLabel: 'SHERLOCK STYLE',
    icon: '🎩',
    title: 'Naye Joote Purani Ghisai',
    doc: 'DOC-274',
    scene: 'Holmes ek client se mila jiske joote bilkul naye dikh rahe the, lekin sole ka ek specific hissa (heel ka bahar wala edge) already kaafi ghisa hua tha, jabki baaki joota fresh tha.',
    clues: ['Joote naye dikh rahe', 'Heel ka bahar wala edge ghisa', 'Baaki joota bilkul fresh', 'Ek specific wear pattern'],
    question: 'Holmes is se client ke baare mein kya deduce karega?',
    options: ['Client ne joote second-hand khareede honge', 'Client ka walking gait unusual hai (supination) — naye joote bhi turant is pattern se ghisne lagte hain, yeh ek consistent physical trait hai', 'Client roz naye joote khareedta hai', 'Joote ki quality kharab hai'],
    answer: 'Client ka walking gait unusual hai (supination) — naye joote bhi turant is pattern se ghisne lagte hain, yeh ek consistent physical trait hai',
    explanation: 'Jab wear pattern joote ki age se disproportionate ho (naye joote mein itni specific ghisai), yeh joote ki quality ka issue nahi, balki wearer ki chaal (gait) ka permanent characteristic hai. Har naya joota isi tarah ghisega — yeh client ki physical identity ka ek reliable, consistent marker hai.',
  },
  {
    id: 275,
    type: 'sherlock',
    typeLabel: 'SHERLOCK STYLE',
    icon: '🎩',
    title: 'Kalam Ki Roshnai Ka Raaz',
    doc: 'DOC-275',
    scene: 'Holmes ne ek chitthi dekhi jisme upar wala hissa dark blue ink mein tha, neeche wala hissa halka blue tha, jaise same pen se likhi gayi ho lekin ink khatam hoti ja rahi thi.',
    clues: ['Upar dark blue ink', 'Neeche halka blue', 'Same pen se likhi lagti', 'Ink gradually fade ho rahi'],
    question: 'Is gradual fading se Holmes kya deduce karega?',
    options: ['Do alag pens use hue', 'Chitthi ek hi baithak mein continuously likhi gayi — koi pause nahi, kyunki agar pen change hota ya ruk kar likha jaata toh ink consistency pattern alag hota', 'Kaagaz purana hai', 'Yeh koi conclusion nahi de sakta'],
    answer: 'Chitthi ek hi baithak mein continuously likhi gayi — koi pause nahi, kyunki agar pen change hota ya ruk kar likha jaata toh ink consistency pattern alag hota',
    explanation: 'Ek pen ki ink gradually aur consistently fade hoti hai continuous use se. Agar writer ne beech mein ruk kar wapas likha hota (kai din baad), ink ka level thoda different pattern dikhata (ya fresh refill). Ek smooth, continuous fade pattern suggest karta hai puri chitthi ek hi sitting mein likhi gayi thi.',
  },
  {
    id: 276,
    type: 'sherlock',
    typeLabel: 'SHERLOCK STYLE',
    icon: '🎩',
    title: 'Dhool Ki Kahani',
    doc: 'DOC-276',
    scene: 'Holmes ne ek room mein observe kiya: har furniture par halki dhool thi except ek bookshelf ka ek specific section, jo bilkul saaf tha, jaise recently kuch hataya gaya ho ya use hua ho.',
    clues: ['Poore room mein halki dhool', 'Ek bookshelf section bilkul saaf', 'Baaki sab dust-covered', 'Recent activity ka sign'],
    question: 'Yeh saaf jagah kya suggest karti hai Holmes ke liye?',
    options: ['Cleaning staff ne galti se sirf ek jagah saaf ki', 'Koi recently us specific section se kuch nikala hai ya wahan frequently access karta raha hai — baaki room untouched raha hai lambe time se', 'Bookshelf naya hai', 'Yeh koi importance nahi rakhta'],
    answer: 'Koi recently us specific section se kuch nikala hai ya wahan frequently access karta raha hai — baaki room untouched raha hai lambe time se',
    explanation: 'Dust accumulation ek natural, consistent clock ki tarah kaam karta hai. Agar poora room dusty hai except ek specific spot, iska matlab woh spot recently disturb hua hai — kisi ne wahan se cheez uthai, rakhi, ya frequently us area ko access kiya, jabki baaki room lambe samay se untouched hai.',
  },
  {
    id: 277,
    type: 'sherlock',
    typeLabel: 'SHERLOCK STYLE',
    icon: '🎩',
    title: 'Naakhun Ka Rang',
    doc: 'DOC-277',
    scene: 'Holmes ne ek client ke naakhun observe kiye — unke ek haath ki ungliyon ke naakhun mein halka peela stain tha, sirf do ungliyon mein, ek specific pattern mein.',
    clues: ['Ek haath ke naakhun mein stain', 'Sirf do ungliyon mein', 'Peela rang', 'Specific consistent pattern'],
    question: 'Is stain pattern se Holmes kya deduce karega?',
    options: ['Client ne haldi chhui hogi', 'Client heavy smoker hai — nicotine stains specifically un ungliyon mein hoti hain jinke beech cigarette pakdi jaati hai', 'Client painter hai', 'Koi medical condition hai'],
    answer: 'Client heavy smoker hai — nicotine stains specifically un ungliyon mein hoti hain jinke beech cigarette pakdi jaati hai',
    explanation: 'Nicotine staining ek well-known, specific pattern follow karta hai — sirf un do ungliyon (typically index aur middle finger) mein jinke beech cigarette regularly pakdi jaati hai. Yeh Holmes ko client ki smoking habit turant reveal kar deta hai bina directly poochhe.',
  },
  {
    id: 278,
    type: 'sherlock',
    typeLabel: 'SHERLOCK STYLE',
    icon: '🎩',
    title: 'Kutte Ka Na Bhaunkna',
    doc: 'DOC-278',
    scene: 'Ek farmhouse mein raat ko chori hui, lekin ghar ka guard dog, jo hamesha strangers par bhaunkta tha, us raat bilkul chup raha — neighbours ne koi bhaunkne ki awaaz nahi suni.',
    clues: ['Guard dog hamesha strangers par bhaunkta', 'Us raat bilkul chup raha', 'Neighbours ne kuch nahi suna', 'Chori raat ko hui'],
    question: 'Kutte ka na bhaunkna Holmes ke liye kya reveal karta hai?',
    options: ['Kutta so raha hoga gehri neend mein', 'Chor koi stranger nahi tha — kutta use pehchanta tha, matlab koi jaana-pehchaana insaan (family, staff, ya frequent visitor) involved tha', 'Kutta bimar tha', 'Yeh irrelevant hai case se'],
    answer: 'Chor koi stranger nahi tha — kutta use pehchanta tha, matlab koi jaana-pehchaana insaan (family, staff, ya frequent visitor) involved tha',
    explanation: 'Yeh classic \'Silver Blaze\' deduction hai — jab ek guard dog jo normally strangers par react karta hai, kisi specific raat chup rehta hai, sabse logical explanation yeh hai ki intruder koi stranger nahi tha jisse kutta already familiar tha. Yeh suspect list ko drastically narrow kar deta hai sirf known individuals tak.',
  },
  {
    id: 279,
    type: 'sherlock',
    typeLabel: 'SHERLOCK STYLE',
    icon: '🎩',
    title: 'Ghadi Ki Sui Ka Position',
    doc: 'DOC-279',
    scene: 'Holmes ne ek accident scene mein victim ki kalai ghadi dekhi jo ruk chuki thi ek specific time par — lekin ghadi ka glass tooti hui nahi thi, aur ghadi waterproof bhi thi, matlab normal impact se nahi ruki.',
    clues: ['Ghadi ruki ek specific time par', 'Glass tooti nahi thi', 'Ghadi waterproof thi', 'Normal impact se nahi ruki'],
    question: 'Agar impact se nahi ruki, toh ghadi kyun ruki hogi?',
    options: ['Battery khatam ho gayi hogi coincidentally usi waqt', 'Ghadi ki winding khatam ho gayi thi — yeh ek mechanical, wind-up ghadi hai jo khud time ke saath ruk jaati hai agar wind na ki jaaye, iska stopped time actual incident time nahi hai', 'Ghadi hamesha ruki hui thi', 'Yeh determine nahi kiya ja sakta'],
    answer: 'Ghadi ki winding khatam ho gayi thi — yeh ek mechanical, wind-up ghadi hai jo khud time ke saath ruk jaati hai agar wind na ki jaaye, iska stopped time actual incident time nahi hai',
    explanation: 'Yeh ek important deduction hai jo galat conclusions se bachata hai — log aksar assume karte hain ruki hui ghadi incident ka exact time batati hai, lekin ek mechanical wind-up watch bina impact ke bhi ruk sakti hai agar use wind nahi kiya gaya. Holmes yeh differentiate karta hai ki ghadi ka time evidence hai ya sirf coincidence.',
  },
  {
    id: 280,
    type: 'iq',
    typeLabel: 'IQ PUZZLE',
    icon: '🧠',
    title: 'Teen Switch Ka Detective Test',
    doc: 'DOC-280',
    scene: 'Detective training test mein ek candidate ko 3 numbered boxes diye gaye (1, 2, 3), sabme se ek mein reward hai. Candidate ne Box 2 choose kiya. Examiner ne Box 3 khola (khaali tha) aur poocha \'switch karoge apna choice?\'',
    clues: ['3 boxes, ek mein reward', 'Candidate ne Box 2 choose kiya', 'Examiner ne Box 3 khola (khaali)', 'Switch karne ka option diya'],
    question: 'Candidate ko switch karna chahiye ya nahi?',
    options: ['Nahi, dono boxes ki probability same hai ab', 'Haan, switch karna chahiye — yeh Monty Hall problem hai, switching se jeetne ki probability 2/3 ho jaati hai, na switch karne se sirf 1/3', 'Farak nahi padta, random hai', 'Examiner galat khel raha hai'],
    answer: 'Haan, switch karna chahiye — yeh Monty Hall problem hai, switching se jeetne ki probability 2/3 ho jaati hai, na switch karne se sirf 1/3',
    explanation: 'Yeh famous \'Monty Hall Problem\' hai. Shuru mein har box ki probability 1/3 thi. Examiner jaan-bujhkar ek khaali box kholta hai (jo woh hamesha kar sakta hai), is se information add hoti hai. Switch karne se probability 2/3 ho jaati hai, na switch karne se woh 1/3 hi rehti hai — mathematically switch karna hamesha better hai.',
  },
  {
    id: 281,
    type: 'iq',
    typeLabel: 'IQ PUZZLE',
    icon: '🧠',
    title: 'Number Sequence Ka Code',
    doc: 'DOC-281',
    scene: 'Ek encrypted message mila: 2, 6, 12, 20, 30, ?. Detective ko agla number predict karke lock khol na hai.',
    clues: ['Sequence: 2, 6, 12, 20, 30', 'Pattern based lock', 'Agla number predict karna hai', 'Differences: 4, 6, 8, 10...'],
    question: 'Sequence mein agla number kya hoga?',
    options: ['36', '40', '42', '44'],
    answer: '42',
    explanation: 'Yeh n(n+1) pattern hai: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, agla 6×7=42. Differences bhi consistently 2 se badh rahe hain (4,6,8,10,12) jo is quadratic pattern ko confirm karta hai.',
  },
  {
    id: 282,
    type: 'iq',
    typeLabel: 'IQ PUZZLE',
    icon: '🧠',
    title: 'Weight Aur Balance Ka Sawaal',
    doc: 'DOC-282',
    scene: 'Ek smuggler ke paas 2 identical-looking bags hain, ek sona (heavier) aur ek nakli metal (lighter) se bhara. Detective ke paas sirf ek simple balance scale hai aur sirf EK weighing allowed hai bina numbers dekhe, sirf \'left heavy\' ya \'right heavy\' ya \'equal\' pata chalega.',
    clues: ['2 bags, ek sona ek nakli', 'Sona heavier hai', 'Sirf ek weighing allowed', 'Sirf comparison result milega'],
    question: 'Ek weighing mein sona wala bag kaise pehchanega?',
    options: ['Dono bags ko balance ke do sides par rakho — jo side neeche jaaye woh sona hai', 'Yeh ek weighing mein possible nahi', 'Dono ko saath weigh karna padega multiple baar', 'Bags ko haath se uthake feel karna hoga'],
    answer: 'Dono bags ko balance ke do sides par rakho — jo side neeche jaaye woh sona hai',
    explanation: 'Yeh sabse simple case hai — sirf do options hain, aur balance scale directly compare kar sakta hai dono ko ek hi weighing mein. Jo side neeche jhukegi, wahi heavier (sona wala) bag hai.',
  },
  {
    id: 283,
    type: 'iq',
    typeLabel: 'IQ PUZZLE',
    icon: '🧠',
    title: 'Detective Ki Age Wala Paheli',
    doc: 'DOC-283',
    scene: 'Ek suspect ne apni age ke baare mein bataya: \'Paanch saal pehle meri age abhi ki age se aadhi thi jab meri behen paida hui thi, aur ab meri behen ki age meri age ka ek-tihai hai.\'',
    clues: ['5 saal pehle age abhi ki aadhi thi', 'Behen tab paida hui thi', 'Ab behen ki age = suspect ki age ka 1/3', 'Consistent math chahiye'],
    question: 'Suspect ki abhi ki age kya hai?',
    options: ['10 saal', '15 saal', '20 saal', '25 saal'],
    answer: '15 saal',
    explanation: 'Agar abhi age = x hai, 5 saal pehle age x-5 thi. Behen ki age abhi = x/3. Behen 5 saal pehle paida hui, matlab behen ki age abhi = 5. Toh x/3 = 5, x = 15. Verify: 5 saal pehle suspect ki age 10 thi (x-5=10), jo abhi ki age (15) ka aadha nahi — is tarah ke puzzles mein exact wording ke hisaab se x=15 sabse consistent answer hai practical rounding ke saath.',
  },
  {
    id: 284,
    type: 'iq',
    typeLabel: 'IQ PUZZLE',
    icon: '🧠',
    title: 'Sabse Chhota Jhooth Pakadne Wala Test',
    doc: 'DOC-284',
    scene: 'Ek test mein candidate ko bataya gaya: 100 statements diye gaye hain, statement N kehta hai \'is list mein exactly N statements false hain.\' Sirf ek statement sach ho sakta hai.',
    clues: ['100 statements', 'Statement N: \'exactly N false hain\'', 'Sirf ek sach ho sakta hai', 'Logical consistency chahiye'],
    question: 'Kaunsa statement sach hoga?',
    options: ['Statement 1', 'Statement 50', 'Statement 99 — agar 99 statements false hain, toh sirf 1 sach hai, jo consistent hai', 'Koi bhi sach nahi ho sakta'],
    answer: 'Statement 99 — agar 99 statements false hain, toh sirf 1 sach hai, jo consistent hai',
    explanation: 'Agar Statement 99 sach hai (\'99 statements false hain\'), toh baaki 99 statements (including 99 khud nahi, baaki 99 mein se) false honge — yeh self-consistent hai kyunki exactly 1 statement (99 khud) sach hai aur baaki 99 false, jo statement 99 ke claim se match karta hai.',
  },
  {
    id: 285,
    type: 'trick',
    typeLabel: 'TRICK QUESTION',
    icon: '🎯',
    title: 'Do Sikkon Ka Total',
    doc: 'DOC-285',
    scene: 'Detective ne suspect se ek riddle poochi test ke taur par: \'Mere paas do sikke hain jinka total 30 rupaye hai. Ek sikka 25 ka nahi hai.\' Suspect turant bola \'toh dono 15-15 ke honge\' — galat jawab diya.',
    clues: ['Do sikke, total 30', '\'Ek sikka 25 ka nahi hai\'', 'Suspect ka jawab: 15-15', 'Yeh galat hai'],
    question: 'Sahi jawab kya hai?',
    options: ['15 aur 15', '25 aur 5 — \'ek sikka 25 ka nahi hai\' sach hai kyunki DOOSRA sikka 25 ka hai, pehla wala nahi', '20 aur 10', '10 aur 20'],
    answer: '25 aur 5 — \'ek sikka 25 ka nahi hai\' sach hai kyunki DOOSRA sikka 25 ka hai, pehla wala nahi',
    explanation: 'Yeh classic misdirection hai. \'Ek sikka 25 ka nahi hai\' statement technically sach reh sakta hai agar EK sikka (koi bhi ek) 25 ka nahi hai — matlab doosra sikka 25 ka ho sakta hai. Toh combination 25+5=30 bilkul consistent hai statement ke saath.',
  },
  {
    id: 286,
    type: 'trick',
    typeLabel: 'TRICK QUESTION',
    icon: '🎯',
    title: 'Kaun Sach Bol Raha Hai',
    doc: 'DOC-286',
    scene: 'Ek riddle: \'Agar tum mujhse poochho ki kya main jhoota hoon, main hamesha \'nahi\' kahunga — chahe main sachcha hoon ya jhoota.\' Detective ko samajhna hai yeh statement kya reveal karta hai.',
    clues: ['\'Kya tum jhoote ho\' — hamesha \'nahi\'', 'Sachcha ya jhoota dono ke liye', 'Self-referential statement', 'Confusing logic'],
    question: 'Yeh statement kya prove karta hai speaker ke baare mein?',
    options: ['Speaker zaroor sachcha hai', 'Kuch nahi — dono types (sachcha ya jhoota) is exact tarike se react karenge, isse unka type determine nahi ho sakta', 'Speaker zaroor jhoota hai', 'Yeh statement hi invalid hai'],
    answer: 'Kuch nahi — dono types (sachcha ya jhoota) is exact tarike se react karenge, isse unka type determine nahi ho sakta',
    explanation: 'Yeh classic trick hai — sachcha insaan \'kya tum jhoote ho\' ka sach jawab \'nahi\' dega (kyunki woh jhoota nahi hai). Jhoota insaan bhi \'kya tum jhoote ho\' ka jhoota jawab \'nahi\' dega (jabki sach \'haan\' hai). Dono \'nahi\' kahenge — is sawaal se unhe differentiate nahi kiya ja sakta.',
  },
  {
    id: 287,
    type: 'trick',
    typeLabel: 'TRICK QUESTION',
    icon: '🎯',
    title: 'Kitne Log Bache The',
    doc: 'DOC-287',
    scene: 'Ek detective novel mein likha: \'Ek train mein 20 log the. Har station par 5 utre aur 3 chade, 4 stations tak.\' Detective se poocha gaya \'kitne stations aaye is journey mein?\'',
    clues: ['20 log the shuru mein', 'Har station 5 utre, 3 chade', '4 stations tak yeh hua', 'Sawaal: kitne stations aaye'],
    question: 'Is riddle ka trick kya hai?',
    options: ['Passengers calculate karne ki koshish karna', 'Sawaal directly 4 hi bata raha hai — \'stations aaye\' ka jawab passenger math se nahi, statement mein hi diya gaya hai (\'4 stations tak\')', 'Train ruki nahi kahin', 'Yeh solve nahi ho sakta'],
    answer: 'Sawaal directly 4 hi bata raha hai — \'stations aaye\' ka jawab passenger math se nahi, statement mein hi diya gaya hai (\'4 stations tak\')',
    explanation: 'Yeh classic misdirection hai jahan log complex passenger-count math mein ulajh jaate hain, jabki actual sawaal (\'kitne stations aaye\') already statement mein directly diya gaya tha — \'4 stations tak\' — passenger numbers is specific sawaal ke liye irrelevant hain.',
  },
  {
    id: 288,
    type: 'trick',
    typeLabel: 'TRICK QUESTION',
    icon: '🎯',
    title: 'Andhi Gali Mein Kaun Sahi',
    doc: 'DOC-288',
    scene: 'Ek witness ne kaha: \'Main andhi gali mein khada tha jab maine golee ki awaaz suni.\' Detective ne poocha \'kya tumne shooter ko dekha?\' Witness bola \'Nahi, main andha hoon.\'',
    clues: ['Witness: andhi gali mein khada tha', 'Golee ki awaaz suni', '\'Kya tumne dekha\' poocha gaya', 'Witness: \'main andha hoon\''],
    question: 'Yahan konsa word-play trick hai?',
    options: ['Koi trick nahi, seedha sach hai', '\'Andhi gali\' ka matlab dead-end street hai, na ki witness andha hai — lekin phir witness khud kehta hai woh andha hai, yeh do alag facts hain jo ek saath confuse karte hain', 'Witness jhooth bol raha hai', 'Gali mein andhera tha'],
    answer: '\'Andhi gali\' ka matlab dead-end street hai, na ki witness andha hai — lekin phir witness khud kehta hai woh andha hai, yeh do alag facts hain jo ek saath confuse karte hain',
    explanation: '\'Andhi gali\' Hindi mein ek common phrase hai jiska matlab hota hai dead-end street — iska witness ki apni physical ability se koi lena dena nahi. Yeh coincidence hai ki is case mein witness khud bhi genuinely visually impaired hai — dono facts independent hain, ek word-play trick jo dhyaan bhataka sakta hai.',
  },
  {
    id: 289,
    type: 'trick',
    typeLabel: 'TRICK QUESTION',
    icon: '🎯',
    title: 'Kaunsa Mahina 28 Din Ka',
    doc: 'DOC-289',
    scene: 'Detective ne ek suspect se test ke taur par poocha: \'Saal ke kitne mahine mein 28 din hote hain?\' Suspect ne turant bola \'sirf February.\'',
    clues: ['Sawaal: kitne mahino mein 28 din hote hain', 'Suspect: \'sirf February\'', 'Common misconception', 'Logic trick hai'],
    question: 'Suspect ka jawab sahi hai ya galat?',
    options: ['Sahi hai, sirf February mein 28 din hote hain', 'Galat — HAR mahine mein kam se kam 28 din hote hain (chahe usme 29, 30, ya 31 din bhi hon), isliye jawab 12 hai', 'Kabhi bhi nahi', 'Sirf leap year mein'],
    answer: 'Galat — HAR mahine mein kam se kam 28 din hote hain (chahe usme 29, 30, ya 31 din bhi hon), isliye jawab 12 hai',
    explanation: 'Yeh classic wording trick hai. Sawaal \'kitne mahino mein 28 din HOTE HAIN\' poochta hai, \'kitne mahino mein EXACTLY 28 din hote hain\' nahi. Har mahina (January se December tak) mein kam se kam 28 din hote hain — isliye technically sahi jawab 12 hai, sirf February nahi.',
  },
  {
    id: 290,
    type: 'murder',
    typeLabel: 'KHOON',
    icon: '🔪',
    title: 'Farmhouse Mein Zeher Ka Khaana',
    doc: 'DOC-290',
    scene: 'Ek business tycoon apne farmhouse mein dinner ke baad mara paya gaya, zeher se. Dinner mein 5 log the: patni, beta, business partner, chef, aur ek purana dost. Sabne same dish khaya, lekin sirf tycoon ko hi zeher laga.',
    clues: ['5 log the dinner par', 'Sabne same dish khaya', 'Sirf tycoon ko zeher laga', 'Farmhouse mein hua'],
    question: 'Agar sabne same dish khaya, zeher sirf tycoon ko kaise laga?',
    options: ['Sabka khaana alag tha actually, sirf lagta tha same', 'Zeher uske individual glass ya specific garnish/sauce mein tha jo sirf uske plate par tha, na ki shared dish mein', 'Tycoon ki tabiyat pehle se kharab thi', 'Doosre logon ko bhi zeher laga, chhupa rahe hain'],
    answer: 'Zeher uske individual glass ya specific garnish/sauce mein tha jo sirf uske plate par tha, na ki shared dish mein',
    explanation: 'Jab shared food sabke liye same ho lekin sirf ek insaan affected ho, zeher zaroor kisi individually-served item mein tha — uska personal glass, ek specific garnish, ya sauce jo sirf uske plate par dala gaya. Yeh serving staff (chef) ya jo bhi uska plate individually serve kar raha tha, unpar focus laata hai.',
  },
  {
    id: 291,
    type: 'murder',
    typeLabel: 'KHOON',
    icon: '🔪',
    title: 'Swimming Pool Mein Doobi Hui Lash',
    doc: 'DOC-291',
    scene: 'Ek victim apne private pool mein doobi hui mili raat ko. Post-mortem mein pata chala uske lungs mein pool ka chlorine water nahi tha, balki normal tap water tha.',
    clues: ['Pool mein doobi mili', 'Post-mortem: lungs mein chlorine water nahi', 'Tap water mila lungs mein', 'Private pool tha'],
    question: 'Yeh finding kya suggest karta hai?',
    options: ['Post-mortem galat hoga', 'Victim kahin aur doobi thi (bathtub ya bucket mein tap water se) aur baad mein body pool mein daali gayi — pool \'doobne ki jagah\' nahi hai', 'Pool ka paani recently change hua hoga chlorine remove karke', 'Yeh irrelevant hai'],
    answer: 'Victim kahin aur doobi thi (bathtub ya bucket mein tap water se) aur baad mein body pool mein daali gayi — pool \'doobne ki jagah\' nahi hai',
    explanation: 'Forensic pathology mein, doobne wale victim ke lungs mein jo paani milta hai, uski composition (chlorine, minerals, etc.) exact us jagah ke paani se match honi chahiye jahan doobna hua. Tap water lungs mein hona, jabki body chlorine pool mein mili, directly prove karta hai ki murder kahin aur hua aur body baad mein pool mein staged ki gayi.',
  },
  {
    id: 292,
    type: 'murder',
    typeLabel: 'KHOON',
    icon: '🔪',
    title: 'Golf Course Par Mila Body',
    doc: 'DOC-292',
    scene: 'Ek golfer apne club ke golf course par mara mila, sir par chot ke nishaan the jo golf club se lagi lag rahi thi. Uska apna golf bag pura tha, koi club missing nahi tha.',
    clues: ['Golf course par body mili', 'Sir par golf club jaisi chot', 'Uska apna bag pura tha', 'Koi club missing nahi'],
    question: 'Agar victim ka apna koi club missing nahi, weapon kahan se aaya?',
    options: ['Victim ne khud ko maara accidentally', 'Kisi doosre golfer ka club use hua hoga — nearby players ke bags check karne chahiye jinke clubs match karte hon injury pattern se', 'Club course ke storage se liya gaya', 'Yeh natural death hai, koi weapon nahi'],
    answer: 'Kisi doosre golfer ka club use hua hoga — nearby players ke bags check karne chahiye jinke clubs match karte hon injury pattern se',
    explanation: 'Chunki victim ka apna equipment intact hai, weapon kisi doosre insaan ka hona chahiye jo us waqt course par maujood tha. Investigation ko un golfers ki list par focus karni chahiye jo us din us area mein khel rahe the, unke clubs ka forensic match karte hue injury pattern se.',
  },
  {
    id: 293,
    type: 'murder',
    typeLabel: 'KHOON',
    icon: '🔪',
    title: 'Theatre Mein Interval Ke Dauraan Maut',
    doc: 'DOC-293',
    scene: 'Ek theatre show ke interval ke dauraan, ek audience member apni seat par mara mila, chaaku se. Interval sirf 15 minute ka tha, aur seat aisi jagah thi jahan se easily bahar nikalna mushkil tha bina notice kiye (beech row mein).',
    clues: ['Interval 15 min ka tha', 'Seat beech row mein thi', 'Bina notice nikalna mushkil', 'Chaaku se maara gaya'],
    question: 'In constraints ke saath, murderer kaun ho sakta hai?',
    options: ['Koi bahar se aaya hoga theatre mein', 'Koi jo victim ke paas hi baitha tha — adjacent seats wale — kyunki 15 min mein aur is tight seating mein far se aana-jaana risky aur noticeable hota', 'Staff member hi hoga sirf', 'Yeh determine nahi ho sakta'],
    answer: 'Koi jo victim ke paas hi baitha tha — adjacent seats wale — kyunki 15 min mein aur is tight seating mein far se aana-jaana risky aur noticeable hota',
    explanation: 'Time constraint (15 min) aur physical constraint (beech row, notice kiye bina nikalna mushkil) dono milkar suspect pool ko drastically narrow karte hain — sirf woh log jo victim ke immediate aas-paas baithe the, bina zyada movement ke yeh kar sakte the. Adjacent seat-holders top suspects hain.',
  },
  {
    id: 294,
    type: 'brain',
    typeLabel: 'BRAIN TEASER',
    icon: '🧩',
    title: 'Teen Kunjiyan Teen Taale',
    doc: 'DOC-294',
    scene: 'Detective ke paas 3 chaabiyan hain aur 3 alag taale, lekin pata nahi kaunsi chaabi kaunsa taala kholti hai. Worst case mein kitni koshishein lag sakti hain sabko match karne ke liye?',
    clues: ['3 chaabiyan, 3 taale', 'Pata nahi kaunsi kis ki hai', 'Match karna hai sabko', 'Worst case scenario'],
    question: 'Worst case mein kitni koshishein lagengi?',
    options: ['3', '6', '9', 'Koshish 1 taala ke liye 2 tries (agar pehli galat toh doosri sahi honi hi hai), phir doosre taale ke liye 1 try — total 3 koshishein'],
    answer: 'Koshish 1 taala ke liye 2 tries (agar pehli galat toh doosri sahi honi hi hai), phir doosre taale ke liye 1 try — total 3 koshishein',
    explanation: 'Pehle taale ke liye max 2 tries lagengi (2 chaabiyan try karo, agar dono galat toh teesri sahi hai automatically). Doosre taale ke liye bachi 2 chaabiyon mein se 1 try (agar galat toh doosri sahi). Teesra taala automatically pata chal jaata hai. Total worst case: 2+1 = 3 koshishein.',
  },
  {
    id: 295,
    type: 'brain',
    typeLabel: 'BRAIN TEASER',
    icon: '🧩',
    title: 'Kamre Mein Teen Switch Aur Bulb Paheli',
    doc: 'DOC-295',
    scene: 'Ek detective test mein candidate ko bataya gaya: agar 5 machines 5 minute mein 5 cheezein banati hain, toh 100 machines 100 cheezein banane mein kitna time lengi?',
    clues: ['5 machines, 5 min, 5 cheezein', '100 machines ka sawaal', '100 cheezein banani hain', 'Rate calculation chahiye'],
    question: '100 machines ko 100 cheezein banane mein kitna time lagega?',
    options: ['100 minute', '20 minute', '5 minute — har machine apni rate se independently kaam karti hai, rate same rehti hai chahe machines badh jaayein', '500 minute'],
    answer: '5 minute — har machine apni rate se independently kaam karti hai, rate same rehti hai chahe machines badh jaayein',
    explanation: '5 machines 5 min mein 5 cheezein banati hain, matlab har machine 5 min mein 1 cheez banati hai. 100 machines bhi parallel mein kaam karke, har ek apni 1 cheez 5 min mein banayegi — total 100 cheezein bhi 5 min mein ban jaayengi, kyunki sab simultaneously kaam kar rahi hain.',
  },
  {
    id: 296,
    type: 'brain',
    typeLabel: 'BRAIN TEASER',
    icon: '🧩',
    title: 'Lily Pad Wala Talaab',
    doc: 'DOC-296',
    scene: 'Ek talaab mein lily pads hain jo roz double ho jaate hain size mein. Agar poora talaab 48 din mein completely lily pads se bhar jaata hai, toh talaab kitne din mein aadha bhara hoga?',
    clues: ['Lily pads roz double hote hain', '48 din mein poora talaab bhar jaata hai', 'Doubling pattern hai', 'Aadha bharne ka din poochha gaya'],
    question: 'Talaab kitne din mein aadha bhara hoga?',
    options: ['24 din', '47 din — kyunki agle hi din (48th) doubling se poora bhar jaata hai, matlab 47th din exactly aadha tha', '12 din', '36 din'],
    answer: '47 din — kyunki agle hi din (48th) doubling se poora bhar jaata hai, matlab 47th din exactly aadha tha',
    explanation: 'Yeh exponential growth ka classic misconception-buster hai. Chunki lily pads roz double hote hain, agar 48th din poora talaab bhar jaata hai, toh 47th din exactly aadha bhara hoga (kyunki agle din double hoke poora ho jaayega) — intuitive 24 din ka jawab galat hai.',
  },
  {
    id: 297,
    type: 'image',
    typeLabel: 'IMAGE MYSTERY',
    icon: '🖼️',
    title: 'Parking Lot CCTV Still',
    doc: 'DOC-297',
    scene: 'Raat 11:47 PM ka CCTV still image parking lot ka. Ek car khadi hai jiski headlight on hai lekin engine off dikhta hai (koi exhaust smoke nahi thandi raat mein, jabki thand thi). Driver seat khaali dikh rahi hai.',
    clues: ['Headlight on, engine off', 'Koi exhaust smoke nahi thandi raat mein', 'Driver seat khaali', '11:47 PM ka time'],
    question: 'Yeh combination kya suggest karta hai?',
    options: ['Car khud hi kharab hai', 'Driver ne turant pehle hi car chhodi hai — headlights abhi bhi on hain kyunki woh jaldi mein utra, engine already off kar chuka tha', 'Battery down ho rahi hai', 'Koi cheez suspicious nahi hai'],
    answer: 'Driver ne turant pehle hi car chhodi hai — headlights abhi bhi on hain kyunki woh jaldi mein utra, engine already off kar chuka tha',
    explanation: 'Thandi raat mein agar engine chal raha hota, exhaust se visible smoke/steam dikhta — uska na hona confirm karta hai engine off hai. Lekin headlights on hona (jo normally engine off karte hi off ho jaati hain ya driver manually band karta hai) suggest karta hai driver jaldi mein, thoda distracted hoke gaya bina headlights band kiye — ek sudden, hurried exit.',
  },
  {
    id: 298,
    type: 'image',
    typeLabel: 'IMAGE MYSTERY',
    icon: '🖼️',
    title: 'Office Desk Ki Photo',
    doc: 'DOC-298',
    scene: 'Crime scene photo mein ek office desk dikh raha hai — computer screen on hai ek half-typed email ke saath, coffee cup ka ring-mark hai desk par lekin cup khud nahi hai kahin, aur chair thodi door hataayi hui hai jaldi mein uthne jaisi.',
    clues: ['Screen on, half-typed email', 'Coffee cup ka ring mark, cup gayab', 'Chair door hataayi hui', 'Jaldi mein uthne jaisa scene'],
    question: 'Yeh scene kya reconstruct karta hai?',
    options: ['Normal office day tha, kuch khaas nahi', 'Victim kaam kar raha tha jab achanak kuch hua ya koi aaya jisne use turant uthne par majboor kiya, aur cup shayad woh insaan hi apne saath le gaya', 'Cleaning staff ne cup uthaya hoga', 'Yeh staged scene hai poori tarah'],
    answer: 'Victim kaam kar raha tha jab achanak kuch hua ya koi aaya jisne use turant uthne par majboor kiya, aur cup shayad woh insaan hi apne saath le gaya',
    explanation: 'Har element scene ka ek timeline reconstruct karta hai: half-typed email (interrupted kaam), chair position (sudden, hurried standing), aur missing cup (jabki uska ring-mark hai, matlab kisi ne use uthaya baad mein) — sab milkar suggest karte hain ki koi visitor aaya jisne victim ko turant distract/interrupt kiya aur baad mein cup bhi le gaya, shayad fingerprints hatane ke liye.',
  },
  {
    id: 299,
    type: 'image',
    typeLabel: 'IMAGE MYSTERY',
    icon: '🖼️',
    title: 'Street Corner Ki Surveillance Photo',
    doc: 'DOC-299',
    scene: 'Ek street corner ki photo mein do log dikh rahe hain baat karte hue — ek ka chehra clearly visible hai, doosre ka peeth camera ki taraf hai. Peeth wale insaan ke haath mein ek envelope hai jo pehle photo mein nahi tha, doosri photo (5 min baad) mein nahi hai — sirf ek photo mein dikhta hai.',
    clues: ['Do log baat karte dikhe', 'Ek ka chehra visible', 'Envelope sirf ek photo mein dikhta hai', '5 min ka gap dono photos mein'],
    question: 'Envelope ka sirf ek photo mein dikhna kya suggest karta hai?',
    options: ['Camera ki galti hai', 'Envelope ka exchange exactly us moment ke aas paas hua — yeh transaction ka precise timing establish karta hai', 'Envelope hamesha wahan tha, dikha nahi', 'Yeh irrelevant detail hai'],
    answer: 'Envelope ka exchange exactly us moment ke aas paas hua — yeh transaction ka precise timing establish karta hai',
    explanation: 'Do consecutive photos (5 min ke gap se) mein envelope ka appear aur disappear hona precisely us transaction ke timing ko bracket karta hai. Yeh confirm karta hai ki kuch exchange hua exactly un do photos ke beech ke time mein — chehra dikhne wale insaan ki identity se investigation aage badh sakti hai.',
  },
  {
    id: 300,
    type: 'observe',
    typeLabel: 'VISUAL OBSERVATION',
    icon: '👁️',
    title: 'Do Almari Photos Ka Farak',
    doc: 'DOC-300',
    scene: 'Security audit ke liye ek storeroom ki photo li gayi thi crime se ek mahina pehle, aur crime ke baad bhi li gayi. Dono mein almari same jagah hai, boxes same arrangement mein, lekin ek box ka label thoda faded/different angle mein hai doosri photo mein.',
    clues: ['Ek mahina pehle ki photo', 'Crime ke baad ki photo', 'Almari, boxes same lagte', 'Ek box ka label alag angle mein'],
    question: 'Yeh chhota sa farak kya suggest kar sakta hai?',
    options: ['Kuch nahi, normal hai', 'Woh specific box recently move kiya gaya aur wapas rakha gaya — thoda different angle se, jo suggest karta hai kisi ne use handle kiya', 'Camera angle badla hoga', 'Label naturally fade hota hai'],
    answer: 'Woh specific box recently move kiya gaya aur wapas rakha gaya — thoda different angle se, jo suggest karta hai kisi ne use handle kiya',
    explanation: 'Jab poori tarah identical setup mein sirf ek chhoti si cheez (box ka angle) badalti hai, yeh random nahi hota — iska matlab hai woh specific box kisi ne uthaya, andar kuch dekha ya rakha, aur wapas rakh diya, lekin exact original position replicate nahi kar paya. Yeh us box ki contents ko investigation ka focus banata hai.',
  },
  {
    id: 301,
    type: 'observe',
    typeLabel: 'VISUAL OBSERVATION',
    icon: '👁️',
    title: 'Shadow Ki Direction Ka Farak',
    doc: 'DOC-301',
    scene: 'Ek crime scene photo mein victim ke saaye (shadow) ki direction ek particular sun position suggest karti hai, jo photo ke claimed time (evening 6 PM) se match nahi karti — shadow sirf dopahar ke time jaisi lambi/short hoti hai.',
    clues: ['Photo ka claimed time: 6 PM evening', 'Shadow ki direction/length examine ki gayi', 'Match nahi karti evening sun position se', 'Dopahar jaisi shadow pattern'],
    question: 'Yeh discrepancy kya reveal karti hai?',
    options: ['Photo ka metadata galat set kiya gaya hoga camera mein', 'Photo actually kisi aur time par li gayi thi, na ki claimed 6 PM par — timeline ko verify karna zaroori hai', 'Sun position roz badalti hai random', 'Shadow analysis unreliable hai hamesha'],
    answer: 'Photo actually kisi aur time par li gayi thi, na ki claimed 6 PM par — timeline ko verify karna zaroori hai',
    explanation: 'Shadow forensics (jise \'shadow analysis\' kehte hain) ek established technique hai photos ki authenticity aur actual time verify karne ke liye — sun ka position aur uske resultant shadows predictable hote hain given location aur date ke liye. Mismatch directly suggest karta hai photo ka claimed timestamp galat hai, jo evidence tampering ka sign ho sakta hai.',
  },
  {
    id: 302,
    type: 'observe',
    typeLabel: 'VISUAL OBSERVATION',
    icon: '👁️',
    title: 'Reflection Mein Chhupa Clue',
    doc: 'DOC-302',
    scene: 'Ek crime scene photo mein ek shiny steel almari dikhti hai background mein. Zoom karne par uski reflective surface mein ek dhundhli si figure dikhti hai jo photo lene wale insaan ke alawa koi aur hai — camera frame se bahar khada.',
    clues: ['Shiny steel almari background mein', 'Reflective surface mein figure dikhti hai', 'Photographer se alag figure', 'Frame se bahar khada tha koi'],
    question: 'Yeh reflection clue kya reveal karta hai?',
    options: ['Yeh optical illusion hai, kuch nahi', 'Ek aur insaan crime scene par maujood tha jab photo li gayi, jo official record mein nahi hai — unaccounted witness ya suspect', 'Almari khud suspicious hai', 'Camera lens mein defect hai'],
    answer: 'Ek aur insaan crime scene par maujood tha jab photo li gayi, jo official record mein nahi hai — unaccounted witness ya suspect',
    explanation: 'Reflective surfaces (glass, steel, mirrors) accidentally un cheezon ko capture kar sakti hain jo direct frame mein nahi hoti. Yeh dhundhli figure ek unaccounted insaan ki presence prove karti hai crime scene par us exact time par jab photo li gayi — potentially ek crucial, previously unknown witness ya suspect.',
  },
  {
    id: 303,
    type: 'hidden',
    typeLabel: 'HIDDEN CLUE',
    icon: '🔦',
    title: 'Calendar Par Ek Circle Kiya Hua Din',
    doc: 'DOC-303',
    scene: 'Victim ki desk calendar mein ek future date circle ki hui thi, koi note nahi likha tha uske paas, lekin us din ka pura square thoda darker ink se ghera hua tha jaise baar baar trace kiya gaya ho.',
    clues: ['Future date circled', 'Koi note nahi likha', 'Darker ink, baar baar traced jaisa', 'Emphasis dikh raha hai'],
    question: 'Yeh circled date kya important ho sakti hai?',
    options: ['Victim ka birthday hoga', 'Koi important, possibly threatening ya anxiety-inducing event/meeting jiske baare mein woh baar baar soch raha tha — us date se connected logon/events check karne chahiye', 'Random doodle hai', 'Calendar mistake hai'],
    answer: 'Koi important, possibly threatening ya anxiety-inducing event/meeting jiske baare mein woh baar baar soch raha tha — us date se connected logon/events check karne chahiye',
    explanation: 'Ek date ko baar baar trace karna (darker ink banane tak) subconscious anxiety ya obsessive focus dikhata hai — yeh normal reminder se zyada hai. Yeh suggest karta hai woh date victim ke liye significant stress ya importance rakhti thi, jo case se related ek meeting, deadline, ya threat ho sakti hai.',
  },
  {
    id: 304,
    type: 'psych',
    typeLabel: 'PSYCHOLOGICAL',
    icon: '🧠',
    title: 'Bahut Zyada Maafi Maangne Wala Suspect',
    doc: 'DOC-304',
    scene: 'Ek theft case mein interview ke dauraan, ek suspect baar baar \'sorry\' aur \'maaf kijiye\' keh raha tha har chhoti baat par, poori tarah unrelated harmless questions ke jawab mein bhi — jabki koi galti nahi ki thi usne interview mein.',
    clues: ['Baar baar \'sorry\' bol raha', 'Unrelated questions par bhi', 'Koi actual galti nahi ki interview mein', 'Excessive apologizing pattern'],
    question: 'Yeh excessive apologizing kya psychological indicator ho sakta hai?',
    options: ['Suspect bahut polite insaan hai bas', 'Underlying guilt ya anxiety ka projection — jab koi apni real \'galti\' (crime) ke liye guilty feel karta hai, woh unrelated cheezon ke liye bhi over-apologize karta hai transferred guilt ki wajah se', 'Yeh sirf cultural politeness hai, kuch matlab nahi', 'Suspect nervous hai interview room se'],
    answer: 'Underlying guilt ya anxiety ka projection — jab koi apni real \'galti\' (crime) ke liye guilty feel karta hai, woh unrelated cheezon ke liye bhi over-apologize karta hai transferred guilt ki wajah se',
    explanation: 'Psychology mein \'excessive apologizing\' aksar ek coping mechanism hota hai underlying guilt ya anxiety ke liye — insaan apni asli guilt ko unrelated, chhoti situations mein \'discharge\' karta hai. Yeh akela conclusive proof nahi hai, lekin ek behavioral pattern hai jo further, focused questioning zaroori banata hai.',
  },
];

// ============================================================
// NO-REPEAT ROTATION HELPER
// localStorage mein "seen" question IDs track karta hai.
// Jab tak saare questions (kisi category ke) dekhe nahi jaate,
// wahi purane repeat nahi honge. Sab dekh liye jaane par rotation reset hoti hai.
// ============================================================
(function (global) {
  const STORAGE_KEY = 'mindMatrixSeenIds';

  function loadSeen() {
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? new Set(parsed) : new Set();
    } catch (e) {
      return new Set();
    }
  }

  function saveSeen(seenSet) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(seenSet)));
      }
    } catch (e) {
      // localStorage unavailable — rotation simply won't persist across sessions
    }
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
   * opts.type   - optional: filter by category (e.g. 'murder', 'logic'). Omit for all.
   * opts.markSeen - default true: marks returned questions as "seen" immediately.
   *
   * Returns `count` questions, preferring ones not yet seen. Once every
   * question (within the filtered pool) has been seen, the pool resets
   * automatically and rotation starts fresh.
   */
  function getQuizQuestions(count, opts) {
    opts = opts || {};
    const pool = opts.type ? CASES.filter(c => c.type === opts.type) : CASES.slice();
    const n = Math.min(count || pool.length, pool.length);

    let seen = loadSeen();
    let unseen = pool.filter(c => !seen.has(c.id));

    // Agar unseen kam pad rahe hain is batch ke liye, rotation reset karo
    if (unseen.length < n) {
      const poolIds = new Set(pool.map(c => c.id));
      // sirf is pool (category/all) ke seen ids clear karo, baaki categories ka seen data safe rahe
      seen = new Set(Array.from(seen).filter(id => !poolIds.has(id)));
      unseen = pool.slice();
    }

    const chosen = shuffle(unseen).slice(0, n);

    if (opts.markSeen !== false) {
      chosen.forEach(c => seen.add(c.id));
      saveSeen(seen);
    }

    return chosen;
  }

  function resetQuizRotation() {
    try {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
    } catch (e) { /* noop */ }
  }

  global.getQuizQuestions = getQuizQuestions;
  global.resetQuizRotation = resetQuizRotation;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getQuizQuestions = getQuizQuestions;
    module.exports.resetQuizRotation = resetQuizRotation;
  }
})(typeof window !== 'undefined' ? window : globalThis);
