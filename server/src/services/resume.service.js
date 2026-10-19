import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory pointing to server/public/resumes
const RESUMES_DIR = path.resolve(__dirname, '../../public/resumes');

export const resumeService = {
  /**
   * Resolve resume file details and existence
   * @param {'pdf' | 'docx'} format
   * @returns {{ exists: boolean, filePath: string, downloadName: string, mimeType: string }}
   */
  getResumeMetadata(format) {
    const isPdf = format === 'pdf';
    const primaryName = isPdf ? 'resume.pdf' : 'resume.docx';
    const fallbackName = isPdf ? 'Bhanu_Upadhyay_Resume.pdf' : 'Bhanu_Upadhyay_Resume.docx';
    const downloadName = isPdf ? 'Bhanu_Upadhyay_Resume.pdf' : 'Bhanu_Upadhyay_Resume.docx';
    const mimeType = isPdf
      ? 'application/pdf'
      : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    const primaryPath = path.join(RESUMES_DIR, primaryName);
    const fallbackPath = path.join(RESUMES_DIR, fallbackName);

    let chosenPath = primaryPath;
    let exists = false;

    if (fs.existsSync(primaryPath)) {
      chosenPath = primaryPath;
      exists = true;
    } else if (fs.existsSync(fallbackPath)) {
      chosenPath = fallbackPath;
      exists = true;
    }

    return {
      exists,
      filePath: chosenPath,
      downloadName,
      mimeType,
      expectedDirectory: RESUMES_DIR
    };
  }
};
