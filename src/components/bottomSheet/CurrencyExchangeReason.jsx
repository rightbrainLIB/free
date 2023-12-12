import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import styles from "@styles/components/bottomSheet/CurrencySelectSheet.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { setChatBox } from "@store/talk.js";
import {MotionListWrap, MotionList} from "@components/motion/motionList";
import { KBChatData10, KBChatData11 } from "@components/talk/KBChatData";
import { Radio } from 'antd';
import UserTalk from "@components/talk/UserTalk";

const CurrencyExchangeReason = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [reason, setReason] = useState("사유1");
  const currentTalk = useSelector((state) => state.talk.currentTalk);
  const chatBox = useSelector((state) => state.talk.chatBox);
	
	// 메세지 노출 후 시트 오픈
	useEffect(()=> {
		if(currentTalk === "환전사유선택") {
			setOpen(true)
		}
	}, [currentTalk])

	// 사유 저장
  const onReasonChange = (e) => {
    // console.log('setReason', e.target.value);
    setReason(e.target.value);
  };

	// 시트 닫기
	const closeSheet = () => {
		setOpen(false)
	}
	
	// 확인버튼 클릭시 닫은 후 다음 메세지 노출
	const confirmSheet = () => {
		const chatArray = [
				<MotionListWrap key={chatBox.length}>
					<MotionList>
						<UserTalk>사유1</UserTalk>
						{/* <UserTalk>{currency}</UserTalk> */}
					</MotionList>
					<MotionList>
						<KBChatData10 />
					</MotionList>
				</MotionListWrap>,
				<MotionListWrap key={chatBox.length}>
					<MotionList>
						<UserTalk>1002-806-625337</UserTalk>
					</MotionList>
					<MotionList>
						<KBChatData11 />
					</MotionList>
				</MotionListWrap>
			]

    chatArray.forEach((payload, i) => {
      setTimeout(function(){
        dispatch(setChatBox(payload))
      }, i * 1400)
    })
		setOpen(false)
	}

	return (
		<Drawer
			open={open}
			onClose={closeSheet}
			title={"CurrencyExchangeReason"}
			placement={"bottom"}
			key={"CurrencyExchangeReason"}
			footer={
				<Button
					className={styles.confirmBtn}
					onClick={confirmSheet}
				>
					확인
				</Button>
			}
		>
			<Radio.Group onChange={onReasonChange} value={reason}>
				<Radio value={"사유1"}>사유1</Radio>
				<Radio value={"사유2"}>사유2</Radio>
				<Radio value={"사유3"}>사유3</Radio>
				<Radio value={"사유4"}>사유4</Radio>
			</Radio.Group>
		</Drawer>
	)
}

export default CurrencyExchangeReason