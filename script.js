const registrationUrl = 'https://indico.un.org/event/1021645/registrations/24259/';

const programme = [
  {
    label: '9 نوفمبر — الافتتاح', eyebrow: 'اليوم الأول • بتوقيت الرياض', title: 'الاثنين، 9 نوفمبر 2026',
    events: [
      {time:'09:00 ص',kind:'session',type:'فعالية مصاحبة',title:'المنتدى السعودي الثاني للإحصاء',room:'القاعة العامة',duration:'6 ساعات',description:'لقاء سنوي يجمع خبراء البيانات والمسؤولين لاستكشاف الدور الاستراتيجي للإحصاءات في دعم التنمية المستدامة.'},
      {time:'03:00 م',kind:'session',type:'لقاء إعلامي',title:'المؤتمر الصحفي للمنتدى',room:'المنطقة الإعلامية',duration:'60 دقيقة',description:'إحاطة إعلامية حول أهداف النسخة السادسة وبرنامجها وشراكاتها الدولية.'},
      {time:'01:00 م',kind:'workshop',type:'ورشة عمل',title:'أساسيات تصميم المؤشرات الإحصائية',room:'قاعة التعلّم 1',duration:'75 دقيقة',topics:['تحديد الغرض من المؤشر','اختيار مصادر البيانات المناسبة','بناء منهجية القياس','اختبار المؤشر وتوثيقه']},
      {time:'03:30 م',kind:'workshop',type:'ورشة عمل',title:'التواصل الفعّال بالبيانات',room:'قاعة التعلّم 2',duration:'60 دقيقة',topics:['فهم احتياجات الجمهور','تبسيط المفاهيم الإحصائية','اختيار الرسم البياني المناسب','صياغة رسالة واضحة وقابلة للتذكر']},
      {time:'05:00 م',kind:'session',type:'جلسة افتتاحية',title:'حفل الافتتاح وعشاء الترحيب',room:'القاعة العامة',duration:'ساعتان',description:'افتتاح رسمي وترحيب بالمشاركين والوفود القادمة إلى الرياض.'}
    ]
  },
  {
    label: '10 نوفمبر — البرنامج الرئيسي', eyebrow: 'اليوم الثاني • بتوقيت الرياض', title: 'الثلاثاء، 10 نوفمبر 2026',
    events: [
      {time:'09:00 ص',kind:'session',type:'جلسة عامة',title:'الترحيب والكلمة الافتتاحية',room:'القاعة العامة',duration:'15 دقيقة',description:'افتتاح البرنامج الرئيسي والتعريف بأولويات المنتدى ومحاوره الأربعة.'},
      {time:'09:15 ص',kind:'session',type:'جلسة عامة',title:'قياس التقدم نحو التنمية المستدامة حتى عام 2030 وما بعده',room:'القاعة العامة',duration:'75 دقيقة',description:'نقاش عالمي حول دور البيانات في قياس التقدم وبناء سياسات تنموية أكثر استجابة.'},
      {time:'10:50 ص',kind:'workshop',type:'ورشة عمل',title:'من البيانات إلى جودة الحياة: ذكاء الأحياء السكنية',room:'قاعة التعلّم 1',duration:'60 دقيقة',topics:['توظيف البيانات المكانية لفهم احتياجات الأحياء','ربط المؤشرات الحضرية بجودة الحياة','توطين أهداف التنمية المستدامة','تحويل التحليل إلى قرارات قابلة للتنفيذ']},
      {time:'11:00 ص',kind:'workshop',type:'ورشة عمل',title:'حوكمة البيانات والخصوصية بالتصميم',room:'قاعة التعلّم 2',duration:'75 دقيقة',topics:['تحديد الأدوار والمسؤوليات','تصنيف البيانات الحساسة','تضمين الخصوصية في دورة التطوير','قياس الامتثال وإدارة المخاطر']},
      {time:'01:30 م',kind:'workshop',type:'ورشة عمل',title:'الذكاء الاصطناعي المسؤول للإحصاءات الرسمية',room:'قاعة التعلّم 3',duration:'90 دقيقة',topics:['تقييم جاهزية البيانات','اكتشاف التحيز في النماذج','تفسير النتائج والتحقق منها','وضع إطار للحوكمة والمساءلة']},
      {time:'03:00 م',kind:'workshop',type:'ورشة عمل',title:'بناء لوحات معلومات تدعم القرار',room:'مختبر البيانات',duration:'75 دقيقة',topics:['اختيار مؤشرات الأداء','بناء التسلسل البصري','تصميم التفاعلات والفلاتر','اختبار اللوحة مع المستخدمين']},
      {time:'11:50 ص',kind:'session',type:'جلسة متخصصة',title:'تعزيز الضمانات الأخلاقية والشفافية في تقنيات البيانات المتقدمة',room:'القاعة 3',duration:'90 دقيقة',description:'مناقشة آليات عملية لتطبيق الأخلاقيات والشفافية عبر دورة حياة البيانات.'}
    ]
  },
  {
    label: '11 نوفمبر', eyebrow: 'اليوم الثالث • تصور أولي قيد الاعتماد', title: 'الأربعاء، 11 نوفمبر 2026',
    events: [
      {time:'09:00 ص',kind:'session',type:'جلسة رئيسية',title:'الذكاء الاصطناعي يبدأ بالجاهزية: البيانات والأفراد والمؤسسات',room:'القاعة العامة',duration:'60 دقيقة',description:'حوار حول الجاهزية المؤسسية والبشرية والبيانية قبل تبني حلول الذكاء الاصطناعي.'},
      {time:'10:30 ص',kind:'workshop',type:'ورشة عمل',title:'مختبر جودة البيانات الإدارية',room:'قاعة التعلّم 2',duration:'90 دقيقة',topics:['تقييم جودة البيانات الإدارية','تحديد الفجوات ومصادر التحيز','مواءمة البيانات مع مؤشرات التنمية المستدامة','إنشاء خطة تحسين قابلة للقياس']},
      {time:'01:00 م',kind:'session',type:'حلقة نقاش',title:'من البيانات المجزأة إلى قرارات أفضل',room:'القاعة 4',duration:'60 دقيقة',description:'ربط نظم بيانات الأزمات لتوفير صورة مشتركة تساعد الجهات على الاستجابة السريعة.'},
      {time:'03:00 م',kind:'workshop',type:'ورشة عمل',title:'سرد القصص بالبيانات لصنّاع القرار',room:'قاعة التعلّم 3',duration:'75 دقيقة',topics:['تحديد الرسالة والجمهور','اختيار المؤشر المناسب','تصميم عرض بصري واضح','تحويل النتائج إلى توصيات عملية']}
      ,{time:'04:30 م',kind:'workshop',type:'ورشة عمل',title:'تحليل البيانات الجغرافية للتخطيط الحضري',room:'مختبر البيانات',duration:'90 دقيقة',topics:['إعداد البيانات المكانية','تحليل سهولة الوصول للخدمات','اكتشاف الأنماط والفجوات','بناء خرائط تدعم قرارات التخطيط']}
    ]
  },
  {
    label: '12 نوفمبر — الختام', eyebrow: 'اليوم الرابع • تصور أولي قيد الاعتماد', title: 'الخميس، 12 نوفمبر 2026',
    events: [
      {time:'09:30 ص',kind:'session',type:'جلسة رئيسية',title:'العمل المناخي القائم على البيانات',room:'القاعة العامة',duration:'60 دقيقة',description:'من الرصد البيئي إلى سياسات مناخية تستند إلى أدلة دقيقة وقابلة للمقارنة.'},
      {time:'11:00 ص',kind:'workshop',type:'ورشة عمل',title:'البيانات المفتوحة ومبادئ FAIR',room:'قاعة التعلّم 1',duration:'90 دقيقة',topics:['جعل البيانات قابلة للعثور','تحسين الوصول والاستخدام','التشغيل البيني بين المنصات','إتاحة إعادة الاستخدام المسؤول']},
      {time:'12:45 م',kind:'workshop',type:'ورشة عمل',title:'قياس أثر مبادرات البيانات',room:'قاعة التعلّم 2',duration:'75 دقيقة',topics:['صياغة نظرية التغيير','اختيار مؤشرات الأثر','تصميم خط أساس مناسب','عرض النتائج والتعلم منها']},
      {time:'02:15 م',kind:'workshop',type:'ورشة عمل',title:'الاستعداد لأزمات البيانات واستمرارية الأعمال',room:'قاعة التعلّم 3',duration:'60 دقيقة',topics:['تحديد خدمات البيانات الحرجة','تقييم المخاطر والاعتماديات','إنشاء خطة استجابة وتعافٍ','اختبار الجاهزية والتحسين المستمر']},
      {time:'01:30 م',kind:'session',type:'جلسة ختامية',title:'من الرياض إلى العالم: التزامات لمستقبل البيانات',room:'القاعة العامة',duration:'60 دقيقة',description:'تلخيص مخرجات المنتدى وإعلان مجالات العمل والتعاون في المرحلة المقبلة.'}
    ]
  }
];

