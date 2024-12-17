export const sum = (a, b) => a + b;
export const multiplication = (a, b) => a * b;
export const division = (a, b) => a / b;

export const modulo = (a, b) => a % b;

export const substract = (a, b) => a - b;

export const isOdd = (a) => a % 2 === 1;

export const isEven = (a) => a % 2 === 0;

export const root = (a) => a ** 0.5;

export const power = (a, b) => a ** b;

export const factorial = (a) => {
    if (a === 0) {
        return 1;
    }
    return a * factorial(a - 1);
};

export const fibonacci = (a) => {
    if (a === 0) {
        return 0;
    }
    if (a === 1) {
        return 1;
    }
    return fibonacci(a - 1) + fibonacci(a - 2);
};

export const integral = (a, b, f, n) => {
    let h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += f(a + i * h);
    }
    return h * sum;
};