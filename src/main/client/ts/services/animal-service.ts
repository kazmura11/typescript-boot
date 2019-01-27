// 本来ここに置くのはAPIアクセスを想定
import { Animal } from '../models/animal';
import { Human } from '../models/human';
import { Japanese } from '../models/japanese';

export class AnimalService {
    public getAnimals(): Animal[] {
        return [
            new Human('male', 14),
            new Japanese('male', 26),
            new Human('male', 34),
            new Japanese('female', 44),
            new Japanese('female', 19),
            new Japanese('male', 12),
            new Japanese('female', 10),
        ];
    }
}