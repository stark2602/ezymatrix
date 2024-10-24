Features
Backend (Node.js)
API service development with Node.js and Express.
Simulated data fetching for leads and campaigns from dummy CRM and marketing platforms.
MongoDB integration for data storage.
ETL process (Extract, Transform, Load) to clean and transform raw data into meaningful metrics.
API endpoints for generating reports (CSV/PDF).
Email notifications for specific alerts based on conditions.
Data models are built using Mongoose to interact with MongoDB.
Frontend (Angular)
Displays Leads and Campaigns data fetched from the backend.
Responsive UI/UX with basic styling for data presentation.
Simple and clean HTML and CSS structure.
Tech Stack
Backend: Node.js, Express, MongoDB, Mongoose
Frontend: Angular, HTML, CSS, Bootstrap
Database: MongoDB (local)
Reporting: CSV/PDF generation with file download
Alerts: Email notifications (using nodemailer or other service)
API Endpoints
1. Leads API
URL: /api/leads
Method: GET
Description: Fetches lead data from the database.
2. Campaigns API
URL: /api/campaigns
Method: GET
Description: Fetches campaign data from the database.
3. Reports API
URL: /api/reports/:type
Method: GET
Description: Generates a report in either CSV or PDF format based on the type parameter (either csv or pdf).
4. Alerts API
URL: /api/alerts
Method: POST
Description: Sends email alerts when certain conditions are met (e.g., threshold-based alerts for metrics).
Setup Instructions
Prerequisites
Node.js (v16+)
MongoDB (Ensure it's installed and running locally on port 27017)
Angular CLI (v12+)
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/ezymetrics.git
cd ezymetrics
2. Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Configure MongoDB:

Make sure MongoDB is running on mongodb://localhost:27017/ezymetrics. If MongoDB isn't running, start the service as per your operating system's instructions.

Start the backend server:

bash
Copy code
node app.js
The backend server should now be running on http://localhost:3000.

3. Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the Angular development server:

bash
Copy code
ng serve
The frontend server will run on http://localhost:4200.

Project Structure
bash
Copy code
/backend
    ├── app.js              # Main backend application
    ├── models/             # Mongoose models (Lead.js, Campaign.js)
    ├── controllers/        # Controller logic for leads and campaigns
    ├── routes/             # API routes
    ├── utils/              # Utility files for reports, notifications, etc.
    └── package.json        # Node dependencies
/frontend
    ├── src/
    │   ├── app/            # Angular components (leads, campaigns)
    │   ├── assets/         # Static assets like images and fonts
    │   ├── styles.css      # Global styles for the app
    └── package.json        # Angular dependencies
Usage
View Leads: Visit http://localhost:4200/leads to view the list of leads fetched from the backend.

View Campaigns: Visit http://localhost:4200/campaigns to view the campaigns data.

Generate Reports: Use the /api/reports/:type endpoint (e.g., http://localhost:3000/api/reports/csv or http://localhost:3000/api/reports/pdf) to download reports.

Email Alerts: Alerts will be triggered and emails sent based on the predefined conditions in the backend.

Reporting and Alerts
PDF/CSV Reports: The reports can be generated via the /api/reports/:type endpoint.
Email Alerts: When certain thresholds are crossed in lead or campaign metrics, alerts are sent using nodemailer. Configure the SMTP settings in utils/notifications.js.
