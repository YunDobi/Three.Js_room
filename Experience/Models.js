import * as THREE from "three"
import Sizes from "./Utils/Sizes";
import Camera from "./Utils/Camera";
import Renderer from "./Utils/Renderer";
import Time from "./Utils/Time";

import World from "./World/world";

export default class Models {
	static instance
  constructor(canvas) {
		if  (Models.instance) {
			return Models.instance;
		}
		Models.instance = this;
    this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.sizes = new Sizes();
		this.time = new Time();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.world = new World();
		// console.log(this.canvas)

		this.time.on("update", () => {
			this.update();
		})

		this.sizes.on("resize", () => {
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