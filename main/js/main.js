var current_layer = 0;
var layer_counter = 0;
var lastLayer;
var numLayers = 0;
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

var object = {
    "modelName": "myModel",
    "modelType": "Sequential",
    "modelInfo": ["1"],
    "layers": [{

        "1": { layerName: "Conv2D", filter: "64", kernel: "2", activation: "relu" }

    }]
};

console.log(object);
console.log("Model type " + object.modelType + " with " + object.modelInfo + " layers");
console.log(object.layers);

function printModel(object) {
    for (i = 0; i < parseInt(object.modelInfo); i++) {
        console.log(String(i + 1) + " layer is of " + object.layers[0][i + 1].layerName);
    }
}

function init() {
    numLayers = 1;
    console.log("Initiated layer structure with Conv2D layer");
    printModel(object);
    console.log("adding maxPool layer");
    addMaxPoolBlockUi();
    console.log(object);
    console.log("new layer structure is:");
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
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "Conv2D", filter: "64", kernel: "2", activation: "relu" };
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
    numLayers += 1;
    object.layers[0][String(numLayers)] = { layerName: "MaxPool2D", kernel: 2 };
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
    numLayers += 1;
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
    numLayers += 1;
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
    console.log("Build in progress!");
}

function addBatchNormBlockUi() {
    numLayers += 1;
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