// ────────────────────────────────────────────────────────────
// QUESTION DATABASE
// Each Q: { q, opts:[4], ans, cat, diff }
// diff: 'easy' | 'medium' | 'hard'
// cat:  'prob'|'pl'|'pct'|'root'|'trig'|'alg'|'form'|'sci'|'mental'
// ────────────────────────────────────────────────────────────
const QUESTIONS = [

  /* ═══ EASY ═══ */

  // Probability
  {q:'A coin is tossed. What is the probability of getting Heads?', ans:'1/2', opts:['1/4','1/2','1/3','2/3'], cat:'prob', diff:'easy'},
  {q:'A die is rolled. What is the probability of getting 6?', ans:'1/6', opts:['1/2','1/3','1/6','1/4'], cat:'prob', diff:'easy'},
  {q:'A bag has 3 red and 2 blue balls. Probability of picking red?', ans:'3/5', opts:['2/5','3/5','1/2','3/2'], cat:'prob', diff:'easy'},
  {q:'Two coins tossed. Probability of getting exactly 1 Head?', ans:'1/2', opts:['1/4','3/4','1/2','1/3'], cat:'prob', diff:'easy'},

  // Profit & Loss
  {q:'CP = ₹100, SP = ₹120. What is the Profit?', ans:'₹20', opts:['₹10','₹20','₹25','₹30'], cat:'pl', diff:'easy'},
  {q:'CP = ₹200, SP = ₹180. What is the Loss?', ans:'₹20', opts:['₹10','₹20','₹25','₹40'], cat:'pl', diff:'easy'},
  {q:'CP = ₹500, Profit = 10%. What is SP?', ans:'₹550', opts:['₹510','₹525','₹550','₹600'], cat:'pl', diff:'easy'},
  {q:'If CP = ₹100 and Loss% = 5%, find SP.', ans:'₹95', opts:['₹90','₹95','₹105','₹85'], cat:'pl', diff:'easy'},

  // Percentage
  {q:'What is 20% of 200?', ans:'40', opts:['20','30','40','50'], cat:'pct', diff:'easy'},
  {q:'What is 50% of 80?', ans:'40', opts:['40','45','50','35'], cat:'pct', diff:'easy'},
  {q:'25 is what percent of 100?', ans:'25%', opts:['20%','25%','30%','15%'], cat:'pct', diff:'easy'},
  {q:'What is 10% of 500?', ans:'50', opts:['50','55','45','60'], cat:'pct', diff:'easy'},

  // Square & Cube Roots
  {q:'What is √144?', ans:'12', opts:['11','12','13','14'], cat:'root', diff:'easy'},
  {q:'What is √81?', ans:'9', opts:['7','8','9','10'], cat:'root', diff:'easy'},
  {q:'What is ∛27?', ans:'3', opts:['2','3','4','5'], cat:'root', diff:'easy'},
  {q:'What is 7²?', ans:'49', opts:['42','48','49','56'], cat:'root', diff:'easy'},
  {q:'What is ∛64?', ans:'4', opts:['3','4','5','6'], cat:'root', diff:'easy'},

  // Trigonometry
  {q:'What is sin(30°)?', ans:'1/2', opts:['√3/2','1/2','1/√2','1'], cat:'trig', diff:'easy'},
  {q:'What is cos(60°)?', ans:'1/2', opts:['√3/2','1/2','0','1'], cat:'trig', diff:'easy'},
  {q:'What is tan(45°)?', ans:'1', opts:['0','1','√3','1/√3'], cat:'trig', diff:'easy'},
  {q:'What is sin(90°)?', ans:'1', opts:['0','1/2','√3/2','1'], cat:'trig', diff:'easy'},

  // Algebra
  {q:'If x + 5 = 12, what is x?', ans:'7', opts:['5','6','7','8'], cat:'alg', diff:'easy'},
  {q:'If 2x = 14, what is x?', ans:'7', opts:['5','6','7','8'], cat:'alg', diff:'easy'},
  {q:'Simplify: 3x + 2x', ans:'5x', opts:['5x','6x','4x','5x²'], cat:'alg', diff:'easy'},
  {q:'If x − 4 = 10, what is x?', ans:'14', opts:['12','13','14','15'], cat:'alg', diff:'easy'},

  // Formulas
  {q:'Area of a rectangle = ?', ans:'l × b', opts:['2(l+b)','l × b','l²','πr²'], cat:'form', diff:'easy'},
  {q:'Perimeter of a square with side s = ?', ans:'4s', opts:['s²','4s','2s','s³'], cat:'form', diff:'easy'},
  {q:'Area of a circle with radius r = ?', ans:'πr²', opts:['πr','2πr','πr²','πr³'], cat:'form', diff:'easy'},

  // Scientists
  {q:'Who is known as the "Prince of Mathematics"?', ans:'Carl Friedrich Gauss', opts:['Euler','Newton','Gauss','Leibniz'], cat:'sci', diff:'easy'},
  {q:'Who invented Calculus (along with Newton)?', ans:'Leibniz', opts:['Euler','Leibniz','Gauss','Pascal'], cat:'sci', diff:'easy'},
  {q:'Who proved the Pythagorean theorem is named after?', ans:'Pythagoras', opts:['Euclid','Pythagoras','Archimedes','Thales'], cat:'sci', diff:'easy'},

  // Mental Math
  {q:'45 × 2 = ?', ans:'90', opts:['80','85','90','95'], cat:'mental', diff:'easy'},
  {q:'17 + 28 = ?', ans:'45', opts:['43','44','45','46'], cat:'mental', diff:'easy'},
  {q:'100 − 37 = ?', ans:'63', opts:['61','62','63','64'], cat:'mental', diff:'easy'},
  {q:'12 × 12 = ?', ans:'144', opts:['132','140','144','148'], cat:'mental', diff:'easy'},
  {q:'8 × 9 = ?', ans:'72', opts:['63','70','72','81'], cat:'mental', diff:'easy'},

  /* ═══ MEDIUM ═══ */

  // Probability
  {q:'Two dice rolled. P(sum = 7) = ?', ans:'1/6', opts:['1/12','1/6','5/36','7/36'], cat:'prob', diff:'medium'},
  {q:'Cards: P(drawing an Ace from 52 cards) = ?', ans:'1/13', opts:['1/13','1/4','4/52 = 1/13','1/52'], cat:'prob', diff:'medium'},
  {q:'Bag: 4 Red, 3 Green, 2 Blue. P(NOT Red) = ?', ans:'5/9', opts:['4/9','5/9','1/3','5/8'], cat:'prob', diff:'medium'},
  {q:'Conditional: P(A∩B)=0.2, P(B)=0.5. Find P(A|B).', ans:'0.4', opts:['0.2','0.3','0.4','0.5'], cat:'prob', diff:'medium'},

  // Profit & Loss
  {q:'CP=₹400, SP=₹460. What is Profit%?', ans:'15%', opts:['10%','12%','15%','20%'], cat:'pl', diff:'medium'},
  {q:'SP=₹525, Profit=5%. Find CP.', ans:'₹500', opts:['₹475','₹490','₹500','₹510'], cat:'pl', diff:'medium'},
  {q:'CP=₹800, Loss=12.5%. Find SP.', ans:'₹700', opts:['₹680','₹700','₹720','₹750'], cat:'pl', diff:'medium'},
  {q:'A shopkeeper marks an item 40% above CP and gives 20% discount. What is profit%?', ans:'12%', opts:['8%','10%','12%','14%'], cat:'pl', diff:'medium'},

  // Percentage
  {q:'A number is increased by 20% then decreased by 20%. Net change?', ans:'−4%', opts:['0%','+4%','−4%','−2%'], cat:'pct', diff:'medium'},
  {q:'60 students: 40% pass. How many fail?', ans:'36', opts:['24','30','36','40'], cat:'pct', diff:'medium'},
  {q:'Price increased from ₹250 to ₹300. % increase?', ans:'20%', opts:['15%','18%','20%','25%'], cat:'pct', diff:'medium'},
  {q:'What is 12.5% of 640?', ans:'80', opts:['70','75','80','90'], cat:'pct', diff:'medium'},

  // Square & Cube Roots
  {q:'What is √(1764)?', ans:'42', opts:['38','40','42','44'], cat:'root', diff:'medium'},
  {q:'What is ∛512?', ans:'8', opts:['6','7','8','9'], cat:'root', diff:'medium'},
  {q:'What is (3.6)²?', ans:'12.96', opts:['11.56','12.00','12.96','13.20'], cat:'root', diff:'medium'},
  {q:'If x² = 225, find x.', ans:'15', opts:['13','14','15','16'], cat:'root', diff:'medium'},

  // Trigonometry
  {q:'What is the value of sin²θ + cos²θ?', ans:'1', opts:['0','1','2','sinθcosθ'], cat:'trig', diff:'medium'},
  {q:'What is tan(θ) in terms of sin and cos?', ans:'sinθ/cosθ', opts:['cosθ/sinθ','sinθ/cosθ','sinθ × cosθ','1/sinθ'], cat:'trig', diff:'medium'},
  {q:'cos(0°) = ?', ans:'1', opts:['0','1','1/2','√3/2'], cat:'trig', diff:'medium'},
  {q:'sin(60°) = ?', ans:'√3/2', opts:['1/2','1/√2','√3/2','√3'], cat:'trig', diff:'medium'},

  // Algebra
  {q:'Solve: 3x − 7 = 11', ans:'x = 6', opts:['x=5','x=6','x=7','x=4'], cat:'alg', diff:'medium'},
  {q:'Expand: (a + b)²', ans:'a²+2ab+b²', opts:['a²+b²','a²+2ab+b²','a²−2ab+b²','2a+2b'], cat:'alg', diff:'medium'},
  {q:'Factor: x² − 9', ans:'(x+3)(x−3)', opts:['(x+3)²','(x−3)²','(x+3)(x−3)','(x+9)(x−1)'], cat:'alg', diff:'medium'},
  {q:'If 5x + 3 = 2x + 15, find x.', ans:'4', opts:['3','4','5','6'], cat:'alg', diff:'medium'},

  // Formulas
  {q:'Volume of a cylinder (radius r, height h) = ?', ans:'πr²h', opts:['2πrh','πrh','πr²h','(4/3)πr³'], cat:'form', diff:'medium'},
  {q:'Distance formula between (x₁,y₁) and (x₂,y₂) = ?', ans:'√[(x₂−x₁)²+(y₂−y₁)²]', opts:['(x₂−x₁)+(y₂−y₁)','√[(x₂−x₁)²+(y₂−y₁)²]','(x₂−x₁)²+(y₂−y₁)²','|x₂−x₁|'], cat:'form', diff:'medium'},
  {q:'Sum of interior angles of a hexagon = ?', ans:'720°', opts:['540°','620°','720°','900°'], cat:'form', diff:'medium'},

  // Scientists
  {q:'Who discovered the number "e" (Euler\'s number)?', ans:'Leonhard Euler', opts:['Gauss','Euler','Newton','Fermat'], cat:'sci', diff:'medium'},
  {q:'Who wrote "Elements," the famous geometry textbook?', ans:'Euclid', opts:['Archimedes','Euclid','Pythagoras','Plato'], cat:'sci', diff:'medium'},
  {q:'Aryabhata estimated π as approximately?', ans:'3.1416', opts:['3.12','3.14','3.1416','3.15'], cat:'sci', diff:'medium'},

  // Mental Math
  {q:'125 × 8 = ?', ans:'1000', opts:['900','950','1000','1050'], cat:'mental', diff:'medium'},
  {q:'999 + 999 = ?', ans:'1998', opts:['1997','1998','1999','2000'], cat:'mental', diff:'medium'},
  {q:'√(0.16) = ?', ans:'0.4', opts:['0.4','0.04','4','0.8'], cat:'mental', diff:'medium'},
  {q:'48 ÷ 4 × 3 = ?', ans:'36', opts:['32','34','36','40'], cat:'mental', diff:'medium'},

  /* ═══ HARD ═══ */

  // Probability
  {q:'Bayes\' Theorem: P(A|B) = ?', ans:'P(B|A)P(A)/P(B)', opts:['P(A)P(B)','P(B|A)/P(A)','P(B|A)P(A)/P(B)','P(A)/P(B)'], cat:'prob', diff:'hard'},
  {q:'Expected value of rolling a fair die = ?', ans:'3.5', opts:['3','3.5','4','2.5'], cat:'prob', diff:'hard'},
  {q:'P(at least one Head in 4 coin tosses) = ?', ans:'15/16', opts:['7/8','13/16','15/16','1/2'], cat:'prob', diff:'hard'},
  {q:'Standard deviation is the square root of?', ans:'Variance', opts:['Mean','Variance','Range','Median'], cat:'prob', diff:'hard'},

  // Profit & Loss
  {q:'Two items each at ₹990: one at 10% profit, one at 10% loss. Net result?', ans:'₹20 loss', opts:['No change','₹10 loss','₹20 loss','₹20 profit'], cat:'pl', diff:'hard'},
  {q:'A man sells at 12% loss. If SP were ₹42 more, gain would be 12%. Find CP.', ans:'₹175', opts:['₹150','₹160','₹175','₹200'], cat:'pl', diff:'hard'},
  {q:'Successive discounts of 20% and 10%. Net discount = ?', ans:'28%', opts:['25%','28%','30%','27%'], cat:'pl', diff:'hard'},

  // Percentage
  {q:'If A\'s salary is 50% more than B\'s, by what % is B\'s less than A\'s?', ans:'33.33%', opts:['25%','30%','33.33%','50%'], cat:'pct', diff:'hard'},
  {q:'A mixture of milk and water in ratio 4:1. What % is milk?', ans:'80%', opts:['75%','78%','80%','82%'], cat:'pct', diff:'hard'},
  {q:'Population increases 10% annually. After 2 years it is 6050. Initial population?', ans:'5000', opts:['4500','4800','5000','5500'], cat:'pct', diff:'hard'},

  // Square & Cube Roots
  {q:'Simplify: √(75) + √(27)', ans:'8√3', opts:['5√3','6√3','7√3','8√3'], cat:'root', diff:'hard'},
  {q:'If ∛x = 4, find x.', ans:'64', opts:['12','48','64','128'], cat:'root', diff:'hard'},
  {q:'√(2 + √3) is approximately?', ans:'1.932', opts:['1.732','1.800','1.932','2.000'], cat:'root', diff:'hard'},
  {q:'How many perfect cubes are between 100 and 1000?', ans:'7', opts:['5','6','7','8'], cat:'root', diff:'hard'},

  // Trigonometry
  {q:'What is sec²θ − tan²θ?', ans:'1', opts:['0','1','−1','tan²θ'], cat:'trig', diff:'hard'},
  {q:'sin(A+B) = ?', ans:'sinA cosB + cosA sinB', opts:['sinA sinB + cosA cosB','sinA cosB + cosA sinB','sinA cosB − cosA sinB','cosA cosB − sinA sinB'], cat:'trig', diff:'hard'},
  {q:'General solution of sinθ = 0 is?', ans:'nπ', opts:['2nπ','nπ','(2n+1)π/2','nπ/2'], cat:'trig', diff:'hard'},
  {q:'Cos(A−B) − Cos(A+B) = ?', ans:'2sinA sinB', opts:['2cosA cosB','2sinA cosB','2cosA sinB','2sinA sinB'], cat:'trig', diff:'hard'},

  // Algebra
  {q:'Roots of x² − 5x + 6 = 0 are?', ans:'2 and 3', opts:['1 and 6','2 and 3','−2 and −3','3 and 4'], cat:'alg', diff:'hard'},
  {q:'If α, β are roots of x²−px+q=0, find α²+β².', ans:'p²−2q', opts:['p²+2q','p²−2q','(p−q)²','p²−q'], cat:'alg', diff:'hard'},
  {q:'The discriminant of ax²+bx+c=0 is?', ans:'b²−4ac', opts:['b+4ac','b²+4ac','b²−4ac','4ac−b²'], cat:'alg', diff:'hard'},
  {q:'Arithmetic progression sum formula (n terms)?', ans:'n/2[2a+(n−1)d]', opts:['na+nd','n(a+l)/2','n/2[2a+(n−1)d]','n²d'], cat:'alg', diff:'hard'},

  // Formulas
  {q:'Volume of a sphere = ?', ans:'(4/3)πr³', opts:['πr³','(4/3)πr²','(4/3)πr³','2πr³'], cat:'form', diff:'hard'},
  {q:'Heron\'s formula for area of triangle with sides a,b,c: s=(a+b+c)/2, Area = ?', ans:'√[s(s−a)(s−b)(s−c)]', opts:['s(s−a)','√[s(s−a)(s−b)(s−c)]','s²−abc','(abc)/2s'], cat:'form', diff:'hard'},
  {q:'The nth term of a GP with first term a and ratio r is?', ans:'a·rⁿ⁻¹', opts:['a+nr','a·rⁿ','a·rⁿ⁻¹','ar/n'], cat:'form', diff:'hard'},

  // Scientists
  {q:'Who proposed the concept of "imaginary numbers"?', ans:'Cardano', opts:['Euler','Gauss','Cardano','Leibniz'], cat:'sci', diff:'hard'},
  {q:'Ramanujan\'s famous infinite series for 1/π was published in?', ans:'1914', opts:['1910','1912','1914','1916'], cat:'sci', diff:'hard'},
  {q:'Who first proved the irrationality of √2?', ans:'Hippasus', opts:['Euclid','Pythagoras','Hippasus','Archimedes'], cat:'sci', diff:'hard'},
  {q:'Fermat\'s Last Theorem was finally proved by?', ans:'Andrew Wiles', opts:['John Nash','Andrew Wiles','Pierre Deligne','Paul Erdős'], cat:'sci', diff:'hard'},

  // Mental Math
  {q:'37 × 37 = ?', ans:'1369', opts:['1349','1359','1369','1379'], cat:'mental', diff:'hard'},
  {q:'999 × 999 = ?', ans:'998001', opts:['997001','998001','999001','997999'], cat:'mental', diff:'hard'},
  {q:'(11)⁵ = ?', ans:'161051', opts:['151051','161051','171051','162051'], cat:'mental', diff:'hard'},
  {q:'1+2+3+...+50 = ?', ans:'1275', opts:['1250','1275','1300','1325'], cat:'mental', diff:'hard'},
];
