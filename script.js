// Change Anthony's number here; every call/text button on the page uses it.
const PHONE_DISPLAY = "(406) 677-8967";
const PHONE_E164 = "+14066778967";

document.querySelectorAll(".js-tel").forEach((a) => (a.href = `tel:${PHONE_E164}`));
document.querySelectorAll(".js-sms").forEach((a) => (a.href = `sms:${PHONE_E164}`));
document.querySelectorAll(".js-phone").forEach((el) => (el.textContent = PHONE_DISPLAY));
// "Get a quote" on each product opens a text that names the machine.
document.querySelectorAll(".js-ask").forEach((a) => {
  a.href = `sms:${PHONE_E164}?&body=${encodeURIComponent(`Hi EV of Montana, I'm interested in the ${a.dataset.product}. Can you tell me more?`)}`;
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// The quote form builds a text (phones) or an email (computers) instead of posting to a server.
const EMAIL = "evofmt@gmail.com";
const isPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
document.getElementById("demo-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body =
    `Hi EV of Montana, this is ${f.get("name")} in ${f.get("town")} (${f.get("phone")}). ` +
    `I'd like a free quote: ${f.get("interest")}.` +
    (f.get("when") ? ` Best days/times: ${f.get("when")}.` : "");
  window.location.href = isPhone
    ? `sms:${PHONE_E164}?&body=${encodeURIComponent(body)}`
    : `mailto:${EMAIL}?subject=${encodeURIComponent("Free quote request")}&body=${encodeURIComponent(body)}`;
});

// Mobile menu.
const burger = document.querySelector(".burger");
const setMenu = (open) => {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  document.getElementById("menu").setAttribute("aria-hidden", !open);
};
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Fade sections in as they scroll into view.
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Video modal with YouTube's privacy-enhanced embed.
const modal = document.getElementById("video-modal");
if (modal) {
  const frame = modal.querySelector(".frame");
  document.querySelectorAll(".video").forEach((btn) => {
    btn.addEventListener("click", () => {
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0" title="EV International video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      modal.showModal();
    });
  });
  modal.querySelector(".close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => { frame.innerHTML = ""; });
}
