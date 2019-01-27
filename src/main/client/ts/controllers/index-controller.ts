import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal-service';
import { SampleService } from '../services/sample-service';

// なんかこのクラスControllerというよりService感が出てるがまぁいいか…
export class IndexController {
    private animals: Animal[];
    public constructor() {
        this.animals = new AnimalService().getAnimals();
    }

    public getAdultAnimals(): string[] {
        return this.animals.filter((x: Animal) => x.age >= 20).map((a: Animal) => {
            return `種別: ${a.getClassName()}, 性別: ${a.sex}, 年齢: ${a.age}, 挨拶: ${a.greet()}`;
        });
    }

    public getFooValue(): Promise<number> {
        return new SampleService().square(5);
    }
}