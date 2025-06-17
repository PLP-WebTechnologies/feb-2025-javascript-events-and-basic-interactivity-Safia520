// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "#eee";
});

document.addEventListener("keydown", (e) => {
  document.getElementById("keyOutput").textContent = `Key pressed: ${e.key}`;
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("You discovered the secret double-click!");
});

// Interactive Elements
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  colorBtn.style.backgroundColor = "green";
  colorBtn.textContent = "Changed!";
});

// Slideshow
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;
const gallery = document.getElementById("gallery");
document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  gallery.src = images[index];
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    contents.forEach((c) => (c.style.display = "none"));
    contents[i].style.display = "block";
  });
});

// Form Validation
const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form submission

  let valid = true;
  formMessage.textContent = "";

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailPattern.test(email.value)) {
    formMessage.textContent += "❌ Invalid email format. ";
    valid = false;
  }

  if (password.value.length < 8) {
    formMessage.textContent += "❌ Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.style.color = "red";
  }
});

// Real-time email feedback
email.addEventListener("input", () => {
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  email.style.borderColor = emailPattern.test(email.value) ? "green" : "red";
});
