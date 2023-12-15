import styles from "@styles/components/buttons/TalkSelectButton.module.scss";

const TalkSelectButton = ({children, onClick, data, value}) => {
	return (
		<button type="button" aria-label={data} value={value} onClick={onClick} className={styles.talkSelectButton}>{children}</button>
	)
}

export default TalkSelectButton