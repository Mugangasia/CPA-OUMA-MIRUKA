  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const masterclassButtons = document.querySelectorAll('a[href="#contact"].btn:not(.consultation-cta .btn)');
    const enrollNowButton = document.querySelector('.masterclass-cta a[href="#contact"].btn-secondary');
    const consultationButtons = document.querySelectorAll('.consultation-cta a[href="#contact"]');
    const masterclassPopup = document.getElementById('masterclassPopup');
    const consultationPopup = document.getElementById('consultationPopup');
    const closeButtons = document.querySelectorAll('.popup-close');
    const overlays = document.querySelectorAll('.popup-overlay');
    
    // Open Masterclass popup on enrollment button click
    if (enrollNowButton) {
      enrollNowButton.addEventListener('click', function(e) {
        e.preventDefault();
        masterclassPopup.style.display = 'flex';
      });
    }
    
    // Open Consultation popup on consultation button click
    consultationButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        consultationPopup.style.display = 'flex';
      });
    });
    
    // Close popups when clicking the close button
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        overlays.forEach(overlay => {
          overlay.style.display = 'none';
        });
      });
    });
    
    // Close popups when clicking outside the form
    overlays.forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    });
    
    // Handle form submissions
    document.getElementById('masterclassForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your interest in the Masterclass! We will contact you shortly.');
      masterclassPopup.style.display = 'none';
      this.reset();
    });
    
    document.getElementById('consultationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for scheduling a consultation! We will contact you to confirm your appointment.');
      consultationPopup.style.display = 'none';
      this.reset();
    });
  });
  

/* filepath: /c:/Users/user/Documents/CPA OUMA MIRUKA/js/main.js */
// Update the floating contact widget JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactToggle = document.querySelector('.contact-toggle');
    const contactOptions = document.querySelector('.contact-options');
    let isOpen = false;

    contactToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        contactOptions.classList.toggle('active');
        
        // Add bounce animation on toggle
        if (isOpen) {
            contactToggle.style.animation = 'bounce 0.5s ease';
        } else {
            contactToggle.style.animation = '';
        }
    });

    // Close contact options when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.floating-contact')) {
            contactOptions.classList.remove('active');
            isOpen = false;
        }
    });
});

// Add bounce animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style);