const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['1', '2'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}