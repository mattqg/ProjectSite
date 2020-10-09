---
name: Fatigue Analysis of a Bench Press Bracket 
tools: [CAD, FEA, Failure Analysis]
image: "/assets/images/FailureAnalysisOfABenchPressBracket/cad.png"
description: Preventing disaster while lifting faster.
---

#### <b>Failure of a Bench Press Bracket<b>
<p style="font-size:15px; padding: 0 0 1em 0;">May 10, 2020</p>

<!-- Google ModelViewer Script -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<script src=" https://unpkg.com/focus-visible@5.1.0/dist/focus-visible.js" defer></script>
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>

Testing Google ModelViewer:

<model-viewer style = "margin:0 auto; width:100%; height:400px" src="\assets\3d\elephant\elephant.glb" shadow-intensity="4.2" exposure="0.61" auto-rotate camera-controls="">
    <button class="Hotspot" slot="hotspot-1" data-position="0.6757664538553052m -0.3163325802603545m -0.004112367130397646m" data-normal="0.9651403214517479m 0.24105905131546562m -0.10195437061207717m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Trunk</div>
    </button><button class="Hotspot" slot="hotspot-2" data-position="0.4151219532658596m 0.05737864357773309m 0.31678857730258797m" data-normal="0.99573683113961m -0.01987260332028525m -0.09007354078375357m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Ears</div>
    </button><button class="Hotspot" slot="hotspot-3" data-position="-0.6306273462512605m -0.09023435090288448m 0.007503241819970781m" data-normal="-0.6086522812364349m 0.2391468044934209m 0.7565389655835775m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Tail</div>
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


<model-viewer  style = "margin:0 auto; width:100%; height:400px" src="\assets\3d\benchpress\squatrackassembly.glb" shadow-intensity="4.5" exposure="0.49" auto-rotate camera-controls>
</model-viewer>
