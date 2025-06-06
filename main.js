function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('show');
  }

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close all other panels
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        const otherPanel = acc[j].nextElementSibling;
        otherPanel.style.maxHeight = null;
      }
    }

    // Toggle current panel
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (this.classList.contains("active")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = null;
    }
  });
}

const toggle = document.getElementById('billing-toggle');
const pillOptions = document.querySelectorAll('.pill-option');
const prices = document.querySelectorAll('.price-toggle');

toggle.addEventListener('click', (e) => {
  if (!e.target.classList.contains('pill-option')) return;

  // Remove active class from all options
  pillOptions.forEach(option => option.classList.remove('active-toggle'));

  // Add active class to selected
  e.target.classList.add('active-toggle');

  const billingType = e.target.dataset.value;

  // Update the prices
  prices.forEach(price => {
    price.textContent = price.dataset[billingType];
  });

  // Move the highlight
  const highlight = toggle.querySelector('.pill-highlight');
  if (billingType === 'yearly') {
    highlight.style.transform = 'translateX(100%)';
  } else {
    highlight.style.transform = 'translateX(0)';
  }
});
