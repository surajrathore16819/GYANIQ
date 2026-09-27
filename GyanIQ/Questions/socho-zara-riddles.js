/* ═══════════════════════════════════════════════════════
   RIDDLE DATABASE — 300+ Paheliyan (Hinglish + Hindi)
   Har riddle ko ek unique sequential id di gayi hai taaki
   no-repeat rotation (localStorage-based) sahi se track kar sake.
═══════════════════════════════════════════════════════ */
const RIDDLES = {
  hinglish: [
    {id:1, cat:'easy', icon:'🌙', q:'Raat ko aata hai, din mein chala jaata hai. Kya hai?', opts:['Neend', 'Andheraa', 'Taara', 'Chaand'], ans:'Neend', hint:'Aankhein band ho jaati hain...'},
    {id:2, cat:'easy', icon:'🔑', q:'Ek ghar hai jisme koi darwaza nahi, koi khidki nahi, andar rehta hai ek raja. Kya hai?', opts:['Anda', 'Nariyal', 'Akhrot', 'Anar'], ans:'Anda', hint:'Subah naashte mein aata hai...'},
    {id:3, cat:'easy', icon:'💧', q:'Paani mein paida hota hai, paani se darta hai. Kya hai?', opts:['Namak', 'Cheeni', 'Sabun', 'Aata'], ans:'Namak', hint:'Khana usske bina phika lagta hai...'},
    {id:4, cat:'easy', icon:'🪞', q:'Tumhe dekhta hai par boltha nahi, tumhara chehra dikhata hai. Kya hai?', opts:['Paani', 'Sheeshe', 'Camera', 'Aankhein'], ans:'Sheeshe', hint:'Bathroom mein hota hai...'},
    {id:5, cat:'easy', icon:'🕯️', q:'Jitna khaata hai, utna chota hota jaata hai. Kya hai?', opts:['Mombatti', 'Sabun', 'Barf', 'Chalk'], ans:'Mombatti', hint:'Roshni deta hai...'},
    {id:6, cat:'easy', icon:'🌳', q:'Haath nahi par kaam karta hai, paanv nahi par seedha khada rehta hai. Kya hai?', opts:['Ped', 'Pahaad', 'Bijli ka khamba', 'Deewar'], ans:'Ped', hint:'Oxygen deta hai...'},
    {id:7, cat:'easy', icon:'☁️', q:'Upar se aata hai, neechhe se nahi jaata, bhigo deta hai sab ko. Kya hai?', opts:['Baadal', 'Baarish', 'Oas', 'Barf'], ans:'Baarish', hint:'Chhaata kaam aata hai...'},
    {id:8, cat:'easy', icon:'👣', q:'Peeche rehta hai, saamne nahi aata, dhoop mein dikhta hai. Kya hai?', opts:['Parchhaayi', 'Tasweer', 'Daag', 'Neend'], ans:'Parchhaayi', hint:'Dhoop zaruri hai iske liye...'},
    {id:9, cat:'easy', icon:'🦷', q:'Ek baar girti hai, dobara ugti hai. Umar hone par sirf ek baar girti hai. Kya hai?', opts:['Daant', 'Baal', 'Nakhun', 'Aankh'], ans:'Daant', hint:'Khana chabaane mein kaam aata hai...'},
    {id:10, cat:'easy', icon:'🌊', q:'Na khaata hai, na peeta hai, par khelkhel kar sabko bheega kar jaata hai. Kya hai?', opts:['Samandar', 'Dariya', 'Baadal', 'Nadi'], ans:'Baadal', hint:'Aasman mein rehta hai...'},
    {id:11, cat:'funny', icon:'😂', q:'Doctor ke paas gaya, doctor ne kaha — "Tum theek ho." Mujhe kya hua tha?', opts:['Neend aa rahi thi', 'Bhookh lagi thi', 'Kuch nahi hua tha', 'Dar lag raha tha'], ans:'Kuch nahi hua tha', hint:'Sochna...'},
    {id:12, cat:'funny', icon:'🐸', q:'Mendak haath jodte hue bola: "Mujhe ghar bhejna!" Woh kahan tha?', opts:['Taalaab mein', 'Raaste mein', 'Mandir mein', 'School mein'], ans:'Taalaab mein', hint:'Mendak ka ghar kahan hota hai?'},
    {id:13, cat:'funny', icon:'🥚', q:'Chaar bacche the — teen daud gaye. Kitne bacche bache?', opts:['Ek', 'Teen', 'Char', 'Koi nahi'], ans:'Ek', hint:'Simple math...'},
    {id:14, cat:'funny', icon:'🐘', q:'Hathi bike pe baithega toh seat kitni ho? Ek ya do?', opts:['Ek', 'Do', 'Teen', 'Hathi bike pe nahi baith sakta'], ans:'Hathi bike pe nahi baith sakta', hint:'Practical socho...'},
    {id:15, cat:'funny', icon:'🍕', q:'Pizza khate waqt bola — "Yeh theek hai." Kya matlab?', opts:['Swadisht hai', 'Ganda hai', 'Acha nahi laga', 'Teen mein se ek'], ans:'Swadisht hai', hint:'Khane ki baat hai...'},
    {id:16, cat:'funny', icon:'🐔', q:'Murgi pehle aayi ya anda? Answer: Dono ek sath aaye kyon? Kyon?', opts:['Kyonki dono zaruri hain', 'Kyonki science ne prove kiya', 'Kyonki mujhe bhookh lagi hai', 'Kyonki murgi ki dukan band thi'], ans:'Kyonki mujhe bhookh lagi hai', hint:'Funny answer dhundho...'},
    {id:17, cat:'funny', icon:'😴', q:'Koi sote waqt bolta hai — "Main jaag raha hoon!" Woh kya kar raha hai?', opts:['Sapna dekh raha hai', 'Jhooth bol raha hai', 'Neend mein bol raha hai', 'Exercise kar raha hai'], ans:'Sapna dekh raha hai', hint:'Neend ki baat hai...'},
    {id:18, cat:'funny', icon:'🚿', q:'Nahaane ke baad bhi ganda rehta hai — kya hai?', opts:['Paani', 'Saabun', 'Bathtub', 'Nali'], ans:'Paani', hint:'Mehnat karta hai...'},
    {id:19, cat:'funny', icon:'🐟', q:'Machhi ne kaha — "Mujhe pyaas lagi hai!" Kya mazaak tha?', opts:['Machhi paani mein rehti hai', 'Machhi baat nahi kar sakti', 'Machhi ko bhookh lagi thi', 'Machhi sookh gayi thi'], ans:'Machhi paani mein rehti hai', hint:'Machhi ka ghar kahan hai?'},
    {id:20, cat:'funny', icon:'🎈', q:'Bachche ne kaha — "Mujhe ek cheez chahiye jo udti hai!" Kya diya usse?', opts:['Toffee', 'Khilona', 'Gubara', 'Titli'], ans:'Gubara', hint:'Hawa se bhari hoti hai...'},
    {id:21, cat:'desi', icon:'🌾', q:'Khet mein ugti hai, mooh mein jaati hai, dant chabate hain. Kya hai?', opts:['Ganna', 'Gehu', 'Makka', 'Chawal'], ans:'Ganna', hint:'Juice nikalte hain isse...'},
    {id:22, cat:'desi', icon:'🐄', q:'Gaon ki maa doodh deti hai, par woh insaan nahi. Kya hai?', opts:['Bhaisi', 'Gaay', 'Bakri', 'Unt'], ans:'Gaay', hint:'Pooja bhi hoti hai iska...'},
    {id:23, cat:'desi', icon:'🏺', q:'Mitti se bana, paani rakhta hai, thandaa karta hai. Kya hai?', opts:['Ghada', 'Bartan', 'Baaltee', 'Tub'], ans:'Ghada', hint:'Gaon mein common hai...'},
    {id:24, cat:'desi', icon:'🌽', q:'Peela-peela, dantsedar, ek mein sau dane. Kya hai?', opts:['Makka', 'Anannas', 'Ganna', 'Keela'], ans:'Makka', hint:'Bhutta bhi kehte hain...'},
    {id:25, cat:'desi', icon:'🐓', q:'Subah uthata hai, sabko jagata hai, par sone nahi deta. Kya hai?', opts:['Murgaa', 'Billi', 'Kutta', 'Ghadi'], ans:'Murgaa', hint:'Gaon ka alarm clock...'},
    {id:26, cat:'desi', icon:'🪣', q:'Girti hai toh bhi nahi tooti, uchhalti hai toh bhi nahi tooti, paani se bhari rehti hai. Kya hai?', opts:['Nadi', 'Taalaab', 'Kuan', 'Sarovar'], ans:'Nadi', hint:'Beh chali jaati hai...'},
    {id:27, cat:'desi', icon:'🌳', q:'Gaon mein chhaya deta hai, aam deta hai, ghar mein laata hai. Kya hai?', opts:['Aam ka ped', 'Neem', 'Peepal', 'Tulsi'], ans:'Aam ka ped', hint:'Phalo ka raja...'},
    {id:28, cat:'desi', icon:'🧺', q:'Aurat siyon pe rakhti hai, mard kandhe pe rakhta hai, dono kaam karte hain. Kya hai?', opts:['Tokri', 'Thela', 'Bori', 'Pitaara'], ans:'Tokri', hint:'Baane se bani hoti hai...'},
    {id:29, cat:'desi', icon:'🔥', q:'Choolhe mein jalti hai, khana pakati hai, haat se nahi chhua jaata. Kya hai?', opts:['Aag', 'Lakar', 'Koyla', 'Kerosene'], ans:'Aag', hint:'Energy ka roop hai...'},
    {id:30, cat:'desi', icon:'🐘', q:'Sabse bada, sabse samajhdar, naak se paani peeta hai. Kya hai?', opts:['Hathi', 'Genda', 'Daribbu', 'Nil ghoda'], ans:'Hathi', hint:'Jungle ka raja...'},
    {id:31, cat:'desi', icon:'🎋', q:'Bamboo jaisa seedha, andar se khokla, baansuri banti hai isse. Kya hai?', opts:['Baas', 'Nali', 'Reed', 'Lathi'], ans:'Baas', hint:'Bamboo hi hai...'},
    {id:32, cat:'logical', icon:'🧠', q:'Ek kamre mein 3 bijli ke bulbs hain. Bahar 3 switches hain. Ek baar andar jaoge. Pata karo kaun sa switch kaun sa bulb jalata hai?', opts:['Teen baar jaake check karo', 'Ek bulb on karo, ek warm karo, ek band rakho', 'Teeno switch ek saat on karo', 'Andaaza lagao'], ans:'Ek bulb on karo, ek warm karo, ek band rakho', hint:'Physics ka use karo...'},
    {id:33, cat:'logical', icon:'⚖️', q:'Maa 21 saal badi hai apni beti se. 6 saal mein maa teen guna hogi. Beti ki abhi ki umar?', opts:['1.5 saal', '2 saal', '3 saal', '4 saal'], ans:'1.5 saal', hint:'Algebra solve karo...'},
    {id:34, cat:'logical', icon:'🔢', q:'1, 2, 3, 5, 8, 13... agla number kya hoga?', opts:['18', '20', '21', '25'], ans:'21', hint:'Fibonacci sequence...'},
    {id:35, cat:'logical', icon:'🧩', q:'Ek insaan poocha — kya tum hamesha jhooth bolte ho? Agar haan bola toh sachchi bol raha hai, agar nahi bola toh jhooth bol raha hai. Kya yeh possible hai?', opts:['Haan possible hai', 'Nahi possible hai', 'Dono galat hain', 'Koi fark nahi'], ans:'Nahi possible hai', hint:'Paradox hai...'},
    {id:36, cat:'logical', icon:'🚢', q:'Ek naav mein 10 bhed hain. 2 neeche gire. Naav ke captain ki umar kitni hai?', opts:['10', '8', 'Pata nahi', '40'], ans:'Pata nahi', hint:'Dhyan se padho...'},
    {id:37, cat:'logical', icon:'👨‍👩‍👧', q:'Ek aadmi ki do betiyan hain, dono ki maa ek hi hai. Par woh judwa nahi hain. Kaise?', opts:['Ek sauteli hai', 'Teen bacche hain', 'Triplets mein se do hain', 'Galat baat hai'], ans:'Triplets mein se do hain', hint:'Judwa ke siwa...'},
    {id:38, cat:'logical', icon:'🎯', q:'100 se 1 tak ginoge, kitne baar "9" aayega?', opts:['10', '11', '20', '21'], ans:'20', hint:'9,19,29...90,91...99...'},
    {id:39, cat:'logical', icon:'🪙', q:'3 sikke hain, jo 60 paisa banaate hain, ek sikka 5 paisa nahi hai. Kaise?', opts:['25+25+10', '50+5+5', '55+3+2', '20+20+20'], ans:'25+25+10', hint:'Ek 5 paisa nahi, baki ho sakte hain...'},
    {id:40, cat:'logical', icon:'🐌', q:'Ek ghonghaa 10 meter gehre kuan mein hai. Roz 3 meter chadta hai, raat mein 2 meter phisalta hai. Kitne din mein bahar aayega?', opts:['8 din', '10 din', '9 din', '7 din'], ans:'8 din', hint:'Last din par nahi phisalega...'},
    {id:41, cat:'logical', icon:'🕐', q:'Ghadi mein 12 baje 3 baj gaye hain toh kaanta kahan hoga?', opts:['12 aur 3 ke beech', '9 aur 12', '3 aur 6', '6 aur 9'], ans:'3 aur 6', hint:'Minute hand 15 minute par...'},
    {id:42, cat:'hard', icon:'💀', q:'Main woh hoon jo tum sochte ho woh mera naam hai, par jo tum bolte ho woh mera naam nahi. Kya hoon main?', opts:['Khamoshi', 'Khaali jagah', 'Rahasia', 'Soch'], ans:'Khamoshi', hint:'Awaz nahi hai iske paas...'},
    {id:43, cat:'hard', icon:'🌀', q:'Jitna zyada sukhaate ho, utna bheega hota jaata hai. Kya hai?', opts:['Towel', 'Kaapra', 'Aansu', 'Baal'], ans:'Towel', hint:'Nahaane ke baad use hota hai...'},
    {id:44, cat:'hard', icon:'⬛', q:'Kaala tha, safed bana, laal ho gaya. Kya hai?', opts:['Angaar', 'Koyla', 'Loha', 'Paththar'], ans:'Angaar', hint:'Aag mein daalo...'},
    {id:45, cat:'hard', icon:'🌊', q:'Tumhare paas hai, tumhare paas hai, par kabhi dekh nahi sakte. Kya hai?', opts:['Aankhon ke peeche ka hissa', 'Dimag', 'Dil', 'Sapne'], ans:'Aankhon ke peeche ka hissa', hint:'Aankhon ki baat hai...'},
    {id:46, cat:'hard', icon:'🏠', q:'Ek ghar mein char deewarein hain, sab south direction mein hain. Agar bear bahar ghoom raha hai, toh bear ka rang kya hai?', opts:['Bhura', 'Kaala', 'Safed', 'Geela'], ans:'Safed', hint:'Yeh ghar North Pole par hai...'},
    {id:47, cat:'hard', icon:'🔡', q:'NOON ko ulta likho, wahi rahega. Aise aur words?', opts:['MOM', 'WOW', 'LEVEL', 'Sab teeno'], ans:'Sab teeno', hint:'Palindrome dhundho...'},
    {id:48, cat:'hard', icon:'🌍', q:'Dharti ke upar, paani ke andar, aankhon se nahi dikhta. Kya hai?', opts:['Tel', 'Khaan', 'Bhoochaal', 'Kuchh bhi nahi'], ans:'Khaan', hint:'Mining se nikalte hain...'},
    {id:49, cat:'hard', icon:'🔮', q:'Ek cheez jo khareedo toh mahanga, bikao toh sasta, par zarurat nahin. Kya hai?', opts:['Taboot', 'Dawa', 'Beejar', 'Mehndi'], ans:'Taboot', hint:'Zindagi ke baad zarurat...'},
    {id:50, cat:'hard', icon:'⏳', q:'Main tha, abhi bhi hoon, aur rahunga. Par main kuch nahi hoon. Kya hoon main?', opts:['Time', 'Khaali jagah', 'Andhera', 'Khamoshi'], ans:'Time', hint:'Philosophical jawab dhundho...'},
    {id:51, cat:'hard', icon:'🎭', q:'Ek cheez jo sirf ek baar dekhi ja sakti hai, uske baad woh wahi nahi rehti. Kya hai?', opts:['Pehli mulaqaat', 'Kisi cheez ki pehli baar', 'Sapna', 'Saans'], ans:'Pehli mulaqaat', hint:'Pehla hamesha khaas hota hai...'},
    {id:52, cat:'easy', icon:'🍎', q:'Laal hai, meetha hai, doctor ko door rakhta hai. Kya hai?', opts:['Seb', 'Angoor', 'Aam', 'Strawberry'], ans:'Seb', hint:'"An apple a day..."'},
    {id:53, cat:'easy', icon:'🐝', q:'Udti hai, kaati hai, meetha deti hai. Kya hai?', opts:['Teetli', 'Makhi', 'Madhumakkhi', 'Pankhi'], ans:'Madhumakkhi', hint:'Shahad banati hai...'},
    {id:54, cat:'easy', icon:'📚', q:'Bolti nahi, par bahut kuch sikhati hai. Kya hai?', opts:['Kitaab', 'Teacher', 'Maa', 'Dosto'], ans:'Kitaab', hint:'Padhna padta hai...'},
    {id:55, cat:'easy', icon:'🌸', q:'Subah khilti hai, shaam mein band ho jaati hai. Kya hai?', opts:['Phool', 'Aankhein', 'Dukaan', 'Tara'], ans:'Phool', hint:'Bagicha mein hoti hai...'},
    {id:56, cat:'easy', icon:'🚂', q:'Dhaian se chabata hai, raat ko band rehta hai, subah khulta hai. Kya hai?', opts:['Station', 'Darvaza', 'Aankhein', 'Darwaza'], ans:'Darwaza', hint:'Ghar ka...'},
    {id:57, cat:'funny', icon:'🤡', q:'Kya cheez har roz girti hai par kabhi nahi tootti?', opts:['Raat', 'Baarish', 'Andheraa', 'Neend'], ans:'Raat', hint:'Din ke baad aata hai...'},
    {id:58, cat:'funny', icon:'🎪', q:'Koi cheez jo seedhi hai par tedha kaam karti hai?', opts:['Bans', 'Chhadi', 'Neta ki baat', 'Seedhi sarak'], ans:'Neta ki baat', hint:'Funny jawab dhundho...'},
    {id:59, cat:'funny', icon:'🃏', q:'Aadmi ne kaha mujhe yaad nahi hai main kaun hoon. Doctor ne kaha lucky ho! Kyon?', opts:['Naya life milega', 'Purane dard bhool gaye', 'Doosra insaan ban gaye', 'Kuch nahi'], ans:'Purane dard bhool gaye', hint:'Amnesia...'},
    {id:60, cat:'funny', icon:'🎭', q:'Dono bhai — ek andar rehta hai, ek bahar. Kaun zyada khush hai?', opts:['Bahar wala', 'Andar wala', 'Dono khush', 'Pata nahi'], ans:'Bahar wala', hint:'Azadi ki baat hai...'},
    {id:61, cat:'funny', icon:'🤣', q:'Bakri ne 5 baar me-me kiya. Yeh kya tha?', opts:['Namaaz', 'Nashta maanga', 'Gana gaya', 'Gaaya'], ans:'Nashta maanga', hint:'Bhookh lagi thi...'},
    {id:62, cat:'desi', icon:'🌿', q:'Neem ka ped, tulsi ka patta, dono kaam karte hain. Kya kaam karte hain?', opts:['Dawa', 'Pooja', 'Dono', 'Khana'], ans:'Dono', hint:'Gaon ki pharmacy...'},
    {id:63, cat:'desi', icon:'🏡', q:'Gaon ki chhat, mitti ki deevarein, angan mein tulsi. Kya hai?', opts:['Haveli', 'Kachcha ghar', 'Mandir', 'Dharamshala'], ans:'Kachcha ghar', hint:'Simple ghar...'},
    {id:64, cat:'desi', icon:'🎶', q:'Dholak bajti hai, gaane hote hain, mehmaan aate hain. Kya hai?', opts:['Shaadi', 'Mela', 'Teej', 'Diwali'], ans:'Shaadi', hint:'Baar baar nahi hoti...'},
    {id:65, cat:'desi', icon:'🐂', q:'Kisaan ka dost, khet joutta hai, seedha chalata hai. Kya hai?', opts:['Bail', 'Ghoda', 'Khar', 'Hathi'], ans:'Bail', hint:'Halwaha ke saath...'},
    {id:66, cat:'desi', icon:'🌙', q:'Chand ki roshni mein baitho, chaarpai pe aaram karo. Yeh kahan possible hai?', opts:['Gaon mein', 'Sheher mein', 'Dono jagah', 'Bazaar mein'], ans:'Gaon mein', hint:'Outdoor zindagi...'},
    {id:67, cat:'logical', icon:'🔢', q:'2 + 2 = 5 kab hoga?', opts:['Kabhi nahi', 'Galat sum mein', 'Maths mein joke hai', 'Ek bhi nahi'], ans:'Kabhi nahi', hint:'2+2 hamesha 4 hai...'},
    {id:68, cat:'logical', icon:'🎲', q:'Toss karo — heads ya tails. 5 baar lage heads. Abhi probability kya hai tails ki?', opts:['50%', '100%', '25%', '75%'], ans:'50%', hint:'Har toss independent hai...'},
    {id:69, cat:'logical', icon:'🚗', q:'Gaadi 80 km/h se chal rahi hai. 40 km ka safar karne mein kitna time lagega?', opts:['30 min', '1 ghanta', '45 min', '20 min'], ans:'30 min', hint:'Speed × Time = Distance'},
    {id:70, cat:'logical', icon:'🧮', q:'1 se 10 tak ke numbers ka sum kya hoga?', opts:['50', '55', '45', '60'], ans:'55', hint:'Gauss formula...'},
    {id:71, cat:'logical', icon:'🎯', q:'Ek target pe 3 teer maare. Score 100 aaya. Kaise? (25, 25, 50 nahi chahiye)', opts:['30+30+40', '20+40+40', '50+25+25 nahi', 'Impossible'], ans:'Impossible', hint:'Odd + even + odd = even ya odd?'},
    {id:72, cat:'hard', icon:'🌑', q:'Main hoon par hoon nahi, dikha par dikh nahi, aaya par gaya nahi. Kya hoon?', opts:['Parchhaayi', 'Soch', 'Aks', 'Sapna'], ans:'Aks', hint:'Mirror mein dikhta hai...'},
    {id:73, cat:'hard', icon:'⚡', q:'Bijli chamki, aawaz aayi. Lekin bijli pehle kyun dikhi?', opts:['Aankh kaan se tez hai', 'Roshni aawaz se tez hai', 'Bijli paas thi', 'Koi reason nahi'], ans:'Roshni aawaz se tez hai', hint:'Physics — speed of light...'},
    {id:74, cat:'hard', icon:'🗿', q:'Jab main young tha tall tha, jab main boodha hua chhota hua. Kya hoon main?', opts:['Mombatti', 'Ped', 'Insan', 'Pahad'], ans:'Mombatti', hint:'Roshni deta hai...'},
    {id:75, cat:'hard', icon:'🌌', q:'Aasman mein karod tare hain, par ek bhi chhoo nahi sakte. Closest tara kaun?', opts:['Dhruva tara', 'Sirius', 'Surya', 'Alpha Centauri'], ans:'Surya', hint:'Din mein dikhta hai...'},
    {id:76, cat:'hard', icon:'🔐', q:'Har koi use karta hai, par kabhi share nahi karta, hamesha personal rehta hai. Kya hai?', opts:['Toothbrush', 'Password', 'Sapne', 'Naam'], ans:'Toothbrush', hint:'Hygiene ki baat hai...'},

    // ── 74 NEW RIDDLES (balanced across categories) ──
    {id:77, cat:'easy', icon:'🥛', q:'Safed hai, gaay deti hai, bacche peete hain. Kya hai?', opts:['Paani', 'Doodh', 'Dahi', 'Makkhan'], ans:'Doodh', hint:'Chai mein bhi daalte hain...'},
    {id:78, cat:'easy', icon:'🐝', q:'Udti hai, kaatti hai, meetha deti hai. Kya hai?', opts:['Titli', 'Makkhi', 'Madhumakkhi', 'Pankhi'], ans:'Madhumakkhi', hint:'Shahad banati hai...'},
    {id:79, cat:'easy', icon:'📚', q:'Bolti nahi, par bahut kuch sikhaati hai. Kya hai?', opts:['Kitaab', 'Teacher', 'Maa', 'Dosto'], ans:'Kitaab', hint:'Padhna padta hai...'},
    {id:80, cat:'easy', icon:'🚪', q:'Raat ko band rehta hai, subah khulta hai. Kya hai?', opts:['Station', 'Darwaza', 'Aankhein', 'Dukaan'], ans:'Darwaza', hint:'Ghar ka...'},
    {id:81, cat:'easy', icon:'🐛', q:'Dheere chalta hai, apna ghar peeth par le jaata hai. Kya hai?', opts:['Kekda', 'Ghongha', 'Kachhua', 'Cheenti'], ans:'Ghongha', hint:'Baarish mein bahar nikalta hai...'},
    {id:82, cat:'easy', icon:'🦋', q:'Pehle keeda tha, phir sota hai, phir udta hai rangon ke saath. Kya hai?', opts:['Titli', 'Machhar', 'Makhi', 'Bhawra'], ans:'Titli', hint:'Cocoon se nikalti hai...'},
    {id:83, cat:'easy', icon:'☀️', q:'Har roz aata hai, garmi deta hai, raat ko dikhta nahi. Kya hai?', opts:['Chaand', 'Sooraj', 'Tara', 'Baadal'], ans:'Sooraj', hint:'Purva se nikalta hai...'},
    {id:84, cat:'easy', icon:'🐦', q:'Aasmaan mein udta hai, ghosla banaata hai, ande deta hai. Kya hai?', opts:['Chamgadad', 'Chidiya', 'Titli', 'Patang'], ans:'Chidiya', hint:'Pankh hote hain...'},
    {id:85, cat:'easy', icon:'🧊', q:'Thanda hai, paani se banta hai, dhoop mein pighal jaata hai. Kya hai?', opts:['Barf', 'Kaanch', 'Namak', 'Mom'], ans:'Barf', hint:'Fridge mein jamta hai...'},
    {id:86, cat:'easy', icon:'👂', q:'Do hain, sunne ke kaam aate hain, chashma bhi inhi par tikta hai. Kya hain?', opts:['Aankhein', 'Kaan', 'Haath', 'Naak'], ans:'Kaan', hint:'Headphone bhi yahin lagta hai...'},
    {id:87, cat:'easy', icon:'🐐', q:'Doodh deti hai, mimiyaati hai, daadhi hoti hai. Kya hai?', opts:['Bhed', 'Bakri', 'Gaay', 'Bhaisi'], ans:'Bakri', hint:'Pahadon par bhi chadh jaati hai...'},
    {id:88, cat:'easy', icon:'🌧️', q:'Aasmaan se girta hai, khet hare karta hai, chhaata chahiye isse bachne ko. Kya hai?', opts:['Os', 'Barf', 'Baarish', 'Dhoop'], ans:'Baarish', hint:'Monsoon mein aata hai...'},
    {id:89, cat:'easy', icon:'🧀', q:'Doodh se banta hai, peela hota hai, chuhe ko pasand hai. Kya hai?', opts:['Makkhan', 'Paneer', 'Cheese', 'Dahi'], ans:'Cheese', hint:'Sandwich mein bhi lagaate hain...'},
    {id:90, cat:'easy', icon:'🕰️', q:'Do haath ghumaata hai, waqt batata hai, tick tick karta hai. Kya hai?', opts:['Calendar', 'Ghadi', 'Compass', 'Thermometer'], ans:'Ghadi', hint:'Deewar par lagti hai...'},
    {id:91, cat:'easy', icon:'🐢', q:'Ghar peeth par liye ghoomta hai, bahut dheere chalta hai. Kya hai?', opts:['Ghongha', 'Kachhua', 'Kekda', 'Mendak'], ans:'Kachhua', hint:'Khargosh se race haara nahi tha...'},
    {id:92, cat:'funny', icon:'🐒', q:'Bandar ne aaina dekha, bola "yeh kaun badsoorat hai?" Asal mein kise dekh raha tha?', opts:['Dost ko', 'Khud ko', 'Malik ko', 'Doctor ko'], ans:'Khud ko', hint:'Aaine mein kya dikhta hai socho...'},
    {id:93, cat:'funny', icon:'🍌', q:'Bandar ne kela maanga, dukandaar ne kaha "paise kahan hain?" Bandar ne kya diya?', opts:['Pata nahi, bandar ke paas paise nahi hote', 'Sona', 'Note', 'Sikka'], ans:'Pata nahi, bandar ke paas paise nahi hote', hint:'Practical socho...'},
    {id:94, cat:'funny', icon:'🐕', q:'Kutte ne poocha "main bhonkta kyun hoon?" Jawab kya tha?', opts:['Kyonki baat nahi kar sakta', 'Gussa hai', 'Bhookh lagi hai', 'Dar lagta hai'], ans:'Kyonki baat nahi kar sakta', hint:'Insaan ki tarah nahi bol sakta...'},
    {id:95, cat:'funny', icon:'☎️', q:'Phone baja, kisi ne nahi uthaya, phir bhi jawab aa gaya — voicemail se. Kya hua?', opts:['Jaadu', 'Automatic recording', 'Bhoot', 'Kuch nahi'], ans:'Automatic recording', hint:'Technology ki baat hai...'},
    {id:96, cat:'funny', icon:'🥶', q:'Aadmi thand mein bina jacket nikla, phir bhi garam raha. Kaise?', opts:['Ghar ke andar hi raha', 'Jaadu tha', 'Fever tha', 'Do jackets pehni thi andar'], ans:'Ghar ke andar hi raha', hint:'Bahar nikla, matlab...'},
    {id:97, cat:'funny', icon:'🎂', q:'Birthday cake pe candles thi, sab bujha di gayi phoonk se — lekin ek nahi bujhi. Kyon?', opts:['Trick candle thi', 'Hawa kam thi', 'Candle geeli thi', 'Koi bhi nahi'], ans:'Trick candle thi', hint:'Prank shop se li hogi...'},
    {id:98, cat:'funny', icon:'🚌', q:'Bus ruki nahi, phir bhi sab utar gaye. Kaise?', opts:['Bus khaali khadi thi', 'Bus already ruki thi station par', 'Jaadu', 'Log gire'], ans:'Bus already ruki thi station par', hint:'Socho kab bus rukti hai...'},
    {id:99, cat:'funny', icon:'🍳', q:'Anda ubla, phir bhi andar se kaccha nikla. Kaise?', opts:['Galat boil kiya', 'Yeh sawaal hi galat hai, ubla anda kabhi kaccha nahi hota', 'Anda naya tha', 'Fridge se aaya'], ans:'Yeh sawaal hi galat hai, ubla anda kabhi kaccha nahi hota', hint:'Trick question hai...'},
    {id:100, cat:'funny', icon:'🐱', q:'Billi ne chuhe ko chhod diya, phir bhi chuha dara raha. Kyon?', opts:['Billi ne dekh liya tha use', 'Chuha bewakoof tha', 'Billi wapas aa sakti thi', 'Koi reason nahi'], ans:'Billi wapas aa sakti thi', hint:'Trust issues hain shayad...'},
    {id:101, cat:'funny', icon:'🧑‍🍳', q:'Chef ne namak ki jagah cheeni daal di, phir bhi sab khush the. Kyon?', opts:['Dish sweet dish thi', 'Sabko pata nahi chala', 'Cheeni bhi namkeen thi', 'Koi nahi khush tha'], ans:'Dish sweet dish thi', hint:'Kya bana raha tha socho...'},
    {id:102, cat:'funny', icon:'🚦', q:'Laal batti thi, phir bhi saari gaadiyan ruki nahi aur chal gayin. Kaise?', opts:['Battiyan kharab thi', 'Yeh pedestrian ki laal batti thi, gaadiyon ki nahi', 'Sabne rule tod diya', 'Emergency thi'], ans:'Yeh pedestrian ki laal batti thi, gaadiyon ki nahi', hint:'Kis ke liye laal thi socho...'},
    {id:103, cat:'funny', icon:'🐔', q:'Murge ne alarm nahi lagaya, phir bhi subah baang di. Kyon?', opts:['Uska internal clock hota hai', 'Alarm tha usko pata nahi', 'Neighbour ne bataya', 'Koi reason nahi'], ans:'Uska internal clock hota hai', hint:'Natural instinct hai...'},
    {id:104, cat:'funny', icon:'🧦', q:'Do moze dhoye, teen nikle wapas. Kaise?', opts:['Ek already bacha tha basket mein', 'Jaadu', 'Nayi jodi kharidi', 'Koi nahi hua'], ans:'Ek already bacha tha basket mein', hint:'Laundry ka mystery hai...'},
    {id:105, cat:'funny', icon:'🍭', q:'Bacche ne candy nahi khayi, phir bhi daant mein dard hua. Kyon?', opts:['Kisi aur wajah se dard hua, candy se link nahi', 'Chhup ke khayi thi', 'Doctor jhoot bola', 'Koi reason nahi'], ans:'Kisi aur wajah se dard hua, candy se link nahi', hint:'Har dard candy se nahi hota...'},
    {id:106, cat:'funny', icon:'🐦', q:'Tota poora din bola, phir bhi kisi ne jawab nahi diya. Kyon?', opts:['Ghar mein koi tha hi nahi', 'Tota nakli bol raha tha', 'Sab so rahe the', 'Koi reason nahi'], ans:'Ghar mein koi tha hi nahi', hint:'Akela ghar socho...'},
    {id:107, cat:'desi', icon:'🌶️', q:'Laal bhi hoti hai, hari bhi hoti hai, khane mein teekhapan laati hai. Kya hai?', opts:['Tamatar', 'Mirch', 'Pyaaz', 'Adrak'], ans:'Mirch', hint:'Aansu nikaal sakti hai...'},
    {id:108, cat:'desi', icon:'🥁', q:'Shaadi mein bajta hai, baarat ke saath chalta hai, dhoom machaata hai. Kya hai?', opts:['Dhol', 'Tabla', 'Harmonium', 'Sitar'], ans:'Dhol', hint:'Kandhe pe latka kar bajate hain...'},
    {id:109, cat:'desi', icon:'🧵', q:'Charkhe se kaatte hain, kapda banta hai, Gandhiji se juda hai. Kya hai?', opts:['Soot', 'Rui', 'Oon', 'Resham'], ans:'Soot', hint:'Khadi isi se banti hai...'},
    {id:110, cat:'desi', icon:'🥭', q:'Garmi mein aata hai, raja kehlaata hai, achar bhi banta hai. Kya hai?', opts:['Kela', 'Aam', 'Anannas', 'Papita'], ans:'Aam', hint:'Kaccha bhi khate hain...'},
    {id:111, cat:'desi', icon:'🪔', q:'Diwali pe jalta hai, mitti ka bana hota hai, tel se bharta hai. Kya hai?', opts:['Mombatti', 'Diya', 'Lantern', 'Fanoos'], ans:'Diya', hint:'Ghar ki roshni karta hai...'},
    {id:112, cat:'desi', icon:'🐐', q:'Eid pe qurbaan hoti hai, mimiyaati hai, Bakrid se judi hai. Kya hai?', opts:['Gaay', 'Bakri', 'Bhed', 'Unt'], ans:'Bakri', hint:'Tyohaar ka naam bhi isse juda hai...'},
    {id:113, cat:'desi', icon:'🎋', q:'Holi pe khelte hain, rang udta hai, pichkari chalti hai. Kya tyohaar hai?', opts:['Diwali', 'Holi', 'Rakhi', 'Dussehra'], ans:'Holi', hint:'Rangon ka tyohaar...'},
    {id:114, cat:'desi', icon:'🧣', q:'Behan bhai ki kalai pe baandhti hai, raksha ka vaada hota hai. Kya hai?', opts:['Rakhi', 'Kangan', 'Mauli', 'Tika'], ans:'Rakhi', hint:'August mein manaate hain...'},
    {id:115, cat:'desi', icon:'🏹', q:'Ravan jalta hai, Dussehre pe hota hai, Ram ki jeet manaayi jaati hai. Kya tyohaar hai?', opts:['Holi', 'Dussehra', 'Diwali', 'Navratri'], ans:'Dussehra', hint:'Das sir wale ka putla...'},
    {id:116, cat:'desi', icon:'🥘', q:'Dal-chawal ke saath khaate hain, aate se banta hai, tawe pe senkte hain. Kya hai?', opts:['Poori', 'Roti', 'Paratha', 'Naan'], ans:'Roti', hint:'Har ghar mein roz banti hai...'},
    {id:117, cat:'desi', icon:'🐫', q:'Registan mein chalta hai, peeth pe koobad hota hai, bina paani din chal sakta hai. Kya hai?', opts:['Hathi', 'Unt', 'Gadha', 'Ghoda'], ans:'Unt', hint:'Jahaz-e-registan kehlaata hai...'},
    {id:118, cat:'desi', icon:'🧅', q:'Kaatte waqt aansu aate hain, sabzi mein daalte hain, andar layers hoti hain. Kya hai?', opts:['Aloo', 'Pyaaz', 'Lahsun', 'Adrak'], ans:'Pyaaz', hint:'Andar layers hoti hain...'},
    {id:119, cat:'desi', icon:'🥁', q:'Navratri mein khela jaata hai, do sticks se, circle mein naachte hain. Kya khel hai?', opts:['Kabaddi', 'Garba/Dandiya', 'Kho-kho', 'Gilli-danda'], ans:'Garba/Dandiya', hint:'Gujarat se aaya hai...'},
    {id:120, cat:'desi', icon:'🐄', q:'Holy jaanwar hai, doodh deti hai, gobar se upla banta hai. Kaun?', opts:['Bakri', 'Gaay', 'Bhaisi', 'Bhed'], ans:'Gaay', hint:'Mata bhi kehte hain isse...'},
    {id:121, cat:'logical', icon:'🔢', q:'2, 4, 8, 16, 32... agla number kya hoga?', opts:['48', '60', '64', '56'], ans:'64', hint:'Har number ko 2 se multiply karo...'},
    {id:122, cat:'logical', icon:'🚂', q:'Ek train 60 km/h se chal rahi hai. 150 km ka safar tay karne mein kitna time lagega?', opts:['2 ghante', '2.5 ghante', '3 ghante', '1.5 ghante'], ans:'2.5 ghante', hint:'Distance/Speed = Time'},
    {id:123, cat:'logical', icon:'👨‍👦', q:'Ek aadmi ki photo dekhkar kisi ne poocha "yeh kiski photo hai?" Aadmi bola "iska bhai mere pita ka iklauta beta hai." Photo kiski thi?', opts:['Uske pita ki', 'Uski apni', 'Uske bete ki', 'Uske dost ki'], ans:'Uski apni', hint:'Dhyan se padho, "iklauta beta" khud hai...'},
    {id:124, cat:'logical', icon:'🧮', q:'Agar 5 machines 5 minute mein 5 cheezein banaati hain, toh 100 machines 100 cheezein banane mein kitna samay lengi?', opts:['100 minute', '5 minute', '20 minute', '50 minute'], ans:'5 minute', hint:'Har machine independently kaam karti hai...'},
    {id:125, cat:'logical', icon:'🕵️', q:'Ek kamre mein 7 log hain. Har koi har kisi se ek baar haath milaata hai. Kul kitne handshake honge?', opts:['21', '14', '49', '42'], ans:'21', hint:'n(n-1)/2 formula use karo...'},
    {id:126, cat:'logical', icon:'⛲', q:'Do nal tanki bharte hain. Ek akele 4 ghante mein bharta hai, dusra 6 ghante mein. Dono saath mein kitne mein bharenge?', opts:['2.4 ghante', '5 ghante', '2 ghante', '3 ghante'], ans:'2.4 ghante', hint:'Rates add hoti hain...'},
    {id:127, cat:'logical', icon:'🎂', q:'Aaj meri umar mere bete ki umar se teen guna hai. 5 saal baad meri umar uski umar se dugni hogi. Meri abhi ki umar kya hai?', opts:['30', '45', '15', '25'], ans:'15', hint:'Algebra se solve karo (x aur 3x)...'},
    {id:128, cat:'logical', icon:'🚶', q:'Ek aadmi 5 km/h se chalta hai, 3 ghante chalne ke baad kitni doori tay karega?', opts:['10 km', '15 km', '12 km', '20 km'], ans:'15 km', hint:'Speed × Time = Distance'},
    {id:129, cat:'logical', icon:'🧩', q:'Ek kram hai: A, C, F, J, O... agla akshar kya hoga?', opts:['S', 'T', 'U', 'R'], ans:'U', hint:'Har baar gap badhta ja raha hai (2,3,4,5...)'},
    {id:130, cat:'logical', icon:'🎲', q:'Do paase fenke gaye, dono ka jod 7 aaya. Kitne tariko se 7 aa sakta hai?', opts:['6', '5', '4', '3'], ans:'6', hint:'1+6,2+5,3+4,4+3,5+2,6+1 giniye'},
    {id:131, cat:'logical', icon:'🔑', q:'Ek tijori ka code 3 anko ka hai. Sab ank alag hain, teenon ka jod 9 hai, pehla ank sabse bada hai. Ek possible code?', opts:['630', '810', '540', '720'], ans:'630', hint:'Options mein se sum 9 waala aur digits unique check karo'},
    {id:132, cat:'logical', icon:'📏', q:'Ek rassi ko aadha-aadha 4 baar kaata gaya. Kitne tukde bane?', opts:['8', '16', '5', '4'], ans:'16', hint:'Har cut pichhle tukdon ko double karta hai'},
    {id:133, cat:'logical', icon:'🧑‍⚖️', q:'Teen dosto mein sabse lamba woh hai jo sabse chhote se lamba hai, par beech wale se chhota hai. Sahi kram kya hai?', opts:['A>B>C', 'B>A>C', 'C>B>A', 'A=B=C'], ans:'B>A>C', hint:'Options ko sequence mein match karo'},
    {id:134, cat:'logical', icon:'🧊', q:'Ek glass mein barf tairti hai. Barf pighalne par paani ka level kya hoga?', opts:['Badhega', 'Ghatega', 'Same rahega', 'Overflow hoga'], ans:'Same rahega', hint:'Archimedes principle...'},
    {id:135, cat:'logical', icon:'🐇', q:'Khargosh aur kachhue ki race mein, kachhua jeeta kyunki khargosh ne kya kiya?', opts:['Neend li', 'Galat raasta liya', 'Bahut dheere chala', 'Race chhod di'], ans:'Neend li', hint:'Famous kahani hai...'},
    {id:136, cat:'hard', icon:'🕳️', q:'Jitna isme se nikaalo, utna bada hota jaata hai. Kya hai?', opts:['Gaddha', 'Kuan', 'Surang', 'Aasmaan'], ans:'Gaddha', hint:'Khodne ki baat hai...'},
    {id:137, cat:'hard', icon:'🗝️', q:'Har darwaaze ko khol sakta hai, par khud koi darwaaza nahi. Kya hai?', opts:['Taala', 'Chaabi', 'Haath', 'Sawal'], ans:'Chaabi', hint:'Jeb mein rakhte hain...'},
    {id:138, cat:'hard', icon:'📖', q:'Jitna purana hota hai, utna keemti hota hai, par padha nahi ja sakta. Kya hai?', opts:['Kitaab', 'Sharab', 'Sikka', 'Dosti'], ans:'Dosti', hint:'Rishta jo time ke saath gehra hota hai...'},
    {id:139, cat:'hard', icon:'🌫️', q:'Subah hota hai, dopahar tak gayab ho jaata hai, zameen ko chhuta nahi. Kya hai?', opts:['Baadal', 'Kohra', 'Os', 'Dhuan'], ans:'Kohra', hint:'Visibility kam kar deta hai...'},
    {id:140, cat:'hard', icon:'🎭', q:'Mere paas chehra hai par dimaag nahi, haath hain par haath nahi pakad sakte. Kya hoon main?', opts:['Gudiya', 'Ghadi', 'Murti', 'Mukhauta'], ans:'Ghadi', hint:'Time batati hai...'},
    {id:141, cat:'hard', icon:'🌉', q:'Do kinaaron ko jodta hai, par khud chal nahi sakta. Kya hai?', opts:['Naav', 'Pul', 'Sadak', 'Rassi'], ans:'Pul', hint:'Nadi ke oopar banta hai...'},
    {id:142, cat:'hard', icon:'🕰️', q:'Aage badhta hai, peeche kabhi nahi jaata, phir bhi haath hilaata rehta hai. Kya hai?', opts:['Ghadi ki suee', 'Pankha', 'Train', 'Nadi'], ans:'Ghadi ki suee', hint:'Har second move karti hai...'},
    {id:143, cat:'hard', icon:'🪟', q:'Din mein roshni andar aane deta hai, raat ko andhera nahi rok paata. Kya hai?', opts:['Darwaza', 'Khidki', 'Parda', 'Chhat'], ans:'Khidki', hint:'Sheesha laga hota hai...'},
    {id:144, cat:'hard', icon:'🫧', q:'Banta hai, hawa mein udta hai, chhute hi phat jaata hai, rangeen dikhta hai. Kya hai?', opts:['Gubara', 'Bubble/budbuda', 'Baloon', 'Patang'], ans:'Bubble/budbuda', hint:'Bachhe sabun se banate hain...'},
    {id:145, cat:'hard', icon:'🔥', q:'Jeevan deta hai, jeevan le bhi sakta hai, thand mein dost hai, jungle mein dushman. Kya hai?', opts:['Paani', 'Aag', 'Bijli', 'Hawa'], ans:'Aag', hint:'Do face hoti hain iski...'},
    {id:146, cat:'hard', icon:'🌗', q:'Har raat roop badalta hai, kabhi poora dikhta hai, kabhi gayab ho jaata hai. Kya hai?', opts:['Sooraj', 'Chaand', 'Tara', 'Aasmaan'], ans:'Chaand', hint:'28 din ka chakra hai...'},
    {id:147, cat:'hard', icon:'🧬', q:'Tumhare andar hai, tumhari poori kahaani likhi hai, kabhi dekh nahi sakte bina machine ke. Kya hai?', opts:['Khoon', 'DNA', 'Dimag', 'Dil'], ans:'DNA', hint:'Genetics ki baat hai...'},
    {id:148, cat:'hard', icon:'⛓️', q:'Tootne ke liye banti hai, par usse todna hi uska maqsad poora karta hai. Kya hai?', opts:['Rassi', 'Record (kisi cheez ka)', 'Kaanch', 'Zanjeer'], ans:'Record (kisi cheez ka)', hint:'Sports mein sunte hain "___ tod diya"...'},
    {id:149, cat:'hard', icon:'🗣️', q:'Bina zubaan ke bolta hai, bina kaano ke sunta hai, bina sharir ke jeeta hai. Kya hai?', opts:['Bhoot', 'Echo/Pratidhwani', 'Sapna', 'Hawa'], ans:'Echo/Pratidhwani', hint:'Pahado mein sunte hain...'},
    {id:150, cat:'hard', icon:'🌱', q:'Mitti mein sota hai, paani se jaagta hai, hawa aur dhoop se bada hota hai. Kya hai?', opts:['Patthar', 'Beej', 'Keeda', 'Jad'], ans:'Beej', hint:'Ped ki shuruat yahin se hoti hai...'},
  ],

  hindi: [
    {id:151, cat:'easy', icon:'🌙', q:'रात को आता है, दिन में चला जाता है। क्या है?', opts:['नींद', 'अंधेरा', 'तारा', 'चाँद'], ans:'नींद', hint:'आँखें बंद हो जाती हैं...'},
    {id:152, cat:'easy', icon:'🔑', q:'एक घर है जिसमें कोई दरवाज़ा नहीं, कोई खिड़की नहीं, अंदर रहता है एक राजा। क्या है?', opts:['अंडा', 'नारियल', 'अखरोट', 'अनार'], ans:'अंडा', hint:'सुबह नाश्ते में आता है...'},
    {id:153, cat:'easy', icon:'💧', q:'पानी में पैदा होता है, पानी से डरता है। क्या है?', opts:['नमक', 'चीनी', 'साबुन', 'आटा'], ans:'नमक', hint:'खाना इसके बिना फीका लगता है...'},
    {id:154, cat:'easy', icon:'🪞', q:'तुम्हें देखता है पर बोलता नहीं, तुम्हारा चेहरा दिखाता है। क्या है?', opts:['पानी', 'शीशा', 'कैमरा', 'आँखें'], ans:'शीशा', hint:'बाथरूम में होता है...'},
    {id:155, cat:'easy', icon:'🕯️', q:'जितना खाता है, उतना छोटा होता जाता है। क्या है?', opts:['मोमबत्ती', 'साबुन', 'बर्फ', 'चाक'], ans:'मोमबत्ती', hint:'रोशनी देता है...'},
    {id:156, cat:'easy', icon:'🌳', q:'हाथ नहीं पर काम करता है, पाँव नहीं पर सीधा खड़ा रहता है। क्या है?', opts:['पेड़', 'पहाड़', 'बिजली का खम्भा', 'दीवार'], ans:'पेड़', hint:'ऑक्सीजन देता है...'},
    {id:157, cat:'easy', icon:'☁️', q:'ऊपर से आता है, नीचे से नहीं जाता, भिगो देता है सबको। क्या है?', opts:['बादल', 'बारिश', 'ओस', 'बर्फ'], ans:'बारिश', hint:'छाता काम आता है...'},
    {id:158, cat:'easy', icon:'👣', q:'पीछे रहता है, सामने नहीं आता, धूप में दिखता है। क्या है?', opts:['परछाईं', 'तस्वीर', 'दाग', 'नींद'], ans:'परछाईं', hint:'धूप ज़रूरी है इसके लिए...'},
    {id:159, cat:'easy', icon:'🦷', q:'एक बार गिरती है, दोबारा उगती है। उम्र होने पर सिर्फ एक बार गिरती है। क्या है?', opts:['दाँत', 'बाल', 'नाखून', 'आँख'], ans:'दाँत', hint:'खाना चबाने में काम आता है...'},
    {id:160, cat:'easy', icon:'🍎', q:'लाल है, मीठा है, डॉक्टर को दूर रखता है। क्या है?', opts:['सेब', 'अंगूर', 'आम', 'स्ट्रॉबेरी'], ans:'सेब', hint:'"An apple a day..."'},
    {id:161, cat:'funny', icon:'😂', q:'क्या चीज़ हर रोज़ गिरती है पर कभी नहीं टूटती?', opts:['रात', 'बारिश', 'अंधेरा', 'नींद'], ans:'रात', hint:'दिन के बाद आता है...'},
    {id:162, cat:'funny', icon:'🐸', q:'मेंढक हाथ जोड़कर बोला: "मुझे घर भेजो!" वह कहाँ था?', opts:['तालाब में', 'रास्ते में', 'मंदिर में', 'स्कूल में'], ans:'तालाब में', hint:'मेंढक का घर कहाँ होता है?'},
    {id:163, cat:'funny', icon:'🥚', q:'चार बच्चे थे — तीन दौड़ गए। कितने बच्चे बचे?', opts:['एक', 'तीन', 'चार', 'कोई नहीं'], ans:'एक', hint:'साधारण गणित...'},
    {id:164, cat:'funny', icon:'😴', q:'कोई सोते वक्त बोलता है — "मैं जाग रहा हूँ!" वह क्या कर रहा है?', opts:['सपना देख रहा है', 'झूठ बोल रहा है', 'नींद में बोल रहा है', 'व्यायाम कर रहा है'], ans:'सपना देख रहा है', hint:'नींद की बात है...'},
    {id:165, cat:'funny', icon:'🚿', q:'नहाने के बाद भी गंदा रहता है — क्या है?', opts:['पानी', 'साबुन', 'बाथटब', 'नाली'], ans:'पानी', hint:'मेहनत करता है...'},
    {id:166, cat:'funny', icon:'🐟', q:'मछली ने कहा — "मुझे प्यास लगी है!" क्या मज़ाक था?', opts:['मछली पानी में रहती है', 'मछली बात नहीं कर सकती', 'मछली को भूख लगी थी', 'मछली सूख गई थी'], ans:'मछली पानी में रहती है', hint:'मछली का घर कहाँ है?'},
    {id:167, cat:'funny', icon:'🎈', q:'बच्चे ने कहा — "मुझे एक चीज़ चाहिए जो उड़ती है!" क्या दिया उसे?', opts:['टॉफी', 'खिलौना', 'गुब्बारा', 'तितली'], ans:'गुब्बारा', hint:'हवा से भरी होती है...'},
    {id:168, cat:'funny', icon:'🤡', q:'क्या चीज़ सीधी है पर टेढ़ा काम करती है?', opts:['बाँस', 'छड़ी', 'नेता की बात', 'सीधी सड़क'], ans:'नेता की बात', hint:'मज़ेदार जवाब ढूँढो...'},
    {id:169, cat:'funny', icon:'🃏', q:'आदमी ने कहा मुझे याद नहीं है मैं कौन हूँ। डॉक्टर ने कहा लक्की हो! क्यों?', opts:['नया जीवन मिलेगा', 'पुराने दर्द भूल गए', 'दूसरा इंसान बन गए', 'कुछ नहीं'], ans:'पुराने दर्द भूल गए', hint:'भूलने की बीमारी...'},
    {id:170, cat:'funny', icon:'🤣', q:'बकरी ने 5 बार में-में किया। यह क्या था?', opts:['नमाज़', 'नाश्ता माँगा', 'गाना गाया', 'गया'], ans:'नाश्ता माँगा', hint:'भूख लगी थी...'},
    {id:171, cat:'desi', icon:'🌾', q:'खेत में उगती है, मुँह में जाती है, दाँत चबाते हैं। क्या है?', opts:['गन्ना', 'गेहूँ', 'मक्का', 'चावल'], ans:'गन्ना', hint:'जूस निकालते हैं इससे...'},
    {id:172, cat:'desi', icon:'🐄', q:'गाँव की माँ दूध देती है, पर वह इंसान नहीं। क्या है?', opts:['भैंस', 'गाय', 'बकरी', 'ऊँट'], ans:'गाय', hint:'पूजा भी होती है इसकी...'},
    {id:173, cat:'desi', icon:'🏺', q:'मिट्टी से बना, पानी रखता है, ठंडा करता है। क्या है?', opts:['घड़ा', 'बर्तन', 'बाल्टी', 'टब'], ans:'घड़ा', hint:'गाँव में आम है...'},
    {id:174, cat:'desi', icon:'🌽', q:'पीला-पीला, दंतेदार, एक में सौ दाने। क्या है?', opts:['मक्का', 'अनानास', 'गन्ना', 'केला'], ans:'मक्का', hint:'भुट्टा भी कहते हैं...'},
    {id:175, cat:'desi', icon:'🐓', q:'सुबह उठता है, सबको जगाता है, पर सोने नहीं देता। क्या है?', opts:['मुर्गा', 'बिल्ली', 'कुत्ता', 'घड़ी'], ans:'मुर्गा', hint:'गाँव का अलार्म क्लॉक...'},
    {id:176, cat:'desi', icon:'🪣', q:'गिरती है तो भी नहीं टूटती, उछलती है तो भी नहीं टूटती, पानी से भरी रहती है। क्या है?', opts:['नदी', 'तालाब', 'कुआँ', 'सरोवर'], ans:'नदी', hint:'बह चली जाती है...'},
    {id:177, cat:'desi', icon:'🌳', q:'गाँव में छाया देता है, आम देता है, घर में लाता है। क्या है?', opts:['आम का पेड़', 'नीम', 'पीपल', 'तुलसी'], ans:'आम का पेड़', hint:'फलों का राजा...'},
    {id:178, cat:'desi', icon:'🔥', q:'चूल्हे में जलती है, खाना पकाती है, हाथ से नहीं छुआ जाता। क्या है?', opts:['आग', 'लकड़', 'कोयला', 'केरोसीन'], ans:'आग', hint:'ऊर्जा का रूप है...'},
    {id:179, cat:'desi', icon:'🎶', q:'ढोलक बजती है, गाने होते हैं, मेहमान आते हैं। क्या है?', opts:['शादी', 'मेला', 'तीज', 'दीवाली'], ans:'शादी', hint:'बार-बार नहीं होती...'},
    {id:180, cat:'desi', icon:'🐂', q:'किसान का दोस्त, खेत जोतता है, सीधा चलाता है। क्या है?', opts:['बैल', 'घोड़ा', 'खर', 'हाथी'], ans:'बैल', hint:'हलवाहे के साथ...'},
    {id:181, cat:'logical', icon:'🧠', q:'एक कमरे में 3 बिजली के बल्ब हैं। बाहर 3 स्विच हैं। एक बार अंदर जाओगे। पता करो कौन सा स्विच कौन सा बल्ब जलाता है?', opts:['तीन बार जाकर चेक करो', 'एक बल्ब ऑन करो, एक गर्म करो, एक बंद रखो', 'तीनों स्विच एक साथ ऑन करो', 'अंदाज़ा लगाओ'], ans:'एक बल्ब ऑन करो, एक गर्म करो, एक बंद रखो', hint:'भौतिकी का उपयोग करो...'},
    {id:182, cat:'logical', icon:'🔢', q:'1, 2, 3, 5, 8, 13... अगला नंबर क्या होगा?', opts:['18', '20', '21', '25'], ans:'21', hint:'फिबोनाची अनुक्रम...'},
    {id:183, cat:'logical', icon:'🚢', q:'एक नाव में 10 भेड़ें हैं। 2 नीचे गिरीं। नाव के कप्तान की उम्र कितनी है?', opts:['10', '8', 'पता नहीं', '40'], ans:'पता नहीं', hint:'ध्यान से पढ़ो...'},
    {id:184, cat:'logical', icon:'🐌', q:'एक घोंघा 10 मीटर गहरे कुएँ में है। रोज़ 3 मीटर चढ़ता है, रात में 2 मीटर फिसलता है। कितने दिन में बाहर आएगा?', opts:['8 दिन', '10 दिन', '9 दिन', '7 दिन'], ans:'8 दिन', hint:'आखिरी दिन नहीं फिसलेगा...'},
    {id:185, cat:'logical', icon:'🎯', q:'100 से 1 तक गिनोगे, कितनी बार "9" आएगा?', opts:['10', '11', '20', '21'], ans:'20', hint:'9,19,29...90,91...99...'},
    {id:186, cat:'logical', icon:'⚖️', q:'माँ 21 साल बड़ी है अपनी बेटी से। 6 साल में माँ तीन गुना होगी। बेटी की अभी की उम्र?', opts:['1.5 साल', '2 साल', '3 साल', '4 साल'], ans:'1.5 साल', hint:'बीजगणित सुलझाओ...'},
    {id:187, cat:'logical', icon:'🎲', q:'सिक्का उछालो — 5 बार हेड्स लगे। अब टेल्स की प्रायिकता क्या है?', opts:['50%', '100%', '25%', '75%'], ans:'50%', hint:'हर उछाल स्वतंत्र है...'},
    {id:188, cat:'logical', icon:'🧮', q:'1 से 10 तक के नंबरों का योग क्या होगा?', opts:['50', '55', '45', '60'], ans:'55', hint:'गॉस फॉर्मूला...'},
    {id:189, cat:'logical', icon:'👨‍👩‍👧', q:'एक आदमी की दो बेटियाँ हैं, दोनों की माँ एक ही है। पर वे जुड़वाँ नहीं हैं। कैसे?', opts:['एक सौतेली है', 'तीन बच्चे हैं', 'तीन बच्चों में से दो हैं', 'गलत बात है'], ans:'तीन बच्चों में से दो हैं', hint:'जुड़वाँ के सिवा...'},
    {id:190, cat:'logical', icon:'🪙', q:'3 सिक्के हैं, जो 60 पैसे बनाते हैं, एक सिक्का 5 पैसे नहीं है। कैसे?', opts:['25+25+10', '50+5+5', '55+3+2', '20+20+20'], ans:'25+25+10', hint:'एक 5 पैसे नहीं, बाकी हो सकते हैं...'},
    {id:191, cat:'hard', icon:'💀', q:'मैं वह हूँ जो तुम सोचते हो वह मेरा नाम है, पर जो तुम बोलते हो वह मेरा नाम नहीं। क्या हूँ मैं?', opts:['खामोशी', 'खाली जगह', 'रहस्य', 'सोच'], ans:'खामोशी', hint:'आवाज़ नहीं है इसके पास...'},
    {id:192, cat:'hard', icon:'🌀', q:'जितना ज़्यादा सुखाते हो, उतना भीगा होता जाता है। क्या है?', opts:['तौलिया', 'कपड़ा', 'आँसू', 'बाल'], ans:'तौलिया', hint:'नहाने के बाद उपयोग होता है...'},
    {id:193, cat:'hard', icon:'⬛', q:'काला था, सफेद बना, लाल हो गया। क्या है?', opts:['अंगार', 'कोयला', 'लोहा', 'पत्थर'], ans:'अंगार', hint:'आग में डालो...'},
    {id:194, cat:'hard', icon:'🏠', q:'एक घर में चार दीवारें हैं, सब दक्षिण दिशा में हैं। अगर भालू बाहर घूम रहा है, तो भालू का रंग क्या है?', opts:['भूरा', 'काला', 'सफेद', 'पीला'], ans:'सफेद', hint:'यह घर उत्तरी ध्रुव पर है...'},
    {id:195, cat:'hard', icon:'🗿', q:'जब मैं जवान था ऊँचा था, जब मैं बूढ़ा हुआ छोटा हुआ। क्या हूँ मैं?', opts:['मोमबत्ती', 'पेड़', 'इंसान', 'पहाड़'], ans:'मोमबत्ती', hint:'रोशनी देता है...'},
    {id:196, cat:'hard', icon:'⚡', q:'बिजली चमकी, आवाज़ आई। लेकिन बिजली पहले क्यों दिखी?', opts:['आँख कान से तेज़ है', 'रोशनी आवाज़ से तेज़ है', 'बिजली पास थी', 'कोई कारण नहीं'], ans:'रोशनी आवाज़ से तेज़ है', hint:'भौतिकी — प्रकाश की गति...'},
    {id:197, cat:'hard', icon:'🌌', q:'आसमान में करोड़ तारे हैं, पर एक भी छू नहीं सकते। सबसे पास का तारा कौन?', opts:['ध्रुव तारा', 'सीरियस', 'सूर्य', 'अल्फा सेंटॉरी'], ans:'सूर्य', hint:'दिन में दिखता है...'},
    {id:198, cat:'hard', icon:'🔐', q:'हर कोई इसे इस्तेमाल करता है, पर कभी share नहीं करता, हमेशा personal रहता है। क्या है?', opts:['टूथब्रश', 'पासवर्ड', 'सपने', 'नाम'], ans:'टूथब्रश', hint:'स्वच्छता की बात है...'},
    {id:199, cat:'hard', icon:'🌑', q:'मैं हूँ पर हूँ नहीं, दिखा पर दिख नहीं, आया पर गया नहीं। क्या हूँ?', opts:['परछाईं', 'सोच', 'अक्स', 'सपना'], ans:'अक्स', hint:'दर्पण में दिखता है...'},
    {id:200, cat:'hard', icon:'⏳', q:'मैं था, अभी भी हूँ, और रहूँगा। पर मैं कुछ नहीं हूँ। क्या हूँ मैं?', opts:['समय', 'खाली जगह', 'अंधेरा', 'खामोशी'], ans:'समय', hint:'दार्शनिक जवाब ढूँढो...'},

    // ── 100 NEW RIDDLES (balanced across categories) ──
    {id:201, cat:'easy', icon:'🥛', q:'सफेद है, गाय देती है, बच्चे पीते हैं। क्या है?', opts:['पानी', 'दूध', 'दही', 'मक्खन'], ans:'दूध', hint:'चाय में भी डालते हैं...'},
    {id:202, cat:'easy', icon:'🐝', q:'उड़ती है, काटती है, मीठा देती है। क्या है?', opts:['तितली', 'मक्खी', 'मधुमक्खी', 'पंखी'], ans:'मधुमक्खी', hint:'शहद बनाती है...'},
    {id:203, cat:'easy', icon:'📚', q:'बोलती नहीं, पर बहुत कुछ सिखाती है। क्या है?', opts:['किताब', 'टीचर', 'माँ', 'दोस्त'], ans:'किताब', hint:'पढ़ना पड़ता है...'},
    {id:204, cat:'easy', icon:'🌸', q:'सुबह खिलती है, शाम को बंद हो जाती है। क्या है?', opts:['फूल', 'आँखें', 'दुकान', 'तारा'], ans:'फूल', hint:'बगीचे में होती है...'},
    {id:205, cat:'easy', icon:'🚪', q:'रात को बंद रहता है, सुबह खुलता है। क्या है?', opts:['स्टेशन', 'दरवाज़ा', 'आँखें', 'दुकान'], ans:'दरवाज़ा', hint:'घर का...'},
    {id:206, cat:'easy', icon:'🐛', q:'धीरे चलता है, अपना घर पीठ पर ले जाता है। क्या है?', opts:['केकड़ा', 'घोंघा', 'कछुआ', 'चींटी'], ans:'घोंघा', hint:'बारिश में बाहर निकलता है...'},
    {id:207, cat:'easy', icon:'🦋', q:'pehle keeda tha, phir sota hai, phir udta hai rangon ke saath. Kya hai?', opts:['Titli', 'Machhar', 'Makhi', 'Bhawra'], ans:'Titli', hint:'Cocoon se nikalti hai...'},
    {id:208, cat:'easy', icon:'☀️', q:'हर रोज़ आता है, गर्मी देता है, रात को दिखता नहीं। क्या है?', opts:['चाँद', 'सूरज', 'तारा', 'बादल'], ans:'सूरज', hint:'पूर्व से निकलता है...'},
    {id:209, cat:'easy', icon:'🐦', q:'आसमान में उड़ता है, घोंसला बनाता है, अंडे देता है। क्या है?', opts:['चमगादड़', 'चिड़िया', 'तितली', 'पतंग'], ans:'चिड़िया', hint:'पंख होते हैं...'},
    {id:210, cat:'easy', icon:'🧊', q:'ठंडा है, पानी से बनता है, धूप में पिघल जाता है। क्या है?', opts:['बर्फ', 'काँच', 'नमक', 'मोम'], ans:'बर्फ', hint:'फ्रिज में जमता है...'},
    {id:211, cat:'easy', icon:'👂', q:'दो हैं, सुनने के काम आते हैं, चश्मा भी इन्हीं पर टिकता है। क्या हैं?', opts:['आँखें', 'कान', 'हाथ', 'नाक'], ans:'कान', hint:'हेडफोन भी यहीं लगता है...'},
    {id:212, cat:'easy', icon:'🐐', q:'दूध देती है, मिमियाती है, दाढ़ी होती है। क्या है?', opts:['भेड़', 'बकरी', 'गाय', 'भैंस'], ans:'बकरी', hint:'पहाड़ों पर भी चढ़ जाती है...'},
    {id:213, cat:'easy', icon:'🌧️', q:'आसमान से गिरता है, खेत हरे करता है, छाता चाहिए इससे बचने को। क्या है?', opts:['ओस', 'बर्फ', 'बारिश', 'धूप'], ans:'बारिश', hint:'मानसून में आता है...'},
    {id:214, cat:'easy', icon:'🧀', q:'दूध से बनता है, पीला होता है, चूहे को पसंद है। क्या है?', opts:['मक्खन', 'पनीर', 'चीज़', 'दही'], ans:'चीज़', hint:'सैंडविच में भी लगाते हैं...'},
    {id:215, cat:'easy', icon:'🕰️', q:'दो haath ghumaata hai, waqt batata hai, tick tick karta hai. Kya hai?', opts:['Calendar', 'Ghadi', 'Compass', 'Thermometer'], ans:'Ghadi', hint:'Deewar par lagti hai...'},
    {id:216, cat:'easy', icon:'🐢', q:'घर पीठ पर लिए घूमता है, बहुत धीरे चलता है। क्या है?', opts:['घोंघा', 'कछुआ', 'केकड़ा', 'मेंढक'], ans:'कछुआ', hint:'खरगोश से रेस हारा नहीं था...'},
    {id:217, cat:'easy', icon:'🌈', q:'baarish ke baad dikhta hai, saat rang hote hain, choo nahi sakte. Kya hai?', opts:['Baadal', 'Indradhanush', 'Suraj', 'Chaand'], ans:'Indradhanush', hint:'Saat rang ginlo...'},
    {id:218, cat:'easy', icon:'🍯', q:'मधुमक्खी बनाती है, मीठा होता है, गले के लिए अच्छा है। क्या है?', opts:['चीनी', 'शहद', 'गुड़', 'शरबत'], ans:'शहद', hint:'छत्ते से निकालते हैं...'},
    {id:219, cat:'easy', icon:'🧦', q:'पैरों में पहनते हैं, जोड़े में आते हैं, अक्सर एक खो जाता है। क्या है?', opts:['जूते', 'मोज़े', 'चप्पल', 'दस्ताने'], ans:'मोज़े', hint:'वॉशिंग मशीन में अक्सर एक गायब हो जाता है...'},
    {id:220, cat:'easy', icon:'🐿️', q:'पूँछ बड़ी है, पेड़ पर चढ़ती है, मेवे इकट्ठा करती है। क्या है?', opts:['बिल्ली', 'गिलहरी', 'बंदर', 'चूहा'], ans:'गिलहरी', hint:'सर्दी के लिए स्टोर करती है...'},
    {id:221, cat:'funny', icon:'🐒', q:'बंदर ने आईना देखा, बोला "यह कौन बदसूरत है?" असल में किसे देख रहा था?', opts:['दोस्त को', 'खुद को', 'मालिक को', 'डॉक्टर को'], ans:'खुद को', hint:'आईने में क्या दिखता है सोचो...'},
    {id:222, cat:'funny', icon:'🍌', q:'बंदर ने केला माँगा, दुकानदार ने कहा "पैसे कहाँ हैं?" बंदर ने क्या दिया?', opts:['Pata nahi, बंदर के पास पैसे नहीं होते', 'Sona', 'Note', 'Sikka'], ans:'Pata nahi, बंदर के पास पैसे नहीं होते', hint:'Practical socho...'},
    {id:223, cat:'funny', icon:'🐕', q:'कुत्ते ने पूछा "मैं भौंकता क्यों हूँ?" जवाब क्या था?', opts:['क्योंकि बात नहीं कर सकता', 'गुस्सा है', 'भूख लगी है', 'डर लगता है'], ans:'क्योंकि बात नहीं कर सकता', hint:'Insaan ki tarah nahi bol sakta...'},
    {id:224, cat:'funny', icon:'☎️', q:'फोन बजा, किसी ने नहीं उठाया, फिर भी जवाब आ गया — voicemail se. Kya hua?', opts:['Jaadu', 'Automatic recording', 'Bhoot', 'Kuch nahi'], ans:'Automatic recording', hint:'Technology ki baat hai...'},
    {id:225, cat:'funny', icon:'🥶', q:'आदमी ठंड में बिना जैकेट निकला, फिर भी गर्म रहा। कैसे?', opts:['Ghar ke andar hi raha', 'Jaadu tha', 'Fever tha', 'Do jackets pehni thi andar'], ans:'Ghar ke andar hi raha', hint:'Bahar nikla, matlab...'},
    {id:226, cat:'funny', icon:'🎂', q:'birthday cake pe candles thi, sab bujha di gayi phook se — lekin ek nahi bujhi. Kyon?', opts:['Trick candle thi', 'Hawa kam thi', 'Candle geeli thi', 'Koi bhi nahi'], ans:'Trick candle thi', hint:'Prank shop se li hogi...'},
    {id:227, cat:'funny', icon:'🚌', q:'बस रुकी नहीं, फिर भी सब उतर गए। कैसे?', opts:['Bus khaali khadi thi', 'Bus already ruki thi station par', 'Jaadu', 'Log gire'], ans:'Bus already ruki thi station par', hint:'Socho kab bus rukti hai...'},
    {id:228, cat:'funny', icon:'🍳', q:'अंडा उबला, फिर भी अंदर से कच्चा निकला। Kaise?', opts:['Galat boil kiya', 'Yeh sawaal hi galat hai, ubla anda kabhi kaccha nahi hota', 'Anda naya tha', 'Fridge se aaya'], ans:'Yeh sawaal hi galat hai, ubla anda kabhi kaccha nahi hota', hint:'Trick question hai...'},
    {id:229, cat:'funny', icon:'🐱', q:'बिल्ली ने चूहे को छोड़ दिया, फिर भी चूहा डरा रहा। Kyon?', opts:['Billi ne dekh liya tha use', 'Chuha bewakoof tha', 'Billi wapas aa sakti thi', 'Koi reason nahi'], ans:'Billi wapas aa sakti thi', hint:'Trust issues hain shayad...'},
    {id:230, cat:'funny', icon:'🧑‍🍳', q:'शेफ ने नमक की जगह चीनी डाल दी, फिर भी सब खुश थे। क्यों?', opts:['Dish sweet dish thi', 'Sabko pata nahi chala', 'Cheeni bhi namkeen thi', 'Koi nahi khush tha'], ans:'Dish sweet dish thi', hint:'Kya bana raha tha socho...'},
    {id:231, cat:'funny', icon:'🚦', q:'लाल बत्ती थी, फिर भी सारी गाड़ियाँ रुकी नहीं और चल गईं। कैसे?', opts:['Battiyan kharab thi', 'Yeh pedestrian ki laal batti thi, gaadiyon ki nahi', 'Sabne rule tod diya', 'Emergency thi'], ans:'Yeh pedestrian ki laal batti thi, gaadiyon ki nahi', hint:'Kis ke liye laal thi socho...'},
    {id:232, cat:'funny', icon:'🎣', q:'मछुआरे ने पूरा दिन बैठा रहा, एक भी मछली नहीं पकड़ी, फिर भी खुश था। क्यों?', opts:['Wahi shauk tha', 'Machli pehle se fridge mein thi', 'Bore ho gaya', 'Ghar jaana tha'], ans:'Wahi shauk tha', hint:'Fishing kaisi activity hai socho...'},
    {id:233, cat:'funny', icon:'🦷', q:'डेंटिस्ट ने कहा "यह दर्द नहीं देगा", फिर भी दर्द हुआ। क्या?', opts:['Doctor jhooth bola', 'Dawa pehle nahi lagayi thi', 'Patient dar gaya tha', 'Sab normal hai'], ans:'Doctor jhooth bola', hint:'Classic dentist joke hai...'},
    {id:234, cat:'funny', icon:'👶', q:'बच्चे ने पूरी रात सोया, फिर भी माँ थकी हुई थी। Kyon?', opts:['Maa raat bhar jagi rahi bacche ki care mein', 'Bacche ne sapna dekha', 'Maa bimar thi', 'Koi reason nahi'], ans:'Maa raat bhar jagi rahi bacche ki care mein', hint:'Motherhood ki baat hai...'},
    {id:235, cat:'funny', icon:'🐷', q:'सुअर ने कहा "मुझे नहाना पसंद नहीं", फिर भी कीचड़ में लोटता रहा। Kyon?', opts:['Kichad mein lotna nahana nahi hota uske liye', 'Majboori thi', 'Garmi thi', 'Koi reason nahi'], ans:'Kichad mein lotna nahana nahi hota uske liye', hint:'Suar ka apna standard hai...'},
    {id:236, cat:'funny', icon:'🚕', q:'टैक्सी ड्राइवर ने कोई पैसा नहीं लिया, फिर भी खुश था। Kyon?', opts:['Uska khud ka ghar tha wahan', 'Passenger uska dost tha', 'Free ride day tha', 'Koi nahi'], ans:'Passenger uska dost tha', hint:'Rishta socho...'},
    {id:237, cat:'funny', icon:'🎈', q:'गुब्बारा फूला, फिर भी उड़ा नहीं। क्यों?', opts:['Helium nahi tha andar, normal hawa thi', 'Gubbara toot gaya tha', 'Bahut bhari tha', 'Koi reason nahi'], ans:'Helium nahi tha andar, normal hawa thi', hint:'Kaunsi gas udaati hai socho...'},
    {id:238, cat:'funny', icon:'🍔', q:'बर्गर खाया, फिर भी भूख नहीं मिटी। क्यों?', opts:['Chhota burger tha', 'Bahut bhookh lagi thi', 'Dono sahi ho sakte hain', 'Koi reason nahi'], ans:'Dono sahi ho sakte hain', hint:'Simple logic hai...'},
    {id:239, cat:'funny', icon:'🐹', q:'हैम्स्टर पूरा दिन व्हील पर दौड़ा, फिर भी कहीं नहीं पहुँचा। क्यों?', opts:['Wheel ghoomta hai, jagah nahi badalti', 'Hamster tired ho gaya', 'Wheel toot gaya tha', 'Koi reason nahi'], ans:'Wheel ghoomta hai, jagah nahi badalti', hint:'Physical location socho...'},
    {id:240, cat:'funny', icon:'🧴', q:'साबुन गिरा, फिर भी टूटा नहीं। क्यों?', opts:['Saabun toot-ta nahi, ghista hai', 'Saabun plastic ka tha', 'Kisi ne pakad liya', 'Koi reason nahi'], ans:'Saabun toot-ta nahi, ghista hai', hint:'Material socho...'},
    {id:241, cat:'desi', icon:'🌶️', q:'लाल भी होती है, हरी भी होती है, खाने में तीखापन लाती है। क्या है?', opts:['टमाटर', 'मिर्च', 'प्याज़', 'अदरक'], ans:'मिर्च', hint:'आँसू निकाल सकती है...'},
    {id:242, cat:'desi', icon:'🥁', q:'shaadi mein bajta hai, baarat ke saath chalta hai, dhoom machata hai. Kya hai?', opts:['Dhol', 'Tabla', 'Harmonium', 'Sitar'], ans:'Dhol', hint:'Kandhe pe latka kar bajate hain...'},
    {id:243, cat:'desi', icon:'🧵', q:'चरखे से कातते हैं, कपड़ा बनता है, गांधीजी से जुड़ा है। क्या है?', opts:['सूत', 'रुई', 'ऊन', 'रेशम'], ans:'सूत', hint:'खादी इसी से बनती है...'},
    {id:244, cat:'desi', icon:'🥭', q:'गर्मी में आता है, राजा कहलाता है, अचार भी बनता है। क्या है?', opts:['केला', 'आम', 'अनानास', 'पपीता'], ans:'आम', hint:'कच्चा भी खाते हैं...'},
    {id:245, cat:'desi', icon:'🪔', q:'दिवाली पे जलता है, मिट्टी का बना होता है, तेल से भरता है। क्या है?', opts:['मोमबत्ती', 'दिया', 'लालटेन', 'फानूस'], ans:'दिया', hint:'घर की रौशनी करता है...'},
    {id:246, cat:'desi', icon:'🐐', q:'ईद पे कुर्बान होती है, मिमियाती है, बकरीद से जुड़ी है। क्या है?', opts:['गाय', 'बकरी', 'भेड़', 'ऊँट'], ans:'बकरी', hint:'त्यौहार का नाम भी इससे जुड़ा है...'},
    {id:247, cat:'desi', icon:'🎋', q:'होली पे खेलते हैं, रंग उड़ता है, पिचकारी चलती है। क्या त्यौहार है?', opts:['दिवाली', 'होली', 'राखी', 'दशहरा'], ans:'होली', hint:'रंगों का त्यौहार...'},
    {id:248, cat:'desi', icon:'🧣', q:'बहन भाई की कलाई पे बाँधती है, रक्षा का वादा होता है। क्या है?', opts:['राखी', 'कंगन', 'मौली', 'टीका'], ans:'राखी', hint:'अगस्त में मनाते हैं...'},
    {id:249, cat:'desi', icon:'🏹', q:'रावण जलता है, दशहरे पे होता है, राम की जीत मनाई जाती है। क्या त्यौहार है?', opts:['होली', 'दशहरा', 'दिवाली', 'नवरात्रि'], ans:'दशहरा', hint:'दस सिर वाले का पुतला...'},
    {id:250, cat:'desi', icon:'🥘', q:'दाल-चावल के साथ खाते हैं, आटे से बनता है, तवे पे सेंकते हैं। क्या है?', opts:['पूरी', 'रोटी', 'पराठा', 'नान'], ans:'रोटी', hint:'हर घर में रोज़ बनती है...'},
    {id:251, cat:'desi', icon:'🐫', q:'रेगिस्तान में चलता है, पीठ पे कूबड़ होता है, बिना पानी दिन चल सकता है। क्या है?', opts:['हाथी', 'ऊँट', 'गधा', 'घोड़ा'], ans:'ऊँट', hint:'जहाज़-ए-रेगिस्तान कहलाता है...'},
    {id:252, cat:'desi', icon:'🧅', q:'काटते waqt aansu aate hain, sabzi mein daalte hain, tehen परत होती है। Kya hai?', opts:['Aloo', 'Pyaaz', 'Lahsun', 'Adrak'], ans:'Pyaaz', hint:'Andar layers hoti hain...'},
    {id:253, cat:'desi', icon:'🥁', q:'navratri mein khela jaata hai, do sticks se, circle mein naachte hain. Kya khel hai?', opts:['Kabaddi', 'Garba/Dandiya', 'Kho-kho', 'Gilli-danda'], ans:'Garba/Dandiya', hint:'Gujarat se aaya hai...'},
    {id:254, cat:'desi', icon:'🐄', q:'holy jaanwar hai, doodh deti hai, gobar se upla banta hai. Kaun?', opts:['Bakri', 'Gaay', 'Bhaisi', 'Bhed'], ans:'Gaay', hint:'Mata bhi kehte hain isse...'},
    {id:255, cat:'desi', icon:'🎏', q:'Ganesh Chaturthi pe sthapit hote hain, visarjan hota hai, sundh hoti hai. Kaun devta?', opts:['Shiv', 'Ganesh', 'Vishnu', 'Hanuman'], ans:'Ganesh', hint:'Elephant head wale devta...'},
    {id:256, cat:'desi', icon:'🌻', q:'sarson ke khet peele hote hain, tel banta hai isse, Punjab mein bahut hota hai. Kya fasal hai?', opts:['Gehu', 'Sarson', 'Chana', 'Makka'], ans:'Sarson', hint:'Winter crop hai...'},
    {id:257, cat:'desi', icon:'🪘', q:'shaadi ki sangeet mein bajta hai, do haathon se bajaate hain, gol shape hota hai. Kya hai?', opts:['Dhol', 'Tabla', 'Manjeera', 'Shehnai'], ans:'Tabla', hint:'Classical music mein bhi use hota hai...'},
    {id:258, cat:'desi', icon:'🥻', q:'shaadi mein pehni jaati hai, 6 gaz ki hoti hai, aurat pehanti hai. Kya hai?', opts:['Lehenga', 'Saree', 'Salwar', 'Ghagra'], ans:'Saree', hint:'Pallu bhi hota hai isme...'},
    {id:259, cat:'desi', icon:'🎆', q:'diwali pe hoti hai, aasmaan mein rang bikherti hai, awaaz bhi hoti hai. Kya hai?', opts:['Diya', 'Aatishbaazi', 'Rangoli', 'Mombatti'], ans:'Aatishbaazi', hint:'Rules follow karke jalao...'},
    {id:260, cat:'desi', icon:'🐘', q:'ganv mein mela lagta hai, jhoole hote hain, meethi cheezein bikti hain. Kya kehte hain isko?', opts:['Bazaar', 'Mela', 'Haat', 'Dukan'], ans:'Mela', hint:'Tyohaar ke waqt lagta hai...'},
    {id:261, cat:'logical', icon:'🔢', q:'2, 4, 8, 16, 32... agla number kya hoga?', opts:['48', '60', '64', '56'], ans:'64', hint:'Har number ko 2 se multiply karo...'},
    {id:262, cat:'logical', icon:'🚂', q:'Ek train 60 km/h se chal rahi hai. 150 km ka safar tay karne mein kitna time lagega?', opts:['2 ghante', '2.5 ghante', '3 ghante', '1.5 ghante'], ans:'2.5 ghante', hint:'Distance/Speed = Time'},
    {id:263, cat:'logical', icon:'👨‍👦', q:'एक आदमी की फ़ोटो देखकर किसी ने पूछा "यह किसकी फ़ोटो है?" आदमी बोला "इसका भाई मेरे पिता का इकलौता बेटा है।" फ़ोटो किसकी थी?', opts:['उसके पिता की', 'उसकी अपनी', 'उसके बेटे की', 'उसके दोस्त की'], ans:'उसकी अपनी', hint:'ध्यान से पढ़ो, "इकलौता बेटा" खुद है...'},
    {id:264, cat:'logical', icon:'🧮', q:'अगर 5 मशीनें 5 मिनट में 5 चीज़ें बनाती हैं, तो 100 मशीनें 100 चीज़ें बनाने में कितना समय लेंगी?', opts:['100 मिनट', '5 मिनट', '20 मिनट', '50 मिनट'], ans:'5 मिनट', hint:'हर मशीन independently kaam karti hai...'},
    {id:265, cat:'logical', icon:'🕵️', q:'एक कमरे में 7 लोग हैं। हर कोई हर किसी से एक बार हाथ मिलाता है। कुल कितने handshake होंगे?', opts:['21', '14', '49', '42'], ans:'21', hint:'n(n-1)/2 formula use karo...'},
    {id:266, cat:'logical', icon:'⛲', q:'दो नल टंकी भरते हैं। एक अकेले 4 घंटे में भरता है, दूसरा 6 घंटे में। दोनों साथ में कितने में भरेंगे?', opts:['2.4 घंटे', '5 घंटे', '2 घंटे', '3 घंटे'], ans:'2.4 घंटे', hint:'Rates add hoti hain...'},
    {id:267, cat:'logical', icon:'🎂', q:'आज मेरी उम्र मेरे बेटे की उम्र से तीन गुना है। 5 साल बाद मेरी उम्र उसकी उम्र से दोगुनी होगी। मेरी अभी की उम्र क्या है?', opts:['30', '45', '15', '25'], ans:'15', hint:'Algebra se solve karo (x aur 3x)...'},
    {id:268, cat:'logical', icon:'🚶', q:'एक आदमी 5 km/h से चलता है, 3 घंटे चलने के बाद कितनी दूरी तय करेगा?', opts:['10 km', '15 km', '12 km', '20 km'], ans:'15 km', hint:'Speed × Time = Distance'},
    {id:269, cat:'logical', icon:'🧩', q:'एक क्रम है: A, C, F, J, O... अगला अक्षर क्या होगा?', opts:['S', 'T', 'U', 'R'], ans:'U', hint:'हर बार gap badhta ja raha hai (2,3,4,5...)'},
    {id:270, cat:'logical', icon:'🎲', q:'दो पासे फेंके गए, दोनों का जोड़ 7 आया। कितने तरीकों से 7 आ सकता है?', opts:['6', '5', '4', '3'], ans:'6', hint:'1+6,2+5,3+4,4+3,5+2,6+1 giniye'},
    {id:271, cat:'logical', icon:'🔑', q:'एक तिजोरी का code 3 अंकों का है। सब अंक अलग हैं, तीनों का जोड़ 9 है, पहला अंक सबसे बड़ा है। एक possible code?', opts:['630', '810', '540', '720'], ans:'630', hint:'Options mein se sum 9 waala aur digits unique check karo'},
    {id:272, cat:'logical', icon:'📏', q:'एक रस्सी को आधा-आधा 4 बार काटा गया। कितने टुकड़े बने?', opts:['8', '16', '5', '4'], ans:'16', hint:'Har cut pichhle tukdon ko double karta hai'},
    {id:273, cat:'logical', icon:'🧑‍⚖️', q:'तीन दोस्तों में सबसे लंबा वह है जो सबसे छोटे से लंबा है, पर बीच वाले से छोटा है। सही क्रम क्या है?', opts:['A>B>C', 'B>A>C', 'C>B>A', 'A=B=C'], ans:'B>A>C', hint:'Options ko sequence mein match karo'},
    {id:274, cat:'logical', icon:'🧊', q:'ek glass mein barf tairti hai. Barf pighalne par paani ka level kya hoga?', opts:['Badhega', 'Ghatega', 'Same rahega', 'Overflow hoga'], ans:'Same rahega', hint:'Archimedes principle...'},
    {id:275, cat:'logical', icon:'🐇', q:'खरगोश और कछुए की रेस में, कछुआ जीता क्योंकि खरगोश ने क्या किया?', opts:['Neend li', 'Galat raasta liya', 'Bahut dheere chala', 'Race chhod di'], ans:'Neend li', hint:'Famous kahani hai...'},
    {id:276, cat:'logical', icon:'📐', q:'एक त्रिकोण के तीन कोणों का जोड़ हमेशा कितना होता है?', opts:['90°', '180°', '360°', '270°'], ans:'180°', hint:'Geometry ka basic rule...'},
    {id:277, cat:'logical', icon:'🧠', q:'अगर आज सोमवार है, तो 100 दिन बाद कौन सा दिन होगा?', opts:['सोमवार', 'बुधवार', 'गुरुवार', 'मंगलवार'], ans:'बुधवार', hint:'100 mod 7 nikalo'},
    {id:278, cat:'logical', icon:'⏱️', q:'एक घड़ी हर घंटे 2 मिनट पीछे रहती है। 12 घंटे में कितनी पीछे हो जाएगी?', opts:['12 मिनट', '24 मिनट', '20 मिनट', '30 मिनट'], ans:'24 मिनट', hint:'2 minute × 12 ghante'},
    {id:279, cat:'logical', icon:'🎈', q:'अगर 3 गुब्बारे फुलाने में 3 बच्चों को 3 मिनट लगते हैं, तो 6 गुब्बारे फुलाने में 6 बच्चों को कितना समय लगेगा?', opts:['3 मिनट', '6 मिनट', '9 मिनट', '12 मिनट'], ans:'3 मिनट', hint:'Rate same rehta hai per child'},
    {id:280, cat:'logical', icon:'🚦', q:'अगर लाल का मतलब रुको और हरा का मतलब जाओ है, तो पीला का क्या मतलब है इस traffic system mein?', opts:['Tez jao', 'Ruk ke taiyaar raho', 'Horn bajao', 'Ulta jao'], ans:'Ruk ke taiyaar raho', hint:'Signal transition socho'},
    {id:281, cat:'hard', icon:'🕳️', q:'जितना इसमें से निकालो, उतना बड़ा होता जाता है। क्या है?', opts:['गड्ढा', 'कुआँ', 'सुरंग', 'आसमान'], ans:'गड्ढा', hint:'खोदने की बात है...'},
    {id:282, cat:'hard', icon:'🗝️', q:'हर darwaaze ko khol sakta hai, par khud koi darwaaza nahi. Kya hai?', opts:['Taala', 'Chaabi', 'Haath', 'Sawal'], ans:'Chaabi', hint:'Jeb mein rakhte hain...'},
    {id:283, cat:'hard', icon:'📖', q:'जितना पुराना होता है, उतना कीमती होता है, पर पढ़ा नहीं जा सकता। क्या है?', opts:['किताब', 'शराब', 'सिक्का', 'दोस्ती'], ans:'दोस्ती', hint:'Rishta jo time ke saath gehra hota hai...'},
    {id:284, cat:'hard', icon:'🌫️', q:'सुबह होता है, दोपहर तक गायब हो जाता है, ज़मीन को छूता नहीं। क्या है?', opts:['बादल', 'कोहरा', 'ओस', 'धुआँ'], ans:'कोहरा', hint:'Visibility kam kar deta hai...'},
    {id:285, cat:'hard', icon:'🎭', q:'मेरे पास चेहरा है पर दिमाग नहीं, हाथ हैं पर हाथ नहीं पकड़ सकते। क्या हूँ मैं?', opts:['गुड़िया', 'घड़ी', 'मूर्ति', 'मुखौटा'], ans:'घड़ी', hint:'Time batati hai...'},
    {id:286, cat:'hard', icon:'🌉', q:'दो किनारों को जोड़ता है, पर खुद चल नहीं सकता। क्या है?', opts:['नाव', 'पुल', 'सड़क', 'रस्सी'], ans:'पुल', hint:'नदी के ऊपर बनता है...'},
    {id:287, cat:'hard', icon:'🕰️', q:'आगे बढ़ता है, पीछे कभी नहीं जाता, फिर भी हाथ हिलाता रहता है। क्या है?', opts:['घड़ी की सुई', 'पंखा', 'ट्रेन', 'नदी'], ans:'घड़ी की सुई', hint:'Har second move karti hai...'},
    {id:288, cat:'hard', icon:'🪟', q:'दिन में रोशनी अंदर आने देता है, रात को अंधेरा नहीं रोक पाता। क्या है?', opts:['दरवाज़ा', 'खिड़की', 'परदा', 'छत'], ans:'खिड़की', hint:'शीशा लगा होता है...'},
    {id:289, cat:'hard', icon:'🫧', q:'banta hai, hawa mein udta hai, chhoote hi phat jaata hai, rangeen dikhta hai. Kya hai?', opts:['Gubara', 'Bubble/budbuda', 'Baloon', 'Patang'], ans:'Bubble/budbuda', hint:'Bachhe sabun se banate hain...'},
    {id:290, cat:'hard', icon:'🔥', q:'जीवन देता है, जीवन ले भी सकता है, ठंड में दोस्त है, जंगल में दुश्मन। क्या है?', opts:['पानी', 'आग', 'बिजली', 'हवा'], ans:'आग', hint:'Do face hoti hain iski...'},
    {id:291, cat:'hard', icon:'🌗', q:'हर रात रूप बदलता है, कभी पूरा दिखता है, कभी गायब हो जाता है। क्या है?', opts:['सूरज', 'चाँद', 'तारा', 'आसमान'], ans:'चाँद', hint:'28 दिन का चक्र है...'},
    {id:292, cat:'hard', icon:'🧬', q:'tumhare andar hai, tumhari poori kahaani likhi hai, kabhi dekh nahi sakte bina machine ke. Kya hai?', opts:['Khoon', 'DNA', 'Dimag', 'Dil'], ans:'DNA', hint:'Genetics ki baat hai...'},
    {id:293, cat:'hard', icon:'⛓️', q:'tootne ke liye banti hai, par usse todna hi uska maqsad poora karta hai. Kya hai?', opts:['Rassi', 'Record (kisi cheez ka)', 'Kaanch', 'Zanjeer'], ans:'Record (kisi cheez ka)', hint:'Sports mein sunte hain "___ tod diya"...'},
    {id:294, cat:'hard', icon:'🗣️', q:'bina zubaan ke bolta hai, bina kaano ke sunta hai, bina sharir ke jeeta hai. Kya hai?', opts:['Bhoot', 'Echo/Pratidhwani', 'Sapna', 'Hawa'], ans:'Echo/Pratidhwani', hint:'Pahado mein sunte hain...'},
    {id:295, cat:'hard', icon:'🌱', q:'मिट्टी में सोता है, पानी से जागता है, हवा और धूप से बड़ा होता है। क्या है?', opts:['पत्थर', 'बीज', 'कीड़ा', 'जड़'], ans:'बीज', hint:'Ped ki shuruat yahin se hoti hai...'},
    {id:296, cat:'hard', icon:'🪞', q:'sach dikhata hai, par khud jhooth ki tarah palat deta hai (left-right swap). Kya hai?', opts:['Camera', 'Sheesha', 'Paani', 'Aankh'], ans:'Sheesha', hint:'Bathroom mein dekho khud ko...'},
    {id:297, cat:'hard', icon:'📯', q:'आवाज़ को दूर तक ले जाता है, पर खुद कुछ बोलता नहीं। क्या है?', opts:['माइक्रोफोन', 'मेगाफोन', 'फोन', 'स्पीकर'], ans:'माइक्रोफोन', hint:'मंच पर इस्तेमाल होता है...'},
    {id:298, cat:'hard', icon:'🩸', q:'शरीर में बहता है, लाल है, ज़िंदगी की निशानी है, पर खुद ज़िंदा नहीं। क्या है?', opts:['पानी', 'खून', 'नस', 'दिल'], ans:'खून', hint:'डॉक्टर टेस्ट के लिए लेते हैं...'},
    {id:299, cat:'hard', icon:'🧊', q:'ठोस भी है, तरल भी बन सकता है, गैस भी बन सकता है — एक ही चीज़ के तीन रूप। क्या है?', opts:['बर्फ', 'मोम', 'पानी', 'धातु'], ans:'पानी', hint:'H2O ke teen states...'},
    {id:300, cat:'hard', icon:'🕸️', q:'बुनता है, इंतज़ार करता है, फंसाता है, पर जाल नहीं फेंकता हाथ से। कौन?', opts:['मकड़ी', 'साँप', 'मछुआरा', 'शिकारी'], ans:'मकड़ी', hint:'आठ टांगें होती हैं...'},
  ]
};

