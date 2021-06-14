import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { Transition } from "react-transition-group";
import { useWindowSize } from "@utils/hooks";
import { mediumScreen } from "@app/globalStyles/constants";

import * as S from "./styles";
import { IProps } from "./types";

const modalRoot = document.getElementById("modal-root");

export const OverlaySafari: React.FC<IProps> = ({
  children,
  duration = 600,
  hide,
  position = "center",
  show,
  transparent = false,
  target = modalRoot,
  testingContext,
  testingContextId,
}: IProps) => {
  const animationProps = {
    open: show,
    position,
  };
  const windowSize = useWindowSize();
  const [winHeight, setWinHeight] = useState(0);

  // const lightboxRef = useRef(null);
  useEffect(() => {
    if (windowSize.width < mediumScreen) setWinHeight(windowSize.height);
  }, [windowSize]);

  return (
    target &&
    ReactDOM.createPortal(
      <Transition in={show} timeout={duration} unmountOnExit>
        {state => (
          <S.OverlaySafari
            {...animationProps}
            state={state}
            onClick={hide}
            transparent={transparent}
            data-test={testingContext}
            data-test-id={testingContextId}
          >
            <S.LightboxSafari
              {...animationProps}
              state={state}
              onClick={e => e.stopPropagation()}
              style={winHeight > 10 ? { height: winHeight } : {}}
            >
              {children}
            </S.LightboxSafari>
          </S.OverlaySafari>
        )}
      </Transition>,
      target
    )
  );
};
