import styles from "@styles/components/talk/KBTalk.module.scss"

const KBTalk = ({ children }) => {
	return (
		<div>
			<div className={styles.KBTalk}>{children}</div>
		</div>
	)
}

export default KBTalk