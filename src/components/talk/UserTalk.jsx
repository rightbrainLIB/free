import styles from "@styles/components/talk/UserTalk.module.scss"
import { MotionList } from "@components/motion/motionList";

const UserTalk = ({ children, sheetOpen }) => {
	return (
		<MotionList sheetOpen={sheetOpen}>
			<div className={styles.userTalkWrap}>
				<div className={styles.userTalk}>{children}</div>
			</div>
		</MotionList>
	)
}

export default UserTalk