import React, { useEffect, useRef, useState } from "react";

import { Div } from "./AutoHorizontalScrollableTextStyles";

const Header = ({ children }) => {
  const headerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval = null;
    const headerElement = headerRef.current;
    const startScrolling = () => {
      if (!headerRef.current) return;
      headerElement.scrollLeft += 2;
    };
    if (isHovered) {
      interval = setInterval(() => startScrolling(), 15);
    } else {
      headerRef.current.scrollLeft = 0;
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Div
      scrollable
      ref={headerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Div>
  );
};

export default Header;
