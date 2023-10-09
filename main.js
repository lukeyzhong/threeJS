import * as THREE from 'three';

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();

let cameraParams = {
    "fov": 65.3,
    "height": 1.53,
    "pitch": -0.11,
    "roll": 0.03
}

let wallData = [
    {
        "area": 12,
        "height": 3,
        "points": [
            {
                "x": {
                    "value": -1.2
                },
                "y": {
                    "value": -1.53
                },
                "z": {
                    "value": -3.43
                }
            }
        ],
        "wallid": 0,
        "wallnormal": {
            "x": -2.78,
            "y": -3.234432,
            "z": 1.46
        },
        "width": 4
    }]


function setCamera(cameraParams) {
    const camera = new THREE.PerspectiveCamera(
        cameraParams.fov, // Vertical field of view in degrees
        canvas.width / canvas.height, // Aspect ratio
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );

    camera.position.set(0, 0, 0); // Set the camera position
    camera.rotation.set(cameraParams.pitch, 0, cameraParams.roll); // Set rotation

    // Add the camera to the scene
    scene.add(camera);

    return camera;
}

function createWall(wallData) {
    const points = wallData.points.map(point => new THREE.Vector3(point.x.value, point.y.value, point.z.value));

    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(points);

    const material = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        color: 0xFF333C,
    });

    const wall = new THREE.Mesh(geometry, material);

    // Set wall position and rotation as needed
    // wall.position.set(x, y, z);
    // wall.rotation.set(rx, ry, rz);

    scene.add(wall);

    return wall;
}

// Loop through your wallsData array and create walls
wallsData.forEach(wallData => {
    createWall(wallData);
});

function animate() {
    requestAnimationFrame(animate);

    // Update any animations or interactions here

    renderer.render(scene, camera);
}

animate();
