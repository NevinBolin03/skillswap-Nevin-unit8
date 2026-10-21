const {
  filterSkillsByCategory,
  calculateTotalCosts,
  matchSkillsToUser
} = require('../skillswap-functions');

// FEATURE 1: FILTER SKILLS
describe('filterSkillsByCategory', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
  ];

  test('filters skills by category', () => {
    const result = filterSkillsByCategory(skills, 'Programming');

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe('Python Tutoring');
    expect(result[1].title).toBe('Web Development');
  });

  test('returns all skills when category is All', () => {
    const result = filterSkillsByCategory(skills, 'All');

    expect(result).toEqual(skills);
  });

  test('returns an empty array when no skills match', () => {
    const result = filterSkillsByCategory(skills, 'Cooking');

    expect(result).toEqual([]);
  });
});

// FEATURE 2: CALCULATE SESSION COST
describe('calculateTotalCosts', () => {

  test('calculates cost for regular hours', () => {
    expect(calculateTotalCosts(20, 2)).toBe(40);
  });

  test('handles free sessions', () => {
    expect(calculateTotalCosts(0, 3)).toBe(0);
  });

  test('calculates decimal hours correctly', () => {
    expect(calculateTotalCosts(25, 1.5)).toBe(37.5);
  });

  test('handles zero hours', () => {
    expect(calculateTotalCosts(20, 0)).toBe(0);
  });
});

// FEATURE 3: MATCH SKILLS TO USER
describe('matchSkillsToUser', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'JavaScript Help', category: 'Programming', price: 25 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 }
  ];

  test('matches skills by category and budget', () => {
    const userNeeds = {
      category: 'Programming',
      maxPrice: 30
    };

    const result = matchSkillsToUser(userNeeds, skills);

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe('Python Tutoring');
    expect(result[1].title).toBe('JavaScript Help');
  });

  test('filters out skills above maximum price', () => {
    const userNeeds = {
      category: 'Programming',
      maxPrice: 20
    };

    const result = matchSkillsToUser(userNeeds, skills);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Python Tutoring');
  });

  test('returns empty array when no skills match', () => {
    const userNeeds = {
      category: 'Cooking',
      maxPrice: 100
    };

    const result = matchSkillsToUser(userNeeds, skills);

    expect(result).toEqual([]);
  });

  test('includes free skills with zero budget', () => {
    const userNeeds = {
      category: 'Career',
      maxPrice: 0
    };

    const result = matchSkillsToUser(userNeeds, skills);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Resume Review');
    expect(result[0].price).toBe(0);
  });
});
