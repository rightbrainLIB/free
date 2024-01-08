import styles from "@styles/components/KBHeader.module.scss"
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import { setCurrentSheet, setPriceValue, setResetChatBox } from "@store/talk";
import { useDispatch } from "react-redux";

const KBHeader = () => {
	const navigate = useNavigate ();
	const dispatch = useDispatch();

  const clickBack = useCallback(() => {
    navigate(-1);
		dispatch(setPriceValue(null))
		dispatch(setCurrentSheet(""))
		dispatch(setResetChatBox())
  }, [navigate]);

	return (
		<header className={styles.header}>
			<div className={styles.hdInner}>
				<button type="button" className={styles.backBtn} onClick={clickBack}>뒤로가기</button>
				KBHeader
			</div>
		</header>
	)
}

export default KBHeader