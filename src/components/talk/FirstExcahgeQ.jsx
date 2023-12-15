import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setSpliceChatBox } from "@store/talk.js";
import { SettingChatData } from "@components/talk/SettingChatData";

const FirstExcahgeQ = () => {
	const dispatch = useDispatch();
  const chatCount = useSelector((state) => state.talk.chatCount);
  const chatBox = useSelector((state) => state.talk.chatBox);

  // 지금 환전
  const nowExc = (e) => {
    const selectChat = e.target.getAttribute("aria-label")
    const selectChatNum = e.target.getAttribute("value")
    const thisChatData = chatBox.filter((item) => item.name === selectChat && item.num === Number(selectChatNum) -1)
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat2", chatCount["KBChat2"])))
  }
  // 원하는 가격일때 알려주세요
  const afterExc = (e) => {
    const selectChat = e.target.getAttribute("aria-label")
    const selectChatNum = e.target.getAttribute("value")
    const thisChatData = chatBox.filter((item) => item.name === selectChat && item.num === Number(selectChatNum) -1)
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat9", chatCount["KBChat9"])))
  }

  return (
    <KBTalk>
      <p>지금 가격으로 환전하시겠어요?</p>
      <TalkSelectButton onClick={nowExc} data={"KBChat1"} value={chatCount["KBChat1"]}>지금환전</TalkSelectButton>
      <TalkSelectButton onClick={afterExc} data={"KBChat1"} value={chatCount["KBChat1"]}>원하는 가격일때 알려주세요</TalkSelectButton>
    </KBTalk>
  )
}

export default FirstExcahgeQ