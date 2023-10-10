import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a square geometry
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2
	-1.0,  1.0,  1.0, // v3
] );

const indices = [
	0, 1, 2,
	2, 3, 0,
];

geometry.setIndex( indices );

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Create a material
const material = new THREE.MeshBasicMaterial({ color: "pink" });

// Create a mesh
const mesh = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(mesh);

// Render the scene once
renderer.render(scene, camera);

this.camera.fov 