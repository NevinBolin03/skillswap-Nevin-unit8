
const { filterSkillsByCategory } = require('../skillswap-functions');

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
