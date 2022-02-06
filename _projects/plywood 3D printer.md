---
name: Plywood 3D Printer
tools: [CAD, Electronics, Hackathon]
image: "/assets/images/Plywood3DPrinter/Benchy.webp"
description: Building a wooden benchy.
sequence: 2
---
#### <b>Plywood 3D Printer<b>
<p style="font-size:15px; padding: 0 0 1em 0;">July, 2019</p>

During my sophomore summer, I worked to develop 3D printing technologies at [Formlabs](https://www.formlabs.com){:target="_blank"}. The company has an annual hackathon, and our office decided to utilize the three days to create a wood laminated sheet printer. This idea came from a simple desire: a wooden benchy. For those who don’t know, a benchy is a test part used in 3D printers to benchmark their performance.

The overall project was documented well by the video below, by [Hackaday](https://hackaday.com/2019/07/25/3d-printer-meets-cnc-router-to-make-wood-prints/){:target="_blank"}, and by [Arduino](https://blog.arduino.cc/2019/07/26/plywood-printer-uses-a-unique-mix-of-manufacturing-methods/){:target="_blank"}.

{% include elements/video.html id="9YygcvAzGJs" %}

<br>
I helped to design the Z axis, which was capable of continuously raising and lowering up to ~350lbs of plywood and apply additional pressing force to bond together sheets. We used four lead screws chain driven by a single large stepper.

![Z-drive](\assets\images\Plywood3DPrinter\Z-drive.gif)

<br>
I also designed parts for the XY gantry. The gantry uses extrusion and V wheels for the linear guides and stepper motors and lead screws for the actuators.


![gantry](\assets\images\Plywood3DPrinter\Gantry.gif)
