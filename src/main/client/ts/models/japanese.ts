import { Human } from './human';
export class Japanese extends Human {
    public constructor(public sex: string, public age: number) {
        super(sex, age);
    }
    public greet(): string {
        return `こんにちは(${this.age}歳${this.sex === 'male' ? '男' : '女'})`;
    }
}
