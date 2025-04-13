// Smooth Scroll to sections (if you have anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Footer Year Update
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Basic Form Validation (You can modify field names)
function validateForm() {
  const email = document.getElementById("email");
  const name = document.getElementById("name");
  if (!email.value.includes("@")) {
    showToast("Valid email daalo bhai.");
    return false;
  }
  if (name.value.trim() === "") {
    showToast("Naam toh likho pehle.");
    return false;
  }
  return true;
}

// Dark Mode Toggle (future option)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Toast Message System
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "custom-toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// AI-style Help Prompt (Basic Trigger)
document.getElementById("helpBtn")?.addEventListener("click", () => {
  showToast("Aap kya help chahte hain? Email bhejiye: support@invoicegenieapp.com");
});
