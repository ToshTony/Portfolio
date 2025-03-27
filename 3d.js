import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('3dimage');

// 1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add the Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

// 3. Create and add a cube object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emmisive: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);
scene.add(dodecahedron);


const boxgeometry = new THREE.BoxGeometry(2, 0.1, 2);
const Boxmaterial = new THREE.MeshStandardMaterial({color: '#B4B4B3', emmisive:'#B4B4B3'});
const box = new THREE.Mesh(boxgeometry, Boxmaterial);
box.position.y = -1.5; 
scene.add(box);


// 4. Add Lighting 
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);


const light2 = new THREE.SpotLight(0x006769, 100);
light2.position.set(-1, 1, -1);
scene.add(light2);

const light3 = new THREE.SpotLight(0x690200, 100);
light3.position.set(0, -5, 0);
scene.add(light3);


// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(400,400);
renderer.setPixelRatio(window.devicePixelRatio);


// 6. Add Orbit Controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


// 7. Animate the Scene

function animate(){
    requestAnimationFrame(animate);

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;
    controls.update();

    renderer.render(scene,camera);

}


// 8. Handle Window Resizing

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(400, 400);
});

animate();



 











