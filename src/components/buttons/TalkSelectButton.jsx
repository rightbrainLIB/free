import styles from "@styles/components/buttons/TalkSelectButton.module.scss";

const TalkSelectButton = ({children, onClick}) => {
	return (
		<button type="button" onClick={onClick} className={styles.talkSelectButton}>{children}</button>
	)
}

export default TalkSelectButton