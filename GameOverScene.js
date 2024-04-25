var rocket;
var chosenPlanet;
var scoreText;
var score = 0;

class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });
  }

  //   init() {
  //     Phaser.scene.call(this, { key: "GameOverScene" });
  //   }

  preload() {
    this.load.image("background", "images/spaceBG.png");
    this.input.on("gameobjectdown", function (pointer, gameObject) {});

    this.load.image("nextArrow", "images/nextArrow.png");

    //rocket anims
    this.load.spritesheet(
      "IdleRocket",
      "pixeloramaAnims/rocket_iter1_idle.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketTurnto90R",
      "pixeloramaAnims/rocket_iter1_turn0_90R.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketTurnto90L",
      "pixeloramaAnims/rocket_iter1_turn0_90L.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketFlyR",
      "pixeloramaAnims/rocket_iter1_flyR.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketFlyL",
      "pixeloramaAnims/rocket_iter1_flyL.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketTurnto180R",
      "pixeloramaAnims/rocket_iter1_turn90_180R.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketTurnto180L",
      "pixeloramaAnims/rocket_iter1_turn90_180L.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketFlyDown",
      "pixeloramaAnims/rocket_iter1_flyDown.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "RocketFade",
      "pixeloramaAnims/rocket_iter1_disappear.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );

    // //planet fades
    this.load.spritesheet(
      "planetAlmondSundae_fade",
      "pixeloramaAnims/planetAlmondSundae_fade.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "planetCitrusPeel_fade",
      "pixeloramaAnims/planetCitrusPeel_fade.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "planetFuschiaLuster_fade",
      "pixeloramaAnims/planetFuschiaLuster_fade.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "planetMagenta_fade",
      "pixeloramaAnims/planetMagenta_fade.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "planetOrangeCoil_fade",
      "pixeloramaAnims/planetOrangeCoil_fade.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );
    this.load.spritesheet(
      "planetRainypop_fade",
      "pixeloramaAnims/planetRainypop_fade.png",
      {
        frameWidth: 128,
        frameHeight: 96,
      }
    );

    // // //images of the planets
    this.load.image(
      "planetAlmondSundae",
      "pixeloramaAnims/planetImages/planetAlmondSundae.png"
    );
    this.load.image(
      "planetCitrusPeel",
      "pixeloramaAnims/planetImages/planetCitrusPeel.png"
    );
    this.load.image(
      "planetFuschiaLuster",
      "pixeloramaAnims/planetImages/planetFuschiaLuster.png"
    );
    this.load.image(
      "planetMagenta",
      "pixeloramaAnims/planetImages/planetMagenta.png"
    );
    this.load.image(
      "planetOrangeCoil",
      "pixeloramaAnims/planetImages/planetOrangeCoil.png"
    );
    this.load.image(
      "planetRainypop",
      "pixeloramaAnims/planetImages/planetRainypop.png"
    );
  }

  create() {
    let bg = this.add.image(0, 0, "background");
    bg.setScale(1.6);

    let nextButton = this.add
      .image(1365, 25, "nextArrow")
      .setInteractive()
      .on(
        "pointerdown",
        function () {
          // RocketScenethi.start("RocketScene");
          this.scene.restart();
        },
        this
      )
      .on("pointerover", function () {
        nextButton.tint = 0xbcbcbc;
      })
      .on("pointerout", function () {
        nextButton.clearTint();
      });

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("IdleRocket", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn90R",
      frames: this.anims.generateFrameNumbers("RocketTurnto90R", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: "turn90L",
      frames: this.anims.generateFrameNumbers("RocketTurnto90L", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: "flyR",
      frames: this.anims.generateFrameNumbers("RocketFlyR", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "flyL",
      frames: this.anims.generateFrameNumbers("RocketFlyL", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "turn180R",
      frames: this.anims.generateFrameNumbers("RocketTurnto180R", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: "turn180L",
      frames: this.anims.generateFrameNumbers("RocketTurnto180L", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: "flyDown",
      frames: this.anims.generateFrameNumbers("RocketFlyDown", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "disappear",
      frames: this.anims.generateFrameNumbers("RocketFade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "planet_disappearAS",
      frames: this.anims.generateFrameNumbers("planetAlmondSundae_fade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "planet_disappearCP",
      frames: this.anims.generateFrameNumbers("planetCitrusPeel_fade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "planet_disappearFL",
      frames: this.anims.generateFrameNumbers("planetFuschiaLuster_fade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "planet_disappearM",
      frames: this.anims.generateFrameNumbers("planetMagenta_fade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "planet_disappearOC",
      frames: this.anims.generateFrameNumbers("planetOrangeCoil_fade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "planet_disappearRP",
      frames: this.anims.generateFrameNumbers("planetRainypop_fade", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 10,
      repeat: 0,
    });

    scoreText = this.add.text(10, 10, `Score: ${score}`, {
      fontFamily: "Courier",
      fontSize: "23px",
    });

    rocket = this.add.sprite(700, 300);
    rocket.setScale(1.7);
    rocket.play("idle");

    var planet_AlmondSundae = this.add.sprite(-40, -40, "planetAlmondSundae");
    planet_AlmondSundae.setScale(1.2);

    var planet_CitrusPeel = this.add.sprite(-40, -40, "planetCitrusPeel");
    planet_CitrusPeel.setScale(1.2);

    var planet_FuschiaLuster = this.add.sprite(-40, -40, "planetFuschiaLuster");
    planet_FuschiaLuster.setScale(1.2);

    var planet_Magenta = this.add.sprite(-40, -40, "planetMagenta");
    planet_Magenta.setScale(1.2);

    var planet_OrangeCoil = this.add.sprite(-40, -40, "planetOrangeCoil");
    planet_CitrusPeel.setScale(1.2);

    var planet_Rainypop = this.add.sprite(-40, -40, "planetRainypop");
    planet_Rainypop.setScale(1.2);

    var planets = [
      planet_AlmondSundae,
      planet_CitrusPeel,
      planet_FuschiaLuster,
      planet_Magenta,
      planet_OrangeCoil,
      planet_Rainypop,
    ];

    var planetDisplayIndex = 4;

    var planetPositions = [700, 930, 470, 1160, 240];

    for (let p = 0; p <= planetDisplayIndex; p++) {
      let index = 0;
      do {
        index = Math.floor(Math.random() * planets.length);
      } while (planets[index].y == 500);
      planets[index].setInteractive();
      planets[index].x = planetPositions[p];
      planets[index].y = 500;
      planets[index].on("pointerover", function () {
        planets[index].tint = 0xbcbcbc;
      });
      planets[index].on("pointerout", function () {
        planets[index].clearTint();
      });
      let sampleText = this.add
        .text(planets[index].x, 550, "sample text", {
          // backgroundColor: "#FFF8DC",
          backgroundColor: "#FFFFFF",
          color: "#001D40",
          fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
          fontSize: "14px",
          padding: 2,
        })
        .setOrigin(0.5, 0.5);
    }

    this.input.on("gameobjectdown", function (pointer, gameObject) {
      if (
        rocket.anims.getName() === "idle" &&
        planets.indexOf(gameObject) != -1
      ) {
        chosenPlanet = gameObject;
        if (gameObject.x >= rocket.x) {
          rocket.play("turn90R");
          rocket.chain(["flyR", "turn180R", "flyDown", "disappear", "idle"]);
        }
        if (gameObject.x < rocket.x) {
          rocket.play("turn90L");
          rocket.chain(["flyL", "turn180L", "flyDown", "disappear", "idle"]);
        }
      }

      // When score reaches number of planets,,,somehow make Game Over screen pop up

      //make planet flash red if incorrect and maybe make the rocket crash into the planet
      // planet_AlmondSundae.setTintFill(0xff0000);
      // this.timedEvent = this.time.delayedCall(
      //   500,
      //   function () {
      //     planet_AlmondSundae.clearTint();
      //   },
      //   [],
      //   this
      // );
    });
  }

  update() {
    if (rocket.anims.getName() === "flyR") {
      if (rocket.x >= chosenPlanet.x) {
        rocket.stop("flyR");
      } else {
        rocket.x += 8;
      }
    }
    if (rocket.anims.getName() === "flyL") {
      if (rocket.x <= chosenPlanet.x) {
        rocket.stop("flyL");
      } else {
        rocket.x -= 8;
      }
    }
    if (rocket.anims.getName() === "flyDown") {
      if (rocket.y >= chosenPlanet.y - 60) {
        rocket.stop("flyDown");
        score++;
        scoreText.text = `Score: ${score}`;
        let planetName = chosenPlanet.texture.key;
        if (planetName === "planetAlmondSundae") {
          chosenPlanet.play("planet_disappearAS");
        } else if (planetName === "planetCitrusPeel") {
          chosenPlanet.play("planet_disappearCP");
        } else if (planetName === "planetFuschiaLuster") {
          chosenPlanet.play("planet_disappearFL");
        } else if (planetName === "planetMagenta") {
          chosenPlanet.play("planet_disappearM");
        } else if (planetName === "planetOrangeCoil") {
          chosenPlanet.play("planet_disappearOC");
        } else if (planetName === "planetRainypop") {
          chosenPlanet.play("planet_disappearRP");
        }
        chosenPlanet.removeInteractive();
      } else {
        rocket.y += 8;
      }
    }
    if (rocket.anims.getName() === "idle") {
      rocket.x = 700;
      rocket.y = 300;
    }
  }
}
