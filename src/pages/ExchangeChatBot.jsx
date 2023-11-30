import ChatBotContainer  from "@components/ChatBotContainer.jsx"
import KBHeader from "@components/KBHeader";
import {KBChatData0, KBChatData1} from "@components/talk/KBChatData"
import {MotionListWrap, MotionList} from "../components/motion/motionList";
import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet";
import { useSelector } from "react-redux";
// import { useState } from "react";
import { useEffect } from "react";
import PriceKeypadSheet from "@components/bottomSheet/PriceKeypadSheet";

const ExchangeChatBot = () => {
  // const currentTalk = useSelector((state) => state.talk.currentTalk);
  const chatBox = useSelector((state) => state.talk.chatBox);
	
	useEffect(()=> {
		// console.log(chatBox)
	}, [chatBox])

	return (
		<ChatBotContainer>
			<KBHeader />
			<MotionListWrap>
				<MotionList>
					<KBChatData0 />
				</MotionList>
				<MotionList sheetOpen={"환전통화선택"}>
					<KBChatData1 />
				</MotionList>
			</MotionListWrap>
			{chatBox}
			<CurrencySelectSheet />
			<PriceKeypadSheet />
		</ChatBotContainer>
	)
}

export default ExchangeChatBot