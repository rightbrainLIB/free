import styles from "@styles/components/ChatBotContainer.module.scss"

const ChatBotContainer = ({ children }) => {
	return (
		<div className={styles.chatBotContainer}>{children}</div>
	)
}

export default ChatBotContainer