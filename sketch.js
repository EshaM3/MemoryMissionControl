class RocketScene extends Phaser.scene {
  constructor() {
    super();
  }

  preload() {
    this.load.setBaseURL("pixeloramaAnims");

    //rocket anims
    this.load.spritesheet("IdleRocket", "rocket_iter1_idle.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketTurnto90R", "rocket_iter1_turn0_90R.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketTurnto90L", "rocket_iter1_turn0_90L.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketFlyR", "rocket_iter1_flyR.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketFlyL", "rocket_iter1_flyL.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketTurnto180R", "rocket_iter1_turn90_180R.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketTurnto180L", "rocket_iter1_turn90_180L.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketFLyDown", "rocket_iter1_flyDown.png", {
      frameWidth: 128,
      frameHeight: 96,
    });
    this.load.spritesheet("RocketFade", "rocket_iter1_disappear.png", {
      frameWidth: 128,
      frameHeight: 96,
    });

    //planet fades
    this.load.spritesheet(
      "planetAlmondSundae_fade",
      "planetAlmondSundae_fade.png"
    );
    this.load.spritesheet("planetCitrusPeel_fade", "planetCitrusPeel_fade.png");
    this.load.spritesheet(
      "planetFuschiaLuster_fade",
      "planetFuschiaLuster_fade.png"
    );
    this.load.spritesheet("planetMagenta_fade", "planetMagenta_fade.png");
    this.load.spritesheet(
      "planetOrangeCoil_fade",
      "planetAlmondSundae_fade.png"
    );
    this.load.spritesheet(
      "planetAlmondSundae_fade",
      "planetAlmondSundae_fade.png"
    );

    //images of the planets
    this.load.image(
      "planetAlmondSundae",
      "planetImages/planetAlmondSundae.png"
    );
    this.load.image("planetCitrusPeel", "planetImages/planetCitrusPeel.png");
    this.load.image(
      "planetFuschiaLuster",
      "planetImages/planetFuschiaLuster.png"
    );
    this.load.image("planetMagenta", "planetImages/planetMagenta.png");
    this.load.image("planetOrangeCoil", "planetImages/planetOrangeCoil.png");
    this.load.image("planetRainypop", "planetImages/planetRainypop.png");
  }

  create() {
    this.add.image(0, 0, "IdleRocket").setOrigin(0, 0);

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("IdleRocket", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7],
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {}
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: RocketScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

const game = new Phaser.Game(config);
