var dataVendedores=[
    { nombre:"Arturo Castro",rubro:"Ferretería",telefono:"992025652",foto:"images/person_1.jpg",zona:"Piura"},
    { nombre:"Joselo Costa",rubro:"Ferretería",telefono:"944304741",foto:"images/person_2.jpg",zona:"San_Martín"},
    { nombre:"Caludia Quizpe",rubro:"Instituciones",telefono:"990213425",foto:"images/person_3.jpg",zona:"Ancash"},
    { nombre:"Danner Zavaleta",rubro:"Ferretería",telefono:"989923899",foto:"images/person_4.jpg",zona:"Tumbes"},
    { nombre:"Ibis Lee",rubro:"Instituciones",telefono:"993037689",foto:"images/person_5.jpg",zona:"Piura"} ,
    { nombre:"Alberto Gabriel",rubro:"Instituciones",telefono:"906589993",foto:"images/person_6.jpg",zona:"La_Libertad"},
    { nombre:"Analí Días",rubro:"Ferretería",telefono:"999999999",foto:"images/person_7.jpg",zona:"Amazonas"},
    { nombre:"Christian Domínguez",rubro:"Ferretería",telefono:"999999999",foto:"images/person_8.jpg",zona:"Lambayeque"},
    { nombre:"Ererto Chavez",rubro:"Licitaciones",telefono:"999999999",foto:"images/person_1.jpg",zona:"San_Martín"},
    { nombre:"Danner Zavaleta",rubro:"Ferretería",telefono:"989923899",foto:"images/person_4.jpg",zona:"Cajamarca"},
    { nombre:"Joselo Costa",rubro:"Ferretería",telefono:"944304741",foto:"images/person_2.jpg",zona:"Cajamarca"},
    { nombre:"Caludia Quizpe",rubro:"Instituciones",telefono:"990213425",foto:"images/person_3.jpg",zona:"La_Libertad"},
    { nombre:"Danner Zavaleta",rubro:"Ferretería",telefono:"989923899",foto:"images/person_4.jpg",zona:"Lambayeque"},
    { nombre:"Ibis Lee",rubro:"Instituciones",telefono:"993037689",foto:"images/person_5.jpg",zona:"Amazonas"} ,
    { nombre:"Alberto Gabriel",rubro:"Instituciones",telefono:"906589993",foto:"images/person_6.jpg",zona:"Tumbes"},
    { nombre:"Analí Días",rubro:"Ferretería",telefono:"999999999",foto:"images/person_7.jpg",zona:"Piura"}
   
    ]
    var la_libertad = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
                
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">L</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;"><br></p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">L</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">I</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">B</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">E</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">R</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">T</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">D</p>

    </ul>`

var ancash = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">N</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">C</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">S</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">H</p>

    </ul>`
var lambayeque = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">L</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">M</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">B</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">Y</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">E</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">Q</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">U</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">E</p>

    </ul>`
var piura = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">P</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">I</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">U</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">R</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>

    </ul>`

var tumbes = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">T</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">U</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">M</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">B</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">E</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">S</p>

    </ul>`

var cajamarca = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">C</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">J</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">M</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">R</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">C</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>

    </ul>`

