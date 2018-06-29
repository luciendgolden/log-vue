const renderTemplateToString = require('../helper/ejsFileToHtml');
const pdf = require('html-pdf');

const factorHeight = ((8.264) * 1.5);
const factorWidth = ((11.694) * 1.5);

const options = {
  filename: 'files/report.pdf',
  format: 'A4',
  orientation: 'landscape',
  height: `${factorHeight}in`, // allowed units: mm, cm, in, px
  width: `${factorWidth}in`, // allowed units: mm, cm, in, px,
  directory: __dirname,
  type: 'pdf',
  border: {
    top: '0.5in', // default is 0, units: mm, cm, in, px
    bottom: '0.4in',
  },
};

const generateReport = data => renderTemplateToString({ data })
  .then(template => new Promise((resolve, reject) => {
    pdf.create(template, options).toFile((err, res) => {
      if (err) { return reject(err); }
      return resolve(res.filename);
    });
  }));

module.exports = generateReport;
