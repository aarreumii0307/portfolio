import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

const StyledBurger = styled.div`
  display: none;
  width: 21px;
  height: 14px;
  position: relative;

  z-index: 60;

  cursor: pointer;

  div {
    position: absolute;
    right: 0;
    display: block;
    width: 100%;
    height: 2px;
    /* background-color: ${({ theme }) => theme.colors.white_color}; */
    background: ${({ theme }) => theme.colors.black_color};

    border-radius: 10px;

    transition: all 0.3s linear;

    &:nth-child(1) {
      top: ${({ open }) => (open ? "50%" : "0")};
      margin-top: ${({ open }) => (open ? "-1px" : "0")};
      transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      /* transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")}; */
      width: ${({ open }) => (open ? "0" : "70%")};
      top: ${({ open }) => (open ? "0" : "50%")};
      margin-top: ${({ open }) => (open ? "0" : "-1px")};
      left: ${({ open }) => (open ? "-100%" : "0")};
    }
    &:nth-child(3) {
      bottom: ${({ open }) => (open ? "50%" : "0")};
      margin-bottom: ${({ open }) => (open ? "-1px" : "0")};
      transform: ${({ open }) => (open ? "rotate(-135deg)" : "rotate(0)")};
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

export default Burger;
