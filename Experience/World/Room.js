import Models from "../Models";
import * as THREE from "three";

export default class Room {
  constructor() {
    this.model = new Models();
    this.scene = this.model.scene;

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );

    // camera.position.z = 5;
  }


  resize() {

  }

  update() {
  }

}