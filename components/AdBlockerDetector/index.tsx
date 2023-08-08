import React, { useEffect } from "react";
import { useDetectAdBlock } from "adblock-detect-react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setAdBlockerFlag } from "../../redux/slices/authSlice";

const AdBlockerDetector = (props) => {
  const adBlockDetected = useDetectAdBlock();
  const { adBlockerFlag } = useSelector((state: RootStateOrAny) => ({
    adBlockerFlag: state.auth.adBlockerFlag
  }))
  const dispatch = useDispatch();

  const enableAdBlocker = () => {
    dispatch(setAdBlockerFlag(false));
  }

  return (
    <div>
      {adBlockDetected && adBlockerFlag ? (
        <div className="ad-blocker-message !mt-[40vh]">
          <p className="text-[35px]">
            It looks like you have an ad blocker enabled. Please disable it to continue using this website.
            <br />
            <span 
              className="underline cursor-pointer text-[16px]"
              onClick={enableAdBlocker}
            >
              continue without disabling
            </span>
          </p>
          <br />
        </div>
      ): props.children}
    </div>
  );
};

export default AdBlockerDetector;