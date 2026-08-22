import { sfx } from './sfx';

/**
 * Generates and downloads the resume as a PDF file from the print view
 * This creates a PDF directly from the resume content
 */
export const generateAndDownloadResumePDF = async () => {
  try {
    sfx.playSuccess();
    
    // Get the resume content
    const resumeContent = document.querySelector('[data-resume-content]');
    
    if (!resumeContent) {
      console.warn('Resume content not found. Using browser print dialog...');
      window.print();
      return;
    }

    // Create a temporary container for the resume
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = resumeContent.innerHTML;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    document.body.appendChild(tempDiv);

    // Use browser's print-to-PDF feature
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Sanjay_S_Resume.pdf</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #1e293b;
              line-height: 1.5;
            }
            @page {
              size: A4;
              margin: 0.5in;
            }
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
            }
            ${resumeContent.querySelector('style')?.textContent || ''}
          </style>
        </head>
        <body>
          ${resumeContent.innerHTML}
        </body>
        </html>
      `);
      printWindow.document.close();
      
      // Trigger print dialog after content loads
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }

    // Clean up
    document.body.removeChild(tempDiv);
  } catch (error) {
    console.error('Error generating PDF:', error);
    window.print(); // Fallback to print dialog
  }
};
