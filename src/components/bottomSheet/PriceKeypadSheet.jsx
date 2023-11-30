import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import cx from "classnames";
import { Input, Button, Drawer } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPriceValue, setChatBox } from "@store/talk"
import { MotionListWrap, MotionList } from "@components/motion/motionList";
import { KBChatData5 } from "@components/talk/KBChatData";
import UserTalk from "@components/talk/UserTalk";
import iconDelete from "@imgs/ico_delete.svg";
import styles from "@styles/components/bottomSheet/PriceKeypadSheet.module.scss"

const PriceKeypadSheet = () => {
	const dispatch = useDispatch();
	const [priceNum, setPriceNum] = useState(null);
	const [open, setOpen] = useState(false);
	const keyboardRef = useRef(null);
  const accountNumRef = useRef(null);
  const currentTalk = useSelector((state) => state.talk.currentTalk);
  const chatBox = useSelector((state) => state.talk.chatBox);
	
	// 메세지 노출 후 시트 오픈
	useEffect(()=> {
		if(currentTalk === "원하는환률입력") {
			setOpen(true)
		}
		if(currentTalk === "환전신청금액입력") {
			setOpen(true)
		}
	}, [currentTalk])

	// 숫자 키패드 입력시 값 변환
	const onChangeKeypad = useCallback((input) => {
		setPriceNum(input);
	}, [priceNum]);

	// 확인 버튼 클릭
	const confirmClick = () => {
		setOpen(false)
		dispatch(setPriceValue(priceNum))
		dispatch(setChatBox(
			<MotionListWrap key={chatBox.length}>
				<MotionList>
					<UserTalk>{priceNum}달러</UserTalk>
				</MotionList>
				<MotionList>
					<KBChatData5 />
				</MotionList>
			</MotionListWrap>
		))
    keyboardRef.current.clearInput();
		setPriceNum(null)
	}

	return (
		<Drawer
        rootClassName={styles.keyboardDrawer}
        placement={"bottom"}
        footer={
          <Button
            className={cx(
              styles.change,
              // priceNum >= 6 ? styles.active : ""
            )}
            disabled={priceNum < 1000}
            block
            onClick={confirmClick}
          >
            확인
          </Button>
        }
        open={open}
        closeIcon={false}
        mask={false}
        height={348}
      >
        <div className={styles.drawerContainer}>
					<Input
						ref={accountNumRef}
						value={priceNum}
						placeholder={"최소 USD 1000원"}
						inputMode="none"
					/>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={{ default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"] }}
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            display={{ "{bksp}": `<img src="${iconDelete}" alt="" />` }}
            onChange={(e) => onChangeKeypad(e)}
            baseClass={`${styles.customKeypad}`}
          />
        </div>
      </Drawer>
	)
}

export default PriceKeypadSheet