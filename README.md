# Job Portal (React + Vite)

A simple job portal application built with React, Vite, Redux Toolkit, React Router, and Tailwind CSS. It fetches job listings from a dummy API and allows users to view job details and apply.

## 🚀 Features
- **React + Vite** for fast development
- **React Router** for navigation
- **Redux Toolkit** for state management
- **Axios** for API integration
- **Tailwind CSS** for UI styling
- **Search with Debounce** (Bonus)
- **Pagination for Job Listings** (Bonus)
- **Save Applied Jobs in Local Storage** (Bonus)

## 📂 Folder Structure
```
job-portal/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Apply.jsx
│   │   ├── About.jsx
│   │   ├── NotFound.jsx
│   ├── services/
│   │   ├── api.js
│   ├── store/
│   │   ├── jobsSlice.js
│   │   ├── store.js
│   ├── App.jsx
│   ├── main.jsx
│── package.json
│── tailwind.config.js
│── index.css
│── vite.config.js
```

## 📌 Installation & Setup

```sh
# Clone the repository
git clone https://github.com/your-username/job-portal.git
cd job-portal

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔗 API Endpoints
- Get all jobs: `GET https://jsonplaceholder.typicode.com/posts`
- Get job details: `GET https://jsonplaceholder.typicode.com/posts/{id}`
- Submit job application: `POST https://jsonplaceholder.typicode.com/posts`

## 🎯 Usage
1. View job listings on the **Home Page**.
2. Click on a job to view **Job Details**.
3. Apply for a job using the **Apply Page**.
4. Navigate to the **About Page** for information.
5. If a route is invalid, the **404 Page** appears.

## 🛠️ Technologies Used
- **React + Vite**
- **React Router**
- **Redux Toolkit**
- **Axios**
- **Tailwind CSS**

## 📜 License
This project is licensed under the MIT License.

