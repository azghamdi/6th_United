const registrationUrl = 'https://indico.un.org/event/1021645/registrations/24259/';

const programme = [
  {label:'9 November — Opening',eyebrow:'Day one • Riyadh time',title:'Monday, 9 November 2026',events:[
    {time:'09:00',kind:'session',type:'Accompanying event',title:'Second Saudi Statistics Forum',room:'Main Auditorium',duration:'6 hours',description:'An annual gathering of data experts and decision-makers exploring the strategic role of statistics in sustainable development.'},
    {time:'13:00',kind:'workshop',type:'Workshop',title:'Fundamentals of Statistical Indicator Design',room:'Learning Room 1',duration:'75 minutes',topics:['Define the purpose of an indicator','Select suitable data sources','Build the measurement methodology','Test and document the indicator']},
    {time:'15:00',kind:'session',type:'Media briefing',title:'Forum Press Conference',room:'Media Zone',duration:'60 minutes',description:'A media briefing on the sixth edition, its programme and international partnerships.'},
    {time:'15:30',kind:'workshop',type:'Workshop',title:'Communicating Data Effectively',room:'Learning Room 2',duration:'60 minutes',topics:['Understand audience needs','Simplify statistical concepts','Choose the right visualisation','Craft a clear and memorable message']},
    {time:'17:00',kind:'session',type:'Opening session',title:'Opening Ceremony and Welcome Dinner',room:'Main Auditorium',duration:'2 hours',description:'Official opening and welcome for participants and delegations arriving in Riyadh.'}
  ]},
  {label:'10 November — Main programme',eyebrow:'Day two • Riyadh time',title:'Tuesday, 10 November 2026',events:[
    {time:'09:00',kind:'session',type:'Plenary session',title:'Welcome and Opening Remarks',room:'Main Auditorium',duration:'15 minutes',description:'Opening of the main programme and introduction to the forum’s four thematic areas.'},
    {time:'09:15',kind:'session',type:'Plenary session',title:'Measuring Progress Towards 2030 and Beyond',room:'Main Auditorium',duration:'75 minutes',description:'A global discussion on the role of data in measuring progress and creating more responsive development policies.'},
    {time:'10:50',kind:'workshop',type:'Workshop',title:'From Data to Quality of Life: Neighbourhood Intelligence',room:'Learning Room 1',duration:'60 minutes',topics:['Use geospatial data to understand neighbourhood needs','Connect urban indicators to quality of life','Localise the Sustainable Development Goals','Turn analysis into actionable decisions']},
    {time:'11:00',kind:'workshop',type:'Workshop',title:'Data Governance and Privacy by Design',room:'Learning Room 2',duration:'75 minutes',topics:['Define roles and responsibilities','Classify sensitive data','Embed privacy in the development lifecycle','Measure compliance and manage risk']},
    {time:'11:50',kind:'session',type:'Specialised session',title:'Strengthening Ethical Safeguards and Transparency in Advanced Data Technologies',room:'Hall 3',duration:'90 minutes',description:'Practical mechanisms for applying ethics and transparency throughout the data lifecycle.'},
    {time:'13:30',kind:'workshop',type:'Workshop',title:'Responsible AI for Official Statistics',room:'Learning Room 3',duration:'90 minutes',topics:['Assess data readiness','Detect model bias','Explain and validate results','Establish governance and accountability']},
    {time:'15:00',kind:'workshop',type:'Workshop',title:'Building Decision-Support Dashboards',room:'Data Lab',duration:'75 minutes',topics:['Select performance indicators','Build a visual hierarchy','Design interactions and filters','Test the dashboard with users']}
  ]},
  {label:'11 November',eyebrow:'Day three • Preliminary programme',title:'Wednesday, 11 November 2026',events:[
    {time:'09:00',kind:'session',type:'Keynote session',title:'AI Starts with Readiness: Data, People and Institutions',room:'Main Auditorium',duration:'60 minutes',description:'A discussion on institutional, workforce and data readiness before adopting artificial intelligence.'},
    {time:'10:30',kind:'workshop',type:'Workshop',title:'Administrative Data Quality Lab',room:'Learning Room 2',duration:'90 minutes',topics:['Assess administrative data quality','Identify gaps and sources of bias','Align data with SDG indicators','Create a measurable improvement plan']},
    {time:'13:00',kind:'session',type:'Panel discussion',title:'From Fragmented Data to Better Decisions',room:'Hall 4',duration:'60 minutes',description:'Connecting crisis data systems to create a shared operational picture for faster response.'},
    {time:'15:00',kind:'workshop',type:'Workshop',title:'Data Storytelling for Decision-Makers',room:'Learning Room 3',duration:'75 minutes',topics:['Define the message and audience','Select the right indicator','Design a clear visual narrative','Translate findings into recommendations']},
    {time:'16:30',kind:'workshop',type:'Workshop',title:'Geospatial Data Analysis for Urban Planning',room:'Data Lab',duration:'90 minutes',topics:['Prepare spatial data','Analyse access to services','Identify patterns and gaps','Build maps that support planning decisions']}
  ]},
  {label:'12 November — Closing',eyebrow:'Day four • Preliminary programme',title:'Thursday, 12 November 2026',events:[
    {time:'09:30',kind:'session',type:'Keynote session',title:'Data-Driven Climate Action',room:'Main Auditorium',duration:'60 minutes',description:'Moving from environmental monitoring to climate policy based on accurate, comparable evidence.'},
    {time:'11:00',kind:'workshop',type:'Workshop',title:'Open Data and FAIR Principles',room:'Learning Room 1',duration:'90 minutes',topics:['Make data findable','Improve access and use','Enable interoperability across platforms','Support responsible reuse']},
    {time:'12:45',kind:'workshop',type:'Workshop',title:'Measuring the Impact of Data Initiatives',room:'Learning Room 2',duration:'75 minutes',topics:['Develop a theory of change','Select impact indicators','Design an appropriate baseline','Communicate and learn from results']},
    {time:'13:30',kind:'session',type:'Closing session',title:'From Riyadh to the World: Commitments for the Future of Data',room:'Main Auditorium',duration:'60 minutes',description:'Forum outcomes and priority areas for future action and cooperation.'},
    {time:'14:15',kind:'workshop',type:'Workshop',title:'Data Crisis Preparedness and Business Continuity',room:'Learning Room 3',duration:'60 minutes',topics:['Identify critical data services','Assess risks and dependencies','Create response and recovery plans','Test readiness and continuously improve']}
  ]}
];

