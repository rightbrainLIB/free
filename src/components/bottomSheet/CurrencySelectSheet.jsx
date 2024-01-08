import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import styles from "@styles/components/bottomSheet/CurrencySelectSheet.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { setChatBox } from "@store/talk.js";
import { Radio } from 'antd';
import {SettingChatData} from "@components/talk/SettingChatData";

const CurrencySelectSheet = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [currency, setCurrency] = useState("USD (미국 달러)");
  const currentSheet = useSelector((state) => state.talk.currentSheet);
  const chatCount = useSelector((state) => state.talk.chatCount);
	// 메세지 노출 후 시트 오픈
	useEffect(()=> {
		if(currentSheet === "CurrencySelectSheet") {
			setOpen(true)
		}
	}, [currentSheet])

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
		dispatch(setChatBox(SettingChatData("KBChat1", chatCount)));
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