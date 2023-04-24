import React, { useEffect } from "react";
import MainHeader from "../../components/common/header/header";
import { useRecoilValue } from "recoil";
import LoginModal from "../../components/login/LoginModal";
import { popupRecoilState } from "../../atoms/Popup";
import WdListMain from "../../components/wdlist/Main";
import styled from "styled-components";
import { device } from "../../components/styled";

export default function WdList() {
  const popup = useRecoilValue(popupRecoilState);

  useEffect(() => {
    popup
      ? document.body.classList.remove("fixed")
      : document.body.classList.add("fixed");
  }, [popup]);
  return (
    <div>
      <MainHeader></MainHeader>
      <EmptySection />

      <WdListMain></WdListMain>

      {popup ? "" : <LoginModal></LoginModal>}
    </div>
  );
}

const EmptySection = styled.div`
  height: 50px;
  @media all and ${device.medium} {
    height: 110px;
  }
`;
