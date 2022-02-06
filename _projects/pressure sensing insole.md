---
name: Pressure Sensitive Insole
tools: [PCB Design, MATLAB, Data Analysis]
image: "/assets/images/PressureSensingInsole/userinterface.webp"
description: Measuring gait with pressure sensing.
sequence: 5
---

#### <b>Pressure Sensitive Insole<b>
<p style="font-size:15px; padding: 0 0 1em 0;">April, 2019</p>

My first research experience at Vanderbilt was in the physiological sensing lab, looking at detecting falls by measuring pressure at the sole of the foot. Falls are the leading cause of injury and death in adults over 65 and will cost the US health care system over $50 billion by 2020. The detection and prediction of falls can save both money and lives.

I developed a piezoresistive prototype capable of detecting 11 pressure zones on the foot. The prototype is etched by hand from copper-clad kapton to allow for the insole to be flexible under the foot. Once the pressure data were captured, they were visualized using a real-time heatmap, coded in Matlab. The project was presented at the Biomedical Engineering Society in 2018 with the poster accessible <a href="https://drive.google.com/file/d/1HYQ-3tyvZ1mA3T6rekXwAZ2952Sc0Q1V/view" target="_blank">here</a>. 

{% capture carousel_images %}
/assets/images/PressureSensingInsole/prototypeinshoe.png
/assets/images/PressureSensingInsole/pressuresensors.png
/assets/images/PressureSensingInsole/circuit.png
{% endcapture %}
{% include elements/carousel.html %}