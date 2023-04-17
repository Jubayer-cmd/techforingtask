import React from "react";
import { Typography } from "@mui/material";
import "./home.css"
function About() {
  return (
    <div className="abtBack">
      <Typography
        sx={{
          marginTop: "30px",
          fontFamily: "monospace",
          fontWeight: 700,
          color: "green",
          fontSize: "16px",
        }}
        align="center"
      >
        LIFE AT TECHFORING
      </Typography>
      <Typography
        sx={{
          marginTop: "0px",
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          fontSize: "24px",
        }}
        align="center"
      >
        Get your chance to work with the coolest cyber-tech companies around
      </Typography>
      <div className="accords">
        <img
          src="https://career.techforing.com/static/media/recruitment-procedure.cbc79ae4d6625cc8d3a1.png"
          alt="image not found"
        />
        <img
        className="imgs"
          src="https://career.techforing.com/static/media/recruitment-procedure-two.1a9fc2e1ea2b5e304e7e.png"
          alt="image not found"
        />
              <Typography
        sx={{
          marginTop: "40px",
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#182f59",
          fontSize: "16px",
        }}
        align="center"
      >
       Shaping Tomorrow’s Cybersecurity
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          fontSize: "22px",
        }}
        align="center"
      >
       Lets make it happen
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "monospace",
          fontWeight: 400,
          color: "black",
          fontSize: "14px",
        }}
        align="center"
      >
 It doesn’t matter where you are from, how you look, or any other aspect about yourself. If you are passionate about what do, we can’t wait to meet you
      </Typography>
      </div>
    </div>
  );
}

export default About;