// ============================================================
// NO-REPEAT ROTATION HELPER
// localStorage mein "seen" riddle IDs track karta hai (ek hi
// list dono languages ke liye, kyunki IDs globally unique hain).
// Jab tak kisi language/category ke saare riddles dekhe nahi
// jaate, wahi purane repeat nahi honge. Sab dekh liye jaane par
// sirf usi pool (language+category) ki rotation reset hoti hai.
// ============================================================
(function (global) {
  const STORAGE_KEY = 'sochoZaraSeenIds';

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
   * getRiddles(count, opts)
   * opts.lang   - 'hinglish' (default) ya 'hindi'
   * opts.cat    - optional: 'easy' | 'funny' | 'desi' | 'logical' | 'hard'. Omit for all categories.
   * opts.markSeen - default true: turant "seen" mark kar deta hai.
   *
   * Returns `count` riddles, unseen ko priority dete hue. Jab pool
   * (language + category combination) ke saare riddles dekh liye
   * jaate hain, tabhi sirf usi pool ki rotation reset hoti hai.
   */
  function getRiddles(count, opts) {
    opts = opts || {};
    const lang = opts.lang === 'hindi' ? 'hindi' : 'hinglish';
    const base = RIDDLES[lang] || [];
    const pool = opts.cat ? base.filter(r => r.cat === opts.cat) : base.slice();
    const n = Math.min(count || pool.length, pool.length);

    let seen = loadSeen();
    let unseen = pool.filter(r => !seen.has(r.id));

    if (unseen.length < n) {
      const poolIds = new Set(pool.map(r => r.id));
      seen = new Set(Array.from(seen).filter(id => !poolIds.has(id)));
      unseen = pool.slice();
    }

    const chosen = shuffle(unseen).slice(0, n);

    if (opts.markSeen !== false) {
      chosen.forEach(r => seen.add(r.id));
      saveSeen(seen);
    }

    return chosen;
  }

  function resetRiddleRotation() {
    try { if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY); }
    catch (e) { /* noop */ }
  }

  global.getRiddles = getRiddles;
  global.resetRiddleRotation = resetRiddleRotation;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getRiddles = getRiddles;
    module.exports.resetRiddleRotation = resetRiddleRotation;
  }
})(typeof window !== 'undefined' ? window : globalThis);
