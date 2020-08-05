var menuArray = [];

function showMenuList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let menu = array[i];
        

        htmlContentToAppend += `
        <p><b>Nombre:</b> `+ menu.nombre +`</p>
        <p><b>Descripción</b>: `+ menu.description +`</p>
        <p><b>Precio</b>: `+ menu.precio +`</p>
        <hr>
        `

        document.getElementById("informacion").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){  
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            menuArray = resultObj.data;
            showMenuList(menuArray);
        }
    });

});