import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";

function JavaScript() {
  console.log("Hello World!");

  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;

  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;

  let true1 = true;
  let false1 = false;
  let false2 = true1 && false1;
  let true2 = true1 || false1;
  let true3 = !false2;
  let true4 = numberVariable === 123;
  let true5 = floatingPointNumber !== 321.432;
  let false3 = numberVariable < 100;
  let sortaTrue = "1" == 1;
  let notTrue = "1" === 1;

  if (true1) {
    console.log(true);
  }

  if (!false1) {
    console.log("!false1");
  } else {
    console.log("false1");
  }

  let loggedIn = true;

  function add(a, b) {
    return a + b;
  }
  const twoPlusFour = add(2, 4);

  const subtract = (a, b) => {
    return a - b;
  };
  const threeMinusOne = subtract(3, 1);

  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];
  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);

  // adding new items
  numberArray1.push(6);
  stringArray1.push("string3");

  // remove 1 item starting on 3rd spot
  numberArray1.splice(2, 1);
  stringArray1.splice(1, 1);
  console.log(numberArray1);
  console.log(stringArray1);

  let stringArray2 = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }

  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);

  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");

  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");

  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  console.log(result1);

  const result2 = `2 + 3 = ${2 + 3}`;
  console.log(result2);

  const username = "alice";
  const greeting1 = `Welcome home ${username}`;
  console.log(greeting1);

  loggedIn = false;
  const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  console.log(greeting2);

  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <h2>Boolean Variables</h2>
      true1 = {true1 + ""}
      <br />
      false1 = {false1 + ""}
      <br />
      false2 = {false2 + ""}
      <br />
      true2 = {true2 + ""}
      <br />
      true3 = {true3 + ""}
      <br />
      true4 = {true4 + ""}
      <br />
      true5 = {true5 + ""}
      <br />
      false3 = {false3 + ""}
      <br />
      sortaTrue = {sortaTrue + ""}
      <br />
      notTrue = {notTrue + ""}
      <br />
      <h2>Conditionals</h2>
      <h3>If Else</h3>
      {true1 && <p>true1</p>}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
      <h3>Logged In</h3>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      <h2>Functions</h2>
      <h3>Legacy ES5 functions</h3>
      twoPlusFour = {twoPlusFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <br />
      <h3>New ES6 arrow functions</h3>
      threeMinusOne = {threeMinusOne}
      <br />
      subtract(3, 1) = {subtract(3, 1)}
      <br />
      <h3>Implied return</h3>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(4, 5) = {multiply(4, 5)}
      <br />
      <h3>Parenthesis and parameters</h3>
      twoSquared = {twoSquared}
      <br />
      square(2) = {square(2)}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      plusOne(3) = {plusOne(3)}
      <br />
      <h2>Working with Arrays</h2>
      numberArray1 = {numberArray1}
      <br />
      stringArray1 = {stringArray1}
      <br />
      variableArray1 = {variableArray1}
      <br />
      <h3>Array index and length</h3>
      length1 = {length1}
      <br />
      index1 = {index1}
      <br />
      <h3>Add and remove data to arrays</h3>
      numberArray1 = {numberArray1}
      <br />
      stringArray1 = {stringArray1}
      <br />
      <h3>Looping through arrays</h3>
      stringArray2 = {stringArray2}
      <br />
      <h3>Map</h3>
      squares = {squares}
      <br />
      cubes = {cubes}
      <br />
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      <h3>Find function</h3>
      four = {four}
      <br />
      string3 = {string3}
      <br />
      <h3>FindIndex function</h3>
      fourIndex = {fourIndex}
      <br />
      string3Index = {string3Index}
      <br />
      <h3>Filter function</h3>
      numbersGreaterThan2 = {numbersGreaterThan2}
      <br />
      evenNumbers = {evenNumbers}
      <br />
      oddNumbers = {oddNumbers}
      <br />
      <h2>Template Literals</h2>
      result1 = {result1}
      <br />
      result2 = {result2}
      <br />
      greeting1 = {greeting1}
      <br />
      greeting2 = {greeting2}
      <br />
    </div>
  );
}
export default JavaScript;
