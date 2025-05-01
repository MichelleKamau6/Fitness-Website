// script.js

// ========== Mobile Menu Toggle ==========
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu");
    const navLinks = document.querySelector(".links");
  
    if (menuIcon && navLinks) {
      menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  
    // ========== Auth Form Handling ==========
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
  
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = signupForm.elements["username"].value.trim();
        const password = signupForm.elements["password"].value.trim();
        const message = document.getElementById("signup-message");
  
        if (username.length < 3 || password.length < 6) {
          message.textContent = "Username must be at least 3 characters and password at least 6.";
          return;
        }
  
        // Simulated success
        message.style.color = "green";
        message.textContent = "Signup successful! You can now log in.";
        signupForm.reset();
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = loginForm.elements["username"].value.trim();
        const password = loginForm.elements["password"].value.trim();
        const message = document.getElementById("login-message");
  
        if (!username || !password) {
          message.textContent = "Please fill in both fields.";
          return;
        }
  
        // Simulated login
        message.style.color = "green";
        message.textContent = "Login successful!";
        loginForm.reset();
      });
    }
  
    // ========== Scroll Animation (Fade-in) ==========
    const animatedElements = document.querySelectorAll(".fade-in");
  
    function handleScrollAnimation() {
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("animate");
        }
      });
    }
  
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
  
    // ========== Highlight Active Page in Nav ==========
    const links = document.querySelectorAll(".links a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.style.color = "#ff6b00";
      }
    });
  });
  