import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
  const [output, setOutput] = useState('');

  // Câu 1: Print numbers from 1 to 10
  const printNumbers = () => {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += `${i} `;
    }
    setOutput(result);
  };

  // Câu 2: Print the odd numbers less than 100
  const printOddNumbers = () => {
    let result = '';
    for (let i = 1; i < 100; i += 2) {
      result += `${i} `;
    }
    setOutput(result);
  };

  // Câu 3: Print the multiplication table with 7
  const multiplicationTable = () => {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += `7 * ${i} = ${7 * i}\n`;
    }
    setOutput(result);
  };

  // Câu 4: Print all the multiplication tables with numbers from 1 to 10
  const allMultiplicationTables = () => {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        result += `${i} * ${j} = ${i * j}\n`;
      }
      result += '-----------------\n';
    }
    setOutput(result);
  };

  // Câu 5: Calculate the sum of numbers from 1 to 10
  const sumNumbers = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    setOutput(`Sum: ${sum}`);
  };

  // Câu 6: Calculate 10! (factorial)
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };
  const calculateFactorial = () => {
    setOutput(`10! = ${factorial(10)}`);
  };

  // Câu 7: Calculate the sum of even numbers greater than 10 and less than 30
  const sumEvenNumbers = () => {
    let sum = 0;
    for (let i = 12; i < 30; i += 2) {
      sum += i;
    }
    setOutput(`Sum of even numbers: ${sum}`);
  };

  // Câu 8: Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    setOutput(`Celsius: ${celsius} = Fahrenheit: ${fahrenheit}`);
  };

  // Câu 9: Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    setOutput(`Fahrenheit: ${fahrenheit} = Celsius: ${celsius}`);
  };

  // Câu 10: Calculate the sum of numbers in an array
  const sumArray = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    setOutput(`Sum of array: ${sum}`);
  };

  // Câu 11: Calculate the average of numbers in an array
  const averageArray = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;
    setOutput(`Average: ${avg}`);
  };

  // Câu 12: Get only positive numbers from an array
  const getPositiveNumbers = (arr) => {
    const positives = arr.filter(num => num > 0);
    setOutput(`Positive numbers: ${positives.join(', ')}`);
  };

  // Câu 13: Find maximum number in an array
  const getMaxNumber = (arr) => {
    const max = Math.max(...arr);
    setOutput(`Max number: ${max}`);
  };

  // Câu 14: Print the first 10 Fibonacci numbers without recursion
  const printFibonacci = () => {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    setOutput(`First 10 Fibonacci: ${fib.join(', ')}`);
  };

  // Câu 15: Get nth Fibonacci number using recursion
  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  const getNthFibonacci = () => {
    setOutput(`10th Fibonacci number: ${fibonacci(10)}`);
  };

  // Câu 16: Check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const checkPrime = (num) => {
    setOutput(`${num} is ${isPrime(num) ? 'Prime' : 'Not Prime'}`);
  };

  // Câu 17: Sum of digits of a positive number
  const sumOfDigits = (num) => {
    const sum = num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0);
    setOutput(`Sum of digits: ${sum}`);
  };

  // Câu 18: Print the first 100 prime numbers
  const printFirst100Primes = () => {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    setOutput(`First 100 primes: ${primes.join(', ')}`);
  };

  // Câu 19: Get first "p" primes greater than "n"
  const getPrimesGreaterThan = (n, p) => {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    setOutput(`${p} primes greater than ${n}: ${primes.join(', ')}`);
  };

  // Câu 20: Rotate an array to the left by 1
  const rotateLeft = (arr) => {
    const rotated = [...arr.slice(1), arr[0]];
    setOutput(`Rotated left: ${rotated.join(', ')}`);
  };

  // Câu 21: Rotate an array to the right by 1
  const rotateRight = (arr) => {
    const rotated = [arr[arr.length - 1], ...arr.slice(0, -1)];
    setOutput(`Rotated right: ${rotated.join(', ')}`);
  };

  // Câu 22: Reverse an array
  const reverseArray = (arr) => {
    const reversed = arr.reverse();
    setOutput(`Reversed array: ${reversed.join(', ')}`);
  };

  // Câu 23: Reverse a string
  const reverseString = (str) => {
    const reversed = str.split('').reverse().join('');
    setOutput(`Reversed string: ${reversed}`);
  };

  // Câu 24: Merge two arrays
  const mergeArrays = (arr1, arr2) => {
    const merged = [...arr1, ...arr2];
    setOutput(`Merged array: ${merged.join(', ')}`);
  };

  // Câu 25: Get numbers in either of two arrays but not in both
  const symmetricDifference = (arr1, arr2) => {
    const diff = arr1
      .filter(num => !arr2.includes(num))
      .concat(arr2.filter(num => !arr1.includes(num)));
    setOutput(`Symmetric difference: ${diff.join(', ')}`);
  };

  // Câu 26: Get numbers in first array but not in second
  const difference = (arr1, arr2) => {
    const diff = arr1.filter(num => !arr2.includes(num));
    setOutput(`Difference: ${diff.join(', ')}`);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
      height: '100vh', 
    },
  });  
}