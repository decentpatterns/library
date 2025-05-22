// This file configures data inserted into each pattern as it is displayed
// on the dots-website

module.exports = {
  layout: "pattern",
  tags: "pattern",
  eleventyComputed: {
    published: (data) => {
      // Use git last modified date for the pattern source file in the library submodule
      const { execSync } = require("child_process");
      const path = require("path");

      try {
        // Get the pattern name from the input path
        let filePath = data.page.inputPath;

        // Extract pattern name from path like site/library/visual-hash/index.md
        const pathParts = filePath.split("/");
        const patternName = pathParts[pathParts.length - 2]; // Get the directory name before index.md

        // Check git history in the library submodule for the original pattern file
        const libraryPatternPath = `patterns/${patternName}/index.md`;
        const workingDir = path.join(process.cwd(), "library");
        const gitCommand = `git log -1 --format="%ci" -- "${libraryPatternPath}"`;

        const result = execSync(gitCommand, {
          cwd: workingDir,
          encoding: "utf-8",
        }).trim();

        if (result) {
          const date = new Date(result);
          return date.toLocaleDateString("en-us");
        }
      } catch (error) {
        console.warn(
          `Could not get git date for pattern ${data.page.inputPath}:`,
          error.message
        );
      }

      // Fallback to file date
      return data.page.date.toLocaleDateString("en-us");
    },
    relatedPatterns: (data) => data.helpers.relatedPatterns(data),
    categoryName: (data) => data.helpers.categoryName(data),
  },
};
