// Change Anthony's number here; every call/text button on the page uses it.
const PHONE_DISPLAY = "(406) 203-8740";
const PHONE_E164 = "+14062038740";

document.querySelectorAll(".js-tel").forEach((a) => (a.href = `tel:${PHONE_E164}`));
document.querySelectorAll(".js-sms").forEach((a) => (a.href = `sms:${PHONE_E164}`));
document.querySelectorAll(".js-phone").forEach((el) => (el.textContent = PHONE_DISPLAY));
document.getElementById("year").textContent = new Date().getFullYear();

// "Request a demo" builds a text message instead of posting to a server.
document.getElementById("demo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body =
    `Hi Anthony, this is ${f.get("name")} in ${f.get("town")} (${f.get("phone")}). ` +
    `I'd like to book a free cleaning: ${f.get("interest")}.` +
    (f.get("when") ? ` Best days/times: ${f.get("when")}.` : "");
  window.location.href = `sms:${PHONE_E164}?&body=${encodeURIComponent(body)}`;
});

// Video modal with YouTube's privacy-enhanced embed.
const modal = document.getElementById("video-modal");
const frame = modal.querySelector(".frame");
document.querySelectorAll(".video").forEach((btn) => {
  btn.addEventListener("click", () => {
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0" title="EV International video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.showModal();
  });
});
const closeModal = () => { modal.close(); };
modal.querySelector(".close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
modal.addEventListener("close", () => { frame.innerHTML = ""; });
