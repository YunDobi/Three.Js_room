import * as THREE from "three"
import Sizes from "./Utils/Sizes";
import Camera from "./Utils/Camera";
import Renderer from "./Utils/Renderer";
import Time from "./Utils/Time";

export default class Models {
	static instance
  constructor(canvas) {
		if  (Models.instance) {
			return Models.instance;
		}
		Models.instance = this;
    this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.time = new Time();
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();

		this.time.emit("update", () => {
			this.update();
		})

		this.sizes.emit("resize", () => {
			this.resize();
		})
  }

	resize() {
		this.camera.resize();
		this.renderer.resize();
	}

	update() {
		this.camera.update();
		this.renderer.update();
	}
}