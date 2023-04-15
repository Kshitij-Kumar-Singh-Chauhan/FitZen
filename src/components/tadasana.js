import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import angleBetweenThreePoints from "./angle";
import yoga1 from "../assets/images/tadasana.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const styles = {
  webcam: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 0,
    right: 800,
    top: 200,
    textAlign: "center",
    zIndex: 9,
    width: 960,
    height: 720,
  },
  info: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1150,
    right: 200,
    top: 300,
    color: "#b3a69f",
    background: "#1f2838",
    textAlign:"center"
  },
  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
};

const Tadasana = (props) => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    let camera = null;
  
    var t = new Date().getTime();
    var max_time = props.Timer;
    var completed = 0;
    //var max_time = 0;
  
    function onResult(results) {
      if (results.poseLandmarks) {
        const position = results.poseLandmarks;
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;
  
        const width = canvasRef.current.width;
        const height = canvasRef.current.height;
  
        // index 12,14,16 11,13,15, range 125,145
        const leftHand = [];
        const rightHand = [];
        for (let i = 11; i < 17; i++) {
          let obj = {};
          obj["x"] = position[i].x * width;
          obj["y"] = position[i].y * height;
          if (i % 2 === 0) {
            rightHand.push(obj);
          } else {
            leftHand.push(obj);
          }
        }

        // index 14,12,24, range 170,190
        const leftShoulder = [];
        const indexLeftShoulder = [14, 12, 24];
        for (let i = 0; i < 3; i++) {
          let obj = {};
          obj["x"] = position[indexLeftShoulder[i]].x * width;
          obj["y"] = position[indexLeftShoulder[i]].y * height;
          leftShoulder.push(obj);
        }

        // index 13,11,23, range 170,190
        const rightShoulder = [];
        const indexRightShoulder = [13, 11, 23];
        for (let i = 0; i < 3; i++){
          let obj = {};
          obj["x"] = position[indexRightShoulder[i]].x * width;
          obj["y"] = position[indexRightShoulder[i]].y * height;
          rightShoulder.push(obj);
        }
  
        // index 12,24,28, range 170,190
        const leftWaist = [];
        const indexLeftWaist = [12, 24, 28];
        for (let i = 0; i < 3; i++) {
          let obj = {};
          obj["x"] = position[indexLeftWaist[i]].x * width;
          obj["y"] = position[indexLeftWaist[i]].y * height;
          leftWaist.push(obj);
        }

        // index 11,23,27, range 170,190
        const rightWaist = [];
        const indexRightWaist = [11, 23, 27];
        for (let i = 0; i < 3; i++) {
          let obj = {};
          obj["x"] = position[indexRightWaist[i]].x * width;
          obj["y"] = position[indexRightWaist[i]].y * height;
          rightWaist.push(obj);
        }
  
        const angleLeftWaist = Math.round(angleBetweenThreePoints(leftWaist));
        const angleRightWaist = Math.round(angleBetweenThreePoints(rightWaist));
        const angleLeftHand = Math.round(angleBetweenThreePoints(leftHand));
        const angleRightHand = Math.round(angleBetweenThreePoints(rightHand));
        const angleLeftShoulder = Math.round(angleBetweenThreePoints(leftShoulder));
        const angleRightShoulder = Math.round(angleBetweenThreePoints(rightShoulder));
  
        let inRangeLeftWaist;
        let inRangeRightWaist;
        let inRangeLeftHand;
        let inRangeRightHand;
        let inRangeLeftShoulder;
        let inRangeRightShoulder;
        if (angleLeftWaist >= 170 && angleLeftWaist <= 190) {
          inRangeLeftWaist = true;
        } else {
          inRangeLeftWaist = false;
        }
        if (angleRightWaist >= 170 && angleRightWaist <= 190) {
          inRangeRightWaist = true;
        } else {
          inRangeRightWaist = false;
        }

        if (angleLeftShoulder >= 170 && angleLeftShoulder <= 190) {
          inRangeLeftShoulder = true;
        } else {
          inRangeLeftShoulder = false;
        }
        if (angleRightShoulder >= 170 && angleRightShoulder <= 190) {
          inRangeRightShoulder = true;
        } else {
          inRangeRightShoulder = false;
        }

        if (angleLeftHand >= 160 && angleLeftHand <= 200) {
          inRangeLeftHand = true;
        } else {
          inRangeLeftHand = false;
        }
        if (angleRightHand >= 160 && angleRightHand <= 200) {
          inRangeRightHand = true;
        } else {
          inRangeRightHand = false;
        }
  
        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)
  
        for (let i = 0; i < 2; i++) {
          canvasCtx.beginPath();
          canvasCtx.lineWidth = 8;
  
          canvasCtx.moveTo(leftWaist[i].x, leftWaist[i].y);
          canvasCtx.lineTo(leftWaist[i + 1].x, leftWaist[i + 1].y);
          if (inRangeLeftWaist) {
            canvasCtx.strokeStyle = "green";
          } else {
            canvasCtx.strokeStyle = "red";
          }
          canvasCtx.stroke();

          canvasCtx.beginPath();
          canvasCtx.moveTo(rightWaist[i].x, rightWaist[i].y);
          canvasCtx.lineTo(rightWaist[i + 1].x, rightWaist[i + 1].y);
          if (inRangeRightWaist) {
            canvasCtx.strokeStyle = "green";
          } else {
            canvasCtx.strokeStyle = "red";
          }
          canvasCtx.stroke();

          canvasCtx.beginPath();
          canvasCtx.moveTo(leftShoulder[i].x, leftShoulder[i].y);
          canvasCtx.lineTo(leftShoulder[i + 1].x, leftShoulder[i + 1].y);
          if (inRangeLeftShoulder) {
            canvasCtx.strokeStyle = "green";
          } else {
            canvasCtx.strokeStyle = "red";
          }
          canvasCtx.stroke();

          canvasCtx.beginPath();
          canvasCtx.moveTo(rightShoulder[i].x, rightShoulder[i].y);
          canvasCtx.lineTo(rightShoulder[i + 1].x, rightShoulder[i + 1].y);
          if (inRangeRightShoulder) {
            canvasCtx.strokeStyle = "green";
          } else {
            canvasCtx.strokeStyle = "red";
          }
          canvasCtx.stroke();
  
          canvasCtx.beginPath();
          canvasCtx.moveTo(leftHand[i].x, leftHand[i].y);
          canvasCtx.lineTo(leftHand[i + 1].x, leftHand[i + 1].y);
          if (inRangeLeftHand) {
            canvasCtx.strokeStyle = "green";
          } else {
            canvasCtx.strokeStyle = "red";
          }
          canvasCtx.stroke();
  
          canvasCtx.beginPath();
          canvasCtx.moveTo(rightHand[i].x, rightHand[i].y);
          canvasCtx.lineTo(rightHand[i + 1].x, rightHand[i + 1].y);
          if (inRangeRightHand) {
            canvasCtx.strokeStyle = "green";
          } else {
            canvasCtx.strokeStyle = "red";
          }
          canvasCtx.stroke();
        }

        for (let i = 0; i < 3; i++) {
            canvasCtx.beginPath();
            //right hand
            canvasCtx.arc(rightHand[i].x, rightHand[i].y, 8, 0, Math.PI * 2);
            //left hand
            canvasCtx.arc(leftHand[i].x, leftHand[i].y, 8, 0, Math.PI * 2);
            canvasCtx.fillStyle = "#AAFF00";
            canvasCtx.fill();
    
            canvasCtx.beginPath();
            canvasCtx.arc(leftWaist[i].x, leftWaist[i].y, 8, 0, Math.PI * 2);
            canvasCtx.fillStyle = "#AAFF00";
            canvasCtx.fill();
            canvasCtx.beginPath();
            canvasCtx.arc(rightWaist[i].x, rightWaist[i].y, 8, 0, Math.PI * 2);
            canvasCtx.fillStyle = "#AAFF00";
            canvasCtx.fill();

            canvasCtx.beginPath();
            canvasCtx.arc(leftShoulder[i].x, leftShoulder[i].y, 8, 0, Math.PI * 2);
            canvasCtx.fillStyle = "#AAFF00";
            canvasCtx.fill();

            canvasCtx.beginPath();
            canvasCtx.arc(rightShoulder[i].x, rightShoulder[i].y, 8, 0, Math.PI * 2);
            canvasCtx.fillStyle = "#AAFF00";
            canvasCtx.fill();
          }
    
          if (!(inRangeLeftWaist && inRangeLeftHand && inRangeRightHand && inRangeRightWaist && inRangeRightShoulder && inRangeLeftShoulder)) {
            t = new Date().getTime();
            completed = 0;
          }

          // if(read_time == 30){
          //   console.log("I am here!")
          //   max_time=30;}
          // else if((max_time != 30) && (read_time==20)){max_time=20;}
          // if(max_time!=30 && max_time!=20){max_time=10;}

//-----------------------------------------------------------------------------
      // console.log("--------------------------------------------------------")
      // console.log("prop-timer: " + props.Timer);
      // // console.log("read-timer: " + read_time);
      // console.log("max_time: " + max_time);
      // console.log("Curr_Val: " + Math.round((new Date().getTime() -t)/1000));
      // console.log("--------------------------------------------------------")
//-----------------------------------------------------------------------------

          
          if(Math.round((new Date().getTime() -t)/1000)>=max_time){ 
            if(!completed){
            var message = new SpeechSynthesisUtterance();
            message.text = "You have performed Tadasan for " + max_time + " seconds";
            window.speechSynthesis.speak(message);
            completed = 1;}}
    
          canvasCtx.fillStyle = "green";
          canvasCtx.font = "30px aerial";
          canvasCtx.fillText(angleLeftHand, leftHand[1].x + 20, leftHand[1].y + 20);
          canvasCtx.fillText(angleRightHand,rightHand[1].x - 120, rightHand[1].y + 20);

          canvasCtx.fillText(angleLeftWaist, leftWaist[1].x, leftWaist[1].y + 40);
          canvasCtx.fillText(angleRightWaist, rightWaist[1].x, rightWaist[1].y + 40);

          canvasCtx.fillText(angleLeftShoulder, leftShoulder[1].x, leftShoulder[1].y + 40);
          canvasCtx.fillText(angleRightShoulder, rightShoulder[1].x, rightShoulder[1].y + 40);
    
          canvasCtx.font = "30px aerial";
          canvasCtx.fillText(
            "Seconds holded: ".concat(
              String(Math.round((new Date().getTime() - t) / 1000))
            ),
            10,
            40
          );
  
        canvasCtx.restore();
      }
    }
  
    useEffect(() => {
        const pose = new Pose({
          locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4.1624666670/${file}`;
          },
        });
        pose.setOptions({
          modelComplexity: 1,
          smoothLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
    
        pose.onResults(onResult);
    
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null
        ) {
          camera = new cam.Camera(webcamRef.current.video, {
            onFrame: async () => {
              if(webcamRef.current)await pose.send({ image: webcamRef.current.video });
            },
            width: 640,
            height: 480,
          });
          camera.start();
        }
      });
    
      return (
        <div>
          <div>
            <Webcam ref={webcamRef} style={styles.webcam} />
            <canvas ref={canvasRef} style={styles.webcam} />
          </div>
          <div style={styles.info}>
            <p>
              Try to mimic this pose
            </p>
            <img src={yoga1} alternate="Yoga 2" style={{height:450, marginTop:20}}></img>
          </div>

          <div style={styles.back}>
        <Link to="/">
          <Button size="large" variant="outlined" color="primary">
            Back
          </Button>
        </Link>
      </div>

        </div>
      );
    };
  
  export default Tadasana;
  
  