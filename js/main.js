
$(() => init());

Objeto = {
    init: function(){return this;}
}


let init = function(){
    let source   = $("#template").html();
    let template = Handlebars.compile(source);
    objeto = Objeto.init()
    objeto.template = template;
    loadTemplates(template);
   
    
}




let loadPaises = function(idioma = 'en'){
    template = Objeto.template || null;
    idiomas = {
        'en': "https://restcountries.eu/rest/v2/all",
        'es': "https://restcountries.eu/rest/v2/lang/es",
    }
    let api_url = idiomas[idioma];
       
    let http_api = $.ajax({
        url: api_url,
        method: 'GET',
        dataType: "JSON",
     });
    if(template){
        render_http(http_api, template);
    }
   
}



let render_http = function(http, template, template_parent= $("#contenido")){   
    http.done(
            (data) => {
                context = {'paises':data }
                let html = template(context);
                template_parent.html(html);
        })  
    }


let render = function(template, template_parent= $("#contenido")){
    let html = template({'paises':[]});
    template_parent.html(html);
}