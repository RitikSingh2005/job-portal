# 🚀 Hired – Job Portal

A modern full-stack job portal built with React + Vite, designed to connect recruiters and job seekers seamlessly.

Hired allows recruiters to post jobs and manage applications, while candidates can explore, save, and apply to jobs easily.

# 📌 Features
## 👨‍💼 For Job Seekers

Browse available jobs

Filter by location & company

View detailed job descriptions

Save jobs for later

Apply to jobs

Track applied jobs

## 🏢 For Recruiters

Create company profile

Post new job listings

Manage posted jobs

View applications received

Track applicants

# 🔐 Authentication & Security

Secure authentication (Clerk)

Role-based routing (Recruiter / Candidate)

Protected routes

JWT-based session handling

Supabase Row Level Security (RLS)

# 🛠️ Tech Stack
Frontend- React	Tailwind CSS			
Backend- Supabase	

Database-	Clerk

Build Tool- vite,vscode

	
# 📁 Project Structure

```bash
job-portal
│
├── public/
│   ├── companies/
│   ├── banner.jpeg
│   ├── logo.png
│   ├── logo-dark.png
│   ├── logo-new.png
│   └── vite.svg
│
├── src/
│   ├── api/
│   ├── components/
│   │   ├── ui/
│   │   ├── AddCompanyDrawer.jsx
│   │   ├── ApplicationCard.jsx
│   │   ├── ApplyJob.jsx
│   │   ├── CreatedApplications.jsx
│   │   ├── CreatedJobs.jsx
│   │   ├── JobCard.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── header.jsx
│   │   └── theme-provider.jsx
│   │
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   │   ├── JobListing.jsx
│   │   ├── JobPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── MyJobs.jsx
│   │   ├── OnBoarding.jsx
│   │   ├── PostJob.jsx
│   │   └── SavedJob.jsx
│   │
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

# Installation & Setup
1️⃣ Clone the Repository

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables

4️⃣ Run the Development Server
npm run dev

# 🔑 Authentication Flow

Users sign in using Clerk.

Role is assigned (recruiter / candidate).

JWT token is passed to Supabase.

Supabase RLS policies restrict data access securely.


# 📸 Screenshots


![Image Alt](https://github.com/RitikSingh2005/job-portal/blob/main/Screenshot%202026-02-19%20114005.png)
![Image Alt](https://github.com/RitikSingh2005/job-portal/blob/main/Screenshot%202026-02-19%20114038.png)
![Image Alt](https://github.com/RitikSingh2005/job-portal/blob/main/Screenshot%202026-02-19%20114110.png)


# 👨‍💻 Author

Ritik Singh

