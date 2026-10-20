import React, { useState } from 'react';
import { FileText, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Button } from '../../components/ui/Button.jsx';
import { resumeService } from '../../services/resumeService.js';
import { Alert } from '../../components/feedback/Alert.jsx';
import { motion } from 'framer-motion';

export function ResumeSection() {
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleDownloadPdf = () => {
    // First try the bundled static PDF (always available).
    // Fall back to the Express backend endpoint if needed.
    const staticUrl = '/bhanu-upadhyay-resume.pdf';
    setDownloadNotice({
      type: 'info',
      message: 'Downloading resume PDF…'
    });

    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = staticUrl;
    link.download = 'Bhanu_Upadhyay_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadNotice({
        type: 'success',
        message: 'Resume download initiated. Check your downloads folder.'
      });
    }, 600);
  };

  const handleDownloadDocx = () => {
    const url = resumeService.getDocxUrl();
    setDownloadNotice({
      type: 'info',
      message: `Requesting DOCX from Express backend: ${url}. If the backend is not running, this may not work.`
    });
    window.open(url, '_blank');
  };

  return (
    <SectionWrapper
      id="resume"
      badge="Curriculum Vitae"
      title="Download Resume"
      subtitle="Obtain an official copy of my technical profile, academic credentials, and project history."
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {downloadNotice && (
          <Alert
            type={downloadNotice.type}
            message={downloadNotice.message}
            onClose={() => setDownloadNotice(null)}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PDF Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card hoverGlow className="flex flex-col justify-between p-8 space-y-6 h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Standard PDF Resume
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimized for digital review, recruiter email sharing, and cross-device document fidelity.
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>ATS-compliant structured typography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Verified academic and internship information</span>
                  </li>
                </ul>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full gap-2"
                onClick={handleDownloadPdf}
              >
                <Download className="w-4 h-4" />
                <span>Download PDF (.pdf)</span>
              </Button>
            </Card>
          </motion.div>

          {/* DOCX Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card hoverGlow className="flex flex-col justify-between p-8 space-y-6 h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Editable Word Document
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Formatted in Microsoft Word DOCX format for automated talent acquisition pipelines and HR parsing software.
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>Native MS Word / Google Docs compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>Requires Express backend server to be running</span>
                  </li>
                </ul>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 border-purple-500/60 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10"
                onClick={handleDownloadDocx}
              >
                <Download className="w-4 h-4" />
                <span>Download Word (.docx)</span>
              </Button>
            </Card>
          </motion.div>
        </div>

        <p className="text-center text-xs text-slate-500 dark:text-slate-500 font-mono">
          <AlertCircle className="w-3 h-3 inline mr-1" />
          The DOCX format requires the Express backend to be running. PDF is available directly.
        </p>
      </div>
    </SectionWrapper>
  );
}
