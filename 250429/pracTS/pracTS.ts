interface AddFunction {
    (a: string, b: string): string;
}
const add: AddFunction = (a: string, b: string): string => {
    return `${a}${b}`;
};