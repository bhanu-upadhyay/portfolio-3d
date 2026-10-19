import { resumeService } from '../services/resume.service.js';

export const resumeController = {
  /**
   * Serve PDF resume download
   */
  downloadPdf(req, res) {
    const meta = resumeService.getResumeMetadata('pdf');

    if (!meta.exists) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'RESUME_PDF_NOT_FOUND',
          message: 'Resume PDF document is not yet uploaded on the server.',
          instruction: `Please place your 'resume.pdf' in the server directory: '${meta.expectedDirectory}'`,
          expectedPath: meta.filePath
        }
      });
    }

    res.setHeader('Content-Type', meta.mimeType);
    res.download(meta.filePath, meta.downloadName, (err) => {
      if (err && !res.headersSent) {
        res.status(500).json({
          success: false,
          error: { message: 'Failed to stream resume PDF file' }
        });
      }
    });
  },

  /**
   * Serve DOCX resume download
   */
  downloadDocx(req, res) {
    const meta = resumeService.getResumeMetadata('docx');

    if (!meta.exists) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'RESUME_DOCX_NOT_FOUND',
          message: 'Resume DOCX document is not yet uploaded on the server.',
          instruction: `Please place your 'resume.docx' in the server directory: '${meta.expectedDirectory}'`,
          expectedPath: meta.filePath
        }
      });
    }

    res.setHeader('Content-Type', meta.mimeType);
    res.download(meta.filePath, meta.downloadName, (err) => {
      if (err && !res.headersSent) {
        res.status(500).json({
          success: false,
          error: { message: 'Failed to stream resume DOCX file' }
        });
      }
    });
  }
};
