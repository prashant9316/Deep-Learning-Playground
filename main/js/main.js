var current_layer = 0;
var layer_counter = 0;
var lastLayer;
var layer_array = {
    'layers': [
        { 'layer': ['conv2d', 32, 2, 'relu'] },
        { 'layer': ['mp', 2] },
        { 'layer': ['conv2d', 32, 2, 'relu'] },
        { 'layer': ['mp', 2] },
        { 'layer': ['flatten'] },
        { 'layer': ['dense', 10, 'softmax'] }
    ]
};

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
function addConvBlockUi() {
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
</div>`);
    lastLayer = "conv-layer";
}

function addMaxPoolBlockUi() {
    container.append(`<div class="maxPool-layer">
        <div class="layer-name">
            <div class="text-box">
                MaxPool2D
            </div>
        </div>
        <div class="layer-property-1">
            <div class="text-box">
                 2
            </div>
        </div>
        <div class="layer-property-2">
            <div class="text-box">
                RELU
            </div>
        </div>
    </div>`);
    lastLayer = 'maxPool-layer';
}

function addFlattenBlockUi() {
    container.append(`
        <div class="flatten-layer">
            <div class="layer-name">
                <div class="text-box">
                    Flatten
                </div>
            </div>
        </div>`);
    lastLayer = 'flatten-layer';
}

function addDenseBlockUi() {
    container.append(`
        <div class="dense-layer">
        <div class="layer-name">
            <div class="text-box">
                Dense
            </div>
        </div>
        <div class="layer-property-1">
            <div class="text-box">
                10
            </div>
        </div>
        <div class="layer-property-3">
            <div class="text-box">
                SOFTMAX
            </div>
        </div>
    </div>`);
    lastLayer = 'dense-layer';
}

function addDropoutBlockUi() {
    console.log("Build in progress!");
}

function addBatchNormBlockUi() {
    console.log("Build in progress!");
}

function removeBlockUi() {
    container.remove(lastLayer);
}

function resetBlockUi() {
    container.remove();
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}