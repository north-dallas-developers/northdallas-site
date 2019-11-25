const { DateTime } = require("luxon");
const { JSDOM } = require("jsdom");

module.exports = function(eleventyConfig) {
    // Enable assets
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPassthroughCopy("assets/js");
    eleventyConfig.addPassthroughCopy("assets/css");

    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.setBrowserSyncConfig({
        watch: true
    });

    // For readable dates
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
    
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addNunjucksShortcode("meetingSummary", function(markdown, url) {
        // Parse strings as HTML
        const dom = new JSDOM(markdown);

        let firstParagraph = dom.window.document.querySelector("p").textContent;

        // Read first 50 words and parse only to the last sentence to return
        let regExp = /^(\w+\W+?){50}/g

        if (regExp.test(firstParagraph)) {
            firstParagraph = firstParagraph.slice(0, firstParagraph.lastIndexOf(".", regExp.lastIndex)) + ".";
        }

        return `<p>${firstParagraph}</p>` + `<button onclick="location.href='${url}'" class="article-button">View More >></button>`;
    });
}