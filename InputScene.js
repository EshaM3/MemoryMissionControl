var rocket;
var chosenPlanet;
var scoreText;
var score = 0;
var placement = 300;
var addition = 0;

class InputScene extends Phaser.Scene {
  constructor() {
    super({ key: "InputScene" });
  }

  //   init() {
  //     Phaser.scene.call(this, { key: "InputScene " });
  //   }

  preload() {
    this.load.image("background", "images/spaceBG.png");

    this.input.on("gameobjectdown", function (pointer, gameObject) {});

    this.load.image("nextArrow", "images/nextArrow.png");

    this.load.html("inputFields", "loadedHTML/inputFields.html");

    this.load.image("addInputs", "images/addButton.png");
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
          this.scene.start("RocketScene");
        },
        this
      )
      .on("pointerover", function () {
        nextButton.tint = 0xbcbcbc;
      })
      .on("pointerout", function () {
        nextButton.clearTint();
      });

    let addButton = this.add
      .image(700, 100, "addInputs")
      .setInteractive()
      .on(
        "pointerdown",
        function () {
          // RocketScenethi.start("RocketScene");
          const element = this.add
            .dom(700, placement + addition)
            .createFromCache("inputFields")
            .setOrigin(0.5, 0.5);
          console.log(element.getChildByName("questionInput"));

          element.addListener("click");

          addition += 150;
        },
        this
      )
      .on("pointerover", function () {
        addButton.tint = 0xbcbcbc;
      })
      .on("pointerout", function () {
        addButton.clearTint();
      });
    // scoreText = this.add.text(10, 10, `Score: ${score}`, {
    //   fontFamily: "Courier",
    //   fontSize: "23px",
    // });

    // var input = this.add.inputField(10, 90);

    // let sampleText = this.add.text(planets[index].x, 550, "sample text", {
    //   // backgroundColor: "#FFF8DC",
    //   backgroundColor: "#FFFFFF",
    //   color: "#001D40",
    //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
    //   fontSize: "14px",
    //   padding: 2,
    // });
  }

  update() {}
}
