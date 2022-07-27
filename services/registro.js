import { getAuth, createUserWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let boton=document.getElementById("boton")
let botonSalir=document.getElementById("boton2")

//escucho clic en el boton de registro
boton.addEventListener("click",function(evento){

    //EVITO QUE EL FORMUALRIO SE REINICIE
    evento.preventDefault()

    //capturo lo que escriben en acda caja del formulario
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    console.log(email,password)

    //me autentico ante firebase
    const auth = getAuth();
    //SE LLAMA A LA PROMESA CREATEUSER
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { //si todo sale bien
        // Signed in
        const user = userCredential.user.email;
        console.log(userCredential)
        
        alert("exito en el registro, bienvenido")
        window.location.href='./registro.html'
        // ...
    })
    .catch((error) => { //si fallamos
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("upss fallamos "+errorMessage)
        // ..
    });

})

botonSalir.addEventListener("click",function(){

    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });

})