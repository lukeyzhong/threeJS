import * as THREE from 'three';

// JavaScript code for canvas and Three.js setup here
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const backgroundImage = document.getElementById("backgroundImage");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjusting image dimensions to maintain aspect ratio
    const aspectRatio =
        backgroundImage.naturalWidth / backgroundImage.naturalHeight;
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    if (windowAspectRatio > aspectRatio) {
        backgroundImage.style.width = "100%";
        backgroundImage.style.height = "auto";
    } else {
        backgroundImage.style.width = "auto";
        backgroundImage.style.height = "100%";
    }

    // Redraw your Three.js scene or other content here
    // For example:
    // renderThreeJS();

    // You can also handle resizing for Three.js, if needed
    // For example:
    // window.addEventListener('resize', onWindowResize, false);
}

window.addEventListener("resize", resizeCanvas, false);
resizeCanvas();

function resize(width, height) {
    this._sceneManager.changeCameraAspectRatio(width / height);
    this._renderer.setSize(width, height);
    this._composer.setSize(width, height);
    this._outlinePass.setSize(width, height);
    this._fxaaPass.uniforms['resolution'].value.set(1 / width, 1 / height);
}

function changeCameraAspectRatio(aspectRatio) {
    this.camera.aspect = aspectRatio;
    this.camera.updateProjectionMatrix();
}