document.addEventListener('DOMContentLoaded', () => {
    // ------------------ Smooth Scrolling ------------------
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Only scroll if the target element exists
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust scroll position with an offset
            behavior: 'smooth'
          });
        }
      });
    });
  
    // ------------------ Scroll Animations ------------------
    const animateElements = document.querySelectorAll('.animate-on-scroll');
  
    const handleScrollAnimation = () => {
      const windowHeight = window.innerHeight;
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < windowHeight - 50) {
          element.classList.add('fade-in');
        }
      });
    };
  
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Trigger the animation for elements already in view
  
    // ------------------ Sticky Navigation ------------------

  
    // ------------------ Button Scroll to Top ------------------
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
  
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Show/hide the scroll-to-top button based on scroll position
    const toggleScrollToTopBtn = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };
  
    window.addEventListener('scroll', toggleScrollToTopBtn);
    toggleScrollToTopBtn(); // Initialize visibility when page loads
  
    // ------------------ Form Validation ------------------
    const form = document.querySelector('form');
    const formInputs = form.querySelectorAll('input, select');
  
    form.addEventListener('submit', (e) => {
      let formValid = true;
  
      formInputs.forEach(input => {
        if (input.required && input.value.trim() === '') {
          formValid = false;
          input.classList.add('error');
          input.addEventListener('input', () => {
            input.classList.remove('error');
          });
        }
      });
  
      if (!formValid) {
        e.preventDefault(); // Prevent form submission if validation fails
      }
    });
  
    // ------------------ Animate Elements with CSS ------------------
    // You can add your custom CSS styles for animations.
    const style = document.createElement('style');
    style.textContent = `
      /* Add the fade-in animation */
      .fade-in {
        opacity: 0;
        animation: fadeIn 1s forwards;
      }
  
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
  
      /* Sticky Navbar */
      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
  
      /* Scroll-to-top button */
      .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #f1f1f1;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        display: none;
        font-size: 20px;
      }
  
      .scroll-to-top:hover {
        background-color: #3a71cf;
        color: white;
      }
  
      /* Error input field styling */
      .error {
        border-color: red;
      }
    `;
    document.head.appendChild(style);
  });
  