var rocket;
var chosenPlanet;
var scoreText;
var score = 0;

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  //   init() {
  //     Phaser.scene.call(this, { key: "TitleScene " });
  //   }

  preload() {
    this.load.image("background", "images/spaceBG.png");
    this.input.on("gameobjectdown", function (pointer, gameObject) {});

    this.load.image("nextArrow", "images/nextArrow.png");

    this.load.spritesheet("TitleLogo", "images/MMC_Title.png", {
      frameWidth: 320,
      frameHeight: 320,
    });
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
          document.getElementById("gameDiv").style.display = "none";
          document.getElementById("inputForm").style.display = "block";
          this.scene.stop();

          // this.scene.start("RocketScene");
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
      key: "titleLogo",
      frames: this.anims.generateFrameNumbers("TitleLogo", {
        start: 2,
        end: 142,
      }),
      frameRate: 30,
      repeat: -1,
    });

    var logo = this.add.sprite(700, 300, "titleLogo");
    logo.setScale(1.4);
    logo.play("titleLogo");
  }

  update() {}
}