const icons={pin:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',calendar:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>'};
const timeline=document.querySelector('.timeline'),dayTitle=document.querySelector('.agenda .title h2'),dayEyebrow=document.querySelector('.agenda .title small'),programmeNote=document.querySelector('.program-note span');
let selectedDay=0,activeKind='session';
const metadata=(event,date)=>`<p class="session-meta"><span>${icons.pin}${event.room}</span><span>${icons.clock}${event.duration}</span><span>${icons.calendar}${date}</span></p>`;
function sessionDetails(event,index){const portraits=[['speaker-saudi-man-unified.png','speaker-saudi-woman-unified.png'],['speaker-international-woman-unified.png','speaker-saudi-man-unified.png'],['speaker-international-man-unified.png','speaker-saudi-woman-unified.png'],['speaker-saudi-woman-unified.png','speaker-international-man-unified.png']];const [speakerPhoto,moderatorPhoto]=portraits[(selectedDay+index)%portraits.length];const photo=(file,label)=>`<span class="avatar portrait"><img src="assets/${file}" alt="${label}" loading="lazy"><i>Concept image</i></span>`;return `<div class="session-people"><div class="person-block"><small class="person-role">Speaker</small><div class="person-row">${photo(speakerPhoto,'Concept portrait for the speaker')}<div><b>To be announced</b><p>Speaker name</p><em>Title and organisation</em></div></div></div><div class="person-block moderator"><small class="person-role">Moderator</small><div class="person-row">${photo(moderatorPhoto,'Concept portrait for the moderator')}<div><b>To be announced</b><p>Moderator name</p><em>Title and organisation</em></div></div></div></div><div class="session-description"><small>About this session</small><p>${event.description}</p></div>`}
function workshopDetails(event){const topics=event.topics.map(topic=>`<li>${topic}</li>`).join('');return `<div class="workshop-layout"><div class="workshop-topics"><h4>Workshop topics</h4><ol>${topics}</ol></div><aside class="workshop-meta"><ul><li><i>◫</i><span><small>Facilitator</small><b>To be announced</b></span></li><li><i>⌖</i><span><small>Room</small><b>${event.room}</b></span></li><li><i>▣</i><span><small>Date</small><b>${programme[selectedDay].title}</b></span></li><li><i>◷</i><span><small>Time</small><b>${event.time}</b></span></li><li><i>◴</i><span><small>Duration</small><b>${event.duration}</b></span></li></ul><a class="workshop-register" href="${registrationUrl}" target="_blank" rel="noopener">Register now</a></aside></div>`}
function renderProgramme(){const day=programme[selectedDay];dayTitle.textContent=day.title;dayEyebrow.textContent=day.eyebrow;programmeNote.textContent=selectedDay>1?'Preliminary programme presentation; details will be updated when the final edition is approved.':'Selections from the preliminary official programme; rooms and details may change.';const visible=day.events.filter(event=>event.kind===activeKind);timeline.innerHTML=visible.map((event,index)=>`<article class="event" data-kind="${event.kind}"><time>${event.time}</time><div class="card"><button class="expand" aria-label="Open details">＋</button><div class="event-head">${event.kind==='workshop'?`<b class="workshop-number">${String(index+1).padStart(2,'0')}</b>`:''}<span>${event.type}</span><h3>${event.title}</h3>${metadata(event,day.title)}</div><div class="details">${event.kind==='workshop'?workshopDetails(event):sessionDetails(event,index)}</div></div></article>`).join('');timeline.querySelectorAll('.event .card').forEach(card=>{card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-expanded','false')});if(!visible.length)timeline.innerHTML='<div class="empty-programme">No events are available in this category for the selected day.</div>'}
document.addEventListener('click',event=>{const card=event.target.closest('.event .card');if(!card||event.target.closest('.workshop-register'))return;const item=card.closest('.event');timeline.querySelectorAll('.event.open').forEach(openItem=>{if(openItem===item)return;openItem.classList.remove('open');openItem.querySelector('.expand').textContent='＋';openItem.querySelector('.card').setAttribute('aria-expanded','false')});item.classList.toggle('open');card.querySelector('.expand').textContent=item.classList.contains('open')?'−':'＋';card.setAttribute('aria-expanded',String(item.classList.contains('open')))});
document.addEventListener('keydown',event=>{const card=event.target.closest?.('.event .card');if(!card||!['Enter',' '].includes(event.key))return;event.preventDefault();card.click()});
document.querySelectorAll('.filter button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter button').forEach(item=>item.classList.remove('active'));button.classList.add('active');activeKind=button.dataset.kind;renderProgramme()}));
const nativeDaySelect=document.querySelector('#programme-day');
if(nativeDaySelect){
  nativeDaySelect.innerHTML=programme.map((day,index)=>`<option value="${index}" ${index===selectedDay?'selected':''}>${day.label}</option>`).join('');
  nativeDaySelect.classList.add('native-day-select');
  const custom=document.createElement('div');
  custom.className='programme-day-tabs';
  custom.setAttribute('role','tablist');
  custom.setAttribute('aria-label','Select programme day');
  nativeDaySelect.after(custom);
  programme.forEach((day,index)=>{
    const option=document.createElement('button');
    option.type='button';
    option.className='programme-day-tab'+(index===selectedDay?' active':'');
    option.setAttribute('role','tab');
    option.setAttribute('aria-selected',String(index===selectedDay));
    option.innerHTML=`<span>Nov ${9+index}</span><small>${index===0?'Opening':index===3?'Closing':'Programme'}</small>`;
    option.onclick=()=>{
      selectedDay=index;
      nativeDaySelect.value=index;
      custom.querySelectorAll('.programme-day-tab').forEach((item,itemIndex)=>{
        const active=itemIndex===index;
        item.classList.toggle('active',active);
        item.setAttribute('aria-selected',String(active));
      });
      renderProgramme();
      option.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    };
    custom.appendChild(option);
  });
}
const menuButton=document.querySelector('.menu'),navLinks=document.querySelector('header .links');if(menuButton&&!menuButton.querySelector('span'))menuButton.innerHTML='<span></span><span></span><span></span>';menuButton?.addEventListener('click',()=>{const open=navLinks.classList.toggle('mobile-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu')});
document.addEventListener('keydown',event=>{const card=event.target.closest?.('.event .card');if(card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();card.click()}if(event.key==='Escape'){document.querySelector('.custom-day-select')?.classList.remove('open');document.querySelector('.day-select-button')?.setAttribute('aria-expanded','false');navLinks?.classList.remove('mobile-open');menuButton?.setAttribute('aria-expanded','false')}});
const dialog=document.querySelector('#registration');document.querySelectorAll('.open-form').forEach(button=>button.onclick=()=>dialog?.showModal());document.querySelector('.close')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog?.querySelector('form')?.addEventListener('submit',event=>{event.preventDefault();event.currentTarget.hidden=true;dialog.querySelector('.success').hidden=false});dialog?.querySelector('.done')?.addEventListener('click',()=>dialog.close());
renderProgramme();

