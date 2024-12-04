async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json();
    console.log(coctail);
    const randomCoctail = coctail.drinks.sort(()=> 0.5 - Math.random()).slice(0, 4);
    randomCoctail.forEach(element => {
        const box = document.createRange().createContextualFragment(`
            
            <img src="${element.strDrinkThumb}" alt="">
                <div class="work-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, corporis culpa sequi sunt, rerum ea, mollitia libero minima minus a quaerat alias! Facilis ipsa corrupti ullam ratione vitae fugit odit cumque veniam repudiandae a. Obcaecati doloribus assumenda fuga aspernatur placeat dolorum, labore explicabo fugiat. Est, voluptate repellendus velit mollitia ab saepe! Ducimus aspernatur perspiciatis molestias asperiores facilis nulla dolore quisquam repudiandae voluptatibus voluptate officiis, laborum necessitatibus illo error cupiditate ad debitis, id possimus eveniet consectetur. Maiores corrupti illo ullam amet voluptate eius molestiae.</p>
                        <button class="btn button-2">say hi</button>
            </div>
            
            `)
            const work_row = document.querySelector('.work-row');
            work_row.append(box)
    })
}
getData()

const btn_validar = (document.getElementById("btn-validar").onclick = (e) => {
  e.preventDefault();
  const inputArr = [
    { id: "nombre", name: "Nombre" },
    { id: "email", name: "Email" },
    { id: "fecha", name: "Fecha" },
    { id: "hora", name: "Hora" },
    { id: "mensaje", name: "Mensaje" },
  ];
  for (let { id, name } of inputArr) {
    const elemento = document.getElementById(id);
    if (elemento.value.trim() === "") {
      return swal({
        title: `El campo ${name} no puede estar vacío`,
        icon: "error",
      });
    }
    if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(elemento.value)) {
      return swal({
        title: `El campo ${name} no tiene el formato correcto`,
        icon: "error",
      });
    }
  }
  swal({
    title: `Los datos fueron enviados satisfactoriamente`,
    icon: "success",
  });
  inputArr.forEach(({ id }) => (document.getElementById(id).value = ""));
});

