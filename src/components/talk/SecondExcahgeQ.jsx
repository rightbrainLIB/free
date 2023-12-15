import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setSpliceChatBox } from "@store/talk.js";
import { SettingChatData } from "@store/SettingChatData";

const SecondExcahgeQ = () => {
	const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);
  const chatCount = useSelector((state) => state.talk.chatCount);

  // 지금 환전
  const nowExc = (e) => {
    const selectChat = e.target.getAttribute("aria-label")
    const selectChatNum = e.target.getAttribute("value")
    const thisChatData = chatBox.filter((item) => item.name === selectChat && item.num === Number(selectChatNum) -1)
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat5", chatCount["KBChat5"])))
  }
  return (
    <KBTalk>
      <p>환전하시겠어요?</p>
      <TalkSelectButton onClick={nowExc} data={"KBChat4"} value={chatCount["KBChat4"]}>지금 환전할게요</TalkSelectButton>
      <TalkSelectButton>환전금액 수정</TalkSelectButton>
    </KBTalk>
  )
}

export default SecondExcahgeQ