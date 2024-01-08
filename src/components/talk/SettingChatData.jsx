import KBTalk from "@components/talk/KBTalk";
import { MotionListWrap } from "@components/motion/motionList";
import UserTalk from "@components/talk/UserTalk";
import FirstExcahgeQ from "@components/talk/FirstExcahgeQ"
import SecondExcahgeQ from "@components/talk/SecondExcahgeQ"
import LastExcahgeQ from "@components/talk/LastExcahgeQ"
import TravelerInsuranceQ from "@components/talk/TravelerInsuranceQ"
import ReceiveAfterExchange from "@components/talk/ReceiveAfterExchange"
import ReceiveTravelerInsurance from "@components/talk/ReceiveTravelerInsurance"

export const SettingChatData = (value, chatCount, price) => {
	var chatData = {
		"KBChat1" : {
			name: "KBChat1",
      element : 
			<MotionListWrap key={"KBChat1-" + chatCount}>
        <UserTalk>USD (미국 달러)</UserTalk>
				{/* <UserTalk>{currency}</UserTalk> */}
				<FirstExcahgeQ />
			</MotionListWrap>
		},
		"KBChat2" : {
			name: "KBChat2",
			element : <MotionListWrap key={"KBChat2-" + chatCount}>
			<UserTalk>지금 환전할게요</UserTalk>
			<ReceiveAfterExchange />
		</MotionListWrap>
		},
		"KBChat3" : {
			name: "KBChat3",
			element : <MotionListWrap key={"KBChat3-" + chatCount}>
					<UserTalk>은행지점에서 받을게요</UserTalk>
					<KBTalk sheetOpen={"PriceKeypadSheet"}>
						<p>환전신청금액을 입력해주세요</p>
					</KBTalk>
				</MotionListWrap>
		},
		"KBChat4" : {
			name: "KBChat4",
			element : <MotionListWrap key={"KBChat4-" + chatCount}>
					<UserTalk>{price}달러</UserTalk>
					<SecondExcahgeQ />
				</MotionListWrap>
		},
		"KBChat5" : {
			name: "KBChat5",
			element : <MotionListWrap key={"KBChat5-" + chatCount}>
					<UserTalk>지금 환전할게요</UserTalk>
					<TravelerInsuranceQ />
				</MotionListWrap>
		},
		"KBChat6" : {
			name: "KBChat6",
			element : <MotionListWrap key={"KBChat6-" + chatCount}>
					<UserTalk>여행자 보험 신청할게요</UserTalk>
					<ReceiveTravelerInsurance />
				</MotionListWrap>
		},
		"KBChat7-1" : {
			name: "KBChat7",
			element : <MotionListWrap key={"KBChat7-1-" + chatCount}>
					<UserTalk>서울역</UserTalk>
					<KBTalk>
						<p>휴대폰 번호 입력</p>
					</KBTalk>
				</MotionListWrap>
		},
		"KBChat7-2" : {
			name: "KBChat7",
			element : 
				<MotionListWrap key={"KBChat7-" + chatCount}>
					<UserTalk>010-123-456</UserTalk>
					<KBTalk sheetOpen={"CurrencyExchangeReason"}>
						<p>환전사유?</p>
					</KBTalk>
				</MotionListWrap>
		},
		"KBChat8-1" : {
			name: "KBChat8",
			element : <MotionListWrap key={"KBChat8-1-" + chatCount}>
					<UserTalk>사유1</UserTalk>
					{/* <UserTalk>{currency}</UserTalk> */}
					<KBTalk>
						<p>출금계좌선택</p>
					</KBTalk>
				</MotionListWrap>
		},
		"KBChat8-2" : {
			name: "KBChat8",
			element : 
				<MotionListWrap key={"KBChat8-2-" + chatCount}>
					<UserTalk>1002-806-625337</UserTalk>
					<LastExcahgeQ />
				</MotionListWrap>
		},
		"KBChat9" : {
			name: "KBChat9",
			element : <MotionListWrap key={"KBChat9-" + chatCount}>
					<UserTalk>원하는 가격일때 알려주세요</UserTalk>
					<KBTalk sheetOpen={"PriceKeypadSheet2"}>
						<p>김국민님이 원하는 환율을 알려주세요</p>
					</KBTalk>
				</MotionListWrap>
		},
	}
	
	return (
		chatData[value]
	)
}