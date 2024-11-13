document.querySelector("body");

const crash = document.getElementById("crash");
const snare = document.getElementById("snare");
const hihats = document.getElementById("hi-hats");
const bass = document.getElementById("bass");
const floortom = document.getElementById("floor-tom");
const ride = document.getElementById("ride");


addEventListener("keydown", (e) => {
    if (e.key === "a") { // crash
        crash.currentTime = 0;
        crash.play();
    } else if (e.key === "s") { // snare
        snare.currentTime = 0;
        snare.play();
    } else if (e.key === "d") { // hi-hats
        hihats.currentTime = 0;
        hihats.play();
    } else if (e.key === "j") { // bass
        bass.currentTime = 0;
        bass.play();
    } else if (e.key === "k") { // floor-tom
        floortom.currentTime = 0;
        floortom.play();
    } else if (e.key === "l") { // ride
        ride.currentTime = 0;
        ride.play();
    } else {
        console.log("Press an appropriate key");
    }         
});