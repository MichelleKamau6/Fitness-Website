// 1. Mobile Navigation Toggle
const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// 2. Smooth Scroll for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// 3. Scroll Animations
const elementsToAnimate = document.querySelectorAll('.fadeInUp');

const animateOnScroll = () => {
  elementsToAnimate.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 150) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();  // Initial check in case content is already in view

// 4. Basic Form Validation (for Sign Up Form)
const signupForm = document.querySelector('.signup-form');
const signupButton = document.querySelector('.signup-form button');

signupButton.addEventListener('click', (event) => {
  const formFields = signupForm.querySelectorAll('input');
  let validForm = true;

  formFields.forEach(field => {
    if (field.value.trim() === "") {
      field.style.borderColor = "red";
      validForm = false;
    } else {
      field.style.borderColor = "#ccc";
    }
  });

  if (!validForm) {
    event.preventDefault();
    alert("Please fill in all fields.");
  }
});
