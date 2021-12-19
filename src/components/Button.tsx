import styled from "styled-components";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  OnClick: () => void;
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0px;
  background-color: #4f4c67;
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: clamp(1rem, 1vw, 1rem);
  letter-spacing: 5px;
  gap: 0px 15px;
  transition: all 0.3s;

  & svg {
    height: 1vw;
  }

  &:hover {
    border-radius: 10px;
    background-color: #6d679b;
    transition: all 0.3s;
  }
`;

export const Button = ({ OnClick, children }: ButtonProps) => (
  <StyledButton type="button" onClick={() => OnClick()}>
    {children}
  </StyledButton>
);
