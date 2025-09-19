const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    btn.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(c => c.classList.remove('active'));
    // Show selected content
    const selectedTab = document.getElementById(btn.dataset.tab);
    selectedTab.classList.add('active');
  });
});

// Activate default tab
document.querySelector('.tab-btn.active').click();

