# Nexus Portfolio - REST API Specification

This document details the REST API endpoints, request contracts, response payloads, and status codes for the Nexus Portfolio backend services.

## Base URL
- Local Development: `http://localhost:5001/api`
- Production: `https://<your-render-or-railway-app>.com/api`

---

## 1. Health Check

Checks service uptime, operational state, environment, and MongoDB connection status.

- **URL:** `/health`
- **Method:** `GET`
- **Auth Required:** No
- **Rate Limited:** Yes (100 req / 15 min)

### Success Response (200 OK)
```json
{
  "success": true,
  "status": "ok",
  "service": "nexus-portfolio-api",
  "timestamp": "2026-10-19T11:00:00.000Z",
  "uptimeSeconds": 142,
  "environment": "development",
  "database": {
    "status": "connected",
    "connected": true
  }
}
```

---

## 2. Submit Contact Inquiry

Validates incoming message details using Zod and saves the record to the MongoDB `contacts` collection.

- **URL:** `/contact`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Auth Required:** No

### Request Body
| Field | Type | Required | Constraints | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | String | Yes | Min 2, Max 100 characters | Name of the sender |
| `email` | String | Yes | Valid email, Max 255 chars | Contact email address |
| `message` | String | Yes | Min 10, Max 2000 chars | Inquiry message content |

#### Request Example
```json
{
  "name": "Sarah Connor",
  "email": "sarah@cyberdyne.io",
  "message": "We would like to discuss an engineering role for our futuristic web platform."
}
```

### Success Response (201 Created)
```json
{
  "success": true,
  "message": "Thank you for reaching out! Your message has been received.",
  "data": {
    "id": "67b43a9b2f8149e81b67119e",
    "name": "Sarah Connor",
    "email": "sarah@cyberdyne.io",
    "createdAt": "2026-10-19T11:05:00.000Z"
  }
}
```

### Error Responses

#### 400 Bad Request (Validation Failure)
```json
{
  "success": false,
  "error": {
    "message": "Validation failed",
    "statusCode": 400,
    "details": [
      {
        "field": "email",
        "message": "Please provide a valid email address"
      },
      {
        "field": "message",
        "message": "Message must be at least 10 characters long"
      }
    ]
  }
}
```

#### 503 Service Unavailable (Database Offline)
```json
{
  "success": false,
  "error": {
    "message": "Database service is currently unavailable. Please try again later or contact me directly via email.",
    "statusCode": 503,
    "details": null
  }
}
```

---

## 3. Resume Downloads

Serves the candidate's verified resume documents with appropriate MIME types and file attachments.

### 3.1 Download PDF Resume
- **URL:** `/resume/pdf`
- **Method:** `GET`
- **Response Headers on Success:**
  - `Content-Type: application/pdf`
  - `Content-Disposition: attachment; filename="Bhanu_Upadhyay_Resume.pdf"`

#### Missing File Response (404 Not Found)
```json
{
  "success": false,
  "error": {
    "code": "RESUME_PDF_NOT_FOUND",
    "message": "Resume PDF document is not yet uploaded on the server.",
    "instruction": "Please place your 'resume.pdf' in the server directory: 'server/public/resumes/'",
    "expectedPath": "/.../nexus-portfolio/server/public/resumes/resume.pdf"
  }
}
```

### 3.2 Download DOCX Resume
- **URL:** `/resume/docx`
- **Method:** `GET`
- **Response Headers on Success:**
  - `Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document`
  - `Content-Disposition: attachment; filename="Bhanu_Upadhyay_Resume.docx"`

#### Missing File Response (404 Not Found)
```json
{
  "success": false,
  "error": {
    "code": "RESUME_DOCX_NOT_FOUND",
    "message": "Resume DOCX document is not yet uploaded on the server.",
    "instruction": "Please place your 'resume.docx' in the server directory: 'server/public/resumes/'",
    "expectedPath": "/.../nexus-portfolio/server/public/resumes/resume.docx"
  }
}
```
