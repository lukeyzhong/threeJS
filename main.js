import * as THREE from 'three';

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();

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
  