/* ═══════════════════════════════════════════════════════════════════
   SCIENCE WARRIOR — GyanIQ (Hinglish Edition) — v4.0
   5 Difficulty Levels | Physics 40% / Chemistry 30% / Biology 30%
   Question Types: MCQ | Fill Blank | Equation | Image-based Biology
   196 Questions | imageUrl field (Supabase-ready) | Lazy-load images
   Fisher-Yates shuffle | No repeats per game | Level-wise JSON
═══════════════════════════════════════════════════════════════════ */

const QUESTIONS = [

  /* ══════════════════════════════════════════════
     BASICS (Class 8-10)
  ══════════════════════════════════════════════ */

  // Physics – Motion
  {type:'mcq', q:"Ek object ki speed formula kya hoti hai?", ans:"Distance / Time", opts:["Distance / Time","Time / Distance","Distance × Time","Force × Mass"], cat:"motion", diff:"basics"},
  {type:'fill', q:"Jab ek car constant speed se chalti hai, uski acceleration hoti hai ___.", ans:"Zero", opts:["Zero","Maximum","Negative","Positive"], cat:"motion", diff:"basics"},
  {type:'mcq', q:"Agar ek ball upar throw ki jaaye, sabse upar jaake uski speed kya hoti hai?", ans:"Zero (momentarily)", opts:["Zero (momentarily)","Maximum","Minimum but not zero","Infinite"], cat:"motion", diff:"basics"},

  // Physics – Force
  {type:'mcq', q:"Newton ka pehla niyam (Law of Inertia) kehta hai ki ek object...", ans:"Tab tak motion mein rehta ya rukta hai jab tak koi force nahi lagti", opts:["Tab tak motion mein rehta ya rukta hai jab tak koi force nahi lagti","Hamesha accelerate karta hai","Sirf circle mein ghoomta hai","Apne aap ruk jaata hai"], cat:"force", diff:"basics"},
  {type:'mcq', q:"Friction force ka direction hamesha hota hai:", ans:"Motion ke opposite direction mein", opts:["Motion ke opposite direction mein","Motion ke same direction mein","Horizontal direction mein","Upar ki taraf"], cat:"force", diff:"basics"},

  // Physics – Energy
  {type:'mcq', q:"Kinetic energy ka formula kya hai?", ans:"½mv²", opts:["½mv²","mv","mgh","½mgh"], cat:"energy", diff:"basics"},
  {type:'mcq', q:"Potential energy ka example kya hai?", ans:"Pahad pe rakha hua pathar", opts:["Pahad pe rakha hua pathar","Dauda hua insaan","Ghoomta hua pankha","Jalti hui mombatti"], cat:"energy", diff:"basics"},

  // Physics – Electricity
  {type:'fill', q:"Battery mein positive terminal se ___ terminal ki taraf current flow karta hai (conventional).", ans:"Negative", opts:["Negative","Positive","Ground","Neutral"], cat:"elec", diff:"basics"},

  // Chemistry – Basics
  {type:'mcq', q:"Paani ka chemical formula kya hai?", ans:"H₂O", opts:["H₂O","HO₂","H₂O₂","OH"], cat:"chem", diff:"basics"},
  {type:'fill', q:"Table salt ka chemical naam ___ hai.", ans:"Sodium Chloride (NaCl)", opts:["Sodium Chloride (NaCl)","Potassium Iodide","Calcium Carbonate","Magnesium Oxide"], cat:"chem", diff:"basics"},
  {type:'mcq', q:"CO₂ ka full naam kya hai?", ans:"Carbon Dioxide", opts:["Carbon Dioxide","Carbon Monoxide","Calcium Oxide","Carbon Trioxide"], cat:"chem", diff:"basics"},

  // Chemistry – Acids & Bases
  {type:'mcq', q:"Nimbu mein konsa acid hota hai?", ans:"Citric Acid", opts:["Citric Acid","Acetic Acid","Hydrochloric Acid","Sulfuric Acid"], cat:"acid", diff:"basics"},
  {type:'mcq', q:"Litmus paper kya hota hai?", ans:"Acid-Base indicator", opts:["Acid-Base indicator","Metal detector","Salt solution","Chemical compound"], cat:"acid", diff:"basics"},

  // Biology – Cell
  {type:'img', emoji:"🔋", imgCaption:"Yeh cell organelle dikhaya gaya hai", q:"Is organelle ko 'cell ka powerhouse' kaha jaata hai. Yeh kya hai?", ans:"Mitochondria", opts:["Mitochondria","Nucleus","Ribosome","Golgi Apparatus"], cat:"cell", diff:"basics"},
  {type:'mcq', q:"Cell ki sabse outer layer kya hoti hai (plant cell mein)?", ans:"Cell Wall", opts:["Cell Wall","Nucleus","Cytoplasm","Mitochondria"], cat:"cell", diff:"basics"},
  {type:'mcq', q:"Insaan ki body mein sabse badi gland kaun si hai?", ans:"Liver (Yakrit)", opts:["Liver (Yakrit)","Kidney","Pancreas","Spleen"], cat:"humanbody", diff:"basics"},

  // Biology – Human Body
  {type:'mcq', q:"Hamare body mein khoon ka rang red kyun hota hai?", ans:"Hemoglobin ki wajah se", opts:["Hemoglobin ki wajah se","Glucose ki wajah se","Oxygen ki wajah se","Plasma ki wajah se"], cat:"humanbody", diff:"basics"},
  {type:'mcq', q:"Hamare body mein kitni haddiyaan (bones) hoti hain?", ans:"206", opts:["206","208","212","200"], cat:"humanbody", diff:"basics"},

  // Biology – Plant
  {type:'mcq', q:"Paudhe apna khana kaise banate hain?", ans:"Photosynthesis se", opts:["Photosynthesis se","Respiration se","Digestion se","Transpiration se"], cat:"plant", diff:"basics"},
  {type:'fill', q:"Paudhon mein photosynthesis ke liye ___ gas absorb hoti hai.", ans:"Carbon Dioxide (CO₂)", opts:["Carbon Dioxide (CO₂)","Oxygen (O₂)","Nitrogen (N₂)","Hydrogen (H₂)"], cat:"plant", diff:"basics"},

  /* ══════════════════════════════════════════════
     CLASS 11
  ══════════════════════════════════════════════ */

  // Physics – Motion
  {type:'mcq', q:"Newton ka doosra niyam F = ma mein 'a' kya hai?", ans:"Acceleration", opts:["Acceleration","Area","Amplitude","Angle"], cat:"motion", diff:"class11"},
  {type:'eq', eqDisplay:"v = u + at", q:"Is kinematic equation mein 'u' kya represent karta hai?", ans:"Initial velocity (pehli speed)", opts:["Initial velocity (pehli speed)","Final velocity","Acceleration","Time"], cat:"motion", diff:"class11"},
  {type:'mcq', q:"Projectile motion mein horizontal velocity:", ans:"Constant rehti hai (hawa nahi hai to)", opts:["Constant rehti hai (hawa nahi hai to)","Badhti rehti hai","Ghatti rehti hai","Zero ho jaati hai"], cat:"motion", diff:"class11"},

  // Physics – Force
  {type:'mcq', q:"Newton ka teesra niyam kehta hai ki har action ke liye:", ans:"Barabar aur ulta reaction hota hai", opts:["Barabar aur ulta reaction hota hai","Koi reaction nahi hota","Double reaction hota hai","Half reaction hota hai"], cat:"force", diff:"class11"},
  {type:'fill', q:"Momentum = Mass × ___ .", ans:"Velocity", opts:["Velocity","Acceleration","Force","Energy"], cat:"force", diff:"class11"},

  // Physics – Waves
  {type:'mcq', q:"Sound waves kis type ki waves hain?", ans:"Longitudinal waves", opts:["Longitudinal waves","Transverse waves","Electromagnetic waves","Surface waves"], cat:"waves", diff:"class11"},
  {type:'mcq', q:"Light ki speed vacuum mein approximately kitni hoti hai?", ans:"3 × 10⁸ m/s", opts:["3 × 10⁸ m/s","3 × 10⁶ m/s","3 × 10¹⁰ m/s","3 × 10⁴ m/s"], cat:"waves", diff:"class11"},

  // Physics – Electricity
  {type:'mcq', q:"Ohm's Law kya kehta hai?", ans:"V = IR (Voltage = Current × Resistance)", opts:["V = IR (Voltage = Current × Resistance)","V = I/R","V = I + R","V = R/I"], cat:"elec", diff:"class11"},
  {type:'fill', q:"Electric current ki SI unit ___ hai.", ans:"Ampere (A)", opts:["Ampere (A)","Volt (V)","Ohm (Ω)","Watt (W)"], cat:"elec", diff:"class11"},

  // Chemistry – Atomic Structure
  {type:'mcq', q:"Nucleus mein kya hota hai?", ans:"Protons aur Neutrons", opts:["Protons aur Neutrons","Electrons aur Protons","Sirf Electrons","Sirf Neutrons"], cat:"atomic", diff:"class11"},
  {type:'fill', q:"Ek neutral atom mein protons ki sankhya ___ ke barabar hoti hai.", ans:"Electrons", opts:["Electrons","Neutrons","Mass number","Atomic mass"], cat:"atomic", diff:"class11"},
  {type:'mcq', q:"Hydrogen atom mein electron ki position describe karta hai:", ans:"Bohr's Model", opts:["Bohr's Model","Dalton's Model","Thomson's Model","Rutherford's Model only"], cat:"atomic", diff:"class11"},

  // Chemistry – Periodic Table
  {type:'mcq', q:"Periodic table mein Group 1 ke elements ko kya kaha jaata hai?", ans:"Alkali Metals", opts:["Alkali Metals","Alkaline Earth Metals","Halogens","Noble Gases"], cat:"periodic", diff:"class11"},
  {type:'mcq', q:"Periodic table mein period (horizontal row) mein baaye se daaye jaane par atomic radius:", ans:"Ghatta hai", opts:["Ghatta hai","Badhta hai","Same rehta hai","Pehle badhta phir ghatta hai"], cat:"periodic", diff:"class11"},

  // Biology – Cell
  {type:'img', emoji:"🫧", imgCaption:"Cell ki ek zaruri organelle", q:"Yeh organelle protein synthesis ka kaam karti hai. Iska naam kya hai?", ans:"Ribosome", opts:["Ribosome","Lysosome","Vacuole","Centrosome"], cat:"cell", diff:"class11"},
  {type:'mcq', q:"Cell membrane primarily kis se bani hoti hai?", ans:"Phospholipid bilayer se", opts:["Phospholipid bilayer se","Protein only se","Cellulose se","Chitin se"], cat:"cell", diff:"class11"},

  // Biology – Plant
  {type:'mcq', q:"Photosynthesis ka equation complete karo: 6CO₂ + 6H₂O → ___", ans:"C₆H₁₂O₆ + 6O₂", opts:["C₆H₁₂O₆ + 6O₂","6CO₂ + 6H₂O","C₆H₁₂O₆ + CO₂","6H₂O + O₂"], cat:"plant", diff:"class11"},
  {type:'mcq', q:"Paudhon mein paani aur minerals roots se leaves tak kaunse tissue se transport hota hai?", ans:"Xylem", opts:["Xylem","Phloem","Cortex","Epidermis"], cat:"plant", diff:"class11"},

  // Biology – Ecology
  {type:'mcq', q:"Food chain mein pehla level hamesha hota hai:", ans:"Producers (Autotrophs)", opts:["Producers (Autotrophs)","Primary consumers","Secondary consumers","Decomposers"], cat:"gen", diff:"class11"},

  // Biology – Genetics
  {type:'mcq', q:"DNA mein kitne types ke nitrogenous bases hote hain?", ans:"4 (A, T, G, C)", opts:["4 (A, T, G, C)","3","5","2"], cat:"genetics", diff:"class11"},

  /* ══════════════════════════════════════════════
     CLASS 12
  ══════════════════════════════════════════════ */

  // Physics – Electricity
  {type:'mcq', q:"Capacitor mein stored energy ka formula kya hai?", ans:"½CV²", opts:["½CV²","CV","CV²","½CV"], cat:"elec", diff:"class12"},
  {type:'mcq', q:"Series circuit mein resistance ka total kaise calculate karte hain?", ans:"R_total = R₁ + R₂ + R₃...", opts:["R_total = R₁ + R₂ + R₃...","1/R_total = 1/R₁ + 1/R₂","R_total = R₁ × R₂","R_total = R₁ - R₂"], cat:"elec", diff:"class12"},

  // Physics – Magnetism
  {type:'mcq', q:"Faraday ka electromagnetic induction ka niyam kehta hai ki EMF...", ans:"Magnetic flux ke rate of change ke barabar hota hai", opts:["Magnetic flux ke rate of change ke barabar hota hai","Current ke barabar hota hai","Resistance ke barabar hota hai","Voltage ke barabar hota hai"], cat:"mag", diff:"class12"},
  {type:'fill', q:"Magnetic field ki SI unit ___ hai.", ans:"Tesla (T)", opts:["Tesla (T)","Gauss (G)","Weber (Wb)","Ampere (A)"], cat:"mag", diff:"class12"},
  {type:'mcq', q:"Lenz's Law kehta hai ki induced current ka direction aisa hota hai ki:", ans:"Original change ko oppose kare", opts:["Original change ko oppose kare","Original change ko support kare","Current zero rakhna","Voltage maximum banana"], cat:"mag", diff:"class12"},

  // Physics – Waves
  {type:'eq', eqDisplay:"c = fλ", q:"Is wave equation mein 'λ' (lambda) kya represent karta hai?", ans:"Wavelength", opts:["Wavelength","Frequency","Speed","Amplitude"], cat:"waves", diff:"class12"},
  {type:'mcq', q:"Doppler effect kab hota hai?", ans:"Jab source ya observer move kare", opts:["Jab source ya observer move kare","Jab waves reflect hon","Jab waves absorb hon","Jab temperature badle"], cat:"waves", diff:"class12"},

  // Chemistry – Chemical Bonding
  {type:'mcq', q:"NaCl mein konsi bond hoti hai?", ans:"Ionic Bond", opts:["Ionic Bond","Covalent Bond","Metallic Bond","Hydrogen Bond"], cat:"bond", diff:"class12"},
  {type:'fill', q:"H₂O mein oxygen ki electronegativity zyada hone se ___ bond banta hai.", ans:"Polar Covalent", opts:["Polar Covalent","Non-polar Covalent","Ionic","Metallic"], cat:"bond", diff:"class12"},
  {type:'mcq', q:"VSEPR theory kis cheez ka prediction karta hai?", ans:"Molecules ki 3D shape", opts:["Molecules ki 3D shape","Bond ki strength","Bond ki length","Electronegativity"], cat:"bond", diff:"class12"},

  // Chemistry – Acids & Bases
  {type:'mcq', q:"Strong acid ka pH kya hota hai?", ans:"7 se kam (0-3 typically)", opts:["7 se kam (0-3 typically)","7 se zyada","Exactly 7","14"], cat:"acid", diff:"class12"},
  {type:'eq', eqDisplay:"HCl → H⁺ + Cl⁻", q:"Yeh equation kis type ki reaction dikhata hai?", ans:"Strong Acid Dissociation", opts:["Strong Acid Dissociation","Neutralisation","Oxidation","Reduction"], cat:"acid", diff:"class12"},
  {type:'mcq', q:"Buffer solution kya karta hai?", ans:"pH ko stable rakhta hai small acid/base add karne pe", opts:["pH ko stable rakhta hai small acid/base add karne pe","pH ko increase karta hai","pH ko decrease karta hai","Reaction stop karta hai"], cat:"acid", diff:"class12"},

  // Chemistry – Organic
  {type:'mcq', q:"Functional group -OH wala compound kya kehlaata hai?", ans:"Alcohol", opts:["Alcohol","Aldehyde","Ketone","Ether"], cat:"organic", diff:"class12"},

  // Biology – Genetics
  {type:'mcq', q:"DNA ki full form kya hai?", ans:"Deoxyribonucleic Acid", opts:["Deoxyribonucleic Acid","Deoxyribose Nucleic Acid","Diribonucleic Acid","Deoxyribosenucleic Acid"], cat:"genetics", diff:"class12"},
  {type:'mcq', q:"Mendel ke monohybrid cross mein F2 generation ka ratio hota hai:", ans:"3:1 (dominant:recessive)", opts:["3:1 (dominant:recessive)","1:1","2:1","1:2:1"], cat:"genetics", diff:"class12"},

  // Biology – Human Body
  {type:'img', emoji:"🫀", imgCaption:"Hamare body ka ek vital organ", q:"Yeh organ blood ko pump karta hai. Ek normal adult mein iske kitne chambers hote hain?", ans:"4 chambers", opts:["4 chambers","2 chambers","3 chambers","6 chambers"], cat:"humanbody", diff:"class12"},
  {type:'mcq', q:"Insulin hormone kaunsi gland se secrete hota hai?", ans:"Pancreas", opts:["Pancreas","Thyroid","Adrenal","Pituitary"], cat:"humanbody", diff:"class12"},
  {type:'img', emoji:"🧠", imgCaption:"Human nervous system ka central organ", q:"Yeh organ memory aur thinking control karta hai. Isme kitne main parts hote hain?", ans:"3 (Cerebrum, Cerebellum, Brainstem)", opts:["3 (Cerebrum, Cerebellum, Brainstem)","2 (Left, Right hemisphere)","4 (Lobes only)","1 (Single unit)"], cat:"humanbody", diff:"class12"},

  // Biology – Cell Structure
  {type:'mcq', q:"Mitosis cell division mein daughter cells ki chromosomes hoti hain:", ans:"Parent cell ke barabar (2n)", opts:["Parent cell ke barabar (2n)","Half (n)","Double (4n)","Variable"], cat:"cell", diff:"class12"},

  /* ══════════════════════════════════════════════
     ADVANCED (University / Olympiad)
  ══════════════════════════════════════════════ */

  // Physics – Energy
  {type:'mcq', q:"Paani ki specific heat capacity approximately kitni hoti hai?", ans:"4200 J/kg·K", opts:["4200 J/kg·K","2100 J/kg·K","1000 J/kg·K","8400 J/kg·K"], cat:"energy", diff:"advanced"},
  {type:'mcq', q:"Carnot engine ki efficiency kya hoti hai?", ans:"η = 1 - T₂/T₁ (T in Kelvin)", opts:["η = 1 - T₂/T₁ (T in Kelvin)","η = T₁/T₂","η = T₂ - T₁","η = 100% always"], cat:"energy", diff:"advanced"},

  // Physics – Electricity
  {type:'mcq', q:"Semiconductor mein conduction kis wajah se hoti hai?", ans:"Electrons aur Holes dono ki wajah se", opts:["Electrons aur Holes dono ki wajah se","Sirf Electrons","Sirf Holes","Protons ki wajah se"], cat:"elec", diff:"advanced"},
  {type:'mcq', q:"p-n junction diode mein forward bias mein kya hota hai?", ans:"Current freely flow karta hai", opts:["Current freely flow karta hai","Current block hota hai","Resistance infinite hoti hai","Electrons stop ho jaate hain"], cat:"elec", diff:"advanced"},

  // Physics – Magnetism
  {type:'eq', eqDisplay:"F = qvB sinθ", q:"Yeh Lorentz force equation hai. 'q' kya represent karta hai?", ans:"Charge of particle", opts:["Charge of particle","Velocity","Magnetic field","Angle"], cat:"mag", diff:"advanced"},
  {type:'mcq', q:"Maxwell's equations describe karte hain:", ans:"Electricity aur magnetism ka unified theory", opts:["Electricity aur magnetism ka unified theory","Sirf electric fields","Sirf magnetic fields","Gravitational fields"], cat:"mag", diff:"advanced"},

  // Physics – Waves
  {type:'mcq', q:"Young's Double Slit experiment prove karta hai light ki:", ans:"Wave nature", opts:["Wave nature","Particle nature","Both wave and particle","Neither"], cat:"waves", diff:"advanced"},

  // Chemistry – Organic
  {type:'mcq', q:"Methane (CH₄) mein carbon ki hybridization kya hoti hai?", ans:"sp³", opts:["sp³","sp²","sp","sp³d"], cat:"organic", diff:"advanced"},
  {type:'fill', q:"Benzene (C₆H₆) ki structure mein ___ double bonds hote hain alternating pattern mein.", ans:"3 alternate", opts:["3 alternate","2","4","6"], cat:"organic", diff:"advanced"},
  {type:'mcq', q:"Saponification reaction mein kya banta hai?", ans:"Soap (Fat + NaOH → Soap + Glycerol)", opts:["Soap (Fat + NaOH → Soap + Glycerol)","Acid + Water","Alcohol + CO₂","Ester + Water"], cat:"organic", diff:"advanced"},

  // Chemistry – Atomic Structure
  {type:'mcq', q:"Heisenberg uncertainty principle kehta hai ki hum simultaneously precisely nahi measure kar sakte:", ans:"Position aur momentum", opts:["Position aur momentum","Mass aur charge","Speed aur energy","Temperature aur pressure"], cat:"atomic", diff:"advanced"},
  {type:'mcq', q:"Pauli Exclusion Principle kehta hai ki ek orbital mein maximum kitne electrons ho sakte hain?", ans:"2 (opposite spins ke saath)", opts:["2 (opposite spins ke saath)","1","3","4"], cat:"atomic", diff:"advanced"},

  // Chemistry – Periodic Table
  {type:'mcq', q:"Ionization energy periodic table mein kaise change hoti hai (left to right)?", ans:"Badhti hai (increases)", opts:["Badhti hai (increases)","Ghatti hai","Same rehti hai","First badhti phir ghatti"], cat:"periodic", diff:"advanced"},

  // Biology – Genetics
  {type:'mcq', q:"DNA replication 'semiconservative' hai — ise kisne prove kiya?", ans:"Meselson & Stahl (1958)", opts:["Meselson & Stahl (1958)","Watson & Crick (1953)","Hershey & Chase (1952)","Franklin & Wilkins (1952)"], cat:"genetics", diff:"advanced"},
  {type:'mcq', q:"mRNA transcription mein DNA ki konsi strand template hoti hai?", ans:"Template strand (antisense)", opts:["Template strand (antisense)","Coding strand (sense)","Both strands","Neither strand"], cat:"genetics", diff:"advanced"},

  // Biology – Ecology
  {type:'mcq', q:"Food web mein producers kaun hote hain?", ans:"Autotrophs (green plants)", opts:["Autotrophs (green plants)","Herbivores","Carnivores","Decomposers"], cat:"gen", diff:"advanced"},
  {type:'mcq', q:"Nitrogen cycle mein nitrification ka kaam kaunse bacteria karte hain?", ans:"Nitrosomonas aur Nitrobacter", opts:["Nitrosomonas aur Nitrobacter","Rhizobium","Azotobacter","Pseudomonas"], cat:"gen", diff:"advanced"},

  // Biology – Cell
  {type:'mcq', q:"Apoptosis kya hai?", ans:"Programmed cell death (controlled)", opts:["Programmed cell death (controlled)","Uncontrolled cell division","Cell membrane rupture","Cell fusion"], cat:"cell", diff:"advanced"},

  // Biology – Human Body
  {type:'mcq', q:"Resting potential mein neuron membrane ki inside potential approximately hoti hai:", ans:"-70 mV", opts:["-70 mV","+70 mV","0 mV","-40 mV"], cat:"humanbody", diff:"advanced"},

  /* ══════════════════════════════════════════════
     PhD LEVEL (Research Grade)
  ══════════════════════════════════════════════ */

  // Physics – Astrophysics
  {type:'mcq', q:"Chandrasekhar limit (~1.4 M☉) determine karta hai:", ans:"Maximum mass of a white dwarf star", opts:["Maximum mass of a white dwarf star","Minimum mass of neutron star","Black hole ka mass","Sun ka mass"], cat:"phy", diff:"phd"},

  // Physics – Quantum Mechanics
  {type:'mcq', q:"Orbital ka shape konsa quantum number determine karta hai?", ans:"Azimuthal quantum number (l)", opts:["Azimuthal quantum number (l)","Principal quantum number (n)","Magnetic quantum number (mₗ)","Spin quantum number (s)"], cat:"atomic", diff:"phd"},
  {type:'fill', q:"Schrodinger equation mein 'ψ' (psi) represent karta hai wave ___ of particle.", ans:"Function", opts:["Function","Energy","Mass","Speed"], cat:"atomic", diff:"phd"},
  {type:'eq', eqDisplay:"E = hf = hc/λ", q:"Is equation mein 'h' kya hai?", ans:"Planck's constant (6.626×10⁻³⁴ J·s)", opts:["Planck's constant (6.626×10⁻³⁴ J·s)","Boltzmann constant","Avogadro number","Gas constant"], cat:"waves", diff:"phd"},

  // Physics – Thermodynamics
  {type:'mcq', q:"Second law of thermodynamics ke according entropy:", ans:"Hamesha badhti hai isolated systems mein", opts:["Hamesha badhti hai isolated systems mein","Constant rehti hai","Decrease hoti hai jab temperature badhta hai","Sirf liquids mein badhti hai"], cat:"energy", diff:"phd"},

  // Chemistry – Quantum/Atomic
  {type:'mcq', q:"Transition metals ki characteristic property kya hoti hai jo unhe colorful compounds banane deti hai?", ans:"Partially filled d-orbitals", opts:["Partially filled d-orbitals","Full s-orbitals","Empty p-orbitals","Filled f-orbitals"], cat:"periodic", diff:"phd"},
  {type:'mcq', q:"Electronegativity scale mein sabse zyada electronegative element kaunsa hai?", ans:"Fluorine (F)", opts:["Fluorine (F)","Oxygen (O)","Chlorine (Cl)","Nitrogen (N)"], cat:"periodic", diff:"phd"},

  // Chemistry – Organic (Advanced)
  {type:'mcq', q:"Enantiomers kya hote hain?", ans:"Mirror images jo superimposable nahi hote", opts:["Mirror images jo superimposable nahi hote","Same compound ke alag forms","Structural isomers","Geometric isomers"], cat:"organic", diff:"phd"},
  {type:'mcq', q:"Diels-Alder reaction ek example hai:", ans:"[4+2] cycloaddition reaction", opts:["[4+2] cycloaddition reaction","SN2 reaction","Elimination reaction","Free radical reaction"], cat:"organic", diff:"phd"},

  // Chemistry – Acids & Bases (Advanced)
  {type:'mcq', q:"Lewis acid kya hota hai?", ans:"Electron pair acceptor", opts:["Electron pair acceptor","Proton donor","Proton acceptor","Electron pair donor"], cat:"acid", diff:"phd"},

  // Biology – Genetics (Advanced)
  {type:'mcq', q:"CRISPR-Cas9 system primarily kahan se aaya hai?", ans:"Bacterial immune system se", opts:["Bacterial immune system se","Yeast se","Virus se","Plant cells se"], cat:"genetics", diff:"phd"},
  {type:'mcq', q:"Epigenetics mein gene expression regulate hota hai bina:", ans:"DNA sequence change kiye", opts:["DNA sequence change kiye","mRNA change kiye","Protein change kiye","Chromosome change kiye"], cat:"genetics", diff:"phd"},

  // Biology – Cell (Advanced)
  {type:'mcq', q:"Endosymbiotic theory ke according mitochondria aur chloroplasts pehle kya the?", ans:"Free-living prokaryotes", opts:["Free-living prokaryotes","Viral particles","Inorganic molecules","Nuclear fragments"], cat:"cell", diff:"phd"},
  {type:'mcq', q:"Telomerase enzyme kya karta hai?", ans:"Chromosome ki telomere lengthen karta hai", opts:["Chromosome ki telomere lengthen karta hai","DNA repair karta hai","Protein synthesize karta hai","Cell division rokta hai"], cat:"cell", diff:"phd"},

  // Biology – Human Body (Advanced)
  {type:'mcq', q:"Neurotransmitter acetylcholine kis junction pe release hota hai?", ans:"Neuromuscular junction", opts:["Neuromuscular junction","Synaptic cleft in CNS only","Blood-brain barrier","Receptor sites in kidney"], cat:"humanbody", diff:"phd"},
  {type:'mcq', q:"Complement system immune response mein kya karta hai?", ans:"Pathogens ko directly destroy karta hai aur phagocytosis enhance karta hai", opts:["Pathogens ko directly destroy karta hai aur phagocytosis enhance karta hai","Sirf antibodies produce karta hai","B-cells activate karta hai only","Fever produce karta hai"], cat:"humanbody", diff:"phd"},

  // Biology – Ecology (Advanced)
  {type:'mcq', q:"Keystone species kise kaha jaata hai?", ans:"Woh species jis par poora ecosystem depend kare", opts:["Woh species jis par poora ecosystem depend kare","Sabse zyada population wali species","Sabse badi size wali species","Sabse pehle aane wali species"], cat:"gen", diff:"phd"},

  /* ══════════════════════════════════════════════════════════════════
     50 NEW QUESTIONS — v3.0 | Physics:20 | Chemistry:15 | Biology:15
     Levels: basics×10 | class11×10 | class12×10 | advanced×10 | phd×10
  ══════════════════════════════════════════════════════════════════ */

  /* ─── BASICS — 10 naye sawaal (Physics:4, Chem:3, Bio:3) ─── */

  // Physics – Motion
  {type:'mcq', q:"Agar ek object ki speed double ho jaaye, uski kinetic energy ho jaayegi:", ans:"4 guna (Chaar times)", opts:["4 guna (Chaar times)","2 guna","Same rehti hai","8 guna"], cat:"motion", diff:"basics"},
  {type:'fill', q:"Gravity ki wajah se neeche girti hua body ki acceleration approximately ___ m/s² hoti hai.", ans:"9.8 (ya 10)", opts:["9.8 (ya 10)","5","15","1"], cat:"motion", diff:"basics"},

  // Physics – Force
  {type:'mcq', q:"Ek object ka weight 10 N hai. Isko utha ke chalne mein kitna force chahiye (sirf horizontal)?", ans:"Weight se alag — friction force hi overcome karni hoti hai", opts:["Weight se alag — friction force hi overcome karni hoti hai","10 N se zyada hamesha","Zero force","Exactly 10 N"], cat:"force", diff:"basics"},

  // Physics – Energy
  {type:'mcq', q:"Ek dam se paani ka girna — energy kaise convert hoti hai?", ans:"Potential → Kinetic", opts:["Potential → Kinetic","Kinetic → Potential","Chemical → Kinetic","Electrical → Sound"], cat:"energy", diff:"basics"},

  // Chemistry – Chem Basics
  {type:'mcq', q:"Physical change ka example kya hai?", ans:"Paani ka barf banana", opts:["Paani ka barf banana","Kaagaz jalana","Lohe mein zamak (rust) lagna","Khana pakana"], cat:"chem", diff:"basics"},
  {type:'fill', q:"Hamare body mein backbone (spine) ___ haddiyaan hoti hain.", ans:"33", opts:["33","26","30","24"], cat:"humanbody", diff:"basics"},
  {type:'eq', eqDisplay:"H₂ + O₂ → H₂O", q:"Is reaction mein products balance karne par O₂ ka coefficient kya hoga?", ans:"1 (balanced: 2H₂ + O₂ → 2H₂O)", opts:["1 (balanced: 2H₂ + O₂ → 2H₂O)","2","3","4"], cat:"chem", diff:"basics"},

  // Biology
  {type:'mcq', q:"Photosynthesis ka yeh formula sahi hai: CO₂ + H₂O + Sunlight →", ans:"Glucose + O₂", opts:["Glucose + O₂","CO₂ + H₂O","O₂ + CO₂","Starch + N₂"], cat:"plant", diff:"basics"},
  {type:'mcq', q:"Insaan ke sharir mein sabse bada organ (surface area se) kaunsa hai?", ans:"Twacha (Skin)", opts:["Twacha (Skin)","Liver","Brain","Lung"], cat:"humanbody", diff:"basics"},
  {type:'fill', q:"DNA mein thymine (T) hamesha ___ ke saath pair karta hai.", ans:"Adenine (A)", opts:["Adenine (A)","Guanine (G)","Cytosine (C)","Uracil (U)"], cat:"genetics", diff:"basics"},

  /* ─── CLASS 11 — 10 naye sawaal (Physics:4, Chem:3, Bio:3) ─── */

  // Physics – Motion
  {type:'eq', eqDisplay:"v² = u² + 2as", q:"Is equation mein 'a' negative ho to kya hoga?", ans:"Object slow down karega (deceleration)", opts:["Object slow down karega (deceleration)","Object speed up karega","Object nahi hilega","Velocity zero ho jaayegi immediately"], cat:"motion", diff:"class11"},
  {type:'mcq', q:"Relative velocity kya hoti hai?", ans:"Ek observer ke frame mein doosre object ki apparent velocity", opts:["Ek observer ke frame mein doosre object ki apparent velocity","Absolute speed of object","Speed of light minus speed of object","Hamesha zero"], cat:"motion", diff:"class11"},

  // Physics – Waves
  {type:'mcq', q:"Wavelength badhne se wave ki frequency par kya asar hota hai (speed same rahe)?", ans:"Frequency ghatti hai (f = v/λ)", opts:["Frequency ghatti hai (f = v/λ)","Frequency badhti hai","Frequency same rehti hai","Speed bhi ghatti hai"], cat:"waves", diff:"class11"},

  // Physics – Electricity
  {type:'eq', eqDisplay:"R_parallel = (R₁×R₂)/(R₁+R₂)", q:"Do 6Ω resistors parallel mein lagne se total resistance kya hogi?", ans:"3 Ω", opts:["3 Ω","12 Ω","6 Ω","1 Ω"], cat:"elec", diff:"class11"},

  // Chemistry – Atomic Structure
  {type:'mcq', q:"Isotopes kya hote hain?", ans:"Same element ke atoms jo neutrons mein differ karte hain", opts:["Same element ke atoms jo neutrons mein differ karte hain","Alag elements same mass ke","Same protons aur neutrons","Same electrons alag protons"], cat:"atomic", diff:"class11"},
  {type:'fill', q:"Quantum number 'n' = 2 wale shell mein maximum ___ electrons aa sakte hain.", ans:"8", opts:["8","2","18","32"], cat:"atomic", diff:"class11"},

  // Chemistry – Periodic Table
  {type:'mcq', q:"Halogens (Group 17) mein sabse reactive element kaunsa hai?", ans:"Fluorine (F)", opts:["Fluorine (F)","Chlorine (Cl)","Bromine (Br)","Iodine (I)"], cat:"periodic", diff:"class11"},

  // Biology – Cell
  {type:'mcq', q:"Prokaryotic aur Eukaryotic cells mein sabse bada fark kya hai?", ans:"Eukaryotes mein membrane-bound nucleus hota hai", opts:["Eukaryotes mein membrane-bound nucleus hota hai","Prokaryotes bade hote hain","Eukaryotes mein DNA nahi hota","Prokaryotes mein ribosomes nahi hote"], cat:"cell", diff:"class11"},
  {type:'fill', q:"Osmosis mein paani ___ concentration se ___ concentration ki taraf move karta hai.", ans:"Low solute → High solute (ya high water → low water potential)", opts:["Low solute → High solute (ya high water → low water potential)","High solute → Low solute","Equal → Equal","Koi direction nahi"], cat:"cell", diff:"class11"},

  // Biology – Ecology
  {type:'mcq', q:"Greenhouse effect zyada hone se kya hota hai?", ans:"Global warming — Earth ka temperature badhta hai", opts:["Global warming — Earth ka temperature badhta hai","Earth thandi ho jaati hai","Ozone banta hai","Rainfall ghatti hai hamesha"], cat:"gen", diff:"class11"},

  /* ─── CLASS 12 — 10 naye sawaal (Physics:4, Chem:3, Bio:3) ─── */

  // Physics – Electricity
  {type:'mcq', q:"n-type semiconductor mein majority charge carriers kaun hote hain?", ans:"Electrons", opts:["Electrons","Holes","Protons","Positrons"], cat:"elec", diff:"class12"},
  {type:'eq', eqDisplay:"Q = CV (Capacitor)", q:"Agar capacitance 2F aur voltage 5V ho to charge hoga:", ans:"10 Coulombs", opts:["10 Coulombs","2.5 C","7 C","0.4 C"], cat:"elec", diff:"class12"},

  // Physics – Optics
  {type:'mcq', q:"Total Internal Reflection kab hoti hai?", ans:"Jab angle of incidence critical angle se zyada ho denser medium mein", opts:["Jab angle of incidence critical angle se zyada ho denser medium mein","Jab light vacuum mein jaye","Jab wavelength badhe","Hamesha glass mein"], cat:"waves", diff:"class12"},

  // Physics – Modern Physics
  {type:'eq', eqDisplay:"λ = hc/E (de Broglie / photon)", q:"Agar photon ki energy double ho jaaye to wavelength kya hogi?", ans:"Half (λ inversely proportional to E)", opts:["Half (λ inversely proportional to E)","Double","Same","4 guna"], cat:"waves", diff:"class12"},

  // Chemistry – Chemical Kinetics
  {type:'mcq', q:"Catalyst reaction mein kya karta hai?", ans:"Activation energy ghata deta hai bina khud consume hue", opts:["Activation energy ghata deta hai bina khud consume hue","Reactants ko consume karta hai","Temperature badhata hai","Equilibrium shift karta hai permanently"], cat:"chem", diff:"class12"},
  {type:'fill', q:"Le Chatelier's principle kehta hai ki system disturbance ka ___ karta hai.", ans:"Oppose (counteract)", opts:["Oppose (counteract)","Support","Ignore","Double"], cat:"chem", diff:"class12"},

  // Chemistry – Electrochemistry
  {type:'mcq', q:"Electrolysis mein oxidation kahan hoti hai?", ans:"Anode pe", opts:["Anode pe","Cathode pe","Dono jagah","Solution mein"], cat:"chem", diff:"class12"},

  // Biology – Human Body
  {type:'mcq', q:"Ek healthy adult ka normal resting heart rate kya hoti hai?", ans:"60–100 beats per minute", opts:["60–100 beats per minute","100–140 bpm","40–60 bpm","150–200 bpm"], cat:"humanbody", diff:"class12"},
  {type:'fill', q:"Hamare body mein ADH (Antidiuretic Hormone) ___ gland se release hota hai.", ans:"Posterior Pituitary", opts:["Posterior Pituitary","Adrenal Cortex","Thyroid","Anterior Pituitary"], cat:"humanbody", diff:"class12"},

  // Biology – Genetics
  {type:'mcq', q:"Sex-linked disease color blindness zyatar kisme hoti hai aur kyun?", ans:"Males mein — kyunki unke paas sirf ek X chromosome hai", opts:["Males mein — kyunki unke paas sirf ek X chromosome hai","Females mein — kyunki XX hoti hain","Dono mein equal","Sirf carriers mein"], cat:"genetics", diff:"class12"},

  /* ─── ADVANCED — 10 naye sawaal (Physics:4, Chem:3, Bio:3) ─── */

  // Physics – Mechanics
  {type:'mcq', q:"Lagrangian mechanics Newton ki mechanics se better kyon hai complex systems mein?", ans:"Generalized coordinates use karta hai — constraints handle karna aasaan hota hai", opts:["Generalized coordinates use karta hai — constraints handle karna aasaan hota hai","Zyada accurate hai hamesha","Sirf quantum systems ke liye","Experimental results deta hai directly"], cat:"motion", diff:"advanced"},
  {type:'eq', eqDisplay:"F = -dU/dx (Conservative force)", q:"Potential energy U = kx² ho to force kya hogi?", ans:"F = -2kx (towards equilibrium — SHM)", opts:["F = -2kx (towards equilibrium — SHM)","F = kx²","F = 2kx","F = -kx²"], cat:"force", diff:"advanced"},

  // Physics – Electromagnetism
  {type:'mcq', q:"Displacement current ka concept Maxwell ne add kiya — yeh kahan se aata hai?", ans:"Changing electric flux se (capacitor plates ke beech)", opts:["Changing electric flux se (capacitor plates ke beech)","Moving charges se","Static magnetic field se","Resistor mein current se"], cat:"mag", diff:"advanced"},
  {type:'fill', q:"Electromagnetic waves mein electric aur magnetic fields ek doosre ke ___ hote hain.", ans:"Perpendicular (90°)", opts:["Perpendicular (90°)","Parallel","Anti-parallel","Random angle par"], cat:"mag", diff:"advanced"},

  // Chemistry – Thermodynamics
  {type:'mcq', q:"Entropy (S) ka SI unit kya hai?", ans:"J/K (Joules per Kelvin)", opts:["J/K (Joules per Kelvin)","J/mol","kJ","Cal/K"], cat:"atomic", diff:"advanced"},
  {type:'eq', eqDisplay:"ΔH = ΔU + ΔnRT", q:"Is equation mein Δn kya hai?", ans:"Moles of gaseous products minus moles of gaseous reactants", opts:["Moles of gaseous products minus moles of gaseous reactants","Total moles of all reactants","Change in number of atoms","Change in temperature"], cat:"atomic", diff:"advanced"},

  // Chemistry – Organic
  {type:'mcq', q:"Nucleophilic substitution reaction mein nucleophile kya hota hai?", ans:"Electron-rich species jo electrophile pe attack karta hai", opts:["Electron-rich species jo electrophile pe attack karta hai","Electron-poor species","Radical species","Proton donor always"], cat:"organic", diff:"advanced"},

  // Biology – Molecular
  {type:'mcq', q:"Alternative splicing kya allow karta hai?", ans:"Ek gene se multiple different proteins banana", opts:["Ek gene se multiple different proteins banana","DNA ko repair karna","Cell division rokna","Protein folding"], cat:"genetics", diff:"advanced"},
  {type:'fill', q:"Krebs cycle (TCA cycle) mein ek glucose molecule se net ___ ATP banta hai is cycle se.", ans:"2 ATP (direct)", opts:["2 ATP (direct)","34 ATP","10 ATP","8 ATP"], cat:"cell", diff:"advanced"},

  // Biology – Plant Science
  {type:'mcq', q:"C4 plants (jaise sugarcane) C3 plants se better kyun perform karte hain hot/dry conditions mein?", ans:"CO₂ concentrate karke photorespiration minimize karte hain", opts:["CO₂ concentrate karke photorespiration minimize karte hain","Zyada chlorophyll hoti hai","Raat mein photosynthesis karte hain","Roots deeper hoti hain"], cat:"plant", diff:"advanced"},

  /* ─── PhD LEVEL — 10 naye sawaal (Physics:4, Chem:3, Bio:3) ─── */

  // Physics – Quantum Field Theory
  {type:'mcq', q:"Standard Model of Particle Physics mein kaun sa particle strong nuclear force mediate karta hai?", ans:"Gluon", opts:["Gluon","Photon","W/Z boson","Graviton"], cat:"phy", diff:"phd"},
  {type:'fill', q:"Feynman path integral mein particle ___ possible paths ke sum ke zariye propagate hota hai.", ans:"Saare (All possible paths)", opts:["Saare (All possible paths)","Sirf shortest path","Random ek path","Straight line only"], cat:"phy", diff:"phd"},

  // Physics – Statistical Mechanics
  {type:'mcq', q:"Bose-Einstein condensate kab form hota hai?", ans:"Jab bosons bahut low temperature pe ground state mein collect ho jaayein", opts:["Jab bosons bahut low temperature pe ground state mein collect ho jaayein","Jab fermions cool down hon","Jab pressure extreme ho","Jab magnetic field apply ho"], cat:"energy", diff:"phd"},

  // Physics – General Relativity
  {type:'mcq', q:"Gravitational waves kya hain?", ans:"Spacetime mein ripples jo massive accelerating objects se paida hote hain", opts:["Spacetime mein ripples jo massive accelerating objects se paida hote hain","Sound waves in space","Electromagnetic radiation","Quantum mechanical waves"], cat:"phy", diff:"phd"},

  // Chemistry – Coordination Chemistry
  {type:'mcq', q:"Crystal Field Theory mein d-orbital splitting high-field ligands ke saath kaise hoti hai?", ans:"Large Δ (large splitting) — low spin complex banta hai", opts:["Large Δ (large splitting) — low spin complex banta hai","Small Δ — high spin banta hai","Koi splitting nahi hoti","Δ = 0 hamesha"], cat:"atomic", diff:"phd"},
  {type:'eq', eqDisplay:"pH = pKa + log([A⁻]/[HA])", q:"Is Henderson-Hasselbalch equation mein jab [A⁻] = [HA] ho to pH kya hoga?", ans:"pH = pKa", opts:["pH = pKa","pH = 7","pH = 0","pH = 2×pKa"], cat:"acid", diff:"phd"},

  // Chemistry – Advanced Organic
  {type:'mcq', q:"Woodward-Hoffmann rules kya govern karte hain?", ans:"Pericyclic reactions mein orbital symmetry allowed/forbidden pathways", opts:["Pericyclic reactions mein orbital symmetry allowed/forbidden pathways","SN2 reaction rates","Acid-base equilibria","NMR peak positions"], cat:"organic", diff:"phd"},

  // Biology – Systems Biology
  {type:'mcq', q:"Synthetic biology mein 'genetic circuit' ka concept kahan se aaya hai?", ans:"Electronic circuits se analogy le ke", opts:["Electronic circuits se analogy le ke","Mechanical gears se","Chemical equilibrium se","Evolutionary theory se"], cat:"genetics", diff:"phd"},
  {type:'fill', q:"Proteomics mein protein identification ke liye sabse common mass spectrometry technique ___ hai.", ans:"LC-MS/MS (Liquid Chromatography tandem Mass Spectrometry)", opts:["LC-MS/MS (Liquid Chromatography tandem Mass Spectrometry)","NMR only","X-ray crystallography","Western blot"], cat:"cell", diff:"phd"},

  // Biology – Neuroscience
  {type:'mcq', q:"Long-term potentiation (LTP) memory formation mein kya role play karta hai?", ans:"Synaptic strength badhata hai — learning aur memory ka cellular basis", opts:["Synaptic strength badhata hai — learning aur memory ka cellular basis","Synapse destroy karta hai","Neurotransmitter reduce karta hai","Blood flow rokta hai"], cat:"humanbody", diff:"phd"},
  /* ══════════════════════════════════════════════════════════════════════
     50 NEW QUESTIONS — v4.0 | Physics:20 | Chemistry:15 | Biology:15
     Biology questions use imageUrl field (Supabase-ready placeholders)
     Levels: basics×10 | class11×10 | class12×10 | advanced×10 | phd×10
  ══════════════════════════════════════════════════════════════════════ */

  /* ─── BASICS — 10 questions (Phy:4 | Chem:3 | Bio:3) ─── */

  // Physics – Waves (basics)
  {type:"mcq", q:"Echo kyun sunai deta hai?", ans:"Sound ki reflection wajah se", opts:["Sound ki reflection wajah se","Sound ki absorption se","Sound ki refraction se","Vibration band ho jaati hai"], cat:"waves", diff:"basics", subj:"physics"},
  // Physics – Magnetism (basics)
  {type:"mcq", q:"Compass mein needle hamesha kis taraf point karti hai?", ans:"North pole ki taraf", opts:["North pole ki taraf","South pole ki taraf","East ki taraf","Sun ki taraf"], cat:"mag", diff:"basics", subj:"physics"},
  // Physics – Electricity (basics)
  {type:"fill", q:"Ek simple circuit mein switch band hone par bulb ___ ho jaata hai.", ans:"Off (bujh jaata hai)", opts:["Off (bujh jaata hai)","Aur zyada jalta hai","Same rehta hai","Blast ho jaata hai"], cat:"elec", diff:"basics", subj:"physics"},
  // Physics – Force (basics)
  {type:"mcq", q:"Balloon mein hawa bharne se balloon phulta kyun hai?", ans:"Gas pressure andar se bahar push karta hai", opts:["Gas pressure andar se bahar push karta hai","Balloon khud badhta hai","Magic se hota hai","Gravity nahi lagti"], cat:"force", diff:"basics", subj:"physics"},

  // Chemistry – Organic (basics)
  {type:"mcq", q:"LPG (cooking gas) mainly kis gas se bani hoti hai?", ans:"Propane aur Butane", opts:["Propane aur Butane","Hydrogen aur Oxygen","Nitrogen aur CO₂","Methane sirf"], cat:"organic", diff:"basics", subj:"chemistry"},
  // Chemistry – Acids & Bases (basics)
  {type:"mcq", q:"Toothpaste ka nature kya hota hai?", ans:"Slightly alkaline (basic)", opts:["Slightly alkaline (basic)","Strongly acidic","Neutral (pH=7)","Strongly basic"], cat:"acid", diff:"basics", subj:"chemistry"},
  // Chemistry – Chem Basics (basics)
  {type:"fill", q:"Rust lagna iron ka ___ ke saath react karna hai.", ans:"Oxygen aur water (Fe₂O₃)", opts:["Oxygen aur water (Fe₂O₃)","Nitrogen se","CO₂ se","Carbon se"], cat:"chem", diff:"basics", subj:"chemistry"},

  // Biology – Cell Structure (basics) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_ANIMAL_CELL", emoji:"🫧", imgCaption:"Animal cell ka labelled diagram", q:"Animal cell mein plant cell ki tarah yeh structure nahi hota — kaunsa?", ans:"Cell Wall", opts:["Cell Wall","Cell Membrane","Nucleus","Mitochondria"], cat:"cell", diff:"basics", subj:"biology"},
  // Biology – Human Body (basics) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_DIGESTIVE_SYSTEM", emoji:"🫁", imgCaption:"Human digestive system diagram", q:"Yahan dikhaye gaye system mein food digest hone ke baad nutrients kahan absorb hote hain?", ans:"Small intestine (chhoti aant) mein", opts:["Small intestine (chhoti aant) mein","Stomach mein","Large intestine mein","Mouth mein"], cat:"humanbody", diff:"basics", subj:"biology"},
  // Biology – Plant Biology (basics)
  {type:"mcq", q:"Paudhon mein jaad (roots) ka main kaam kya hai?", ans:"Paani aur minerals absorb karna aur anchor karna", opts:["Paani aur minerals absorb karna aur anchor karna","Photosynthesis karna","Seeds banana","Oxygen release karna"], cat:"plant", diff:"basics", subj:"biology"},

  /* ─── CLASS 11 — 10 questions (Phy:4 | Chem:3 | Bio:3) ─── */

  // Physics – Motion (class11)
  {type:"eq", eqDisplay:"a = (v-u)/t", q:"Ek car 0 se 60 m/s tak 10 seconds mein pahunchi. Acceleration kya hai?", ans:"6 m/s²", opts:["6 m/s²","60 m/s²","0.6 m/s²","600 m/s²"], cat:"motion", diff:"class11", subj:"physics"},
  // Physics – Energy (class11)
  {type:"mcq", q:"Power ka SI unit kya hai?", ans:"Watt (W)", opts:["Watt (W)","Joule (J)","Newton (N)","Pascal (Pa)"], cat:"energy", diff:"class11", subj:"physics"},
  // Physics – Waves (class11)
  {type:"fill", q:"Electromagnetic spectrum mein visible light se zyada energy wali radiation ___ hai.", ans:"Ultraviolet / X-rays / Gamma rays", opts:["Ultraviolet / X-rays / Gamma rays","Infrared","Microwaves","Radio waves"], cat:"waves", diff:"class11", subj:"physics"},
  // Physics – Magnetism (class11)
  {type:"mcq", q:"Ek current-carrying wire ke around magnetic field ka shape kya hota hai?", ans:"Concentric circles (wire ke around)", opts:["Concentric circles (wire ke around)","Straight lines","Spiral shape","No shape"], cat:"mag", diff:"class11", subj:"physics"},

  // Chemistry – Chemical Bonding (class11)
  {type:"mcq", q:"Water (H₂O) polar kyun hoti hai?", ans:"O ki electronegativity zyada hai — unequal electron sharing", opts:["O ki electronegativity zyada hai — unequal electron sharing","H aur O same size ke hain","Bond length zyada hai","Ek ionic bond hai"], cat:"bond", diff:"class11", subj:"chemistry"},
  // Chemistry – Atomic Structure (class11)
  {type:"fill", q:"Radioactive element ka half-life matlab hai ki uski original mass ___ reh jaayegi.", ans:"Aadhi (50%)", opts:["Aadhi (50%)","Ek chauthai (25%)","Zero","Poori (100%)"], cat:"atomic", diff:"class11", subj:"chemistry"},
  // Chemistry – Periodic Table (class11)
  {type:"mcq", q:"Transition metals (d-block) mein kaun sa property common hai?", ans:"Variable oxidation states", opts:["Variable oxidation states","Fixed valency of 1","All are gases","All are radioactive"], cat:"periodic", diff:"class11", subj:"chemistry"},

  // Biology – Cell (class11) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_MITOCHONDRIA_STRUCTURE", emoji:"🔋", imgCaption:"Mitochondria ka internal structure (cristae, matrix)", q:"Mitochondria ki inner membrane par yeh fold-like structures hain jo surface area badhate hain — inhe kya kehte hain?", ans:"Cristae", opts:["Cristae","Matrix","Intermembrane space","Outer membrane"], cat:"cell", diff:"class11", subj:"biology"},
  // Biology – Genetics (class11) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_DNA_REPLICATION", emoji:"🧬", imgCaption:"DNA replication fork diagram", q:"DNA replication mein yahan dikhaya gaya 'replication fork' kahan se start hota hai?", ans:"Origin of replication (ori) se", opts:["Origin of replication (ori) se","3' end se","5' end se","Random jagah se"], cat:"genetics", diff:"class11", subj:"biology"},
  // Biology – Ecology (class11)
  {type:"mcq", q:"Parasitism mein konsa relationship hota hai?", ans:"Ek organism benefit leta hai, doosra harmed hota hai", opts:["Ek organism benefit leta hai, doosra harmed hota hai","Dono ko benefit","Dono ko harm","Koi effect nahi"], cat:"gen", diff:"class11", subj:"biology"},

  /* ─── CLASS 12 — 10 questions (Phy:4 | Chem:3 | Bio:3) ─── */

  // Physics – Electricity (class12)
  {type:"mcq", q:"Logic gate 'AND' ka output kab 1 hota hai?", ans:"Jab dono inputs 1 hon", opts:["Jab dono inputs 1 hon","Jab ek input 1 ho","Jab dono inputs 0 hon","Hamesha 1"], cat:"elec", diff:"class12", subj:"physics"},
  // Physics – Optics (class12)
  {type:"eq", eqDisplay:"1/f = 1/v - 1/u (Mirror formula)", q:"Concave mirror mein focus distance 10 cm hai, object 30 cm par hai. Image distance kya hogi?", ans:"15 cm (real, inverted)", opts:["15 cm (real, inverted)","-15 cm","30 cm","10 cm"], cat:"waves", diff:"class12", subj:"physics"},
  // Physics – Magnetism (class12)
  {type:"mcq", q:"MRI machine mein kaunsa principle use hota hai?", ans:"Nuclear Magnetic Resonance (NMR)", opts:["Nuclear Magnetic Resonance (NMR)","X-ray absorption","Ultrasound reflection","Infrared imaging"], cat:"mag", diff:"class12", subj:"physics"},
  // Physics – Modern Physics (class12)
  {type:"fill", q:"Photoelectric effect mein minimum frequency jo electron emit kare use ___ frequency kehte hain.", ans:"Threshold frequency (ν₀)", opts:["Threshold frequency (ν₀)","Maximum frequency","Resonance frequency","Cut-off frequency"], cat:"waves", diff:"class12", subj:"physics"},

  // Chemistry – Electrochemistry (class12)
  {type:"eq", eqDisplay:"ΔG° = -nFE°cell", q:"Agar E°cell positive ho to reaction:", ans:"Spontaneous (apne aap hoti hai)", opts:["Spontaneous (apne aap hoti hai)","Non-spontaneous","Reversible only","At equilibrium"], cat:"chem", diff:"class12", subj:"chemistry"},
  // Chemistry – Chemical Kinetics (class12)
  {type:"mcq", q:"First order reaction mein rate depend karta hai:", ans:"Sirf ek reactant ki concentration pe", opts:["Sirf ek reactant ki concentration pe","Do reactants pe","Concentration pe bilkul nahi","Temperature pe only"], cat:"chem", diff:"class12", subj:"chemistry"},
  // Chemistry – Organic (class12)
  {type:"fill", q:"Aldehyde mein functional group ___ hota hai.", ans:"-CHO", opts:["-CHO","-COOH","-OH","-CO-"], cat:"organic", diff:"class12", subj:"chemistry"},

  // Biology – Human Body (class12) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_HEART_CHAMBERS", emoji:"🫀", imgCaption:"Human heart — 4 chambers ka diagram", q:"Oxygenated blood heart ke is chamber se body mein pump hota hai — kaunsa chamber?", ans:"Left Ventricle (baayaan ventricle)", opts:["Left Ventricle (baayaan ventricle)","Right Ventricle","Left Atrium","Right Atrium"], cat:"humanbody", diff:"class12", subj:"biology"},
  // Biology – Plant Biology (class12) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_LEAF_CROSS_SECTION", emoji:"🍃", imgCaption:"Leaf ki cross-section (transverse section)", q:"Is cross-section mein upper surface ke paas wali tightly packed cells ka layer kya kehlata hai?", ans:"Palisade mesophyll", opts:["Palisade mesophyll","Spongy mesophyll","Epidermis","Vascular bundle"], cat:"plant", diff:"class12", subj:"biology"},
  // Biology – Genetics (class12) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_KARYOTYPE", emoji:"🧬", imgCaption:"Human karyotype (chromosomes arranged in pairs)", q:"Normal human female ka karyotype XX hota hai. Down syndrome mein chromosome 21 ki kitni copies hoti hain?", ans:"3 copies (Trisomy 21)", opts:["3 copies (Trisomy 21)","1 copy","4 copies","2 copies"], cat:"genetics", diff:"class12", subj:"biology"},

  /* ─── ADVANCED — 10 questions (Phy:4 | Chem:3 | Bio:3) ─── */

  // Physics – Electromagnetism (advanced)
  {type:"mcq", q:"Poynting vector S = E × B kya represent karta hai?", ans:"Electromagnetic wave ki energy flux (power per unit area)", opts:["Electromagnetic wave ki energy flux (power per unit area)","Magnetic force on charge","Electric potential","Wave frequency"], cat:"mag", diff:"advanced", subj:"physics"},
  // Physics – Thermodynamics (advanced)
  {type:"eq", eqDisplay:"S = k_B ln(Ω)", q:"Is Boltzmann entropy formula mein Ω kya hai?", ans:"Number of microstates (possible arrangements)", opts:["Number of microstates (possible arrangements)","Angular velocity","Ohm resistance","Volume"], cat:"energy", diff:"advanced", subj:"physics"},
  // Physics – Optics (advanced)
  {type:"mcq", q:"Optical fiber mein signal propagate hota hai kis principle pe?", ans:"Total internal reflection", opts:["Total internal reflection","Normal reflection","Diffraction","Polarization"], cat:"waves", diff:"advanced", subj:"physics"},
  // Physics – Quantum (advanced)
  {type:"fill", q:"Compton scattering mein scattered X-ray ki wavelength incident se ___ hoti hai.", ans:"Zyada (longer wavelength)", opts:["Zyada (longer wavelength)","Kam (shorter)","Same","Zero"], cat:"waves", diff:"advanced", subj:"physics"},

  // Chemistry – Thermodynamics (advanced)
  {type:"mcq", q:"Standard enthalpy of formation (ΔHf°) kise define ki jaati hai?", ans:"1 mole compound banne ki enthalpy — elements unke standard states mein", opts:["1 mole compound banne ki enthalpy — elements unke standard states mein","Combustion ki enthalpy","Neutralization ki enthalpy","Solution ki enthalpy"], cat:"atomic", diff:"advanced", subj:"chemistry"},
  // Chemistry – Organic (advanced)
  {type:"mcq", q:"Gabriel synthesis se kya banata hai?", ans:"Primary amines (RNH₂)", opts:["Primary amines (RNH₂)","Secondary amines","Carboxylic acids","Alcohols"], cat:"organic", diff:"advanced", subj:"chemistry"},
  // Chemistry – Acid-Base (advanced)
  {type:"eq", eqDisplay:"Ka × Kb = Kw = 10⁻¹⁴ (at 25°C)", q:"Agar weak acid ka Ka = 10⁻⁵ ho to uske conjugate base ka Kb kya hoga?", ans:"10⁻⁹", opts:["10⁻⁹","10⁻⁵","10⁻¹⁴","10⁻¹"], cat:"acid", diff:"advanced", subj:"chemistry"},

  // Biology – Cell (advanced) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_ELECTRON_TRANSPORT_CHAIN", emoji:"⚡", imgCaption:"Mitochondria mein Electron Transport Chain (ETC)", q:"ETC mein final electron acceptor kaun sa molecule hai?", ans:"Oxygen (O₂) — paani banta hai", opts:["Oxygen (O₂) — paani banta hai","CO₂","NAD⁺","ATP"], cat:"cell", diff:"advanced", subj:"biology"},
  // Biology – Genetics (advanced) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_RESTRICTION_ENZYME", emoji:"✂️", imgCaption:"Restriction enzyme DNA cut karte hue", q:"Restriction enzymes DNA ko kis specific jagah pe cut karte hain?", ans:"Palindromic recognition sequences pe", opts:["Palindromic recognition sequences pe","Random jagah pe","Sirf promoter region pe","Only 5' end pe"], cat:"genetics", diff:"advanced", subj:"biology"},
  // Biology – Ecology (advanced)
  {type:"mcq", q:"Island biogeography theory mein species richness depend karti hai:", ans:"Island size aur mainland se distance pe", opts:["Island size aur mainland se distance pe","Sirf island size pe","Sirf distance pe","Temperature pe"], cat:"gen", diff:"advanced", subj:"biology"},

  /* ─── PhD LEVEL — 10 questions (Phy:4 | Chem:3 | Bio:3) ─── */

  // Physics – String Theory (phd)
  {type:"mcq", q:"M-theory (superstring theory ka extension) kitne spatial dimensions predict karta hai?", ans:"10 spatial + 1 time = 11 dimensions total", opts:["10 spatial + 1 time = 11 dimensions total","3 spatial + 1 time = 4","6 dimensions","26 dimensions"], cat:"phy", diff:"phd", subj:"physics"},
  // Physics – Quantum Computing (phd)
  {type:"fill", q:"Quantum computing mein superposition aur ___ dono properties use hoti hain jo classical computing se better performance deti hain.", ans:"Entanglement", opts:["Entanglement","Gravity","Magnetic field","Temperature"], cat:"phy", diff:"phd", subj:"physics"},
  // Physics – Condensed Matter (phd)
  {type:"mcq", q:"Topological insulators kya hote hain?", ans:"Bulk mein insulator lekin surface pe conducting — time-reversal symmetry protected", opts:["Bulk mein insulator lekin surface pe conducting — time-reversal symmetry protected","Normal insulators","Perfect conductors","Semiconductors only"], cat:"elec", diff:"phd", subj:"physics"},
  // Physics – Astrophysics (phd)
  {type:"eq", eqDisplay:"T_H = ℏc³/(8πGMk_B) — Hawking Temperature", q:"Is formula se pata chalta hai ki black hole ka mass badhne se uska temperature:", ans:"Ghatta hai (inversely proportional)", opts:["Ghatta hai (inversely proportional)","Badhta hai","Same rehta hai","Zero ho jaata hai"], cat:"phy", diff:"phd", subj:"physics"},

  // Chemistry – Advanced Materials (phd)
  {type:"mcq", q:"Graphene ki kaunsi property ise extraordinary conductor banati hai?", ans:"Electrons behave karte hain massless Dirac fermions jaisa", opts:["Electrons behave karte hain massless Dirac fermions jaisa","Single layer carbon atoms","Hexagonal lattice only","High melting point"], cat:"atomic", diff:"phd", subj:"chemistry"},
  // Chemistry – Catalysis (phd)
  {type:"mcq", q:"Enzyme catalysis mein 'induced fit model' kya kehta hai?", ans:"Substrate binding pe enzyme ki shape change hoti hai", opts:["Substrate binding pe enzyme ki shape change hoti hai","Enzyme rigid rahti hai","Substrate enzyme mein fit nahi hota","Temperature hi catalyst hai"], cat:"organic", diff:"phd", subj:"chemistry"},
  // Chemistry – Quantum Chemistry (phd)
  {type:"fill", q:"Molecular orbital theory mein bonding MO mein electrons dono atoms ko ___ karte hain.", ans:"Stabilize (bond order badhate hain)", opts:["Stabilize (bond order badhate hain)","Destabilize","Repel","Neutralize"], cat:"bond", diff:"phd", subj:"chemistry"},

  // Biology – Structural Biology (phd) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_PROTEIN_STRUCTURE_LEVELS", emoji:"🔬", imgCaption:"Protein ki 4 structural levels (1°, 2°, 3°, 4°)", q:"Protein ki quaternary structure kya describe karti hai?", ans:"Multiple polypeptide chains ka arrangement ek functional unit mein", opts:["Multiple polypeptide chains ka arrangement ek functional unit mein","Single chain ki 3D folding","Alpha helix aur beta sheets","Amino acid sequence"], cat:"cell", diff:"phd", subj:"biology"},
  // Biology – Cancer Biology (phd) — IMAGE
  {type:"img", imageUrl:"IMG_PLACEHOLDER_TUMOR_SUPPRESSOR", emoji:"🛡️", imgCaption:"p53 tumor suppressor pathway diagram", q:"p53 protein (tumor suppressor) DNA damage milne par cell mein kya karta hai?", ans:"Cell cycle rok deta hai ya apoptosis trigger karta hai", opts:["Cell cycle rok deta hai ya apoptosis trigger karta hai","Cell growth accelerate karta hai","DNA damage ignore karta hai","Protein synthesis band karta hai"], cat:"genetics", diff:"phd", subj:"biology"},
  // Biology – Evolution (phd)
  {type:"mcq", q:"Punctuated equilibrium theory (Gould & Eldredge) kya propose karta hai?", ans:"Evolution stasis ke periods aur sudden rapid change se milkar hoti hai", opts:["Evolution stasis ke periods aur sudden rapid change se milkar hoti hai","Evolution hamesha slow aur gradual hoti hai","Species never change karte","Random mutations hi sab kuch hain"], cat:"gen", diff:"phd", subj:"biology"},

];
