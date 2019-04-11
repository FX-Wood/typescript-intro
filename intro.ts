// strings
var hello: string = "Hello world";
var barf: string = "Yak, Bark";
var barfLiteral: string = `literally, ${barf}`;

// number
var myInt: number = 3;
var myFloat: number = 6.4;
var myHex: number = 0xf00d;

// booleans
var myBool: boolean
myBool = true;

// any
var myAny = null;
myAny = 'here i am';
myAny = 2349;

var myStrings: string[] = ['asd', 'dfg']
var moreStrings: Array<string> = ['asd','dfg']

var twoDArray: Array<number[]> = [[2,3], [3,3]]

// functions
function myFunc(arg: string, arg2: number): string[] {
    return Array(arg2).fill(arg)
}

const myArrowFunc = (arg:string, arg2: number): string => {
    // logic
    return ''
}

function errorLogger(items: string[]): void {
    items.forEach( (item: string) => {
        console.log(item)
    })
}

// unions
var myUnion: string | null = null;

myUnion = "see this is ok"

// invalid
// myUnion = '7'; 

// custom types
type ColorChoice = 'Red' | 'Green' | 'Blue';

let myColor: ColorChoice = 'Red'

// interfaces
interface DogObject {
    name: string;
    age: number;
    isGood: boolean;
    wagsTail?: boolean;
}

function isGoodDog(dog: DogObject): boolean {
    let {name, age, isGood} = dog;
    let message = `${name} is ${age} and is very good! ${dog.wagsTail ? 'wag wag': ''}`
    if (!isGood) {
        console.log('How dare you?! All dogs are good')
        dog.isGood = true;
    }
    return true
}

let oneGoodBoy: DogObject = {
    name: 'Harley Muffinhead',
    age: 7,
    isGood: true,
    wagsTail: true
}

let barnCat: object = {
    name: 'Scar Tatterear',
    age: Infinity,
    clawedKiller: true,
    isGood: false
}

isGoodDog(oneGoodBoy)

// enums
enum Cheeses {Brie,Cheddar,Swiss}

enum Colors {
    Red=10, Green=5, Blue=3
}

// generics
type BadMessage = 'ErrOR' | 'Warnnn'
type GoodMessage = 'All is well' | 'There is coffee ready in the kitchen'

function shout<T>(message: T): string {
    return message.toString().toUpperCase();
}

console.log(shout<BadMessage>('ErrOR'))
console.log(shout<GoodMessage>('All is well'))