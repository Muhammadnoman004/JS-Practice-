               // ........... CHAPTER # 26 TO 34.......... //


// ..... ANSWER # 01 ..... //

// let userInp = +prompt('Enter a positive integer value');
// let round = Math.round(userInp);
// let floor = Math.floor(userInp);
// let ceil = Math.ceil(userInp);
// document.write(`<h1> Number: ${userInp} <br> Round off value: ${round} <br> Floor value: ${floor} <br> Ceil value: ${ceil} </h1>`)



// ..... ANSWER # 02 ..... //

// let userInp = +prompt('Enter a negative integer value');
// let round = Math.round(userInp);
// let floor = Math.floor(userInp);
// let ceil = Math.ceil(userInp);
// document.write(`<h1> Number: ${userInp} <br> Round off value: ${round} <br> Floor value: ${floor} <br> Ceil value: ${ceil} </h1>`)



// ..... ANSWER # 03 ..... //

// let userInp = +prompt('Enter a positive floating point');
// let round = Math.round(userInp);
// let floor = Math.floor(userInp);
// let ceil = Math.ceil(userInp);
// document.write(`<h1> Number: ${userInp} <br> Round off value: ${round} <br> Floor value: ${floor} <br> Ceil value: ${ceil} </h1>`)



// ..... ANSWER # 04 ..... //

// let userInp = +prompt('Enter a negative floating point');
// let round = Math.round(userInp);
// let floor = Math.floor(userInp);
// let ceil = Math.ceil(userInp);
// document.write(`<h1> Number: ${userInp} <br> Round off value: ${round} <br> Floor value: ${floor} <br> Ceil value: ${ceil} </h1>`)



// ..... ANSWER # 05 ..... //

// let userInp = +prompt('Enter a number to find its absolute');
// let num =  Math.abs(userInp);
// document.write(`<h1> The absolute value of  ${userInp} is  ${num} </h1>`);



// ..... ANSWER # 06 ..... //

// let randomDice = Math.random() * 7 ;
// let randomDice1 = Math.floor(randomDice);
// document.write(`<h1> Random dice value: ${randomDice1} </h1>`);



// ..... ANSWER # 07 ..... //

// let random = Math.random()  * 1;
// let floor = Math.round(random);
// if(floor == 0){
//      document.write(`<fieldset> <h1> 2 <br> Random coin value: HEAD </h1> </fieldset>`)
// }
// else if(floor == 1){
//      document.write(`<fieldset> <h1> ${floor} <br> Random coin value: TAILS </h1> </fieldset>`)
// }



// ..... ANSWER # 08 ..... //

// let randomNum = Math.random() * 100;
// let numfloor = Math.floor(randomNum);
// if(numfloor == 0){
//      document.write(`<h1> Random number between 1 to 100: 5 </h1>`); 
// }
// document.write(`<h1> Random number between 1 to 100: ${numfloor} </h1>`); 



// ..... ANSWER # 09 ..... //

// let userInp = +prompt("Enter your weight in kilograms:");
// document.write(`<h1>The weight of user is ${userInp} Kilograms </h1>`)



// ..... ANSWER # 10 ..... //

// let secret1 = 3;
// let secret2 = 5;
// let secret3 = 8;
// let userInp = +prompt("Enter a number between 1 to 10");
// if(userInp == secret1 || userInp == secret2 || userInp == secret3){
//      alert(`Congratulate !`);
// }
// else{
//      alert(`Try again`)
// }




// ..... ANSWER # 11 ..... //

// let newdate = new Date()
// document.write(`<h1> ${newdate} </h1>`)



// ..... ANSWER # 12 ..... //

// let currentdate = new Date()
// let monthNum = currentdate.getMonth();
// let Allmonthname = ['Januaury' , 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let monthName = Allmonthname[monthNum];
// document.write(`<h1> Current month: ${monthName} </h1>`);



// ..... ANSWER # 13 ..... //

// let currentdate = new Date();
// let dayNum = currentdate.getDay();
// let AllDaysName = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday','Saturday'];
// let dayName = AllDaysName[dayNum ];
// let daysletter = dayName.slice(0,3);
// alert(`Today is : ${daysletter}`);



// ..... ANSWER # 14 ..... //

// let currentdate = new Date();
// let dayNum = currentdate.getDay();
// if(dayNum == 6 || dayNum == 0){
//      alert(`It's Fun day.`)
// }
// else{
//      alert(`It's working day.`)
// }



// ..... ANSWER # 15 ..... //

// let  currentdate = new Date();
// let dateNum = currentdate.getDate();
// if(dateNum <= 15){
//      document.write(`<fieldset> <h1> First fifteen days of the month </h1> </fieldset>`);
// }
// else{
//      document.write(`<fieldset> <h1> Last days of the month </h1> </fieldset>`);
// }



// ..... ANSWER # 16..... //

// let currentdate = new Date();
// let janMili = currentdate.getTime();
// document.write(`<fieldset> <h2> Current Date: ${currentdate} <br> Elapsed miliseconds since january 1 , 1970: ${janMili} </h2> </fieldset>`);



// ..... ANSWER # 17..... //

// let currentdate = new Date();
// let hour = currentdate.getHours();
// if(hour <= 12){
//      document.write(`<fieldset> <h1> It's AM </h1> </fieldset>`);
// }
// else{
//      document.write(`<fieldset> <h1> It's PM  </h1> </fieldset> `);
// }



// ..... ANSWER # 23..... //

// let date = new Date();
// let miliseconds = date.getTime();
// let Dob = new Date("16 feb, 2004");
// let DobMili = Dob.getTime();
// let Minus = miliseconds - DobMili;
// let formula = Minus / (1000 * 60 * 60 * 24 * 365);
// let floor = Math.floor(formula)
// document.write(`<h1> Your Age is ${floor} </h1>`)


            // .......... END .........l.