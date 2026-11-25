const directory = [
  {id:'noon',name:'Noon',city:'台北',global:null,asia:5,styles:['手沖','風味探索'],notes:'以不同萃取方式探索風味。'},
  {id:'moonshine',name:'Moonshine 私釀咖啡（敦南旗艦店）',city:'台北',global:null,asia:19,styles:['義式','自家烘焙'],notes:'精品烘焙與義式咖啡。'},
  {id:'sole',name:'Cafe Sole 日出印象',city:'台北',global:null,asia:32,styles:['精品咖啡'],notes:'值得探索的精品咖啡館。'},
  {id:'keep',name:'KEEP Coffee Roastery',city:'高雄',global:46,asia:34,styles:['手沖','自家烘焙'],notes:'單品咖啡與烘焙。'},
  {id:'ninety',name:'Ninety Plus 旗艦店',city:'台北',global:null,asia:42,styles:['特殊處理','單品'],notes:'高階精品豆與特殊處理法。'},
  {id:'tomorrow',name:'Tomorrow Coffee Roasters',city:'台中',global:57,asia:45,styles:['自家烘焙','手沖'],notes:'自家烘焙與風味探索。'},
  {id:'vwi',name:'VWI by CHADWANG',city:'台北',global:null,asia:53,styles:['手沖','冠軍品牌'],notes:'世界沖煮冠軍相關品牌。'},
  {id:'sind',name:'Coffee Sind',city:'台北',global:36,asia:60,styles:['手沖','創意飲品'],notes:'手沖及風味創作。'},
  {id:'factory',name:'The Factory Mojocoffee',city:'台中',global:null,asia:67,styles:['自家烘焙'],notes:'台中精品咖啡代表品牌之一。'},
  {id:'stopover',name:'Coffee Stopover Black',city:'台中',global:78,asia:70,styles:['手沖','風味實驗'],notes:'多元沖煮與咖啡風味實驗。'},
  {id:'ember',name:'Project Ember by Mojocoffee',city:'台中',global:null,asia:85,styles:['自家烘焙'],notes:'Mojocoffee 旗下咖啡空間。'},
  {id:'underwater',name:'Coffee Underwater',city:'台北',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'daonan',name:'道南館 安和店',city:'台北',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'lecinq',name:'Le Cinq',city:'台北',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'oasis-anhe',name:'Oasis Coffee Roasters 安和店',city:'台北',global:null,asia:null,styles:['自家烘焙'],notes:'亞太百大候選名單。'},
  {id:'oasis-lab',name:'Oasis Coffee Roasting Lab',city:'台北',global:null,asia:null,styles:['自家烘焙'],notes:'亞太百大候選名單。'},
  {id:'rufous',name:'RUFOUS COFFEE ROASTERS 2',city:'台北',global:null,asia:null,styles:['自家烘焙'],notes:'亞太百大候選名單。'},
  {id:'single',name:'Single Origin espresso & roast',city:'台北',global:null,asia:null,styles:['SOE','義式'],notes:'亞太百大候選名單。'},
  {id:'leaf',name:'咖啡葉 Coffee Leaf',city:'台中',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'fooki',name:'Fooki Coffee Roasters',city:'台中',global:null,asia:null,styles:['自家烘焙'],notes:'亞太百大候選名單。'},
  {id:'lulu',name:'LULU’s Choice',city:'台中',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'cui',name:'萃行咖啡館',city:'台南',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'wan',name:'萬萬 Wan Wan',city:'台南',global:null,asia:null,styles:['精品咖啡'],notes:'亞太百大候選名單。'},
  {id:'simple',name:'Simple Kaffa 興波咖啡（華山旗艦店）',city:'台北',global:null,asia:null,styles:['義式','手沖','冠軍品牌'],notes:'創辦人吳則霖為 2016 世界咖啡師大賽冠軍。',extra:'2016 WBC'},
  {id:'fika',name:'Fika Fika Cafe',city:'台北',global:null,asia:null,styles:['自家烘焙'],notes:'曾獲北歐烘豆競賽獎項。',extra:'烘豆競賽'},
  {id:'rufous-original',name:'RUFOUS COFFEE ROASTERS（復興南路本店）',city:'台北',global:null,asia:null,styles:['自家烘焙','手沖','義式'],notes:'2025 世界百大第 85 名，榜單所指為大安區本店。'},
  {id:'gabee',name:'GABEE.',city:'台北',global:null,asia:null,styles:['義式','冠軍品牌'],notes:'創辦人林東源是台灣咖啡大師大賽冠軍，並於 2025 世界咖啡烈酒大賽獲季軍。',extra:'咖啡師競賽'}
];
export const checkedOn = '2026-11-25';

