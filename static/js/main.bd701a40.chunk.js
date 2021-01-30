(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),i=t.n(a),o=t(6),s=t.n(o),l=t(5),c=(t(13),t(14),function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("h1",{children:"javascript basic exercises"})})});var u=function(e){var n=e.setExercise,t=e.setTitle,a=["A JavaScript program to display the current day and time.","A JavaScript program to print the contents of the current window.","A JavaScript program to get the current date.","A JavaScript program to find the area of a triangle where lengths of the three of its sides are given.","A JavaScript program to rotate the string 'Hello, World!' in right direction by periodically removing  one letter from the end of the string and attaching it to the front.","A JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.","A JavaScript program to find 1st January is being a Sunday between 2014 and 2050.","A JavaScript program where the program takes a random integer between 1 to 10, the user input a guess  number. If the user input matches with guess number, the program will display a message 'Good Work'  otherwise display a message 'Not matched'.","A JavaScript program to calculate days left until next Christmas.","A JavaScript program to calculate multiplication and division of two numbers.","A JavaScript program to convert temperatures to and from Celsius, Fahrenheit.","A JavaScript program to get the website URL (loading page).","A JavaScript exercise to create a variable using a user-defined name.","A JavaScript exercise to get the extension of a filename.","A JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.","A JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.","A JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.","A JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.","A JavaScript program to check whether a given integer is within 20 of 100 or 400.","A JavaScript program to check from two given integers, whether one is positive and another one is negative.","A JavaScript program to create a new string adding 'Py' in front of a given string. If the given string begins with 'Py' then return the original string.","A JavaScript program to remove a character at the specified position of a given string and return the new string.","A JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.","A JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.","A JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.","A JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.","A JavaScript program to check whether a string starts with 'Java' and false otherwise.","A JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range."].map((function(e,a){return Object(r.jsx)("button",{onClick:function(){n(a+1),t(e)},children:a+1},a+1)}));return Object(r.jsx)("nav",{className:"container nav",children:a})},d=function(){return Object(r.jsx)("aside",{className:"alert"})},f=function(){return Object(r.jsxs)("footer",{className:"footer",children:["This website is inspired and based on the exercises proposed in",Object(r.jsx)("a",{href:"https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php",target:"_blank",rel:"noopener noreferrer",children:"w3resource"}),", I did it for my personal purpose of studying and practicing javascript."]})},m=document,b=function(){var e=m.querySelectorAll("input"),n=0;do{if(0===e[n].value.length)return!1;n++}while(n<e.length);return!0},p=function(e,n){var t=m.querySelector(".alert"),r=m.createElement("p");r.classList.add(e),r.textContent=n,t.innerHTML=null,t.appendChild(r),"success"!==e&&setTimeout((function(){t.innerHTML=null}),4e3)},g=t(7),h=document;function v(e){try{switch(e){case 1:!function(){try{var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=h.querySelector(".exercise__solution"),t=h.createElement("p"),r=h.createElement("p"),a=new Date,i=a.getDay(),o=a.getHours(),s=a.getMinutes(),l=a.getSeconds(),c=void 0,u=void 0;o>=0&&o<=12?(c=o,u="AM"):(c=o-12,u="PM"),t.textContent="Today is: ".concat(e[i]," "),r.textContent="".concat(c<10?"0"+c:c," ").concat(u," : ").concat(s<10?"0"+s:s," : ").concat(l<10?"0"+l:l),n.innerHTML=null,n.appendChild(t),n.appendChild(r),p("success","\u2714\ufe0f Done!")}catch(d){p("danger","\u2620\ufe0f Error: ".concat(d))}}();break;case 2:!function(){try{var e=h.querySelector(".exercise__solution"),n=h.createElement("button");n.textContent="Print",n.addEventListener("click",(function(){return window.print()})),e.innerHTML=null,e.appendChild(n),p("success","\u2714\ufe0f Done!")}catch(t){p("danger","\u2620\ufe0f Error: ".concat(t))}}();break;case 3:!function(){try{var e=h.querySelector(".exercise__solution"),n=h.createElement("p"),t=(new Date).toLocaleDateString();n.textContent="".concat(t),e.innerHTML=null,e.appendChild(n),p("success","\u2714\ufe0f Done!")}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}();break;case 4:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>\n      Enter the three side lengths and press \'RESULT\' button\n    </legend>\n    <label>Number of the first side</label>\n    <input type="number" placeholder="e.g. 2" required/>\n    <label>Number of the second side</label>\n    <input type="number" placeholder="e.g. 3" required/>\n    <label>Number of the third side</label>\n    <input type="number" placeholder="e.g. 4" required/>\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=n.querySelectorAll("input"),r=parseInt(t[0].value),a=parseInt(t[1].value),i=parseInt(t[2].value),o=(r+a+i)/2,s=Math.sqrt(o*(o-r)*(o-a)*(o-i));isNaN(s)?p("warning","\u26a0\ufe0f Impossible triangle"):p("success","\u2714\ufe0f Area = ".concat(s.toFixed(2)))}catch(l){p("danger","\u2620\ufe0f Error: ".concat(l)),n.reset()}}))}();break;case 5:!function(){try{var e=h.querySelector(".exercise__solution"),n=h.createElement("p"),t="Hello, World!".concat(" ");setInterval((function(){t=t[t.length-1]+t.substring(0,t.length-1),n.textContent=t}),500),e.innerHTML=null,e.appendChild(n),p("success","\u2714\ufe0f Done!")}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}();break;case 6:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a year and press \'RESULT\' button</legend>\n    <label>Enter a year</label>\n    <input\n      type="number"\n      name="year"\n      placeholder="e.g. 1976"\n      required\n    />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f Enter a year");try{var t=n.year.value;p("success",t%400===0||t%4===0&&t%100!==0?"\u2714\ufe0f Yes, ".concat(t," is leap year"):"\u2714\ufe0f No, ".concat(t," isn't leap year"))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r)),n.reset()}}))}();break;case 7:!function(){try{for(var e=h.querySelector(".exercise__solution"),n=h.createElement("p"),t=2014;t<=2050;){var r=new Date(t,0,1);if(0===r.getDay()){var a=h.createElement("span");2045===r.getFullYear()?a.textContent=" and ".concat(r.getFullYear(),". "):a.textContent=" ".concat(r.getFullYear(),", "),n.appendChild(a)}t++}e.innerHTML=null,e.appendChild(n),p("success","\u2714\ufe0f Done!")}catch(i){p("danger","\u2620\ufe0f Error: ".concat(i))}}();break;case 8:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Guess number</legend>\n    <label\n      >Enter a number between 1 to 10 and press \'RESULT\' button</label\n    >\n    <input\n      type="number"\n      name="number"\n      min="1" max="10"\n      placeholder="e.g. 8"\n      required\n    />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form"),t=Math.floor(10*Math.random()+1);n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f Enter a number");try{var r=parseInt(n.number.value);if(r<1||r>10)return void p("warning","\u26a0\ufe0f Enter a number between 1 to 10");r===t?p("success","\u2714\ufe0f Good Work"):p("warning","\u26a0\ufe0f ".concat(r," Not matched, enter other number"))}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a)),n.reset()}}))}();break;case 9:!function(){try{var e=h.querySelector(".exercise__solution"),n=h.createElement("p"),t=(new Date).getTime(),r=(new Date).getFullYear(),a=new Date(r,11,25).getTime()-t,i=Math.floor(a/864e5);n.textContent="".concat(i," days until next Christmas."),e.innerHTML=null,e.appendChild(n),p("success","\u2714\ufe0f Done!")}catch(o){p("danger","\u2620\ufe0f Error: ".concat(o))}}();break;case 10:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter two numbers and select an operation</legend>\n    <label for="a">Enter first number</label>\n    <input type="number" name="a" placeholder="e.g. 20" required />\n    <label for="b">Enter second number</label>\n    <input type="number" name="b" placeholder="e.g. 10" required />\n  </fieldset>\n  <div class="btn-group">\n    <button type="button" name="btnMul">Multiply</button>\n    <button type="button" name="btnDiv">Divide</button>\n  </div>\n</form>\n';var n=e.querySelector("form"),t=n.btnMul,r=n.btnDiv;t.addEventListener("click",(function(){if(!b())return p("warning","\u26a0\ufe0f All fields are required");try{var e=parseInt(n.a.value),t=parseInt(n.b.value);p("success","\u2714\ufe0f ".concat(e," x ").concat(t," = ").concat(e*t))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}})),r.addEventListener("click",(function(){if(!b())return p("warning","\u26a0\ufe0f All fields are required");try{var e=parseInt(n.a.value),t=parseInt(n.b.value);p("success",0===t?"\u2714\ufe0f ".concat(e," / ").concat(t," is undefined."):"\u2714\ufe0f ".concat(e," / ").concat(t," = ").concat(e/t))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r)),n.reset()}}))}();break;case 11:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter degrees and select a type convertion</legend>\n    <label for="degrees">Enter degrees</label>\n    <input\n      type="number"\n      name="degrees"\n      placeholder="e.g. 11"\n      required\n    />\n    <input type="radio" name="to" id="CtoF" />\n    <label for="CtoF">Celsius to Fahrenheit</label>\n    <input type="radio" name="to" id="FtoC" />\n    <label for="FtoC">Fahrenheit to Celsius</label>\n  </fieldset>\n  <button type="button">RESULT</button>\n</form>\n  ';var n=e.querySelector("form"),t=n.querySelector("#CtoF"),r=n.querySelector("#FtoC");n.querySelector("button").addEventListener("click",(function(){if(!b())return p("warning","\u26a0\ufe0f All fields are required");if(!1!==t.checked||!1!==r.checked)try{var e=parseInt(n.degrees.value);!0===t.checked&&p("success","\u2714\ufe0f ".concat(e,"\xb0 Celsius = ").concat((1.8*e+32).toFixed(2),"\xb0 Fahrenheit.")),!0===r.checked&&p("success","\u2714\ufe0f ".concat(e,"\xb0 Fahrenheit = ").concat((.5556*(e-32)).toFixed(2),"\xb0 Celsius."))}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a)),n.reset()}else p("warning","\u26a0\ufe0f \xbfCelsius to Fahrenheit or Fahrenheit to Celsius?")}))}();break;case 12:!function(){try{var e=h.querySelector(".exercise__solution"),n=h.createElement("p");n.textContent="URL: ".concat(h.URL),e.innerHTML=null,e.appendChild(n),p("success","\u2714\ufe0f Done!")}catch(t){p("danger","\u2620\ufe0f Error: ".concat(t))}}();break;case 13:p("info","\ud83d\udeb6 Unsolved"),console.info("Unsolved");break;case 14:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a filename and press \'RESULT\' button</legend>\n    <input type="text" name="filename" placeholder="e.g. readme.txt" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");var t=n.filename.value;if(1!==Object(g.a)(t).filter((function(e){return"."===e})).length)return p("warning","\u26a0\ufe0f Wrong filename");try{var r=t.split(".")[1];p("success","\u2714\ufe0f The extension of a filename is: ".concat(r))}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a))}}))}();break;case 15:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a number and press \'RESULT\' button</legend>\n    <input type="number" name="number" placeholder="e.g. 15" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=parseInt(n.number.value);p("success",t<=13?"\u2714\ufe0f The difference between ".concat(t," and 13 is: ").concat(13-t):"\u2714\ufe0f The double the absolute difference between ".concat(t," and 13 is: ").concat(2*(t-13)))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}))}();break;case 16:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter two numbers and press \'RESULT\' button</legend>\n    <label for="n1">Enter first number</label>\n    <input type="number" name="n1" placeholder="e.g. 8" required />\n    <label for="n2">Enter second number</label>\n    <input type="number" name="n2" placeholder="e.g. 16" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),console.log("here..."),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=parseInt(n.n1.value),r=parseInt(n.n2.value);p("success",t===r?"\u2714\ufe0f ".concat(t," = ").concat(r," => The triple their sum = ").concat(3*(t+r)):"\u2714\ufe0f ".concat(t," + ").concat(r," = ").concat(t+r))}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a))}}))}();break;case 17:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a number and press \'RESULT\' button</legend>\n    <input type="number" name="number" placeholder="e.g. 17" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n    ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=parseInt(n.number.value);p("success","\u2714\ufe0f ".concat(t>19?3*(t-19):19-t))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}))}();break;case 18:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter two numbers and press \'RESULT\' button</legend>\n    <label for="n1">Enter first number</label>\n    <input type="number" name="n1" placeholder="e.g. 9" required />\n    <label for="n2">Enter second number</label>\n    <input type="number" name="n2" placeholder="e.g. 18" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=parseInt(n.n1.value),r=parseInt(n.n2.value);50===t||50===r||t+r===50?p("success","\u2714\ufe0f true"):p("info","\u2714\ufe0f false")}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a))}}))}();break;case 19:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a number and press \'RESULT\' button</legend>\n    <input type="number" name="number" placeholder="e.g. 19" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n    ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=parseInt(n.number.value);Math.abs(100-t)<=20?p("success","\u2714\ufe0f ".concat(t," is within 20 of 100")):Math.abs(400-t)<=20?p("success","\u2714\ufe0f ".concat(t," is within 20 of 400")):p("warning","\u26a0\ufe0f ".concat(t," is out of both ranges"))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}))}();break;case 20:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter two numbers and press \'RESULT\' button</legend>\n    <label for="n1">Enter first number</label>\n    <input type="number" name="n1" placeholder="e.g. -20" required />\n    <label for="n2">Enter second number</label>\n    <input type="number" name="n2" placeholder="e.g. 20" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{var t=parseInt(n.n1.value),r=parseInt(n.n2.value);t<0&&r>0||t>0&&r<0?p("success","\u2714\ufe0f true"):p("info","\u2714\ufe0f false")}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a))}}))}();break;case 21:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a string and press \'RESULT\' button</legend>\n    <label for="str">Enter a string</label>\n    <input type="text" name="str" id="str" placeholder="e.g. twenty-one" required\n    />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{n.str.value.startsWith("Py")?p("success","\u2714\ufe0f ".concat(n.str.value)):p("success","\u2714\ufe0f Py".concat(n.str.value))}catch(t){p("danger","\u2620\ufe0f Error: ".concat(t))}}))}();break;case 22:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>\n      Enter a string and enter a position, then press \'RESULT\' button\n    </legend>\n    <label for="str">Enter a string</label>\n    <input type="text" id="str" name="str" placeholder="e.g. twenty-two" required />\n    <label for="idx">Enter a position</label>\n    <input type="number" id="idx" name="idx" placeholder="e.g. 22" required min="0"/>\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");if(n.idx.value>n.str.value.length-1||n.idx.value<0)return p("warning","\u26a0\ufe0f Out of range");try{for(var t="",r=0;r<n.str.value.length;r++)r!==parseInt(n.idx.value)&&(t+=n.str.value[r]);p("success","\u2714\ufe0f ".concat(t))}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a))}}))}();break;case 23:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a string and press \'RESULT\' button</legend>\n    <label for="str">Enter a string</label>\n    <input type="text" id="str" name="str" placeholder="e.g. twenty-three" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");if(n.str.value.length<1)return p("warning","\u26a0\ufe0f The string length must be greater than or equal to 1.");if(1===n.str.value.length)return p("success","\u2714\ufe0f ".concat(n.str.value));try{for(var t="",r=0;r<n.str.value.length;r++)0===r?t+=n.str.value[n.str.value.length-1]:r===n.str.value.length-1?t+=n.str.value[0]:t+=n.str.value[r];p("success","\u2714\ufe0f ".concat(t))}catch(a){p("danger","Error: ".concat(a))}}))}();break;case 24:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a string and press \'RESULT\' button</legend>\n    <label for="str">Enter a string</label>\n    <input type="text" id="str" name="str" placeholder="e.g. twenty-four" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n    ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");try{for(var t=n.str.value[0],r=0;r<n.str.value.length;r++)t+=n.str.value[r];t+=n.str.value[0],p("success","\u2714\ufe0f ".concat(t))}catch(a){p("danger","\u2620\ufe0f Error: ".concat(a))}}))}();break;case 25:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a number and press \'RESULT\' button</legend>\n    <label for="num">Enter a number</label>\n    <input type="number" id="num" name="num" placeholder="e.g. 25" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");if("0"===n.num.value)return p("success","0 isn't multiple of 3, nor of 7.");try{var t=n.num.value;p("success","\u2714\ufe0f ".concat(t,t%3===0||t%7===0?t%3===0&&t%7===0?" is multiple of 3, also is multiple of 7.":t%3===0?" is multiple of 3.":" is multiple of 7.":" isn't multiple of 3, nor of 7."))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}))}();break;case 26:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a string and press \'RESULT\' button</legend>\n    <label for="str">Enter a string</label>\n    <input type="text" id="str" name="str" placeholder="e.g. twenty-six" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");if(n.str.value.length<3)return p("warning","\u26a0\ufe0f The string length must be 3 or more.");try{var t=n.str.value.substring(n.str.value.length-3);t=t+n.str.value+t,p("success","\u2714\ufe0f ".concat(t))}catch(r){p("danger","\u2620\ufe0f Error: ".concat(r))}}))}();break;case 27:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter a string and press \'RESULT\' button</legend>\n    <label for="str">Enter a string</label>\n    <input type="text" id="str" name="str" placeholder="e.g. twenty-seven" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n  ';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");if(n.str.value.length<4)return p("warning",!1);try{n.str.value.startsWith("Java")?p("success","\u2714\ufe0f ".concat(n.str.value.startsWith("Java"))):p("info","\u2714\ufe0f ".concat(n.str.value.startsWith("Java")))}catch(t){p("danger","\u2620\ufe0f Error: ".concat(t))}}))}();break;case 28:!function(){var e=h.querySelector(".exercise__solution");e.innerHTML=null,e.innerHTML='\n<form>\n  <fieldset>\n    <legend>Enter two numbers and press \'RESULT\' button</legend>\n    <label for="num1">Enter first number</label>\n    <input type="number" id="num1" name="num1" placeholder="e.g. 14" required />\n    <label for="num2">Enter second number</label>\n    <input type="number" id="num2" name="num2" placeholder="e.g. 28" required />\n  </fieldset>\n  <button type="submit">RESULT</button>\n</form>\n';var n=e.querySelector("form");n.addEventListener("submit",(function(e){if(e.preventDefault(),!b())return p("warning","\u26a0\ufe0f All fields are required");if(!1!==isNaN(n.num1.value)||!1!==isNaN(n.num2.value))return p("warning","\u26a0\ufe0f Enter two numbers.");try{console.log(n.num1.value,n.num2.value)}catch(t){p("danger","\u2620\ufe0f Error: ".concat(t))}}))}();break;default:p("danger","\u2620\ufe0f Error: The exercise".concat(e," doesn't exist!"))}}catch(n){console.warn(n)}}var y=function(e){var n=e.exercise,t=e.title;return setTimeout((function(){v(n)}),1),Object(r.jsxs)("main",{role:"main",className:"container exercise",children:[Object(r.jsxs)("h2",{children:[Object(r.jsxs)("span",{children:[n,". "]}),t]}),Object(r.jsx)("div",{className:"exercise__solution"})]})};var E=function(){var e=Object(a.useState)(0),n=Object(l.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(void 0),s=Object(l.a)(o,2),m=s[0],b=s[1],p=void 0;return p=0!==t&&void 0!==m?Object(r.jsx)(y,{exercise:t,title:m}):null,Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(c,{}),Object(r.jsx)(u,{setExercise:i,setTitle:b}),p,Object(r.jsx)(d,{}),Object(r.jsx)(f,{})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bd701a40.chunk.js.map