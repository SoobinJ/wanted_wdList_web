import styled from "styled-components";

const size = {
  mobile: "768px",
  desktopSmall: "992px",
  desktop: "1100px",
};

export const device = {
  small: `(max-width: ${size.mobile})`,
  medium: `(max-width: ${size.desktopSmall})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ContentSection = styled.section`
  padding: 60px 0;
`;
export const SectionWrapper = styled.div`
  max-width: 1060px;
  width: 87.72%;
  margin: 0 auto;
  @media all and ${device.small} {
    margin-left: 20px;
  }
`;

export const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const TextMiddle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SectionContent = styled.div`
  margin: -10px;
`;
