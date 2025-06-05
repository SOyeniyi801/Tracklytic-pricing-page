var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
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
