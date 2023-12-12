import TalkSelectButton from "../buttons/TalkSelectButton"
import KBTalk from "./KBTalk"
import { useSelector, useDispatch } from "react-redux";
import { setChatBox } from "@store/talk.js";
import {MotionListWrap, MotionList} from "@components/motion/motionList";
import UserTalk from "@components/talk/UserTalk";

const KBChatData0 = () => { 
  return (
    <KBTalk>
      <p>안녕하세요. 김국민님!</p>
    </KBTalk>
  )
}

const KBChatData1 = () => {
  return (
    <KBTalk>
      <p>환전하실 통화 선택해주세요.</p>
    </KBTalk>
  )
}

const KBChatData2 = () => {
  const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);

  // 지금 환전
  const nowExc = () => {
    dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>지금 환전할게요</UserTalk>
				</MotionList>
				<MotionList>
					<KBChatData3 />
				</MotionList>
			</MotionListWrap>
		))
  }
  // 원하는 가격일때 알려주세요
  const afterExc = () => {
    dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>원하는 가격일때 알려주세요</UserTalk>
				</MotionList>
				<MotionList sheetOpen={"원하는환률입력"}>
					<KBChatData12 />
				</MotionList>
			</MotionListWrap>
		))
  }

  return (
    <KBTalk>
      <p>지금 가격으로 환전하시겠어요?</p>
      <TalkSelectButton onClick={nowExc}>지금환전</TalkSelectButton>
      <TalkSelectButton onClick={afterExc}>원하는 가격일때 알려주세요</TalkSelectButton>
    </KBTalk>
  )
}

const KBChatData3 = () => {
  const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);

  const bankExc = () => {
    dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>은행지점에서 받을게요</UserTalk>
				</MotionList>
				<MotionList sheetOpen={"환전신청금액입력"}>
					<KBChatData4 />
				</MotionList>
			</MotionListWrap>
		))
  }
  return (
    <KBTalk>
      <p>환전 후 수령방법</p>
      <TalkSelectButton onClick={bankExc}>은행</TalkSelectButton>
      <TalkSelectButton>외환ATM</TalkSelectButton>
      <TalkSelectButton>우편</TalkSelectButton>
      <TalkSelectButton>친구</TalkSelectButton>
      <TalkSelectButton>외환통장</TalkSelectButton>
    </KBTalk>
  )
}

const KBChatData4 = () => {
  return (
    <KBTalk>
      <p>환전신청금액을 입력해주세요</p>
    </KBTalk>
  )
}

const KBChatData5 = () => {
  const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);

  // 지금 환전
  const nowExc = () => {
    dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>지금 환전할게요</UserTalk>
				</MotionList>
				<MotionList>
					<KBChatData6 />
				</MotionList>
			</MotionListWrap>
		))
  }
  return (
    <KBTalk>
      <p>환전하시겠어요?</p>
      <TalkSelectButton onClick={nowExc}>지금 환전할게요</TalkSelectButton>
      <TalkSelectButton>환전금액 수정</TalkSelectButton>
    </KBTalk>
  )
}

const KBChatData6 = () => {
  const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);

  // 여행자 보험신청
  const insurance = () => {
    dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>여행자 보험 신청할게요</UserTalk>
				</MotionList>
				<MotionList>
					<KBChatData7 />
				</MotionList>
			</MotionListWrap>
		))
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

const KBChatData7 = () => {
  const dispatch = useDispatch();
  const chatBox = useSelector((state) => state.talk.chatBox);

  // 여행자 보험신청
  const seoulStation = () => {
    const chatArray = [
    <MotionListWrap key={chatBox.length}>
      <MotionList>
        <UserTalk>서울역</UserTalk>
      </MotionList>
      <MotionList>
        <KBChatData8 />
      </MotionList>
    </MotionListWrap>, 
    <MotionListWrap key={chatBox.length}>
      <MotionList>
        <UserTalk>010-123-456</UserTalk>
      </MotionList>
      <MotionList sheetOpen={"환전사유선택"}>
        <KBChatData9 />
      </MotionList>
    </MotionListWrap>]

    chatArray.forEach((payload, i) => {
      setTimeout(function(){
        dispatch(setChatBox(payload))
      }, i * 1400)
    })
  }

  return (
    <KBTalk>
      <p>어느지점에서 수령?</p>
      <TalkSelectButton onClick={seoulStation}>서울역</TalkSelectButton>
      <TalkSelectButton>홍대입구역</TalkSelectButton>
      <TalkSelectButton>일반지점 검색</TalkSelectButton>
    </KBTalk>
  )
}

const KBChatData8 = () => {
  return (
    <KBTalk>
      <p>휴대폰 번호 입력</p>
    </KBTalk>
  )
}

const KBChatData9 = () => {
  return (
    <KBTalk>
      <p>환전사유?</p>
    </KBTalk>
  )
}

const KBChatData10 = () => {
  return (
    <KBTalk>
      <p>출금계좌선택</p>
    </KBTalk>
  )
}

const KBChatData11 = () => {
  return (
    <KBTalk>
      <p>USD10 환전신청 하시겠습니까?</p>
      <TalkSelectButton>조건수정하기</TalkSelectButton>
      <TalkSelectButton>환전하기</TalkSelectButton>
    </KBTalk>
  )
}

const KBChatData12 = () => {
  return (
    <KBTalk>
      <p>김국민님이 원하는 환율을 알려주세요</p>
    </KBTalk>
  )
}

export {KBChatData0, KBChatData1, KBChatData2, KBChatData3, KBChatData4, KBChatData5, KBChatData6, KBChatData7, KBChatData8, KBChatData9, KBChatData10, KBChatData11, KBChatData12}

