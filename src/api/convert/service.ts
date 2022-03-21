import pdf from 'html-pdf';
import fs from 'fs';

const convertToPdf = async (htmlFilePath: string) => {
  const html = fs.readFileSync(htmlFilePath, 'utf8');
  pdf.create(html).toFile('./public/result/success.pdf', function (err, res) {
    if (err) throw err;
    console.log(res);
  });
};
export default convertToPdf;
