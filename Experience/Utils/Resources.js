import { EventEmitter } from "events";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();

    this.assets = assets;

    this.item = {};
    this.queue = this.assets.length;
    this.loaded = 0;

    this.setLoader();
    this.startLoading();

  }

  setLoader() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    // this.loaders.dracoLoader = new DRACOLoader();
    // this.loaders.dracoLoader.setDecoderPath("/draco/");
    // this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)

  }

  startLoading() {
    for (const asset of this.assets) {
      console.log(asset)
      if (asset.type === "gltfModels") {
        this.loaders.gltfLoader.load(asset.path,(file) => {
          this.singleAssetLoader(asset, file)
        })
      }
    }
  }

  singleAssetLoader(asset, file) {
    this.item[asset.name] = file;
    this.loaded ++;
    console.log(file)
    if (this.loaded === this.queue) {
      this.emit("ready");
    }

  }
}