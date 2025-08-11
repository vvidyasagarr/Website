// Add interactivity to the education section by toggling course panels
document.addEventListener('DOMContentLoaded', () => {
  const courseItems = document.querySelectorAll('.course-item');
  const panels = document.querySelectorAll('.course-panel');

  courseItems.forEach((item) => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      // Activate clicked course item
      courseItems.forEach((ci) => ci.classList.remove('active'));
      item.classList.add('active');
      // Show corresponding panel
      panels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});