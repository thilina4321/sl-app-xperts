import { Fragment } from "react";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const AboutUs = () => {
  return (
    <Fragment>
      <ScrollContainer>
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
      </ScrollContainer>
    </Fragment>
  );
};

export default AboutUs;
