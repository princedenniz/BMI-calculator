import { useState } from "react";
import "./App.css";
import healthyweight from "./asset/healthyweight.jpg";
import overweight from "./asset/overweight.png";
import underweight from "./asset/underweight.jpg";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let [imgSrc, setImgSrc] = useState("");

  const calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
        setImgSrc(underweight);
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healthy weight");
        setImgSrc(healthyweight);
      } else {
        setMessage("You are overwieght");
        setImgSrc(overweight);
      }
    }
  };
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="cont">
        <h1>BMI Calculator</h1>
        <div>
          <form className="form" onSubmit={calcBmi}>
            <label>Weight (KG)</label>
            <br />
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
            <br />
            <label>Height (M)</label>
            <br />
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
            <br />
            <button className="btn btn-outline" onClick={reload}>
              Reload
            </button>
          </form>

          <div className="message">
            <h2>Your BMI IS : {bmi}</h2>
            <p>{message}</p>
            {/* <img
              src={imgSrc}
              alt="img"
              className={(imgSrc = "" ? "hidden" : "")}
            /> */}

            {
              (imgSrc = "" ? (
                <img className="hidden" alt="img" />
              ) : (
                <img src={imgSrc} alt="img" />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
