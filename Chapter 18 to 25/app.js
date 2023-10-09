                   
                   //.......................  CHAPTER # 18 to 20 ...................  //


     //.................  ANSWER # 1  .................  //

// for(var i = 1; i <=5; i++){
//     document.write('Hello World','<br>')
// }



    //.................  ANSWER # 2  ................... //

// for(var i = 1; i <=10; i++){
//     document.write(i,"<br>")
// }



     //.................  ANSWER # 3  ................... //

// var userInp = +prompt('Enter a table number')
// var userInp1 = +prompt('Enter a lenght of table number')

// for(var i = 1; i <=userInp1; i++){
//     document.write(userInp  +' '+  'x'  +' '+  i  +' '+  ' =' +' '+ userInp * i , '<hr>')
// }




    //.................  ANSWER # 4  ................... //

// var arr = ['Nokia','Samsung','Apple','Sony','Huawei']

// for(var i = 0; i <arr.length; i++){
//     document.write('<h1>' + arr[i], '<hr>' + '</h1>')
// }



    //.................  ANSWER # 5  ................... //

// var fruits = ['Apple','Banana','Mango','Orange','Stawberry']

// for(var i = 0; i <fruits.length; i++){

//     document.write(fruits[i],'<br>',)
    

// }

// for(var i = 0; i < fruits.length; i++) {
//     document.write('<br>', "Element at index " + i +" is " + fruits[i], "<br>");
// }
    

     //.................  ANSWER # 6  ................... //

// var num = prompt("Enter number of items: ");
// var arr = [];

// for (var i = 0; i < num; i++) {
//     var item = prompt("Enter value for index " + i);
//     arr.push(item);
// }

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i], "<br>");
// }



    //.................  ANSWER # 7  ................... //

// var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ,]
// var ReverseCount = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ,]
// var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, ,]
// var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, ,]
// var Series = ['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k,']


// document.write('<h1>', 'Counting:' , '</h1>', '<h4>' , count , '</h4>')
// document.write('<h1>', 'Reverse Counting:' , '</h1>', '<h4>' , ReverseCount , '</h4>')
// document.write('<h1>', 'Even:' , '</h1>', '<h4>' , Even , '</h4>')
// document.write('<h1>', 'Odd:' , '</h1>', '<h4>' , Odd , '</h4>')
// document.write('<h1>', 'Series:' , '</h1>', '<h4>' , Series , '</h4>')



    //.................  ANSWER # 8  ................... //
    
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inp = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ");
// var match = "no";

// for (var i = 0; i< items.length; i++) {
//     if (inp == items[i]) {
//         match = "yes";
//         alert(inp + " is available at index " + i + " in our bakery.");
//         break
//     }
// }

// if (match == "no") {
//     alert(inp + " is not available in our bakery.");
// }



    //.................  ANSWER # 9  ................... //

// var numbers = [24, 99, 78, 91, 12];
// var max = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The largest number is " + max);



    //.................  ANSWER # 10  ................... //

    // var numbers = [24, 99, 78, 91, 12];
// var min = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The smallest number is " + min);



    //.................  ANSWER # 11  ................... //

// var numbers = [24, 99, 78, 91, 12];
// var max = numbers[0];
// var min = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The largest number is " + max, ".<br>");
// document.write("The smallest number is " + min + ".");



    //.................  ANSWER # 12  ................... //

// for (var i = 1; i<=100; i++) {
//     document.write(5*i + " , ");
// }



    //.................  ANSWER # 13  ................... //

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write("<table><tr><td>Students</td><td>Scores</td></tr>");
// for (var i = 0; i < students.length; i++) {
//     document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`)
// }
// document.write("</table>");



    //.................  ANSWER # 15  ................... //

// var arr = [ [1,2,3] , [4,5,6] , [7,8,9] ];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         document.write(arr[i][j] + " ")
//     }
//     document.write("<br>")
// }



    //.................  ANSWER # 19  ................... //

// var num = 7;

// for (var i = 1; i <= 7; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     num--
//     document.write("<br>")
// }



    //.................  ANSWER # 20  ................... //

// 20(a)

