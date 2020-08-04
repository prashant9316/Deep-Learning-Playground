container = $('#add');
/*
let layer = document.createElement("div");
layer.innerHTML =
    "<div class=\"conv-layer\">" +
    "<div class=\"layer-name\">" +
    "<div class=\"text-box\">Conv2D</div></div>" +
    "<div class=\"layer-property-1\">" +
    "<div class=\"text-box\">32</div></div>" +
    "<div class=\"layer-property-2\">" +
    "<div class=\"text-box\">2</div></div>" +
    "<div class=\"layer-property-3\">" +
    "<div class=\"text-box\">RELU</div></div>" +
    "<div class=\"layer-property-4\">" +
    "<div class=\"text-box\">32, 32, 3</div></div></div> ";

container.append(layer);
*/
container.append(`<div class="conv-layer">
<div class="layer-name">
    <div class="text-box">
        Conv2D
    </div>
</div>
<div class="layer-property-1">
    <div class="text-box">
        32
    </div>
</div>
<div class="layer-property-2">
    <div class="text-box">
        2
    </div>
</div>
<div class="layer-property-3">
    <div class="text-box">
        RELU
    </div>
</div>
<div class="layer-property-4">
    <div class="text-box">
        32, 32, 3
    </div>
</div>
</div>`);