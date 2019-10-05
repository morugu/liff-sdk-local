[English](./README.md) | 日本語

# liff-sdk-local

ローカル環境で動作する開発用 [LIFF(LINE Front-end Framework)](https://developers.line.biz/ja/docs/liff/overview/) SDK です。

## 対応機能

-   [liff.init()](https://developers.line.biz/ja/reference/liff/#initialize-liff-app)
-   [liff.openWindow()](https://developers.line.biz/ja/reference/liff/#open-window)
-   [liff.getAccessToken()](https://developers.line.biz/ja/reference/liff/#get-access-token)
-   [liff.getProfile()](https://developers.line.biz/ja/reference/liff/#get-profile)
-   [liff.sendMessages()](https://developers.line.biz/ja/reference/liff/#send-messages)
-   [liff.closeWindow()](https://developers.line.biz/ja/reference/liff/#close-window)
-   [liff.initPlugins()](https://developers.line.biz/ja/reference/liff/#liff-initplugins)

## 使い方

### プロジェクトへの導入

[最新版のファイル](https://github.com/morugu/liff-sdk-local/releases/latest)をダウンロードしてください。

`dist/liff-sdk-local.min.js` をプロジェクトに追加し、本家の LIFF SDK をコメントアウトしてください。

```html
<!-- <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script> -->
<script src="path/to/liff-sdk-local.min.js"></script>
<script>
	liff.init(function(data) {
		// 処理...
	});
</script>
```

### 任意の戻り値を設定する

`window.liffSettings` に値を設定すると、設定した値が返るようになります。

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
		// 出力: U12345
	});
</script>
```

設定可能な値は以下です。

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

## 質問など

LINE OpenChat: https://line.me/ti/g2/w1ox606Y6QvsyR7p8xdlog

![](feedback-openchat.png)

## ライセンス

[The MIT License](./LICENSE)
