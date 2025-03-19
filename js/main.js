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
  