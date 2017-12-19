# PaPago-Menubar 

**파파고 모바일웹을 MacOS Menu에서 바로 보려고 만든 개인 프로젝트 입니다.**

영어가 안되는 저는 매번 영어로 된 문서를 읽거나, 영어로 문장을 만들려할때
항상 브라우저를 열고 번역기를 찾아 사용하는 일이 잦습니다.
이러한 계속되는 반복을 참지 못한 저는 네이버에서 서비스하는 PaPago를 제 Mac의 Menubar에
올리기로 마음먹었습니다.


## To Use

해당 [링크](https://github.com/Nalrarang/papago-menubar/releases/download/v1.0.0/Papago.zip)를 눌러 파일을 다운 받고 MacOS에서 실행시키시면 됩니다.

## Development

Nodejs 및 Npm 설치 후,
```bash
# Install Electron
npm install -g electron
# Run Dev
npm start
```

또한, 단순히 webview를 창 위에 띄운것이기 때문에 조금만 손을 보면,
PaPago가 아닌 구글과 같은 다른 사이트들도 아래와 같은 방식으로 사용할 수 있습니다.

```javascript
//index.html
webview.loadURL('https://translate.google.co.kr/?hl=ko');
```

## Build

```
npm build or electron-packager .
```
**builds/Papago-darwin-x64** 폴더로 Build됩니다.

## Reference
다음  Repository를 참조했습니다.
- [MenuTube](https://github.com/edanchenkov/MenuTube)
- [menubar](https://github.com/maxogden/menubar)