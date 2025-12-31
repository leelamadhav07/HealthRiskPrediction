from fastapi import FastAPI
from schemas import PatientData
from predict import predict_diabetes
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Diabetes Prediction API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Diabetes Prediction API is running"}


@app.post("/predict")
def predict(data: PatientData):
    prediction, probability = predict_diabetes(data)

    result = "Diabetic" if prediction == 1 else "Non-Diabetic"

    return {"prediction": result, "probability": round(probability, 2)}
