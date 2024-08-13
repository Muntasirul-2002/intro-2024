import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
// import megaminds from "../assets/images/megaminds.jpg";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div>
         <div>
      <h1 className="flex justify-center text-3xl md:text-5xl items-center gap-2 text-white font-bold mb-2 mt-10">
        <span className="text-blue-500">My</span> Education
      </h1>
      
      <Timeline position="alternate">
        {/* <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            className="text-white"
          >
            2021 - 2025
            <p className="text-sm">CGPA : 7</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <img src="/megaminds.jpg" alt="Megaminds Logo" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white">Computer Science & Engineering</div>
            </Typography>
            <Typography>
              <Link to="https://megamindsit.in/">
                <p className="text-sm text-white ">
                  KG Reddy College of Engineering & Technology , HYD,IN
                </p>
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem> */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            className="text-white"
          >
            2021 - 2025
            <p>CGPA: 7.0</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <img src="/megaminds.jpg" alt="image" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white leading-tight mb-3">Computer Science Eng.(CSE)</div>
            </Typography>
            
            <Typography>
              {" "}
              <Link to="https://kgr.ac.in/">
                <p className="text-sm text-white">
                  KG Reddy College of Engineering & Technology, HYD,IN
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
            2019 - 2021
            <p>Grade: 72%</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <img src="/megaminds.jpg" alt="image" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <div className="font-bold text-white">Higher Secondary</div>
            </Typography>
            <Typography>
              {" "}
              <Link to="https://www.facebook.com/profile.php?id=100050459005996">
                <p className="text-sm text-white">
                  ARTM Public School, WB,IN
                </p>
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </div>
    </div>
  )
}

export default Education