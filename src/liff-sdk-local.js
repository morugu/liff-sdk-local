const defaultSettings = {
	userId: 'U4af4980629...',
	displayName: 'Brown',
	pictureUrl: 'https://example.com/abcdefghijklmn',
	statusMessage: 'Hello, LINE!',
	accessToken: '',
	language: 'ja-JP',
	type: 'utou',
	utouId: 'U4af4980629...',
	roomId: 'Rb02b16...',
	groupId: 'Ca5637c...',
	viewType: 'full',
	errorCode: 'INIT_FAILED',
	errorMessage: 'Failed to init LIFF SDK',
	auth: true,
};

const init = (cb) => {
	cb(
		{
			language: getSetting('language'),
			context: {
				type: getSetting('type'),
				viewType: getSetting('viewType'),
				userId: getSetting('userId'),
				utouId: getSetting('utouId'),
				roomId: getSetting('roomId'),
				groupId: getSetting('groupId'),
			},
		},
		{
			code: getSetting('errorCode'),
			message: getSetting('errorMessage'),
		}
	);
};

const openWindow = (params) => {
	console.log(`liff.openWindow url: ${params.url}, external: ${params.external}`);
};

const closeWindow = () => {
	console.log('liff.closeWindow');
};

const getAccessToken = () => {
	return getSetting('accessToken');
};

const getProfile = () => {
	return new Promise((resolve) => {
		resolve({
			userId: getSetting('userId'),
			displayName: getSetting('displayName'),
			pictureUrl: getSetting('pictureUrl'),
			statusMessage: getSetting('statusMessage'),
		});
	});
};

const sendMessages = (messages) => {
	console.log(`liff.sendMessages ${messages.map((m) => console.log(JSON.stringify(m)))}`);
};

const initPlugins = (pluginNames) => {
	console.log(`liff.initPlugin ${pluginNames.map((p) => console.log(p))}`);
};

const getSetting = (key) => {
	if (window.liffSettings && window.liffSettings[key]) {
		return window.liffSettings[key];
	}
	if (defaultSettings[key]) {
		return defaultSettings[key];
	}
	return;
};

const liff = {
	init,
	openWindow,
	closeWindow,
	getAccessToken,
	getProfile,
	sendMessages,
	initPlugins,
	auth: getSetting('auth'),
};

exports = liff;
