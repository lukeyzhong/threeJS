import * as THREE from 'three';

let colors = new THREE.Color(0x00ff00);  // Use a THREE.Color instance for the initial color

const changeColor = () => {
    colors.set(0xFF0000);  // Change to another THREE.Color instance
    cube.material.color.copy(colors);  // Update the material color
}


//----------------------

const scene = new THREE.Scene();

// four params, unit: degrees, ratio, near, far
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
//height and width
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// geometry: points and fill
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//material
const material = new THREE.MeshBasicMaterial( { color: colors } );
// mesh helps to combine geo and mat and can move freely around
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//x represents the horizontal position (left to right).
//y represents the vertical position (up and down).
//z represents the depth or distance from the camera to the scene (front to back).
camera.position.z = 3;

// loop
function animate() {
    // requestAnimationFrame will destory the loop when out of the page
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

//---------
// Attach an event listener to the button
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', changeColor);