import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();
  // console.log(username);
  const handleInput = () => {
    if (!userName) {
      return alert("Please Prvoide UseName");
    }
    navigate(`/stream/${userName}`);
    setUsername("");
  };
  return (
    <>
      <div className="form-container">
        <h1>Start Your Streaming</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Please enter Your Name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleInput}>Join</button>
        </div>
      </div>
    </>
  );
};

export default Room;
