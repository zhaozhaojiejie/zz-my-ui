# TagCanvas 标签云

基于 tagcanvas.js 实现，文档
 <api-link href="components/sp-tag-canvas">spTagCanvas</api-link>


:::demo
```html
<template>
  <div style="text-align: center;">
    <div style="height: 400px">
      <sp-tag-canvas ref="tag" :data="tags" :options="options"></sp-tag-canvas>
    </div>
    <el-button @click="pause">pause</el-button>
    <el-button @click="resume">resume</el-button>
    <el-button @click="reload">reload</el-button>
    <el-button @click="update">update</el-button>
    <el-button @click="tagToFront">tagToFront</el-button>
    <el-button @click="rotateTag">rotateTag</el-button>
    <el-button @click="setSpeed">setSpeed</el-button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        tags: [],
        options: {
          maxSpeed: 0.05,
          minSpeed: 0.01,
          textColour: null,
          textHeight: 25,
          fadeIn: 800,
          depth: 0.97,
          minBrightness: 0.2,
          wheelZoom: false,
          reverse: true,
          shuffleTags: true,
          shadowOffset: [1, 1],
          stretchX: 4.7,
          initial: [0, 0.1],
          clickToFront: 600
        }
      }
    },
    methods: {
      createTags(count) {
        let tags = []
        for (let i = 1; i < count; i++) {
          tags.push({
            text: 'Tag ' + i,
            color: '#ff0000'
          })
        }
        return tags
      },
      pause() {
        this.$refs.tag.pause()
      },
      resume() {
        this.$refs.tag.resume()
      },
      reload() {
        this.$refs.tag.reload()
      },
      update() {
        this.$refs.tag.update()
      },
      tagToFront() {
        this.$refs.tag.tagToFront({
          index: 5,
          active: 1
        })
      },
      rotateTag() {
        this.$refs.tag.rotateTag({index: 2, lat: 30, lng: -45})
      },
      setSpeed() {
        this.$refs.tag.setSpeed([0.5, -0.25])
      }
    },
    mounted() {
      setTimeout(() => {
        this.tags = this.createTags(20)
      }, 100)

    }
  }
</script>

```
:::

## options

