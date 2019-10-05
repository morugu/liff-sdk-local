English | [日本語](./README_JA.md)

# liff-sdk-local

[LIFF(LINE Front-end Framework)](https://developers.line.biz/en/docs/liff/overview/) SDK for local debugging.

## Features

-   [liff.init()](https://developers.line.biz/en/reference/liff/#initialize-liff-app)
-   [liff.openWindow()](https://developers.line.biz/en/reference/liff/#open-window)
-   [liff.getAccessToken()](https://developers.line.biz/en/reference/liff/#get-access-token)
-   [liff.getProfile()](https://developers.line.biz/en/reference/liff/#get-profile)
-   [liff.sendMessages()](https://developers.line.biz/en/reference/liff/#send-messages)
-   [liff.closeWindow()](https://developers.line.biz/en/reference/liff/#close-window)
-   [liff.initPlugins()](https://developers.line.biz/en/reference/liff/#liff-initplugins)

## Usage

### Import

Download the [latest release](https://github.com/morugu/liff-sdk-local/releases/latest).

import `dist/liff-sdk-local.min.js` to your project.  
and comment out origin LIFF SDK.

```html
<!-- <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script> -->
<script src="path/to/liff-sdk-local.min.js"></script>
<script>
	liff.init(function(data) {
		// any process
	});
</script>
```

### Customize return values

Use `window.liffSettings` to customize return values.

```html
<script>
	window.liffSettings = {
		userId: 'U12345',
	};
</script>
<!-- <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script> -->
<script src="path/to/liff-sdk-local.min.js"></script>
<script>
	liff.init(function(data) {
		console.log(data.context.userId);
		// output: U12345
	});
</script>
```

following values in available.

-   `userId`
-   `displayName`
-   `pictureUrl`
-   `statusMessage`
-   `accessToken`
-   `language`
-   `type`
-   `utouId`
-   `groupId`
-   `roomId`
-   `viewType`

## Feedback

LINE OpenChat: https://line.me/ti/g2/w1ox606Y6QvsyR7p8xdlog

![](feedback-openchat.png)

## License

[The MIT License](./LICENSE)
