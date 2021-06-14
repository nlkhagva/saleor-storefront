import { styled, media } from "@styles";

// export const Footer = styled.div<{ divider: boolean }>``;
export const Footer = styled.div<{ divider: boolean }>`
  position: relative;
  text-align: right;
  padding: ${props => `1.1rem ${props.theme.spacing.gutter}`};
  ${({ divider, theme }) =>
    divider && `border-top: 1px solid ${theme.colors.light};`}
  button {
    &:last-child {
    }
  }

  /*${media.smallScreen`
    position: absolute;
    height: 85px;
    width: 100%;
    bottom: 0;
  `}*/
`;
// export const Footer = styled.div<{ divider: boolean }>`
//   position: relative;
//   text-align: right;
//   padding: ${props => `1.1rem ${props.theme.spacing.gutter}`};
//   ${({ divider, theme }) =>
//     divider && `border-top: 1px solid ${theme.colors.light};`}
//   button {
//     &:last-child {
//       margin-left: 2rem;
//       margin-right: 0.7rem;
//     }
//   }
// `;
