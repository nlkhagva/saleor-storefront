import React from "react";
import { FormattedMessage } from "react-intl";
import Media from "react-responsive";

import { mediumScreen } from "@styles/constants";

// import LogoSmall from "../../../../images/logo-small.svg";
import * as S from "./styles";

export const DemoBanner: React.FC = () => {
  return (
    <S.Wrapper>
      <S.BorderedWrapper>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <S.LinkList>
          <S.TextEmphasis>
            <FormattedMessage defaultMessage="ТУРШИЛТИЙН ХУВИЛБАР" />
          </S.TextEmphasis>
        </S.LinkList>
        <S.LinkList>
          <Media minWidth={mediumScreen}>
            <S.TextEmphasis2>
              <FormattedMessage defaultMessage="Ямар нэг алдаа асуудал гарвал Оператортой холбогдоно уу" />
            </S.TextEmphasis2>
          </Media>
        </S.LinkList>
      </S.BorderedWrapper>
    </S.Wrapper>
  );
};