function initPageLoader(){
  const isArabic=document.documentElement.lang==='ar';
  const loader=document.createElement('div');
  loader.className='page-loader';loader.setAttribute('role','status');loader.setAttribute('aria-label',isArabic?'جاري تحميل الموقع':'Loading website');
  const logoSrc='assets/forum-mark-loader.svg?v=1';
  loader.innerHTML=`<div class="loader-pattern" aria-hidden="true"></div><div class="loader-content"><div class="loader-forum-only" style="--loader-logo:url('${logoSrc}')" aria-hidden="true"></div><div class="loader-progress"><i></i></div><div class="loader-year">RIYADH <span>•</span> 2026</div></div>`;
  document.body.prepend(loader);document.documentElement.classList.add('is-loading');const started=performance.now();let finished=false;
  const finish=()=>{if(finished)return;finished=true;setTimeout(()=>{loader.classList.add('is-leaving');document.documentElement.classList.remove('is-loading');setTimeout(()=>loader.remove(),700)},Math.max(0,1250-(performance.now()-started)))};
  if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});setTimeout(finish,3000);
}
initPageLoader();


/* Curated Saudi Statistics Forum montage v39 */
(function(){
  var videos=[].slice.call(document.querySelectorAll('.hero-video .hero-clip'));
  if(videos.length<2)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){videos.forEach(function(v){v.pause()});return}
  var sequence=[
    {video:0,start:0,end:6.65},
    {video:1,start:11.7,end:14.4},
    {video:1,start:19.55,end:21.7},
    {video:1,start:39.05,end:42.15},
    {video:1,start:55.05,end:58.0}
  ];
  var current=0,busy=false;videos.forEach(function(v){v.muted=true});
  function activate(v){videos.forEach(function(x){x.classList.toggle('active',x===v);if(x!==v)window.setTimeout(function(){x.pause()},760)})}
  function start(i){current=i%sequence.length;var s=sequence[current],v=videos[s.video];busy=true;function seek(){v.currentTime=s.start;v.play().catch(function(){})}if(v.readyState<1)v.addEventListener('loadedmetadata',seek,{once:true});else seek();var done=function(){v.removeEventListener('seeked',done);activate(v);busy=false};v.addEventListener('seeked',done)}
  videos.forEach(function(v){v.addEventListener('timeupdate',function(){var s=sequence[current];if(!busy&&videos[s.video]===v&&v.currentTime>=s.end-.08)start(current+1)})});
  videos[0].addEventListener('loadedmetadata',function(){start(0)},{once:true});window.setTimeout(function(){if(videos[0].duration>0)start(0)},1500);
})();

