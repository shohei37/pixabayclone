#　タイトル：pixabay APIを活用した画像検索サイト

#　活用したもの
　
 フレームワーク
 ・react.js
 
 ライブラリー
 
 API
 
 ・pixabay API(https://pixabay.com/api/docs/)
 
 画像パス：largeImageURLから取得
 
 q=**yellow+flowers**&image
 
 太文字のところをinputに打ち込むと検索できるようにできるようにする
 
 文字列の箱　[inputText,setInputText]
 
 
 
 # メモ
 
 inputタグのplaceholder
 inputboxの中に文字を記載しておける　例：氏名記載など
 
 display: grid; 子要素を格子状に並べる
 
 （今回の記載コード）
    display: grid;
    grid-template-columns: 130px 130px 130px;
    grid-gap: 160px;
    
 useStateのhooks(https://qiita.com/seira/items/f063e262b1d57d7e78b4)
 
 useState()
 
 hooksとは
 
 （https://spice-factory.co.jp/development/react-hooks/#:~:text=%E3%83%95%E3%83%83%E3%82%AF%20(hook)%20%E3%81%AF%20React%2016.8,%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E9%96%A2%E6%95%B0%E3%81%A7%E3%81%99%E3%80%82）
 
 refとuseRef
 
 データフェッチング
 
 




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
