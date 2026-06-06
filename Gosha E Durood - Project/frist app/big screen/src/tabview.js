import React, { useState } from "react";
import "./tabview.css";

const TabView = () => {
  const [inputValue, setInputValue] = useState("");
  const [popupValue, setPopupValue] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSubmissionPopupVisible, setIsSubmissionPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const [successMessage, setSuccessMessage] = useState(""); // For displaying success messages

  // Handle button press for the numeric keypad
  const handleButtonClick = (value) => {
    const newValue = inputValue + value;
    if (Number(newValue) <= 9999) {
      setInputValue(newValue);
    }
  };

  // Clear the input field
  const handleClear = () => {
    setInputValue("");
  };

  // Handle Submit Button
  const handleSubmit = () => {
    if (!inputValue) {
      setErrorMessage("Please enter a number before submitting!"); // Display error message
      setTimeout(() => setErrorMessage(""), 3000); // Clear error message after 3 seconds
    } else {
      setPopupValue(inputValue);
      setIsPopupVisible(true);
    }
  };

  // Handle Quick Submit Buttons
  const handleQuickSubmit = (value) => {
    setPopupValue(value);
    setIsPopupVisible(true);
  };

  // Confirm action in the popup
  const handleConfirm = async () => {
    setIsPopupVisible(false);
    setIsSubmissionPopupVisible(true);

    try {
      const response = await fetch("http://localhost:5000/api/add-durood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1, // Replace with the actual ID of the record you want to update
          submittedNumber: Number(popupValue),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(`Success: The updated total durood is ${data.updatedTotal}`);
        setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
      } else {
        setErrorMessage(data.error || "An error occurred while submitting.");
        setTimeout(() => setErrorMessage(""), 3000); // Clear error message after 3 seconds
      }
    } catch (error) {
      console.error("Error submitting the durood:", error);
      setErrorMessage("Unable to connect to the server.");
      setTimeout(() => setErrorMessage(""), 3000); // Clear error message after 3 seconds
    }

    setTimeout(() => {
      setIsSubmissionPopupVisible(false);
      setPopupValue(null);
    }, 3000);

    setInputValue(""); // Clear the input field
  };

  // Cancel action in the popup
  const handleCancel = () => {
    setIsPopupVisible(false);
    setInputValue("");
    setPopupValue(null);
  };

  return (
    <div className="app_tabview">
      {/* First Row */}
      <div className="row first-row">
        <h1> </h1>
      </div>

      {/* Display Error or Success Messages */}
      <div className="message-container">
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>

      {/* Second Row */}
      <div className="row second-row">
        {/* First Column */}
        <div className="column first-column">
          <div className="keypad-container">
            {/* Input field and Submit button */}
            <div className="input-row">
              <input
                type="number"
                className="keypad-input"
                value={inputValue}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || (Number(value) <= 9999 && value.length <= 4)) {
                    setInputValue(value);
                  }
                }}
                placeholder="Enter The Number"
              />
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            {/* Numeric Keypad */}
            <div className="keypad">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
                <button
                  key={num}
                  className="keypad-button"
                  onClick={() => handleButtonClick(num)}
                >
                  {num}
                </button>
              ))}
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
            <p>
              Are you sure you want to submit: <strong>{popupValue}</strong> Durood?
            </p>
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
            <p>
              <strong>{popupValue}</strong> Durood has been submitted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabView;
