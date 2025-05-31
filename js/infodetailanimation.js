 window.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner-text');
    const btns = document.querySelectorAll('.banner-btns button');
    banner.classList.add('animate');

    setTimeout(() => {
      btns.forEach((btn, index) => {
        setTimeout(() => {
          btn.classList.add('show');
        }, index * 200); // Staggered delay
      });
    }, 200); // Wait for banner to appear
  });