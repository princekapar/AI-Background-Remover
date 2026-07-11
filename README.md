# 🎨 AI Background Remover

An AI-powered web application that removes image backgrounds instantly using the Clipdrop API. Users can securely sign in, upload images, remove backgrounds, purchase credits via Razorpay, and download processed images.

🌐 **Live Demo:** [https://live-demo-url.com](https://ai-background-remover-client.onrender.com/)

---

## 📸 Preview

| Home Page | Result Page |
|-----------|-------------|
| ![Home](https://github.com/user-attachments/assets/ef52f4f8-a797-45e5-a225-719ddf5aefb2) | ![Result](https://github.com/user-attachments/assets/079944c6-37b4-4f47-8b30-c3004637d8e5) |

---

## ✨ Features

- 🤖 AI-powered background removal
- 🔐 Secure authentication with Clerk
- 🖼️ Upload images with preview
- ⚡ Fast background removal using Clipdrop API
- 💳 Credit-based usage system
- 💰 Razorpay payment integration
- 📥 Download processed images
- 📱 Fully responsive UI
- ☁️ Cloud deployment support

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Clerk Authentication
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Razorpay
- Clipdrop API
- Clerk Webhooks

---

## 📂 Project Structure

```
AI-Background-Remover/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── uploads/
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/princekapar/AI-Background-Remover.git
```

```bash
cd AI-Background-Remover
```

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=4000
MONGO_DB_URI=your_mongodb_uri

CLERK_SECRET_KEY=your_clerk_secret
CLERK_WEBHOOK_SECRET=your_webhook_secret

CLIPDROP=your_clipdrop_api_key

RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

CURRENCY=INR
```

Run backend

```bash
npm run server
```

---

### Frontend Setup

```bash
cd client
npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:4000

VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key

VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

Run frontend

```bash
npm run dev
```

---

## 🔑 Environment Variables

### Backend

| Variable | Description |
|----------|-------------|
| MONGO_DB_URI | MongoDB Connection URI |
| CLERK_SECRET_KEY | Clerk Secret Key |
| CLERK_WEBHOOK_SECRET | Clerk Webhook Secret |
| CLIPDROP | Clipdrop API Key |
| RAZORPAY_KEY_ID | Razorpay Key |
| RAZORPAY_KEY_SECRET | Razorpay Secret |
| CURRENCY | Payment Currency |

### Frontend

| Variable | Description |
|----------|-------------|
| VITE_BACKEND_URL | Backend URL |
| VITE_CLERK_PUBLISHABLE_KEY | Clerk Publishable Key |
| VITE_RAZORPAY_KEY_ID | Razorpay Key |

---

## 🎯 How It Works

1. Sign in using Clerk Authentication.
2. Upload an image.
3. AI removes the background using Clipdrop.
4. One credit is deducted.
5. Download the processed image.
6. Purchase more credits through Razorpay when needed.

---

## 🌍 Live Demo

👉 https://ai-background-remover-client.onrender.com
---

## 📈 Future Improvements

- Image history
- Multiple image uploads
- Drag & Drop upload
- Dark mode
- Image compression
- Admin dashboard
- Payment history

---

## 👨‍💻 

GitHub: https://github.com/princekapar

LinkedIn: https://www.linkedin.com/in/prince-kapar

---

⭐ If you like this project, don't forget to star the repository!