/* Partners section heading, aligned with the shared Saudi visual identity. */
(function addPartnersHeading(){
  const section=document.querySelector('.partners');
  if(!section||section.querySelector('.partners-heading'))return;
  section.insertAdjacentHTML('afterbegin','<div class="partners-heading"><div><span>Partners in success</span><h2>Partners</h2></div><small>A collaborative ecosystem supporting the forum</small></div>');
})();

/* Use the supplied official venue photograph in the venue showcase. */
const venuePhoto=document.querySelector('.venue-showcase .venue-photo img');
if(venuePhoto){
  venuePhoto.src='assets/sofitel-riyadh-venue-dark.png';
  venuePhoto.alt='Sofitel Riyadh Hotel and Convention Centre';
}

/* Speaker profile cards and accessible profile dialog. */
(function initSpeakerProfiles(){
  const grid=document.querySelector('.speakers-grid');
  if(!grid)return;
  const unifiedImages={
    'assets/speaker-saudi-woman.webp':'assets/speaker-saudi-woman-unified.png',
    'assets/speaker-saudi-man.webp':'assets/speaker-saudi-man-unified.png',
    'assets/speaker-international-woman.webp':'assets/speaker-international-woman-unified.png',
    'assets/speaker-international-man.webp':'assets/speaker-international-man-unified.png'
  };
  grid.querySelectorAll('.speaker-card').forEach(card=>{
    const image=unifiedImages[card.dataset.image];
    if(!image)return;
    const portrait=card.querySelector('.speaker-image img');
    if(!portrait)return;
    const ready=new Image();
    ready.onload=()=>{portrait.src=image;card.dataset.image=image;};
    ready.src=image;
  });
  const additional=[
    {name:'Dr Reem Alsubaie',role:'Director of Responsible AI',bio:'A specialist in responsible AI and algorithmic governance, developing trusted solutions that improve decision quality and public services.',image:'assets/speaker-saudi-woman-2.png'},
    {name:'Khalid Aldosari',role:'Head of Data Platform Engineering',bio:'An expert in national data platforms and secure cloud infrastructure, leading technical teams that turn large-scale data into useful products.',image:'assets/speaker-saudi-man-2.png'},
    {name:'Jonathan Reed',role:'US Data Governance Expert',bio:'An adviser in data governance and digital regulation who has contributed to international initiatives on data sharing, privacy and institutional trust.',image:'assets/speaker-american-man.png'},
    {name:'Dr Lucía Navarro',role:'Spanish Digital Innovation Researcher',bio:'A researcher in digital innovation and open data, developing collaborative models that connect research, public policy and social impact.',image:'assets/speaker-spanish-woman.png'}
  ];
  additional.forEach(person=>grid.insertAdjacentHTML('beforeend',`<button class="speaker-card" type="button" data-name="${person.name}" data-role="${person.role}" data-bio="${person.bio}" data-image="${person.image}"><span class="speaker-image"><img src="${person.image}" alt="${person.name}"></span><span class="speaker-info"><b>${person.name}</b><small>${person.role}</small><i>View profile →</i></span></button>`));
  const cards=[...grid.querySelectorAll('.speaker-card')];
  if(!cards.length)return;
  const controls=document.createElement('div');
  controls.className='speakers-controls';
  controls.innerHTML='<button type="button" class="speaker-prev" aria-label="Previous speaker">←</button><button type="button" class="speaker-next" aria-label="Next speaker">→</button>';
  document.querySelector('.speakers-heading')?.appendChild(controls);
  let activeIndex=0,timer;
  const goTo=index=>{activeIndex=(index+cards.length)%cards.length;cards[activeIndex].scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})};
  controls.querySelector('.speaker-prev').addEventListener('click',()=>goTo(activeIndex-1));
  controls.querySelector('.speaker-next').addEventListener('click',()=>goTo(activeIndex+1));
  const stop=()=>clearInterval(timer),start=()=>{stop();timer=setInterval(()=>goTo(activeIndex+1),3800)};
  grid.addEventListener('mouseenter',stop);grid.addEventListener('mouseleave',start);grid.addEventListener('focusin',stop);grid.addEventListener('focusout',start);grid.addEventListener('touchstart',stop,{passive:true});grid.addEventListener('touchend',start,{passive:true});
  const observer=new IntersectionObserver(entries=>entries[0].isIntersecting?start():stop(),{threshold:.35});observer.observe(grid);
  const profile=document.createElement('dialog');
  profile.className='speaker-profile-dialog';
  profile.setAttribute('aria-labelledby','speaker-profile-name');
  profile.innerHTML='<button class="speaker-dialog-close" type="button" aria-label="Close">×</button><div class="speaker-dialog-layout"><div class="speaker-dialog-photo"><img alt=""></div><div class="speaker-dialog-copy"><small>Speaker profile</small><h2 id="speaker-profile-name"></h2><h3></h3><p></p></div></div>';
  document.body.appendChild(profile);
  const image=profile.querySelector('img'),name=profile.querySelector('h2'),role=profile.querySelector('h3'),bio=profile.querySelector('p');
  cards.forEach(card=>card.addEventListener('click',()=>{
    image.src=card.dataset.image;image.alt=card.dataset.name;
    name.textContent=card.dataset.name;role.textContent=card.dataset.role;bio.textContent=card.dataset.bio;
    profile.showModal();
  }));
  profile.querySelector('.speaker-dialog-close').addEventListener('click',()=>profile.close());
  profile.addEventListener('click',event=>{if(event.target===profile)profile.close()});
})();
/* Keep registration choices in the visual space formerly occupied by the event ticket. */
const heroRegistrationModes=document.querySelector('.hero-v2-content .hero-registration-modes');
const mainHero=document.querySelector('.hero-v2');
if(heroRegistrationModes&&mainHero)mainHero.appendChild(heroRegistrationModes);
