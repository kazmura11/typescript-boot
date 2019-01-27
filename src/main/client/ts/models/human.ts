import { Animal } from './animal';
export class Human implements Animal {
    public constructor(public sex: string, public age: number) { }
    public greet(): string {
        return `hello(${this.age} years old ${this.sex})`;
    }
    public getClassName(): string {
        return this.constructor.name;
    }
}
