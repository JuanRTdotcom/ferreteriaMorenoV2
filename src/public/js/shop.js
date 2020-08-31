    let _database = []
    let _colours = []
    let _headings = []
    let _brands = []
    let _dataLocal = []

    function ajax(){
        const http = new XMLHttpRequest();
        const url = '/catalogo-online/getData'
         
        http.onreadystatechange = function (){
            if(this.readyState == 4  && this.status == 200){
                let miData = this.response
                // console.log(JSON.parse(miData))
                _database = JSON.parse(miData)._misDatosBD
                _colours = JSON.parse(miData).coloresUnicos
                _headings = JSON.parse(miData).rubrosUnicos
                _brands = JSON.parse(miData).lineasUnicos
                _dataLocal=_database
                document.getElementById('elementosencontrados').innerHTML = _database.length
                
                let setColours = document.getElementById('_setColours')
                let setHeading = document.getElementById('_setHeading')
                let setBrands = document.getElementById('_setBrands')
                

                _colours.forEach((e) => {
                    let cantidad = _database.filter(x=>x.color == e)
                         let _newelement = document.createElement('li')
                         _newelement.setAttribute('style','display:flex;justify-content:space-between;padding:10px 0 0;')
                         
                         _newelement.innerHTML = `
                         
                                    <div onclick="filtroColor('${e}')" for="white" style="font-size: 12px;text-decoration: none;cursor: pointer;color:black;">
                                    <i class="fa fa-circle" style="color:red;"> </i> ${e}
                                    
                                        </div>
                                    <div style="font-size: 12px">${cantidad.length}</div>
                                        `
                        setColours.appendChild(_newelement)
                        
                })

                _headings.forEach((e) => {
                    let cantidad = _database.filter(x=>x.rubro == e)
                    let _newelement = document.createElement('li')
                    _newelement.setAttribute('style','display:flex;justify-content:space-between;padding:10px 0 0;')
                    _newelement.innerHTML = `
                    <div onclick="filtroRubro('${e}')" style="font-size: 12px;text-decoration: none;cursor: pointer;color:black;">${e}</div>
                    <div style="font-size: 12px">${cantidad.length}</div>
                    `
                    setHeading.appendChild(_newelement)
                })
                
                _brands.forEach((e) => {
                    let cantidad = _database.filter(x=>x.linea == e)
                    let _newelement = document.createElement('li')
                    _newelement.setAttribute('style','display:flex;justify-content:space-between;padding:10px 0 0;')
                    _newelement.innerHTML = `
                    <div onclick="filtroMarca('${e}')" style="font-size: 12px;text-decoration: none;cursor: pointer;color:black;">${e}</div>
                    <div style="font-size: 12px">${cantidad.length}</div>
                    `
                    setBrands.appendChild(_newelement)
                })

                crearPaginacion(_database,_database.length)

                


            }
        }
        http.open('GET',url)
        http.send()
    }
    
    ajax()


    let crearPaginacion = (database,dbLength) => {
        document.getElementById('elementosencontrados').innerHTML = database.length
        let cantiadPaginas = 16
        let totalPages = Math.ceil(dbLength/cantiadPaginas)
        
        $('#pagination-demo').twbsPagination({
            totalPages: totalPages,
            visiblePages: 5,
            onPageClick: function (event, page) {
                let setProductos = document.getElementById('_setProductos')
                setProductos.innerHTML=``
                let inicio = (cantiadPaginas*page) -cantiadPaginas
                let final = (page *cantiadPaginas)-1
                buscarProductos(database)
                llenarProductos(database,inicio,final,setProductos)
            }
        });
    }

    let buscarProductos = (datos) => {
        let nombres = datos.map(function(x){
            return x.nombre;
        });
        var nombresUnicos=nombres.filter(unique);
        // var demo1 = new autoComplete({
        //     selector: '#clienteVentas',
        //     minChars: 1,
        //     source: function(term, suggest){
        //         term = term.toLowerCase();
        //         var choices = nombresUnicos;
        //         var suggestions = [];
        //         for (i=0;i<choices.length;i++)
        //             if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
        //         suggest(suggestions);
        //     }
        // });
    }

    let llenarProductos = (database,inicio,final,tabla) => {

        for(let i = inicio; i<=final;i++){
            if(database[i]){

            
            let _newelement = document.createElement('div')
            _newelement.setAttribute('class','col-lg-3 col-md-6 col-sm-4 col-6 _productos')
            _newelement.setAttribute('style','background:white;border-top: 6px #F3F3F3 solid;transition:.3s;border-right: 3px #F3F3F3 solid;border-bottom: 0;border-left: 3px #F3F3F3 solid;border-radius:10px')
            _newelement.innerHTML = `
            <div class="product__item">
            <div class="product__item__text">
                <h5 style="font-size: 12px;text-align: left;font-weight: 900;">${database[i].linea}</h5>
                <h6 style="font-size: 14px;text-align: left;font-weight: 400;">${database[i].nombre}</h6>
                <h6 style="font-size: 14px;text-align: left;font-weight: 400;color:#EA593F">S/. ${database[i].precio}</h6>
            </div>
            <div class="product__item__pic set-bg" style="background: url('${database[i].imagenURL}')center;background-size: contain;background-repeat: no-repeat;">
                <ul class="product__item__pic__hover">
                    <li><a><i class="fa fa-heart"></i></a></li>
                </ul>
            </div>
            
        </div>
            `
            tabla.appendChild(_newelement)
         }
        }
        
    }

    let filtroColor = detalle => {
        
            $('#pagination-demo').twbsPagination('destroy');
            let dataFiltradaxColores = _database.filter(x=>x.color == detalle)
            _dataLocal=dataFiltradaxColores
            crearPaginacion(dataFiltradaxColores,dataFiltradaxColores.length)
    }
    let filtroRubro = detalle => {
        
        $('#pagination-demo').twbsPagination('destroy');
        let dataFiltradaxColores = _database.filter(x=>x.rubro == detalle)
        _dataLocal=dataFiltradaxColores
        crearPaginacion(dataFiltradaxColores,dataFiltradaxColores.length)
}
let filtroMarca = detalle => {
        
    $('#pagination-demo').twbsPagination('destroy');
    let dataFiltradaxColores = _database.filter(x=>x.linea == detalle)
    _dataLocal=dataFiltradaxColores
    crearPaginacion(dataFiltradaxColores,dataFiltradaxColores.length)
}

