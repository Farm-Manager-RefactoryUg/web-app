import { FaBusinessTime } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { MdHdrStrong } from "react-icons/md";

import { IoIosBulb } from "react-icons/io";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paragraphs: {
    padding: "0px",
    marginBottom: "1.5rem",
  },
  h2: {
    alignItems: "center",
  },
  grey: {
    backgroundColor: "#c5c5c9",
  },
}));

const Features = () => {
    const classes = useStyles();
  return (
    <section id="features" className={classes.grey}>
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col center-align">
            <div>
              <h2 className={classes.h2}>
                Some Features
                <IoIosBulb size={70} style={{ verticalAlign: "baseline" }} />
              </h2>
            </div>

            <p className={classes.paragraphs}>
              We worked out an amazing combination of vast functionality and
              user's comfort. It will totally impress you with its power!
            </p>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m2">
            <FaBusinessTime size={70} />
            <h5>Real Time Updates</h5>
            <p className={classes.paragraphs} style={{ width: "15rem" }}>
              Get real time updates concerning exactly what is transpiring on
              your farm.
            </p>
          </div>
          <div className="col m3">
            <IoMdAnalytics size={70} />
            <h5>Valuable Insight</h5>
            <p className={classes.paragraphs} style={{ width: "15rem" }}>
              Gain valuable insight that will help you make the right decisions.
            </p>
          </div>
          <div className="col m3">
            <MdHdrStrong size={70} />
            <h5>Full Control</h5>
            <p className={classes.paragraphs} style={{ width: "14rem" }}>
              Be in complete control of your farm even from miles away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;