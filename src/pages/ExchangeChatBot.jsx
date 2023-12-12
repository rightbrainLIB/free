import ChatBotContainer  from "@components/ChatBotContainer.jsx"
import KBHeader from "@components/KBHeader";
import {KBChatData0, KBChatData1} from "@components/talk/KBChatData"
import {MotionListWrap, MotionList} from "@components/motion/motionList";
import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PriceKeypadSheet from "@components/bottomSheet/PriceKeypadSheet";
import CurrencyExchangeReason from "@components/bottomSheet/CurrencyExchangeReason";
import { useDispatch } from "react-redux";
import { setCurrentTalk } from "@store/talk";

const ExchangeChatBot = () => {
	const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);
	
	useEffect(()=> {
		dispatch(setCurrentTalk(""))
	}, [])

	return (
		<>
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
			</ChatBotContainer>
			<CurrencySelectSheet />
			<PriceKeypadSheet />
			<CurrencyExchangeReason />
		</>
	)
}

export default ExchangeChatBot