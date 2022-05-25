import React from "react";
import { HeroSlider, Info, SlideShow } from "./styles";

const SliderHero = () => {
  return (
    <HeroSlider>
      <div id="logo" class="mask">
        {/* <!-- Textual logo will go here --> */}
      </div>
      <SlideShow>
        <div id="slides-main" class="slides">
          {/* <!-- Featured image slides will go here --> */}
        </div>
        <div id="slides-aux" class="slides mask">
          {/* <!-- Slide titles will go here --> */}
        </div>
      </SlideShow>
      <Info>{/* <!-- Static info on the right --> */}</Info>
      <nav id="slider-nav">{/* <!-- Current slide indicator --> */}</nav>
    </HeroSlider>
  );
};

export default SliderHero;
