/* ==========================================================
   Land Development Consultants – site scripts
   1. Mobile menu toggle
   2. Quote form: validate, then open an email draft
   3. Footer year
   ========================================================== */

// --- 1. Mobile menu -------------------------------------------------
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open)); // keeps screen readers informed
});
// Close the menu after tapping a link
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// --- 2. Quote form --------------------------------------------------
// GitHub Pages is static (no server), so we open the visitor's email app
// with the details filled in. To receive enquiries directly instead,
// replace this with a form service such as Formspree (see README.md).
const RECEIVING_EMAIL = "hello@example.com.au"; // TODO: your real address

const form = document.getElementById("quote");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const service = data.get("service");
  const suburb = (data.get("suburb") || "").trim();
  const email = (data.get("email") || "").trim();
  const details = (data.get("details") || "").trim();

  // Basic checks with plain-language messages
  if (!service || !suburb || !/^\S+@\S+\.\S+$/.test(email)) {
    msg.textContent = "Please choose a service and enter your suburb and a valid email.";
    msg.classList.add("error");
    return;
  }
  msg.classList.remove("error");

  const subject = encodeURIComponent(`Enquiry: ${service} (${suburb})`);
  const body = encodeURIComponent(
    `Service: ${service}\nLocation: ${suburb}\nReply to: ${email}\n\n${details}`
  );
  window.location.href = `mailto:${RECEIVING_EMAIL}?subject=${subject}&body=${body}`;
  msg.textContent = "Your email app should open with your enquiry. Just press send.";
});

// --- 3. Footer year -------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
