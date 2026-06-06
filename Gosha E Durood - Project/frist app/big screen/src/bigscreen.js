import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./bigscreen.css";
import duroodImage from "./image/durood.png";

const BigScreen = () => {
    const [totalDurood, setTotalDurood] = useState("Loading");

    useEffect(() => {
        // Connect to the WebSocket server
        const socket = io("http://localhost:5000");

        // Listen for updates from the server
        socket.on("updateDurood", (newTotal) => {
            console.log("New total_durood received:", newTotal);
            setTotalDurood(newTotal); // Update the state with the new value
        });

        // Cleanup on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);




  return (
    <div className="app_bigscreen">
      {/* First Row */}
      <div className="row first-row">
        <center>
          <img src={duroodImage} alt="Durood Image" className="img-fluid" />
          <p className="main-num">{totalDurood}</p>
          <p className="main-text">Times Durood Sharif Recited</p>
        </center>
      </div>

      {/* Second Row */}
      
      <div className="row second-row">
        {/* First Column */}
        <div className="column first-column">
          <center>
            <p className="second-main-num">12K+</p>
            <p className="main-text">Gosha Nasheens</p>
          </center>
        </div>

        {/* Second Column */}
        <div className="column second-column">
          <center>
            <p className="second-main-num">10K+</p>
            <p className="main-text">Halaqat-e-Durood</p>
          </center>
        </div>
        
        {/* Third Column */}
        <div className="column third-column">
          <center>
            <p className="second-main-num">20K+</p>
            <p className="main-text">Remort Users</p>
          </center>
        </div>
      </div>      
    </div>
  );
};

export default BigScreen;
