import React from "react";
import logo from "../assets/images/logo_pic.png";
import exercise from "../assets/images/exercise.png";
import meditaion from "../assets/images/meditation.png";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export const Home = () => {


  return (
    <div>
      {
      /* <img src={blob1} alt="blob1" style={{width:600,position:"absolute",marginLeft:-150,marginTop:-450,zIndex:-1}}></img> */}
      <div className="home">
        <div
          style={{
            fontSize: 45,
            "font-family": 'Helvetica Neue',
            fontWeight: "bold",
            flex: 1.5,
            marginLeft: 100,
            marginTop: 100,
          }}
        >
          <p>
            {/* <h2 style={{margin:0}}>FitZen</h2> */}
            {/* <h2 style={{margin:0}}>Be Fit, Do Zen</h2> */}
          </p>
          {/* ADDING NEW COLORS-INIT ------------------------------------------------------------*/}

          {/* ADDING NEW COLORS-END -------------------------------------------------------------*/}
          <div style={{ display: "flex", textDecorationLine: "none" }}>
            <Link to="/yoga">
              <Button
                size="large"
                variant="contained"
                color="Yellow"
                startIcon={<Avatar src={meditaion} />}
              >
                <b>Yoga</b>
              </Button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/counter">
              <Button
                size="large"
                variant="contained"
                color="yellow"
                startIcon={<Avatar src={exercise} />}
              >
                <b>Workout</b>
              </Button>
            </Link>
          </div>
        </div>
        <img
          src={logo}
          alt="Logo"
          style={{ flex: 1, width:350, marginRight: 100, marginTop: 50 }}
        ></img>
      </div>
    </div>
  );
};

export default Home;