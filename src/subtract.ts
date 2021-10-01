import { curry2 } from './Curry/curry2';
import getDecimalLength from './getDecimalLength';
import max from './max';
import multiplication from './multiplication';
/**
 * 誤差のない引き算
 * @param  {number} x
 * @param  {number} y
 */
const subtract = curry2(function (x: number, y: number) {
    const z = Math.pow(10, max(getDecimalLength(x), getDecimalLength(y)));
    return (multiplication(x, z) - multiplication(y, z)) / z;
});
export default subtract;