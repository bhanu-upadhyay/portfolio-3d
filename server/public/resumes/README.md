# Resume Documents Directory

This directory hosts downloadable resume documents served via Express API endpoints:

1. `GET /api/resume/pdf`
2. `GET /api/resume/docx`

## Expected Files

Please place your actual resume documents in this folder:

- `resume.pdf` (or `Bhanu_Upadhyay_Resume.pdf`)
- `resume.docx` (or `Bhanu_Upadhyay_Resume.docx`)

## Behavior

- When the files are present, the Express server streams them as attachments with proper MIME types (`application/pdf` and `application/vnd.openxmlformats-officedocument.wordprocessingml.document`).
- When missing, the endpoints safely return a descriptive HTTP 404 response instructing the developer/administrator where to place the documents, preventing server errors or fake placeholder downloads.
