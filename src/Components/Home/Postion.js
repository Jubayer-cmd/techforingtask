import { Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./home.css";
function Postion() {
  return (
    <div>
      <Typography
        align="center"
        sx={{
          marginTop: "30px",
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          fontSize: "30px",
        }}
      >
        BROWSE OPEN POSITIONS BY CATEGORY
      </Typography>
      <Typography
        align="center"
        sx={{
          fontFamily: "monospace",
          fontWeight: 500,
          color: "black",
          fontSize: "18px",
        }}
      >
        We are always on the lookout for talanted people
      </Typography>
      <div className="accord">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Sales & Manager</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>apply now</Typography>
            <Typography>apply now</Typography>
            <Typography>apply now</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Department</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>apply now</Typography>
            <Typography>apply now</Typography>
            <Typography>apply now</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Development</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>apply now</Typography>
            <Typography>apply now</Typography>
            <Typography>apply now</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Postion;
