import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi
        <br /> My name is Htet Ahkar
        <br /> I'm self-taught web-developer from Myanmar who's trying to become
        full-stack developer.
      </SectionText>
      <Button onClick={() => (window.location.href = "www.google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
