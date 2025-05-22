// This file configures data inserted into each pattern as it is displayed
// on the dots-website

module.exports = {
  layout: "pattern",
  tags: "pattern",
  eleventyComputed: {
    published: (data) => data.helpers.publishedDate(data),
    relatedPatterns: (data) => data.helpers.relatedPatterns(data),
    categoryName: (data) => data.helpers.categoryName(data),
  },
};
