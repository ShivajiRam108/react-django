# 📚 Book Library Web Application

A full-stack web application to manage a library of books.  
Built with **React.js** for the frontend and **Django + Django REST Framework** for the backend.  

Users can **view**, **add**, **update**, and **delete** books through a modern, responsive interface.

---

## 🚀 Features

- **View Books**: Fetch and display a list of books from the backend.
- **Add Books**: Add new books with title and release year.
- **Update Books**: Update the title of existing books.
- **Delete Books**: Delete books with a confirmation popup.
- **Responsive UI**: Fully responsive, works on desktop and mobile.
- **Modern UI**: Built with React and styled with Tailwind CSS (or custom CSS).

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- JavaScript (ES6+)
- Tailwind CSS / CSS modules

**Backend:**
- Django 5.x
- Django REST Framework (DRF)
- SQLite / PostgreSQL (optional)

**Tools & Libraries:**
- Fetch API for HTTP requests
- React Hooks (`useState`, `useEffect`)
- CORS Headers in Django
- Browser `window.confirm()` for delete confirmation

---


## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-library.git
cd book-library

cd backend
python -m venv venv
# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


cd client
npm install
npm start


**Frontend (React)**

