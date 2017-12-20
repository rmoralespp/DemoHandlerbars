$(() => init());


let init = function(){
   let source   = $("#template").html();
   let template = compileTemplate(source)
   loadPaises(template);
}


let compileTemplate = function(source){
    let template = Handlebars.compile(source);
    return template
}


let loadPaises = function(template){
    let api_url = "https://restcountries.eu/rest/v2/all";
    
       
    let http_api = $.ajax({
        url: api_url,
        method: 'GET',
        dataType: "JSON",
     });

    render(http_api, template)
}

let render = function(http, template, template_parent= $("#contenido")){
      
    http.done(
        (data) => {
            context = { 'paises':data }
            let html = template(context);
            template_parent.append(html);
        }
    )
     
    }