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
