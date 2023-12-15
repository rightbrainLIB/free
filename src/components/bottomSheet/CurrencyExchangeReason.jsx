import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import styles from "@styles/components/bottomSheet/CurrencySelectSheet.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { setChatBox, setCurrentTalk } from "@store/talk.js";
import { Radio } from 'antd';
import { SettingChatData } from "@components/talk/SettingChatData";

const CurrencyExchangeReason = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [reason, setReason] = useState("사유1");
  const currentTalk = useSelector((state) => state.talk.currentTalk);
  const chatCount = useSelector((state) => state.talk.chatCount);

	// 메세지 노출 후 시트 오픈
	useEffect(()=> {
		if(currentTalk === "CurrencyExchangeReason") {
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
		dispatch(setChatBox(SettingChatData("KBChat8-1", chatCount["KBChat8"])))
		setTimeout(function(){
			dispatch(setChatBox(SettingChatData("KBChat8-2", chatCount["KBChat8"])))
		}, 1400)
		setOpen(false)
		dispatch(setCurrentTalk(""))
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