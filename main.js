gsap.registerPlugin(ScrollTrigger);

// Header effect
const headerInner = document.querySelector(".header__inner");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    headerInner.style.transform = "scale(0.985)";
    headerInner.style.boxShadow = "0 18px 44px rgba(75, 32, 42, 0.12)";
  } else {
    headerInner.style.transform = "scale(1)";
    headerInner.style.boxShadow = "0 14px 40px rgba(75, 32, 42, 0.10)";
  }
});

// Mobile menu
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Smooth anchors without Lenis
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const id = this.getAttribute("href");
    const target = document.querySelector(id);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Hero intro
const heroTl = gsap.timeline({
  defaults: { ease: "power3.out" }
});

heroTl
  .from(".header", { y: -30, opacity: 0, duration: 0.7 })
  .from(".hero__title", { y: 60, opacity: 0, duration: 1 }, "-=0.15")
  .from(".hero__subtitle", { y: 24, opacity: 0, duration: 0.7 }, "-=0.55")
  .from(".hero__actions", { y: 24, opacity: 0, duration: 0.65 }, "-=0.45")
  .from(".hero__image-wrap", { x: 70, opacity: 0, rotate: 2, duration: 1.2 }, "-=0.85")
  .from(".hero__date", { y: 16, opacity: 0, duration: 0.6 }, "-=0.7")
  .from(".float-card--left", { y: 14, opacity: 0, duration: 0.5 }, "-=0.55");

// Reveal animations
gsap.utils.toArray(".reveal-up").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 42, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%"
      }
    }
  );
});

gsap.utils.toArray(".reveal-left").forEach((el) => {
  gsap.fromTo(
    el,
    { x: -52, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%"
      }
    }
  );
});

gsap.utils.toArray(".reveal-right").forEach((el) => {
  gsap.fromTo(
    el,
    { x: 52, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%"
      }
    }
  );
});

gsap.utils.toArray(".reveal-scale").forEach((el) => {
  gsap.fromTo(
    el,
    { scale: 0.94, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%"
      }
    }
  );
});

// Hero image parallax
gsap.utils.toArray(".parallax-media img").forEach((img) => {
  if (img.classList.contains("hero__image")) return;

  gsap.to(img, {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});

// Floating tag
gsap.to(".float-card--left", {
  y: -12,
  duration: 2.8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Section titles
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.fromTo(
    title,
    { y: 34, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 88%"
      }
    }
  );
});

// Intro photos
gsap.utils.toArray(".intro__photo").forEach((photo) => {
  const isLeft = photo.classList.contains("intro__photo--left");

  gsap.to(photo, {
    y: isLeft ? -20 : -28,
    scale: 1.03,
    rotate: isLeft ? -4 : 4,
    ease: "none",
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2
    }
  });
});

// Soft parallax cards
gsap.utils.toArray(".js-float-block").forEach((el) => {
  const distance = el.classList.contains("timeline-card") ? 18 : 28;

  gsap.to(el, {
    y: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "bottom 5%",
      scrub: 1.2
    }
  });
});

// Calendar animation
gsap.from(".calendar__head", {
  y: 20,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".calendar",
    start: "top 84%"
  }
});

gsap.from(".calendar__weekdays span", {
  y: 14,
  opacity: 0,
  duration: 0.45,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".calendar",
    start: "top 84%"
  }
});

gsap.from(".calendar__days span", {
  scale: 0.82,
  opacity: 0,
  duration: 0.38,
  stagger: {
    each: 0.02,
    from: "start"
  },
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".calendar",
    start: "top 84%"
  }
});

gsap.to(".calendar__days .active", {
  scale: 1.08,
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Dress code
gsap.utils.toArray(".js-pop-item").forEach((item, index) => {
  gsap.fromTo(
    item,
    { scale: 0.72, opacity: 0, y: 30 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".palette",
        start: "top 85%"
      }
    }
  );
});

// Detail cards stagger
gsap.from(".js-detail-card", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.18,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".details__grid",
    start: "top 82%"
  }
});

// Background motion
gsap.to(".bg-blur--1", {
  y: 120,
  x: 40,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5
  }
});

gsap.to(".bg-blur--2", {
  y: -140,
  x: -50,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5
  }
});

// Magnetic buttons
document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.16,
      y: y * 0.16,
      duration: 0.28,
      ease: "power2.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: "elastic.out(1, 0.45)"
    });
  });
});

// RSVP
// RSVP - отправка в Telegram
const form = document.getElementById("rsvp-form");
const formStatus = document.getElementById("form-status");

