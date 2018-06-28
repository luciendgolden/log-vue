const renderTemplateToString = require('../helper/ejsFileToHtml');

const converter = require('phantom-html-to-pdf')({
  numberOfWorker: 2,
  timeout: 5000,
  tmpDir: '/tmp',
  phantomPath: require('phantomjs-prebuilt').path,
  strategy: 'dedicated-process',
});

const generateReport = data => renderTemplateToString({ data })
  .then(template => new Promise((resolve, reject) => {
    converter(
      {
        html: template,
      },
      (err, pdf) => {
        if (err) return reject(err);
        return resolve(pdf.stream.path);
      },
    );
  }));

module.exports = generateReport;
