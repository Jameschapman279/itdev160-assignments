var user = 'James';
var salutation = 'hello';
var greeting = salutation + user + '!Here are the latest Red Apple revies.'
var greetingEl = docutment.getElementById('greeting');

greetingEl.textContent = greeting;



var price=20,
    studentDiscount=.10,
    studentPrice = price - (price * studentDiscount);

var priceEL = document.getElementById('price');
var studentPriceEl = documet.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
 studentPriceEl.textContent = studentPrice.toFixed(2);    