const organizer = 'https://theworlds100bestcoffeeshops.com';
const tourism = 'https://media.taiwan.net.tw/zh-tw/portal/media/collection';
const world = { label: '2026 全球百大', url: organizer + '/top-100-coffee-shops/' };
const asia = { label: '2026 亞太百大', url: organizer + '/top-100-coffee-shops-asia/' };
const candidates = { label: '2026 亞太百大台灣投票名單', url: organizer + '/asia-pacific-100-best-coffee-shops/taiwan/' };
const editorialGuide = { label: 'FLTR Magazine 台北精品咖啡指南', url: 'https://fltrmagazine.com/2026/10/16/best-specialty-coffee-shops-taipei/' };
const foodMedia = { label: '食尚產業誌｜亞太榜單', url: 'https://foodmedia.com.tw/?p=5581' };
const timeOut = { label: 'Time Out｜全球榜單', url: 'https://www.timeout.com/asia/news/worlds-100-best-coffee-shops-2026-14-asian-cafes-make-the-global-list-021926' };
const hypebeast = { label: 'Hypebeast｜2019 亞洲榜單轉載', url: 'https://hypebeast.com/zh/2019/9/50-best-coffee-shops-in-asia' };
const shoppingDesign = { label: 'Shopping Design｜2020 台灣榜單轉載', url: 'https://www.shoppingdesign.com.tw/post/view/5134' };
const cna = { label: '中央社｜2025 全球百大發榜報導', url: 'https://www.cna.com.tw/news/ahel/202502200036.aspx' };

export const sources = [
  world, asia, candidates,
  { label: '2025 全球百大｜中央社留存', url: cna.url },
  { label: 'Big 7 Travel｜2019 亞洲 50', url: hypebeast.url },
  { label: 'Big 7 Travel｜2020 台灣 25', url: shoppingDesign.url },
  editorialGuide,
];

const profiles = {
  noon: 'noon',
  moonshine: 'moonshine-coffee-roasters',
  sole: 'cafe-sole',
  keep: 'keep-coffee-roastery',
  ninety: 'ninety-plus-flagship-store-%E6%97%97%E8%89%A6%E5%BA%97',
  tomorrow: 'tomorrow-coffee-roasters',
  vwi: 'vwi',
  sind: 'coffee-sind',
  factory: 'the-factory-mojocoffee',
  stopover: 'coffee-stopover-black',
  ember: 'project-ember-by-mojocoffee',
};

const profileUrl = id => organizer + '/locales-asiapacific/' + profiles[id] + '/';
const rufousOriginal = { label: '天下雜誌｜Rufous 本店實訪', url: 'https://www.cw.com.tw/article/5134258?template=fashion' };
const mojo = { label: 'Mojocoffee｜官方公告', url: 'https://mojocoffee.com.tw/pages/asia-pacific-100-best-coffee-shops-2026' };
const rufousBigSeven = { label: 'Rufous｜店家榜單紀錄', url: 'https://www.rufous.com.tw/archives/3139' };
const simpleBigSeven = { label: '興波咖啡｜2019 全球榜單轉載', url: 'https://simplekaffa.com/journal/worlds-best-coffee-shops' };
const freeTimes = { label: '自由時報｜2020 全球榜單', url: 'https://playing.ltn.com.tw/article/24240' };
const gabeeAssociation = { label: '台北精品咖啡商業發展協會', url: 'https://www.taipeicoffee.org.tw/2025-coffee-capital-forum/' };

const result = (kind, label, value, refs, note) => ({ kind, label, value, refs, note });
const travelRank = (label, rank, refs, note) => ({
  ...result('editorialRank', 'Big 7 Travel｜' + label, '第 ' + rank + ' 名', refs, note), rank,
});
const taiwan25 = rank => travelRank('2020 台灣最佳 25 家', rank, [shoppingDesign], '旅遊媒體編輯榜。');

