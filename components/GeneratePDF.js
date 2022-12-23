import { jsPDF, HTMLOptionImage } from "jspdf";
import { toPng, toCanvas } from "html-to-image";

const GeneratePdf = ({ html }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    doc.internal.pageSize.height(50);
    doc.internal.pageSize.width(100);
    console.log(height);
    console.log(width);

    let split = doc.splitTextToSize(
      document.getElementById("text").innerText,
      200
    );
    let image = document.getElementById("image").getAttribute("src");
    doc.text(document.querySelector(".content > h1").innerHTML, 75, 5);
    doc.addImage(image, 70, 7, 60, 60);
    doc.text(split, 5, 75);
    doc.output("dataurlnewwindow");
  };

  const generateImage = async () => {
    const image = await toPng(html.current, { quality: 0.95 });
    const doc = new jsPDF('l','mm',[600,300]);

    // doc.addImage(image, "JPEG", 5, 22, 200, 160);
    doc.addImage(image, "JPEG", 0, 0, 600, 300);

    doc.save();
  };
  return (
    <div className="button-container">
      <button onClick={generateImage}>Get PDF using image</button>
      <button onClick={generatePdf}>Get PDF as text</button>
    </div>
  );
};

export default GeneratePdf;
