/* ══════════════════════════════════════════
   QUESTION DATABASE — 110 QUESTIONS
   Types: 'mcq' | 'flag' | 'map' | 'hist'
   Map questions include mapRegion, mapEmo, showHighlight
   Future: add mapImgUrl for real map images
══════════════════════════════════════════ */
const QB = [

  /* ════════ EASY — World Capitals ════════ */
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇫🇷',q:'What is the capital of France?',a:'Paris',opts:['Paris','Lyon','Marseille','Bordeaux']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇯🇵',q:'What is the capital of Japan?',a:'Tokyo',opts:['Osaka','Kyoto','Tokyo','Hiroshima']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇩🇪',q:'What is the capital of Germany?',a:'Berlin',opts:['Munich','Hamburg','Berlin','Frankfurt']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇮🇹',q:'What is the capital of Italy?',a:'Rome',opts:['Milan','Naples','Venice','Rome']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇺🇸',q:'What is the capital of the United States?',a:'Washington D.C.',opts:['New York','Los Angeles','Washington D.C.','Chicago']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇬🇧',q:'What is the capital of the United Kingdom?',a:'London',opts:['Manchester','London','Birmingham','Liverpool']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇨🇳',q:'What is the capital of China?',a:'Beijing',opts:['Shanghai','Beijing','Guangzhou','Shenzhen']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇧🇷',q:'What is the capital of Brazil?',a:'Brasília',opts:['São Paulo','Rio de Janeiro','Brasília','Salvador']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇦🇺',q:'What is the capital of Australia?',a:'Canberra',opts:['Sydney','Melbourne','Canberra','Brisbane']},
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇨🇦',q:'What is the capital of Canada?',a:'Ottawa',opts:['Toronto','Vancouver','Ottawa','Montreal']},

  /* ════════ EASY — Flag Identification ════════ */
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇮🇳',q:'Which country does this flag belong to?',a:'India',opts:['Pakistan','India','Bangladesh','Nepal']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇧🇷',q:'Which country does this flag belong to?',a:'Brazil',opts:['Colombia','Brazil','Ecuador','Venezuela']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇯🇵',q:'A red circle on white background — which country?',a:'Japan',opts:['Bangladesh','Japan','Palau','Georgia']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇨🇦',q:'Which country has a red maple leaf on its flag?',a:'Canada',opts:['Denmark','Canada','Switzerland','Austria']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇺🇸',q:'Which country has 50 stars on its flag?',a:'USA',opts:['Australia','USA','New Zealand','Liberia']},

  /* ════════ EASY — Country Identification ════════ */
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the Land of the Rising Sun?',a:'Japan',opts:['China','Japan','South Korea','Thailand']},
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is the largest in the world by area?',a:'Russia',opts:['Canada','USA','Russia','China']},
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country has the Great Wall?',a:'China',opts:['China','Mongolia','Japan','Korea']},
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is famous for the Eiffel Tower?',a:'France',opts:['Italy','France','Spain','Germany']},
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the Land of Kangaroos?',a:'Australia',opts:['New Zealand','Australia','South Africa','Brazil']},

  /* ════════ EASY — Indian Geography ════════ */
  {cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of India?',a:'New Delhi',opts:['Mumbai','New Delhi','Kolkata','Chennai']},
  {cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which is the longest river in India?',a:'Ganga',opts:['Yamuna','Brahmaputra','Ganga','Godavari']},
  {cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which Indian state has the largest area?',a:'Rajasthan',opts:['Maharashtra','Uttar Pradesh','Rajasthan','Madhya Pradesh']},
  {cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which city is the financial capital of India?',a:'Mumbai',opts:['Delhi','Mumbai','Kolkata','Hyderabad']},
  {cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'How many states does India currently have?',a:'28',opts:['26','27','28','29']},

  /* ════════ EASY — Continents & Oceans ════════ */
  {cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'How many continents are there on Earth?',a:'7',opts:['5','6','7','8']},
  {cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the largest ocean in the world?',a:'Pacific Ocean',opts:['Atlantic Ocean','Pacific Ocean','Indian Ocean','Arctic Ocean']},
  {cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the smallest continent?',a:'Australia',opts:['Antarctica','Australia','Europe','South America']},
  {cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which continent is called the "Dark Continent"?',a:'Africa',opts:['South America','Africa','Asia','Antarctica']},
  {cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which ocean is to the east of India?',a:'Bay of Bengal',opts:['Arabian Sea','Bay of Bengal','Indian Ocean','Pacific Ocean']},

  /* ════════ MEDIUM — World Capitals ════════ */
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇹🇷',q:'What is the capital of Turkey?',a:'Ankara',opts:['Istanbul','Ankara','Izmir','Bursa']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇿🇦',q:'What is the executive capital of South Africa?',a:'Pretoria',opts:['Cape Town','Johannesburg','Pretoria','Durban']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇦🇷',q:'What is the capital of Argentina?',a:'Buenos Aires',opts:['Córdoba','Buenos Aires','Rosario','Mendoza']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇳🇬',q:'What is the capital of Nigeria?',a:'Abuja',opts:['Lagos','Kano','Abuja','Ibadan']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇳🇿',q:'What is the capital of New Zealand?',a:'Wellington',opts:['Auckland','Christchurch','Wellington','Hamilton']},

  /* ════════ MEDIUM — State Identification ════════ */
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which state is known as the "Land of Five Rivers"?',a:'Punjab',opts:['Haryana','Punjab','Himachal Pradesh','Uttarakhand']},
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is the largest producer of tea?',a:'Assam',opts:['West Bengal','Assam','Darjeeling','Tamil Nadu']},
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Jaipur is the capital of which Indian state?',a:'Rajasthan',opts:['Madhya Pradesh','Rajasthan','Gujarat','Haryana']},
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which state is called the "Gateway to Northeast India"?',a:'Assam',opts:['Manipur','Assam','Nagaland','Sikkim']},
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state has the longest coastline?',a:'Gujarat',opts:['Maharashtra','Andhra Pradesh','Gujarat','Tamil Nadu']},

  /* ════════ MEDIUM — Rivers ════════ */
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which is the longest river in the world?',a:'Nile',opts:['Amazon','Nile','Yangtze','Mississippi']},
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'The Amazon River flows through which continent?',a:'South America',opts:['Africa','South America','North America','Asia']},
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river is known as the "Sorrow of China"?',a:'Huang He (Yellow River)',opts:['Yangtze','Huang He (Yellow River)','Pearl River','Mekong']},
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Where does the Ganga River originate?',a:'Gangotri Glacier',opts:['Yamunotri','Gangotri Glacier','Manasarovar','Rohtang Pass']},
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river forms the natural border between USA and Mexico?',a:'Rio Grande',opts:['Colorado','Rio Grande','Mississippi','Missouri']},

  /* ════════ MEDIUM — Monuments ════════ */
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Eiffel Tower is located in which city?',a:'Paris',opts:['London','Paris','Rome','Berlin']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Colosseum is in which city?',a:'Rome',opts:['Athens','Rome','Cairo','Madrid']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Taj Mahal is located in which city?',a:'Agra',opts:['Delhi','Mumbai','Jaipur','Agra']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Burj Khalifa is located in which city?',a:'Dubai',opts:['Riyadh','Abu Dhabi','Dubai','Doha']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'Machu Picchu is in which country?',a:'Peru',opts:['Bolivia','Ecuador','Peru','Chile']},

  /* ════════ MEDIUM — Flag Identification ════════ */
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇿🇦',q:'Which country does this flag belong to?',a:'South Africa',opts:['South Africa','Zimbabwe','Mozambique','Kenya']},
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇬🇷',q:'Blue and white horizontal stripes with a cross — which country?',a:'Greece',opts:['Uruguay','Greece','Finland','Sweden']},
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇦🇺',q:'Which flag features the Southern Cross and Union Jack?',a:'Australia',opts:['New Zealand','Australia','Fiji','Tuvalu']},
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇨🇭',q:'A square flag with a white cross — which country?',a:'Switzerland',opts:['Austria','Switzerland','Denmark','Malta']},
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇳🇴',q:'Which Scandinavian country does this flag belong to?',a:'Norway',opts:['Sweden','Norway','Denmark','Finland']},

  /* ════════ MEDIUM — Map Based ════════ */
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Southeast Asia',mapHint:'Country highlighted on the Indochina Peninsula',q:'Which country is highlighted on the map between Thailand and Vietnam?',a:'Cambodia',opts:['Laos','Cambodia','Myanmar','Malaysia']},
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'South America',mapHint:'Largest country by area in South America',q:'Which is the largest country shown on the South American map?',a:'Brazil',opts:['Argentina','Brazil','Peru','Colombia']},
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Indian Subcontinent',mapHint:'Island nation south of India',q:'Which island country lies just south of India on the map?',a:'Sri Lanka',opts:['Maldives','Sri Lanka','Lakshadweep','Andaman Islands']},
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Africa',mapHint:'Northernmost country in Africa',q:'Which country is at the northern tip of Africa on the map?',a:'Tunisia',opts:['Egypt','Morocco','Algeria','Tunisia']},
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Europe',mapHint:'Boot-shaped country in Southern Europe',q:'Which country in Europe is famously boot-shaped?',a:'Italy',opts:['Spain','Italy','Greece','Portugal']},

  /* ════════ HARD — Indian Geography ════════ */
  {cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian city is known as the "City of Lakes"?',a:'Udaipur',opts:['Jaipur','Bhopal','Udaipur','Srinagar']},
  {cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'The Dudhsagar Falls is in which Indian state?',a:'Goa',opts:['Kerala','Karnataka','Goa','Maharashtra']},
  {cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which is the smallest state of India by area?',a:'Goa',opts:['Sikkim','Tripura','Goa','Nagaland']},
  {cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'The Loktak Lake, the largest freshwater lake in NE India, is in which state?',a:'Manipur',opts:['Assam','Nagaland','Manipur','Meghalaya']},
  {cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state shares borders with the maximum number of other states?',a:'Uttar Pradesh',opts:['Madhya Pradesh','Rajasthan','Uttar Pradesh','Maharashtra']},

  /* ════════ HARD — Indian State Capitals ════════ */
  {cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Telangana?',a:'Hyderabad',opts:['Vijayawada','Hyderabad','Warangal','Karimnagar']},
  {cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Uttarakhand?',a:'Dehradun',opts:['Haridwar','Dehradun','Nainital','Rishikesh']},
  {cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Chhattisgarh?',a:'Raipur',opts:['Bilaspur','Raipur','Bhilai','Durg']},
  {cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Jharkhand?',a:'Ranchi',opts:['Jamshedpur','Dhanbad','Ranchi','Bokaro']},
  {cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Sikkim?',a:'Gangtok',opts:['Pelling','Namchi','Gangtok','Ravangla']},

  /* ════════ HARD — World Geography ════════ */
  {cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which country is known as the "Roof of the World"?',a:'Tibet (China)',opts:['Nepal','Bhutan','Tibet (China)','Afghanistan']},
  {cat:'World Geography',type:'mcq',diff:'hard',flag:'🌊',q:'Which strait separates Europe from Africa?',a:'Strait of Gibraltar',opts:['Strait of Malacca','Strait of Gibraltar','Bering Strait','Strait of Hormuz']},
  {cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which country has the most time zones?',a:'France',opts:['USA','Russia','France','UK']},
  {cat:'World Geography',type:'mcq',diff:'hard',flag:'⛰️',q:'What is the name of the deepest point in the ocean?',a:'Challenger Deep',opts:['Mariana Trench','Challenger Deep','Puerto Rico Trench','Java Trench']},
  {cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which African country has the largest area?',a:'Algeria',opts:['Sudan','DR Congo','Libya','Algeria']},

  /* ════════ HARD — Mountains ════════ */
  {cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which is the highest mountain in the world?',a:'Mount Everest',opts:['K2','Kangchenjunga','Mount Everest','Makalu']},
  {cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which is the longest mountain range in the world?',a:'Andes',opts:['Himalayas','Andes','Rockies','Alps']},
  {cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Mount Kilimanjaro is in which country?',a:'Tanzania',opts:['Kenya','Tanzania','Uganda','Ethiopia']},
  {cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which mountain range separates Europe from Asia?',a:'Ural Mountains',opts:['Alps','Caucasus','Ural Mountains','Carpathians']},
  {cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Mauna Kea in Hawaii is considered the tallest mountain from its base. It rises from where?',a:'Ocean floor',opts:['Sea level','Ocean floor','Underground','Plateau']},

  /* ════════ HARD — History & Geography Combined ════════ */
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Carthage was located in present-day which country?',a:'Tunisia',opts:['Libya','Tunisia','Algeria','Morocco']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Battle of Plassey (1757) was fought in which present-day Indian state?',a:'West Bengal',opts:['Bihar','West Bengal','Odisha','Jharkhand']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient Silk Road connected China to which city in the west?',a:'Istanbul (Constantinople)',opts:['Rome','Cairo','Istanbul (Constantinople)','Athens']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Indus Valley Civilization flourished in which present-day countries?',a:'India & Pakistan',opts:['India & Afghanistan','India & Pakistan','Pakistan & Iran','India & Bangladesh']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The city of Harappa is located in present-day which country?',a:'Pakistan',opts:['India','Pakistan','Afghanistan','Iran']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which ocean did Vasco da Gama cross to reach India in 1498?',a:'Indian Ocean',opts:['Atlantic Ocean','Indian Ocean','Pacific Ocean','Southern Ocean']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Troy was located in present-day which country?',a:'Turkey',opts:['Greece','Turkey','Bulgaria','Romania']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which country was formerly known as Persia?',a:'Iran',opts:['Iraq','Iran','Turkey','Syria']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The First Battle of Panipat was fought in which present-day Indian state?',a:'Haryana',opts:['Punjab','Delhi','Haryana','Uttar Pradesh']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Ceylon is the former name of which country?',a:'Sri Lanka',opts:['Maldives','Bangladesh','Sri Lanka','Myanmar']},

  /* ════════ HARD — Map Based ════════ */
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Central Asia',mapHint:'Landlocked country ending in "-stan"',q:'Which is the largest landlocked country in the world?',a:'Kazakhstan',opts:['Mongolia','Kazakhstan','Uzbekistan','Turkmenistan']},
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Middle East',mapHint:'Peninsula in Southwest Asia',q:'Which is the largest peninsula in the world shown on the Middle East map?',a:'Arabian Peninsula',opts:['Iberian Peninsula','Arabian Peninsula','Indian Subcontinent','Scandinavia']},
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Northeast India',mapHint:'7 sisters of Northeast India',q:'Which of these states is NOT one of the "Seven Sisters" of Northeast India?',a:'Sikkim',opts:['Manipur','Meghalaya','Sikkim','Mizoram']},
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Indian Ocean',mapHint:'Island nation west of India',q:'Which is the island nation located west of India in the Arabian Sea?',a:'Maldives',opts:['Sri Lanka','Lakshadweep','Maldives','Seychelles']},
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'North Africa & Middle East',mapHint:'Suez Canal location',q:'The Suez Canal connects which two bodies of water?',a:'Red Sea & Mediterranean Sea',opts:['Red Sea & Mediterranean Sea','Black Sea & Caspian Sea','Persian Gulf & Arabian Sea','Atlantic & Pacific Oceans']},

  /* ════════ HARD — Flag Identification ════════ */
  {cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇸🇦',q:'Which country has a flag with an Arabic inscription and sword?',a:'Saudi Arabia',opts:['UAE','Jordan','Saudi Arabia','Iraq']},
  {cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇳🇵',q:'Which country has the only non-rectangular national flag?',a:'Nepal',opts:['Bhutan','Nepal','Sri Lanka','Pakistan']},
  {cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇧🇩',q:'A red disc on green background — which country?',a:'Bangladesh',opts:['Japan','Bangladesh','Palau','Pakistan']},
  {cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇧🇷',q:'Which flag has a green background with a yellow rhombus and blue globe?',a:'Brazil',opts:['Colombia','Brazil','Ecuador','Bolivia']},
  {cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇵🇰',q:'A white crescent and star on green — which country?',a:'Pakistan',opts:['Saudi Arabia','Libya','Malaysia','Pakistan']},

  /* ════════ NEW — Easy: Flag Identification ════════ */
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇳🇬',q:'Which country has a green-white-green vertical stripe flag?',a:'Nigeria',opts:['Nigeria','Ireland','Ivory Coast','Italy']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇩🇪',q:'Which country has a black-red-gold horizontal tricolour flag?',a:'Germany',opts:['Belgium','Germany','Austria','Hungary']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇫🇷',q:'Which country has a blue-white-red vertical tricolour flag?',a:'France',opts:['Netherlands','France','Russia','Luxembourg']},
  {cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇰🇷',q:'Which country has a flag with a yin-yang symbol and four trigrams?',a:'South Korea',opts:['Japan','China','South Korea','Taiwan']},

  /* ════════ NEW — Medium: Flag Identification ════════ */
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇹🇷',q:'Which country has a red flag with a white crescent and star?',a:'Turkey',opts:['Pakistan','Turkey','Tunisia','Libya']},
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇲🇽',q:'Which country has a flag with an eagle holding a snake on a cactus?',a:'Mexico',opts:['Brazil','Bolivia','Mexico','Ecuador']},
  {cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇨🇳',q:'Which country has a red flag with one large and four small yellow stars?',a:'China',opts:['Vietnam','China','North Korea','Laos']},

  /* ════════ NEW — Easy: Map Based ════════ */
  {cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'South Asia',mapHint:'Largest country in South Asia',q:'Which is the largest country in South Asia by area?',a:'India',opts:['Pakistan','India','Bangladesh','Sri Lanka']},
  {cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Africa',mapHint:'Largest continent after Asia',q:'On the world map, which continent appears second-largest after Asia?',a:'Africa',opts:['North America','Europe','Africa','South America']},
  {cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Europe',mapHint:'Small island nation south of Sicily',q:'Which island nation lies south of Sicily on the Mediterranean map?',a:'Malta',opts:['Cyprus','Malta','Sardinia','Corsica']},

  /* ════════ NEW — Medium: Map Based ════════ */
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Northeast India',mapHint:'State bordering China and Bhutan',q:'Which Indian state borders both China and Bhutan on the map?',a:'Arunachal Pradesh',opts:['Sikkim','Assam','Arunachal Pradesh','Nagaland']},
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Indian Peninsula',mapHint:'Southernmost tip of India',q:'Which cape forms the southernmost tip of the Indian mainland on the map?',a:'Cape Comorin (Kanyakumari)',opts:['Cape Calimere','Point Calimere','Cape Comorin (Kanyakumari)','Pamban Island']},
  {cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'East Africa',mapHint:'Country straddling the equator',q:'Which East African country lies exactly on the equator?',a:'Kenya',opts:['Tanzania','Ethiopia','Kenya','Uganda']},

  /* ════════ NEW — Hard: Map Based ════════ */
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Indian Ocean Islands',mapHint:'Volcanic island nation east of Madagascar',q:'Which island nation in the Indian Ocean is known for its vanilla production?',a:'Madagascar',opts:['Comoros','Réunion','Seychelles','Madagascar']},
  {cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Central America',mapHint:'Narrowest point connecting North and South America',q:'Which country contains the Panama Canal linking the Atlantic and Pacific?',a:'Panama',opts:['Colombia','Costa Rica','Nicaragua','Panama']},

  /* ════════ NEW — Hard: History & Geography ════════ */
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Mohenjo-daro is located in present-day which country?',a:'Pakistan',opts:['India','Pakistan','Afghanistan','Bangladesh']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which river was central to the ancient Egyptian civilization?',a:'Nile',opts:['Euphrates','Tigris','Nile','Congo']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The historic city of Petra is in which present-day country?',a:'Jordan',opts:['Saudi Arabia','Jordan','Lebanon','Syria']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which empire built the famous road network called the \"Royal Road\" from Susa to Sardis?',a:'Persian Empire',opts:['Roman Empire','Persian Empire','Ottoman Empire','Mongol Empire']},

  /* ════════ NEW 20 — Countries ════════ */
  {cat:'Countries',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is the largest in South America by area?',a:'Brazil',opts:['Argentina','Brazil','Peru','Colombia']},
  {cat:'Countries',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is called the "Land of Thousand Lakes"?',a:'Finland',opts:['Sweden','Norway','Finland','Canada']},
  {cat:'Countries',type:'mcq',diff:'medium',flag:'🌍',q:'Which country has the most official languages in the world?',a:'Zimbabwe',opts:['South Africa','India','Zimbabwe','Papua New Guinea']},
  {cat:'Countries',type:'mcq',diff:'hard',flag:'🌍',q:'Which country is both in Europe and Asia?',a:'Russia',opts:['Turkey','Russia','Kazakhstan','Georgia']},

  /* ════════ NEW 20 — Capitals ════════ */
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇷🇺',q:'What is the capital of Russia?',a:'Moscow',opts:['St. Petersburg','Moscow','Kazan','Novosibirsk']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇮🇩',q:'What is the capital of Indonesia?',a:'Jakarta',opts:['Bali','Surabaya','Jakarta','Bandung']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇵🇰',q:'What is the capital of Pakistan?',a:'Islamabad',opts:['Karachi','Lahore','Islamabad','Rawalpindi']},
  {cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇧🇩',q:'What is the capital of Bangladesh?',a:'Dhaka',opts:['Chittagong','Dhaka','Sylhet','Khulna']},

  /* ════════ NEW 20 — Indian States ════════ */
  {cat:'State Identification',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which Indian state is known as "God\'s Own Country"?',a:'Kerala',opts:['Goa','Tamil Nadu','Kerala','Karnataka']},
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which state is the largest producer of sugarcane in India?',a:'Uttar Pradesh',opts:['Maharashtra','Uttar Pradesh','Bihar','Punjab']},
  {cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state has the highest literacy rate?',a:'Kerala',opts:['Goa','Maharashtra','Himachal Pradesh','Kerala']},

  /* ════════ NEW 20 — Indian Capitals ════════ */
  {cat:'Indian State Capitals',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of Maharashtra?',a:'Mumbai',opts:['Pune','Nagpur','Mumbai','Aurangabad']},
  {cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Kerala?',a:'Thiruvananthapuram',opts:['Kochi','Kozhikode','Thrissur','Thiruvananthapuram']},
  {cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Arunachal Pradesh?',a:'Itanagar',opts:['Tawang','Ziro','Itanagar','Pasighat']},

  /* ════════ NEW 20 — Rivers ════════ */
  {cat:'Rivers',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the longest river in Asia?',a:'Yangtze',opts:['Mekong','Yangtze','Huang He','Indus']},
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river flows through the most countries in the world?',a:'Danube',opts:['Rhine','Amazon','Nile','Danube']},

  /* ════════ NEW 20 — Mountains ════════ */
  {cat:'Mountains',type:'mcq',diff:'easy',flag:'⛰️',q:'Which is the highest peak in Africa?',a:'Mount Kilimanjaro',opts:['Mount Kenya','Mount Kilimanjaro','Mount Elgon','Ras Dashen']},
  {cat:'Mountains',type:'mcq',diff:'medium',flag:'⛰️',q:'Which mountain range runs along India\'s northern border?',a:'Himalayas',opts:['Vindhyas','Satpuras','Western Ghats','Himalayas']},

  /* ════════ NEW 20 — Oceans & Continents ════════ */
  {cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the smallest ocean in the world?',a:'Arctic Ocean',opts:['Southern Ocean','Indian Ocean','Arctic Ocean','Atlantic Ocean']},
  {cat:'Continents & Oceans',type:'mcq',diff:'medium',flag:'🌍',q:'Which continent has no permanent human population?',a:'Antarctica',opts:['Arctic','Antarctica','Greenland','Iceland']},

  /* ════════ EXTRA 20 — Countries ════════ */
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the "Land of Thousand Lakes"?',a:'Finland',opts:['Sweden','Norway','Finland','Canada']},
  {cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the smallest country in the world by area?',a:'Vatican City',opts:['Monaco','San Marino','Vatican City','Liechtenstein']},
  {cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which country is both a continent and a country?',a:'Australia',opts:['Greenland','Australia','Antarctica','New Zealand']},
  {cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which country has the most natural lakes in the world?',a:'Canada',opts:['Russia','Finland','Canada','USA']},
  {cat:'Country Identification',type:'mcq',diff:'hard',flag:'🌍',q:'Which country has the longest coastline in the world?',a:'Canada',opts:['Russia','Norway','Indonesia','Canada']},

  /* ════════ EXTRA 20 — Capitals ════════ */
  {cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇪🇸',q:'What is the capital of Spain?',a:'Madrid',opts:['Barcelona','Seville','Valencia','Madrid']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇮🇩',q:'What is the capital of Indonesia?',a:'Jakarta',opts:['Bali','Surabaya','Jakarta','Bandung']},
  {cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇵🇭',q:'What is the capital of the Philippines?',a:'Manila',opts:['Cebu','Davao','Manila','Quezon City']},
  {cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇰🇿',q:'What is the capital of Kazakhstan?',a:'Astana',opts:['Almaty','Astana','Bishkek','Tashkent']},
  {cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇪🇹',q:'What is the capital of Ethiopia?',a:'Addis Ababa',opts:['Nairobi','Khartoum','Addis Ababa','Djibouti']},

  /* ════════ EXTRA 20 — Indian States & Capitals ════════ */
  {cat:'Indian State Capitals',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of Maharashtra?',a:'Mumbai',opts:['Pune','Nagpur','Mumbai','Nashik']},
  {cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Kerala?',a:'Thiruvananthapuram',opts:['Kochi','Kozhikode','Thiruvananthapuram','Thrissur']},
  {cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is the largest producer of spices?',a:'Kerala',opts:['Karnataka','Andhra Pradesh','Kerala','Tamil Nadu']},
  {cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'The Chilika Lake, the largest coastal lagoon in India, is in which state?',a:'Odisha',opts:['West Bengal','Andhra Pradesh','Odisha','Tamil Nadu']},
  {cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state is called the "Rice Bowl of India"?',a:'Andhra Pradesh',opts:['Punjab','West Bengal','Andhra Pradesh','Tamil Nadu']},

  /* ════════ EXTRA 20 — Rivers ════════ */
  {cat:'Rivers',type:'mcq',diff:'easy',flag:'🌊',q:'Which river is called the "Lifeline of Egypt"?',a:'Nile',opts:['Congo','Niger','Zambezi','Nile']},
  {cat:'Rivers',type:'mcq',diff:'medium',flag:'🇮🇳',q:'On the banks of which river is the city of Varanasi situated?',a:'Ganga',opts:['Yamuna','Ganga','Godavari','Saraswati']},

  /* ════════ EXTRA 20 — Mountains & Oceans ════════ */
  {cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which is the highest peak in South America?',a:'Aconcagua',opts:['Mount Fitz Roy','Aconcagua','Chimborazo','Huascarán']},
  {cat:'Continents & Oceans',type:'mcq',diff:'hard',flag:'🌊',q:'Which ocean is completely surrounded by land in the Northern Hemisphere?',a:'Arctic Ocean',opts:['Indian Ocean','Pacific Ocean','Arctic Ocean','Southern Ocean']},
  /* ════════ NEW — Monuments (Easy) ════════ */
  {cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Statue of Liberty is located in which U.S. city?',a:'New York',opts:['Boston','New York','Philadelphia','Washington D.C.']},
  {cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Great Sphinx is located near which ancient structure?',a:'Great Pyramid of Giza',opts:['Colosseum','Great Pyramid of Giza','Taj Mahal','Parthenon']},
  {cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'Big Ben is a famous landmark in which city?',a:'London',opts:['Paris','London','Berlin','Rome']},

  /* ════════ NEW — Monuments (Medium) ════════ */
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Colosseum was built in which ancient city?',a:'Rome',opts:['Athens','Carthage','Rome','Alexandria']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'Angkor Wat temple complex is in which country?',a:'Cambodia',opts:['Thailand','Vietnam','Cambodia','Myanmar']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Alhambra palace and fortress is located in which country?',a:'Spain',opts:['Portugal','Morocco','Spain','Italy']},
  {cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'Stonehenge is located in which country?',a:'England',opts:['Ireland','Scotland','Wales','England']},

  /* ════════ NEW — Monuments (Hard) ════════ */
  {cat:'Monuments',type:'mcq',diff:'hard',flag:'🏛️',q:'The Moai statues are found on which island?',a:'Easter Island',opts:['Hawaii','Easter Island','Fiji','Tahiti']},
  {cat:'Monuments',type:'mcq',diff:'hard',flag:'🏛️',q:'Borobudur, the world\'s largest Buddhist temple, is in which country?',a:'Indonesia',opts:['Thailand','Cambodia','India','Indonesia']},

  /* ════════ NEW — History & Geography Combined (Medium) ════════ */
  {cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'Which ancient civilization built the Machu Picchu citadel?',a:'Inca',opts:['Maya','Aztec','Inca','Olmec']},
  {cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'The Tropic of Cancer passes through how many Indian states?',a:'8',opts:['6','8','10','12']},
  {cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'Which sea route did Columbus accidentally discover while seeking India?',a:'Route to the Americas',opts:['Route to Africa','Route to the Americas','Route to Australia','Route to China']},

  /* ════════ NEW — World History Related Geography (Hard) ════════ */
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Babylon was located in present-day which country?',a:'Iraq',opts:['Syria','Iran','Iraq','Jordan']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which mountain was considered the home of the gods in ancient Greek mythology?',a:'Mount Olympus',opts:['Mount Parnassus','Mount Olympus','Mount Etna','Mount Athos']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Magna Carta was signed near which river in England?',a:'Thames',opts:['Severn','Thames','Avon','Mersey']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Timbuktu, a major historical centre of Islamic learning, is in which country?',a:'Mali',opts:['Niger','Senegal','Mali','Mauritania']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient trade city of Palmyra was located in present-day which country?',a:'Syria',opts:['Iraq','Jordan','Syria','Lebanon']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which is the oldest continuously inhabited city in the world?',a:'Damascus',opts:['Jericho','Damascus','Varanasi','Athens']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Vasco da Gama arrived in Kozhikode (Calicut) in 1498. In which Indian state is it?',a:'Kerala',opts:['Goa','Karnataka','Tamil Nadu','Kerala']},
  {cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The historic Khyber Pass connects which two present-day countries?',a:'Pakistan & Afghanistan',opts:['India & Pakistan','Pakistan & Afghanistan','Afghanistan & Iran','China & Afghanistan']},

];
