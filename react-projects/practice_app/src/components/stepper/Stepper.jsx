// import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
import "./stepper.css";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper">
      <div className="stepper-header">
        <div className="steps">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`step-container ${
                currentStep >= step ? "completed" : ""
              }`}
            >
              <div className={`step ${currentStep >= step ? "active" : ""}`}>
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`step-line ${
                    currentStep >= step + 1 ? "completed" : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="stepper-content">
        {currentStep === 1 && <div>Content for Step 1</div>}
        {currentStep === 2 && <div>Content for Step 2</div>}
        {currentStep === 3 && <div>Content for Step 3</div>}
        {currentStep === 4 && <div>Content for Step 4</div>}
      </div>
      <div className="stepper-controls">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === 4}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Stepper;