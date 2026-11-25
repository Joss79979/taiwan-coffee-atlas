import React, {useMemo,useState,useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {Search, MapPin, ExternalLink, Bookmark, Coffee, SlidersHorizontal, X, ArrowUpRight, Check, Award, Globe2, Menu, ListFilter} from 'lucide-react';
import {cafes,checkedOn,editions,sources} from './data';
import './style.css';
const areas=['全部','台北','台中','台南','高雄'];
const filters=[['all','所有店家'],['asia','亞太百大'],['global','全球百大'],['candidate','僅候選'],['archive','2025 全球百大'],['editorialRank','Big 7 Travel 榜單'],['guide','專題選錄'],['award','競賽背景']];
const evidenceTypes = {
 global: '正式榜單', asia: '正式榜單', ballot: '候選紀錄', archive: '歷屆榜單',
 editorialRank: '媒體榜單', award: '競賽紀錄', guide: '編輯選錄',
};

function matchesFilter(cafe, filter) {
 if (filter === 'all') return true;
 if (filter === 'asia' || filter === 'global') return Boolean(cafe[filter]);
 if (filter === 'candidate') return cafe.onBallot && !cafe.asia;
 return cafe.evidence.some(entry => entry.kind === filter);
}

function CafeBadges({ cafe }) {
 const editorial = cafe.evidence.find(entry => entry.kind === 'editorialRank');
 return <div className="badges">
   {cafe.global && <span className="badge gold"><Globe2 size={12}/> 2026 全球 #{cafe.global}</span>}
   {cafe.asia && <span className="badge sage"><Award size={12}/> 2026 亞太 #{cafe.asia}</span>}
   {cafe.onBallot && !cafe.asia && <span className="badge muted">2026 亞太候選</span>}
   {cafe.historyRank && <span className="badge gold">2025 全球 #{cafe.historyRank}</span>}
   {editorial && <span className="badge muted">Big 7 Travel</span>}
   {cafe.evidence.some(entry => entry.kind === 'award') && <span className="badge gold">競賽紀錄</span>}
 </div>;
}

function CafeCover({ cafe, eager }) {
 const [failed, setFailed] = useState(false);
 const photo = cafe.photo;
 return <figure className="cafe-visual cafe-cover">
   {failed
     ? <Coffee className="cup-illustration" size={72} strokeWidth={1} aria-hidden="true"/>
     : <img alt={photo.real ? photo.title : photo.title + '示意照'} src={photo.src}
         loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)}/>}
   <figcaption className="cover-caption">
     <span>{failed ? '封面暫無法載入' : photo.real ? '店家實景' : '咖啡示意照'}</span>
     <a href={photo.url} target="_blank" rel="noreferrer" aria-label={cafe.name + ' 的封面來源'}>圖片來源 <ExternalLink size={12}/></a>
   </figcaption>
 </figure>;
}

function CafeEvidence({ cafe }) {
 return <section className="evidence-section" aria-labelledby="evidence-title">
   <div className="evidence-heading">
     <h3 id="evidence-title">榜單與查證紀錄</h3>
     <time dateTime={checkedOn}>{checkedOn}</time>
   </div>
   <ul className="evidence-list">
     {cafe.evidence.map(entry => <li key={entry.label}>
       <div className="evidence-meta"><span>{evidenceTypes[entry.kind]}</span><strong>{entry.value}</strong></div>
       <p className="evidence-label">{entry.label}</p>
       {entry.note && <p className="evidence-note">{entry.note}</p>}
       <div className="evidence-links">
         {entry.refs.map(source => <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
           {source.label} <ExternalLink size={12}/>
         </a>)}
       </div>
     </li>)}
   </ul>
   <p className="photo-credit">
     封面 <a href={cafe.photo.url} target="_blank" rel="noreferrer">{cafe.photo.credit}</a>
     {' · '}<a href={cafe.photo.licenseUrl} target="_blank" rel="noreferrer">{cafe.photo.license}</a>
     {cafe.photoPage && <>{' · '}<a href={cafe.photoPage} target="_blank" rel="noreferrer">查看店家圖文</a></>}
   </p>
 </section>;
}

function RankingLists({ onChoose }) {
 const [edition, setEdition] = useState('asia26');
 const list = editions.find(item => item.id === edition);
 const shops = cafes.map(cafe => ({ cafe, rank: list.rank(cafe) }))
   .filter(item => Number.isInteger(item.rank))
   .sort((a, b) => a.rank - b.rank);
 return <section id="rankings" className="container ranking-section">
   <div className="ranking-heading">
     <div><h2>各年榜單名單</h2><p>顯示本站收錄的台灣店家，名次為原榜單名次。</p></div>
     <label className="edition-select">選擇榜單
       <select value={edition} onChange={event => setEdition(event.target.value)}>
         {editions.map(item => <option key={item.id} value={item.id}>{item.source.label}</option>)}
       </select>
     </label>
   </div>
   <table className="ranking-table">
     <thead><tr><th scope="col">名次</th><th scope="col">店家</th><th scope="col">地區</th></tr></thead>
     <tbody>{shops.map(({cafe,rank}) => <tr key={cafe.id}>
       <td>#{rank}</td><td><button onClick={() => onChoose(cafe)}>{cafe.name}</button></td><td>{cafe.city}</td>
     </tr>)}</tbody>
   </table>
   <a className="ranking-source" href={list.source.url} target="_blank" rel="noreferrer">查看榜單來源 <ExternalLink size={14}/></a>
 </section>;
}

function App(){
 const [query,setQuery]=useState(''),[area,setArea]=useState('全部'),[filter,setFilter]=useState('all'),[sort,setSort]=useState('asia'),[selected,setSelected]=useState(null),[fav,setFav]=useState(()=>{try{return JSON.parse(localStorage.getItem('coffee-atlas-favorites')||'[]')}catch{return []}}),[visited,setVisited]=useState(()=>{try{return JSON.parse(localStorage.getItem('coffee-atlas-visited')||'[]')}catch{return []}}),[onlyFav,setOnlyFav]=useState(false),[showMenu,setShowMenu]=useState(false);
 useEffect(()=>localStorage.setItem('coffee-atlas-favorites',JSON.stringify(fav)),[fav]);
 useEffect(()=>localStorage.setItem('coffee-atlas-visited',JSON.stringify(visited)),[visited]);
 useEffect(() => {
   if (!selected) return;
   const closeOnEscape = event => { if (event.key === 'Escape') setSelected(null); };
   window.addEventListener('keydown', closeOnEscape);
   return () => window.removeEventListener('keydown', closeOnEscape);
 }, [selected]);
 const setArray=(fn,id)=>fn(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
 const shown=useMemo(()=>cafes.filter(c=>(area==='全部'||c.city===area)&&matchesFilter(c,filter)&&(!onlyFav||fav.includes(c.id))&&[c.name,c.city,c.notes,...c.styles,...c.evidence.map(entry=>entry.label)].join(' ').toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>sort==='name'?a.name.localeCompare(b.name,'zh-Hant'):sort==='global'?(a.global??999)-(b.global??999):(a.asia??999)-(b.asia??999)),[query,area,filter,sort,fav,onlyFav]);
 const global=cafes.filter(x=>x.global).length, asia=cafes.filter(x=>x.asia).length;
 return <><header className="header"><div className="container nav"><a href="#top" className="brand"><span className="brand-mark"><Coffee size={18}/></span><span>COFFEE <b>ATLAS</b><small>TAIWAN</small></span></a><nav className={showMenu?'links open':'links'}><a href="#explore" onClick={()=>setShowMenu(false)}>探索咖啡館</a><a href="#rankings" onClick={()=>setShowMenu(false)}>榜單名單</a><a href="#method" onClick={()=>setShowMenu(false)}>評鑑說明</a><a href="#sources" onClick={()=>setShowMenu(false)}>資料來源</a></nav><button className="menu" onClick={()=>setShowMenu(!showMenu)} aria-label="切換選單"><Menu size={23}/></button></div></header>
 <main id="top"><section className="hero"><div className="container hero-grid"><div className="hero-content"><div className="eyebrow"><span className="tiny-line"/> TAIWAN SPECIALTY COFFEE GUIDE</div><h1>每一家好咖啡，<br/><em>都有值得探索的理由。</em></h1><p>全球百大、亞太百大、咖啡師競賽與精品烘焙品牌。用更有依據的方式，找到下一杯值得喝的咖啡。</p><div className="hero-actions"><a className="btn primary" href="#explore">開始探索 <ArrowUpRight size={17}/></a><a className="btn ghost" href="#method">了解評選方式</a></div><div className="hero-stats"><div><strong>{cafes.length}</strong><span>已查核咖啡館</span></div><div><strong>{asia}</strong><span>2026 亞太百大入榜</span></div><div><strong>{global}</strong><span>2026 全球百大入榜</span></div></div></div><div className="hero-art"><div className="sun"/><div className="coffee-cup"><div className="coffee-inner"/><div className="handle"/></div><div className="hero-art-note">A GOOD CUP<br/>IS WORTH<br/>FINDING.</div><div className="art-caption">THE ART OF COFFEE, EVERYWHERE IN TAIWAN.</div></div></div></section>
 <section id="explore" className="explore container"><div className="section-top"><div><span className="kicker">CURATED DISCOVERIES</span><h2>探索台灣精品咖啡</h2><p>依地區、評鑑資格與風味特色快速找到你的下一站。</p></div><div className="summary"><span className="counter">{shown.length}</span><span>家符合條件</span></div></div>
 <div className="filter-panel"><div className="search"><Search size={19}/><input placeholder="搜尋店名、手沖、SOE、烘焙..." value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<button aria-label="清除搜尋" onClick={()=>setQuery('')}><X size={17}/></button>}</div><div className="filter-row"><div className="pills">{areas.map(a=><button key={a} className={'pill '+(area===a?'on':'')} onClick={()=>setArea(a)}>{a}</button>)}</div><div className="selects"><label><ListFilter size={16}/><select value={filter} onChange={e=>setFilter(e.target.value)}>{filters.map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></label><label><SlidersHorizontal size={16}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="asia">亞太排名優先</option><option value="global">全球排名優先</option><option value="name">店名排序</option></select></label></div></div><div className="filter-bottom"><button className={'quick '+(onlyFav?'chosen':'')} onClick={()=>setOnlyFav(!onlyFav)}><Bookmark size={15} fill={onlyFav?'currentColor':'none'}/> 我的收藏（{fav.length}）</button><span>已造訪 <b>{visited.length}</b> / {cafes.length} 家</span></div></div>
 {shown.length===0?<div className="empty"><Coffee size={32}/><h3>找不到符合條件的咖啡館</h3><p>試試其他城市或移除篩選條件。</p><button className="btn primary" onClick={()=>{setArea('全部');setFilter('all');setQuery('');setOnlyFav(false)}}>清除篩選</button></div>:<div className="cards">{shown.map((c,index)=><article className="cafe" key={c.id}><CafeCover cafe={c} eager={index<3}/><div className="cafe-body"><div className="cafe-meta"><span><MapPin size={14}/>{c.city}</span><button aria-label="切換收藏" className={'bookmark '+(fav.includes(c.id)?'saved':'')} onClick={()=>setArray(setFav,c.id)}><Bookmark size={18} fill={fav.includes(c.id)?'currentColor':'none'}/></button></div><h3>{c.name}</h3><CafeBadges cafe={c}/><p>{c.notes}</p><div className="tags">{c.styles.slice(0,3).map(s=><span key={s}>{s}</span>)}</div><div className="cafe-foot"><button onClick={()=>setSelected(c)}>查看詳情 <ArrowUpRight size={15}/></button><label className="visited"><input type="checkbox" checked={visited.includes(c.id)} onChange={()=>setArray(setVisited,c.id)}/> 已造訪</label></div></div></article>)}</div>}
 </section><RankingLists onChoose={setSelected}/><section id="method" className="method"><div className="container method-grid"><div><span className="kicker light">BEYOND THE RANKINGS</span><h2>不只看排名，<br/>更重視咖啡本身。</h2><p>依店家與分店核對榜單、投票名單及競賽賽果。打開咖啡館詳情可查看原始來源與查核日期。</p></div><div className="method-boxes"><div><span>01 /</span><b>國際榜單</b><p>收錄全球百大、亞太百大及有年份的歷屆名次。</p></div><div><span>02 /</span><b>專業資歷</b><p>咖啡師、烘豆師競賽與代表品牌。</p></div><div><span>03 /</span><b>媒體選錄</b><p>Big 7 Travel 媒體榜單與 FLTR Magazine 編輯選錄。</p></div><div><span>04 /</span><b>資料透明</b><p>每間店都附榜單查核結果、分店或品牌註記及來源。</p></div></div></div></section><footer id="sources"><div className="container"><div className="footer-title"><Coffee size={21}/><strong>COFFEE ATLAS TAIWAN</strong></div><p>獨立整理的台灣精品咖啡探索專案，非榜單主辦單位官方網站。</p><div className="source-links">{sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label} <ExternalLink size={13}/></a>)}</div><p className="disclaimer">榜單查核日期 {checkedOn}。卡片標明店家實景或咖啡示意照。店家資訊及營業狀況以最新公告為準。</p><div className="copyright">© {new Date().getFullYear()} Coffee Atlas Taiwan · Built with curiosity & coffee.</div></div></footer></main>
 {selected&&<div className="modal-overlay" onClick={()=>setSelected(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="cafe-profile-title" onClick={e=>e.stopPropagation()}><button className="close" aria-label="關閉" onClick={()=>setSelected(null)}><X size={20}/></button><div className="modal-kicker">COFFEE PROFILE / {selected.city}</div><h2 id="cafe-profile-title">{selected.name}</h2><CafeBadges cafe={selected}/><p>{selected.notes}</p><div className="tags">{selected.styles.map(t=><span key={t}>{t}</span>)}</div><div className="modal-actions"><a className="btn primary" target="_blank" rel="noreferrer" href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(selected.name+' '+selected.city+' 台灣')}>Google Maps 尋找店家 <ExternalLink size={16}/></a><button className="btn secondary" onClick={()=>setArray(setFav,selected.id)}><Bookmark size={16}/>{fav.includes(selected.id)?'已收藏':'加入收藏'}</button></div><CafeEvidence cafe={selected}/><div className="modal-note">地圖按鈕會以店名搜尋，出發前請確認分店及營業資訊。</div></div></div>}
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
