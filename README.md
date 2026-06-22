# 🏨 Smart Accommodation Finder

An **AI-powered hotel recommendation system** that takes user input — location, Check-in & Check-out Dates, and budget — and intelligently finds the best possible hotel options by comparing all available factors. The system leverages real-time hotel data, evaluates amenities, and summarizes user reviews to simplify travel decisions.

---

## 📈 Outcomes

- ✅ Enables **personalized hotel search** tailored to budget and stay preferences.
- ✅ Reduces user effort by **automating comparisons** and **summarizing reviews**.
- ✅ Uses **AI to optimize decision-making**, ensuring the best fit for user needs.
- ✅ Provides a **smooth and intuitive experience** for travel planning.

---

## ✨ Features

- 📍 **Input Parameters:** Accepts location, Check-in & Check-out Dates, and budget.
- 🏨 **Real-Time Hotel Data:** Fetches hotel listings and details using **SerpAPI**.
- 🧠 **AI-Powered Suggestions:** Uses **Gemini** to analyze and compare options based on amenities, ratings, and user preferences.
- 📝 **Review Summarization:** Summarizes user reviews for each hotel to assist in quick decision-making.
- ⚡ **Optimized UI:** Interactive and responsive frontend built with **React**.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, Vite, TailwindCSS v4, Framer Motion |
| **Backend** | Flask, Flask-SocketIO (Python) |
| **AI Services** | Google Gemini |
| **Hotel Data** | SerpAPI |

---

## 📁 Project Structure

```
AI-Powered-Accommodation-Finder/
├── .gitignore              # Global gitignore
├── .env.example            # Environment variable template
├── README.md
│
├── client/                 # React + Vite frontend
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/             # Static assets (images, favicon)
│   └── src/
│       ├── App.jsx         # App routes
│       ├── main.jsx        # Entry point
│       ├── index.css       # Global styles & Tailwind
│       ├── components/     # Reusable UI components
│       └── pages/          # Page-level components
│
└── server/                 # Flask backend
    ├── app.py              # Main Flask application
    └── requirements.txt    # Python dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+) and **npm**
- **Python** (v3.9+) and **pip**

### 1. Clone the Repository

```bash
git clone https://github.com/MithileshGandhe/AI-Powered-Accommodation-Finder.git
cd AI-Powered-Accommodation-Finder
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and fill in your API keys:

```env
VITE_BACKEND_URL=http://127.0.0.1:5000
GOOGLE_API_KEY=your_google_api_key_here
SERPAPI_API_KEY=your_serpapi_api_key_here
```

### 3. Install & Run the Backend

```bash
cd server
pip install -r requirements.txt
python app.py
```

The Flask server will start at `http://127.0.0.1:5000`.

### 4. Install & Run the Frontend

```bash
cd client
npm install
npm run dev
```

The Vite dev server will start at `http://localhost:5173`.

---

## Output

![{7C7A9A3B-B6F6-43CC-984D-72F46CDE9D00}](https://github.com/user-attachments/assets/6d9f43ec-567b-467b-825a-9559593ab671)

![image](https://github.com/user-attachments/assets/c7864295-0171-4980-bdc0-e6acb2a7b34b)

---
