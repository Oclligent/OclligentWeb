import * as THREE from 'three'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
//import gsap from 'gsap';

let camera, scene, renderer;
let mixer = null;
let model = null;
const loader = new GLTFLoader(); 

export function init2() {
    //Canvas
    const Canvas = document.querySelector('#webgl_house');

    //Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    scene = new THREE.Scene(); 
    scene.position.x = 1;
    scene.rotation.x =  0.4;
    scene.rotation.y = Math.PI * 0.25;

    //camera
    camera = new THREE.PerspectiveCamera( 70, sizes.width / sizes.height, 1, 1000);
    camera.position.z = 3;

    //Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xB0350A, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    loader.load("/models/house/rower.gltf", (gltf) => {
        mixer = new THREE.AnimationMixer(gltf.scene);
        const action1 = mixer.clipAction(gltf.animations[0]);
        const action2 = mixer.clipAction(gltf.animations[1]);
        const action3 = mixer.clipAction(gltf.animations[2]);
        const action4 = mixer.clipAction(gltf.animations[3]);
        const action5 = mixer.clipAction(gltf.animations[4]);
        const action6 = mixer.clipAction(gltf.animations[5]);
        console.log(action1);
        console.log(action2);
        console.log(action3);
        
        action1.play();
        action2.play();
        action3.play();
        action4.play();
        action5.play();
        action6.play();

        //action2.paused();

        model = gltf.scene;
        model.scale.set(.5, .5, .5);
        scene.add(model);
    });

    const t_loader = new THREE.TextureLoader();
    t_loader.load('/models/house/Bg_textures/night_city.jpg' , function(texture) {
        scene.background = texture;  
    });

    //Controls
    const controls = new OrbitControls(camera, Canvas); //controller and domElement //drag and drop from right click & normal rotating by click holding & zoom in out by weel
    controls.enableDamping = true; // when rotate and relese, roration some degree from kinetic //updating in tick
    controls.enabled = true;

    renderer = new THREE.WebGLRenderer( { 
        canvas : Canvas,
        antialias: true
        
    } ); 
    renderer.setSize( sizes.width, sizes.height ); 
    renderer.setAnimationLoop( animation );
    renderer.setClearColor( 0x272727, 1 );
    document.body.appendChild(renderer.domElement);

    window.addEventListener( 'resize', () => {
        //Update Sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //Update Camera
        camera.aspect = sizes.width / sizes.height;
        //camera.updateProjectionMatrix(); //steching mesh 

        //Update Randerer
        renderer.setSize(sizes.width,sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    Canvas.addEventListener('dblclick', () =>{
        // //This segment for safari and any browsers
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
        if (!fullscreenElement){
            if (Canvas.requestFullscreen){
                Canvas.requestFullscreen();
            } else if (Canvas.webkitRequestFullscreen){
                Canvas.webkitRequestFullscreen();
            }
        } else{
            if (document.exitFullscreen){
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }
        }
    })
}

//Clock
const clock = new THREE.Clock();
let previousTime = 0;
    
function animation () {
    //console.log("Three.js") 

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;
    
    //Update Controls
    //controls.update()

    //Update Mixer
    if (mixer !== null){
        mixer.update(deltaTime);
    }

    renderer.render(scene, camera); //if using animation, renderer placing in tick. like this
} 