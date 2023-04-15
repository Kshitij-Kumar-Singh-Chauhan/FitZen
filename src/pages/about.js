import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import about_us from "../assets/images/about_us.png";
import vikalp from "../assets/images/vikalp.jpg";
import logo from "../assets/images/logo_pic.png";
import "./about.css"

const styles = {
  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
};

const About = () => {
  return (
    <div>
      
      <h1 style={{textAlign: "center", fontSize: 70, marginLeft: 120, marginTop: 50}}>
        Team FitZen
      </h1>
      <div className="heart">
        <p style={{ marginLeft: 30, fontSize: 40, marginRight: 30 }}>
          <br></br>
          <br></br>Akshit Rana<br></br>
          <br></br>Kshitij Kumar Singh Chauhan<br></br>
          <br></br>Tushar Rusia<br></br>
          <br></br>Vikalp Kumar Tripathi<br></br>
          <br></br>
        </p>
      
        <img
          src={about_us}
          alt="Logo"
          style={{height:350, marginRight: 100, marginTop: 50 }}
        ></img>
            
      </div>
    
      <div style={styles.back}>
        <Link to="/">
          <Button size="large" variant="contained" color="warning" style={{backgroundColor:'#b3a69f',fontWeight:'bold'}}>
            Back
          </Button>
        </Link>
        
      </div>

      
      
    </div>
  );

  
  
};

export default About;

