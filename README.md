### これはなに？
Spring BootのThymeleafとWebpackとTypeScriptで
SPAではなくMPAでプロジェクトを作る雛形です。
従来型のサーバサイドでレンダリングして(Node.jsの機能を使ったガチなSSRではない)、  
かつ、JQueryUIを使って画面を作りたい。  
という場合に、TypeScript使いたいなーという個人的な要望で作ったものです。  
あとバンドルしたいとか。
CSSをすべてJavaScript側に寄せるのも考えたけどこの辺の切り分けが微妙です…。

### ライセンス関連
#### Bootstrapのレイアウト  
https://glacial-webwork.com/2018/05/31/bootstrap4_beginer/  
ぶーさんの
サンプルを少し改変しています

#### 画像
https://cg.foto.ne.jp/

### 動作環境について
- Spring Boot2
- Java8
を想定しています  
  
spring bootを起動したらroot/rootでログインできます。

### フロントエンド回りについて
src/main/client配下のREADME.mdに記載しています

### 若干つらいところ
フロントエンドのビルドをすると  
eclipseとVS Code併用で開発している場合、  
eclipse側からstatic配下をreloadしないといけいないです。  
もしくはサーバ再起動です。

※eclipseの
`Preferences > General > Workspace > Reflesh using native hooks or polling`
をすれば即時反映されそうです。
