module.exports = function fgtoog(og, fg) {
  if (!og) {
    throw new Error('No OG provided');
  }
  return (og - fg) * 131;
};