const icons = {
  pin:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  calendar:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>'
};

const timeline = document.querySelector('.timeline');
const dayTitle = document.querySelector('.agenda .title h2');
const dayEyebrow = document.querySelector('.agenda .title small');
const programmeNote = document.querySelector('.program-note span');
let selectedDay = 0;
let activeKind = 'session';

function metadata(event, date) {
  return `<p class="session-meta"><span>${icons.pin}${event.room}</span><span>${icons.clock}${event.duration}</span><span>${icons.calendar}${date}</span></p>`;
}

function sessionDetails(event, index) {
  const portraits = [
    ['speaker-saudi-man-unified.png', 'speaker-saudi-woman-unified.png'],
    ['speaker-international-woman-unified.png', 'speaker-saudi-man-unified.png'],
    ['speaker-international-man-unified.png', 'speaker-saudi-woman-unified.png'],
    ['speaker-saudi-woman-unified.png', 'speaker-international-man-unified.png']
  ];
  const [speakerPhoto, moderatorPhoto] = portraits[(selectedDay + index) % portraits.length];
  const photo = (file, label) => `<span class="avatar portrait"><img src="assets/${file}" alt="${label}" loading="lazy"><i>صورة تجريبية</i></span>`;
  return `<div class="session-people"><div class="person-block"><small class="person-role">المتحدث</small><div class="person-row">${photo(speakerPhoto,'صورة تجريبية للمتحدث')}<div><b>يُعلن لاحقًا</b><p>اسم المتحدث</p><em>المسمى الوظيفي والجهة</em></div></div></div><div class="person-block moderator"><small class="person-role">يدير الحوار</small><div class="person-row">${photo(moderatorPhoto,'صورة تجريبية لمدير الحوار')}<div><b>يُعلن لاحقًا</b><p>اسم مدير الحوار</p><em>المسمى الوظيفي والجهة</em></div></div></div></div><div class="session-description"><small>نبذة عن الجلسة</small><p>${event.description}</p></div>`;
}

