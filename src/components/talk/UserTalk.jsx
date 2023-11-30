import styles from "@styles/components/talk/UserTalk.module.scss"

const UserTalk = ({ children }) => {
	return (
		<div className={styles.userTalkWrap}>
			<div className={styles.userTalk}>{children}</div>
		</div>
	)
}

export default UserTalk