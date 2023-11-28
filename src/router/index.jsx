import { createBrowserRouter } from "react-router-dom";
import ExchangeMain from "../pages/ExchangeMain";
import ExchangeChatBot from "../pages/ExchangeChatBot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExchangeMain />,
  },
	{
    path: "/ExchangeChatBot",
    element: <ExchangeChatBot />,
  },
]);

export default router;