<table class="options">
  <thead>
  <tr>
    <th>Option</th><th>Default</th><th>Description</th>
  </tr>
  </thead>
  <tbody>        <tr class="odd">
    <td data-title="Option"><code>activeCursor</code></td>
    <td data-title="Default"><code>""pointer""</code></td>
    <td data-title="Description">The <a href="https://www.w3.org/TR/CSS21/ui.html#propdef-cursor" target="_blank">CSS cursor type</a> to use when the mouse is over a tag.</td>
        </tr>        <tr>
    <td data-title="Option"><code>animTiming</code></td>
    <td data-title="Default"><code>"Smooth"</code></td>
    <td data-title="Description">The animation timing function for use with the RotateTag and TagToFront functions. The values available are "Smooth" and "Linear".</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>bgColour</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Background colour of tag, <code>null</code> for no background. The string <code>"tag"</code> means use the original link background colour.</td>
        </tr>        <tr>
    <td data-title="Option"><code>bgOutline</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Colour of tag background outline. Use <code>null</code> for the same as the text colour, use <code>"tag"</code> for the original link text colour.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>bgOutlineThickness</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Thickness of tag background outline in pixels, 0 for no outline.</td>
        </tr>        <tr>
    <td data-title="Option"><code>bgRadius</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Radius for rounded corners of background in pixels.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>centreFunc</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Function for drawing in centre of cloud. The function is passed in these parameters in order: canvas 2D context; canvas width; canvas height; centre X; centre Y. See the <a href="/tagcanvas-centre.php">centre callback function</a> page for details.</td>
        </tr>        <tr>
    <td data-title="Option"><code>centreImage</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Image to draw at centre of cloud. Uses a built-in <code>centreFunc</code> callback function to draw the image at full size in the middle of the canvas.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>clickToFront</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">If set to a number, the selected tag will move to the front in this many milliseconds before activating.</td>
        </tr>        <tr>
    <td data-title="Option"><code>decel</code></td>
    <td data-title="Default"><code>0.95</code></td>
    <td data-title="Description">Deceleration rate when mouse leaves canvas.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>depth</code></td>
    <td data-title="Default"><code>0.5</code></td>
    <td data-title="Description">Controls the perspective (0.0-1.0)</td>
        </tr>        <tr>
    <td data-title="Option"><code>dragControl</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">When enabled, cloud moves when dragged instead of based on mouse position.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>dragThreshold</code></td>
    <td data-title="Default"><code>4</code></td>
    <td data-title="Description">The number of pixels that the cursor must move to count as a drag instead of a click.</td>
        </tr>        <tr>
    <td data-title="Option"><code>fadeIn</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Time to fade in tags at start, in milliseconds.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>freezeActive</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to pause movement when a tag is highlighted.</td>
        </tr>        <tr>
    <td data-title="Option"><code>freezeDecel</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to decelerate when highlighted tags freeze instead of stopping suddenly.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>frontSelect</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to prevent selection of tags at back of cloud.</td>
        </tr>        <tr>
    <td data-title="Option"><code>hideTags</code></td>
    <td data-title="Default"><code class="keyword">true</code></td>
    <td data-title="Description">Set to <code>true</code> to automatically hide the tag list element if TagCanvas is started successfully.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>imageAlign</code></td>
    <td data-title="Default"><code>""centre""</code></td>
    <td data-title="Description">Horizontal image alignment, one of “centre”, “left” or “right”.</td>
        </tr>        <tr>
    <td data-title="Option"><code>imageMode</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">What to display when tag contains images and text.
  <dl>
  <dt>null</dt><dd>Image if present, otherwise text.</dd>
  <dt>image</dt><dd>Image tags only.</dd>
  <dt>text</dt><dd>Text tags only.</dd>
  <dt>both</dt><dd>Image and text on tag using <code>imagePosition</code>.</dd>
  </dl></td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>imagePadding</code></td>
    <td data-title="Default"><code>2</code></td>
    <td data-title="Description">Distance between image and text when using an <code>imageMode</code> of “both”.</td>
        </tr>        <tr>
    <td data-title="Option"><code>imagePosition</code></td>
    <td data-title="Default"><code>""left""</code></td>
    <td data-title="Description">Position of image relative to text when using an <code>imageMode</code> of “both”. Options are “left”, “right”, “top“ or “bottom”.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>imageRadius</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Radius for image corners, in pixels. Also supports using a percentage which must be enclosed in a string, e.g. <code>"20%"</code>.</td>
        </tr>        <tr>
    <td data-title="Option"><code>imageScale</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Amount to scale images by - the default of 1 uses the size they appear on the page. For no scaling (use the actual image size) set this to <code>null</code>.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>imageVAlign</code></td>
    <td data-title="Default"><code>""middle""</code></td>
    <td data-title="Description">Vertical image alignment, one of “middle”, “top” or “bottom”.</td>
        </tr>        <tr>
    <td data-title="Option"><code>initial</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Starting rotation speed, with horizontal and vertical values as an array, e.g. <code>[0.8,-0.3]</code>. Values are multiplied by <code>maxSpeed</code>.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>interval</code><sup><a href="#interval-timer">[1]</a></sup></td>
    <td data-title="Default"><code>20</code></td>
    <td data-title="Description">Interval between animation frames, in milliseconds.</td>
        </tr>        <tr>
    <td data-title="Option"><code>lock</code></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Limits rotation of the cloud using the mouse. A value of <code>"x"</code>
  limits rotation to the x-axis, <code>"y"</code> limits rotation to the
  y-axis. A value of <code>"xy"</code> will prevent the cloud rotating in
  response to the mouse - the cloud will only move if the <code>initial</code>
  option is used to give it a starting speed.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>maxBrightness</code></td>
    <td data-title="Default"><code>1.0</code></td>
    <td data-title="Description">Brightness (opacity) of tags at front of cloud (0.0-1.0).</td>
        </tr>        <tr>
    <td data-title="Option"><code>maxSpeed</code></td>
    <td data-title="Default"><code>0.05</code></td>
    <td data-title="Description">Maximum speed of rotation.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>minBrightness</code></td>
    <td data-title="Default"><code>0.1</code></td>
    <td data-title="Description">Brightness (opacity) of tags at back of cloud (0.0-1.0).</td>
        </tr>        <tr>
    <td data-title="Option"><code>minSpeed</code></td>
    <td data-title="Default"><code>0.0</code></td>
    <td data-title="Description">Minimum speed of rotation when mouse leaves canvas.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>minTags</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">The minimum number of tags to show in the cloud. If the number of links available is lower than this value, the list will be repeated. The maximum supported value is 200. The <code>repeatTags</code> option takes precedence over <code>minTags</code>.</td>
        </tr>        <tr>
    <td data-title="Option"><code>noMouse</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to prevent any mouse interaction. The <code>initial</code> option must be used to animate the cloud, otherwise it will be motionless.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>noSelect</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to prevent the selection of tags.</td>
        </tr>        <tr>
    <td data-title="Option"><code>noTagsMessage</code></td>
    <td data-title="Default"><code class="keyword">true</code></td>
    <td data-title="Description">Displays “No tags” instead of an empty canvas when there are no tags available.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>offsetX</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Offsets the centre of the cloud horizontally (measured in pixels)</td>
        </tr>        <tr>
    <td data-title="Option"><code>offsetY</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Offsets the centre of the cloud vertically (measured in pixels)</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>outlineColour</code></td>
    <td data-title="Default"><code>""#ffff99""</code></td>
    <td data-title="Description">Colour of the active tag highlight. This can be a colour to use for all tags, or one of these options to set the colour differently for each tag:
  <dl><dt>tag</dt>
  <dd>Use the text colour from the original tag link</dd>
  <dt>tagbg</dt>
  <dd>Use the background colour from the original tag link</dd>
  </dl>
  See also the “outline” <code>weightMode</code> for another way to set the highlight colour.</td>
        </tr>        <tr>
    <td data-title="Option"><code>outlineDash</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Size of marching ants dash for outline/classic highlights, 0 for no dashes</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>outlineDashSpace</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Size of space between marching ants dashes, 0 for same as <code>outlineDash</code></td>
        </tr>        <tr>
    <td data-title="Option"><code>outlineDashSpeed</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Speed of marching ants animation, 0 for no movement, negative for reverse</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>outlineIncrease</code></td>
    <td data-title="Default"><code>4</code></td>
    <td data-title="Description">Number of pixels to increase size of tag by for the “size” outline method. Negative values are supported for decreasing the size.</td>
        </tr>        <tr>
    <td data-title="Option"><code>outlineMethod</code></td>
    <td data-title="Default"><code>""outline""</code></td>
    <td data-title="Description">Type of highlight to use. Options are:
  <dl><dt>outline</dt>
  <dd>An outline at the same depth as the active tag.</dd>
  <dt>classic</dt>
  <dd>Old-style outline on top of all tags.</dd>
  <dt>block</dt>
  <dd>Solid block of colour around the active tag.</dd>
  <dt>colour</dt>
  <dd>Changes the colour of the text or image of the current tag to the <code>outlineColour</code> value.</dd>
  <dt>size</dt>
  <dd>Increases the size of the tag, using the <code>outlineIncrease</code> option for the amount.</dd>
  <dt>none</dt>
  <dd>No highlighting at all.</dd>
  </dl></td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>outlineOffset</code></td>
    <td data-title="Default"><code>5</code></td>
    <td data-title="Description">Distance of outline from text, in pixels. This also increases the size of the active area around the tag.</td>
        </tr>        <tr>
    <td data-title="Option"><code>outlineRadius</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Radius for rounded corners on outline box in pixels</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>outlineThickness</code></td>
    <td data-title="Default"><code>2</code></td>
    <td data-title="Description">Thickness of outline in pixels</td>
        </tr>        <tr>
    <td data-title="Option"><code>padding</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Amount of space around text and inside background.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>pinchZoom</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to enable zooming in and out of the cloud by pinching on touchscreen devices.</td>
        </tr>        <tr>
    <td data-title="Option"><code>pulsateTime</code></td>
    <td data-title="Default"><code>3</code></td>
    <td data-title="Description">Pulse rate, in seconds per beat</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>pulsateTo</code></td>
    <td data-title="Default"><code>1.0</code></td>
    <td data-title="Description">Pulsate outline to this opacity (0.0-1.0)</td>
        </tr>        <tr>
    <td data-title="Option"><code>radiusX</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Initial size of cloud from centre to sides.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>radiusY</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Initial size of cloud from centre to top and bottom.</td>
        </tr>        <tr>
    <td data-title="Option"><code>radiusZ</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Initial size of cloud from centre to front and back.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>repeatTags</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">The number of times to repeat the list of tags in the cloud. The maximum supported value is 64. This option overrides the <code>minTags</code> option.</td>
        </tr>        <tr>
    <td data-title="Option"><code>reverse</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to reverse direction of movement relative to mouse position.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>scrollPause</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Animation delay in milliseconds for when the page is being scrolled. Applies to all TagCanvas instances on the page.</td>
        </tr>        <tr>
    <td data-title="Option"><code>shadow</code></td>
    <td data-title="Default"><code>""#000000""</code></td>
    <td data-title="Description">Colour of the shadow behind each tag.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>shadowBlur</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">Amount of tag shadow blurring, in pixels.</td>
        </tr>        <tr>
    <td data-title="Option"><code>shadowOffset</code></td>
    <td data-title="Default"><code>"[0,0]"</code></td>
    <td data-title="Description">X and Y offset of the tag shadow, in pixels.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>shape</code></td>
    <td data-title="Default"><code>""sphere""</code></td>
    <td data-title="Description">The shape of the cloud. Currently supported are <code>sphere</code>, <code>hcylinder</code> for a cylinder that starts off horizontal, <code>vcylinder</code> for a cylinder that starts off vertical, <code>hring</code> for a horizontal circle and <code>vring</code> for a vertical circle. You may also provide the name of a function to use for generating the shape. See the <a href="/tagcanvas-shapes.php">TagCanvas shapes page</a> for details and examples.</td>
        </tr>        <tr>
    <td data-title="Option"><code>shuffleTags</code></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to randomize the order of the tags.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>splitWidth</code></td>
    <td data-title="Default"><code>0</code></td>
    <td data-title="Description">If greater than 0, breaks the tag into multiple lines at word boundaries when the line would be longer than this value. Lines are automatically broken at <code>&lt;br&gt;</code> tags.</td>
        </tr>        <tr>
    <td data-title="Option"><code>stretchX</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Stretch or compress the cloud horizontally.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>stretchY</code></td>
    <td data-title="Default"><code>1</code></td>
    <td data-title="Description">Stretch or compress the cloud vertically.</td>
        </tr>        <tr>
    <td data-title="Option"><code>textAlign</code></td>
    <td data-title="Default"><code>""centre""</code></td>
    <td data-title="Description">Horizontal text alignment, one of “centre”, “left” or “right”.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>textColour</code><sup><a href="#text-colour">[2]</a></sup></td>
    <td data-title="Default"><code>""#ff99ff""</code></td>
    <td data-title="Description">Colour of the tag text - empty string or <code>null</code> to use the colour of the original link.</td>
        </tr>        <tr>
    <td data-title="Option"><code>textFont</code><sup><a href="#text-colour">[2]</a></sup></td>
    <td data-title="Default"><code>""Helvetica, Arial,<br> sans-serif""</code></td>
    <td data-title="Description">Font family for the tag text - empty string or <code>null</code> to use the font of the original link.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>textHeight</code></td>
    <td data-title="Default"><code>15</code></td>
    <td data-title="Description">Height of the tag text font (in pixels).</td>
        </tr>        <tr>
    <td data-title="Option"><code>textVAlign</code></td>
    <td data-title="Default"><code>""middle""</code></td>
    <td data-title="Description">Vertical text alignment, one of “middle”, “top” or “bottom”.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>tooltip</code><sup><a href="#tooltips">[3]</a></sup></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Sets tooltip display method: <code>null</code> for no tooltips; <code>native</code> for operating system tooltips; <code>div</code> for div-based.</td>
        </tr>        <tr>
    <td data-title="Option"><code>tooltipClass</code><sup><a href="#tooltips">[3]</a></sup></td>
    <td data-title="Default"><code>""tctooltip""</code></td>
    <td data-title="Description">Class of tooltip div.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>tooltipDelay</code><sup><a href="#tooltips">[3]</a></sup></td>
    <td data-title="Default"><code>300</code></td>
    <td data-title="Description">Time to pause while mouse is not moving before displaying tooltip div, in milliseconds.</td>
        </tr>        <tr>
    <td data-title="Option"><code>txtOpt</code></td>
    <td data-title="Default"><code class="keyword">true</code></td>
    <td data-title="Description">Text optimisation, converts text tags to images for better performance.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>txtScale</code></td>
    <td data-title="Default"><code>2</code></td>
    <td data-title="Description">Scaling factor of text when converting to image in <code>txtOpt</code> mode.</td>
        </tr>        <tr>
    <td data-title="Option"><code>weight</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code class="keyword">false</code></td>
    <td data-title="Description">Set to <code>true</code> to turn on weighting of tags.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>weightFrom</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">The link attribute to take the tag weight from. The default of <code>null</code> means that the weight is taken from the calculated link font size.</td>
        </tr>        <tr>
    <td data-title="Option"><code>weightGradient</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code>"{0:'#f00', 0.33:'#ff0',<br> 0.66:'#0f0', 1:'#00f'}"</code></td>
    <td data-title="Description">The colour gradient used for colouring tags, backgrounds, etc. when using a colour-based weight mode.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>weightMode</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code>""size""</code></td>
    <td data-title="Description">Method to use for displaying tag weights. Should be one of:
  <dl>
  <dt>size</dt>
  <dd>Display more significant tags in a larger font size.</dd>
  <dt>colour</dt>
  <dd>Display tags using colour values from the <code>weightGradient</code> option.</dd>
  <dt>both</dt>
  <dd>Use both size and colour to visualise weights.</dd>
  <dt>bgcolour</dt>
  <dd>Use a <code>weightGradient</code> to set the tag background colour.</dd>
  <dt>bgoutline</dt>
  <dd>Use a <code>weightGradient</code> to set the tag background outline colour. Tag background outlines must be enabled using the <code>bgOutlineThickness</code> option.</dd>
  <dt>outline</dt>
  <dd>Use a <code>weightGradient</code> to set the tag highlight colour.</dd>
  </dl></td>
        </tr>        <tr>
    <td data-title="Option"><code>weightSize</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code>1.0</code></td>
    <td data-title="Description">Multiplier for adjusting the size of tags when using a weight mode of <code>size</code> or <code>both</code>.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>weightSizeMax</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Maximum font size when weighted sizing is enabled.</td>
        </tr>        <tr>
    <td data-title="Option"><code>weightSizeMin</code><sup><a href="#weights">[4]</a></sup></td>
    <td data-title="Default"><code class="keyword">null</code></td>
    <td data-title="Description">Minimum font size when weighted sizing is enabled.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>wheelZoom</code></td>
    <td data-title="Default"><code class="keyword">true</code></td>
    <td data-title="Description">Enables zooming the cloud in and out using the mouse wheel or scroll gesture.</td>
        </tr>        <tr>
    <td data-title="Option"><code>zoom</code></td>
    <td data-title="Default"><code>1.0</code></td>
    <td data-title="Description">Adjusts the relative size of the tag cloud in the canvas. Larger values will zoom into the cloud, smaller values will zoom out.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>zoomMax</code></td>
    <td data-title="Default"><code>3.0</code></td>
    <td data-title="Description">Maximum zoom value.</td>
        </tr>        <tr>
    <td data-title="Option"><code>zoomMin</code></td>
    <td data-title="Default"><code>0.3</code></td>
    <td data-title="Description">Minimum zoom value.</td>
        </tr>        <tr class="odd">
    <td data-title="Option"><code>zoomStep</code></td>
    <td data-title="Default"><code>0.05</code></td>
    <td data-title="Description">The amount that the zoom is changed by with each movement of the mouse wheel.</td>
        </tr>  </tbody>
</table>
