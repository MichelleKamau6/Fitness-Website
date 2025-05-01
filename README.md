


# Grind Mode Fitness Website 💪

**Grind Mode** is a fitness-themed website offering users a platform to learn about fitness, join bootcamps, connect with trainers, and track their workout progress. The site includes sign-up and login functionality, responsive design, and dynamic interaction using JavaScript.

---

## 🔗 Live Preview

> _Coming soon_ – Deploy via [Vercel](https://vercel.com/).

---

## 📁 Project Structure

grind-mode/ │ ├── public/ # Frontend files │ ├── index.html │ ├── about.html │ ├── services.html │ ├── trainers.html │ ├── bootcamps.html │ ├── contact.html │ ├── login.html │ ├── signup.html │ ├── style.css # Shared CSS styles │ └── script.js # Shared JavaScript for all pages │ ├── server.js # Express backend server ├── package.json # NPM dependencies and scripts └── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 Features

- Responsive design using HTML5 + CSS3
- Shared navigation and footer
- JavaScript interactions (form validation, active links, etc.)
- Signup and login with backend validation (Node.js + Express)
- In-memory user storage (can upgrade to database later)

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** server.js, Express
- **Middleware:** Body-parser
- **Platform:** Localhost (development)

---

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/grind-mode.git
cd grind-mode
Install dependencies

bash
Copy
Edit
npm install
Run the server

bash
Copy
Edit
node server.js
Access in your browser

arduino
Copy
Edit
http://localhost:3000/
🧪 Example Routes
GET / → Home page

GET /signup.html → Sign-up form

POST /signup → Create user

GET /login.html → Login form

POST /login → Authenticate user

📌 Notes
This version uses in-memory storage for simplicity. Users won't persist after a server restart.

You can upgrade to a real database (e.g., MongoDB) for persistence.

No password encryption yet—add bcrypt for production use.

📈 Future Enhancements
User dashboard to track workouts

Admin panel for trainers

Real-time chat or support

Integration with fitness APIs (e.g., exercise DB)

Secure authentication using JWT

🧑‍💻 Author
Michelle Kamau


📄 License
MIT License. Free to use and modify.

yaml
Copy
Edit

---

Let me know if you’d like this customized for deployment (e.g., Render/Netlify instructions or database integration).













