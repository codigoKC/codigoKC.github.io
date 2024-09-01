import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.animation')

// Scene
const scene = new THREE.Scene()


/**
 * Objects
 */
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.set(0, 0, 3)
console.log(cube.position)
scene.add(cube)
/**
 * Sizes
 */
const sizes = {
    width: 400,
    height: 400
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.lookAt(new THREE.Vector3(0, - 1, 0))
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Controls
 */
const controls = new OrbitControls(canvas, camera) //tener el control sobre el cubo y la camera 
controls.enableDamping = true // tener un movimiento suave 
/**
 * tick o bucle de animacion 
 */
const tick = () =>
    {
        // Render
        renderer.render(scene, camera)
    
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
    
    tick()