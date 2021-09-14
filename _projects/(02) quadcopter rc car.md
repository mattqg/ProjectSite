---
name: Quadcopter RC Car
tools: [CAD, Failure Analysis, FEA]
image: "/assets/images/QuadcopterRCCar/render.png"
description: Making a driving drone and flying car.
---

#### <b>Quadcopter RC Car<b>
<p style="font-size:15px; padding: 0 0 1em 0;">December, 2019</p>

We designed a combined Quadcopter - RC Car to be light enough for flight and resilient enough to drop from the sky and drive on the ground. Design considerations were
<a href="https://drive.google.com/file/d/1Kji7jQPuzxdoRg-wsiIqNqmUMn_FW7Q3/view?usp=sharing" target="_blank">written up here</a>. 

<br>
{% include elements/video.html id="1p1pWR7zXtM" %}
<br>

I worked with my classmate Alex on the design and we built out the first prototype with a few friends. Once the prototype was built, I focused on obstacle detection using a monocular depth model, <a href="https://github.com/nianticlabs/monodepth2" target="_blank">monodepth2</a>, with preliminary depth testing results shown below.

<br>

![depthtesting](\assets\images\QuadcopterRCCar\MonocularDepth.gif)

<br>

The future goal of the project will be to couple the monocular depth map with obstacle avoidance to provide navigation guidance to the drone while flying.

<br>
