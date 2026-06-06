import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [popupValue, setPopupValue] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSubmissionPopupVisible, setIsSubmissionPopupVisible] = useState(false);

  // Handle button press for the numeric keypad
  const handleButtonClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  // Clear the input field
  const handleClear = () => {
    setInputValue("");
  };

  // Handle Submit Button
  const handleSubmit = () => {
    if (!inputValue) {
      alert("Error: Please enter a number before submitting!"); // Optional for field validation
    } else {
      setPopupValue(inputValue); // Set the value to confirm
      setIsPopupVisible(true); // Show the confirmation popup
    }
  };

  // Handle Quick Submit Buttons
  const handleQuickSubmit = (value) => {
    setPopupValue(value); // Set the value to confirm
    setIsPopupVisible(true); // Show the confirmation popup
  };

  // Confirm action in the popup
  const handleConfirm = () => {
    setIsPopupVisible(false); // Hide the confirmation popup
    setIsSubmissionPopupVisible(true); // Show the submission popup
  
    // Automatically hide the submission popup after 2 seconds
    setTimeout(() => {
      setIsSubmissionPopupVisible(false);
      setPopupValue(null); // Clear the popup value only after the submission popup is dismissed
    }, 3000);
  
    setInputValue(""); // Clear the input field
  };
  

  // Cancel action in the popup
  const handleCancel = () => {
    setIsPopupVisible(false); // Hide the confirmation popup
    setInputValue(""); // Clear the input field
    setPopupValue(null); // Clear the popup value
  };

  return (
    <div className="app">
      {/* First Row */}
      <div className="row first-row">
        <h1></h1>
      </div>

      {/* Second Row */}
      <div className="row second-row">
        {/* First Column */}
        <div className="column first-column">
          <div className="keypad-container">
            {/* Input field and Submit button */}
            <div className="input-row">
              <input
                type="text"
                className="keypad-input"
                value={inputValue}
                placeholder="Enter The Number"
                readOnly
              />
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>

            {/* Numeric Keypad */}
            <div className="keypad">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
                (num) => (
                  <button
                    key={num}
                    className="keypad-button"
                    onClick={() => handleButtonClick(num)}
                  >
                    {num}
                  </button>
                )
              )}
              <button className="keypad-button clear-button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="column second-column">
          <div className="quick-submit-container">
            <p className="quick-submit-header">
              Tap the Number for Quick Submit <span>👆</span>
            </p>
            <div className="quick-submit-grid">
              {["50", "100", "200", "300", "500", "700", "800", "900", "1000"].map(
                (value) => (
                  <button
                    key={value}
                    className="quick-submit-button"
                    onClick={() => handleQuickSubmit(value)}
                  >
                    {value}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Confirmation</h2>
            <p>Are you sure you want to submit: <strong>{popupValue}</strong> Durood?</p>
            <div className="popup-buttons">
              <button className="popup-button confirm" onClick={handleConfirm}>
                Confirm
              </button>
              <button className="popup-button cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submission Popup */}
      {isSubmissionPopupVisible && (
        <div className="popup-overlay">
          <div className="submission-popup">
            <h2>Success!</h2>
            <p><strong>{popupValue}</strong> Durood has been submitted.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