function workshopDetails(event) {
  const topics = event.topics.map(topic => `<li>${topic}</li>`).join('');
  return `<div class="workshop-layout"><div class="workshop-topics"><h4>محاور الورشة</h4><ol>${topics}</ol></div><aside class="workshop-meta"><ul><li><i>◫</i><span><small>مقدم الورشة</small><b>يُعلن لاحقًا</b></span></li><li><i>⌖</i><span><small>القاعة</small><b>${event.room}</b></span></li><li><i>▣</i><span><small>التاريخ</small><b>${programme[selectedDay].title}</b></span></li><li><i>◷</i><span><small>الوقت</small><b>${event.time}</b></span></li><li><i>◴</i><span><small>المدة</small><b>${event.duration}</b></span></li></ul><a class="workshop-register" href="${registrationUrl}" target="_blank" rel="noopener">سجّل الآن</a></aside></div>`;
}

function renderProgramme() {
  const day = programme[selectedDay];
  dayTitle.textContent = day.title;
  dayEyebrow.textContent = day.eyebrow;
  programmeNote.textContent = selectedDay > 1 ? 'تصور أولي لعرض تجربة البرنامج، وتُحدّث التفاصيل عند اعتماد النسخة النهائية.' : 'مختارات من البرنامج الرسمي المبدئي؛ قد تخضع القاعات والتفاصيل للتحديث.';
  const visible = day.events.filter(event => event.kind === activeKind);
  timeline.innerHTML = visible.map((event,index) => `<article class="event" data-kind="${event.kind}"><time>${event.time}</time><div class="card"><button class="expand" aria-label="فتح التفاصيل">＋</button><div class="event-head">${event.kind==='workshop'?`<b class="workshop-number">${String(index+1).padStart(2,'0')}</b>`:''}<span>${event.type}</span><h3>${event.title}</h3>${metadata(event,day.title)}</div><div class="details">${event.kind==='workshop'?workshopDetails(event):sessionDetails(event,index)}</div></div></article>`).join('');
  timeline.querySelectorAll('.event .card').forEach(card => { card.tabIndex = 0; card.setAttribute('role','button'); card.setAttribute('aria-expanded','false'); });
  if (!visible.length) timeline.innerHTML = '<div class="empty-programme">لا توجد فعاليات ضمن هذا التصنيف في اليوم المختار.</div>';
}

