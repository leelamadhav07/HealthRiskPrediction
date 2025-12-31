import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        Pregnancies: Number(formData.Pregnancies),
        Glucose: Number(formData.Glucose),
        BloodPressure: Number(formData.BloodPressure),
        SkinThickness: Number(formData.SkinThickness),
        Insulin: Number(formData.Insulin),
        BMI: Number(formData.BMI),
        DiabetesPedigreeFunction: Number(formData.DiabetesPedigreeFunction),
        Age: Number(formData.Age)
      })
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Diabetes Risk Prediction</h2>

        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button type="submit">Predict Risk</button>
        </form>

        {result && (
          <div className="result">
            <h3>Prediction Result</h3>
            <p><b>Status:</b> {result.prediction}</p>
            <p><b>Risk Probability:</b> {result.probability}</p>
          </div>
        )}

        <div className="disclaimer">
          ⚠️ This tool provides risk estimation only and is not a medical diagnosis.
        </div>
      </div>
    </div>
  );
}

export default App;
