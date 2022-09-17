import Models from "../Models";
// import * as THREE from "three";
import Room from "./Room";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default class World {
  constructor() {
    this.model = new Models();
    this.sizes = this.model.sizes;
    this.scene = this.model.scene;
    this.canvas = this.model.canvas;
    this.camera = this.model.camera;
    this.resources = this.model.resources;

    gsap.registerPlugin(ScrollTrigger);
    this.setpath();

    this.resources.on("ready", () => {
      this.room = new Room();
    })


  }

  setpath {
    this.timeline = new gsap.timeline;

  }

  resize() {

  }

  update() {
  }

}