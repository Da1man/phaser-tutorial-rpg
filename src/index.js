import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import WorldScene from "./scenes/WorldScene";
import BattleScene from "./scenes/BattleScene";
import UIScene from "./scenes/UIScene";

const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }
    }
  },
  scene: [BootScene, WorldScene, BattleScene, UIScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
};

const game = new Phaser.Game(config);
