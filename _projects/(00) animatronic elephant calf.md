---
name: Animatronic Elephant Calf
tools: [CAD, Mechanical Design, Electronics]
image: "/assets/images/AnimatronicElephantCalf/elephant.png"
description: Designing a robotic Dumbo.
---

#### <b>Animatronic Elephant Calf</b>
<p style="font-size:15px; padding: 0 0 1em 0;">October 25, 2020</p>

For my senior design project, I am working on a developing an animatronic elephant calf for an upcoming expansion at the Nashville Zoo. I chose this project because it is in its very early stages of development. Every single aspect of the design, from mechanical to electrical to software will be completely defined by our senior design team. This gives a lot of room for creative design solutions across disciplines, which I really enjoy.

Our first constraint given to the team by the Nashville Zoo was that the elephant needed to be accurately scaled to a baby African Elephant, which is approximately 1 meter tall. Since it is difficult to get the accurate sizes of every part of the elephent, I decided to make a model to use for dimensioning. I worked in Blender with multiple reference images, and ended up with the model shown below. The file was exported as a .step, and imported directly into Solidworks for reference. 

<!-- Google ModelViewer Script -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<script src=" https://unpkg.com/focus-visible@5.1.0/dist/focus-visible.js" defer></script>
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>

<!-- Elephant 3d modelviewer -->
<model-viewer style = "margin:0 auto; width:100%; height:400px" src="\assets\3d\elephant\elephant.glb" shadow-intensity="4.2" exposure="0.61"  auto-rotate camera-controls="">
</model-viewer>
<br>

Our group split into subteams, and I took over the design of the elephant's head and neck. I began by designing a neck mechanism which allowed for three rotational degrees of freedom. The design was inspired by commonly used animatronic neck mechanisms, but with the caveat that it needed to be laid out horizontally. I decided to utilize a ball joint driven by two servo motors at the base of neck, achieving the pitch and roll of the head. The third degree of freedom, the yaw, was initially brainstormed to be directly driven by a geared servo motor. The yaw mechanism was placed at the top of the neck to lower the potential moment on the bearing, which I believe to be the most likely failure point. 

<model-viewer style = "margin:0 auto; width:100%; height:400px" src="\assets\3d\elephant\neck_mechanism.glb" camera-controls="" camera-orbit="-946.7deg 81.94deg 0.2772m" field-of-view="45deg" auto-rotate exposure="0.7" shadow-intensity="4.2">
      <button class="Hotspot" slot="hotspot-2" data-position="0.00012337881128898776m 0m 0.0001867815366639186m" data-normal="0m -1m 0m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">To Body</div>
    </button><button class="Hotspot" slot="hotspot-6" data-position="-0.0010306765710463512m 0.1407576674230993m 0.023481078032237673m" data-normal="-0.04524233323050839m 0.9520946813038174m -0.30243817404031886m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">To Head</div>
    </button>
</model-viewer>

<style>
.Hotspot {
    background: #fff;
    border-radius: 32px;
    border: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    cursor: pointer;
    height: 24px;
    padding: 8px;
    position: relative;
    transition: opacity 0.3s;
    width: 24px;
}

.Hotspot:not([data-visible]) {
    background: transparent;
    border: 4px solid #fff;
    box-shadow: none;
    height: 32px;
    pointer-events: none;
    width: 32px;
}

.Hotspot:focus {
    border: 4px solid rgb(0, 128, 200);
    height: 32px;
    outline: none;
    width: 32px;
}

.Hotspot>* {
    opacity: 1;
    transform: translateY(-50%);
}

.HotspotAnnotation {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.8);
    display: block;
    font-family: Futura, Helvetica Neue, sans-serif;
    font-size: 18px;
    font-weight: 700;
    left: calc(100% + 1em);
    max-width: 128px;
    padding: 0.5em 1em;
    position: absolute;
    top: 50%;
    width: max-content;
}

.Hotspot:not([data-visible])>* {
    opacity: 0;
    pointer-events: none;
    transform: translateY(calc(-50% + 4px));
    transition: transform 0.3s, opacity 0.3s;
}
</style>

<!-- ![neck_cad](\assets\images\AnimatronicElephantCalf\neck_cad.gif) -->


After designing the neck mechanism, I quickly shifted over to the trunk design as it appeared to be approaching the critical path. I found quite a few good sources on designing trunks, tentacles, and tails, which allowed for a quick proof of concept design, shown below. I attached basic servo motors to the trunk and began to program its movements.

<div id="banner" style="overflow: hidden;justify-content:space-around">
    <div class="" style="max-width: 100% max-height: 100%;display: inline-block;">
        <img src="\assets\images\AnimatronicElephantCalf\trunk_prototype.gif">
    </div>
    <div class="" style="max-width: 100%;max-height: 100%;display: inline-block;">
        <img src="\assets\images\AnimatronicElephantCalf\trunk_servos.gif">
    </div>
    <div class="" style="max-width: 100%;max-height: 100%;display: inline-block">
        <img src="\assets\images\AnimatronicElephantCalf\driven_trunk.gif">
    </div>
    </div>

I also began to design the frame of the elephant's head out of 80/20 extrusions. The head will connect to the top of the neck mechanism shown below, and hold the eyes, ears, trunk, and mouth mechanisms into place.   

This project is a work in progress, set to finish in spring 2021. I will update this page is the project develops. Thanks for stopping by!

<br>
