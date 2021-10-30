import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  MoveIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const WhyWe = () => {
  return (
    <div
      style={{
        width: "100%",

        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        <ScrollContainer>
          <ScrollPage page={3}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "40px" }}>SL AppXperts ✨</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <span style={{ fontSize: "20px" }}>
              <Animator animation={MoveIn(1000, 0)}>
                <h1>Why Should you choose us</h1>{" "}
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>Quality Service</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice Team</Animator>
              <Animator animation={MoveIn(1000, 0)}>
                Good Customer Statisfaction
              </Animator>

              <div style={{ height: "50px" }}></div>
              <Animator animation={MoveIn(1000, 0)}>
                <h1>What we provide to you</h1>{" "}
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>Web App</Animator>
              <Animator animation={MoveIn(1000, 0)}>Mobile App</Animator>
              <Animator animation={MoveIn(1000, 0)}>Source Codes</Animator>
            </span>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default WhyWe;
