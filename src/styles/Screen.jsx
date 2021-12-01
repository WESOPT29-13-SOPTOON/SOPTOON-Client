//copyright by KimKwon
import { useMediaQuery } from "react-responsive";

export const deviceQuery = {
  mobile: "(max-width: 703px)",
  tablet: "(min-width: 704px) and (max-width: 895px)",
  desktop: "(min-width: 896px)",
};

function Screen({ children, mobile, tablet, desktop }) {
  let renderFlag = false;

  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });

  const isTablet = useMediaQuery({
    query: deviceQuery.tablet,
  });

  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  if (mobile) {
    renderFlag = renderFlag || isMobile;
  }
  if (tablet) {
    renderFlag = renderFlag || isTablet;
  }
  if (desktop) {
    renderFlag = renderFlag || isDesktop;
  }

  return <>{renderFlag && children}</>;
}

export default Screen;
