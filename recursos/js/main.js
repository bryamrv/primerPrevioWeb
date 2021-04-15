
//enlace http://demo6497253.mockable.io/noticias

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}



loadJSON('https://demo6497253.mockable.io/noticias',
         function(data) { 
             cargarimagen(data[0].img);
             cargarTresPrimerasNoticias(data);
             cargarDataCategorias(data);
          },
         function(xhr) { console.error(xhr); }
);


function cargarDataCategorias(array){
    var divcdeportes=document.querySelector("#deportes");
    var divtec = document.querySelector("#colegio"); 
    for(var i=0;i<array.length;i++){
       var nameca=array[i].categoria;
       if(nameca=="Colegio"){
        divtec.innerHTML +='<li class="list-group-item">'+array[i].titulo+'</li>';
       }else if(nameca="Deportes"){
        divcdeportes.innerHTML += '<li class="list-group-item">'+array[i].titulo+'</li>';
       }
    }

}

function cargarimagen(url){
    document.getElementById("img-notice").src=url;
}


function cargarTresPrimerasNoticias(array){
    var div = document.querySelector("#contenedor-noticias"); 
    
    for(var i=0;i<3;i++){
        var data=array[i];
        div.innerHTML += '<div class="noticia"><div class="titulo">'+data.titulo+'</div><hr><div class="descripcion">'+data.descripcion+'<a href="infoNoticia.html?id='+data.id+'">Ver más</a></div></div>'; // Interpreta el HTML
    }
    div.innerHTML +='<a class="btn btn-success w-100" href="index.html">Ver todas las noticias</a>';
}





