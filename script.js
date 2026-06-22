// =========================================
// حبيبة محمد | CV - Script
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- زرار الرجوع لفوق ---- */
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  });
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- زرار الطباعة / تحميل PDF ---- */
  document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
  });

  /* ---- إظهار العناصر تدريجيًا عند السكرول (Reveal) ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---- تشغيل أشرطة المهارات عند الظهور ---- */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percent = fill.getAttribute('data-percent') || 0;
        fill.style.width = percent + '%';
        skillObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.4 });
  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ---- إغلاق قائمة الموبايل بعد الضغط على لينك ---- */
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navCollapseEl = document.getElementById('navMenu');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navCollapseEl).hide();
      }
    });
  });

  /* ---- نموذج التواصل (واجهة فقط، بدون سيرفر) ---- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formSuccess.classList.add('show');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove('show'), 4000);
    });
  }

});


document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  let inputs = this.querySelectorAll("input");
  let textarea = this.querySelector("textarea");

  let name = inputs[0].value;
  let contact = inputs[1].value;
  let message = textarea.value;

  let text =
`🏡 رسالة جديدة من موقع 𝐇𝐚𝐛𝐢𝐛𝐚 𝐌𝐨𝐡𝐚𝐦𝐞𝐝

👤 الاسم: ${name}

📞 رقم التواصل:
${contact}

💌 الرسالة:
${message}`;

  window.open(
      "https://wa.me/201202286965?text=" + encodeURIComponent(text),
      "_blank"
  );
});
