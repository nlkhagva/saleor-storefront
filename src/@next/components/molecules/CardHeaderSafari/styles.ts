import { styled, media } from "@styles";
import { TitleSize } from "./types";

// export const Header = styled.div<{ divider: boolean }>``;
export const Header = styled.div<{ divider: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => `1.1rem ${props.theme.spacing.gutter}`};
  ${({ divider, theme }) =>
    divider && `border-bottom: 1px solid ${theme.colors.light};`}

  /*${media.smallScreen`
    position: absolute;
    top: 0;
    width: 100%;
    height: 72px;
    line-height: 72px;
  `}*/
`;

// export const Title = styled.h4<{ size: TitleSize }>``;
export const Title = styled.h4<{ size: TitleSize }>`
  font-size: ${({ size, theme: { typography } }) =>
    size === "lg" ? typography.h4FontSize : typography.baseFontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  color: ${props => props.theme.colors.baseFont};
  text-transform: uppercase;
  padding-right: 0.6rem;
  margin: 0;
`;

// export const Paragraph = styled.p``;
export const Paragraph = styled.p`
  font-size: ${props => props.theme.typography.smallFontSize};
  color: ${props => props.theme.colors.lightFont};
  padding-right: 0.6rem;
  margin: 0;
`;