// var num = 5;

// for (var i = 1; i <= 4; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     document.write("<br>")
// }



    //.................  ANSWER # 20(b)  ................... //

// var num = 5;

// for (var i = 1; i <= num; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }



    //.................  ANSWER # 20(c)  ................... //

// var num = 5;

// for (var i = 1; i <= 5; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     num--
//     document.write("<br>")
// }



                     //.......................  CHAPTER # 21 to 25 ...................  //


    //.................  ANSWER # 1  ................... //

// var firstName = prompt("Enter First Name: ");
// var upperFirstName = firstName.charAt(0).toUpperCase();
// var lowerFirstName = firstName.slice(1).toLowerCase();
// firstName = upperFirstName + lowerFirstName;
// var lastName = prompt("Enter Last Name: ");
// var upperLastName = lastName.charAt(0).toUpperCase();
// var lowerLastName = lastName.slice(1).toLowerCase();
// lastName = upperLastName + lowerLastName;

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);



    //.................  ANSWER # 2  ................... //

// var inp = prompt("What is your favourite mobile phone model: ");
// document.write("My favourite mobile phone model is " + inp + "<br>Length of string: " + inp.length);


    
    //.................  ANSWER # 3  ................... //

// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>Index of 'n': " + nationality.indexOf("n"))



    //.................  ANSWER # 4  ................... //

// var word = "Hello World";
// document.write("String: " + word + "<br>Last index of 'l': " + word.lastIndexOf("l"));



    //.................  ANSWER # 5  ................... //

// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>Character at '3': " + nationality.charAt(3));



    //.................  ANSWER # 6  ................... //

// var firstName = prompt("Enter First Name: ");
// var upperFirstName = firstName.charAt(0).toUpperCase();
// var lowerFirstName = firstName.slice(1).toLowerCase();
// firstName = upperFirstName.concat(lowerFirstName);
// var lastName = prompt("Enter Last Name: ");
// var upperLastName = lastName.charAt(0).toUpperCase();
// var lowerLastName = lastName.slice(1).toLowerCase();
// lastName = upperLastName.concat(lowerLastName);

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);



    //.................  ANSWER # 7  ................... //

// var city = "Hyderabad";
// var replaced = city.replace("Hydera", "Islama");
// document.write("City: " + city + "<br>After Replacement: " + replaced);



    //.................  ANSWER # 8  ................... //

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaced = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>After Replacement: " + replaced);



    //.................  ANSWER # 9  ................... //

// var string = "479";
// document.write("String: " + string + "<br>Type: " + typeof(string), "<br>");
// var num = parseInt(string);
// document.write("Number: " + num + "<br>Type: " + typeof(num));



    //.................  ANSWER # 10  ................... //

// var url = prompt("Enter url: ");
// var domain = url.slice(4);
// document.write("URL: " + url + "<br>Domain: " + domain);



    //.................  ANSWER # 11 ................... //

// var inp = prompt("Enter a word: ");
// document.write("User input: " + inp + "<br>Upper case: " + inp.toUpperCase());



    //.................  ANSWER # 12  ................... //

// var inp = prompt("Enter a word: ");
// document.write("User input: " + inp + "<br>Lower case: " + inp.toLowerCase());



    //.................  ANSWER # 13  ................... //

// var userInput = prompt("Enter First Name: ");
// var upperUserInput = userInput.charAt(0).toUpperCase();
// var lowerUserInput = userInput.slice(1).toLowerCase();
// var titled = upperUserInput + lowerUserInput

// document.write("User input: " + userInput + "<br>Title case: " + titled);



    //.................  ANSWER # 14  ................... //

// var num = 35.36;
// var strNum = num.toString();
// var withoutDot = strNum.replace(".", "");
// document.write("Number: " + num + "<br>Result: " + withoutDot);



    //.................  ANSWER # 15  ................... //

// var a = "3";
// var b = "3";
// document.write("a + b = " + a+b);



    //.................  ANSWER # 16  ................... //

// var a = "3";
// var b = "3";
// var res = a-b;
// document.write("a - b = " + res.toString());




                   //..................... END ......................//


