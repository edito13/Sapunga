import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsChevronDoubleUp } from "react-icons/bs";

import { Container } from "./style";

const index = () => {
  const [IsActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop >= 20) setIsActive(true);
      else setIsActive(false);
      console.log("Scroll Top:", scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className={IsActive ? "active" : ""}>
      <Link to="header" spy={true} smooth={true} duration={300}>
        <BsChevronDoubleUp />
      </Link>
    </Container>
  );
};

export default index;
