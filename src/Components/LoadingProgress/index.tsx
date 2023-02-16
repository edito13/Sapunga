import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Loading } from "./style";

const index = () => {
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      setLoadingCounter((count) => count + 1);
    }, 1000);

    return () => clearInterval(time);
  }, [LoadingCounter]);

  useEffect(() => {
    if (LoadingCounter <= 5) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  return (
    <Container>
      {LoadingStatus ? (
        <>
          <Loading
            data-aos="zoom-in"
            data-aos-delay="150"
            style={{ width: "3.7em", height: "3.7em" }}
          />
          <p data-aos="zoom-in" data-aos-delay="250">
            Aguarde...
          </p>
        </>
      ) : (
        <p>O Loading já parou</p>
      )}
    </Container>
  );
};

export default index;
