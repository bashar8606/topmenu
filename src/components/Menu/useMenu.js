import React, { useState } from "react";

export const useMenu = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    setScroll(window.scrollY > 500);
  };


  return {
    scroll,
    show,
    setScroll,
    setShow,
    handleClose,
    handleShow,
    handleScroll,
  };
};
