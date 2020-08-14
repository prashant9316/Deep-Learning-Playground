var current_layer = 0;
var layer_counter = 0;
var flattend = false;
var lastLayer;
var numLayers = 0;


var object = {
    "modelName": "myModel",
    "modelType": "Sequential",
    "modelInfo": ["1"],
    "layers": [{
        "1": { layerName: "conv2D", filter: 64, kernel: 2, activation: "relu" }
    }]
};

function printModel(object) {
    for (i = 0; i < parseInt(object.modelInfo); i++) {
        console.log(String(i + 1) + " layer is of " + object.layers[0][i + 1].layerName);
    }
}

function init() {
    numLayers = 1;
    console.log("Initiated layer structure with Conv2D layer");
    printModel(object);
}
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
    if (flattend == true) {
        alert("Cannot add higher dimensional layers after flatten layer");
        return;
    }
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "conv2D", filter: 64, kernel: 2, activation: "relu" };
    object.modelInfo = numLayers;
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
    if (flattend == true) {
        alert("Cannot add higher dimensional layers after flatten layer");
        return;
    }
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "maxPool2D", kernel: 2 };
    object.modelInfo = numLayers;
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
    if (flattend == true) {
        alert("Cannot add higher dimensional layers after flatten layer");
        return;
    }
    flattend = true;
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "flatten" };
    object.modelInfo = numLayers;
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
    if (flattend == false) {
        alert("The layer is not yet flattened!");
        return;
    }
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "dense", units: 10, activation: "relu" };
    object.modelInfo = numLayers;
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
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "dropout", drop: 0.2 };
    object.modelInfo = numLayers;
    container.append(`
        <div class="dense-layer">
        <div class="layer-name">
            <div class="text-box">
                Dropout
            </div>
        </div>
        <div class="layer-property-1">
            <div class="text-box">
                0.2
            </div>
        </div>
    </div>`);
    console.log("Build in progress!");
}

function addBatchNormBlockUi() {
    if (flattend == true) {
        alert("Cannot add higher dimensional layers after flatten layer");
        return;
    }
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "batchNorm", axis: 3 };
    object.modelInfo = numLayers;
    container.append(`
        <div class="dense-layer">
        <div class="layer-name">
            <div class="text-box">
                BatchNormalization
            </div>
        </div>
        <div class="layer-property-1">
            <div class="text-box">
                3
            </div>
        </div>
    </div>`);
    console.log("Build in progress!");
}

function removeBlockUi() {
    numLayers -= 1;
    container.remove(lastLayer);
}

function resetBlockUi() {
    numLayers += 0;
    container.remove();
}

// Function for the navigation bar at the top
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

init();