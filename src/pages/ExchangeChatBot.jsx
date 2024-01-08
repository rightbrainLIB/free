import ChatBotContainer  from "@components/ChatBotContainer.jsx"
import KBHeader from "@components/KBHeader";
import KBTalk from "@components/talk/KBTalk";
import {MotionListWrap} from "@components/motion/motionList";
import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PriceKeypadSheet from "@components/bottomSheet/PriceKeypadSheet";
import CurrencyExchangeReason from "@components/bottomSheet/CurrencyExchangeReason";
import { useDispatch } from "react-redux";
import { setCurrentSheet } from "@store/talk";

const ExchangeChatBot = () => {
	const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);

	useEffect(()=> {
		dispatch(setCurrentSheet(""))
	}, [])

	return (
		<>
			<ChatBotContainer>
				<KBHeader />
				<MotionListWrap>
					<KBTalk>
						<p>안녕하세요. 김국민님!</p>
					</KBTalk>
					<KBTalk sheetOpen={"CurrencySelectSheet"}>
						<p>환전하실 통화 선택해주세요.</p>
					</KBTalk>
				</MotionListWrap>
				{
					chatBox.map(item => {
						return (
							item.element
						)
					})
				}
			</ChatBotContainer>
			<CurrencySelectSheet />
			<PriceKeypadSheet />
			<CurrencyExchangeReason />
		</>
	)
}

export default ExchangeChatBot