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
    ['speaker-saudi-man.webp', 'speaker-saudi-woman.webp'],
    ['speaker-international-woman.webp', 'speaker-saudi-man.webp'],
    ['speaker-international-man.webp', 'speaker-saudi-woman.webp'],
    ['speaker-saudi-woman.webp', 'speaker-international-man.webp']
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
  const custom = document.createElement('div'); custom.className = 'custom-day-select';
  custom.innerHTML = '<button type="button" class="day-select-button" aria-expanded="false"><span><small>اليوم المختار</small><b></b></span><i><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></i></button><div class="day-menu" role="listbox"></div>';
  nativeDaySelect.after(custom);
  const button = custom.querySelector('.day-select-button'), label = button.querySelector('b'), menu = custom.querySelector('.day-menu');
  programme.forEach((day,index) => { const option = document.createElement('button'); option.type='button'; option.className='day-option'+(index===selectedDay?' selected':''); option.innerHTML=`<span>${String(index+1).padStart(2,'0')}</span><b>${day.label}</b>`; option.onclick=()=>{selectedDay=index;nativeDaySelect.value=index;label.textContent=day.label;menu.querySelectorAll('.day-option').forEach(item=>item.classList.remove('selected'));option.classList.add('selected');custom.classList.remove('open');button.setAttribute('aria-expanded','false');renderProgramme()}; menu.appendChild(option); });
  label.textContent = programme[selectedDay].label;
  button.onclick=()=>{const open=custom.classList.toggle('open');button.setAttribute('aria-expanded',String(open))};
  document.addEventListener('click',event=>{if(!custom.contains(event.target)){custom.classList.remove('open');button.setAttribute('aria-expanded','false')}});
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
  const logoSrc=isArabic?'assets/forum-logo-ar-hq.png?v=4':'assets/forum-logo-en-hq.png?v=4';
  loader.innerHTML=`<div class="loader-pattern" aria-hidden="true"></div><div class="loader-content"><div class="loader-forum-only" style="--loader-logo:url('${logoSrc}')" aria-hidden="true"></div><div class="loader-progress"><i></i></div><div class="loader-year">RIYADH <span>•</span> 2026</div></div>`;
  document.body.prepend(loader);document.documentElement.classList.add('is-loading');
  const started=performance.now();let finished=false;
  const finish=()=>{if(finished)return;finished=true;setTimeout(()=>{loader.classList.add('is-leaving');document.documentElement.classList.remove('is-loading');setTimeout(()=>loader.remove(),700)},Math.max(0,1250-(performance.now()-started)))};
  if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});
  setTimeout(finish,3000);
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

/* Use the supplied official venue photograph in the venue showcase. */
const venuePhoto=document.querySelector('.venue-showcase .venue-photo img');
if(venuePhoto){
  venuePhoto.src='assets/sofitel-riyadh-venue-dark.png';
  venuePhoto.alt='فندق ومركز مؤتمرات سوفيتل الرياض';
}
