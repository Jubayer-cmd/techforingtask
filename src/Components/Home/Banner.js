import React from "react";
import "./home.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
function Banner() {
  return (
    <div class="demo-wrap">
      <img
        class="demo-bg"
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div class="demo-content">
        <div className="mx-auto">
          <Typography
            sx={{
              marginTop: "30px",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              fontSize: "24px",
            }}
            align="center"
          >
            WORK AT TECHFORING LIMITED
          </Typography>
          <Typography
            align="center"
            sx={{
              marginTop: "5px",
              fontFamily: "monospace",
              fontWeight: 400,
              color: "white",
              fontSize: "18px",
            }}
          >
            Turn your passion into a career
          </Typography>
          <Box
            component="form"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "50ch",
                background: "white",
                textAlign: "center",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search by Position"
              variant="outlined"
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Banner;
