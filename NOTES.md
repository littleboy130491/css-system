1. Section (outer layer)

Use section for:

background (color, image, gradient)
vertical spacing (padding top/bottom)
full-width behavior
.section {
  padding-block: 96px;
  background: #0f0f10;
}
<section class="section">
  <div class="container">
    ...
  </div>
</section>

Container (inner layer)

Use container for:

max width
horizontal padding
centering content
.container {
  width: min(1200px, calc(100% - 48px));
  margin-inline: auto;
}