// ⚠️ ВАЖНО: Замените эти значения на свои!
const TELEGRAM_BOT_TOKEN = "7686705887:AAEihFWKhnYeDHVIm1NbPwnxecmLIPgDLSs"; // Сюда ваш токен
const TELEGRAM_CHAT_ID = "815325116";      // Сюда ваш Chat ID

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Собираем данные
    const fullname = document.getElementById("fullname").value.trim();
    const attendance = document.getElementById("attendance").value.trim();
    const companions = document.getElementById("companions").value.trim();
    const children = document.getElementById("children").value.trim();
    const alcohol = document.getElementById("alcohol").value.trim();

    // Проверка обязательных полей
    if (!fullname || !attendance) {
      formStatus.textContent = "Пожалуйста, заполните обязательные поля.";
      return;
    }

    // Формируем красивое сообщение
    const message = `
🎉 <b>Новая анкета с сайта!</b>

👤 <b>ФИО:</b> ${fullname}
✅ <b>Присутствие:</b> ${attendance}
👥 <b>Пара:</b> ${companions || "не указано"}
👶 <b>Дети:</b> ${children || "не указано"}
🍷 <b>Алкоголь:</b> ${alcohol || "не указано"}
    `;

    formStatus.textContent = "Отправляем анкету...";

    try {
      // Отправляем в Telegram
      const response = await fetch(`https://api.telegram.org/bot7686705887:AAEihFWKhnYeDHVIm1NbPwnxecmLIPgDLSs/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: 815325116,
          text: message,
          parse_mode: "HTML"
        })
      });

      const result = await response.json();

      if (!result.ok) {
        throw new Error(result.description || "Ошибка отправки");
      }

      formStatus.textContent = "Спасибо! Анкета успешно отправлена.";
      form.reset(); // Очищаем форму
    } catch (error) {
      formStatus.textContent = "Не удалось отправить анкету. Попробуйте позже.";
      console.error("Ошибка:", error);
    }
  });
}

const weddingDate = new Date("2026-06-05T15:30:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();
const distance = weddingDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

},1000);

// Petals
const petalsContainer = document.querySelector(".petals");

if (petalsContainer) {
  const petalClasses = ["", "petal--soft", "petal--dark"];
  const petalCount = window.innerWidth < 768 ? 10 : 18;

  function createPetal() {
    const petal = document.createElement("span");
    petal.className = `petal ${petalClasses[Math.floor(Math.random() * petalClasses.length)]}`.trim();

    const startX = Math.random() * window.innerWidth;
    const drift = (Math.random() - 0.5) * 180;
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 6;
    const rotation = Math.random() * 360;
    const scale = 0.7 + Math.random() * 0.9;

    petal.style.left = `${startX}px`;
    petal.style.transform = `translateY(0px) rotate(${rotation}deg) scale(${scale})`;

    petalsContainer.appendChild(petal);

    gsap.fromTo(
      petal,
      {
        y: -60,
        x: 0,
        rotate: rotation,
        opacity: 0
      },
      {
        y: window.innerHeight + 120,
        x: drift,
        rotate: rotation + 240,
        opacity: 0.85,
        duration: duration,
        delay: delay,
        ease: "none",
        onComplete: () => {
          petal.remove();
          createPetal();
        }
      }
    );

    gsap.to(petal, {
      x: `+=${(Math.random() - 0.5) * 60}`,
      repeat: -1,
      yoyo: true,
      duration: 2 + Math.random() * 2,
      ease: "sine.inOut"
    });
  }

  for (let i = 0; i < petalCount; i++) {
    createPetal();
  }
}

// Text reveal animation
document.querySelectorAll(".reveal-title").forEach((title) => {

  const split = new SplitType(title, { types: "words" });

  gsap.from(split.words, {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.06,
    scrollTrigger: {
      trigger: title,
      start: "top 85%"
    }
  });

});

// Photo hover tilt
document.querySelectorAll(".intro__photo, .hero__image").forEach((photo) => {
  const wrapper = photo.closest(".hero__image-wrap") || photo.parentElement;

  if (!wrapper) return;

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    gsap.to(photo, {
      scale: 1.04,
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center center"
    });
  });

  wrapper.addEventListener("mouseleave", () => {
    gsap.to(photo, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.45,
      ease: "power2.out"
    });
  });
});

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.classList.remove('playing');
    musicBtn.innerHTML = '🎵';
  } else {
    music.play();
    musicBtn.classList.add('playing');
    musicBtn.innerHTML = '🎶';
  }
  isPlaying = !isPlaying;
});
