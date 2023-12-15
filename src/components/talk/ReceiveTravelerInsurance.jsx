import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setSpliceChatBox } from "@store/talk.js";
import { SettingChatData } from "@components/talk/SettingChatData";

const ReceiveTravelerInsurance = () => {
	const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);
	const chatCount = useSelector((state) => state.talk.chatCount);

  // 여행자 보험신청
  const seoulStation = (e) => {
    const selectChat = e.target.getAttribute("aria-label")
    const selectChatNum = e.target.getAttribute("value")
    const thisChatData = chatBox.filter((item) => item.name === selectChat && item.num === Number(selectChatNum) -1)
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat7-1", chatCount["KBChat7"])))
		setTimeout(function(){
			dispatch(setChatBox(SettingChatData("KBChat7-2", chatCount["KBChat7"])))
		}, 1400)
  }

  return (
    <KBTalk>
      <p>어느지점에서 수령?</p>
      <TalkSelectButton onClick={seoulStation} data={"KBChat6"} value={chatCount["KBChat6"]}>서울역</TalkSelectButton>
      <TalkSelectButton>홍대입구역</TalkSelectButton>
      <TalkSelectButton>일반지점 검색</TalkSelectButton>
    </KBTalk>
  )
}

export default ReceiveTravelerInsurance