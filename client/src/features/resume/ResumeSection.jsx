import React, { useState } from 'react';
import { FileText, Download, CheckCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Button } from '../../components/ui/Button.jsx';
import { resumeService } from '../../services/resumeService.js';
import { Alert } from '../../components/feedback/Alert.jsx';

export function ResumeSection() {
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleDownload = (type) => {
    const url = type === 'pdf' ? resumeService.getPdfUrl() : resumeService.getDocxUrl();
    setDownloadNotice({
      type: 'info',
      message: `Fetching ${type.toUpperCase()} document directly from Express backend endpoint...`
    });
    // Trigger download in new window/tab
    window.open(url, '_blank');
  };

  return (
    <SectionWrapper
      id="resume"
      badge="Curriculum Vitae"
      title="Download Resume"
      subtitle="Obtain an official copy of my technical profile, career achievements, and project history."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {downloadNotice && (
          <Alert
            type={downloadNotice.type}
            message={downloadNotice.message}
            onClose={() => setDownloadNotice(null)}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PDF Card */}
          <Card hoverGlow className="flex flex-col justify-between p-8 space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Standard PDF Resume
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Optimized for digital review, recruiter email sharing, and cross-device document fidelity. Served dynamically by Express backend.
              </p>
              <ul className="text-xs text-slate-400 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>ATS-compliant structured typography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Verified project links and metrics</span>
                </li>
              </ul>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full gap-2"
              onClick={() => handleDownload('pdf')}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (.pdf)</span>
            </Button>
          </Card>

          {/* DOCX Card */}
          <Card hoverGlow className="flex flex-col justify-between p-8 space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Editable Word Document
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Formatted in Microsoft Word DOCX format for talent acquisition pipelines and automated parsing software. Served by Express backend.
              </p>
              <ul className="text-xs text-slate-400 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Native MS Word / Google Docs compatibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Easily editable formatting for hiring teams</span>
                </li>
              </ul>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full gap-2 border-purple-500/60 text-purple-400 hover:bg-purple-500/10"
              onClick={() => handleDownload('docx')}
            >
              <Download className="w-4 h-4" />
              <span>Download Word (.docx)</span>
            </Button>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
