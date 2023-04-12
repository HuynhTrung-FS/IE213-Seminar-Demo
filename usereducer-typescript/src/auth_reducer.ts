type User = {
	id: string;
	username: string;
};

export type AuthState = {
	success: boolean;
	user: User | null;
	error: string;
};

export type AuthAction = {
	type: "success" | "failure";
	value: User | string;
};

export function authReducer(state: AuthState, action: AuthAction) {
	switch (action.type) {
		case "success":
			return { success: true, user: action.value as User, error: "" };
		case "failure":
			return { success: false, user: null, error: action.value as string };
		default:
			throw Error();
	}
}

// export type AuthAction =
// 	| {
// 			type: "success";
// 			value: User;
// 	  }
// 	| {
// 			type: "failure";
// 			value: string;
// 	  };

export const authState: AuthState = {
	success: false,
	user: null,
	error: "",
};
