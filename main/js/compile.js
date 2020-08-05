var firstLayer = true;
let model;

function compile(layer_array, length) {
    console.log('Starting Parsing');
    for (i = 0; i < length; i++) {
        if (firstLayer) {
            var params = layer_array.layers[i].layer;
            console.log(params);
            model = init_model(params);
            firstLayer = false;
        } else {
            console.log('layer ' + String(i + 1) + ' is ' + layer_array.layers[i].layer[0]);
            if (layer_array.layers[i].layer[0] == 'conv2d') {
                add_conv(model, layer_array.layers[i].layer);
            } else if (layer_array.layers[i].layer[0] == 'mp') {
                add_mp(model, layer_array.layers[i].layer);
            } else if (layer_array.layers[i].layer[0] == 'flatten') {
                add_flatten(model);
            } else if (layer_array.layers[i].layer[0] == 'dense') {
                add_dense(model, layer_array.layers[i].layer);
            } else if (layer_array.layers[i].layer[0] == 'batchNorm') {
                add_batchnorm(model);
            } else {
                console.error(layer_array.layers[i].layer[0] + " is not supported yet");
                alert("Layer is not supported yet!");
            }
        }
    }
    model_summary(model);
    return model;
}

function init_model(params) {
    const model = tf.sequential({
        layers: [
            tf.layers.conv2d({ filters: params[1], kernelSize: params[2], activation: params[3], inputShape: [32, 32, 3] })
        ]
    });
    console.log("Model Initialized!");
    return model;
}

function add_conv(model, params) {

    console.log("Add conv activated!")
    model.add(tf.layers.conv2d({ filters: params[1], kernelSize: params[2], activation: params[3] }));
    console.log("Added Conv2D layer with " + params[1] + " kernels with kernel size: " + params[2] + " activated with " + params[3]);
}

function add_conv(model, params) {
    console.log("add conv function activated!");
    model.add(tf.layers.conv2d({ filters: params[1], kernelSize: params[2], activation: params[3] }));
    console.log("Added Conv2D layer with " + params[1] + " kernels with kernel size: " + params[2] + " activated with " + params[3]);
}

function add_mp(model, params) {
    model.add(tf.layers.maxPooling2d({ poolSize: [params[1], params[1]] }));
    console.log("Added MaxPooling layer with pool size: " + params[1]);
}

function add_batchnorm(model) {
    model.add(tf.layers.batchNormalization());
    console.log("Added batch normalization layer as well");
}

function add_dense(model, params) {
    model.add(tf.layers.dense({ units: params[1], activation: params[2] }));
    console.log("Adding a Dense layer with " + params[1] + " units, activated with " + params[2]);
}

function add_drop(model, params) {
    model.add(tf.layers.dropout());
    console.log("Dropping some weights: " + params[1]);
}

function add_flatten(model) {
    model.add(tf.layers.flatten());
    console.log("Flattened the output");
}

function model_summary(model) {
    console.log("Here you will see model summary");
    tfvis.show.modelSummary({ name: 'Model Architecture' }, model);
}