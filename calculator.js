let choice=prompt('If you want to calculate, write "calc" and if you want to check age, write "age"');
if(choice=="calc"){
    alert("Let's calculate!");
    let a, b, c;
    a=prompt("Give a number: ");
    b=prompt("Give a second number: ");

    alert("Sum of a & b is "+(Number(a)+Number(b)));
    alert("Subtracted: "+(Number(a)-Number(b)));
    alert("divided: "+(Number(a)/Number(b))+ " \nmultiplied: "+Number(a)*Number(b));
} else if (choice=="age") {
    let age= prompt("Write your age: ");
    if (age<18) {
        alert("You are too young");
    } else {
        alert("Welcome!");
    }
}
