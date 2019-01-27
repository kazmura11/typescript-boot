// 本来ここに置くのはAPIアクセスを想定
export class SampleService {
    public square(value: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value * value);
            }, 1000);
        });
    }
}