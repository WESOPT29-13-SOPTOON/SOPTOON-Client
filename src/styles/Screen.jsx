//copyright by KimKwon
import { useMediaQuery } from "react-responsive";

const deviceQuery = {
  mobile: "(max-width: 36rem)",
  tablet: "(min-width: 36.1rem) and (max-width: 76.8rem)",
  desktop: "(min-width: 76.9rem)",
};

function Screen({ children, mobile, tablet, desktop }) {
  let renderFlag = true;

  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });

  const isTablet = useMediaQuery({
    query: deviceQuery.tablet,
  });

  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  if (mobile) renderFlag = renderFlag && isMobile;
  if (tablet) renderFlag = renderFlag && isTablet;
  if (desktop) renderFlag = renderFlag && isDesktop;

  return <>{renderFlag && children}</>;
}

export default Screen;
