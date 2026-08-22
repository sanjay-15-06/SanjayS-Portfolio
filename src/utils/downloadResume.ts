import { sfx } from './sfx';

/**
 * Downloads the resume as a PDF file
 */
export const downloadResume = () => {
  try {
    sfx.playSuccess();
    
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sanjay_S_Resume.pdf';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading resume:', error);
  }
};

/**
 * Opens the resume in a new tab/window
 */
export const openResumeInNewTab = () => {
  try {
    sfx.playClick();
    window.open('/resume.pdf', '_blank');
  } catch (error) {
    console.error('Error opening resume:', error);
  }
};
