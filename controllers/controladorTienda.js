let productos=[

    {
        nombre:"KAMIZAMA",
        precio:64000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama1.webp?alt=media&token=f257df94-685b-4334-a4fe-05e1ac58d9d9','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama2.webp?alt=media&token=417b42fd-7715-4f7e-873f-ba7e1aa20a6c']
    },
    {
        nombre:"GOHAN",
        precio:54999,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/gohan1.webp?alt=media&token=ce45c3f8-146b-41c9-81cc-08441e6ed6b4','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/gohan2.webp?alt=media&token=d45481e8-c175-4731-8c9b-33c2bce04237']
    },
    {
        nombre:"MANDO CON GROGU",
        precio:70000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/mandalorian.webp?alt=media&token=f777432d-d98f-421d-8fb9-1134a176d404','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/mandalorian2.jpg?alt=media&token=08634096-d9d7-4d50-a98b-08115fa38818']
    },
    {
        nombre:"FREEZER",
        precio:54999,
        fotos:['https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/freezer1.webp?alt=media&token=7b87d57d-8a2f-4977-ae69-a7f3f1169e14','https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/freezer2.webp?alt=media&token=7ad6ba16-775f-42e4-93a1-329bb699e383']
    }

]

let fila=document.getElementById("fila")

//recorrer el arreglo
productos.forEach(function(producto){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100","h-100")
    foto.src=producto.fotos[0]

    let nombre=document.createElement("h3")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h2")
    precio.classList.add("fw-bold")
    precio.textContent='$'+producto.precio

    //detectando eventos
    foto.addEventListener("mouseover",function(){
        foto.src=producto.fotos[1]
    })

    foto.addEventListener("mouseleave",function(){
        foto.src=producto.fotos[0]
    })



    //padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})