document.addEventListener('click', event => {
  const card = event.target.closest('.event .card');
  if (!card || event.target.closest('.workshop-register')) return;
  const item = card.closest('.event');
  timeline.querySelectorAll('.event.open').forEach(openItem => {
    if (openItem === item) return;
    openItem.classList.remove('open');
    openItem.querySelector('.expand').textContent = '＋';
    openItem.querySelector('.card').setAttribute('aria-expanded','false');
  });
  item.classList.toggle('open');
  card.querySelector('.expand').textContent = item.classList.contains('open') ? '−' : '＋';
  card.setAttribute('aria-expanded', String(item.classList.contains('open')));
});

document.addEventListener('keydown', event => {
  const card = event.target.closest?.('.event .card');
  if (card && ['Enter',' '].includes(event.key)) { event.preventDefault(); card.click(); }
  if (event.key === 'Escape') {
    document.querySelector('.custom-day-select')?.classList.remove('open');
    document.querySelector('.day-select-button')?.setAttribute('aria-expanded','false');
    navLinks?.classList.remove('mobile-open');
    menuButton?.setAttribute('aria-expanded','false');
  }
});

document.querySelectorAll('.filter button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter button').forEach(item => item.classList.remove('active'));
  button.classList.add('active'); activeKind = button.dataset.kind; renderProgramme();
}));

