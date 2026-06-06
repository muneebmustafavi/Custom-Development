import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appbig.css";


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
    <div className="app container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* First Row */}
      <div className="row first-row">
        
      </div>

      {/* Second Row */}
      <div className="row second-row">
        {/* First Column */}
            <div className="column first-column">
          
            </div>
        </div>

        {/* Second Column */}
        <div className="column second-column">
         
        </div>      
    </div>
  );
};

export default App;