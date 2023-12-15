import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "@components/talk/KBTalk";
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setSpliceChatBox } from "@store/talk.js";
import { SettingChatData } from "@components/talk/SettingChatData";

const TravelerInsuranceQ = () => {
	const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);
	const chatCount = useSelector((state) => state.talk.chatCount);

  // 여행자 보험신청
  const insurance = (e) => {
    const selectChat = e.target.getAttribute("aria-label")
    const selectChatNum = e.target.getAttribute("value")
    const thisChatData = chatBox.filter((item) => item.name === selectChat && item.num === Number(selectChatNum) -1)
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat6", chatCount["KBChat6"])))
  }

  return (
    <>
      <KBTalk moreView={"여행자보험 보장항목 보기"}>
        <p>여행자 보험신청?</p>
        <TalkSelectButton onClick={insurance} data={"KBChat5"} value={chatCount["KBChat5"]}>여행자 보험신청</TalkSelectButton>
        <TalkSelectButton>환전만</TalkSelectButton>
      </KBTalk>
    </>
  )
}

export default TravelerInsuranceQ