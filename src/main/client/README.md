## ビルド方法
### Windowsでのビルドの場合
node-gypが入れるモジュールによっては必要になるため、
python 2.7とC++系のツールを入れる    
次のコマンドでインストールする  
```
npm install --global windows-build-tools
```

本番ビルド
```
npm run build
```
開発用ビルド
```
npm run build-dev
```
開発ビルド(変更検知)
```
npm run watch
```
クリーン(resources/static/配下を削除)
```
npm run clean
```
DevServerでの動作確認(パス周りが現状の設定ではどうにもならないのでサポートせず)
```
npm run start
```

## 代表的な依存モジュール
- date-fns
- JQuery
- JQuery UI
- popper.js
- JQuery cookie
- Bootstrap

### 開発支援系
- Babel
- TypeScript
- clean-webpack-plugin
- css-loader
- style-loader
- file-loader
- source-map-loader
- url-loader
- webpack
- webpack-bundle-analyzer
- webpack-merge

### 本来は必要がないもの
- html-loader
- html-webpack-plugin
- webpack-dev-server

なおBabelを入れているのはIE対応等でpolyfillするため  
polyfillしないとIEでPromiseやES6のArray.prototype系のメソッドが使えない  
momentでなくてdate-fnsにしているのはバンドルサイズの肥大化を避けるためである  

webpack-dev-serverはSpring BootのようなWeb側がなくても  
独立して開発できるようにしようとしたものだが、  
SPAを前提としていないこともあり、画像/CSSのパス等の調整に難があり、  
それを妥協してもいいなら一応使えるようにはなっている。

### 開発方法
従来型のMPAで作成する。
エントリーポイントはSpring Bootのディレクトリ構成と対にし、index.tsを作成する  
ここで必要なJQuery, Bootstrap等を読み込み、controllerを読み込む。  
その際、webpack.common.jsにentryを追加する

なお、importするモジュールは次のように分けられたディレクトリのいずれかに配置する
- commons
  共通系のclass, functionを置く
- controllers
  Spring BootのController相当のclassを置く
- models
  Spring BootのEntity相当のclassを置く
- services
  APIアクセスを記述する  
  $.Deferredを返すようにする(ほぼPromiseベース)

なお、index.js自体にはonclick, $(document).ready()相当の処理しか書かず、  
あとはcontrollerに任せる

### その他
`npm run build-dev`, `npm run watch`したときにeclipse側で変更が読み取れないので、  
面倒だが、都度static配下をrefreshする

### TypeScriptについて
tsconfig.jsonについて  
`target`はトランスパイルした結果のバージョンのこと。  
ECMAScriptのバージョンでES2015(ES6)にしている。  
ES5にまで一気に落とせるのだが、これはなぜかというと、あとでBabelでpolyfillするためである。
`module`はコード生成モジュールのことでimportの挙動に影響を与える。  
ひとまずES2015とする。

その他については[ここ](
https://azriton.github.io/2017/09/10/TypeScript%E3%81%AEtsconfig.json%E3%82%92%E8%80%83%E3%81%88%E3%82%8B-%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%83%BB%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E7%B7%A8/)

### Webpack関連

#### 基礎知識編
Webpackはビルドツールであるが、gulpと違い、コードでタスクを書くようなことはできない。
基本は`entry`でエントリーポイントを決め、  
`output`で出力先を決める
MPAの構成にしたい場合は、gulpでないとできなそうだが、webpackで可能である。
`entry`を複数にして`output`の`filename`にて`[name].js`とすると  
`entry`の`key`の値(=PATH)がそのまま出力先になる（ディレクトリ階層のあるPATHであればそれもそのまま作成される）  
なお、`output`のPublicPathは`webpack-dev-server`などを使ったときに、
サーバの公開先のrootのパスになる。

`__dirname`について  
これはnodeの変数で、現在コマンドを動かしているディレクトリになる。  
絶対パスで指定しないとダメな場合に活用できる。  

### babel-loaderについて
JavaScriptをトランスパイルするもの。
babel-loaderの7からTypeScriptもトランスパイル可能。

### source-map-loaderについて
source-mapを作成するもの。
これはデバッグ実行したときにトランスパイル済みコードではデバッグが厳しいので、トランスパイル前のコードを表示してくれるもの

### CSS関連
`style-loader`はスタイルシートをJSから`link`タグに展開してhtml内に注入してくれるもの
`css-loader`はCSSをバンドルするための機能

### 画像関連
`file-loader`はビルド・バンドルしたものが参照している画像等を適切な場所に配置してくれるもの。
フロントだけの開発の場合はPATHがなかなか合わず、dev-serverと組み合わせないとうまくいかない。
`url-loader`というのもあり、こちらは画像/CSSをbase64にして埋め込んでくれて、  
これによりURLやPATHを気にしなくてよくなるが、ファイルサイズが肥大化するというデメリットがある。

### resolveについて
`resolve`で指定した拡張子はimport時に拡張子が不要となる。  
通常は`js`と`ts`だけで良いと思われる。  
Reactな人は`jsx`とかもあったほうが良い。  
もちろん`css`とかも指定可能。

### appendix
https://qiita.com/d-dai/items/23410fa7d84fb1020ea8


