import styles from "@styles/components/talk/KBTalk.module.scss"
import { Button } from "antd"
import { MotionList } from "@components/motion/motionList";

const KBTalk = ({ children, moreView, sheetOpen }) => {
	return (
		<MotionList sheetOpen={sheetOpen}>
			<div className={styles.KBTalkWrap}>
				<div className={styles.KBTalk}>{children}</div>
				{
					moreView && <Button className={styles.moreViewBtn}>{ moreView }</Button>
				}
			</div>
		</MotionList>
	)
}

export default KBTalk