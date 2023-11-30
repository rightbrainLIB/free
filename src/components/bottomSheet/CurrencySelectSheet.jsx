import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import styles from "@styles/components/bottomSheet/CurrencySelectSheet.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { setChatBox } from "@store/talk.js";
import {MotionListWrap, MotionList} from "@components/motion/motionList";
import { KBChatData2 } from "@components/talk/KBChatData";
import { Radio } from 'antd';
import UserTalk from "@components/talk/UserTalk";

const CurrencySelectSheet = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [currency, setCurrency] = useState("USD (미국 달러)");
  const currentTalk = useSelector((state) => state.talk.currentTalk);
  const chatBox = useSelector((state) => state.talk.chatBox);
	
	// 메세지 노출 후 시트 오픈
	useEffect(()=> {
		if(currentTalk === "환전통화선택") {
			setOpen(true)
		}
	}, [currentTalk])

	// 통화값 저장
  const onCurrencyChange = (e) => {
    // console.log('setCurrency', e.target.value);
    setCurrency(e.target.value);
  };

	// 시트 닫기
	const closeSheet = () => {
		setOpen(false)
	}
	
	// 확인버튼 클릭시 닫은 후 다음 메세지 노출
	const confirmSheet = () => {
		dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>USD (미국 달러)</UserTalk>
					{/* <UserTalk>{currency}</UserTalk> */}
				</MotionList>
				<MotionList>
					<KBChatData2 />
				</MotionList>
			</MotionListWrap>
		))
		setOpen(false)
	}

	return (
		<Drawer
			open={open}
			onClose={closeSheet}
			title={"CurrencySelectSheet"}
			placement={"bottom"}
			key={"CurrencySelectSheet"}
			footer={
				<Button
					className={styles.confirmBtn}
					onClick={confirmSheet}
				>
					확인
				</Button>
			}
		>
			<Radio.Group onChange={onCurrencyChange} value={currency}>
				<Radio value={"USD (미국 달러)"}>USD (미국 달러)</Radio>
				<Radio value={"JPY (일본 엔)"}>JPY (일본 엔)</Radio>
				<Radio value={"EUR (유럽연합 유로)"}>EUR (유럽연합 유로)</Radio>
				<Radio value={"CNY (중국 위안)"}>CNY (중국 위안)</Radio>
			</Radio.Group>
		</Drawer>
	)
}

export default CurrencySelectSheet