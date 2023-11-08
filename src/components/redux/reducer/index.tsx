import { State, Action } from "../actions/index";

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "SET_COUNT":
			return {
				...state,
				count: action.count, // count가 자동완성되며, number 타입인걸 알 수 있습니다.
			};
		case "SET_TEXT":
			return {
				...state,
				text: action.text, // text가 자동완성되며, string 타입인걸 알 수 있습니다.
			};
		case "SET_COLOR":
			return {
				...state,
				color: action.color, // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
			};
		case "TOGGLE_GOOD":
			return {
				...state,
				isGood: !state.isGood,
			};
		default:
			throw new Error("Unhandled action");
	}
}
