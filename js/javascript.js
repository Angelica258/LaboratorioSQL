$("a").click(function (event){
	event.preventDefault();
    if ($(this).data('seleccion') != null){
        if ($(this).data('seleccion') === "index"){
            window.location.href = "index.html";
        } else {
            $("#contenedor").load('paginas/'+$(this).data('seleccion')+'.html');
        }
    }
});

