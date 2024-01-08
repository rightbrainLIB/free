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
  const insurance = () => {
    const thisChatData = chatBox.filter((item) => item.name === "KBChat5")
    dispatch(setSpliceChatBox(chatBox.indexOf(thisChatData[0])))
    dispatch(setChatBox(SettingChatData("KBChat6", chatCount)))
  }

  return (
    <>
      <KBTalk moreView={"여행자보험 보장항목 보기"}>
        <p>여행자 보험신청?</p>
        <TalkSelectButton onClick={insurance}>여행자 보험신청</TalkSelectButton>
        <TalkSelectButton>환전만</TalkSelectButton>
      </KBTalk>
    </>
  )
}

export default TravelerInsuranceQ