import Models from "../Models";
import * as THREE from "three";

export default class Camera {
  constructor() {
    this.model = new Models();
    this.sizes = this.model.sizes;
    this.scene = this.model.scene;
    this.canvas = this.model.canvas;
    // console.log(this.canvas, this.scene)

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
      )
    this.scene.add(this.perspectiveCamera);
    this.perspectiveCamera.position.z = 5
  }

  createOrthographicCamera() {
    this.frustrum = 5;
    this.OrthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) /2,
      (this.sizes.aspect * this.sizes.frustrum) /2,
      this.sizes.frustrum /2,
      -this.sizes.frustrum /2,
      -100,
      100
    );
    this.scene.add(this.OrthographicCamera);
  }

  resize() {
    //update Perpective camera on Resize
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    //update Orthographic camera on Resize
    this.OrthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) /2;
    this.OrthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) /2;
    this.OrthographicCamera.top = this.sizes.frustrum /2,
    this.OrthographicCamera.bottom = -this.sizes.frustrum /2
  }

  update() {

  }

}