
$(() => Objeto.init());

Objeto = {
   template : null,
   init : function() {
    let source = $("#template").html();
    this.template = Handlebars.compile(source);
    loadTemplates(this.template);
    }
}    

let loadPaises = function(idioma = 'en') {
    template = Objeto.template;
    idiomas = {
        'en': "https://restcountries.eu/rest/v2/all",
        'es': "https://restcountries.eu/rest/v2/lang/es",
    }
    let api_url = idiomas[idioma];
       
    
    if(template){
        let http_api = $.ajax({
            url: api_url,
            method: 'GET',
            dataType: "JSON",
         });
        render_http(http_api, template);
    }
   
}



let render_http = function(http, template, template_parent= $("#contenido")) {   
    http.done(
            (data) => {
                context = {'paises':data }
                let html = template(context);
                template_parent.html(html);
        })  
    }


let render = function(template, template_parent= $("#contenido")) {
    let html = template({'paises':[]});
    template_parent.html(html);
}