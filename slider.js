function Slider() {
  this.imgsUrls = [];
  this.currentImageIndex = 0;
  this.leftButton = null;
  this.rightButton = null;
  this.slideImg = null;

  this.start = function (elId) {
    const elSelector = "#" + elId;
    const el = document.querySelector(elSelector);
    this.leftButton = el.querySelector(".left-button");
    this.rightButton = el.querySelector(".right-button");
    this.slideImg = el.querySelector(".slider-img");

    this.imgsUrls.push("imgs/1.png");
    this.imgsUrls.push("imgs/2.png");
    this.imgsUrls.push("imgs/3.png");
    this.slideImg.src = this.imgsUrls[this.currentImageIndex];

    this.leftButton.disabled = true;

    this.rightButton.onclick = () => {
      this.slideImg.src = this.imgsUrls[++this.currentImageIndex];
      this.leftButton.disabled = false;

      if (this.currentImageIndex === this.imgsUrls.length - 1) {
        this.rightButton.disabled = true;
      }
    };
    this.leftButton.onclick = () => {
      this.slideImg.src = this.imgsUrls[--this.currentImageIndex];
      this.rightButton.disabled = false;
      if (this.currentImageIndex === 0) {
        this.leftButton.disabled = true;
      }
    };
  };
}

const slideFactory = {
  createNewSlider: function () {
    const newSlider = new Slider();
    return newSlider;
  },
};
