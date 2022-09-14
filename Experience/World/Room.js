import Models from "../Models";
import * as THREE from "three";

export default class Room {
  constructor() {
    this.model = new Models();
    this.scene = this.model.scene;
    this.resources = this.model.resources;
    this.room = this.resources.items.shiba;
    this.actualRoom = this.room.scene;

    this.setModel();
  }

  setModel() {
    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(1.5,1.5,1.5)
    console.log(this.actualRoom)
  }


  resize() {

  }

  update() {
  }

}