const additional = {
  simple: [
    travelRank('2020 全球最佳 50 家', 1, [freeTimes]),
    travelRank('2019 全球最佳 50 家', 1, [simpleBigSeven], '原文指當時位於 Hotel V 地下室的門市。'),
    travelRank('2019 亞洲最佳 50 家', 1, [hypebeast]),
    taiwan25(1),
    result('award', '2016 世界咖啡師大賽', '吳則霖｜冠軍', [
      { label: '臺北旅遊網｜冠軍與品牌資料', url: 'https://www.travel.taipei/en/pictorial/article/47972' },
      { label: 'TheTaste｜2016 賽事報導', url: 'https://www.thetaste.ie/world-barista-champion-announced-at-world-of-coffee-dublin' },
    ]),
  ],
  'rufous-original': [
    result('archive', '2025 全球百大', '第 85 名', [cna, rufousOriginal], '復興南路本店。原主辦榜單頁目前顯示 2026 年版。'),
    travelRank('2019 亞洲最佳 50 家', 16, [hypebeast, rufousBigSeven], '當時二店尚未開設。'),
    taiwan25(6),
  ],
  fika: [
    travelRank('2019 亞洲最佳 50 家', 29, [hypebeast, shoppingDesign]),
    taiwan25(9),
    result('award', '2013 Nordic Roaster（北歐烘豆大賽）', '陳志煌／Fika Fika｜總冠軍', [
      { label: 'Nordic Barista Cup｜賽果', url: 'https://nordicbaristacup.com/2013/09/new-nordic-roaster-results-2/' }, editorialGuide,
    ]),
  ],
  factory: [taiwan25(3)],
  vwi: [result('award', '2017 世界咖啡沖煮大賽', '王策（Chad Wang）｜冠軍', [
    { label: 'SCA（精品咖啡協會）選手訪談', url: 'https://sca.coffee/sca-news/listen/wcc-podcast/06-worlds-apart-z2ccx' },
  ])],
  gabee: [
    taiwan25(14),
    result('award', '2025 世界咖啡烈酒大賽', '林東源（Van Lin）｜第 3 名', [
      { label: '世界咖啡競賽｜官方賽果', url: 'https://wcc.coffee/latest-news/2025-coffeeingoodspirits-announcement' }, gabeeAssociation,
    ]),
    result('award', '2004、2006 台灣咖啡大師大賽', '林東源｜冠軍', [gabeeAssociation]),
  ],
};

const guideMatches = new Set(['simple', 'rufous', 'vwi', 'fika', 'noon', 'oasis-anhe', 'moonshine']);
const noBallotEntry = new Set(['simple', 'fika', 'gabee', 'rufous-original']);
const originalPhoto = (src, pageId, title) => ({
  src, url: tourism + '/' + pageId, title,
  credit: '財團法人台灣觀光協會｜台灣觀光韓文雙月刊，2025 年 5 月號',
  license: '政府資料開放授權條款第 1 版', licenseUrl: 'https://data.gov.tw/license',
  real: true,
});
const storefronts = {
  simple: originalPhoto("https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2FCl%2BsBAAAAfj%2BpXAVko0KqEGgqoyUGYgAAAAACAAAAAAAQZgAAAAEAACAAAACtx9%2Fdpsel1EA4zs7oC8egN%2BtrquYny8%2FQAOdGmcFkKwAAAAAOgAAAAAIAACAAAABzXpgkGdPlsJVA%2BWbrKhzAqIeuK%2BFvM0yM%2BHRf3ntDFTAAAABantYzO96Qfpd%2F8Lux%2BqYuf%2BkI8I98BbbaxTNAJDRb2ZESXuJLoP27bH5ZaKzCAGxAAAAA5KpHqS%2By3B9he%2Bbkge%2BiLZlsFGejPtvZWqLFyJQjg3M7QmYWmuoufwKg5DFOsdTiMl1SMCXB%2BzP%2F5Arfz26XEQ%3D%3D", '3111922_ph_20260630', '興波咖啡華山旗艦店內部'),
  fika: originalPhoto("https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2FCl%2BsBAAAAfj%2BpXAVko0KqEGgqoyUGYgAAAAACAAAAAAAQZgAAAAEAACAAAADDTx%2FvMvBYRFZuBN6B9kbbm7qCDXJJxt2LKYgCiVzN6gAAAAAOgAAAAAIAACAAAAARo6LsMoMpzcDg40thxV9HqQ%2F3Y9ky%2FypQz6sSSeuA%2FjAAAABpDju4kTFUApoEKWqYa6JaTWzfSmFB9Q2rdme54ThVuPj5AsQd2BXOSneIV1TnGd5AAAAA4Oy7yLtJrIbr3f0k1ZgZC3FBY6nUYPhUz55Mhzg5l7rj%2FlWmtAdzZjp1DOek8Wg%2FKZduN1qWLW%2BBUHaXjtilIQ%3D%3D", '3111919_ph_20260630', 'Fika Fika Cafe 伊通街店面'),
};
const thematicImages = [
  ['photo-1749104028313-a175107a5052','someone-is-making-coffee-by-pouring-hot-water-frP4Myn3St4','手沖咖啡'],
  ['photo-1777984994623-6e96b0d6be43','coffee-beans-in-a-roaster-machine-U0H8dqTmtpY','咖啡豆烘焙'],
  ['photo-1529892485617-25f63cd7b1e9','aerial-photography-of-cafe-latte-on-table-ikU3J1nr52w','拿鐵咖啡'],
  ['photo-1770579673859-c38612f6ba66','coffee-brewing-equipment-on-a-counter-q0qXYST9iKY','咖啡器材'],
].map(([file, slug, title]) => ({
  src: 'https://images.unsplash.com/' + file + '?auto=format&fit=crop&w=760&h=460&q=80',
  url: 'https://unsplash.com/photos/' + slug, title, credit: 'Unsplash',
  license: 'Unsplash 授權', licenseUrl: 'https://unsplash.com/license', real: false,
}));

