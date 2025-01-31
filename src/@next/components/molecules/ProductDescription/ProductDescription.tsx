import React from "react";
import { FormattedMessage } from "react-intl";

import { RichTextContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

enum TABS {
  DESCRIPTION,
  ATTRIBUTES,
}

export const ProductDescription: React.FC<IProps> = ({
  description = "",
  descriptionJson = "",
  attributes,
  ushop,
  productLink,
}: IProps) => {
  const [activeTab, setActiveTab] = React.useState<TABS>(TABS.DESCRIPTION);

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.TabTitle
          active={activeTab === TABS.DESCRIPTION}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
        >
          <FormattedMessage defaultMessage="ТАЙЛБАР" />
        </S.TabTitle>
        {/* <S.TabTitle
          active={activeTab === TABS.ATTRIBUTES}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.ATTRIBUTES);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.ATTRIBUTES);
          }}
        >
          <FormattedMessage defaultMessage="ATTRIBUTES" />
        </S.TabTitle> */}
      </S.Tabs>
      {activeTab === TABS.DESCRIPTION &&
        (descriptionJson ? (
          <>
            <RichTextContent descriptionJson={descriptionJson} />
            {attributes &&
              attributes.map((attribute, index) => (
                <li key={index}>
                  <S.AttributeName>
                    {attribute.attribute.name}:{" "}
                  </S.AttributeName>{" "}
                  {attribute.values.map(value => value.name).join(", ")}
                </li>
              ))}
            {ushop && (
              <>
                <a href={ushop.url} target="_blank" rel="noreferrer">
                  {ushop.name}
                </a>{" "}
                <br />
              </>
            )}
            {productLink && (
              <a href={productLink} target="_blank" rel="noreferrer">
                Барааны линк
              </a>
            )}
          </>
        ) : (
          <p>{description}</p>
        ))}
      {activeTab === TABS.ATTRIBUTES && (
        <S.AttributeList>
          {attributes &&
            attributes.map((attribute, index) => (
              <li key={index}>
                <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "}
                {attribute.values.map(value => value.name).join(", ")}
              </li>
            ))}
        </S.AttributeList>
      )}
    </S.Wrapper>
  );
};
