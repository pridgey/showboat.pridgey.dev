import styled from "styled-components";
import { Button, FlexContainer } from "./../components";
import { IoLogoGoogle } from "react-icons/io";

const TagLine = styled.h2`
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  user-select: none;
`;

const SubTag = styled.h3`
  font-size: clamp(0.1rem, 2vw, 2rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  user-select: none;
`;

type UnauthenticatedProps = {
  OnLogin: () => void;
};

export const Unauthenticated = ({ OnLogin }: UnauthenticatedProps) => (
  <>
    <TagLine>What are you watching next?</TagLine>
    <FlexContainer JustifyContent="flex-start" Gap="0px 15px">
      <SubTag>Start your own Showboat by:</SubTag>
      <Button OnClick={() => OnLogin()}>
        <IoLogoGoogle />
        Signing In
      </Button>
    </FlexContainer>
  </>
);
