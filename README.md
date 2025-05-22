📘 User Access Management System — Frontend
This is the frontend of the User Access Management System, a role-based access control platform where:

* Employees can request access to software.
* Managers can view, approve, or reject requests.
* Admins can create software listings.

Features:

🔐 JWT Authentication
👥 Role-based Dashboard
📦 Software listing & creation
📝 Access request system
✅ Approval/Rejection by Managers
🧠 State management via Context API
🔄 Data fetching with React Query
🎨 Tailwind CSS UI

🔧 Technologies Used:

* React (Vite)
* React Router DOM
* React Query
* Axios
* Tailwind CSS
* Context API
* LocalStorage

Installation :

1. Clone the repo
git clone https://github.com/shylekhwani/leucineAssingment.git

2. Install dependencies
npm install

3. Configure Environment
VITE_BACKEND_URL=http://localhost:3000/api/v1


4. Run the app
npm run dev


| Role         | Abilities                                      |
| ------------ | ---------------------------------------------- |
| **Admin**    | Create software                                |
| **Manager**  | View and manage (approve/reject) requests      |
| **Employee** | Request software access & track request status |


🔐 Authentication Flow
Login & registration handled via backend.
Token stored in localStorage.
On app mount, token is restored and passed to protected APIs via x-access-token header.

✍️ Author
Developed by Yash Lekhwani — for demo, training, and learning purposes.