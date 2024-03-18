//chapter14-16 (Array)

//Q1

// var studentsName = [];

//Q3

// var myStrings = ['saif','hammad','huzaifa'];

//Q4

// var myNumbers = [1,2,3,4,5];


//Q5

// var myBoolean = [true,false];


//Q6

// var mixedArray = [1,'saif',2,'hammad',3];

//Q7 

// document.write("<h2>Qualifications:</h2>")

// var arrayQualifications = ['1)SSC','<p>2)HSC</p>','<p>3)BCS</p>','<p>4)BS</p>','<p>4)BCOM</p>','<p>5)MS</p>','<p>6)M.phil.</p>']

// document.write(arrayQualifications[0])
// document.write(arrayQualifications[1])
// document.write(arrayQualifications[2])
// document.write(arrayQualifications[3])
// document.write(arrayQualifications[4])
// document.write(arrayQualifications[5])
// document.write(arrayQualifications[6])




//Q8

// var students = ['Ayaan','Hammad','Numan'];

// var marksOf3Students = [400,380,420];//Assumed total marks 500

// var percent = [marksOf3Students[0]*100 /500,marksOf3Students[1]*100 /500,marksOf3Students[2]*100 /500];

// document.write("<p> Score of " + students[0] + " is " + marksOf3Students[0] + "." + "Percentage:" + percent[0]+"%</p>");
// document.write("<p> Score of " + students[1] + " is " + marksOf3Students[1] + "." + "Percentage:" + percent[1]+"%</p>");
// document.write("<p> Score of " + students[2] + " is " + marksOf3Students[2] + "." + "Percentage:" + percent[2]+"%</p>");





//Q9


// var Color = ['Red', 'Black', 'Yellow', 'Green'];
// document.write(" <p><span style='font-weight:bold'>Original Array :</span>" + Color + "</p>");

// var userPromptMy = prompt("Which color do you want to add in the beginning?");
// if (userPromptMy !== null && userPromptMy !== "") {
//     Color.unshift(userPromptMy);//unshift for add in the beginning
//     document.write(" <p><span style='font-weight:bold'>1)Added  Color in the beginning :</span>" + userPromptMy + "</p>");
//     document.write(" <p><span style='font-weight:bold'>Updated Array :</span>" + Color + "</p>");


//     var userPromptMy2 = prompt("Which color do you want to add in the last?");
//     if (userPromptMy2 !== null && userPromptMy2 !== "") {
//         Color.push(userPromptMy2);//adding in the last
//         document.write(" <p><span style='font-weight:bold'>2)Added " + "  " + userPromptMy2 + " Color in the last :</span>" + Color + "</p>");

//         //colors added in the beginning
//         Color.unshift('Blue', 'Violet');//unshift for add in the beginning

//         document.write(" <p><span style='font-weight:bold'>a)Added two Colors in the beginning :</span>Blue,Violet </p>");
//         document.write(" <p><span style='font-weight:bold'>Updated Array :</span>" + Color + "</p>");

//         Color.shift(Color);//shift for removing from the beginning
//         document.write(" <p><span style='font-weight:bold'>b)Remove first Color from the beginning :</span>Blue</p>");
//         document.write(" <p><span style='font-weight:bold'>Updated Array :</span>" + Color + "</p>");



//         document.write(" <p><span style='font-weight:bold'>c)Remove  Color from the last :</span>" + Color.pop(Color) + "</p>");//pop remove from  last
//         document.write(" <p><span style='font-weight:bold'>Updated Array :</span>" + Color + "</p>");

//         ///Colors in beginning

//         var userPromptMy3 = +prompt("In which index do you want to add color(should be in number)?");

//         var userPromptMy4 = prompt("Which color do you want to add in your given index ");
//         if (userPromptMy3 >= 0 && userPromptMy3 <= Color.length && userPromptMy3 !== null && userPromptMy3 !== "" && userPromptMy4 !== null && userPromptMy4 !== "") {
//             var add1 = Color.splice(userPromptMy3, 0, userPromptMy4);//splice for adding in any index you want
//             document.write(" <p><span style='font-weight:bold'>3) Index:</span>" + userPromptMy3 + "</p>");
//             document.write(" <p><span style='font-weight:bold'>a) Color added:</span>" + userPromptMy4 + "</p>");
//             document.write(" <p><span style='font-weight:bold'>Updated Array :</span>" + Color + "</p>");


//             var userPromptMy5 = parseInt(prompt("Enter the index from which you want to remove color(s):"));
//             var numberOfColorsToRemove = parseInt(prompt("Enter the number of colors you want to remove:"));

//             if (userPromptMy5 >= 0 && userPromptMy5 < Color.length && userPromptMy5 !== null && userPromptMy5 !== "" && numberOfColorsToRemove !== null && numberOfColorsToRemove !== "") {
//                 var removedColors = Color.splice(userPromptMy5, numberOfColorsToRemove); // Remove elements starting from index
//                 document.write("<p>4)<span style='font-weight:bold'>Color Removed from Index: </span>" + userPromptMy5 + "</p>");

//                 document.write("<p>a)<span style='font-weight:bold'>Removed Colors: </span>" + removedColors + "</p>");
//                 document.write("<p><span style='font-weight:bold'>Updated Array:</span> " + Color + "</p>");
//             }

//         }

//     }
// } else {
//     document.write("Invalid input")
// }





//Q10



// var scoresStudents  = [320,230,480,120];
// document.write(`Scores of Students: ${scoresStudents} <br>`);

// document.write(`Scores of Students: ${scoresStudents.sort()}`);



//Q11

// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia <br>"];
// document.write(cities)

// cities.slice(0, 3)
// document.write("Selected cities:", cities.slice(0, 3));


//Q12


// var cat =  ['This', 'is', 'my',  'cat <br>'];
// document.write(`Array : <br> ${cat}`)
// cat = cat.join(" ");
// document.write(`String : <br> ${cat}`)




//Q15


// var select = ['Apple',' Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];

// document.write(`<select>
// <option>${select[0]}</option>
// <option>${select[1]}</option>
// <option>${select[2]}</option>
// <option>${select[3]}</option>
// <option>${select[4]}</option>
// <option>${select[5]}</option>

// </select>`);


//Class Excercise
// var num = parseInt(prompt("Enter any number which is divided by 3 as well as 5"));

// if(num % 3 == 0  && num % 5 == 0){
//     alert(true)
// }else{
//     alert(false)
// }