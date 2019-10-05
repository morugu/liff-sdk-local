import * as Type from './type';
import { Default, Key, ContextType } from './config';

declare var window: Type.Window;

const init = (success: (successCallback: Type.initSuccess) => void, error: (errorCallback: Type.Error) => void) => {
	const initContext: Type.initContext = getInitContext(getSetting(Key.Type));
	const initSuccess: Type.initSuccess = {
		language: getSetting(Key.Language),
		context: initContext,
	};
	success(initSuccess);
};

const getInitContext = (type: string): Type.initContext => {
	const initContext: Type.initContext = {
		type: getSetting(Key.Type),
		viewType: getSetting(Key.ViewType),
		userId: getSetting(Key.UserId),
	};

	switch (type) {
		case ContextType.Room:
			initContext.roomId = getSetting(Key.RoomId);
			break;
		case ContextType.Group:
			initContext.groupId = getSetting(Key.GroupId);
			break;
		case ContextType.Utou:
		case ContextType.None:
		default:
			break;
	}

	return initContext;
};

const openWindow = () => {
	console.log(`liff.openWindow`);
};

const closeWindow = () => {
	console.log('liff.closeWindow');
};

const getAccessToken = () => {
	return getSetting(Key.AccessToken);
};

const getProfile = (): Promise<Type.Profile> => {
	return new Promise<Type.Profile>((resolve) => {
		const profile: Type.Profile = {
			userId: getSetting(Key.UserId),
			displayName: getSetting(Key.DisplayName),
			pictureUrl: getSetting(Key.PictureUrl),
			statusMessage: getSetting(Key.StatusMessage),
		};
		resolve(profile);
	});
};

const sendMessages = (messages: [any]) => {
	console.log('liff.sendMessages');
	messages.map((m) => console.log(JSON.stringify(m)));
};

const initPlugins = (pluginNames: [any]): Promise<void> => {
	return new Promise<void>((resolve) => {
		console.log('liff.initPlugins');
		pluginNames.map((p) => console.log(p));
		resolve();
	});
};

const getSetting = (key: string): string => {
	const lc = `${key.slice(0, 1).toLowerCase()}${key.slice(1)}`;
	if (window.liffSettings && window.liffSettings[lc]) {
		return window.liffSettings[lc];
	}
	return Default[key];
};

export { init, openWindow, closeWindow, getAccessToken, getProfile, sendMessages, initPlugins };
