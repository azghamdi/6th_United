const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('header .links');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('mobile-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

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

/* Functional, touch-friendly video controls for the media centre. */
(function initMediaVideos(){
  if(!document.body.classList.contains('media-page'))return;
  const isArabic=document.documentElement.lang==='ar';
  const videos=[...document.querySelectorAll('.media-hero video,.video-examples video')];
  const playIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7.5 17 12l-8 4.5z"/></svg>';
  const pauseIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 7v10M15.5 7v10"/></svg>';
  videos.forEach(video=>{
    video.muted=true;
    video.defaultMuted=true;
    video.playsInline=true;
    video.setAttribute('muted','');
    video.setAttribute('playsinline','');
    video.setAttribute('webkit-playsinline','');
    video.setAttribute('preload','metadata');
    const container=video.closest('.media-hero,.video-main,.video-small');
    if(!container)return;
    let control=container.querySelector('.video-play,.mobile-video-control');
    if(!control){
      control=document.createElement('button');
      control.className='mobile-video-control';
      control.type='button';
      control.innerHTML=playIcon;
      container.appendChild(control);
    }else if(control.tagName!=='BUTTON'){
      control.setAttribute('role','button');
      control.setAttribute('tabindex','0');
    }
    const setState=()=>{
      const paused=video.paused;
      control.innerHTML=paused?playIcon:pauseIcon;
      control.setAttribute('aria-label',paused?(isArabic?'تشغيل الفيديو':'Play video'):(isArabic?'إيقاف الفيديو مؤقتًا':'Pause video'));
      control.classList.toggle('is-playing',!paused);
    };
    const toggle=event=>{
      event?.preventDefault();
      event?.stopPropagation();
      if(video.paused)video.play().catch(()=>control.classList.add('needs-tap'));
      else video.pause();
    };
    control.addEventListener('click',toggle);
    control.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' ')toggle(event)});
    video.addEventListener('play',setState);
    video.addEventListener('pause',setState);
    video.addEventListener('loadeddata',()=>video.play().catch(()=>{control.classList.add('needs-tap');setState()}),{once:true});
    setState();
  });
  const resume=()=>videos.forEach(video=>video.play().catch(()=>{}));
  document.addEventListener('touchstart',resume,{once:true,passive:true});
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
