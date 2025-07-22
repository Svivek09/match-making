const Talent = require('../models/Talent');

function scoreTalent(gig, talent) {
  let score = 0;
  let rationale = [];

  // Location match
  if (gig.location && talent.city && gig.location.toLowerCase() === talent.city.toLowerCase()) {
    score += 2;
    rationale.push('Location match (+2)');
  }

  // Budget within range
  if (
    typeof gig.budget === 'number' &&
    talent.budgetRange &&
    typeof talent.budgetRange.min === 'number' &&
    typeof talent.budgetRange.max === 'number' &&
    gig.budget >= talent.budgetRange.min &&
    gig.budget <= talent.budgetRange.max
  ) {
    score += 3;
    rationale.push('Budget within range (+3)');
  }

  // Skill overlap
  if (Array.isArray(gig.stylePrefs) && Array.isArray(talent.skills)) {
    const overlap = talent.skills.filter(skill => gig.stylePrefs.includes(skill));
    if (overlap.length > 0) {
      score += overlap.length * 5;
      rationale.push(`Skill overlap: ${overlap.join(', ')} (+${overlap.length * 5})`);
    }
  }

  // Style/keyword match
  if (Array.isArray(gig.stylePrefs) && Array.isArray(talent.styles)) {
    const styleOverlap = talent.styles.filter(style => gig.stylePrefs.includes(style));
    if (styleOverlap.length > 0) {
      score += 3;
      rationale.push(`Style match: ${styleOverlap.join(', ')} (+3)`);
    }
  }

  // Experience (optional)
  if (talent.experience) {
    score += Math.min(talent.experience, 10); // +1 per year, max +10
    rationale.push(`Experience: ${talent.experience} years (+${Math.min(talent.experience, 10)})`);
  }

  return { score, rationale };
}

exports.matchTalents = async (req, res) => {
  try {
    const gig = req.body;
    const talents = await Talent.find();
    const results = talents.map(talent => {
      const { score, rationale } = scoreTalent(gig, talent);
      return { talent, score, rationale };
    });
    results.sort((a, b) => b.score - a.score);
    res.json({
      matches: results.slice(0, 3),
      allRanked: results,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 