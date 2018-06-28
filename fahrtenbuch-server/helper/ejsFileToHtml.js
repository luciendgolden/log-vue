const ejs = require('ejs');
const path = require('path');

/**
 * @param {Object} options
 * @param {String} options.category
 * @param {String} options.template
 * @param {Object} options.data
 *
 * @return {Promise.<String, Error>}
 */
const parseTemplateToString = (options) => {
  const { data } = options;

  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '../views/pages', 'logbook.ejs');
    const renderingOptions = {
      client: true,
      rmWhitespace: true,
    };
    ejs.renderFile(
      filePath,
      data,
      renderingOptions,
      (err, str) => {
        if (err) return reject(err);
        return resolve(str);
      },
    );
  });
};

module.exports = parseTemplateToString;
