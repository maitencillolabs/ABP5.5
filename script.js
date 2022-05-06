let verFeriados=document.getElementById("feriados")
let arregloFer=[];
let req='https://www.feriadosapp.com/api/holidays.json'
function traer(){   
    fetch(req)
    .then(response=>response.json())
    .then((data)=>{
  arregloFer=data.data
  console.log(arregloFer)
  recorrerPost()
  }) }
function recorrerPost(){
            arregloFer.map((e) => {
                verFeriados.innerHTML += `
            <tr class="table-primary">
            <th>${e.date}</th>
            <td>${e.title}</td>
            <td>${e.extra}</td>
            </tr>`
            })
          }
