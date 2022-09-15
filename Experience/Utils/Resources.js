import Models from "../Models";
import { EventEmitter } from "events";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();

    this.models = new Models();
    this.renderer = this.models.renderer;
    this.assets = assets;
    console.log(this.assets)

    this.items = {};
    this.queue = this.assets.length;
    this.loaded = 0;

    this.setLoader();
    this.startLoading();

  }

  setLoader() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    // console.log(this.loaders)
  }

  startLoading() {
    for (const asset of this.assets) {
      // console.log("start",asset)
      if (asset.type === "gltfModels") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoader(asset, file)

          function animate() {
            requestAnimationFrame(animate)
            file.scene.rotation.y -=  0.001
          }
          animate();
        })
      }
    }
  }

  singleAssetLoader(asset, file) {
    this.items[asset.name] = file;
    this.loaded ++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }

  }
}