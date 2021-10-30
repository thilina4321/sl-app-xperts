import CSSTransition from "react-transition-group/CSSTransition";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import { Fragment } from "react";
import { AnimateOnChange } from "react-animation";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const AboutUs = () => {
  const [animationClass, setAnimationClass] = useState(false);
  return (
    <Fragment>
      <ScrollContainer>
        {/* <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: "30px" }}>
                Let't me show you scroll animation 😀
              </span>
            </Animator>
          </ScrollPage> */}

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>SL AppXperts ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>About Us</span>
            <br />
            <div style={{ height: "30px" }}></div>
            <span style={{}}>
              Hello, We are SL AppXperts team, We do like to make apps for you
            </span>{" "}
          </Animator>
        </ScrollPage>
        {/* <ScrollPage page={3}>
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </ScrollPage> */}
        {/* <ScrollPage page={3}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Aout Us</span>
            <br />
            <div style={{ height: "30px" }}></div>
            <span style={{}}>
              Hello, We are SL AppXperts team, We do like to make apps for you
            </span>
          </Animator>
        </ScrollPage> */}
      </ScrollContainer>
    </Fragment>
  );
};

export default AboutUs;
