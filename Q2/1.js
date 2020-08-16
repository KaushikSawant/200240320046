
function demo(){
    let x = document.querySelector("#name").value;
    let y = document.querySelector("#email").value;
    let z = document.querySelector("#pass").value;

    let w = document.querySelector("#show");
    w.innerHTML="Your UserName is " + x;

    let a = document.querySelector("#show1");
    a.innerHTML="Your Email is " + y;

    let b = document.querySelector("#show2");
    b.innerHTML="Your Password is " + z;

}

