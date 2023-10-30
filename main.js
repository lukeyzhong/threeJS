import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

const points = [
    {
        "z": -4.846377372741699,
        "x": -3.3398404121398926,
        "y": 1.9424618482589722
    },
    {
        "z": -4.836406707763672,
        "x": 2.3049352169036865,
        "y": 1.9424619674682617
    },
    {
        "z": -4.846377372741699,
        "x": -3.3398404121398926,
        "y": -1.0575380325317383
    },
    {
        "z": -4.836406707763672,
        "x": 2.3049352169036865,
        "y": -1.0575380325317383
    }
];

const wall_normal = {
    "z": 0.9999984502792358,
    "x": -0.001766352099366486,
    "y": -3.178035612450003e-8
};

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
	points[0].x,  points[0].y,  points[0].z, // v0
    points[1].x,  points[1].y,  points[1].z, // v1
	points[2].x,  points[2].y,  points[2].z, // v2
	points[3].x,  points[3].y,  points[3].z, // v3
] );

const normal = new Float32Array([
    wall_normal.x, wall_normal.y, wall_normal.z,
    wall_normal.x, wall_normal.y, wall_normal.z,
    wall_normal.x, wall_normal.y, wall_normal.z,
    wall_normal.x, wall_normal.y, wall_normal.z,
]);


const indices = [
	0, 1, 2,
	2, 3, 0,
];

geometry.setIndex( indices );

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setAttribute('normal', new THREE.BufferAttribute(normal, 3));

// Create a material
const material = new THREE.MeshBasicMaterial({ color: "pink" });

// Create a mesh
const mesh = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(mesh);

// Render the scene once
renderer.render(scene, camera);

this.camera.fov 