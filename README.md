## 🩺 Health Risk Prediction System (Diabetes)

A full-stack machine learning web application that predicts the risk of diabetes based on patient medical parameters.
The system integrates data analysis, machine learning, FastAPI backend, and a React frontend to deliver real-time predictions.

### 🚀 Project Overview

This project aims to demonstrate an end-to-end ML pipeline, starting from data analysis and model training to deployment-ready backend APIs and a professional frontend UI.

### Key Highlights:

1)Complete EDA & ML model training

2)Robust data preprocessing & evaluation

3)FastAPI backend for inference

4)React.js frontend with medical-style UI

5)Clean separation of training vs production

6)Resume & interview-ready architecture

### 🧠 Machine Learning Pipeline
##### 1. Data Analysis & EDA

Explored feature distributions

Identified skewness and outliers

Treated invalid zero values as missing

Visualized feature–target relationships

##### 2. Data Preprocessing

Median imputation for missing values

Feature scaling using StandardScaler

Outlier analysis using IQR & visualization

##### 3. Model Training

Algorithm: Logistic Regression

Evaluation Metrics:

Accuracy

Precision

Recall

F1-score

ROC–AUC (≈ 0.81)

##### 4. Model Optimization

Threshold tuning

Hyperparameter tuning

Feature importance analysis

Final decision based on data overlap & ROC-AUC

### 🏗️ System Architecture
React Frontend  →  FastAPI Backend  →  ML Model
      UI              API              Inference

### Why this design?

Separation of concerns

Scalable & maintainable

Industry-standard ML deployment practice

### 📂 Project Structure
```bash
Health-Risk-Prediction/
│
├── backend/
│   ├── main.py              # FastAPI entry point
│   ├── predict.py           # ML inference logic
│   ├── schemas.py           # Request validation (Pydantic)
│   ├── requirements.txt     # Backend dependencies
│   └── model/
│       ├── model.pkl        # Trained ML model
│       └── scaler.pkl       # Trained scaler
│
├── frontend/
│   ├── src/
│   │   ├── App.js           # React UI logic
│   │   └── App.css          # Professional medical UI
│   └── package.json
│
└── README.md
```
### ⚙️ Tech Stack
#### Machine Learning

Python

Pandas, NumPy

Scikit-learn, matplotlib, seaborn

#### Backend

FastAPI

Uvicorn

Pydantic

#### Frontend

React.js

HTML, CSS

### ▶️ How to Run the Project Locally
#### 1️⃣ Backend Setup
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Backend runs at:
```bash
http://127.0.0.1:8000
```

API Docs:
```bash
http://127.0.0.1:8000/docs
```

2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```bash
http://localhost:3000
```
🧪 Sample Test Inputs
```bash
{
  "Pregnancies": 4,
  "Glucose": 165,
  "BloodPressure": 85,
  "SkinThickness": 35,
  "Insulin": 160,
  "BMI": 34.2,
  "DiabetesPedigreeFunction": 0.78,
  "Age": 45
}
```
### 📊 Output

Prediction: Diabetic / Non-Diabetic

Probability: Risk score (0–1)

⚠️ This application provides risk estimation only and is not a medical diagnosis.

### 🎯 Key Learnings & Skills Demonstrated

End-to-end ML workflow

Feature analysis & decision-making

Model evaluation beyond accuracy

Real-world ML deployment practices

REST API development

Frontend–backend integration

Git & project structuring

### 🔮 Future Improvements

Cloud deployment (Render / Netlify)

### 🧑‍💻 Author

Leela Madhav
Aspiring ML & Backend Engineer
Focused on building industry-grade AI systems

### ⭐ Final Note

This project reflects real-world ML engineering practices, not just model training.
It emphasises understanding, decision-making, deployment, and usability — the skills companies truly value.
