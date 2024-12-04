const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const inputArr = [{id:"nombre", name:"Nombre"},
     {id:"email", name:"Email"},
     {id:"fecha", name:"Fecha"},
    {id:"hora", name:"Hora"},
    {id:"mensaje", name:"Mensaje"}
    ]
    for(let {id, name} of inputArr){
        const elemento = document.getElementById(id);
        if(elemento.value.trim() === ""){
            return swal({
                title: `El campo ${name} no puede estar vacío`,
                icon: "error",
                 })
        }
        if(id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(elemento.value)){
            return swal({
                title: `El campo ${name} no tiene el formato correcto`,
                icon: "error",
                 })
        }
    }
    swal({
        title: `Los datos fueron enviados satisfactoriamente`,
        icon: "success",
         })
         inputArr.forEach (({id}) => document.getElementById(id).value = "")
}