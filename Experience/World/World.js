import Models from "../Models";
import * as THREE from "three";

export default class Renderer {
  constructor() {
    this.model = new Models();
    this.sizes = this.model.sizes;
    this.scene = this.model.scene;
    this.canvas = this.model.canvas;
    this.camera = this.model.camera;

    console.log(this.camera, this.camera.perspectiveCamera)

    this.setRenderer();
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    })

    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.CineonToneMapping;
    this.renderer.toneMappingExposure = 1.75;
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(this.sizes.width, this.sizes.heigth);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.heigth);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.renderer.render(this.scene, this,this.camera.perspectiveCamera)
  }

}