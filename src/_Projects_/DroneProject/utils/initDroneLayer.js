import * as THREE from 'three'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import gsap from 'gsap';

let camera, scene, renderer;
let mixer = null;
let model = null;
const loader = new GLTFLoader(); 

var w = window.innerWidth;
//var h = window.innerHeight;

export function init1() { 
    //Canvas
    const Canvas = document.querySelector('#webgl_drone');

    //Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    scene = new THREE.Scene(); 
    scene.position.x = -50;
    scene.rotation.x = 0.4;
    scene.rotation.y = Math.PI * 1.5;

    //camera
    camera = new THREE.PerspectiveCamera( 70, sizes.width / sizes.height, 1, 1000);
    camera.position.z = 50;

    //Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xB0350A, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    loader.load("/models/drone/scene.gltf", (gltf) => {
        //console.log(gltf)
        mixer = new THREE.AnimationMixer(gltf.scene);
        const action1 = mixer.clipAction(gltf.animations[0]);
        const action2 = mixer.clipAction(gltf.animations[1]);
        const action3 = mixer.clipAction(gltf.animations[2]);
        const action4 = mixer.clipAction(gltf.animations[3]);
        const action5 = mixer.clipAction(gltf.animations[4]);
        console.log(action1);
        console.log(action2);
        console.log(action3);
        console.log(action4);
        console.log(action5);
        //action1.play();
        action2.play();
        action3.play();
        action4.play();
        action5.play();

        model = gltf.scene;
        model.scale.set(.5, .5, .5);
        scene.add(model);

        if(w > 890){
            gsap.to(camera.position, {
                z: 5,
                duration: 2.5,
                ease: "back.out(0.5)"
            });
            gsap.to(scene.position, {
                x: 2,
                duration: 1.5
            });
            gsap.to(scene.rotation, {
                y: Math.PI * 1,
                duration: 3
            });
            gsap.to(scene.rotation, {
                x: -0.4,
                duration: 2,
                delay: 2.5
            });
            gsap.to(scene.position, {
                y: -3,
                duration: 2.5,
                delay: 2.5
            });
        }else {
            gsap.to(camera.position, {
                z: 6,
                duration: 2.5,
                ease: "back.out(0.5)"
            });
            gsap.to(scene.position, {
                x: 0,
                duration: 1.5
            });
            gsap.to(scene.rotation, {
                y: Math.PI * 1,
                duration: 3
            });
            
        }
    });

    const t_loader = new THREE.TextureLoader();
    t_loader.load('/models/drone/Bg_textures/background.png' , function(texture) {
        scene.background = texture;  
    });

    //Controls
    const controls = new OrbitControls(camera, Canvas); //controller and domElement //drag and drop from right click & normal rotating by click holding & zoom in out by weel
    controls.enableDamping = true; // when rotate and relese, roration some degree from kinetic //updating in tick
    controls.enabled = false;
    
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
        if(w > 890){
            if (!fullscreenElement){
                if (Canvas.requestFullscreen){
                    Canvas.requestFullscreen();
                } else if (Canvas.webkitRequestFullscreen){
                    Canvas.webkitRequestFullscreen();
                }
                controls.enabled = true;
                gsap.to(scene.rotation, {
                    x: 0.2,
                    duration: 2
                });
                gsap.to(scene.position, {
                    y: 0,
                    duration: 2.5
                });
                gsap.to(scene.position, {
                    x: 0,
                    duration: 1.5,
                    delay: 2.5
                });
            } else{
                if (document.exitFullscreen){
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen){
                    document.webkitExitFullscreen();
                }
                controls.enabled = false;
                gsap.to(scene.position, {
                    x: 2,
                    duration: 2
                });
                gsap.to(scene.position, {
                    y: -3,
                    duration: 2.5,
                    delay: 2
                });
                gsap.to(scene.rotation, {
                    x: -0.4,
                    duration: 2.5,
                    delay: 2
                });            
                
            }
        }else {
            if (!fullscreenElement){
                if (Canvas.requestFullscreen){
                    Canvas.requestFullscreen();
                } else if (Canvas.webkitRequestFullscreen){
                    Canvas.webkitRequestFullscreen();
                }
                controls.enabled = true;
            }else {
                if (document.exitFullscreen){
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen){
                    document.webkitExitFullscreen();
                }
                controls.enabled = false;
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
    };

    renderer.render(scene, camera); //if using animation, renderer placing in tick. like this
} 