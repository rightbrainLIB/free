import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setSpliceChatBox } from "@store/talk.js";
import { SettingChatData } from "@components/talk/SettingChatData";

const SecondExcahgeQ = () => {
	const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);
  const chatCount = useSelector((state) => state.talk.chatCount);

  // 지금 환전
  const nowExc = () => {
    const thisChatData = chatBox.filter((item) => item.name === "KBChat4")
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat5", chatCount)))
  }
  return (
    <KBTalk>
      <p>환전하시겠어요?</p>
      <TalkSelectButton onClick={nowExc}>지금 환전할게요</TalkSelectButton>
      <TalkSelectButton>환전금액 수정</TalkSelectButton>
    </KBTalk>
  )
}

export default SecondExcahgeQ