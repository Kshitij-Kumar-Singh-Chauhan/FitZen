<p align="center">
  <img width="200" src="icons\logo_name.png" alt="Material Bread logo">
</p>


<font size="5">[Vision document](https://drive.google.com/file/d/1eT6Hob8W6EDG2gqKA2YjUam8cvGCyKQM/view?usp=sharing )</font>
<br />
<font size="5">[Demo video](https://youtu.be/1OkxTzh7ij8 )</font>
<br />
<font size="5">[Try FitZen Now!](https://34.131.86.62/)</font>
<br />

# **USER GUIDE**
1) When you open above link, you might land up on a page saying that connection is not private. In that case click on Advanced options and than on proceed anyway
2) Kindly be patient when starting workout-sessions as it may take 2-3 seconds to load dependencies

# **Tech stack used**

![Mediapipe](./icons/Mediapipe.png)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)


# **Vision**
* Welcome to FitZen where our goal is to promote healthy living through the practice of yoga and fitness. Our project utilizes cutting-edge technology to create pipelines that can accurately determine if someone is performing their yoga poses and gym exercises correctly.<br />
<br />
* Our vision for this project is to help people improve their health and wellness by providing an accurate and reliable tool to help them stay on track with their yoga and fitness goals. We believe that with the help of our pipelines, people will be able to achieve a deeper understanding of their bodies and their practice, leading to better physical and mental health.<br />
<br />
* Our project is based on the latest research in the field of yoga and fitness, and our pipelines use state-of-the-art algorithms to analyze video footage of yoga poses and provide real-time feedback on how to improve your form.<br />
<br />
* In our project you will be guided with audio command while doing gym exercises that how many reps have been done correctly by you and in yoga section you can select the timer till which you want to perform so it will give audio output to relax after you complete the selected time by doing correct posture.<br />
<br />
* To get started with our project, simply go to web application and then you can select the type of yoga pose you want to work on and begin your practice. As you perform the pose, our pipelines will analyze your movements and provide feedback on how to improve your form.<br />
<br />
* Our pipelines are designed to be flexible and adaptable to different skill levels, so whether you're a beginner or an experienced practitioner, you'll be able to get the most out of our system. You can also customize your practice to fit your needs and goals, whether you're looking to improve your flexibility, strength, or overall health and wellness.<br />
<br />
* We believe that our project has the potential to revolutionize the way people approach yoga and fitness. By providing an accurate and reliable tool to help people stay on track with their goals, we hope to inspire a new generation of healthy, happy, and active individuals.<br />
<br />

# **Methodology**

<p align="center">
  <img width="400" src="icons\Methodolgy-1.png" alt="Material Bread logo">
</p>
After taking video as input it detects the 32 points as pose landmarks and all points are shown in below image:<br />
<br />
<br />
<p align="center">
  <img width="800" src="icons\Methodology-2.png" alt="Material Bread logo">
</p>
<br />
The pose landmarks for all three coordinates are as follows:<br />
1) x: Landmark x-coordinate normalized to [0.0, 1.0] by the image width<br />
2) y: Landmark y-coordinate normalized to [0.0, 1.0] by the image height<br />
3) z: Landmark z-coordinate normalized to roughly the same scale as x<br />
<br />
<br />

<p align="center">
  <img width="500" src="icons\Methodology-3.png" alt="Material Bread logo">
</p>

<br />
After that we will calculate angle heuristics by following the steps as follows:<br />
1) Compute angles between joints using pose landmarks<br />
2) Calculating the angle between joints is the same as calculating the angle between two lines<br />
3) Valid ranges for joint angles are defined for every asana/exercise<br />
<br />
<p align="center">
  <img width="500" src="icons\Methodology-4.png" alt="Material Bread logo">
</p>
<br />

# **Conceptual Diagram**
![](/icons/Conceptual-Diagram.png)
<br />

# **Pre-Requisites**
1) npm  >= 8.1.2
2) node >= v16.13.2

# **Usage Instructions**

1) Clone project repository

            git clone https://github.com/Kshitij-Kumar-Singh-Chauhan/FitZen
2) Navigate to FitZen directory

            cd FitZen
3) Run

            npm i
4) Run

            npm start


# _**Stay Fit. Stay Zen. 😉**_


