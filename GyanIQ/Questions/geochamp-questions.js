/* ══════════════════════════════════════════
   QUESTION DATABASE — 300 QUESTIONS
   Types: 'mcq' | 'flag' | 'map' | 'hist'
   Every question has a unique 'id' (gc_0001...) for no-repeat rotation.
   Map questions include mapRegion, mapEmo, mapHint
══════════════════════════════════════════ */
const QB = [

  /* ════════ World Capitals ════════ */
  {id:'gc_0001',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇫🇷',q:'What is the capital of France?',a:'Paris',opts:['Paris','Lyon','Marseille','Bordeaux']},
  {id:'gc_0002',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇯🇵',q:'What is the capital of Japan?',a:'Tokyo',opts:['Osaka','Kyoto','Tokyo','Hiroshima']},
  {id:'gc_0003',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇩🇪',q:'What is the capital of Germany?',a:'Berlin',opts:['Munich','Hamburg','Berlin','Frankfurt']},
  {id:'gc_0004',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇮🇹',q:'What is the capital of Italy?',a:'Rome',opts:['Milan','Naples','Venice','Rome']},
  {id:'gc_0005',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇺🇸',q:'What is the capital of the United States?',a:'Washington D.C.',opts:['New York','Los Angeles','Washington D.C.','Chicago']},
  {id:'gc_0006',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇬🇧',q:'What is the capital of the United Kingdom?',a:'London',opts:['Manchester','London','Birmingham','Liverpool']},
  {id:'gc_0007',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇨🇳',q:'What is the capital of China?',a:'Beijing',opts:['Shanghai','Beijing','Guangzhou','Shenzhen']},
  {id:'gc_0008',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇧🇷',q:'What is the capital of Brazil?',a:'Brasília',opts:['São Paulo','Rio de Janeiro','Brasília','Salvador']},
  {id:'gc_0009',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇦🇺',q:'What is the capital of Australia?',a:'Canberra',opts:['Sydney','Melbourne','Canberra','Brisbane']},
  {id:'gc_0010',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇨🇦',q:'What is the capital of Canada?',a:'Ottawa',opts:['Toronto','Vancouver','Ottawa','Montreal']},
  {id:'gc_0011',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇹🇷',q:'What is the capital of Turkey?',a:'Ankara',opts:['Istanbul','Ankara','Izmir','Bursa']},
  {id:'gc_0012',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇿🇦',q:'What is the executive capital of South Africa?',a:'Pretoria',opts:['Cape Town','Johannesburg','Pretoria','Durban']},
  {id:'gc_0013',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇦🇷',q:'What is the capital of Argentina?',a:'Buenos Aires',opts:['Córdoba','Buenos Aires','Rosario','Mendoza']},
  {id:'gc_0014',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇳🇬',q:'What is the capital of Nigeria?',a:'Abuja',opts:['Lagos','Kano','Abuja','Ibadan']},
  {id:'gc_0015',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇳🇿',q:'What is the capital of New Zealand?',a:'Wellington',opts:['Auckland','Christchurch','Wellington','Hamilton']},
  {id:'gc_0016',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇷🇺',q:'What is the capital of Russia?',a:'Moscow',opts:['St. Petersburg','Moscow','Kazan','Novosibirsk']},
  {id:'gc_0017',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇮🇩',q:'What is the capital of Indonesia?',a:'Jakarta',opts:['Bali','Surabaya','Jakarta','Bandung']},
  {id:'gc_0018',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇵🇰',q:'What is the capital of Pakistan?',a:'Islamabad',opts:['Karachi','Lahore','Islamabad','Rawalpindi']},
  {id:'gc_0019',cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇧🇩',q:'What is the capital of Bangladesh?',a:'Dhaka',opts:['Chittagong','Dhaka','Sylhet','Khulna']},
  {id:'gc_0020',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇪🇸',q:'What is the capital of Spain?',a:'Madrid',opts:['Barcelona','Seville','Valencia','Madrid']},
  {id:'gc_0021',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇵🇭',q:'What is the capital of the Philippines?',a:'Manila',opts:['Cebu','Davao','Manila','Quezon City']},
  {id:'gc_0022',cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇰🇿',q:'What is the capital of Kazakhstan?',a:'Astana',opts:['Almaty','Astana','Bishkek','Tashkent']},
  {id:'gc_0023',cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇪🇹',q:'What is the capital of Ethiopia?',a:'Addis Ababa',opts:['Nairobi','Khartoum','Addis Ababa','Djibouti']},
  {id:'gc_0024',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇪🇬',q:'What is the capital of Egypt?',a:'Cairo',opts:['Luxor','Cairo','Giza','Alexandria']},
  {id:'gc_0025',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇹🇭',q:'What is the capital of Thailand?',a:'Bangkok',opts:['Pattaya','Chiang Mai','Phuket','Bangkok']},
  {id:'gc_0026',cat:'World Capitals',type:'mcq',diff:'easy',flag:'🇰🇷',q:'What is the capital of South Korea?',a:'Seoul',opts:['Seoul','Incheon','Busan','Daegu']},
  {id:'gc_0027',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇵🇹',q:'What is the capital of Portugal?',a:'Lisbon',opts:['Porto','Lisbon','Madrid','Faro']},
  {id:'gc_0028',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇰🇪',q:'What is the capital of Kenya?',a:'Nairobi',opts:['Kampala','Dodoma','Mombasa','Nairobi']},
  {id:'gc_0029',cat:'World Capitals',type:'mcq',diff:'medium',flag:'🇵🇱',q:'What is the capital of Poland?',a:'Warsaw',opts:['Gdansk','Warsaw','Krakow','Prague']},
  {id:'gc_0030',cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇨🇭',q:'What is the capital of Switzerland?',a:'Bern',opts:['Bern','Basel','Zurich','Geneva']},
  {id:'gc_0031',cat:'World Capitals',type:'mcq',diff:'hard',flag:'🇲🇳',q:'What is the capital of Mongolia?',a:'Ulaanbaatar',opts:['Tashkent','Astana','Ulaanbaatar','Bishkek']},
  /* ════════ Flag Identification ════════ */
  {id:'gc_0032',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇮🇳',q:'Which country does this flag belong to?',a:'India',opts:['Pakistan','India','Bangladesh','Nepal']},
  {id:'gc_0033',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇧🇷',q:'Which country does this flag belong to?',a:'Brazil',opts:['Colombia','Brazil','Ecuador','Venezuela']},
  {id:'gc_0034',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇯🇵',q:'A red circle on white background — which country?',a:'Japan',opts:['Bangladesh','Japan','Palau','Georgia']},
  {id:'gc_0035',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇨🇦',q:'Which country has a red maple leaf on its flag?',a:'Canada',opts:['Denmark','Canada','Switzerland','Austria']},
  {id:'gc_0036',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇺🇸',q:'Which country has 50 stars on its flag?',a:'USA',opts:['Australia','USA','New Zealand','Liberia']},
  {id:'gc_0037',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇿🇦',q:'Which country does this flag belong to?',a:'South Africa',opts:['South Africa','Zimbabwe','Mozambique','Kenya']},
  {id:'gc_0038',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇬🇷',q:'Blue and white horizontal stripes with a cross — which country?',a:'Greece',opts:['Uruguay','Greece','Finland','Sweden']},
  {id:'gc_0039',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇦🇺',q:'Which flag features the Southern Cross and Union Jack?',a:'Australia',opts:['New Zealand','Australia','Fiji','Tuvalu']},
  {id:'gc_0040',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇨🇭',q:'A square flag with a white cross — which country?',a:'Switzerland',opts:['Austria','Switzerland','Denmark','Malta']},
  {id:'gc_0041',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇳🇴',q:'Which Scandinavian country does this flag belong to?',a:'Norway',opts:['Sweden','Norway','Denmark','Finland']},
  {id:'gc_0042',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇸🇦',q:'Which country has a flag with an Arabic inscription and sword?',a:'Saudi Arabia',opts:['UAE','Jordan','Saudi Arabia','Iraq']},
  {id:'gc_0043',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇳🇵',q:'Which country has the only non-rectangular national flag?',a:'Nepal',opts:['Bhutan','Nepal','Sri Lanka','Pakistan']},
  {id:'gc_0044',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇧🇩',q:'A red disc on green background — which country?',a:'Bangladesh',opts:['Japan','Bangladesh','Palau','Pakistan']},
  {id:'gc_0045',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇧🇷',q:'Which flag has a green background with a yellow rhombus and blue globe?',a:'Brazil',opts:['Colombia','Brazil','Ecuador','Bolivia']},
  {id:'gc_0046',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇵🇰',q:'A white crescent and star on green — which country?',a:'Pakistan',opts:['Saudi Arabia','Libya','Malaysia','Pakistan']},
  {id:'gc_0047',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇳🇬',q:'Which country has a green-white-green vertical stripe flag?',a:'Nigeria',opts:['Nigeria','Ireland','Ivory Coast','Italy']},
  {id:'gc_0048',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇩🇪',q:'Which country has a black-red-gold horizontal tricolour flag?',a:'Germany',opts:['Belgium','Germany','Austria','Hungary']},
  {id:'gc_0049',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇫🇷',q:'Which country has a blue-white-red vertical tricolour flag?',a:'France',opts:['Netherlands','France','Russia','Luxembourg']},
  {id:'gc_0050',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇰🇷',q:'Which country has a flag with a yin-yang symbol and four trigrams?',a:'South Korea',opts:['Japan','China','South Korea','Taiwan']},
  {id:'gc_0051',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇹🇷',q:'Which country has a red flag with a white crescent and star?',a:'Turkey',opts:['Pakistan','Turkey','Tunisia','Libya']},
  {id:'gc_0052',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇲🇽',q:'Which country has a flag with an eagle holding a snake on a cactus?',a:'Mexico',opts:['Brazil','Bolivia','Mexico','Ecuador']},
  {id:'gc_0053',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇨🇳',q:'Which country has a red flag with one large and four small yellow stars?',a:'China',opts:['Vietnam','China','North Korea','Laos']},
  {id:'gc_0054',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇮🇹',q:'Which country has a vertical green, white and red tricolour flag?',a:'Italy',opts:['Mexico','Hungary','Italy','Ireland']},
  {id:'gc_0055',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇪🇸',q:'Which country does this flag belong to?',a:'Spain',opts:['Chile','Romania','Portugal','Spain']},
  {id:'gc_0056',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇸🇪',q:'Which country has a blue flag with a yellow Nordic cross?',a:'Sweden',opts:['Denmark','Finland','Sweden','Norway']},
  {id:'gc_0057',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇦🇷',q:'Which country does this flag belong to?',a:'Argentina',opts:['Argentina','Finland','Uruguay','Honduras']},
  {id:'gc_0058',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇪🇬',q:'Which country does this flag belong to?',a:'Egypt',opts:['Iraq','Egypt','Syria','Yemen']},
  {id:'gc_0059',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇷🇺',q:'Which country does this flag belong to?',a:'Russia',opts:['Slovenia','Serbia','Russia','Slovakia']},
  {id:'gc_0060',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇰🇪',q:'Which country does this flag belong to?',a:'Kenya',opts:['Kenya','Zimbabwe','Malawi','Tanzania']},
  {id:'gc_0061',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇹🇭',q:'Which country does this flag belong to?',a:'Thailand',opts:['Cambodia','Thailand','Paraguay','Costa Rica']},
  {id:'gc_0062',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇳🇱',q:'Which country has red, white and blue horizontal stripes on its flag?',a:'Netherlands',opts:['Luxembourg','Paraguay','Netherlands','Croatia']},
  {id:'gc_0063',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇮🇪',q:'Which country has a green, white and orange vertical flag?',a:'Ireland',opts:['Ireland','India','Ivory Coast','Italy']},
  {id:'gc_0064',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇵🇱',q:'White on top, red on the bottom — which country?',a:'Poland',opts:['Latvia','Indonesia','Poland','Monaco']},
  {id:'gc_0065',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇺🇦',q:'Blue over yellow horizontal stripes — which country?',a:'Ukraine',opts:['Sweden','Ukraine','Kazakhstan','Belgium']},
  {id:'gc_0066',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇮🇩',q:'Red on top, white on the bottom — which country?',a:'Indonesia',opts:['Singapore','Monaco','Indonesia','Poland']},
  {id:'gc_0067',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇻🇳',q:'Which country has a red flag with a single yellow star?',a:'Vietnam',opts:['Turkey','Vietnam','China','Morocco']},
  {id:'gc_0068',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇳🇿',q:'Which country does this flag belong to?',a:'New Zealand',opts:['Australia','Fiji','New Zealand','Cook Islands']},
  {id:'gc_0069',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇵🇹',q:'Which country does this flag belong to?',a:'Portugal',opts:['Bulgaria','Spain','Mozambique','Portugal']},
  {id:'gc_0070',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇮🇷',q:'Which country does this flag belong to?',a:'Iran',opts:['Bulgaria','Iran','Hungary','Tajikistan']},
  {id:'gc_0071',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇱🇰',q:'Which country does this flag belong to?',a:'Sri Lanka',opts:['Bangladesh','Bhutan','Maldives','Sri Lanka']},
  {id:'gc_0072',cat:'Flag Identification',type:'flag',diff:'easy',flag:'🇮🇱',q:'Which country has a Star of David on its flag?',a:'Israel',opts:['Greece','Finland','Uruguay','Israel']},
  {id:'gc_0073',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇨🇺',q:'Which country does this flag belong to?',a:'Cuba',opts:['Panama','Cuba','Puerto Rico','Czech Republic']},
  {id:'gc_0074',cat:'Flag Identification',type:'flag',diff:'medium',flag:'🇩🇰',q:'Which country does this flag belong to?',a:'Denmark',opts:['Denmark','Norway','Switzerland','Iceland']},
  {id:'gc_0075',cat:'Flag Identification',type:'flag',diff:'hard',flag:'🇵🇪',q:'Which country has red-white-red vertical stripes on its flag?',a:'Peru',opts:['Austria','Canada','Poland','Peru']},
  /* ════════ Country Identification ════════ */
  {id:'gc_0076',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the Land of the Rising Sun?',a:'Japan',opts:['China','Japan','South Korea','Thailand']},
  {id:'gc_0077',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is the largest in the world by area?',a:'Russia',opts:['Canada','USA','Russia','China']},
  {id:'gc_0078',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country has the Great Wall?',a:'China',opts:['China','Mongolia','Japan','Korea']},
  {id:'gc_0079',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is famous for the Eiffel Tower?',a:'France',opts:['Italy','France','Spain','Germany']},
  {id:'gc_0080',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the Land of Kangaroos?',a:'Australia',opts:['New Zealand','Australia','South Africa','Brazil']},
  {id:'gc_0081',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the "Land of Thousand Lakes"?',a:'Finland',opts:['Sweden','Norway','Finland','Canada']},
  {id:'gc_0082',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the smallest country in the world by area?',a:'Vatican City',opts:['Monaco','San Marino','Vatican City','Liechtenstein']},
  {id:'gc_0083',cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which country is both a continent and a country?',a:'Australia',opts:['Greenland','Australia','Antarctica','New Zealand']},
  {id:'gc_0084',cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which country has the most natural lakes in the world?',a:'Canada',opts:['Russia','Finland','Canada','USA']},
  {id:'gc_0085',cat:'Country Identification',type:'mcq',diff:'hard',flag:'🌍',q:'Which country has the longest coastline in the world?',a:'Canada',opts:['Russia','Norway','Indonesia','Canada']},
  {id:'gc_0086',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the "Land of Fire and Ice"?',a:'Iceland',opts:['Greenland','Iceland','Finland','Norway']},
  {id:'gc_0087',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the "Land of Smiles"?',a:'Thailand',opts:['Philippines','Thailand','Malaysia','Vietnam']},
  {id:'gc_0088',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the "Land of the Pharaohs"?',a:'Egypt',opts:['Egypt','Iraq','Sudan','Libya']},
  {id:'gc_0089',cat:'Country Identification',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is known as the "Emerald Isle"?',a:'Ireland',opts:['New Zealand','Ireland','Iceland','Scotland']},
  {id:'gc_0090',cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which country is known as the "Land of the Thunder Dragon"?',a:'Bhutan',opts:['Myanmar','Mongolia','Nepal','Bhutan']},
  {id:'gc_0091',cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which country is known as the "Land of the Long White Cloud"?',a:'New Zealand',opts:['New Zealand','Ireland','Australia','Fiji']},
  {id:'gc_0092',cat:'Country Identification',type:'mcq',diff:'medium',flag:'🌍',q:'Which is the largest archipelagic country in the world?',a:'Indonesia',opts:['Japan','Maldives','Philippines','Indonesia']},
  {id:'gc_0093',cat:'Country Identification',type:'mcq',diff:'hard',flag:'🌍',q:'Which country is completely surrounded by South Africa?',a:'Lesotho',opts:['Lesotho','Eswatini','Namibia','Botswana']},
  /* ════════ Countries ════════ */
  {id:'gc_0094',cat:'Countries',type:'mcq',diff:'easy',flag:'🌍',q:'Which country is the largest in South America by area?',a:'Brazil',opts:['Argentina','Brazil','Peru','Colombia']},
  {id:'gc_0095',cat:'Countries',type:'mcq',diff:'medium',flag:'🌍',q:'Which is the most populous country in Africa?',a:'Nigeria',opts:['Ethiopia','Nigeria','Egypt','South Africa']},
  {id:'gc_0096',cat:'Countries',type:'mcq',diff:'hard',flag:'🌍',q:'Which country is both in Europe and Asia?',a:'Russia',opts:['Turkey','Russia','Kazakhstan','Georgia']},
  {id:'gc_0097',cat:'Countries',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the largest country in North America by area?',a:'Canada',opts:['USA','Greenland','Mexico','Canada']},
  {id:'gc_0098',cat:'Countries',type:'mcq',diff:'medium',flag:'🌍',q:'Which is the largest country in Southeast Asia by area?',a:'Indonesia',opts:['Vietnam','Myanmar','Indonesia','Thailand']},
  {id:'gc_0099',cat:'Countries',type:'mcq',diff:'medium',flag:'🌍',q:'Which is the largest country located entirely within Europe?',a:'Ukraine',opts:['Ukraine','Spain','Germany','France']},
  {id:'gc_0100',cat:'Countries',type:'mcq',diff:'medium',flag:'🌍',q:'Which is the smallest country in Asia by area?',a:'Maldives',opts:['Maldives','Bhutan','Bahrain','Singapore']},
  {id:'gc_0101',cat:'Countries',type:'mcq',diff:'hard',flag:'🌍',q:'Which is the second-largest country in Africa by area?',a:'DR Congo',opts:['DR Congo','Chad','Sudan','Libya']},
  {id:'gc_0102',cat:'Countries',type:'mcq',diff:'hard',flag:'🌍',q:'Which country has the most pyramids in the world?',a:'Sudan',opts:['Egypt','Peru','Sudan','Mexico']},
  /* ════════ Indian Geography ════════ */
  {id:'gc_0103',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of India?',a:'New Delhi',opts:['Mumbai','New Delhi','Kolkata','Chennai']},
  {id:'gc_0104',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which is the longest river in India?',a:'Ganga',opts:['Yamuna','Brahmaputra','Ganga','Godavari']},
  {id:'gc_0105',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which Indian state has the largest area?',a:'Rajasthan',opts:['Maharashtra','Uttar Pradesh','Rajasthan','Madhya Pradesh']},
  {id:'gc_0106',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which city is the financial capital of India?',a:'Mumbai',opts:['Delhi','Mumbai','Kolkata','Hyderabad']},
  {id:'gc_0107',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'How many states does India currently have?',a:'28',opts:['26','27','28','29']},
  {id:'gc_0108',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian city is known as the "City of Lakes"?',a:'Udaipur',opts:['Jaipur','Bhopal','Udaipur','Srinagar']},
  {id:'gc_0109',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'The Dudhsagar Falls is in which Indian state?',a:'Goa',opts:['Kerala','Karnataka','Goa','Maharashtra']},
  {id:'gc_0110',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which is the smallest state of India by area?',a:'Goa',opts:['Sikkim','Tripura','Goa','Nagaland']},
  {id:'gc_0111',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'The Loktak Lake, the largest freshwater lake in NE India, is in which state?',a:'Manipur',opts:['Assam','Nagaland','Manipur','Meghalaya']},
  {id:'gc_0112',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state shares borders with the maximum number of other states?',a:'Uttar Pradesh',opts:['Madhya Pradesh','Rajasthan','Uttar Pradesh','Maharashtra']},
  {id:'gc_0113',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which Indian city is known as the "Pink City"?',a:'Jaipur',opts:['Jodhpur','Udaipur','Agra','Jaipur']},
  {id:'gc_0114',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which Indian city is known as the "Silicon Valley of India"?',a:'Bengaluru',opts:['Hyderabad','Chennai','Bengaluru','Pune']},
  {id:'gc_0115',cat:'Indian Geography',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which is the most populous state of India?',a:'Uttar Pradesh',opts:['Bihar','Maharashtra','West Bengal','Uttar Pradesh']},
  {id:'gc_0116',cat:'Indian Geography',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which river is often called "Dakshin Ganga" (Ganga of the South)?',a:'Godavari',opts:['Tungabhadra','Godavari','Krishna','Kaveri']},
  {id:'gc_0117',cat:'Indian Geography',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which strait separates India from Sri Lanka?',a:'Palk Strait',opts:['Palk Strait','Malacca Strait','Hormuz Strait','Bering Strait']},
  {id:'gc_0118',cat:'Indian Geography',type:'mcq',diff:'medium',flag:'🇮🇳',q:'The Western Ghats are also known by which name?',a:'Sahyadri',opts:['Aravalli','Satpura','Sahyadri','Nilgiri']},
  {id:'gc_0119',cat:'Indian Geography',type:'mcq',diff:'medium',flag:'🇮🇳',q:'The Sundarbans mangrove delta is mainly in which Indian state?',a:'West Bengal',opts:['Andhra Pradesh','West Bengal','Odisha','Assam']},
  {id:'gc_0120',cat:'Indian Geography',type:'mcq',diff:'medium',flag:'🇮🇳',q:'In which state is Kanyakumari, the southern tip of mainland India?',a:'Tamil Nadu',opts:['Andhra Pradesh','Karnataka','Kerala','Tamil Nadu']},
  {id:'gc_0121',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which is the largest freshwater lake in India?',a:'Wular Lake',opts:['Pushkar Lake','Wular Lake','Chilika Lake','Dal Lake']},
  {id:'gc_0122',cat:'Indian Geography',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which is the highest peak located entirely within India?',a:'Nanda Devi',opts:['Nanda Devi','Saltoro Kangri','Kamet','Kangchenjunga']},
  /* ════════ State Identification ════════ */
  {id:'gc_0123',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which state is known as the "Land of Five Rivers"?',a:'Punjab',opts:['Haryana','Punjab','Himachal Pradesh','Uttarakhand']},
  {id:'gc_0124',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is the largest producer of tea?',a:'Assam',opts:['West Bengal','Assam','Darjeeling','Tamil Nadu']},
  {id:'gc_0125',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Jaipur is the capital of which Indian state?',a:'Rajasthan',opts:['Madhya Pradesh','Rajasthan','Gujarat','Haryana']},
  {id:'gc_0126',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which state is called the "Gateway to Northeast India"?',a:'Assam',opts:['Manipur','Assam','Nagaland','Sikkim']},
  {id:'gc_0127',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state has the longest coastline?',a:'Gujarat',opts:['Maharashtra','Andhra Pradesh','Gujarat','Tamil Nadu']},
  {id:'gc_0128',cat:'State Identification',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which Indian state is known as "God\'s Own Country"?',a:'Kerala',opts:['Goa','Tamil Nadu','Kerala','Karnataka']},
  {id:'gc_0129',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which state is the largest producer of sugarcane in India?',a:'Uttar Pradesh',opts:['Maharashtra','Uttar Pradesh','Bihar','Punjab']},
  {id:'gc_0130',cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state has the highest literacy rate?',a:'Kerala',opts:['Goa','Maharashtra','Himachal Pradesh','Kerala']},
  {id:'gc_0131',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is the largest producer of spices?',a:'Kerala',opts:['Karnataka','Andhra Pradesh','Kerala','Tamil Nadu']},
  {id:'gc_0132',cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'The Chilika Lake, the largest coastal lagoon in India, is in which state?',a:'Odisha',opts:['West Bengal','Andhra Pradesh','Odisha','Tamil Nadu']},
  {id:'gc_0133',cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state is called the "Rice Bowl of India"?',a:'Andhra Pradesh',opts:['Punjab','West Bengal','Andhra Pradesh','Tamil Nadu']},
  {id:'gc_0134',cat:'State Identification',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Bihu, a major harvest festival, is celebrated mainly in which Indian state?',a:'Assam',opts:['Kerala','Punjab','Assam','Gujarat']},
  {id:'gc_0135',cat:'State Identification',type:'mcq',diff:'easy',flag:'🇮🇳',q:'The Golden Temple (Harmandir Sahib) is in which Indian state?',a:'Punjab',opts:['Himachal Pradesh','Haryana','Punjab','Rajasthan']},
  {id:'gc_0136',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is called the "Land of the Dawn-lit Mountains"?',a:'Arunachal Pradesh',opts:['Mizoram','Sikkim','Arunachal Pradesh','Nagaland']},
  {id:'gc_0137',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is the largest producer of coffee?',a:'Karnataka',opts:['Kerala','Karnataka','Assam','Tamil Nadu']},
  {id:'gc_0138',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Which Indian state is the largest producer of wheat?',a:'Uttar Pradesh',opts:['Punjab','Madhya Pradesh','Uttar Pradesh','Haryana']},
  {id:'gc_0139',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'The Khajuraho group of temples is in which Indian state?',a:'Madhya Pradesh',opts:['Gujarat','Madhya Pradesh','Rajasthan','Uttar Pradesh']},
  {id:'gc_0140',cat:'State Identification',type:'mcq',diff:'medium',flag:'🇮🇳',q:'The Konark Sun Temple is in which Indian state?',a:'Odisha',opts:['West Bengal','Tamil Nadu','Andhra Pradesh','Odisha']},
  {id:'gc_0141',cat:'State Identification',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which Indian state is the largest producer of jute?',a:'West Bengal',opts:['Odisha','Bihar','Assam','West Bengal']},
  /* ════════ Indian State Capitals ════════ */
  {id:'gc_0142',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Telangana?',a:'Hyderabad',opts:['Vijayawada','Hyderabad','Warangal','Karimnagar']},
  {id:'gc_0143',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Uttarakhand?',a:'Dehradun',opts:['Haridwar','Dehradun','Nainital','Rishikesh']},
  {id:'gc_0144',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Chhattisgarh?',a:'Raipur',opts:['Bilaspur','Raipur','Bhilai','Durg']},
  {id:'gc_0145',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Jharkhand?',a:'Ranchi',opts:['Jamshedpur','Dhanbad','Ranchi','Bokaro']},
  {id:'gc_0146',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Sikkim?',a:'Gangtok',opts:['Pelling','Namchi','Gangtok','Ravangla']},
  {id:'gc_0147',cat:'Indian State Capitals',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of Maharashtra?',a:'Mumbai',opts:['Pune','Nagpur','Mumbai','Aurangabad']},
  {id:'gc_0148',cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Kerala?',a:'Thiruvananthapuram',opts:['Kochi','Kozhikode','Thrissur','Thiruvananthapuram']},
  {id:'gc_0149',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Arunachal Pradesh?',a:'Itanagar',opts:['Tawang','Ziro','Itanagar','Pasighat']},
  {id:'gc_0150',cat:'Indian State Capitals',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of Karnataka?',a:'Bengaluru',opts:['Mysuru','Bengaluru','Hubballi','Mangaluru']},
  {id:'gc_0151',cat:'Indian State Capitals',type:'mcq',diff:'easy',flag:'🇮🇳',q:'What is the capital of Himachal Pradesh?',a:'Shimla',opts:['Solan','Dharamshala','Manali','Shimla']},
  {id:'gc_0152',cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Odisha?',a:'Bhubaneswar',opts:['Bhubaneswar','Rourkela','Puri','Cuttack']},
  {id:'gc_0153',cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Assam?',a:'Dispur',opts:['Jorhat','Silchar','Dispur','Guwahati']},
  {id:'gc_0154',cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Gujarat?',a:'Gandhinagar',opts:['Ahmedabad','Vadodara','Surat','Gandhinagar']},
  {id:'gc_0155',cat:'Indian State Capitals',type:'mcq',diff:'medium',flag:'🇮🇳',q:'What is the capital of Goa?',a:'Panaji',opts:['Margao','Mapusa','Panaji','Vasco da Gama']},
  {id:'gc_0156',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Nagaland?',a:'Kohima',opts:['Mokokchung','Imphal','Dimapur','Kohima']},
  {id:'gc_0157',cat:'Indian State Capitals',type:'mcq',diff:'hard',flag:'🇮🇳',q:'What is the capital of Manipur?',a:'Imphal',opts:['Shillong','Kohima','Aizawl','Imphal']},
  /* ════════ Continents & Oceans ════════ */
  {id:'gc_0158',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'How many continents are there on Earth?',a:'7',opts:['5','6','7','8']},
  {id:'gc_0159',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the largest ocean in the world?',a:'Pacific Ocean',opts:['Atlantic Ocean','Pacific Ocean','Indian Ocean','Arctic Ocean']},
  {id:'gc_0160',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the smallest continent?',a:'Australia',opts:['Antarctica','Australia','Europe','South America']},
  {id:'gc_0161',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which continent is called the "Dark Continent"?',a:'Africa',opts:['South America','Africa','Asia','Antarctica']},
  {id:'gc_0162',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which large water body lies to the east of India?',a:'Bay of Bengal',opts:['Arabian Sea','Bay of Bengal','Indian Ocean','Pacific Ocean']},
  {id:'gc_0163',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the smallest ocean in the world?',a:'Arctic Ocean',opts:['Southern Ocean','Indian Ocean','Arctic Ocean','Atlantic Ocean']},
  {id:'gc_0164',cat:'Continents & Oceans',type:'mcq',diff:'medium',flag:'🌍',q:'Which continent has no permanent human population?',a:'Antarctica',opts:['Arctic','Antarctica','Greenland','Iceland']},
  {id:'gc_0165',cat:'Continents & Oceans',type:'mcq',diff:'hard',flag:'🌊',q:'Which ocean is completely surrounded by land in the Northern Hemisphere?',a:'Arctic Ocean',opts:['Indian Ocean','Pacific Ocean','Arctic Ocean','Southern Ocean']},
  {id:'gc_0166',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the largest continent by area?',a:'Asia',opts:['Europe','Asia','North America','Africa']},
  {id:'gc_0167',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the coldest continent on Earth?',a:'Antarctica',opts:['North America','Antarctica','Europe','Asia']},
  {id:'gc_0168',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which ocean lies between Africa and Australia?',a:'Indian Ocean',opts:['Pacific Ocean','Atlantic Ocean','Arctic Ocean','Indian Ocean']},
  {id:'gc_0169',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the second-largest ocean in the world?',a:'Atlantic Ocean',opts:['Arctic Ocean','Atlantic Ocean','Southern Ocean','Indian Ocean']},
  {id:'gc_0170',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'The Sahara Desert is located on which continent?',a:'Africa',opts:['South America','Asia','Australia','Africa']},
  {id:'gc_0171',cat:'Continents & Oceans',type:'mcq',diff:'easy',flag:'🌍',q:'Which imaginary line divides the Earth into Northern and Southern Hemispheres?',a:'Equator',opts:['Prime Meridian','Tropic of Capricorn','Equator','Tropic of Cancer']},
  {id:'gc_0172',cat:'Continents & Oceans',type:'mcq',diff:'medium',flag:'🌍',q:'The Mediterranean Sea lies between Europe and which continent?',a:'Africa',opts:['Australia','Africa','Asia','South America']},
  {id:'gc_0173',cat:'Continents & Oceans',type:'mcq',diff:'medium',flag:'🌍',q:'Which continent has the most countries?',a:'Africa',opts:['Africa','South America','Asia','Europe']},
  {id:'gc_0174',cat:'Continents & Oceans',type:'mcq',diff:'medium',flag:'🌊',q:'The Mariana Trench, the deepest ocean trench, is in which ocean?',a:'Pacific Ocean',opts:['Arctic Ocean','Pacific Ocean','Atlantic Ocean','Indian Ocean']},
  {id:'gc_0175',cat:'Continents & Oceans',type:'mcq',diff:'hard',flag:'🌊',q:'Which major ocean has the highest average salinity?',a:'Atlantic Ocean',opts:['Indian Ocean','Pacific Ocean','Atlantic Ocean','Arctic Ocean']},
  /* ════════ World Geography ════════ */
  {id:'gc_0176',cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which country is known as the "Roof of the World"?',a:'Tibet (China)',opts:['Nepal','Bhutan','Tibet (China)','Afghanistan']},
  {id:'gc_0177',cat:'World Geography',type:'mcq',diff:'hard',flag:'🌊',q:'Which strait separates Europe from Africa?',a:'Strait of Gibraltar',opts:['Strait of Malacca','Strait of Gibraltar','Bering Strait','Strait of Hormuz']},
  {id:'gc_0178',cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which country has the most time zones?',a:'France',opts:['USA','Russia','France','UK']},
  {id:'gc_0179',cat:'World Geography',type:'mcq',diff:'hard',flag:'⛰️',q:'What is the name of the deepest point in the ocean?',a:'Challenger Deep',opts:['Mariana Trench','Challenger Deep','Puerto Rico Trench','Java Trench']},
  {id:'gc_0180',cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which African country has the largest area?',a:'Algeria',opts:['Sudan','DR Congo','Libya','Algeria']},
  {id:'gc_0181',cat:'World Geography',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the largest hot desert in the world?',a:'Sahara',opts:['Gobi','Sahara','Arabian','Kalahari']},
  {id:'gc_0182',cat:'World Geography',type:'mcq',diff:'easy',flag:'🌍',q:'Which is the largest island in the world (not counting continents)?',a:'Greenland',opts:['Greenland','Madagascar','Borneo','New Guinea']},
  {id:'gc_0183',cat:'World Geography',type:'mcq',diff:'easy',flag:'🌍',q:'Which line of longitude is 0 degrees?',a:'Prime Meridian',opts:['Prime Meridian','International Date Line','Tropic of Cancer','Equator']},
  {id:'gc_0184',cat:'World Geography',type:'mcq',diff:'medium',flag:'🌊',q:'Which is the largest lake in the world by area?',a:'Caspian Sea',opts:['Lake Superior','Lake Victoria','Caspian Sea','Lake Baikal']},
  {id:'gc_0185',cat:'World Geography',type:'mcq',diff:'medium',flag:'🌊',q:'Which is the deepest lake in the world?',a:'Lake Baikal',opts:['Lake Baikal','Caspian Sea','Lake Superior','Lake Tanganyika']},
  {id:'gc_0186',cat:'World Geography',type:'mcq',diff:'medium',flag:'🌍',q:'Angel Falls, the world\'s highest uninterrupted waterfall, is in which country?',a:'Venezuela',opts:['Colombia','Argentina','Venezuela','Brazil']},
  {id:'gc_0187',cat:'World Geography',type:'mcq',diff:'medium',flag:'🌊',q:'Which strait separates Asia from North America?',a:'Bering Strait',opts:['Strait of Hormuz','Bering Strait','Palk Strait','Strait of Gibraltar']},
  {id:'gc_0188',cat:'World Geography',type:'mcq',diff:'hard',flag:'🌍',q:'Which desert is considered the driest non-polar desert on Earth?',a:'Atacama Desert',opts:['Gobi','Thar','Atacama Desert','Sahara']},
  /* ════════ Rivers ════════ */
  {id:'gc_0189',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which is the longest river in the world?',a:'Nile',opts:['Amazon','Nile','Yangtze','Mississippi']},
  {id:'gc_0190',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'The Amazon River flows through which continent?',a:'South America',opts:['Africa','South America','North America','Asia']},
  {id:'gc_0191',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river is known as the "Sorrow of China"?',a:'Huang He (Yellow River)',opts:['Yangtze','Huang He (Yellow River)','Pearl River','Mekong']},
  {id:'gc_0192',cat:'Rivers',type:'mcq',diff:'medium',flag:'🇮🇳',q:'Where does the Ganga River originate?',a:'Gangotri Glacier',opts:['Yamunotri','Gangotri Glacier','Manasarovar','Rohtang Pass']},
  {id:'gc_0193',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river forms the natural border between USA and Mexico?',a:'Rio Grande',opts:['Colorado','Rio Grande','Mississippi','Missouri']},
  {id:'gc_0194',cat:'Rivers',type:'mcq',diff:'easy',flag:'🌊',q:'Which is the longest river in Asia?',a:'Yangtze',opts:['Mekong','Yangtze','Huang He','Indus']},
  {id:'gc_0195',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river flows through the most countries in the world?',a:'Danube',opts:['Rhine','Amazon','Nile','Danube']},
  {id:'gc_0196',cat:'Rivers',type:'mcq',diff:'easy',flag:'🌊',q:'Which river is called the "Lifeline of Egypt"?',a:'Nile',opts:['Congo','Niger','Zambezi','Nile']},
  {id:'gc_0197',cat:'Rivers',type:'mcq',diff:'medium',flag:'🇮🇳',q:'On the banks of which river is the city of Varanasi situated?',a:'Ganga',opts:['Yamuna','Ganga','Godavari','Saraswati']},
  {id:'gc_0198',cat:'Rivers',type:'mcq',diff:'easy',flag:'🌊',q:'The River Thames flows through which city?',a:'London',opts:['Berlin','Rome','London','Paris']},
  {id:'gc_0199',cat:'Rivers',type:'mcq',diff:'easy',flag:'🌊',q:'The River Seine flows through which city?',a:'Paris',opts:['Madrid','Vienna','Paris','London']},
  {id:'gc_0200',cat:'Rivers',type:'mcq',diff:'easy',flag:'🇮🇳',q:'Which river flows through the city of Delhi?',a:'Yamuna',opts:['Ganga','Yamuna','Sabarmati','Narmada']},
  {id:'gc_0201',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which is the longest river in Europe?',a:'Volga',opts:['Rhine','Seine','Volga','Danube']},
  {id:'gc_0202',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'The Tigris River flows through which capital city?',a:'Baghdad',opts:['Baghdad','Cairo','Tehran','Damascus']},
  {id:'gc_0203',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'Which river carries the largest volume of water in the world?',a:'Amazon',opts:['Amazon','Nile','Yangtze','Mississippi']},
  {id:'gc_0204',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'The Mississippi River empties into which body of water?',a:'Gulf of Mexico',opts:['Atlantic Ocean','Gulf of Mexico','Pacific Ocean','Hudson Bay']},
  {id:'gc_0205',cat:'Rivers',type:'mcq',diff:'medium',flag:'🌊',q:'The River Tiber flows through which city?',a:'Rome',opts:['Milan','Florence','Rome','Athens']},
  {id:'gc_0206',cat:'Rivers',type:'mcq',diff:'hard',flag:'🌊',q:'What is the Brahmaputra River called in Tibet?',a:'Yarlung Tsangpo',opts:['Salween','Mekong','Irrawaddy','Yarlung Tsangpo']},
  {id:'gc_0207',cat:'Rivers',type:'mcq',diff:'hard',flag:'🇮🇳',q:'Which sacred Indian river flows westward into the Arabian Sea through a rift valley?',a:'Narmada',opts:['Krishna','Godavari','Mahanadi','Narmada']},
  /* ════════ Mountains ════════ */
  {id:'gc_0208',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which is the highest mountain in the world?',a:'Mount Everest',opts:['K2','Kangchenjunga','Mount Everest','Makalu']},
  {id:'gc_0209',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which is the longest mountain range in the world?',a:'Andes',opts:['Himalayas','Andes','Rockies','Alps']},
  {id:'gc_0210',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Mount Kilimanjaro is in which country?',a:'Tanzania',opts:['Kenya','Tanzania','Uganda','Ethiopia']},
  {id:'gc_0211',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which mountain range separates Europe from Asia?',a:'Ural Mountains',opts:['Alps','Caucasus','Ural Mountains','Carpathians']},
  {id:'gc_0212',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Mauna Kea in Hawaii is considered the tallest mountain from its base. It rises from where?',a:'Ocean floor',opts:['Sea level','Ocean floor','Underground','Plateau']},
  {id:'gc_0213',cat:'Mountains',type:'mcq',diff:'easy',flag:'⛰️',q:'Which is the highest peak in Africa?',a:'Mount Kilimanjaro',opts:['Mount Kenya','Mount Kilimanjaro','Mount Elgon','Ras Dashen']},
  {id:'gc_0214',cat:'Mountains',type:'mcq',diff:'medium',flag:'⛰️',q:'Which mountain range runs along India\'s northern border?',a:'Himalayas',opts:['Vindhyas','Satpuras','Western Ghats','Himalayas']},
  {id:'gc_0215',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Which is the highest peak in South America?',a:'Aconcagua',opts:['Mount Fitz Roy','Aconcagua','Chimborazo','Huascarán']},
  {id:'gc_0216',cat:'Mountains',type:'mcq',diff:'easy',flag:'⛰️',q:'Mount Fuji is in which country?',a:'Japan',opts:['South Korea','Nepal','China','Japan']},
  {id:'gc_0217',cat:'Mountains',type:'mcq',diff:'easy',flag:'⛰️',q:'The Alps are mainly located on which continent?',a:'Europe',opts:['Europe','Asia','North America','Africa']},
  {id:'gc_0218',cat:'Mountains',type:'mcq',diff:'easy',flag:'⛰️',q:'The Rocky Mountains are located in which continent?',a:'North America',opts:['Asia','North America','Europe','South America']},
  {id:'gc_0219',cat:'Mountains',type:'mcq',diff:'medium',flag:'⛰️',q:'Which is the second-highest mountain in the world?',a:'K2',opts:['Kangchenjunga','Makalu','K2','Lhotse']},
  {id:'gc_0220',cat:'Mountains',type:'mcq',diff:'medium',flag:'⛰️',q:'Which is the third-highest mountain in the world?',a:'Kangchenjunga',opts:['K2','Makalu','Lhotse','Kangchenjunga']},
  {id:'gc_0221',cat:'Mountains',type:'mcq',diff:'medium',flag:'⛰️',q:'Which mountain range lies between France and Spain?',a:'Pyrenees',opts:['Apennines','Carpathians','Pyrenees','Alps']},
  {id:'gc_0222',cat:'Mountains',type:'mcq',diff:'medium',flag:'⛰️',q:'Denali is the highest peak of which continent?',a:'North America',opts:['North America','Europe','Asia','South America']},
  {id:'gc_0223',cat:'Mountains',type:'mcq',diff:'hard',flag:'⛰️',q:'Mount Elbrus, the highest peak in Europe, is in which mountain range?',a:'Caucasus',opts:['Urals','Pyrenees','Alps','Caucasus']},
  /* ════════ Monuments ════════ */
  {id:'gc_0224',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Eiffel Tower is located in which city?',a:'Paris',opts:['London','Paris','Rome','Berlin']},
  {id:'gc_0225',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Colosseum is in which city?',a:'Rome',opts:['Athens','Rome','Cairo','Madrid']},
  {id:'gc_0226',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Taj Mahal is located in which city?',a:'Agra',opts:['Delhi','Mumbai','Jaipur','Agra']},
  {id:'gc_0227',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Burj Khalifa is located in which city?',a:'Dubai',opts:['Riyadh','Abu Dhabi','Dubai','Doha']},
  {id:'gc_0228',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'Machu Picchu is in which country?',a:'Peru',opts:['Bolivia','Ecuador','Peru','Chile']},
  {id:'gc_0229',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Statue of Liberty is located in which U.S. city?',a:'New York',opts:['Boston','New York','Philadelphia','Washington D.C.']},
  {id:'gc_0230',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Great Sphinx is located near which ancient structure?',a:'Great Pyramid of Giza',opts:['Colosseum','Great Pyramid of Giza','Taj Mahal','Parthenon']},
  {id:'gc_0231',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'Big Ben is a famous landmark in which city?',a:'London',opts:['Paris','London','Berlin','Rome']},
  {id:'gc_0232',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Colosseum was built in which ancient city?',a:'Rome',opts:['Athens','Carthage','Rome','Alexandria']},
  {id:'gc_0233',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'Angkor Wat temple complex is in which country?',a:'Cambodia',opts:['Thailand','Vietnam','Cambodia','Myanmar']},
  {id:'gc_0234',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Alhambra palace and fortress is located in which country?',a:'Spain',opts:['Portugal','Morocco','Spain','Italy']},
  {id:'gc_0235',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'Stonehenge is located in which country?',a:'England',opts:['Ireland','Scotland','Wales','England']},
  {id:'gc_0236',cat:'Monuments',type:'mcq',diff:'hard',flag:'🏛️',q:'The Moai statues are found on which island?',a:'Easter Island',opts:['Hawaii','Easter Island','Fiji','Tahiti']},
  {id:'gc_0237',cat:'Monuments',type:'mcq',diff:'hard',flag:'🏛️',q:'Borobudur, the world\'s largest Buddhist temple, is in which country?',a:'Indonesia',opts:['Thailand','Cambodia','India','Indonesia']},
  {id:'gc_0238',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Sydney Opera House is in which country?',a:'Australia',opts:['Australia','USA','Canada','New Zealand']},
  {id:'gc_0239',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Christ the Redeemer statue overlooks which city?',a:'Rio de Janeiro',opts:['Buenos Aires','Lima','Rio de Janeiro','Sao Paulo']},
  {id:'gc_0240',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Leaning Tower of Pisa is in which country?',a:'Italy',opts:['Spain','Italy','Greece','France']},
  {id:'gc_0241',cat:'Monuments',type:'mcq',diff:'easy',flag:'🏛️',q:'The Gateway of India is located in which city?',a:'Mumbai',opts:['Kolkata','Delhi','Mumbai','Chennai']},
  {id:'gc_0242',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Petronas Twin Towers are in which city?',a:'Kuala Lumpur',opts:['Singapore','Kuala Lumpur','Jakarta','Bangkok']},
  {id:'gc_0243',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Hagia Sophia is located in which city?',a:'Istanbul',opts:['Athens','Cairo','Baghdad','Istanbul']},
  {id:'gc_0244',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Sagrada Familia is located in which city?',a:'Barcelona',opts:['Seville','Barcelona','Madrid','Valencia']},
  {id:'gc_0245',cat:'Monuments',type:'mcq',diff:'medium',flag:'🏛️',q:'The Ajanta and Ellora caves are in which Indian state?',a:'Maharashtra',opts:['Karnataka','Odisha','Maharashtra','Gujarat']},
  /* ════════ Map Based ════════ */
  {id:'gc_0246',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Southeast Asia',mapHint:'Country highlighted on the Indochina Peninsula',q:'Which country is highlighted on the map between Thailand and Vietnam?',a:'Cambodia',opts:['Laos','Cambodia','Myanmar','Malaysia']},
  {id:'gc_0247',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'South America',mapHint:'Largest country by area in South America',q:'Which is the largest country shown on the South American map?',a:'Brazil',opts:['Argentina','Brazil','Peru','Colombia']},
  {id:'gc_0248',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Indian Subcontinent',mapHint:'Island nation south of India',q:'Which island country lies just south of India on the map?',a:'Sri Lanka',opts:['Maldives','Sri Lanka','Lakshadweep','Andaman Islands']},
  {id:'gc_0249',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Africa',mapHint:'Northernmost country in Africa',q:'Which country is at the northern tip of Africa on the map?',a:'Tunisia',opts:['Egypt','Morocco','Algeria','Tunisia']},
  {id:'gc_0250',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Europe',mapHint:'Boot-shaped country in Southern Europe',q:'Which country in Europe is famously boot-shaped?',a:'Italy',opts:['Spain','Italy','Greece','Portugal']},
  {id:'gc_0251',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Central Asia',mapHint:'Landlocked country ending in "-stan"',q:'Which is the largest landlocked country in the world?',a:'Kazakhstan',opts:['Mongolia','Kazakhstan','Uzbekistan','Turkmenistan']},
  {id:'gc_0252',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Middle East',mapHint:'Peninsula in Southwest Asia',q:'Which is the largest peninsula in the world shown on the Middle East map?',a:'Arabian Peninsula',opts:['Iberian Peninsula','Arabian Peninsula','Indian Subcontinent','Scandinavia']},
  {id:'gc_0253',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Northeast India',mapHint:'7 sisters of Northeast India',q:'Which of these states is NOT one of the "Seven Sisters" of Northeast India?',a:'Sikkim',opts:['Manipur','Meghalaya','Sikkim','Mizoram']},
  {id:'gc_0254',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Indian Ocean',mapHint:'Island nation west of India',q:'Which is the island nation located west of India in the Arabian Sea?',a:'Maldives',opts:['Sri Lanka','Lakshadweep','Maldives','Seychelles']},
  {id:'gc_0255',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'North Africa & Middle East',mapHint:'Suez Canal location',q:'The Suez Canal connects which two bodies of water?',a:'Red Sea & Mediterranean Sea',opts:['Red Sea & Mediterranean Sea','Black Sea & Caspian Sea','Persian Gulf & Arabian Sea','Atlantic & Pacific Oceans']},
  {id:'gc_0256',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'South Asia',mapHint:'Largest country in South Asia',q:'Which is the largest country in South Asia by area?',a:'India',opts:['Pakistan','India','Bangladesh','Sri Lanka']},
  {id:'gc_0257',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Africa',mapHint:'Largest continent after Asia',q:'On the world map, which continent appears second-largest after Asia?',a:'Africa',opts:['North America','Europe','Africa','South America']},
  {id:'gc_0258',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Europe',mapHint:'Small island nation south of Sicily',q:'Which island nation lies south of Sicily on the Mediterranean map?',a:'Malta',opts:['Cyprus','Malta','Sardinia','Corsica']},
  {id:'gc_0259',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Northeast India',mapHint:'State bordering China and Bhutan',q:'Which Indian state borders both China and Bhutan on the map?',a:'Arunachal Pradesh',opts:['Sikkim','Assam','Arunachal Pradesh','Nagaland']},
  {id:'gc_0260',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Indian Peninsula',mapHint:'Southernmost tip of India',q:'Which cape forms the southernmost tip of the Indian mainland on the map?',a:'Cape Comorin (Kanyakumari)',opts:['Cape Calimere','Point Calimere','Cape Comorin (Kanyakumari)','Pamban Island']},
  {id:'gc_0261',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'East Africa',mapHint:'Country straddling the equator',q:'Which East African country lies exactly on the equator?',a:'Kenya',opts:['Tanzania','Ethiopia','Kenya','Uganda']},
  {id:'gc_0262',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Indian Ocean Islands',mapHint:'Large island nation off the southeast coast of Africa',q:'Which island nation in the Indian Ocean is known for its vanilla production?',a:'Madagascar',opts:['Comoros','Réunion','Seychelles','Madagascar']},
  {id:'gc_0263',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Central America',mapHint:'Narrowest point connecting North and South America',q:'Which country contains the Panama Canal linking the Atlantic and Pacific?',a:'Panama',opts:['Colombia','Costa Rica','Nicaragua','Panama']},
  {id:'gc_0264',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'South Asia',mapHint:'Landlocked Himalayan country north of India',q:'Which landlocked Himalayan country lies between India and China on the map?',a:'Nepal',opts:['Nepal','Bangladesh','Sri Lanka','Bhutan']},
  {id:'gc_0265',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'East Africa',mapHint:'Country forming the Horn of Africa',q:'Which country forms the Horn of Africa on the map?',a:'Somalia',opts:['Kenya','Ethiopia','Somalia','Djibouti']},
  {id:'gc_0266',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'Europe',mapHint:'Western tip of the Iberian Peninsula',q:'Which country lies at the western edge of the Iberian Peninsula?',a:'Portugal',opts:['Morocco','Spain','France','Portugal']},
  {id:'gc_0267',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Southeast Asia',mapHint:'Island nation with over 17,000 islands',q:'Which Southeast Asian country consists of more than 17,000 islands?',a:'Indonesia',opts:['Malaysia','Indonesia','Philippines','Thailand']},
  {id:'gc_0268',cat:'Map Based',type:'map',diff:'medium',mapEmo:'🗺️',mapRegion:'South America',mapHint:'Long narrow country on the Pacific coast',q:'Which South American country is a long, narrow strip along the Pacific coast?',a:'Chile',opts:['Chile','Peru','Argentina','Ecuador']},
  {id:'gc_0269',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Middle East',mapHint:'Largest country on the Arabian Peninsula',q:'Which is the largest country on the Arabian Peninsula?',a:'Saudi Arabia',opts:['Iraq','Saudi Arabia','Yemen','Oman']},
  {id:'gc_0270',cat:'Map Based',type:'map',diff:'hard',mapEmo:'🗺️',mapRegion:'Central Asia',mapHint:'Country with capital Tashkent',q:'Which Central Asian country has Tashkent as its capital?',a:'Uzbekistan',opts:['Kazakhstan','Uzbekistan','Kyrgyzstan','Turkmenistan']},
  {id:'gc_0271',cat:'Map Based',type:'map',diff:'easy',mapEmo:'🗺️',mapRegion:'Indian Peninsula',mapHint:'Sea to the west of peninsular India',q:'Which sea lies to the west of the Indian Peninsula?',a:'Arabian Sea',opts:['Arabian Sea','Andaman Sea','Bay of Bengal','Red Sea']},
  /* ════════ History & Geography ════════ */
  {id:'gc_0272',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Carthage was located in present-day which country?',a:'Tunisia',opts:['Libya','Tunisia','Algeria','Morocco']},
  {id:'gc_0273',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Battle of Plassey (1757) was fought in which present-day Indian state?',a:'West Bengal',opts:['Bihar','West Bengal','Odisha','Jharkhand']},
  {id:'gc_0274',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient Silk Road connected China to which city in the west?',a:'Istanbul (Constantinople)',opts:['Rome','Cairo','Istanbul (Constantinople)','Athens']},
  {id:'gc_0275',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Indus Valley Civilization flourished in which present-day countries?',a:'India & Pakistan',opts:['India & Afghanistan','India & Pakistan','Pakistan & Iran','India & Bangladesh']},
  {id:'gc_0276',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The city of Harappa is located in present-day which country?',a:'Pakistan',opts:['India','Pakistan','Afghanistan','Iran']},
  {id:'gc_0277',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which ocean did Vasco da Gama cross to reach India in 1498?',a:'Indian Ocean',opts:['Atlantic Ocean','Indian Ocean','Pacific Ocean','Southern Ocean']},
  {id:'gc_0278',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Troy was located in present-day which country?',a:'Turkey',opts:['Greece','Turkey','Bulgaria','Romania']},
  {id:'gc_0279',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which country was formerly known as Persia?',a:'Iran',opts:['Iraq','Iran','Turkey','Syria']},
  {id:'gc_0280',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The First Battle of Panipat was fought in which present-day Indian state?',a:'Haryana',opts:['Punjab','Delhi','Haryana','Uttar Pradesh']},
  {id:'gc_0281',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Ceylon is the former name of which country?',a:'Sri Lanka',opts:['Maldives','Bangladesh','Sri Lanka','Myanmar']},
  {id:'gc_0282',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Mohenjo-daro is located in present-day which country?',a:'Pakistan',opts:['India','Pakistan','Afghanistan','Bangladesh']},
  {id:'gc_0283',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which river was central to the ancient Egyptian civilization?',a:'Nile',opts:['Euphrates','Tigris','Nile','Congo']},
  {id:'gc_0284',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The historic city of Petra is in which present-day country?',a:'Jordan',opts:['Saudi Arabia','Jordan','Lebanon','Syria']},
  {id:'gc_0285',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which empire built the famous road network called the "Royal Road" from Susa to Sardis?',a:'Persian Empire',opts:['Roman Empire','Persian Empire','Ottoman Empire','Mongol Empire']},
  {id:'gc_0286',cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'Which ancient civilization built the Machu Picchu citadel?',a:'Inca',opts:['Maya','Aztec','Inca','Olmec']},
  {id:'gc_0287',cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'The Tropic of Cancer passes through how many Indian states?',a:'8',opts:['6','8','10','12']},
  {id:'gc_0288',cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'Which sea route did Columbus accidentally discover while seeking India?',a:'Route to the Americas',opts:['Route to Africa','Route to the Americas','Route to Australia','Route to China']},
  {id:'gc_0289',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient city of Babylon was located in present-day which country?',a:'Iraq',opts:['Syria','Iran','Iraq','Jordan']},
  {id:'gc_0290',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which mountain was considered the home of the gods in ancient Greek mythology?',a:'Mount Olympus',opts:['Mount Parnassus','Mount Olympus','Mount Etna','Mount Athos']},
  {id:'gc_0291',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Magna Carta was signed near which river in England?',a:'Thames',opts:['Severn','Thames','Avon','Mersey']},
  {id:'gc_0292',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Timbuktu, a major historical centre of Islamic learning, is in which country?',a:'Mali',opts:['Niger','Senegal','Mali','Mauritania']},
  {id:'gc_0293',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The ancient trade city of Palmyra was located in present-day which country?',a:'Syria',opts:['Iraq','Jordan','Syria','Lebanon']},
  {id:'gc_0294',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Which of these cities is often cited as one of the world\'s oldest continuously inhabited cities?',a:'Damascus',opts:['Brasília','Damascus','Canberra','Dubai']},
  {id:'gc_0295',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'Vasco da Gama arrived in Kozhikode (Calicut) in 1498. In which Indian state is it?',a:'Kerala',opts:['Goa','Karnataka','Tamil Nadu','Kerala']},
  {id:'gc_0296',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The historic Khyber Pass connects which two present-day countries?',a:'Pakistan & Afghanistan',opts:['India & Pakistan','Pakistan & Afghanistan','Afghanistan & Iran','China & Afghanistan']},
  {id:'gc_0297',cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'The Great Wall of China was mainly built to defend against invasions from which direction?',a:'North',opts:['East','South','West','North']},
  {id:'gc_0298',cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'The Lighthouse of Alexandria, one of the Seven Wonders, was in which country?',a:'Egypt',opts:['Egypt','Libya','Greece','Turkey']},
  {id:'gc_0299',cat:'History & Geography',type:'hist',diff:'hard',flag:'🏛️',q:'The Battle of Waterloo (1815) took place in present-day which country?',a:'Belgium',opts:['Germany','Netherlands','France','Belgium']},
  {id:'gc_0300',cat:'History & Geography',type:'hist',diff:'medium',flag:'🏛️',q:'The Berlin Wall divided which city?',a:'Berlin',opts:['Prague','Warsaw','Vienna','Berlin']},
];

// ============================================================
// NO-REPEAT ROTATION HELPER
// localStorage mein "seen" question IDs track karta hai. Jab tak
// filtered pool ke saare questions dekhe nahi jaate, repeat nahi
// hote. Sab dekh liye jaane par sirf usi pool ki history reset hoti hai.
// ============================================================
(function (global) {
  const STORAGE_KEY = 'geoChampSeenIds';
  function loadSeen() {
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
      const p = raw ? JSON.parse(raw) : [];
      return Array.isArray(p) ? new Set(p) : new Set();
    } catch (e) { return new Set(); }
  }
  function saveSeen(s) {
    try { if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(s))); }
    catch (e) { /* localStorage unavailable */ }
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
   * opts.type 'mcq'|'flag'|'map'|'hist', opts.diff 'easy'|'medium'|'hard',
   * opts.cat category name, opts.markSeen (default true)
   */
  function getQuizQuestions(count, opts) {
    opts = opts || {};
    let pool = QB;
    if (opts.type) pool = pool.filter(q => q.type === opts.type);
    if (opts.diff) pool = pool.filter(q => q.diff === opts.diff);
    if (opts.cat)  pool = pool.filter(q => q.cat === opts.cat);
    const n = Math.min(count || pool.length, pool.length);
    let seen = loadSeen();
    let unseen = pool.filter(q => !seen.has(q.id));
    if (unseen.length < n) {
      const ids = new Set(pool.map(q => q.id));
      seen = new Set(Array.from(seen).filter(id => !ids.has(id)));
      unseen = pool.slice();
    }
    const chosen = shuffle(unseen).slice(0, n);
    if (opts.markSeen !== false) { chosen.forEach(q => seen.add(q.id)); saveSeen(seen); }
    return chosen;
  }
  function resetQuizRotation() {
    try { if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }
  global.getQuizQuestions = getQuizQuestions;
  global.resetQuizRotation = resetQuizRotation;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getQuizQuestions = getQuizQuestions;
    module.exports.resetQuizRotation = resetQuizRotation;
  }
})(typeof window !== 'undefined' ? window : globalThis);
