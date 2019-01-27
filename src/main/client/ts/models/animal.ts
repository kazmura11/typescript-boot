export interface Animal {
    // 備考: 小文字系のstring, numberはTypeScript独自の型 大文字はJavaScriptの型
    sex: string;
    age: number;
    greet(): string;
    getClassName(): string;
}
