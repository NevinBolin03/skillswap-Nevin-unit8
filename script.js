
document.addEventListener('DOMContentLoaded', () => {

  // Get all skill cards
  const skillCards = document.querySelectorAll('.skill-card');

  // Get all filter buttons
  const filterButtons = document.querySelectorAll(
    '.filter-buttons button'
  );

  // Convert skill cards into an array
  const skills = Array.from(skillCards).map(card => ({
    title: card.querySelector('h3').textContent,
    category: card.dataset.category,
    element: card
  }));

  // Add click events to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {

      const category = button.dataset.category;

      // Call our tested filtering function
      const filteredSkills = filterSkillsByCategory(
        skills,
        category
      );

      // Hide all cards
      skillCards.forEach(card => {
        card.style.display = 'none';
      });

      // Show matching cards
      filteredSkills.forEach(skill => {
        skill.element.style.display = '';
      });

      // Highlight selected button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      button.classList.add('active');

    });
  });

});
