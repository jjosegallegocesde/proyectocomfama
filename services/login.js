import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"


let botonLogin=document.getElementById("botonLOGIN")
botonLogin.addEventListener("click",function(evento){

    evento.preventDefault()

    let email=document.getElementById("emailLOGIN").value
    let password=document.getElementById("passwordLOGIN").value


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("bienvenido")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

})



