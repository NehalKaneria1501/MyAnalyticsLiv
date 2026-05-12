<!DOCTYPE html>
<html>
<head>
<script>
function myFunction(){
document.getElementById("demo").innerHTML="Paragraph changed.";
}
</script>
</head>
<body>
<h1>My First JavaScript</h1>
<button type="button" onclick="document.getElementById('demo').innerHTML=Date()">Click me to display Date and Time</button>
<p id="demo"></p>
<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML="Hello JavaScript!"'>Click Me!</button>
<p>JavaScript can change HTML attribute values.</p>
<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>
<button onClick="document.getElementById(myImage).src='c:\Users\Admin\Downloads\pic_bulboff.gif'">Turn on the light</button>
<img id="myImage" src="c:\Users\Admin\Downloads\pic_bulboff.gif" style="width: 100px">
<button onclick="document.getElementById('myImage').src='c:\Users\Admin\Downloads\pic_bulboff.gif'">Turn off th light</button>
<p id="demo">JavaScript can change the style of an HTML element.</p>
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>
<p id="demo">JavaScript can hide HTML elements.</p>
<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
<p>JavaScript can show hidden HTML elements.</p>
<p iid="demo" style="display: none">Hello JavaScript!</p>
<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>
<h2>JavaScript in Body</h2>
<p id="demo"></p>
<script>document.getElementById("demo").innerHTML="My First JavaScript";</script>
<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph.</p>
<button type="button" onclick="myFunction()">Try it</button>
<script>
function myFunction(){
document.getElementById("demo").innerHTML="Paragraph changed.";
}
</script>
<p>This example links to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>
<script src="myScript.js"></script>
<h2>External JavaScript</h2>
<p id="demo">A Paragraph.</p>
<button type="button" onclick="myFunction()">Click Me</button>
<p>This example uses a full web URL to link to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>
<script src="https://www.w3schools.com/js/myScript.js">
</script>
<button type="button" onclick="myFunction()">Try it
</button>
<p>This example uses a file path to link to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>
<script src="/js/myScript.js">
</script>
<script src="myScript.js">
</script>
<h1>My Web Page</h1>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML="<h2>Hello World</h2>";
</script>
<h2>My First Web Page</h2>
<p>My first paragraph.</p>
<p>Never call document.write after the document has finished loading.
It will overwrite the whole document.</p>
<script>
document.write(5+6);
</script>
<button type="button" onclick="document.write(5+6)">Try it
</button>
<script>
window.alert(5+6);
</script>
<script>
alert(5+6);
</script>
<h2>Activate Debugging</h2>
<p>F12 on your keyboard will activate debugging.</p>
<p>Then select "Console" in the debugger menu.</p>
<p>Then click Run again.</p>
<script>
console.log(5+6)
</script>
<h2>The window.print() Method</h2>
<p>Click the button to print the current page.</p>
<button onclick="window.print()">Print this page
</button>
<h1>JavaScript Numbers</h1>
<h3>Number can be written with or without decimals.</h3>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML=10.50;
</script>
<h1>JavaScript Strings</h1>
<h3>Strings can be written with double or single quotes.</h3>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML='John Doe';
</script>
<h1>JavaScript Syntax</h1>
<h3>The let and const keywords create variables</h3>
<p id="demo"></p>
<script>
let x=5;
const fname="John";
document.getElementById("demo").innerHTML=fname+"is"+x+"years.old";</script>
<h1>JavaScript Variables</h1>
<p>In this example, x is defined as a variable.
Then, x is assigned the value of 6:</p>
<script>
let y;
y=6;
document.getElementById("demo").innerHTML="The value of x is"+x;
</script>
<h1>JavaScript Operators</h1>
<h2>The Assignment (=) Operator</h2>
<p>The = operator is used to assign values to variables.</p>
<p id="demo"></p>
<script>
let x = 5;
let y = 6;
let sum = x + y;
document.getElementById("demo").innerHTML="The sum is"+sum;
</script>
<h1>JavaScript Operators</h1>
<p>JavaScript uses arithmetic operators to compute values (just like algebra).</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML=5*10;
</script>
<h1>JavaScript Expressions</h1>
<h2>Expressions Compute to Values</h2>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = (5 + 6) * 10;
</script>
<h1>JavaScript Expressions</h1>
<h2>Expressions Compute to Values</h2>
<p id="demo"></p>
<script>
var x;
x=5;
document.getElementById("demo").innerHTML=x*10;
</script>
<h1>JavaScript Expressions</h1>
<h2>Expressions Compute to Values</h2>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "John"+""+"Doe";
</script>
<h1>JavaScript Syntax</h1>
<h2>JavaScript is Case Sensitive</h2>
<p>Try to change lastName to lastname.</p>
<p id="demo"></p>
<script>
let lastName="Doe";
let lastname="Peterson";
document.getElementById("demo").innerHTML=lastName;
</script>
<h1>JavaScript Statements</h1>
<p>A JavaScript <b>program</b> is a list of <b>statements</b> to be executed by a computer.</p>
<p id="demo"></p>
<script>
let x,y,z;
x=5;
y=6;
z=x+y;
document.getElementById("demo").innerHTML="The value of z is"+z;
</script>
<script>
document.getElementById("demo").innerHTML="Hello Dolly!";
</script>
<script>
let a,b,c;
a=5;
b=6;
c=a+b;
document.getElementById("demo1").innerHTML=c;   
</script>
<p>JavaScript code blocks are written between { and }</p>
<button type="button" onclick="myfunction()">Click Me!
</button>
<p id="demo1"></p>
<p id="demo2"></p>
<script>
function myFunction() {
document.getElementById("demo1").innerHTML = "Hello Dolly!";
document.getElementById("demo2").innerHTML = "How are you?";
}
</script>
<h1>JavaScript Variables</h1>
<p>The underscore is treated as a letter in JavaScript names.</p>
<p id="demo"></p>
<script>
let _x=2;
let _100=5;
document.getElementById("demo").innerHTML=_x+_100;
</script>
<h1>JavaScript Variables</h1>
<p>The dollar sign is treated as a letter in JavaScript names.</p>
<p id="demo"></p>
<script>
let $$$=2;
let $myMoney=5;
document.getElementById("demo").innerHTML=$$$+$$myMoney;
</script>
<h1>JavaScript Variables</h1>
<p>Create a variable, assign a value to it, and display it:</p>
<p id="demo"></p>
<script>
let carName="Volvo";
document.getElementById("demo").innerHTML=carName;
</script>
<h1>JavaScript Variables</h1>
<p>In this example, price1, price2, and total are variables.</p>
<p id="demo"></p>
<script>
const price1=5;
const price2=6;
let total=price1+price2;
document.getElementById("demo").innerHTML="The total is:"+total;
</script>
<h1>JavaScript Variables</h1>
<p>In this example, x, y, and z are undeclared.</p>
<p>They are automatically declared when first used.</p>
<p id="demo"></p>
<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = "The value of z is " + z;
</script>
<h1>JavaScript Variables</h1>
<p>Strings are written with quotes.</p>
<p>Numbers are written without quotes.</p>
<p id="demo"></p>
<script>
const pi=3.14;
let person="John Doe";
let answer='Yes I am!';
document.getElementById("demo").innerHTML = pi+"<br>"+person+"<br>"+answer;
</script>
<h1>JavaScript Variables</h1>
<p>You can declare many variables in one statement.</p>
<p id="demo"></p>
<script>
let person="John Doe", carName="Volvo",price=200;
document.getElementById("demo").innerHTML=carName;
</script>
<h1>JavaScript Variables</h1>
<p>The result of adding 5 + 2 + 3 is:</p>
<p id="demo"></p>
<script>
let x=5+2+3;
document.getElementById("demo").innerHTML=x;
</script>
<h1>JavaScript Variables</h1>
<p>The result of adding "5" + 2 + 3 is:</p>
<p id="demo"></p>
<script>
let x="5"+2+3;
document.getElementById("demo").innerHTML=x;
</script>
<h1>JavaScript Variables</h1>
<p>The result of adding 2 + 3 + "5" is:</p>
<p id="demo"></p>
<script>
let x=2+3+"5";
document.getElementById("demo").innerHTML=x;
</script>
<h2>Redeclaring a Variable Using var</h2>
<p id="demo"></p>
<script>
var x=10;
{
var x=2;
}
document.getElementById("demo").innerHTML=x;
</script>
<h2>JavaScript let</h2>
<p>Redeclaring a JavaScript variable with <b>var</b> is allowed anywhere in a program:</p>
<p id="demo"></p>
<script>
var x=2;
var x=3;
document.getElementById("demo").innerHTML=x;
</script>
<h2>JavaScript let</h2>
<p>Redeclaring a variable with <b>let</b>, in another scope, or in another block, is allowed:</p>
<p id="demo"></p>
<script>
let x=2;
{
let x=3;
}
{
let x=4;
}
document.getElementById("demo").innerHTML=x;
</script>
<h2>JavaScript Hoisting</h2>
<p>With <b>var</b>, you can use a variable before it is declared:</p>
<p id="demo"></p>
<script>
carName="Volvo";
document.getElementById("demo").innerHTML=carName;
var carName;
</script>
<h2>JavaScript Hoisting</h2>
<p>With <b>let</b>, you cannot use a variable before it is declared.</p>
<p id="demo"></p>
<script>
try{
carName="saab";
let carName="Volvo";
}
catch(err){
document.getElementById("demo").innerHTML=err;
}
</script>
<h2>JavaScript const</h2>
<p>Declaring a constant array does NOT make the elements unchangeable:</p>
<p id="demo"></p>
<script>
const cars=["Saab","Volvo","BMW"];
cars[0]="Toyota";
cars.push("Audi");
document.getElementById("demo").innerHTML=cars;
</script>
<h2>JavaScript const</h2>
<p>Declaring a constant object does NOT make the objects properties unchangeable:</p>
<p id="demo"></p>
<script>
const car={type:"Fiat",model:"500",color:"white"};
car.color="red";
car.owner="Johnson";
document.getElementById("demo").innerHTML="car owner is"+car.owner;
</script>
<h2>JavaScript const variables has block scope</h2>
<p id="demo"></p>
<script>
const x=10;
{
const x=2;
}
document.getElementById("demo").innerHTML="x is"+x;
</script>
<h1>JavaScript Operators</h1>
<h2>The typeof Operator</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML=typeof ""+"<br>"+ typeof "John" + "<br>" + typeof "John Doe";
</script>
<h1>JavaScript Operators</h1>
<h2>The typeof Operator</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML=typeof 0+"<br>"+typeof 314+"<br>"+typeof 3.14+"<br>"+typeof(3)+"<br>"+typeof(3+4);
</script>
<h1>JavaScript Data Types</h1>
<h2>JavaScript Strings</h2>
<p>Strings are written with quotes. You can use single or double quotes:</p>
<p id="demo"></p>
<script>
let carName1="Volvo XC60";
let carName2='Volvo XC60';
document.getElementById("demo").innerHTML=carName1+"<br>"+carName2;
</script>
<h1>JavaScript Data Types</h1>
<h2>JavaScript Strings</h2>
<p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</p>
<p id="demo"></p>
<script>
let answer1="It's alright";
let answer2="He is called 'Johnny'";
let answer3="He is called "Johnny";
document.getElementById("demo").innerHTML=answer1+"<br>"+answer2+"<br>"+answer3;
</script>
<h1>JavaScript Data Types</h1>
<h2>JavaScript Numbers</h2>
<p>Numbers can be written with, or without decimals:</p>
<p id="demo"></p>
<script>
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;
document.getElementById("demo").innerHTML=x1+"<br>"+x2+"<br>"+x3;
</script>
<h1>JavaScript Data Types</h1>
<h2>JavaScript Numbers</h2>
<p>Extra large or extra small numbers can be written with scientific (exponential) notation:</p>
<p id="demo"></p>
<script>
let y=12335;
let z=123e-5;
document.getElementById("demo").innerHTML=y+"<br>"+z;
</script>
<h1>JavaScript Datatypes</h1>
<p>An empty string has both a legal value and a type:</p>
<p id="demo"></p>
<script>
let car="";
document.getElementById("demo").innerHTML="The value is:"+car+"<br>"+"The type is:"+typeof car;
</script>
<h1>JavaScript Operators</h1>
<h2>The = Operator</h2>
<p id="demo"></p>
<script>
let x=10;
document.getElementById("demo").innerHTML=x;
</script>
<h1>JavaScript Operators</h1>
<p id="demo"></p>
<script>
let x=5;
let y=2;
let x=x+y;
document.getElementById("demo").innerHTML="The sum of x+y is:"+z;
let x = 5;
let y = 2;
let z = x * y;
document.getElementById("demo").innerHTML = z;
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
document.getElementById("demo").innerHTML = text3;
let x = 100 + 50;
document.getElementById("demo").innerHTML = x;
let a=100;
let b=50;
let x=a+b;
document.getElementById("demo").innerHTML=x;
let a=3;
let x=(100+50)*a;
document.getElementById("demo").innerHTML=x;
let x = 5;
let y = 2;
let z = x + y;
document.getElementById("demo").innerHTML = z;
let x = 5;
let y = 2;
let z = x - y;
document.getElementById("demo").innerHTML = z;
let x = 5;
let y = 2;
let z = x * y;
document.getElementById("demo").innerHTML = z;
let x = 5;
let y = 2;
let z = x / y;
document.getElementById("demo").innerHTML = z;
let x = 5;
let y = 2;
let z = x % y;
let x=5;
x++;
let z=x;
document.getElementById("demo").innerHTML=z;
let x=5;
x--;
let z=x;
document.getElementById("demo").innerHTML=z;
let x=5;
document.getElementById("demo").innerHTML=x**2;
let x = 5;
document.getElementById("demo").innerHTML=Math.pow(x,2);
document.getElementById("demo").innerHTML=100+50*3;
document.getElementById("demo").innerHTML=(100+50)*3;
document.getElementById("demo").innerHTML=100+50-3;
document.getElementById("demo").innerHTML=100/50*3;
document.getElementById("demo").innerHTML="Value of x is:"+x;
let y = 50
let x = 10 + y;
document.getElementById("demo").innerHTML = x;
let x = 10;
x += 5;
document.getElementById("demo").innerHTML = x;
let x=10;
x -=5;
let x = 10;
x *= 5;
document.getElementById("demo").innerHTML=x;
let x=10;
x**5;
document.getElementById("demo").innerHTML=x;
let x = 10;
x /= 5;
document.getElementById("demo").innerHTML=x;
let x = 10;
x %= 5;
let text = "Hello";
document.getElementById("demo").innerHTML = x;
let text ="Hello";
text += "World";
document.getElementById("demo").innerHTML=text;
let x=true;
let y=x&&=10;
document.getElementById("demo").innerHTML="value of y is:"+y;
let x=false;
let y=x&&=10;
document.getElementById("demo").innerHTML="value of y is:"+y;
let x=1;
let y=x&&=10;
document.getElementById("demo").innerHTML="value of y is:"+y;
let x=underfined;
let y=x&&=10;
document.getElementById("demo").innerHTML="value of y is:"+y;
let x=null;
let y=x&&=10;
document.getElementById("demo").innerHTML="value of y is:"+y;
let x=false;
let t=x||=10;
document.getElementById("demo").innerHTML="Value of y is:"+y;
let x=true;
let t=x||=10;
document.getElementById("demo").innerHTML="Value of y is:"+y;
let x=null;
let t=x||=10;
document.getElementById("demo").innerHTML="Value of y is:"+y;
let x=underfined;
let t=x||=10;
document.getElementById("demo").innerHTML="Value of y is:"+y;
let x;
x??=10;
document.getElementById("demo").innerHTML = "x is: " + x;
let x=0;
x??=10;
document.getElementById("demo").innerHTML = "x is: " + x;
let x=null;
x??=10;
document.getElementById("demo").innerHTML = "x is: " + x;
let x=underfined;
x??=10;
document.getElementById("demo").innerHTML = "x is: " + x;
let x=10;
let y=5;
x??=10;
document.getElementById("demo").innerHTML="x is:"+x;
let text="12345";
let min=Math.min(...text);
let max=Math.max(...text);
document.getElementById("demo").innerHTML="Minimum is:"+min+"<br>Maximum is:"+max;
</script>
<h1>JavaScript Arithmetic</h1>
<h2>Arithmetic Operations</h2>
<p>A typical arithmetic operation takes two numbers (or expressions) and produces a new number.</p>
<p id="demo"></p>
<script>
let a=3;
let x=(100+50)*a;
document.getElementById("demo").innerHTML=x;
</script>
<h1>JavaScript String Operators</h1>
<h2>The += Operator</h2>
<p>The assignment operator += can concatenate strings.</p>
<p id="demo"></p>
<script>
let text1="what a very";
text1+="nice day";
document.getElementById("demo").innerHTML=text1;
</script>
<h1>JavaScript String Operators</h1>
<h2>The + Operator</h2>
<p>Adding a number and a string, returns a string.</p>
<p id="demo"></p>
<script>
let x=y= 5+5;
let y="5"+5;
let z="Hello"+5;
document.getElementById("demo").innerHTML=x+"<br>"+y+"<br>"+z;
</script>
<h1>JavaScript Arithmetic</h1>
<h2>The += Operator</h2>
<p id="demo"></p>
<script>
var x=10;
x+=5;
document.getElementById("demo").innerHTML=x;
</script>
<script>
let text1="A";
let text2="B";
let result=text1<text2;
document.getElementById("demo").innerHTML="Is A less than B?"+result;
</script>
<script>
let x=5;
document.getElementById("demo").innerHTML=(x!=="5");
</script>
<script>
let x=5;
document.getElementById("demo").innerHTML=(x>8);
</script>
<script>
let x=5;
document.getElementById("demo").innerHTML=(x<8);
</script>
<script>
let x=5;
document.getElementById("demo").innerHTML=(x>=8);
</script>
<script>
let x=5;
document.getElementById("demo").innerHTML=(x<=8);
</script>
<script>
let text1="20";
let text2="50000";
let result=text1<text2;
document.getElementById("demo").innerHTML="Is 20 less than 5?"+result;
</script>
<script>
document.getElementById("demo").innerHTML=2>"12";
</script>
<script>
document.getElementById("demo").innerHTML=2<"John";
</script>
<script>
document.getElementById("demo").innerHTML=2=="John";
</script>
<script>
document.getElementById("demo").innerHTML="2"<"12";
</script>
<script>
document.getElementById("demo").innerHTML="2">"12";
</script>
<script>
document.getElementById("demo").innerHTML="2"=="12";
</script>
<h2>JavaScript Comparisons</h2>
<p>Input your age and click the button:</p>
<input id="age" value="18"/>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction(){
let votable;
let age=Number(document.getElementById("age").value);
if(isNaN(age)){
votable="Input is not a number";
}
else{
votable=(age<18)?"Too young":"Old enough";
}
document.getElementById("demo").innerHTML=votable+"to vote";
}
</script>
<h1>JavaScript if</h1>
<p>Display "Good day!" if the hour is less than 18:00:</p>
<p id="demo">Good Evening!</p>
<script>
if(new Date().getHours()<18){
document.getElementById("demo").innerHTML="Good day!";
}
</script>
<p id="demo"></p>
<script>
let age=16;
let country="USA";
let text="You cannot drive!";
if(country=="USA"){
if(age>=18){
text="You can drive!";
}
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let age=16;
let country="USA";
let text="You cannot drive!";
if(country=="USA" && age>=16){
text="You can drive!";
}
document.getElementById("demo").innerHTML=text;
</script>
<p id="demo"></p>
<script>
const hour=new Date().getHours();
let greeting;
if(hour<18){
greeting="Good day";
}
document.getElementById("demo").innerHTML=greeting;
</script>
<script>
const time=new Date().getHours();
let greeting;
if(time<10){
greeting="Good morning";
}
else if{
greeting="Good day";
}
else{
greeting="Good wvwning";
}
document.getElementById("demo").innerHTML=greeting;
</script>
<script>
let text;
if(Math.randdddom()<0..5){
text="<a href='https://w3schools.com'>Visit W3Schools</a>";
}
else{
text="<a href='https://wwf.org'>Visit WWf</a>";
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let age=16;
let text=(age<18)?"Minor":"Adult";
document.getElementById("demo").innerHTML=text;
</script>
<script>
let price=18;
let isMember=true;
let discount=isMember?0.2:0;
let total=10-(price*discount)
doument.getElementById("demo").innerHTML="The price is"+total;
</script>
<script>
let price=18;
let isMember=false;
let discount=isMember?0.2:0;
let total=10-(price*discount)
doument.getElementById("demo").innerHTML="The price is"+total;
</script>
<p id="demo"></p>
<script>
let day;
let date=new Date().getDay();
switch (new Date().getDay()) {
case 0:
day="Sunday";
break;
case 1:
day:"Monday";
break;
case 2:
day:"Tuesday";
break;
case 3:
day="Wenesday";
break;
case 4:
day="Thursday";
break;
case 5:
day="Friday";
break;
case 6:
day="Saturday";
}
document.getElementById("demo").innerHTML="Today is"+day;
</script>
<script>
let text;
switch(new Date().getDay()){
case 6;
text="Today is Saturday";
break;
case 0;
text="Today is Sunday";
break;
default:
text="Looking forward to the weekend";
}
document.getElementById("demo").innerHTML=text;
</script>
<p id="demo"></p>
<script>
switch(new Date().getDay()){
case 4:
case 5:
text="Soon it is Weekend";
break;
case 0:
case 6;
text="It is weekend";
break;
default:
text="Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let x="0";
switch(x){
case 0;
text="Off";
break;
case 1:
text="On";
break;
default:
text="No value found";
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let x=5;
document.getElementById("demo").innerHTML=(x==8);
</script>
<script>
let text="";
let i=1;
while (i<10) {
text +=i;
i++;
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
document.getElementById("demo").innerHTML=(10>9);
</script>
<script>
document.getElementById("demo").innerHTML="100 is"+Boolean(100)+"<br>"+"3.14 is"+Boolean(100)+"<br>"+"-15 is"+Boolean("Hello")+"<br>"+"'false'is"+Boolean('false')+"<br>"+"(1+7+3.14)is"+Boolean(1+7+3.14);
</script>
<script>
let x=-0;
let x="";
let x=null;
let x=false;
let x=10/"Hello";
let x=Boolean(false);
let y=new Boolean(false);
document.getElementById("demo").innerHTML=Boolean(x);
document.getElementById("demo").innerHTML=typeof x+"<br>"+typeof y;
document.getElementById("demo").innerHTML=(x===y);
</script>
<script>
let x=6;
let y=-3;
let z=(x > 0 || y > 0);
document.getElementById("demo").innerHTML=(x<10&&y>1)+"<br>"+(x<10&&y<1);
document.getElementById("demo").innerHTML=(x===5||y==5)+"<br>"+(x===6||y===5)+"<br>"+(x===6||y===3);
document.getElementById("demo1").innerHTML=(5==8);
document.getElementById("demo2").innerHTML=!(5==8);
document.getElementById("demo3").innerHTML=(x<10&&y>1)+"<br>"+(x<10&&y<1);
document.getElementById("demo4").innerHTML=z;
</script>
<script>
let name=null;
let text="missing";
let result=name??text;
document.getElementById("demo").innerHTML="The name is"+result;
</script>
<script>
const cars=["BMW","Volvo","Saab","Ford","Fiat","Audi"];
let text="";
for(let i=0;i<CaretPosition.length;i++){
text +=cars[i]+"<br>";
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let text="";
for(let i=0;i<5;i++){
text+="The number is"+i+"<br>";
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let i=5;
for(i0;i<10;i++){
document.getElementById("demo").innerHTML = i;
}
</script>
<script>
let text=""
let i=0;
do{
text +="<br>The number is"+i;
i++;
}
while(i<10);
document.getElementById("demo").innerHTML=text;
</script>
<script>
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len=cars.length;
let text="";
let i=2;
let i=0;
var i=5;
for(let i=0;i<length;i++){
text+=cars[i]+"<br>";
i++;
}
document.getElementById("demo").innerHTML=text;
<script>
while (i < 10) {
  text += "The number is " + i + "<br>";
  i++;
}
</script>
document.getElementById("demo").innerHTML=text;
</script>
<script>
let text = ""
let i = 0;
do{
text+="<br>The number is"+i;
i++;
}
while(i<10);
document.getElementById("demo").innerHTML=text;
</script>
<script>
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
for (;cars[i];) {
text += cars[i] + "<br>";
i++;
}
document.getElementById("demo").innerHTML = text;
</script>
<script>
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
while (cars[i]) {
text += cars[i] + "<br>";
i++;
}
document.getElementById("demo").innerHTML = text;
</script>
<script>
let text = "";
for (let i = 0; i < 10; i++) {
if (i === 3) { 
break; 
}
text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>
<script>
let text="";
loop1:for(let j=1;j<5;j++){
loop2:for(let i=1;i<5;i++){
if(i==3){
break loop1;
}
text +=i="<br>";
}
}
document.getElementById("demo").innerHTML = text;
</script>
<script>
let text="";
loop1:for(let j=1;j<5;j++){
loop2:for(let i=1;i<5;i++){
if(i==3){
break loop2;
}
text +=i="<br>";
}
}
document.getElementById("demo").innerHTML = text;
</script>
<script>
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text="";
list:{
text+=cars[0]+"<br>";
text+=cars[1]+"<br>";
break list;
text+=cars[2]+"<br>";
text+=cars[03]+"<br>";
}
document.getElementById("demo").innerHTML = text;
</script>
<script>
let text="";
for(let i=1;i<10;i++){
if(i=3){
continue;
}
text+=i*10+"<br>";
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let text="";
loop1:for(let j=1;j<5;j++){
loop2:for(let i=1;i<5;i++){
if(i==3){
continue loop1;
}
text +=i="<br>";
}
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let text="";
loop1:for(let j=1;j<5;j++){
loop2:for(let i=1;i<5;i++){
if(i==3){
continue loop2;
}
text +=i="<br>";
}
}
document.getElementById("demo").innerHTML=text;
</script>
<script>
let carName1 = "Volvo XC60"; 
let carName2 = 'Volvo XC60'; 
document.getElementById("demo").innerHTML=carName1+""+carName2; 
let text = `Welcome ${firstName}, ${lastName}!`;
document.getElementById("demo").innerHTML = text[0];
</script>
<script>
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 
document.getElementById("demo").innerHTML =answer1+"<br>"+answer2+"<br>"+answer3;
</script>
<script>
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML=text.length; 
</script>
<script>
let x = "John";
let y = new String("John");
document.getElementById("demo").innerHTML=typeof x+"<br>"+typeof y;
</script>
<script>
let x = "John";       
let y = new String("John"); 
document.getElementById("demo").innerHTML = (x===y);
</script>
<script>
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
text = text.padStart(4,"0");
let text = numb.toString();
let numb = 5;
let text = numb.toString();
document.getElementById("demo").innerHTML = text.padStart(4,0);
document.getElementById("demo").innerHTML = text.padStart(4,0);
document.getElementById("demo").innerHTML = text.padStart(4,"x");
text = text.padEnd(4,"0");
document.getElementById("demo").innerHTML = total;
</script>
<script>
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];
let html = `<h2>${
header
}
</h2>
</ul>`;
for (const x of tags) {
html += `<li>$
{
x
}
</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script>
<script>
var text="HELLO WORLD";
let result=text.repeat(2);
document.getElementById("demo").innerHTML=result
document.getElementById("demo").innerHTML=text.charCodeAt(0);
let code=text.codePointAt(0);
let letter=name.at(2);
let letter=name[2];
document.getElementById("demo").innerHTML=code;
document.getElementById("demo").innerHTML=letter;
text[0]="A";
let text1="Hello";
let text2="World!";
let text3=text1.concat("",text2);
document.getElementById("demo").innerHTML=text3;
let result = text.isWellFormed();
document.getElementById("demo").innerHTML=result;
let text="Apple,Banana,Kiwi";
let part=text.slice(-7,-13);
document.getElementById("demo").innerHTML=part; 
document.getElementById("demo").innerHTML=str.substr(-4);
let text1="     Hello World!     ";
let text2=text1.trimStart();
let text2=text1.trimEnd();
document.getElementById("demo").innerHTML="Length text1="+text1.length+"<br>Length text2="+text2.length;
</script>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction() {
let text = document.getElementById("demo").innerHTML;
document.getElementById("demo").innerHTML =text.toUpperCase();
}
<script>
function myFunction() {
let text = document.getElementById("demo").innerHTML;
document.getElementById("demo").innerHTML =text.toLowerCase();
}
</script>
<script>
function myFunction() {
let text=document.getElementById("demo").innerHTML;
let text="I love cats. Cats are very easy to love. Cats are very popular."
const iterator=text.matchAll("cats")
text=text.replaceAll("Cats","Dogs");
text=text.replaceAll(/cats/g,"dogs");
document.getElementById("demo").innerHTML=text;
document.getElementById("demo").innerHTML=text.replace("Microsoft","W3Schools");
document.getElementById("deno").innerHTML=Array.from(iterator);
}
</script>
<script>
let text="a,b,c,d,e,f";
let text=text.split("");
let myNumber=2; 
text="";
const myArray=text.split(",");
for(let i=0;i<myArr.length;i++){
text+=myArr[i]+"<br>"
}
while(myNumber!=Infinity){
myNumber=myNumber*myNumber;
txt=txt+myNumber+"<br>";
}
document.getElementById("demo").innerHTML=myArray[0];
document.getElementById("demo").innerHTML=text;
document.getElementById("demo").innerHTML=txt;
</script>
<script>
let text="Please locate where 'locate' occurs!";
let text="Hello world, welcome to the universe.";
let x=999999999999999n;
let y=BigInt(9999999999999999);
let type=typeof x;
document.getElementById("demo").innerHTML=type;
let insex=text.indexOf("locate");
let index=text.lastIndexOf("locate",15);
let index=text.search(/locate/);
const myArr=text.match("/ain");
const myArr=text.match(/ain/);
const myArr=text.match(/ain/g);
const myArr=text.match(/ain/gi);
let x=0.2+0.1;
document.getElementById("demo1").innerHTML = "0.2 + 0.1 = " + x;
let y=(0.2*10+0.1*10)/10;
document.getElementById("demo2").innerHTML = "0.2 + 0.1 = " + y;
document.getElementById("demo").innerHTML = index;
document.getElementById("demo").innerHTML=myArray.length+""+myArr;
document.getElementById("demo").innerHTML=text.includes("world",12);
document.getElementById("demo").innerHTML = text.startsWith("world",5);
document.getElementById("demo").innerHTML=text.endsWith("world",11);
document.getElementById("demo").innerHTML="Accurate:"+x+"<br>Inaccurate:"+y;
document.getElementById("demo").innerHTML=100/"Apple";
document.getElementById("demo").innerHTML=100/"10";
let x=100/"Apple";
let x=NaN;
document.getElementById("demo").innerHTML=isNaN(x);
document.getElementById("demo").innerHTML=typeof x;
let x=2/0;
let y=-2/0;
document.getElementById("demo").innerHTML = x + "<br>" + y;
document.getElementById("demo").innerHTML = typeof Infinity;
let x=0xFF;
document.getElementById("demo").innerHTML = "0xFF = " + x;
let myNumber=32;
document.getElementById("demo").innerHTML ="Decimal 32="+"<br><br>"+"Hexatrigesimal(base 36):"+myNumber.toString(36)+"<br>"+"Duotrigesimal(base 32):"+myNumber.toString(32)+"<br>"+"Hexadecimal(base 16):"+myNumber.toString(12)+"<br>"+"Duodecimal(base 12):"+myNumber.toString(10)+"<br>"+"Decimal(base 10):"+myNumber(10)+"<br>"+"Octal(base 8):"+myNumber.toString(10)+"<br>"+"Binary(base 2):"+myNumber.toString(2);
let x=123;
let y=new Number(123);
let x=new Date("1970-01-01");
let x=Number.EPSILON;
let x=Number.MAX_VALUE;
let x=6;
document.getElementById("demo").innerHTML = x.MAX_VALUE;
let x=Number.MIN_VALUE;
let x=Number.MIN_SAFE_INTEGER;
let x=Number.MAX_SAFE_INTEGER;
let x=Number.POSITIVE_INFINITY;
let x=1/0;
let x=Number.NEGATIVE_INFINITY;
let x=-1/0;
document.getElementById("demo").innerHTML=Number.NaN;
let x=100/"Apple";
let x=9007199254740995n;
let y=9007199254740995n;
let z=x*y;
let largeNumber=BigInt("12345678901234567890");
let num = Number(largeNumber);
let x=5n;
let y=Number(x)/2;
let x=(10n>5n); 
let y=(10n===10); 
let z=(10n==10);
let a=5n;
let b=3n;  
let x=(a& b); 
let y=(a|b); 
let z=(a^b); 
let n=(~a);
let big=10n; 
let x=(big<<2n); 
let y=(big>>1n);
let num=256n;
let oct=0o400n;
let hex=0x100n;
let bin=0b100000000n;
let x=9007199254740992n===9007199254740993n;
document.getElementById("demo").innerHTML=num+"<br>"+oct+"<br>"+hex+"<br>"+bin;  
document.getElementById("demo").innerHTML=x+"<br>"y;
let largeNumber=BigInt("12345678901234567890");
let num=Number(largeNumber);
document.getElementById("demo").innerHTML=num;
document.getElementById("demo").innerHTML=x+","+y+","+z+","+n; 
document.getElementById("demo").innerHTML=y; 
document.getElementById("demo").innerHTML=num; 
document.getElementById("demo").innerHTML=z; 
document.getElementById("demo").innerHTML=Number(x); 
document.getElementById("demo").innerHTML=typeof x+"<br>"+typeof y;
document.getElementById("demo").innerHTML=x.toString() +"<br>"+(123).toString()+"<br>"+(100 + 23).toString();
document.getElementById("demo").innerHTML=x.toExponential()+"<br>"+x.toExponential(2)+"<br>"+x.toExponential(4)+"<br>"+ x.toExponential(6);
document.getElementById("demo").innerHTML=x.toFixed(0)+"<br>"+x.toFixed(2)+"<br>"+x.toFixed(4)+"<br>"+x.toFixed(6);
document.getElementById("demo").innerHTML=x.toPrecision()+"<br>"+x.toPrecision(2)+"<br>"+x.toPrecision(4)+"<br>"+x.toPrecision(6);
document.getElementById("demo").innerHTML=x.valueOf()+"<br>"+(123).valueOf()+"<br>"+(100+23).valueOf();
document.getElementById("demo").innerHTML=Number(true)+"<br>"+Number(false)+"<br>"+Number("10")+"<br>"+Number("  10")+"<br>"+Number("10")+"<br>"+Number("10")+"<br>"+Number("10.33")+"<br>"+Number("10,33")+"<br>"+Number("1033")+"<br>"+Number("John");
document.getElementById("demo").innerHTML=parseInt("-10")+"<br>"+parseInt("-10.33")+"<br>"+parseInt("10")+"<br>"+parseInt("10.33")+"<br>"+parseInt("10 6")+"<br>"+parseInt("10 years")+"<br>"+parseInt("years 10");
document.getElementById("demo").innerHTML=parseFloat("10")+"<br>"+parseFloat("10.33")+"<br>"+parseFloat("10 6") +"<br>"+ parseFloat("10 years")+"<br>"+parseFloat("years 10");
document.getElementById("demo").innerHTML=Number.isInteger(10)+"<br>"+Number.isInteger(10.5);
document.getElementById("demo").innerHTML=Number.isSafeInteger(10)+"<br>"+Number.isSafeInteger(12345678901234567890);
document.getElementById("demo").innerHTML=x;
let x=5&1;
document.getElementById("demo").innerHTML="5 AND 1 is"+x;
let x=5|1;
document.getElementById("demo").innerHTML="5 OR 1 is"+x;
let x=5^1;
document.getElementById("demo").innerHTML="5 XOR 1 is"+x;
let x=~5;
document.getElementById("demo").innerHTML="NOT 5 is"+x;
document.getElementById("demo").innerHTML=5<<1;
let x=-5>>1;
document.getElementById("demo").innerHTML="-5 signed shift right 1 is"+x;
let x=5>>>1;
document.getElementById("demo").innerHTML="5 shifted right is"+x;
let x=-100;
x<<=5;
x>>=5;
let x=10;
x&=5;
x|=5;
x^=5;
document.getElementById("demo").innerHTML="Value of x is:"+x;
</script>
<script>
document.getElementById("demo").innerHTML=dec2bin(-5);
function dec2bin(dec){
return(dec>>>0).toString(2);
}
</script>
<script>
document.getElementById("demo").innerHTML=dec2bin(101);
function dec2bin(bin){
return parseInt(bin,2).toString(2);
</script>
<script>
function toCelsius(f){
return(5/9)*(f-32);
}
let value=toCelsius(77);
document.getElementById("demo").innerHTML=value;
let myFunction=function(a,b){return a*b};
let result=myFunction(4,3);
myFunction=(a,b)=>a*b;
document.getElementById("demo").innerHTML="The product is:"+result;
</script>
<script>
let text="The temperature is"+toCelsius(77)+"Celsius.";
document.getElementById("demo").innerHTML=text;
function toCelsius(fahrenheit){
return(5/9)*(fahrenheit-32);
} 
</script>
<script>
let text="Outside:"+typeof carName;
document.getElementById("demo1").innerHTML=text;
function myFunction() {
let carName="Volvo";
let text="Inside:"+typeof carName+""+carName; 
document.getElementById("demo2").innerHTML=text;
}
myFunction();
</script>
<script>
function greet(name,age){
return "Hello"+name+"!You are"+age+"years old.";
}
document.getElementById("demo").innerHTML=greet("John",21);
</script>
<script>
function myFunction(x,y){
if(y===undefined) {
y=2;
}  
return x*y;
return x+y;
}
document.getElementById("demo").innerHTML=myFunction(4);
</script>
<script>
function sum(...args){
let sum = 0;
for (let arg of args)sum+=arg;
return sum;
}
let x=sum(4,9,16,25,29,100,66,77);
document.getElementById("demo").innerHTML=x;
</script>
<script>
function findMax() {
let max=-Infinity;
for(let i=0;i<arguments.length;i++) {
if(arguments[i]>max) {
max=arguments[i];
}
}
return max;
} 
document.getElementById("demo").innerHTML=findMax(4,5,6);
</script>
<script>
function sumAll(){
let sum=0;
for(let i=0;i<arguments.length;i++){
sum+=arguments[i];
}
return sum;
}
document.getElementById("demo").innerHTML=sumAll(1,123,500,115,44,88);
</script>
<script>
myFunction=(a,b)=>a*b;
let result=myFunction(4,5);
document.getElementById("demo").innerHTML="The product is:"+result;
</script>
<script>
let myfunction=function(a,b){
return a*b
};
let result=myfunction(4,3);
document.getElementById("demo").innerHTML="The product is:"+result;
</script>
<script>
let hello=function(){
return "Hello World!";
}
document.getElementById("demo").innerHTML=hello();
</script>
<script>
let hello=()=>{
return "Hello World!";
}
document.getElementById("demo").innerHTML=hello();
</script>
<script>
let hello=()=>"Hello World!";
document.getElementById("demo").innerHTML=hello();
</script>
<script>
let hello=(val)=>"Hello"+val;
document.getElementById("demo").innerHTML=hello("Universe!");
</script>
<script>
let myFunction=(x,y)=>{
return x*y
};
let result=myFunction(5,4);
document.getElementById("demo").innerHTML="The product is:"+result;
</script>
<script>
const person=new Object({
firstName:"John",
lastName:"Doe", 
age:50, 
eyeColor:"blue",
});
delete person["age"];
document.getElementById("demo").innerHTML=person.["firstName"]+"is"+person.["age"]+"years old.";
</script>
<script>
const person = {
person.firstName="John";
person.lastName="Doe";
person.age=50;
id:5566,
city:"New York"
person.eyeColor="blue";
person.nationality="English";
let text="";
for(let x in person){
text +=person[x]+"";
fullName:function(){
return this.firstName+""+this.lastName;
}
};
person.name=function(){
return (this.firstName+""+this.lastName).toUpperCase();
};
let text=person;
let text=person.name+","+person.age+","+person.city;
document.getElementById("demo").innerHTML=person.firstName+"is"+person.age+"years old.";
document.getElementById("demo").innerHTML=person[x]+"is"+person[y]+"years old.";
document.getElementById("demo").innerHTML=person.firstname+"is"+person.nationality+".";
document.getElementById("demo").innerHTML = person.fullName();
</script>
<script>
function Person(first,last,age,eye){
this.firstName=first;
this.lastName=last;
this.age=age;
this.eyeColor=eye;
this.nationality="English";
}
const myFather=new Person("John","Doe",50,"blue");
const myMother=new Person("Sally","Rally",48,"green");
document.getElementById("demo").innerHTML="My father is"+myFather.age+"."; 
document.getElementById("demo").innerHTML="My father is"+myFather.age+".My mother is"+myMother.age+".";
document.getElementById("demo").innerHTML="My father is"+myFather.nationality+".My mother is"+myMother.nationality;
document.getElementById("demo").innerHTML="My father is"+person.firstname();
</script>
<script>
const myObj={
name:"John",
age:30,
myCars:{
car1:"Ford",
car2:"BMW",
car3:"Fiat"
}
};
let p1="myCars";
let p2="car2";
document.getElementById("demo").innerHTML=myObj[p1][p2];
document.getElementById("demo").innerHTML=myObj.myCars.car2;
document.getElementById("demo").innerHTML=myObj.myCars["car2"];
<script>
const fruits={
Bananas:300, 
Oranges:200, 
Apples:500,
}; 
let text="";
for (let [fruit, amount] of Object.entries(fruits)) {
text+=fruit+":"+amount+"<br>";
}
let text=JSON.stringinfy(person);
document.getElementById("demo").innerHTML=text;
</script>
<script>
const d=new Date();
const d=new Date(0);
const date=Date.now();
const d=new Date("October 13,2014 11:13:00");
const d=new Date("2022-03-25");
const d=new Date(2018,11,24,10,33,30,0);
const d=new Date("2022-03-25");
const d=new Date(2018, 11, 24);
const d=new Date(2018, 11);
const d=new Date(2018);
const d=new Date(100000000000);
const d=new Date(-100000000000);
const d=new Date(86400000);
const d=new Date("2015-03-25");
const d=new Date("2015-03");
const d=new Date("2015");
const d=new Date("2015-03-25T12:00:00Z");
let text=d.toString();
const d=new Date("03/25/2015");
const d=new Date("Mar 25 2015");
const d=new Date("January 25 2015");
const d=new Date("Jan 25 2015");
const d=new Date("JANUARY,25,2015");
const msec=Date.parse("March 21,2012");
document.getElementById("demo").innerHTML=d.toDateString();
document.getElementById("demo").innerHTML=d.toUTCString();
document.getElementById("demo").innerHTML=d.toISOString();
document.getElementById("demo").innerHTML=new Date("2015-03-25T12:00:00-06:00");
document.getElementById("demo").innerHTML=d;
document.getElementById("demo").innerHTML=d.getFullYear();
const d=new Date("2021-03-25");
document.getElementById("demo").innerHTML=d.getMonth()+1;
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const d=new Date("2021-03-25");
let day=days[d.getDay()];
document.getElementById("demo").innerHTML=day;
let month=months[d.getMonth()];
document.getElementById("demo").innerHTML=month;
document.getElementById("demo").innerHTML=d.getDate();
const d=new Date("2021-03-25");document.getElementById("demo").innerHTML=d.getHours();
document.getElementById("demo").innerHTML=d.getMinutes();
document.getElementById("demo").innerHTML=d.getSeconds();
document.getElementById("demo").innerHTML=d.getMilliseconds();
document.getElementById("demo").innerHTML=d.getDay();
const d=new Date("1970-01-01");
document.getElementById("demo").innerHTML=d.getTime();
const minute=1000*60;
const hour=minute*60;
const day=hour*24;
const year=day*365;
let years=Math.round(Date.now()/year);
document.getElementById("demo").innerHTML=years;
document.getElementById("demo").innerHTML=d.getTimezoneOffset();
const d=new Date("January 01,2025");
d.setFullYear(2020);
d.setFullYear(2020,11,3);
d.setMonth(11);
d.setDate(15);
d.setDate(d.getDate()+50);
d.setHours(22);
d.setHours(22,10,20);
d.setMinutes(30);
d.setSeconds(30);
document.getElementById("demo").innerHTML=d;
const today=new Date();
const someday=new Date();
someday.setFullYear(2100,0,14);
if(someday>today){
text="Today is before January 14, 2100.";
} 
else{
text="Today is after January 14, 2100.";
}
const person=[];
person[0]="John";
person[1]="Doe";
person[2]=46;
person["firstName"]="John";
person["lastName"]="Doe";
person["age"]=6; 
const points=[40,100,1,5,25,10];
var points=new Array(40,100,1);
document.getElementById("demo").innerHTML=points;
document.getElementById("demo").innerHTML=points[0];
document.getElementById("demo").innerHTML=person[0]+""+person.length;
document.getElementById("demo").innerHTML=text;
const cars=["Saab","Volvo","BMW"];
const cars=[];
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
const cars=new Array("Saab","Volvo","BMW");
cars[0]="Opel";
const fruits=["Banana","Orange","Apple","Mango"];
let myList=fruits.toString();
const person=["John","Doe",46];
document.getElementById("demo").innerHTML=person[0];
document.getElementById("demo").innerHTML=cars;
document.getElementById("demo").innerHTML=myList;
document.getElementById("demo").innerHTML=cars[0];
const fruits=["Banana","Orange","Apple","Mango"];
document.getElementById("demo").innerHTML=typeof fruits;
document.getElementById("demo").innerHTML=Array.isArray(fruits);
document.getElementById("demo").innerHTML="Array:"+(fruits instanceof Array);
document.getElementById("demo").innerHTML=fruits.join("*");
let size=fruits.length;
fruits.length=2;
let myList=fruits.toString();
let fruit=fruits.at(2);
let fruit=fruits[2];
fruits.pop();
let fruit=fruits.pop();
fruits.push("Kiwi");
let length=fruits.push("Kiwi");
fruits.shift();
let fruit=fruits.shift();
fruits.unshift("Lemon");
fruits[0]="Kiwi";
fruits[fruits.length]="Kiwi";
Array.isArray(fruits);
delete fruits[0];
const myGirls=["Cecilie","Lone"];
const myBoys=["Emil","Tobias","Linus"];
const array3=["Robin","Morgan"];
const myChildren=array1.concat(array2,array3); 
const myChildren=myGirls.concat(myBoys);
const myChildren=myArray.concat("Peter"); 
document.getElementById("demo").innerHTML=myChildren;
document.getElementById("demo").innerHTML=myList;
document.getElementById("demo").innerHTML=fruits;
document.getElementById("demo").innerHTML=fruits.copyWithin(2,0,2);
const myArr=[[1,2],[3,4],[5,6]];
const newArr=myArr.flat();
const myArr=[1,2,3,4,5,6];
const newArr=myArr.flatMap(x =>[x,x*10]);
fruits.splice(2,2,"Lemon","Kiwi");
fruits.splice(0,1);
const months=["Jan","Feb","Mar","Apr"];
const spliced=months.toSpliced(0,1);
const citrus=fruits.slice(1);
const citrus=fruits.slice(1,3);
let myList=fruits.toString();
let position = fruits.indexOf("Apple")+1;
let position = fruits.lastIndexOf("Apple") + 1;
fruits.sort();
fruits.reverse();
const sorted = months.toSorted();
document.getElementById("demo").innerHTML=sorted;
const reversed=months.toReversed();
document.getElementById("demo").innerHTML=reversed;
const points=[40,100,1,5,25,10];
document.getElementById("demo1").innerHTML=points;  
points.sort(function(a,b){return a-b});
points.sort(function(a,b){return b-a});
points.sort(function(){return 0.5-Math.random()});
document.getElementById("demo").innerHTML = myArrayMin(points);
document.getElementById("demo2").innerHTML=points[0];
document.getElementById("demo").innerHTML="Apple is found in position"+position;
document.getElementById("demo").innerHTML=fruits.includes("Mango");
document.getElementById("demo").innerHTML=myArrayMin(points);
document.getElementById("demo").innerHTML=fruits;
document.getElementById("demo").innerHTML=myList;
document.getElementById("demo").innerHTML=fruits+"<br><br>"+citrus;
document.getElementById("demo").innerHTML=spliced;
document.getElementById("demo1").innerHTML="Original Array:<br>"+fruits;
document.getElementById("demo2").innerHTML="New Array:<br>"+fruits;
document.getElementById("demo3").innerHTML="Removed Items:<br>"+removed; 
document.getElementById("demo").innerHTML=newArr;
document.getElementById("demo").innerHTML=size;
const fruits=["Banana","Orange","Apple","Mango"];
document.getElementById("demo").innerHTML=fruits[0];
document.getElementById("demo").innerHTML=fruits[fruits.length-1];
document.getElementById("demo").innerHTML=numbers2;
const numbers2=numbers1.map(myFunction);
const numbers2=numbers1.map(myFunction);
document.getElementById("demo").innerHTML=numbers2;
const myArr=[1,2,3,4,5,6];
const newArr=myArr.flatMap(x=>[x,x*10]);
const over18 = numbers.filter(myFunction);
document.getElementById("demo").innerHTML=over18;
document.getElementById("demo").innerHTML=newArr;
const temp=[27,28,30,40,42,35,30];
const over18=numbers.filter(myFunction);
const arr1=[1,2,3];
const arr2=[4,5 6];
const arr3=[...arr1,...arr2];
const q1=["Jan","Feb","Mar"];
const q2=["Apr","May","Jun"];
const q3=["Jul","Aug","Sep"];
const q4=["Oct","Nov","Dec"];
const arr1=[1,2,3];
const arr2=[...arr1];
document.getElementById("demo").innerHTML=arr2; 
const year=[...q1,...q2, ...q3,...q4];
document.getElementById("demo").innerHTML=year; 
document.getElementById("demo").innerHTML=arr3; 
document.getElementById("demo").innerHTML=over18;
const numbers=[23,55,21,87,56];
let a,rest;
var cars;
const arr1=[1,2,3,4,5,6,7,8];
[a,...rest]=arr1;
document.getElementById("demo").innerHTML = "The rest is: " + rest;
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
document.getElementById("demo").innerHTML="Min="+minValue+"<br>Max="+maxValue;
cars[0]="Toyota";
cars.push("Audi");
const myArr=new Uint8Array(5);
const myArr=new Uint8Array([0,1,2,3,4]);
const myArr=Uint8Array.of(0,1,2,3,4);
const myArr=Uint8Array.from([0,1,2,3,4]);
const myArr=new Int8Array(10);
const myArr=new Uint8Array(10);
const myArr=new Uint8ClampedArray(10);
const myArr=new Int16Array(10);
const myArr=new Uint16Array(10);
const myArr=new Int32Array(10);
const myArr=new Uint32Array(10);
const myArr=new BigInt64Array(10);
const myArr=new BigUint64Array(10);
const myArr=new Float16Array(10);
document.getElementById("demo").innerHTML = myArr;
const myArr=new Float32Array(10);
const myArr=new Float64Array(10);
const myArr=Int16Array.from("1234567890");
document.getElementById("demo").innerHTML=myArr;
const myArr=Int16Array.from([1,2,3,4,5,6,7,8,9,0]);
const myArr=Int32Array.of(1,2,3,4,5,6);
const myArr=new Int32Array(10);
document.getElementById("demo").innerHTML=myArr.constructor.name;
const myArr=new Int32Array(10);
document.getElementById("demo").innerHTML=myArr.constructor.name;
const myArr=new Int32Array(10);
document.getElementById("demo").innerHTML = myArr.BYTES_PER_ELEMENT;
const myArr=new Int16Array(10);
myArr.fill(200);
const myArr=new Int16Array(10);
myArr.fill(200,0,3);
const myArr=Int16Array.from([10,15,20,25,30,35,40,45,50]);
const myArr=Int16Array.from([10,15,20,25,30,35,40,45,50]);
document.getElementById("demo").innerHTML=myArr.some((x)=>x>18);
document.getElementById("demo").innerHTML=myArr.find((x)=>x>18);
document.getElementById("demo").innerHTML=myArr;
const myArr=Int32Array.of(1,2,3,4,5,6);
document.getElementById("demo").innerHTML="Array:"+myArr+"<br><br>Bytes per element:"+myArr.BYTES_PER_ELEMENT;
let pos=temp.findLastIndex(x=>x>40);
document.getElementById("demo").innerHTML="The last temperature over 40 was in position"+pos;
let high=temp.findLast(x=>x>40);
document.getElementById("demo").innerHTML="The last temperature over 40 was"+high;
fruits[6]="Lemon";
let sum=numbers.reduce(myFunction);
let sum=numbers.reduceRight(myFunction);
document.getElementById("demo").innerHTML="The sum is"+sum;
let fLen=fruits.length;
let allOver18=numbers.every(myFunction);
let someOver18=numbers.some(myFunction);
const keys=fruits.keys();
document.getElementById("demo").innerHTML="All over 18 is"+allOver18;
let text="";
let text="ABCDEFG";
const myArr=Array.from(text);
document.getElementById("demo").innerHTML=myArr;
const myMonths=months.with(2,"March");
document.getElementById("demo").innerHTML=myMonths;
const myArr=Array.from(myNumbers,(x)=>x*2);
document.getElementById("demo").innerHTML=myArr;
const f=fruits.entries();
for(i=0;i<fLen;i++) {
text +=fruits[i]+"<br>";
}
function myFunction(value){
return value>18;
}
for(let x of keys){
text +=x+"<br>";
}
for(let x of f){
document.getElementById("demo").innerHTML+=x+"<br>";
}
let fLen=fruits.length;
let text="<ul>";
for(let i=0;i<fLen;i++) {
text+="<li>"+fruits[i]+"</li>";
}
text+="</ul>";
document.getElementById("demo").innerHTML=text;
function myFunction(value){
text+="<li>"+value+"</li>";
}
function myFunction(total,value){
return total+value;
}
function myFunction(value){
return value*2;
}
function myFunction(){
fruits.push("Lemon");
document.getElementById("demo").innerHTML=fruits;
}
function myFunction() {
fruits[fruits.length]="Lemon";
document.getElementById("demo").innerHTML=fruits;
}
function myFunction(value){
return value>18;
}
let x="";
const myObj={
name:"John",
age:30,
cars:[
{
name:"Ford",models:["Fiesta","Focus","Mustang"]},{name:"BMW",models:["320","X3","X5"]},{name:"Fiat",models:["500","Panda"]}]}
for (let i in myObj.cars){
x +="<h2>"+myObj.cars[i].name+"</h2>";
for (let j in myObj.cars[i].models){
x+= myObj.cars[i].models[j]+"<br>";
}
}
document.getElementById("demo").innerHTML=x;
const numbers=[4,9,16,25,29];
let first=numbers.find(myFunction);
document.getElementById("demo").innerHTML="First number over 18 is"+first;
function myFunction(value,index,array){
return value>18;
}
function myFunction(value){
return value>18;
}
function myFunction(value,index,array){
return value * 2;
}
function myFunction1(){
points.sort();
document.getElementById("demo").innerHTML=points;
points.sort(function(){return 0.5 Math.random()});
}
function myFunction2(){
points.sort(function(a,b){return a-b});
points.sort(function(a, b){return b-a});
document.getElementById("demo").innerHTML=points;
}
function myFunction() {
for(let i=points.length-1;i>0; i--){
let j = Math.floor(Math.random()*(i+1));
let k=points[i];
points[i]=points[j];
points[j]=k;
}
document.getElementById("demo").innerHTML=points;
}
function myArrayMin(arr){
return Math.min.apply(null,arr);
}
function myArrayMin(arr) {
return Math.min.apply(null, arr);
}
displayCars();
cars.sort(function(a, b){return a.year - b.year});
displayCars();
function displayCars() {
document.getElementById("demo").innerHTML =
cars[0].type +""+cars[0].year+"<br>"+cars[1].type+""+cars[1].year+"<br>"+cars[2].type+""+cars[2].year;
}
displayCars();
function myFunction() {
cars.sort(function(a, b){
let x = a.type.toLowerCase();
let y = b.type.toLowerCase();
if (x < y) {return -1;}
if (x > y) {return 1;}
return 0;
});
displayCars();
}
function displayCars(){
document.getElementById("demo").innerHTML =cars[0].type+""+cars[0].year +"<br>"+cars[1].type+""+cars[1].year+"<br>"+cars[2].type+""+cars[2].year;
}
const myArr=[{name:"X00",price:100},{name:"X01",price:100},{name:"X02",price:100 ,{name:"X03",price:100},{name:"X04",price:110},{name:"X05",price:110},{name:"X06",price:110},{name:"X07",price:110},{name:"X08",price:120},{name:"X09",price:120},{name:"X10",price:120},{name:"X11",price:120},{name:"X12",price:130},{name:"X13",price:130},{name:"X14",price:130},{name:"X15",price:130},{name:"X16",price:140},{name:"X17",price:140},{name:"X18",price:140},{name:"X19",price:140}];
myArr.sort( (p1, p2) => {
if (p1.price < p2.price) return -1;
if (p1.price > p2.price) return 1;
return 0;
});
let txt="";
myArr.forEach(myFunction);
function myFunction(value) {
txt += value.name+""+value.price+"<br>"; 
}
document.getElementById("demo").innerHTML=txt;
</script>
</body>
</html>