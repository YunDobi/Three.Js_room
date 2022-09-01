import Models from "../Models";
import * as THREE from "three";
import Room from "./Room";

export default class World {
  constructor() {
    this.model = new Models();
    this.sizes = this.model.sizes;
    this.scene = this.model.scene;
    this.canvas = this.model.canvas;
    this.camera = this.model.camera;

    this.room = new Room();

  }


  resize() {

  }

  update() {
  }

}