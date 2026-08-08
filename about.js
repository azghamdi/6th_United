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
