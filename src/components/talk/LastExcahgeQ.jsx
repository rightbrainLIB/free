import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";

const LastExcahgeQ = () => {
	return (
		<KBTalk>
      <p>USD10 환전신청 하시겠습니까?</p>
      <TalkSelectButton>조건수정하기</TalkSelectButton>
      <TalkSelectButton>환전하기</TalkSelectButton>
    </KBTalk>
	)
}

export default LastExcahgeQ