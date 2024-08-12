import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import megaminds from "../assets/images/megaminds.jpg";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div>
     
     <h1 className="flex justify-center text-3xl md:text-5xl items-center gap-2 text-white font-bold mb-2">
        <span className="text-blue-500">My</span> Experience
      </h1>
      
    
      <p className="flex justify-center text-gray-500 items-center mb-8">
      I switch some of companies. It's mostly about the culture.
      </p>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            className="text-white"
          >
            Apr,2024 - May,2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <img src={megaminds} alt="Megaminds Logo" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white">Senior Web Developer</div>
            </Typography>
            <Typography>
              <Link to="https://megamindsit.in/">
                <p className="underline text-sm text-blue-500">
                  Megaminds IT Services
                </p>
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            className="text-white"
          >
            Nov,2023 - Apr,2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <img src={megaminds} alt="image" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white">Web Developer</div>
            </Typography>
            <Typography>
              {" "}
              <Link to="https://megamindsit.in/">
                <p className="underline text-sm text-blue-500">
                  Megaminds IT Services
                </p>
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            className="text-white"
          >
            Oct,2023 - Oct,2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <img src="../assets/images/megaminds.jpg" alt="" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white">Freelance</div>
            </Typography>
            <Typography className=" text-sm text-blue-500">Relite services</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <img src={megaminds} alt="" />
            </TimelineDot>
            <TimelineConnector />
            
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white">Web Developer</div>
            </Typography>
            <Typography className="text-sm text-blue-500">Built-in Tech</Typography>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
};

export default Experience;
