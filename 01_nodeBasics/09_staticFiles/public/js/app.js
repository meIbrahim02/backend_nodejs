document.addEventListener('DOMContentLoaded', () => {
  const hireBtn = document.querySelector('.hire-btn');
  const portfolioBtn = document.querySelector('.primary-btn');
  const callBtn = document.querySelector('.secondary-btn');
  const profileCard = document.querySelector('.profile-card');

  const setButtonFeedback = (button, message) => {
    const originalText = button.dataset.originalText || button.textContent.trim();
    button.dataset.originalText = originalText;
    button.textContent = message;

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('clicked');
    }, 900);
  };

  if (hireBtn) {
    hireBtn.addEventListener('click', (event) => {
      event.preventDefault();
      hireBtn.classList.add('clicked');
      setButtonFeedback(hireBtn, 'Booked!');
      console.log('Hire button clicked');
    });
  }

  if (portfolioBtn) {
    portfolioBtn.addEventListener('click', (event) => {
      event.preventDefault();
      portfolioBtn.classList.add('clicked');
      setButtonFeedback(portfolioBtn, 'Opening');
      console.log('Portfolio button clicked');
    });
  }

  if (callBtn) {
    callBtn.addEventListener('click', (event) => {
      event.preventDefault();
      callBtn.classList.add('clicked');
      setButtonFeedback(callBtn, 'Calling');
      console.log('Call button clicked');
    });
  }

  if (profileCard) {
    profileCard.addEventListener('mouseenter', () => {
      profileCard.style.transform = 'translateY(-8px) scale(1.02)';
      profileCard.style.boxShadow = '0 30px 60px rgba(31, 29, 42, 0.26)';
      profileCard.style.transition = 'all 0.25s ease';
    });

    profileCard.addEventListener('mouseleave', () => {
      profileCard.style.transform = 'translateY(0) scale(1)';
      profileCard.style.boxShadow = '0 30px 60px rgba(31, 29, 42, 0.18)';
    });
  }
});