let setOrden = () =>{
    let mival = document.getElementById('orderpor').value
    switch(mival){
        
        case 'mayor':
            var data=_dataLocal.sort(function (a, b) {
                
                return (b.precio - a.precio)
              
          })
          $('#pagination-demo').twbsPagination('destroy');
            crearPaginacion(data,data.length)    
        break;
        case 'menor':
            var data=_dataLocal.sort(function (a, b) {
                
                return (a.precio - b.precio)
              
          })
          $('#pagination-demo').twbsPagination('destroy');
            crearPaginacion(data,data.length)    
        break;
    }
}

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }


  document.getElementById('buscarConsulta').addEventListener('submit',e=>{
    e.preventDefault()
    let inputDato = document.getElementById('clienteVentas').value
    let dataFiltrado = _dataLocal.filter(e=>(e.nombre.toLowerCase()).includes(inputDato.toLowerCase()))
    if(dataFiltrado.length>0){
        $('#pagination-demo').twbsPagination('destroy');
            crearPaginacion(dataFiltrado,dataFiltrado.length) 
    }else{

    }

    
  })

  let leerDat=()=>{
    let inputDato = document.getElementById('clienteVentas').value
    
    if(inputDato==''){
        $('#pagination-demo').twbsPagination('destroy');
        crearPaginacion(_dataLocal,_dataLocal.length) 
    }
  }