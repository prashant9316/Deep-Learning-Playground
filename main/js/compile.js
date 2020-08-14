var firstLayer = true;
let model;

function compile(modelArch) {
    console.log('Starting Parsing');
    console.log(modelArch);
    for (i = 0; i < numLayers; i++) {
        var layerInfo = modelArch.layers[0][i + 1];
        if (firstLayer) {
            console.log(layerInfo);
            model = init_model(layerInfo);
            firstLayer = false;
        } else {
            console.log('layer ' + String(i + 1) + ' is ' + layerInfo.layerName);
            if (layerInfo.layerName == 'conv2D') {
                add_conv(model, layerInfo);
            } else if (layerInfo.layerName == 'maxPool2D') {
                add_mp(model, layerInfo);
            } else if (layerInfo.layerName == 'flatten') {
                add_flatten(model);
            } else if (layerInfo.layerName == 'dense') {
                add_dense(model, layerInfo);
            } else if (layerInfo.layerName == 'batchNorm') {
                add_batchnorm(model, layerInfo);
            } else if (layerInfo.layerName == 'dropout') {
                add_drop(model, layerInfo);
            } else {
                console.error(layerInfo.layerName + " is not supported yet");
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
            tf.layers.conv2d({ filters: params.filter, kernelSize: params.kernel, activation: params.activation, inputShape: [32, 32, 3] })
        ]
    });
    console.log("Model Initialized!");
    return model;
}

function add_conv(model, params) {
    model.add(tf.layers.conv2d({ filters: params.filter, kernelSize: params.kernel, activation: params.activation }));
    console.log("Added Conv2D layer with " + params[1] + " kernels with kernel size: " + params[2] + " activated with " + params[3]);
}

function add_mp(model, params) {
    model.add(tf.layers.maxPooling2d({
        poolSize: [params.kernel, params.kernel]
    }));
    console.log("Added MaxPooling layer with pool size: " + params.kernel);
}

function add_batchnorm(model, params) {
    model.add(tf.layers.batchNormalization({ axis: params.axis }));
    console.log("Added batch normalization layer as well");
}

function add_dense(model, params) {
    model.add(tf.layers.dense({ units: params.units, activation: params.activation }));
    console.log("Adding a Dense layer with " + params[1] + " units, activated with " + params[2]);
}

function add_drop(model, params) {
    model.add(tf.layers.dropout(params.drop));
    console.log("Dropping some weights: " + params.drop);
}

function add_flatten(model) {
    model.add(tf.layers.flatten());
    console.log("Flattened the output");
}

function model_summary(model) {
    console.log("Here you will see model summary");
    tfvis.show.modelSummary({ name: 'Model Architecture' }, model);
}