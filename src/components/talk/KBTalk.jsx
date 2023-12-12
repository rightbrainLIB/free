import styles from "@styles/components/talk/KBTalk.module.scss"
import { Button } from "antd"

const KBTalk = ({ children, moreView }) => {
	return (
		<div className={styles.KBTalkWrap}>
			<div className={styles.KBTalk}>{children}</div>
			{
				moreView && <Button className={styles.moreViewBtn}>{ moreView }</Button>
			}
		</div>
	)
}

export default KBTalk