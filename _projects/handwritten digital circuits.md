---
name: Handwritten Digital Circuits
tools: [Python, Tensorflow, OpenCV]
image: "/assets/images/DigitalCircuits/final_sim_zoomed.webp"
description: Drawing logical links.
sequence: 1
---

#### <b>Handwritten Digital Circuits<b>
<p style="font-size:15px; padding: 0 0 1em 0;">January, 2022</p>


Early this year, I came across a <a href="https://www.researchgate.net/publication/357067777_Detection_of_circuit_components_on_hand-drawn_circuit_images_by_using_faster_R-CNN_method/fulltext/61bb37cb4b318a6970e57aeb/Detection-of-circuit-components-on-hand-drawn-circuit-images-by-using-faster-R-CNN-method.pdf?origin=publication_detail" target="_blank">research paper </a> describing the detection of hand-written circuit elements through convolutional neural networks. The model was able to take an input of a drawn circuit diagram and is able to label each element as a resistor, inductor, capacitor, etc.

 Using this paper as inspiration, I set out to create an interactive *digital circuit simulator* which can take a handwritten drawing and output a responsive logic simulator. The coding logic can be split into three distinct sections: image processing, model training, and circuit simulating.  
  
<br> 
##### **Image Processing**
To quickly create the many necessary handwritten images, I decided to write digitally. This prevents scanning inconsistencies, but my approach could certainly be extended to scanned images on paper with added initial processing steps. Within the images, words to label each digital circuit element connected by lines. I decided to start with the initial building blocks of digital logic, including *inputs*, *outputs*, *and*, *or*, *not*, and *xor*.

![test input](\assets\images\DigitalCircuits\image_test_1.png)

OpenCV was used for the processing, and `cv2.findContours` served to break each character into a contour after thresholding. These contours were then looped through to break them into groups of words and lines.

``` python
lines = []
words = {}

for c in contours:
    # get the rectangular bounding box and find the ratio of its sides
    max_length, min_length = find_bounding_box(c)
    ratio = max_length / min_length
    
    # if the ratio is > ratio_cutoff and longer than a length_cutoff, we call it a line 
    if ratio > ratio_cutoff and length > length_cutoff:
        lines.append(c)

    # now we know this contour is part of a word
    else:
        # make a dictionary with the centroid of the word as the key and a list of contours as the value
        for word in words:
            # if the character is close enough to an already determined word, add it to its list
            if within_range(c.x, c.y, word[0], word[1]):
                words[word].append(c)
            # if not, make a new word
            else:
                words[(c.x, c.y)] = [c]
```

This pseudocode, along with the visual demo below, should give some insight into the process used to group words and separate lines from words. Within the demo, the characters are looped through and given a color according to their grouping: white to hide the connecting lines and a random color to group the characters into words. Although the word colors change with each frame, the important note is that each word maintains a consistent group color.

![finding words](\assets\images\DigitalCircuits\finding_words.webp)

Once the words have been found, they can be sent to the model for classification. 

<br>
##### **Model Training**
Once the word's bounding box has been located, it is cropped and saved as an image to generate training data. The same process is used for both generating the training images and for parsing newly drawn images for consistency. The model was trained on my handwriting using 100 images of each logic element automatically cropped from a combined image like below.

![finding words](\assets\images\DigitalCircuits\training_data.png)

A machine learning model was trained from the dataset using Google's Teachable Machine and exported as a Keras model for use. Once exported, the model was integrated with the OpenCV export to label each image, shown below. The previously written 'Input' and 'Output' labels were swapped to 'In' and 'Out' at this stage to save writing time and to lower prediction error. The words are classified one by one using Keras's `model.predict`. Shown below is a sample image labeled with its prediction and confidence.  

![digital sim](\assets\images\DigitalCircuits\labeled_images.png)

<br>

##### **Circuit Simulating**
At this stage, each word has a label and each element has a position and type (line vs word). The next step is to dynamically link each element together in the desired structure. The first step to this linking is to determine which words the lines are linked to. Every line is looped through to determine the closest word from its right and left edges.

```python
# finds the closest word to the line's right edge
for line in lines:
    # initialize values
    right_child = None
    right_min_dist = np.inf

    for word in words:
        # if this word is the closest word so far, make it the right_child
        dist_between = dist(line.right_x, line.right_y, word.centroid_x, word.centroid_y)
        if dist_between < right_min_dist:
            right_min_dist = dist_between
            right_child = word
```
Below is a quick demo of the algorithm where a green line signifies the current closest word. The only difference from the code is that this runs for both the left and the right points on each line.

![finding children](\assets\images\DigitalCircuits\finding_children.webp)

Once each line has found its child on the right and parent on the left, a graph is created to make state propagation work. The graph is composed from objects which contain a list of the element's children objects. Each object has an `update_state()` method which utilizes custom logic to change the element to on or off depending on the logic mapped to its label. Below is the logic for each element:

```python
## LINES and OUTPUTS don't affect logic, so their state, when updated, will just be their parent's state 
def update_state(self, parent_state):
    self.state = parent_state

## NOT will leverage the not to flip the parent's boolean state
def update_state(self, parent_state):
    self.state = not parent_state
```

The remaining three take two inputs rather than one. We can only flip the state once both inputs are known. Therefore, we take a dict of updated values and only update once the dict has two entries. Once we update the state, we empty the dict.

```python
def update_state(self):
    ps = self.parent_states
    # wait for both parent states to be updated
    if len(ps) == 2:
        if self.label == 'AND':
            self.state = ps[0] and ps[1]
        elif self.label == 'OR':
            self.state = ps[0] or ps[1]
        elif self.label == 'XOR':
            self.state = ps[0] ^ ps[1]
        # reset parent states
        self.parent_states = {}
```
With the completed element update logic, we are now able to finalize the simulation logic to propegate across all children elements. The update logic comes together simply in the following four lines of code. The function is called once a root node has been updated and recursively updates the state of each child. 

``` python
def propagate_states(word, prev_state):
    for child in word.children:
        child.update_state(prev_state, word.id)
        if child.children:
            propagate_states(child, child.state)
```

The user interface for the simulation was done using an OpenCV window and `cv2.EVENT_LBUTTONDOWN` to listen for input. The window is also capable of quickly changing themese to any user-defined colorscape. 

The final program is shown below. The only necessary input necessary is a hand-drawn image which the final simulation will convert to your own personalized digital circuit playground.

<br>

![final sim](\assets\images\DigitalCircuits\final_sim.webp)

<br>

The code for this project can be found <a href="https://github.com/mattqg/DigitalCircuitDrawing" target="_blank">on my github.</a> If you have any questions, don't hesitate to drop me a line at me[at]mattqg[dot]com.