function verifyCafe(cafe, index) {
  const onBallot = !noBallotEntry.has(cafe.id);
  const hasGuide = guideMatches.has(cafe.id);
  
  const asiaRefs = [asia];
  if (profiles[cafe.id]) asiaRefs.unshift({ label: '主辦方店家頁', url: profileUrl(cafe.id) });
  if (['factory', 'ember'].includes(cafe.id)) asiaRefs.push(mojo);
  else if (cafe.asia) asiaRefs.push(foodMedia);
  const evidence = [
    result('global', world.label, cafe.global ? '第 ' + cafe.global + ' 名' : '未列入前 100',
      cafe.global ? [world, timeOut] : [world]),
    result('asia', asia.label, cafe.asia ? '第 ' + cafe.asia + ' 名' : '未列入前 100', asiaRefs),
    result('ballot', candidates.label, onBallot ? '列入投票名單' : '查無同門市條目', [candidates],
      onBallot ? '投票資格。' : undefined),
    ...(additional[cafe.id] ?? []),
  ];
  if (hasGuide) evidence.push(result('guide', '2026 FLTR Magazine｜台北精品咖啡指南', '編輯選錄', [editorialGuide], '店家選錄，無名次。'));
  const photo = storefronts[cafe.id] ?? thematicImages[index % thematicImages.length];
  const photoPage = profiles[cafe.id] ? profileUrl(cafe.id)
    : hasGuide ? editorialGuide.url : cafe.id === 'rufous-original' ? rufousOriginal.url : null;
  const historyRank = cafe.id === 'rufous-original' ? 85 : null;
  return { ...cafe, historyRank, onBallot, evidence, photo, photoPage };
}

export const cafes = directory.map(verifyCafe);


const editionLabel = label => 'Big 7 Travel｜' + label;
const editorialEdition = label => cafe => cafe.evidence.find(row => row.label === editionLabel(label))?.rank;
export const editions = [
  { id: 'world26', source: world, rank: cafe => cafe.global },
  { id: 'asia26', source: asia, rank: cafe => cafe.asia },
  { id: 'world25', source: { label: '2025 全球百大', url: cna.url }, rank: cafe => cafe.historyRank },
  { id: 'big7world20', source: { label: 'Big 7 Travel｜2020 全球 50', url: freeTimes.url }, rank: editorialEdition('2020 全球最佳 50 家') },
  { id: 'big7world19', source: { label: 'Big 7 Travel｜2019 全球 50', url: simpleBigSeven.url }, rank: editorialEdition('2019 全球最佳 50 家') },
  { id: 'big7asia19', source: { label: 'Big 7 Travel｜2019 亞洲 50', url: hypebeast.url }, rank: editorialEdition('2019 亞洲最佳 50 家') },
  { id: 'big7tw20', source: { label: 'Big 7 Travel｜2020 台灣 25', url: shoppingDesign.url }, rank: editorialEdition('2020 台灣最佳 25 家') },
];
