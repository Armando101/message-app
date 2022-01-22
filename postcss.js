const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const fs = require("fs");
const postcssNested = require("postcss-nested");
const atImport = require("postcss-import");


fs.readFile("./css/styles.css", (err, css) => {
  if (err) {
    return console.error("Whoops something went wrong");
  }
  postcss([autoprefixer, postcssNested]).use(atImport())
    .process(css, { from: "./css/styles.css", to: "dist/app.css" })
    .then((result) => {
      fs.writeFile("dist/app.css", result.css, () => true);
      if (result.map) {
        fs.writeFile("dist/app.css.map", result.map.toString(), () => true);
      }
    });
});
