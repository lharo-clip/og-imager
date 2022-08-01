const Handlebars = require("handlebars");
const { templateHTML, templateStyles } = require("./template");

function compileStyles({ logo_image, og_background }) {
  return Handlebars.compile(templateStyles)({
    og_background, 
    logo_image 
  });
};


function getCompiledHTML({ og_background, logo_image, public_name, alias }) {
  return Handlebars.compile(templateHTML)({
    public_name, alias, styles: compileStyles({ logo_image, og_background }),
  });
}

module.exports = { getCompiledHTML };