const nativeDaySelect = document.querySelector('#programme-day');
if (nativeDaySelect) {
  nativeDaySelect.innerHTML = programme.map((day,index)=>`<option value="${index}" ${index===selectedDay?'selected':''}>${day.label}</option>`).join('');
  nativeDaySelect.classList.add('native-day-select');
  const custom = document.createElement('div'); custom.className = 'programme-day-tabs';
  custom.setAttribute('role','tablist');
  custom.setAttribute('aria-label','اختر يوم البرنامج');
  nativeDaySelect.after(custom);
  programme.forEach((day,index) => {
    const option = document.createElement('button');
    option.type='button';
    option.className='programme-day-tab'+(index===selectedDay?' active':'');
    option.setAttribute('role','tab');
    option.setAttribute('aria-selected',String(index===selectedDay));
    option.innerHTML=`<span>${9+index} نوفمبر</span><small>${index===0?'الافتتاح':index===3?'الختام':'البرنامج'}</small>`;
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

const menuButton=document.querySelector('.menu'), navLinks=document.querySelector('header .links');
if(menuButton&&!menuButton.querySelector('span')) menuButton.innerHTML='<span></span><span></span><span></span>';
menuButton?.addEventListener('click',()=>{const open=navLinks.classList.toggle('mobile-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('mobile-open');menuButton?.setAttribute('aria-expanded','false')}));

const dialog=document.querySelector('#registration');
document.querySelectorAll('.open-form').forEach(button=>button.onclick=()=>dialog?.showModal());
document.querySelector('.close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});

renderProgramme();

function initPageLoader(){
  const isArabic=document.documentElement.lang==='ar';
  const loader=document.createElement('div');
  loader.className='page-loader';
  loader.setAttribute('role','status');
  loader.setAttribute('aria-label',isArabic?'جاري تحميل الموقع':'Loading website');
  const logoSrc='assets/forum-mark-loader.svg?v=1';
  loader.innerHTML=`<div class="loader-pattern" aria-hidden="true"></div><div class="loader-content"><div class="loader-forum-only" style="--loader-logo:url('${logoSrc}')" aria-hidden="true"></div><div class="loader-progress"><i></i></div><div class="loader-year">RIYADH <span>•</span> 2026</div></div>`;
  document.body.prepend(loader);document.documentElement.classList.add('is-loading');
  const started=performance.now();let finished=false;
  const finish=()=>{if(finished)return;finished=true;setTimeout(()=>{loader.classList.add('is-leaving');document.documentElement.classList.remove('is-loading');setTimeout(()=>loader.remove(),700)},Math.max(0,1250-(performance.now()-started)))};
  if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});
  setTimeout(finish,3000);
}
initPageLoader();

/* Keep registration choices in the visual space formerly occupied by the event ticket. */
const heroRegistrationModes=document.querySelector('.hero-v2-content .hero-registration-modes');
const mainHero=document.querySelector('.hero-v2');
if(heroRegistrationModes&&mainHero)mainHero.appendChild(heroRegistrationModes);


/* Curated Saudi Statistics Forum montage v39 */
(function(){
  var videos=[].slice.call(document.querySelectorAll('.hero-video .hero-clip'));
  if(videos.length<2)return;
  if(window.matchMedia('(max-width:750px)').matches){videos[0].muted=true;videos[0].loop=true;videos[0].classList.add('active');videos[0].play().catch(function(){});return}
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

/* Reliable muted hero playback on mobile browsers. */
(function initMobileHeroVideo(){
  const videos=[...document.querySelectorAll('.hero-video .hero-clip')];
  if(!videos.length)return;
  videos.forEach(video=>{
    video.muted=true;
    video.defaultMuted=true;
    video.playsInline=true;
    video.setAttribute('muted','');
    video.setAttribute('playsinline','');
    video.setAttribute('webkit-playsinline','');
    video.setAttribute('autoplay','');
  });
  const playActive=()=>{
    const active=document.querySelector('.hero-video .hero-clip.active')||videos[0];
    active.play().catch(()=>{});
  };
  if(matchMedia('(max-width:750px)').matches){
    videos[0].loop=true;
    videos.slice(1).forEach(video=>video.pause());
    videos[0].classList.add('active');
    playActive();
  }
  document.addEventListener('touchstart',playActive,{once:true,passive:true});
  document.addEventListener('click',playActive,{once:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)playActive()});
})();

/* Partners section heading, aligned with the shared Saudi visual identity. */
(function addPartnersHeading(){
  const section=document.querySelector('.partners');
  if(!section||section.querySelector('.partners-heading'))return;
  section.insertAdjacentHTML('afterbegin','<div class="partners-heading"><div><span>شركاء النجاح</span><h2>الشركاء</h2></div><small>منظومة تعاون تدعم نجاح المنتدى</small></div>');
})();

/* Use the supplied official venue photograph in the venue showcase. */
const venuePhoto=document.querySelector('.venue-showcase .venue-photo img');
if(venuePhoto){
  venuePhoto.src='assets/sofitel-riyadh-venue-dark.png';
  venuePhoto.alt='فندق ومركز مؤتمرات سوفيتل الرياض';
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
    {name:'د. ريم السبيعي',role:'مديرة الذكاء الاصطناعي المسؤول',bio:'متخصصة في تطوير أطر الذكاء الاصطناعي المسؤول وحوكمة الخوارزميات، وتعمل على بناء حلول موثوقة تعزز جودة القرارات والخدمات العامة.',image:'assets/speaker-saudi-woman-2.png'},
    {name:'م. خالد الدوسري',role:'رئيس هندسة منصات البيانات',bio:'خبير في تصميم منصات البيانات الوطنية والبنى السحابية الآمنة، يقود فرقًا تقنية لتحويل البيانات واسعة النطاق إلى منتجات قابلة للاستخدام.',image:'assets/speaker-saudi-man-2.png'},
    {name:'جوناثان ريد',role:'خبير أمريكي في حوكمة البيانات',bio:'مستشار في حوكمة البيانات والتشريعات الرقمية، شارك في مبادرات دولية لتعزيز مشاركة البيانات وحماية الخصوصية وبناء الثقة المؤسسية.',image:'assets/speaker-american-man.png'},
    {name:'د. لوسيا نافارو',role:'باحثة إسبانية في الابتكار الرقمي',bio:'باحثة متخصصة في الابتكار الرقمي والبيانات المفتوحة، وتعمل على تطوير نماذج تعاونية تربط البحث العلمي بالسياسات العامة والأثر المجتمعي.',image:'assets/speaker-spanish-woman.png'}
  ];
  additional.forEach(person=>grid.insertAdjacentHTML('beforeend',`<button class="speaker-card" type="button" data-name="${person.name}" data-role="${person.role}" data-bio="${person.bio}" data-image="${person.image}"><span class="speaker-image"><img src="${person.image}" alt="${person.name}"></span><span class="speaker-info"><b>${person.name}</b><small>${person.role}</small><i>عرض النبذة ←</i></span></button>`));
  const cards=[...grid.querySelectorAll('.speaker-card')];
  if(!cards.length)return;
  const controls=document.createElement('div');
  controls.className='speakers-controls';
  controls.innerHTML='<button type="button" class="speaker-prev" aria-label="المتحدث السابق">→</button><button type="button" class="speaker-next" aria-label="المتحدث التالي">←</button>';
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
  profile.innerHTML='<button class="speaker-dialog-close" type="button" aria-label="إغلاق">×</button><div class="speaker-dialog-layout"><div class="speaker-dialog-photo"><img alt=""></div><div class="speaker-dialog-copy"><small>نبذة المتحدث</small><h2 id="speaker-profile-name"></h2><h3></h3><p></p></div></div>';
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

/* Shared accessibility tools and back-to-top control. */
(function initAccessibilityTools(){
  if(document.querySelector('.a11y-dock'))return;
  const ar=document.documentElement.lang==='ar';
  const dock=document.createElement('div');
  dock.className='a11y-dock';
  dock.innerHTML=`
    <button class="a11y-toggle" type="button" aria-expanded="false" aria-label="${ar?'إمكانية الوصول':'Accessibility'}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2.2"/><path d="M5 8.5h14M12 7v5m0 0-4 8m4-8 4 8"/></svg>
    </button>
    <button class="back-to-top" type="button" aria-label="${ar?'العودة إلى أعلى الصفحة':'Back to top'}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>
    </button>
    <section class="a11y-panel" aria-label="${ar?'إعدادات إمكانية الوصول':'Accessibility settings'}" hidden>
      <div class="a11y-panel-head"><b>${ar?'إمكانية الوصول':'Accessibility'}</b><button type="button" class="a11y-close" aria-label="${ar?'إغلاق':'Close'}">×</button></div>
      <div class="a11y-font-controls">
        <button type="button" data-a11y="font-down" aria-label="${ar?'تصغير الخط':'Decrease text size'}">A−</button>
        <button type="button" data-a11y="font-up" aria-label="${ar?'تكبير الخط':'Increase text size'}">A+</button>
      </div>
      <button type="button" class="a11y-option" data-a11y="contrast"><span>${ar?'تباين عالٍ':'High contrast'}</span><i aria-hidden="true"></i></button>
      <button type="button" class="a11y-option" data-a11y="motion"><span>${ar?'إيقاف الحركة':'Reduce motion'}</span><i aria-hidden="true"></i></button>
      <button type="button" class="a11y-reset" data-a11y="reset">${ar?'إعادة الإعدادات':'Reset settings'}</button>
    </section>`;
  document.body.appendChild(dock);
  const root=document.documentElement,toggle=dock.querySelector('.a11y-toggle'),panel=dock.querySelector('.a11y-panel'),topButton=dock.querySelector('.back-to-top');
  const key='unwdf-accessibility';
  let settings={font:0,contrast:false,motion:false};
  try{settings=Object.assign(settings,JSON.parse(localStorage.getItem(key)||'{}'))}catch(e){}
  const save=()=>{try{localStorage.setItem(key,JSON.stringify(settings))}catch(e){}};
  const apply=()=>{
    root.classList.toggle('a11y-font-large',settings.font===1);
    root.classList.toggle('a11y-font-larger',settings.font===2);
    root.classList.toggle('a11y-high-contrast',settings.contrast);
    root.classList.toggle('a11y-reduce-motion',settings.motion);
    dock.querySelector('[data-a11y="contrast"]').classList.toggle('active',settings.contrast);
    dock.querySelector('[data-a11y="motion"]').classList.toggle('active',settings.motion);
    document.querySelectorAll('video').forEach(video=>{if(settings.motion)video.pause()});
    save();
  };
  const close=()=>{panel.hidden=true;toggle.setAttribute('aria-expanded','false')};
  toggle.addEventListener('click',()=>{const opening=!panel.hidden;panel.hidden=opening;toggle.setAttribute('aria-expanded',String(!opening))});
  dock.querySelector('.a11y-close').addEventListener('click',close);
  dock.addEventListener('click',event=>{
    const action=event.target.closest('[data-a11y]')?.dataset.a11y;if(!action)return;
    if(action==='font-up')settings.font=Math.min(2,settings.font+1);
    if(action==='font-down')settings.font=Math.max(0,settings.font-1);
    if(action==='contrast')settings.contrast=!settings.contrast;
    if(action==='motion')settings.motion=!settings.motion;
    if(action==='reset')settings={font:0,contrast:false,motion:false};
    apply();
  });
  document.addEventListener('click',event=>{if(!dock.contains(event.target))close()});
  topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:settings.motion?'auto':'smooth'}));
  const updateTop=()=>topButton.classList.toggle('visible',window.scrollY>520);
  window.addEventListener('scroll',updateTop,{passive:true});updateTop();apply();
})();
