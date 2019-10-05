export interface Profile {
	displayName: string;
	userId: string;
	pictureUrl: string;
	statusMessage: string;
}

export interface Error {
	code: string;
	message: string;
}

export interface initSuccess {
	language: string;
	context: initContext;
}

export type initContext = {
	type: string;
	viewType: string;
	userId: string;
	utouId?: string;
	roomId?: string;
	groupId?: string;
};

export interface Window {
	liffSettings: {
		userId: string;
		displayName: string;
		pictureUrl: string;
		statusMessage: string;
		accessToken: string;
		language: string;
		type: string;
		utouId: string;
		roomId: string;
		groupId: string;
		viewType: string;
		errorCode: string;
		errorMessage: string;
		auth: string;
	};
}