var amazonas = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">M</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">Z</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">O</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">N</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">S</p>

    </ul>`

var san_martin = `<ul class="social nombrezona" style="color: white;display: flex;justify-content: flex-start;flex-direction: column;">
               
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">S</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">N</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;"><br></p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">M</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">A</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">R</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">T</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">Í</p>
    <p style="padding: 0;margin: 0;text-align: center;transform: rotate(0);font-weight: 400;">N</p>

    </ul>`


/*****************************************end-helpers*****************************************************/
// var a =document.getElementById('aquivendedores')
// a.innerHTML=s

function Vendedores(datausar, t) {


   const lugarvendedores = document.getElementById('aquivendedores2')
   const hijosbutones = document.getElementById('aquivendedores2').getElementsByTagName('button')

   document.querySelectorAll('aquivendedores2 button').forEach(e => e.animation = "apa 3s ease-in-out")

   ////////////creaciones////////////////
   var contienevendedor = document.createElement('a')
   contienevendedor.setAttribute("class", "item " + datausar[t].zona + " apareciendo col-sm-6 col-md-6 col-lg-4 col-xl-3 ")
   contienevendedor.setAttribute("style", "width:278px")
       //contienevendedor.setAttribute("href",dataVendedores[t].foto)
       //contienevendedor.setAttribute("data-fancybox",dataVendedores[t].zona)
   contienevendedor.setAttribute("data-caption", `<h5>` + datausar[t].zona + `</h5>
           <h4>` + datausar[t].nombre + `</h4>
            <span class="position">` + datausar[t].rubro + ` - ` + datausar[t].telefono + `</span>`)

   var contienevendedo = document.createElement('div')
   contienevendedo.setAttribute("class", "team-member")
   var contienevende1 = document.createElement('figure')
   if(datausar[t].zona == "La_Libertad") {
       contienevende1.innerHTML = la_libertad ////
   } else if(datausar[t].zona == "Ancash") {
       contienevende1.innerHTML = ancash ////
   } else if(datausar[t].zona == "Lambayeque") {
       contienevende1.innerHTML = lambayeque ////
   } else if(datausar[t].zona == "Piura") {
       contienevende1.innerHTML = piura ////
   } else if(datausar[t].zona == "Tumbes") {
       contienevende1.innerHTML = tumbes ////
   } else if(datausar[t].zona == "Cajamarca") {
       contienevende1.innerHTML = cajamarca ////
   } else if(datausar[t].zona == "Amazonas") {
       contienevende1.innerHTML = amazonas ////
   } else if(datausar[t].zona == "San_Martín") {
       contienevende1.innerHTML = san_martin ////
   }

   var contienevende = document.createElement('img')
   contienevende.setAttribute("src", datausar[t].foto) ////
   contienevende.setAttribute("alt", "Image")
   contienevende.setAttribute("class", "img-fluid")

   var contienevende2 = document.createElement('div')
   contienevende2.setAttribute("class", "p-3")
   var contieneven21 = document.createElement('h3')
   contieneven21.textContent = datausar[t].nombre ////
   var contieneven22 = document.createElement('span')
   contieneven22.setAttribute("class", "position")
   contieneven22.textContent = datausar[t].rubro + " - " + datausar[t].telefono ////

   contienevende2.appendChild(contieneven21)
   contienevende2.appendChild(contieneven22)
   contienevende1.appendChild(contienevende)
   contienevendedo.appendChild(contienevende1)
   contienevendedo.appendChild(contienevende2)
   contienevendedor.appendChild(contienevendedo)
   lugarvendedores.appendChild(contienevendedor)
}




function llenar(datausar) {
   $("#aquivendedores2").empty();
   $("#aquivendedores2").removeClass("slick-initialized slick-slider")
   for(var t = 0; t < datausar.length; t++) {
       Vendedores(datausar, t)

   }



}
llenar(dataVendedores)


function filtrosede(a) {
   if(a.id == "todo") {
       llenar(dataVendedores)
   } else {
       var datausar = dataVendedores.filter(dataVendedores => dataVendedores.zona == a.id);

       llenar(datausar)
   }
   $('.autoplay').slick({
       infinite: false,
       speed: 300,
       draggable: false,
       slidesToShow: 4,
       slidesToScroll: 3,
       responsive: [{
               breakpoint: 1024,
               settings: {
                   slidesToShow: 3,
                   draggable: false,
                   slidesToScroll: 3,
                   infinite: true,
                   dots: false
               }
           }, {
               breakpoint: 600,
               settings: {
                   slidesToShow: 2,
                   draggable: false,
                   mobileFirst: true,
                   slidesToScroll: 2
               }
           }, {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1,
                   draggable: false,
                   slidesToScroll: 1
               }
           }
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
       ]
   });
   $('.filtrosH ').removeClass('active');
   var elementos = document.getElementById(a.id)
   elementos.classList.add("active")
}