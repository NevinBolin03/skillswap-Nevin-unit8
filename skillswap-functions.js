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

// Match skills based on category and budget
function matchSkillsToUser(userNeeds, skills) {
  return skills.filter(skill => {
    const matchesCategory =
      skill.category === userNeeds.category;

    const matchesBudget =
      skill.price <= userNeeds.maxPrice;

    return matchesCategory && matchesBudget;
  });
}

// Export functions for Jest testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    filterSkillsByCategory,
    calculateTotalCosts,
    matchSkillsToUser
  };
}
