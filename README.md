# 💡 Product Store — MERN Stack Application

**ProductStore** is a full-stack web application designed to quickly capture, organize, and manage thoughts and ideas in real time.

---

## Project Goals & Motivation

This project was built primarily to **deepen my both my backend knowledge in Node.js, Express and the frontend logic with React**. Having built a few projects prior, I wanted to build a complete full-stack architecture, connecting a Node.js REST API with a React frontend using **Axios**.

Key takeaways from this build:
- **Backend Focus:** Strengthened Node.js, designed a clean Express REST API, integrated MongoDB, and managed server-side logic.
- **Frontend Logic & Axios:** Structured asynchronous API communication with Axios and handled user feedback (using `react-hot-toast`).
- **Tailwind CSS & DaisyUI:** Explored Tailwind CSS and pre-styled DaisyUI components (leveraging AI assistance for design and UI integration).
- **UI/UX Experience:** Integrated modern icons with `lucide-react` for a smooth and responsive interface.
---

## Live Demo

Check out the live application here:  
👉 **[ThinkBoard Live Demo] (https://mern-product-store-wmxo.onrender.com)

---


## Features

- **Create:** Add new products with their name, price, and image.
- **Read:** View all saved products on a clean, modern interface.
- **Update:** Edit existing product information whenever needed.
- **Delete:** Remove products from the catalog.
- **Notifications & UI:** Real-time visual feedback with `react-hot-toast`, `lucide-react` icons, and a fully responsive design powered by Tailwind CSS and DaisyUI.

---

## Tech Stack

### **Backend **
- **Node.js** & **Express.js** (REST API)
- **MongoDB Atlas** (Database)

### **Frontend**
- **React** (built with **Vite**)
- **Axios** (API HTTP requests)
- **Tailwind CSS** + **DaisyUI**

---

## ⚡ Local Setup

### **Clone the repository:**
   ```bash
   git clone [https://github.com/mehdi-bellache/mern-product-store.git](https://github.com/mehdi-bellache/mern-product-store.git)
   cd mern-notes-app
   ```

### **Set up environment variables:**
   Set up your MongoDB database, then create a `.env` file inside the `backend/` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORt= A port value
   NODE_ENV=development or production
   ```

### **Run the Application:**

   **Option A: Development Mode (Recommended for local coding)**  
   Open two separate terminal windows:
   - **Backend:** Navigate to `backend/` and run `npm run dev`
   - **Frontend:** Navigate to `frontend/` and run `npm run dev`  
   
   Then open `http://localhost:5173/` in your browser.

   **Option B: Production Mode (Build)**  
   Change the value of the variable NODE_ENV from developement to production.
   Run these commands from the **root** folder:
   ```bash
   npm run build # Installs all dependencies and builds the React frontend
   npm start     # Starts the unified backend server
   ```
   Then open `http://localhost:3000` in your browser.

---

## License:
This project is open-source and available under the [MIT License](LICENSE).