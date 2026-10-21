
function filterSkillsByCategory(skills, category) {
  if (category === 'All') {
    return skills;
  }

  return skills.filter(skill => skill.category === category);
}

// Calculate total session cost
function calculateTotalCosts(hourlyRate, hours) {
  return hourlyRate * hours;
}

// Export functions for Jest testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    filterSkillsByCategory,
    calculateTotalCosts
  };
}
