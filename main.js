function preload() {

}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResults)
}

function gotResults(results) {
    if(results.length > 0) {
        noseX = results[0].pose.nose.x 
        noseY = results[0].pose.nose.y 

        console.log(noseX)
        console.log(noseY)
    }
}

function draw() {

}

function modelLoaded() {
    console.log("Model Loaded Correctly!")
}

function takeSnapshot() {
    save("filteredImage.jpg")
}