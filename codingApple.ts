const message: string = "hello";
let count: number = 0;
const done: boolean = true;
const numbers: number[] = [1, 2];
const strings: string[] = ["1", "2"];

type mix = [number, string, number];
const mixArray: mix = [1, "2", 3];

const introduce: {
  name: string;
  age: number;
  job?: string; //job이란 속성이 있을수도잇고 없을수도 잇다
  [key: number]: number; //number타입으로 된 모든 key값의 value속성은 number다
} = {
  name: "김경범",
  age: 27,
};

let stringOrUndefined: string | undefined;
stringOrUndefined = "3";
let nullOrNumber: number | null;
nullOrNumber = 3;

let color: "red" | "green" | "yellow" = "red";
color = "yellow";

const sum = (x: number, y: number): number => {
  return x + y;
};
console.log(sum(1, 3));

const sumArray = (numbers: number[]): number => {
  return numbers.reduce((a, c) => a + c, 0);
};
const total: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(total));

const returnNoting = (): void => {
  console.log("아무것도 반환안함");
};
