import React, { useState } from "react";
import Virabhadrasana from "../components/virabhadrasana";
import Trikonasana from "../components/trikonasana";
import Tadasana from "../components/tadasana";
import { Link } from "react-router-dom";
import { Button, Select, MenuItem } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const styles = {

  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
  selectBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1000,
    right: 0,
    top: 200,
    textAlign: "left",
    width: 300,
    height: 30,
  },
};

const Yoga = () => {
  const [yoga, setYoga] = useState("tadasana");
  const [timer,setTimer] = useState("10");

  function selectYoga() {
    if (yoga === "virabhadrasana") {
      return <Virabhadrasana Timer={timer} />;
    } else if (yoga === "trikonasana") {
      return <Trikonasana Timer={timer} />;
    } else if (yoga === "tadasana") {
      return <Tadasana Timer={timer} />;
    }
    return null;
  }

  return (
    <div>
      <div style={styles.selectBox}>
        <FormControl variant="outlined" size="small" color="warning" style={{minWidth:250,backgroundColor:'#b3a69f',fontWeight:'bold'}}>
          <Select
            value={yoga}
            onChange={(event) => {
              const selectedYoga = event.target.value;
              setYoga(selectedYoga);
            }}
          >
            <MenuItem  disabled style={{fontWeight:'bold'}}>
              <span id="mxy">Select Yoga Pose</span>
            </MenuItem>
            <MenuItem value="tadasana" style={{fontWeight:'bold'}}>Tadasana</MenuItem>
            <MenuItem value="trikonasana" style={{fontWeight:'bold'}}>Trikonasana</MenuItem>
            <MenuItem value="virabhadrasana" style={{fontWeight:'bold'}}>Virabhadrasana</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" color="warning" style={{minWidth:250,backgroundColor:'#b3a69f',fontWeight:'bold'}}>
          <Select
            value={timer}
            onChange={(event) => {
              const selectedTimer = event.target.value;
              setTimer(selectedTimer);
            }}
          >
            <MenuItem  disabled style={{fontWeight:'bold'}}>
              <span id="mxy">Select Timer</span>
            </MenuItem>
            <MenuItem value="10" style={{fontWeight:'bold'}}>10 seconds</MenuItem>
            <MenuItem value="20" style={{fontWeight:'bold'}}>20 seconds</MenuItem>
            <MenuItem value="30" style={{fontWeight:'bold'}}>30 seconds</MenuItem>
          </Select>
        </FormControl>
      </div>

      {selectYoga()}

      <div style={styles.back}>
        <Link to="/">
          <Button size="large" variant="outlined" color="warning" style={{backgroundColor:'#b3a69f',fontWeight:'bold'}}>
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Yoga;