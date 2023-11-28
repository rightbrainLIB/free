import { Link } from "react-router-dom";
import KBHeader from "@components/KBHeader";
import KBContainer from "@components/KBContainer";

const ExchangeMain = () => {
	return (
		<KBContainer>
			<KBHeader />
			Main<br />
      <Link to="/ExchangeChatBot">환전 대화로 신청하기</Link>
		</KBContainer>
	)
}

export default ExchangeMain