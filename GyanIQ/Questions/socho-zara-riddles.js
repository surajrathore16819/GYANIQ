/* ═══════════════════════════════════════════════════════
   RIDDLE DATABASE — 100+ Paheliyan (Hinglish + Hindi)
═══════════════════════════════════════════════════════ */
const RIDDLES = {
  hinglish: [
    // ── EASY ──
    {cat:'easy', icon:'🌙', q:'Raat ko aata hai, din mein chala jaata hai. Kya hai?', opts:['Neend','Andheraa','Taara','Chaand'], ans:'Neend', hint:'Aankhein band ho jaati hain...'},
    {cat:'easy', icon:'🔑', q:'Ek ghar hai jisme koi darwaza nahi, koi khidki nahi, andar rehta hai ek raja. Kya hai?', opts:['Anda','Nariyal','Akhrot','Anar'], ans:'Anda', hint:'Subah naashte mein aata hai...'},
    {cat:'easy', icon:'💧', q:'Paani mein paida hota hai, paani se darta hai. Kya hai?', opts:['Namak','Cheeni','Sabun','Aata'], ans:'Namak', hint:'Khana usske bina phika lagta hai...'},
    {cat:'easy', icon:'🪞', q:'Tumhe dekhta hai par boltha nahi, tumhara chehra dikhata hai. Kya hai?', opts:['Paani','Sheeshe','Camera','Aankhein'], ans:'Sheeshe', hint:'Bathroom mein hota hai...'},
    {cat:'easy', icon:'🕯️', q:'Jitna khaata hai, utna chota hota jaata hai. Kya hai?', opts:['Mombatti','Sabun','Barf','Chalk'], ans:'Mombatti', hint:'Roshni deta hai...'},
    {cat:'easy', icon:'🌳', q:'Haath nahi par kaam karta hai, paanv nahi par seedha khada rehta hai. Kya hai?', opts:['Ped','Pahaad','Bijli ka khamba','Deewar'], ans:'Ped', hint:'Oxygen deta hai...'},
    {cat:'easy', icon:'☁️', q:'Upar se aata hai, neechhe se nahi jaata, bhigo deta hai sab ko. Kya hai?', opts:['Baadal','Baarish','Oas','Barf'], ans:'Baarish', hint:'Chhaata kaam aata hai...'},
    {cat:'easy', icon:'👣', q:'Peeche rehta hai, saamne nahi aata, dhoop mein dikhta hai. Kya hai?', opts:['Parchhaayi','Tasweer','Daag','Neend'], ans:'Parchhaayi', hint:'Dhoop zaruri hai iske liye...'},
    {cat:'easy', icon:'🦷', q:'Ek baar girti hai, dobara ugti hai. Umar hone par sirf ek baar girti hai. Kya hai?', opts:['Daant','Baal','Nakhun','Aankh'], ans:'Daant', hint:'Khana chabaane mein kaam aata hai...'},
    {cat:'easy', icon:'🌊', q:'Na khaata hai, na peeta hai, par khelkhel kar sabko bheega kar jaata hai. Kya hai?', opts:['Samandar','Dariya','Baadal','Nadi'], ans:'Baadal', hint:'Aasman mein rehta hai...'},

    // ── FUNNY ──
    {cat:'funny', icon:'😂', q:'Doctor ke paas gaya, doctor ne kaha — "Tum theek ho." Mujhe kya hua tha?', opts:['Neend aa rahi thi','Bhookh lagi thi','Kuch nahi hua tha','Dar lag raha tha'], ans:'Kuch nahi hua tha', hint:'Sochna...'},
    {cat:'funny', icon:'🐸', q:'Mendak haath jodte hue bola: "Mujhe ghar bhejna!" Woh kahan tha?', opts:['Taalaab mein','Raaste mein','Mandir mein','School mein'], ans:'Taalaab mein', hint:'Mendak ka ghar kahan hota hai?'},
    {cat:'funny', icon:'🥚', q:'Chaar bacche the — teen daud gaye. Kitne bacche bache?', opts:['Ek','Teen','Char','Koi nahi'], ans:'Ek', hint:'Simple math...'},
    {cat:'funny', icon:'🐘', q:'Hathi bike pe baithega toh seat kitni ho? Ek ya do?', opts:['Ek','Do','Teen','Hathi bike pe nahi baith sakta'], ans:'Hathi bike pe nahi baith sakta', hint:'Practical socho...'},
    {cat:'funny', icon:'🍕', q:'Pizza khate waqt bola — "Yeh theek hai." Kya matlab?', opts:['Swadisht hai','Ganda hai','Acha nahi laga','Teen mein se ek'], ans:'Swadisht hai', hint:'Khane ki baat hai...'},
    {cat:'funny', icon:'🐔', q:'Murgi pehle aayi ya anda? Answer: Dono ek sath aaye kyon? Kyon?', opts:['Kyonki dono zaruri hain','Kyonki science ne prove kiya','Kyonki mujhe bhookh lagi hai','Kyonki murgi ki dukan band thi'], ans:'Kyonki mujhe bhookh lagi hai', hint:'Funny answer dhundho...'},
    {cat:'funny', icon:'😴', q:'Koi sote waqt bolta hai — "Main jaag raha hoon!" Woh kya kar raha hai?', opts:['Sapna dekh raha hai','Jhooth bol raha hai','Neend mein bol raha hai','Exercise kar raha hai'], ans:'Sapna dekh raha hai', hint:'Neend ki baat hai...'},
    {cat:'funny', icon:'🚿', q:'Nahaane ke baad bhi ganda rehta hai — kya hai?', opts:['Paani','Saabun','Bathtub','Nali'], ans:'Paani', hint:'Mehnat karta hai...'},
    {cat:'funny', icon:'🐟', q:'Machhi ne kaha — "Mujhe pyaas lagi hai!" Kya mazaak tha?', opts:['Machhi paani mein rehti hai','Machhi baat nahi kar sakti','Machhi ko bhookh lagi thi','Machhi sookh gayi thi'], ans:'Machhi paani mein rehti hai', hint:'Machhi ka ghar kahan hai?'},
    {cat:'funny', icon:'🎈', q:'Bachche ne kaha — "Mujhe ek cheez chahiye jo udti hai!" Kya diya usse?', opts:['Toffee','Khilona','Gubara','Titli'], ans:'Gubara', hint:'Hawa se bhari hoti hai...'},

    // ── DESI ──
    {cat:'desi', icon:'🌾', q:'Khet mein ugti hai, mooh mein jaati hai, dant chabate hain. Kya hai?', opts:['Ganna','Gehu','Makka','Chawal'], ans:'Ganna', hint:'Juice nikalte hain isse...'},
    {cat:'desi', icon:'🐄', q:'Gaon ki maa doodh deti hai, par woh insaan nahi. Kya hai?', opts:['Bhaisi','Gaay','Bakri','Unt'], ans:'Gaay', hint:'Pooja bhi hoti hai iska...'},
    {cat:'desi', icon:'🏺', q:'Mitti se bana, paani rakhta hai, thandaa karta hai. Kya hai?', opts:['Ghada','Bartan','Baaltee','Tub'], ans:'Ghada', hint:'Gaon mein common hai...'},
    {cat:'desi', icon:'🌽', q:'Peela-peela, dantsedar, ek mein sau dane. Kya hai?', opts:['Makka','Anannas','Ganna','Keela'], ans:'Makka', hint:'Bhutta bhi kehte hain...'},
    {cat:'desi', icon:'🐓', q:'Subah uthata hai, sabko jagata hai, par sone nahi deta. Kya hai?', opts:['Murgaa','Billi','Kutta','Ghadi'], ans:'Murgaa', hint:'Gaon ka alarm clock...'},
    {cat:'desi', icon:'🪣', q:'Girti hai toh bhi nahi tooti, uchhalti hai toh bhi nahi tooti, paani se bhari rehti hai. Kya hai?', opts:['Nadi','Taalaab','Kuan','Sarovar'], ans:'Nadi', hint:'Beh chali jaati hai...'},
    {cat:'desi', icon:'🌳', q:'Gaon mein chhaya deta hai, aam deta hai, ghar mein laata hai. Kya hai?', opts:['Aam ka ped','Neem','Peepal','Tulsi'], ans:'Aam ka ped', hint:'Phalo ka raja...'},
    {cat:'desi', icon:'🧺', q:'Aurat siyon pe rakhti hai, mard kandhe pe rakhta hai, dono kaam karte hain. Kya hai?', opts:['Tokri','Thela','Bori','Pitaara'], ans:'Tokri', hint:'Baane se bani hoti hai...'},
    {cat:'desi', icon:'🔥', q:'Choolhe mein jalti hai, khana pakati hai, haat se nahi chhua jaata. Kya hai?', opts:['Aag','Lakar','Koyla','Kerosene'], ans:'Aag', hint:'Energy ka roop hai...'},
    {cat:'desi', icon:'🐘', q:'Sabse bada, sabse samajhdar, naak se paani peeta hai. Kya hai?', opts:['Hathi','Genda','Daribbu','Nil ghoda'], ans:'Hathi', hint:'Jungle ka raja...'},
    {cat:'desi', icon:'🎋', q:'Bamboo jaisa seedha, andar se khokla, baansuri banti hai isse. Kya hai?', opts:['Baas','Nali','Reed','Lathi'], ans:'Baas', hint:'Bamboo hi hai...'},

    // ── LOGICAL ──
    {cat:'logical', icon:'🧠', q:'Ek kamre mein 3 bijli ke bulbs hain. Bahar 3 switches hain. Ek baar andar jaoge. Pata karo kaun sa switch kaun sa bulb jalata hai?', opts:['Teen baar jaake check karo','Ek bulb on karo, ek warm karo, ek band rakho','Teeno switch ek saat on karo','Andaaza lagao'], ans:'Ek bulb on karo, ek warm karo, ek band rakho', hint:'Physics ka use karo...'},
    {cat:'logical', icon:'⚖️', q:'Maa 21 saal badi hai apni beti se. 6 saal mein maa teen guna hogi. Beti ki abhi ki umar?', opts:['1.5 saal','2 saal','3 saal','4 saal'], ans:'1.5 saal', hint:'Algebra solve karo...'},
    {cat:'logical', icon:'🔢', q:'1, 2, 3, 5, 8, 13... agla number kya hoga?', opts:['18','20','21','25'], ans:'21', hint:'Fibonacci sequence...'},
    {cat:'logical', icon:'🧩', q:'Ek insaan poocha — kya tum hamesha jhooth bolte ho? Agar haan bola toh sachchi bol raha hai, agar nahi bola toh jhooth bol raha hai. Kya yeh possible hai?', opts:['Haan possible hai','Nahi possible hai','Dono galat hain','Koi fark nahi'], ans:'Nahi possible hai', hint:'Paradox hai...'},
    {cat:'logical', icon:'🚢', q:'Ek naav mein 10 bhed hain. 2 neeche gire. Naav ke captain ki umar kitni hai?', opts:['10','8','Pata nahi','40'], ans:'Pata nahi', hint:'Dhyan se padho...'},
    {cat:'logical', icon:'👨‍👩‍👧', q:'Ek aadmi ki do betiyan hain, dono ki maa ek hi hai. Par woh judwa nahi hain. Kaise?', opts:['Ek sauteli hai','Teen bacche hain','Triplets mein se do hain','Galat baat hai'], ans:'Triplets mein se do hain', hint:'Judwa ke siwa...'},
    {cat:'logical', icon:'🎯', q:'100 se 1 tak ginoge, kitne baar "9" aayega?', opts:['10','11','20','21'], ans:'20', hint:'9,19,29...90,91...99...'},
    {cat:'logical', icon:'🪙', q:'3 sikke hain, jo 60 paisa banaate hain, ek sikka 5 paisa nahi hai. Kaise?', opts:['25+25+10','50+5+5','55+3+2','20+20+20'], ans:'25+25+10', hint:'Ek 5 paisa nahi, baki ho sakte hain...'},
    {cat:'logical', icon:'🐌', q:'Ek ghonghaa 10 meter gehre kuan mein hai. Roz 3 meter chadta hai, raat mein 2 meter phisalta hai. Kitne din mein bahar aayega?', opts:['8 din','10 din','9 din','7 din'], ans:'8 din', hint:'Last din par nahi phisalega...'},
    {cat:'logical', icon:'🕐', q:'Ghadi mein 12 baje 3 baj gaye hain toh kaanta kahan hoga?', opts:['12 aur 3 ke beech','9 aur 12','3 aur 6','6 aur 9'], ans:'3 aur 6', hint:'Minute hand 15 minute par...'},

    // ── HARD ──
    {cat:'hard', icon:'💀', q:'Main woh hoon jo tum sochte ho woh mera naam hai, par jo tum bolte ho woh mera naam nahi. Kya hoon main?', opts:['Khamoshi','Khaali jagah','Rahasia','Soch'], ans:'Khamoshi', hint:'Awaz nahi hai iske paas...'},
    {cat:'hard', icon:'🌀', q:'Jitna zyada sukhaate ho, utna bheega hota jaata hai. Kya hai?', opts:['Towel','Kaapra','Aansu','Baal'], ans:'Towel', hint:'Nahaane ke baad use hota hai...'},
    {cat:'hard', icon:'⬛', q:'Kaala tha, safed bana, laal ho gaya. Kya hai?', opts:['Angaar','Koyla','Loha','Paththar'], ans:'Angaar', hint:'Aag mein daalo...'},
    {cat:'hard', icon:'🌊', q:'Tumhare paas hai, tumhare paas hai, par kabhi dekh nahi sakte. Kya hai?', opts:['Aankhon ke peeche ka hissa','Dimag','Dil','Sapne'], ans:'Aankhon ke peeche ka hissa', hint:'Aankhon ki baat hai...'},
    {cat:'hard', icon:'🏠', q:'Ek ghar mein char deewarein hain, sab south direction mein hain. Agar bear bahar ghoom raha hai, toh bear ka rang kya hai?', opts:['Bhura','Kaala','Safed','Geela'], ans:'Safed', hint:'Yeh ghar North Pole par hai...'},
    {cat:'hard', icon:'🔡', q:'NOON ko ulta likho, wahi rahega. Aise aur words?', opts:['MOM','WOW','LEVEL','Sab teeno'], ans:'Sab teeno', hint:'Palindrome dhundho...'},
    {cat:'hard', icon:'🌍', q:'Dharti ke upar, paani ke andar, aankhon se nahi dikhta. Kya hai?', opts:['Tel','Khaan','Bhoochaal','Kuchh bhi nahi'], ans:'Khaan', hint:'Mining se nikalte hain...'},
    {cat:'hard', icon:'🔮', q:'Ek cheez jo khareedo toh mahanga, bikao toh sasta, par zarurat nahin. Kya hai?', opts:['Taboot','Dawa','Beejar','Mehndi'], ans:'Taboot', hint:'Zindagi ke baad zarurat...'},
    {cat:'hard', icon:'⏳', q:'Main tha, abhi bhi hoon, aur rahunga. Par main kuch nahi hoon. Kya hoon main?', opts:['Time','Khaali jagah','Andhera','Khamoshi'], ans:'Time', hint:'Philosophical jawab dhundho...'},
    {cat:'hard', icon:'🎭', q:'Ek cheez jo sirf ek baar dekhi ja sakti hai, uske baad woh wahi nahi rehti. Kya hai?', opts:['Pehli mulaqaat','Kisi cheez ki pehli baar','Sapna','Saans'], ans:'Pehli mulaqaat', hint:'Pehla hamesha khaas hota hai...'},

    // More Easy
    {cat:'easy', icon:'🍎', q:'Laal hai, meetha hai, doctor ko door rakhta hai. Kya hai?', opts:['Seb','Angoor','Aam','Strawberry'], ans:'Seb', hint:'"An apple a day..."'},
    {cat:'easy', icon:'🐝', q:'Udti hai, kaati hai, meetha deti hai. Kya hai?', opts:['Teetli','Makhi','Madhumakkhi','Pankhi'], ans:'Madhumakkhi', hint:'Shahad banati hai...'},
    {cat:'easy', icon:'📚', q:'Bolti nahi, par bahut kuch sikhati hai. Kya hai?', opts:['Kitaab','Teacher','Maa','Dosto'], ans:'Kitaab', hint:'Padhna padta hai...'},
    {cat:'easy', icon:'🌸', q:'Subah khilti hai, shaam mein band ho jaati hai. Kya hai?', opts:['Phool','Aankhein','Dukaan','Tara'], ans:'Phool', hint:'Bagicha mein hoti hai...'},
    {cat:'easy', icon:'🚂', q:'Dhaian se chabata hai, raat ko band rehta hai, subah khulta hai. Kya hai?', opts:['Station','Darvaza','Aankhein','Darwaza'], ans:'Darwaza', hint:'Ghar ka...'},

    // More Funny
    {cat:'funny', icon:'🤡', q:'Kya cheez har roz girti hai par kabhi nahi tootti?', opts:['Raat','Baarish','Andheraa','Neend'], ans:'Raat', hint:'Din ke baad aata hai...'},
    {cat:'funny', icon:'🎪', q:'Koi cheez jo seedhi hai par tedha kaam karti hai?', opts:['Bans','Chhadi','Neta ki baat','Seedhi sarak'], ans:'Neta ki baat', hint:'Funny jawab dhundho...'},
    {cat:'funny', icon:'🃏', q:'Aadmi ne kaha mujhe yaad nahi hai main kaun hoon. Doctor ne kaha lucky ho! Kyon?', opts:['Naya life milega','Purane dard bhool gaye','Doosra insaan ban gaye','Kuch nahi'], ans:'Purane dard bhool gaye', hint:'Amnesia...'},
    {cat:'funny', icon:'🎭', q:'Dono bhai — ek andar rehta hai, ek bahar. Kaun zyada khush hai?', opts:['Bahar wala','Andar wala','Dono khush','Pata nahi'], ans:'Bahar wala', hint:'Azadi ki baat hai...'},
    {cat:'funny', icon:'🤣', q:'Bakri ne 5 baar me-me kiya. Yeh kya tha?', opts:['Namaaz','Nashta maanga','Gana gaya','Gaaya'], ans:'Nashta maanga', hint:'Bhookh lagi thi...'},

    // More Desi
    {cat:'desi', icon:'🌿', q:'Neem ka ped, tulsi ka patta, dono kaam karte hain. Kya kaam karte hain?', opts:['Dawa','Pooja','Dono','Khana'], ans:'Dono', hint:'Gaon ki pharmacy...'},
    {cat:'desi', icon:'🏡', q:'Gaon ki chhat, mitti ki deevarein, angan mein tulsi. Kya hai?', opts:['Haveli','Kachcha ghar','Mandir','Dharamshala'], ans:'Kachcha ghar', hint:'Simple ghar...'},
    {cat:'desi', icon:'🎶', q:'Dholak bajti hai, gaane hote hain, mehmaan aate hain. Kya hai?', opts:['Shaadi','Mela','Teej','Diwali'], ans:'Shaadi', hint:'Baar baar nahi hoti...'},
    {cat:'desi', icon:'🐂', q:'Kisaan ka dost, khet joutta hai, seedha chalata hai. Kya hai?', opts:['Bail','Ghoda','Khar','Hathi'], ans:'Bail', hint:'Halwaha ke saath...'},
    {cat:'desi', icon:'🌙', q:'Chand ki roshni mein baitho, chaarpai pe aaram karo. Yeh kahan possible hai?', opts:['Gaon mein','Sheher mein','Dono jagah','Bazaar mein'], ans:'Gaon mein', hint:'Outdoor zindagi...'},

    // More Logical
    {cat:'logical', icon:'🔢', q:'2 + 2 = 5 kab hoga?', opts:['Kabhi nahi','Galat sum mein','Maths mein joke hai','Ek bhi nahi'], ans:'Kabhi nahi', hint:'2+2 hamesha 4 hai...'},
    {cat:'logical', icon:'🎲', q:'Toss karo — heads ya tails. 5 baar lage heads. Abhi probability kya hai tails ki?', opts:['50%','100%','25%','75%'], ans:'50%', hint:'Har toss independent hai...'},
    {cat:'logical', icon:'🚗', q:'Gaadi 80 km/h se chal rahi hai. 40 km ka safar karne mein kitna time lagega?', opts:['30 min','1 ghanta','45 min','20 min'], ans:'30 min', hint:'Speed × Time = Distance'},
    {cat:'logical', icon:'🧮', q:'1 se 10 tak ke numbers ka sum kya hoga?', opts:['50','55','45','60'], ans:'55', hint:'Gauss formula...'},
    {cat:'logical', icon:'🎯', q:'Ek target pe 3 teer maare. Score 100 aaya. Kaise? (25, 25, 50 nahi chahiye)', opts:['30+30+40','20+40+40','50+25+25 nahi','Impossible'], ans:'Impossible', hint:'Odd + even + odd = even ya odd?'},

    // More Hard
    {cat:'hard', icon:'🌑', q:'Main hoon par hoon nahi, dikha par dikh nahi, aaya par gaya nahi. Kya hoon?', opts:['Parchhaayi','Soch','Aks','Sapna'], ans:'Aks', hint:'Mirror mein dikhta hai...'},
    {cat:'hard', icon:'⚡', q:'Bijli chamki, aawaz aayi. Lekin bijli pehle kyun dikhi?', opts:['Aankh kaan se tez hai','Roshni aawaz se tez hai','Bijli paas thi','Koi reason nahi'], ans:'Roshni aawaz se tez hai', hint:'Physics — speed of light...'},
    {cat:'hard', icon:'🗿', q:'Jab main young tha tall tha, jab main boodha hua chhota hua. Kya hoon main?', opts:['Mombatti','Ped','Insan','Pahad'], ans:'Mombatti', hint:'Roshni deta hai...'},
    {cat:'hard', icon:'🌌', q:'Aasman mein karod tare hain, par ek bhi chhoo nahi sakte. Closest tara kaun?', opts:['Dhruva tara','Sirius','Surya','Alpha Centauri'], ans:'Surya', hint:'Din mein dikhta hai...'},
    {cat:'hard', icon:'🔐', q:'Har koi use karta hai, par kabhi share nahi karta, hamesha personal rehta hai. Kya hai?', opts:['Toothbrush','Password','Sapne','Naam'], ans:'Toothbrush', hint:'Hygiene ki baat hai...'},
  ],

  hindi: [
    // ── आसान ──
    {cat:'easy', icon:'🌙', q:'रात को आता है, दिन में चला जाता है। क्या है?', opts:['नींद','अंधेरा','तारा','चाँद'], ans:'नींद', hint:'आँखें बंद हो जाती हैं...'},
    {cat:'easy', icon:'🔑', q:'एक घर है जिसमें कोई दरवाज़ा नहीं, कोई खिड़की नहीं, अंदर रहता है एक राजा। क्या है?', opts:['अंडा','नारियल','अखरोट','अनार'], ans:'अंडा', hint:'सुबह नाश्ते में आता है...'},
    {cat:'easy', icon:'💧', q:'पानी में पैदा होता है, पानी से डरता है। क्या है?', opts:['नमक','चीनी','साबुन','आटा'], ans:'नमक', hint:'खाना इसके बिना फीका लगता है...'},
    {cat:'easy', icon:'🪞', q:'तुम्हें देखता है पर बोलता नहीं, तुम्हारा चेहरा दिखाता है। क्या है?', opts:['पानी','शीशा','कैमरा','आँखें'], ans:'शीशा', hint:'बाथरूम में होता है...'},
    {cat:'easy', icon:'🕯️', q:'जितना खाता है, उतना छोटा होता जाता है। क्या है?', opts:['मोमबत्ती','साबुन','बर्फ','चाक'], ans:'मोमबत्ती', hint:'रोशनी देता है...'},
    {cat:'easy', icon:'🌳', q:'हाथ नहीं पर काम करता है, पाँव नहीं पर सीधा खड़ा रहता है। क्या है?', opts:['पेड़','पहाड़','बिजली का खम्भा','दीवार'], ans:'पेड़', hint:'ऑक्सीजन देता है...'},
    {cat:'easy', icon:'☁️', q:'ऊपर से आता है, नीचे से नहीं जाता, भिगो देता है सबको। क्या है?', opts:['बादल','बारिश','ओस','बर्फ'], ans:'बारिश', hint:'छाता काम आता है...'},
    {cat:'easy', icon:'👣', q:'पीछे रहता है, सामने नहीं आता, धूप में दिखता है। क्या है?', opts:['परछाईं','तस्वीर','दाग','नींद'], ans:'परछाईं', hint:'धूप ज़रूरी है इसके लिए...'},
    {cat:'easy', icon:'🦷', q:'एक बार गिरती है, दोबारा उगती है। उम्र होने पर सिर्फ एक बार गिरती है। क्या है?', opts:['दाँत','बाल','नाखून','आँख'], ans:'दाँत', hint:'खाना चबाने में काम आता है...'},
    {cat:'easy', icon:'🍎', q:'लाल है, मीठा है, डॉक्टर को दूर रखता है। क्या है?', opts:['सेब','अंगूर','आम','स्ट्रॉबेरी'], ans:'सेब', hint:'"An apple a day..."'},

    // ── हास्य ──
    {cat:'funny', icon:'😂', q:'क्या चीज़ हर रोज़ गिरती है पर कभी नहीं टूटती?', opts:['रात','बारिश','अंधेरा','नींद'], ans:'रात', hint:'दिन के बाद आता है...'},
    {cat:'funny', icon:'🐸', q:'मेंढक हाथ जोड़कर बोला: "मुझे घर भेजो!" वह कहाँ था?', opts:['तालाब में','रास्ते में','मंदिर में','स्कूल में'], ans:'तालाब में', hint:'मेंढक का घर कहाँ होता है?'},
    {cat:'funny', icon:'🥚', q:'चार बच्चे थे — तीन दौड़ गए। कितने बच्चे बचे?', opts:['एक','तीन','चार','कोई नहीं'], ans:'एक', hint:'साधारण गणित...'},
    {cat:'funny', icon:'😴', q:'कोई सोते वक्त बोलता है — "मैं जाग रहा हूँ!" वह क्या कर रहा है?', opts:['सपना देख रहा है','झूठ बोल रहा है','नींद में बोल रहा है','व्यायाम कर रहा है'], ans:'सपना देख रहा है', hint:'नींद की बात है...'},
    {cat:'funny', icon:'🚿', q:'नहाने के बाद भी गंदा रहता है — क्या है?', opts:['पानी','साबुन','बाथटब','नाली'], ans:'पानी', hint:'मेहनत करता है...'},
    {cat:'funny', icon:'🐟', q:'मछली ने कहा — "मुझे प्यास लगी है!" क्या मज़ाक था?', opts:['मछली पानी में रहती है','मछली बात नहीं कर सकती','मछली को भूख लगी थी','मछली सूख गई थी'], ans:'मछली पानी में रहती है', hint:'मछली का घर कहाँ है?'},
    {cat:'funny', icon:'🎈', q:'बच्चे ने कहा — "मुझे एक चीज़ चाहिए जो उड़ती है!" क्या दिया उसे?', opts:['टॉफी','खिलौना','गुब्बारा','तितली'], ans:'गुब्बारा', hint:'हवा से भरी होती है...'},
    {cat:'funny', icon:'🤡', q:'क्या चीज़ सीधी है पर टेढ़ा काम करती है?', opts:['बाँस','छड़ी','नेता की बात','सीधी सड़क'], ans:'नेता की बात', hint:'मज़ेदार जवाब ढूँढो...'},
    {cat:'funny', icon:'🃏', q:'आदमी ने कहा मुझे याद नहीं है मैं कौन हूँ। डॉक्टर ने कहा लक्की हो! क्यों?', opts:['नया जीवन मिलेगा','पुराने दर्द भूल गए','दूसरा इंसान बन गए','कुछ नहीं'], ans:'पुराने दर्द भूल गए', hint:'भूलने की बीमारी...'},
    {cat:'funny', icon:'🤣', q:'बकरी ने 5 बार में-में किया। यह क्या था?', opts:['नमाज़','नाश्ता माँगा','गाना गाया','गया'], ans:'नाश्ता माँगा', hint:'भूख लगी थी...'},

    // ── देसी ──
    {cat:'desi', icon:'🌾', q:'खेत में उगती है, मुँह में जाती है, दाँत चबाते हैं। क्या है?', opts:['गन्ना','गेहूँ','मक्का','चावल'], ans:'गन्ना', hint:'जूस निकालते हैं इससे...'},
    {cat:'desi', icon:'🐄', q:'गाँव की माँ दूध देती है, पर वह इंसान नहीं। क्या है?', opts:['भैंस','गाय','बकरी','ऊँट'], ans:'गाय', hint:'पूजा भी होती है इसकी...'},
    {cat:'desi', icon:'🏺', q:'मिट्टी से बना, पानी रखता है, ठंडा करता है। क्या है?', opts:['घड़ा','बर्तन','बाल्टी','टब'], ans:'घड़ा', hint:'गाँव में आम है...'},
    {cat:'desi', icon:'🌽', q:'पीला-पीला, दंतेदार, एक में सौ दाने। क्या है?', opts:['मक्का','अनानास','गन्ना','केला'], ans:'मक्का', hint:'भुट्टा भी कहते हैं...'},
    {cat:'desi', icon:'🐓', q:'सुबह उठता है, सबको जगाता है, पर सोने नहीं देता। क्या है?', opts:['मुर्गा','बिल्ली','कुत्ता','घड़ी'], ans:'मुर्गा', hint:'गाँव का अलार्म क्लॉक...'},
    {cat:'desi', icon:'🪣', q:'गिरती है तो भी नहीं टूटती, उछलती है तो भी नहीं टूटती, पानी से भरी रहती है। क्या है?', opts:['नदी','तालाब','कुआँ','सरोवर'], ans:'नदी', hint:'बह चली जाती है...'},
    {cat:'desi', icon:'🌳', q:'गाँव में छाया देता है, आम देता है, घर में लाता है। क्या है?', opts:['आम का पेड़','नीम','पीपल','तुलसी'], ans:'आम का पेड़', hint:'फलों का राजा...'},
    {cat:'desi', icon:'🔥', q:'चूल्हे में जलती है, खाना पकाती है, हाथ से नहीं छुआ जाता। क्या है?', opts:['आग','लकड़','कोयला','केरोसीन'], ans:'आग', hint:'ऊर्जा का रूप है...'},
    {cat:'desi', icon:'🎶', q:'ढोलक बजती है, गाने होते हैं, मेहमान आते हैं। क्या है?', opts:['शादी','मेला','तीज','दीवाली'], ans:'शादी', hint:'बार-बार नहीं होती...'},
    {cat:'desi', icon:'🐂', q:'किसान का दोस्त, खेत जोतता है, सीधा चलाता है। क्या है?', opts:['बैल','घोड़ा','खर','हाथी'], ans:'बैल', hint:'हलवाहे के साथ...'},

    // ── तार्किक ──
    {cat:'logical', icon:'🧠', q:'एक कमरे में 3 बिजली के बल्ब हैं। बाहर 3 स्विच हैं। एक बार अंदर जाओगे। पता करो कौन सा स्विच कौन सा बल्ब जलाता है?', opts:['तीन बार जाकर चेक करो','एक बल्ब ऑन करो, एक गर्म करो, एक बंद रखो','तीनों स्विच एक साथ ऑन करो','अंदाज़ा लगाओ'], ans:'एक बल्ब ऑन करो, एक गर्म करो, एक बंद रखो', hint:'भौतिकी का उपयोग करो...'},
    {cat:'logical', icon:'🔢', q:'1, 2, 3, 5, 8, 13... अगला नंबर क्या होगा?', opts:['18','20','21','25'], ans:'21', hint:'फिबोनाची अनुक्रम...'},
    {cat:'logical', icon:'🚢', q:'एक नाव में 10 भेड़ें हैं। 2 नीचे गिरीं। नाव के कप्तान की उम्र कितनी है?', opts:['10','8','पता नहीं','40'], ans:'पता नहीं', hint:'ध्यान से पढ़ो...'},
    {cat:'logical', icon:'🐌', q:'एक घोंघा 10 मीटर गहरे कुएँ में है। रोज़ 3 मीटर चढ़ता है, रात में 2 मीटर फिसलता है। कितने दिन में बाहर आएगा?', opts:['8 दिन','10 दिन','9 दिन','7 दिन'], ans:'8 दिन', hint:'आखिरी दिन नहीं फिसलेगा...'},
    {cat:'logical', icon:'🎯', q:'100 से 1 तक गिनोगे, कितनी बार "9" आएगा?', opts:['10','11','20','21'], ans:'20', hint:'9,19,29...90,91...99...'},
    {cat:'logical', icon:'⚖️', q:'माँ 21 साल बड़ी है अपनी बेटी से। 6 साल में माँ तीन गुना होगी। बेटी की अभी की उम्र?', opts:['1.5 साल','2 साल','3 साल','4 साल'], ans:'1.5 साल', hint:'बीजगणित सुलझाओ...'},
    {cat:'logical', icon:'🎲', q:'सिक्का उछालो — 5 बार हेड्स लगे। अब टेल्स की प्रायिकता क्या है?', opts:['50%','100%','25%','75%'], ans:'50%', hint:'हर उछाल स्वतंत्र है...'},
    {cat:'logical', icon:'🧮', q:'1 से 10 तक के नंबरों का योग क्या होगा?', opts:['50','55','45','60'], ans:'55', hint:'गॉस फॉर्मूला...'},
    {cat:'logical', icon:'👨‍👩‍👧', q:'एक आदमी की दो बेटियाँ हैं, दोनों की माँ एक ही है। पर वे जुड़वाँ नहीं हैं। कैसे?', opts:['एक सौतेली है','तीन बच्चे हैं','तीन बच्चों में से दो हैं','गलत बात है'], ans:'तीन बच्चों में से दो हैं', hint:'जुड़वाँ के सिवा...'},
    {cat:'logical', icon:'🪙', q:'3 सिक्के हैं, जो 60 पैसे बनाते हैं, एक सिक्का 5 पैसे नहीं है। कैसे?', opts:['25+25+10','50+5+5','55+3+2','20+20+20'], ans:'25+25+10', hint:'एक 5 पैसे नहीं, बाकी हो सकते हैं...'},

    // ── कठिन ──
    {cat:'hard', icon:'💀', q:'मैं वह हूँ जो तुम सोचते हो वह मेरा नाम है, पर जो तुम बोलते हो वह मेरा नाम नहीं। क्या हूँ मैं?', opts:['खामोशी','खाली जगह','रहस्य','सोच'], ans:'खामोशी', hint:'आवाज़ नहीं है इसके पास...'},
    {cat:'hard', icon:'🌀', q:'जितना ज़्यादा सुखाते हो, उतना भीगा होता जाता है। क्या है?', opts:['तौलिया','कपड़ा','आँसू','बाल'], ans:'तौलिया', hint:'नहाने के बाद उपयोग होता है...'},
    {cat:'hard', icon:'⬛', q:'काला था, सफेद बना, लाल हो गया। क्या है?', opts:['अंगार','कोयला','लोहा','पत्थर'], ans:'अंगार', hint:'आग में डालो...'},
    {cat:'hard', icon:'🏠', q:'एक घर में चार दीवारें हैं, सब दक्षिण दिशा में हैं। अगर भालू बाहर घूम रहा है, तो भालू का रंग क्या है?', opts:['भूरा','काला','सफेद','पीला'], ans:'सफेद', hint:'यह घर उत्तरी ध्रुव पर है...'},
    {cat:'hard', icon:'🗿', q:'जब मैं जवान था ऊँचा था, जब मैं बूढ़ा हुआ छोटा हुआ। क्या हूँ मैं?', opts:['मोमबत्ती','पेड़','इंसान','पहाड़'], ans:'मोमबत्ती', hint:'रोशनी देता है...'},
    {cat:'hard', icon:'⚡', q:'बिजली चमकी, आवाज़ आई। लेकिन बिजली पहले क्यों दिखी?', opts:['आँख कान से तेज़ है','रोशनी आवाज़ से तेज़ है','बिजली पास थी','कोई कारण नहीं'], ans:'रोशनी आवाज़ से तेज़ है', hint:'भौतिकी — प्रकाश की गति...'},
    {cat:'hard', icon:'🌌', q:'आसमान में करोड़ तारे हैं, पर एक भी छू नहीं सकते। सबसे पास का तारा कौन?', opts:['ध्रुव तारा','सीरियस','सूर्य','अल्फा सेंटॉरी'], ans:'सूर्य', hint:'दिन में दिखता है...'},
    {cat:'hard', icon:'🔐', q:'हर कोई इसे इस्तेमाल करता है, पर कभी share नहीं करता, हमेशा personal रहता है। क्या है?', opts:['टूथब्रश','पासवर्ड','सपने','नाम'], ans:'टूथब्रश', hint:'स्वच्छता की बात है...'},
    {cat:'hard', icon:'🌑', q:'मैं हूँ पर हूँ नहीं, दिखा पर दिख नहीं, आया पर गया नहीं। क्या हूँ?', opts:['परछाईं','सोच','अक्स','सपना'], ans:'अक्स', hint:'दर्पण में दिखता है...'},
    {cat:'hard', icon:'⏳', q:'मैं था, अभी भी हूँ, और रहूँगा। पर मैं कुछ नहीं हूँ। क्या हूँ मैं?', opts:['समय','खाली जगह','अंधेरा','खामोशी'], ans:'समय', hint:'दार्शनिक जवाब ढूँढो...'},
  ]
};
