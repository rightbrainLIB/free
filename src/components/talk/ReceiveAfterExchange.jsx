import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setSpliceChatBox } from "@store/talk.js";
import { SettingChatData } from "@components/talk/SettingChatData";

const ReceiveAfterExchange = () => {
	const dispatch = useDispatch();
  const chatCount = useSelector((state) => state.talk.chatCount);
  const chatBox = useSelector((state) => state.talk.chatBox);

  const bankExc = (e) => {
    const selectChat = e.target.getAttribute("aria-label")
    const selectChatNum = e.target.getAttribute("value")
    const thisChatData = chatBox.filter((item) => item.name === selectChat && item.num === Number(selectChatNum) -1)
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat3", chatCount["KBChat3"])));
  }
  
  return (
    <KBTalk>
      <p>환전 후 수령방법</p>
      <TalkSelectButton onClick={bankExc} data={"KBChat2"} value={chatCount["KBChat2"]}>은행</TalkSelectButton>
      <TalkSelectButton>외환ATM</TalkSelectButton>
      <TalkSelectButton>우편</TalkSelectButton>
      <TalkSelectButton>친구</TalkSelectButton>
      <TalkSelectButton>외환통장</TalkSelectButton>
    </KBTalk>
  )
}

export default ReceiveAfterExchange