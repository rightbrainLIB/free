import styles from "@styles/components/KBHeader.module.scss"
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

const KBHeader = () => {
	const navigate = useNavigate ();

  const clickBack = useCallback(() => {
    navigate(-1);
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