/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { Modal } from "../../../components/molecule/Modal/Modal";
import { AnswerModalContent1Style, AnswerModalContent2Style } from "./styles";
import { getCsrfToken, postApi } from "../../../api/authService";
import { useRecoilValue } from "recoil";
import { IsLoggedInState } from "../../../atom/LoginInfo";

interface LikeProps{
  word: string;
}
export default function AnswerModal(props: LikeProps) {
  const { word } = props;

  const [modalOpen, setModalOpen] = useState(true);
  const isLoggedIn = useRecoilValue(IsLoggedInState);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLikeSubmit = async () => {
    if(isLoggedIn){
      const csrfToken = await getCsrfToken('url');
      const response = postApi(csrfToken, 'url', word);
      console.log(response);
    }
    else alert("로그인이 필요합니다.")
  }
  return (
    <Modal isOpen={modalOpen} onClose={handleModalClose}>
      <div css={AnswerModalContent1Style}>정답!</div>
      <button css={AnswerModalContent2Style} onClick={handleLikeSubmit}>좋아요 단어 저장하기</button>
    </Modal>
  )
}