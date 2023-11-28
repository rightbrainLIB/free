import styles from "@styles/components/KBContainer.module.scss"

const KBContainer = ({ children }) => {
	return (
		<div className={styles.KBContainer}>{children}</div>
	)
}

export default KBContainer