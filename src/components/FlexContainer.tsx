import { ReactNode } from "react";
import styled from "styled-components";

export type Directions = "row" | "column" | "row-reverse" | "column-reverse";
type StandardSpacingOptions = "flex-start" | "flex-end" | "center";
export type AlignItems = "stretch" | "baseline" | StandardSpacingOptions;
export type JustifyContent = "space-between" | "space-around" | StandardSpacingOptions;
export type Wrap = "wrap" | "nowrap" | "wrap-reverse";

export type FlexContainerProps = {
  AlignItems?: AlignItems;
  Direction?: Directions;
  Gap?: string;
  JustifyContent?: JustifyContent;
  Margin?: string;
  Padding?: string;
  Wrap?: Wrap;
  children: ReactNode;
};

const StyledFlexContainer = styled.div<FlexContainerProps>`
  ${(p) => `
        display: flex;
        align-items: ${p.AlignItems ?? "center"};
        justify-content: ${p.JustifyContent ?? "center"};
        margin: ${p.Margin};
        padding: ${p.Padding};
        box-sizing: border-box;
        flex-wrap: ${p.Wrap};
        gap: ${p.Gap};
    `}
`;

export const FlexContainer = (props: FlexContainerProps) => (
  <StyledFlexContainer {...props}>{props.children}</StyledFlexContainer>
);
