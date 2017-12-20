

var loadTemplates = function(template){
      loadHomeTemplate()
         .then(
             ()      => loadPaisesTemplate(),
             (error) => console.log(error)
         )
         .then(
            ()      => render(template),
            (error) => console.log(error)
         )   
}

var loadPaisesTemplate = function() {
   let d = new $.Deferred();
   $.ajax( {url:"./templates/paises.html", dataType:'html'} )
    .done((paises_partial_data) => {
        $('body').append(paises_partial_data);
        Handlebars.registerPartial('paises_partial', $('#template_paises_partial').html());
        d.resolve();
    })
    .fail(function(error) {
        d.reject(error);
    });
    
    return d.promise();
}


var loadHomeTemplate = function() {
   let d = new $.Deferred();
   $.ajax( {url:"./templates/home.html", dataType:'html'} )
    .done((home_partial_data) => {
        $('body').append(home_partial_data);
        Handlebars.registerPartial('home_partial', $('#template_home_partial').html());
        d.resolve();
    })
    .fail(function(error) {
        d.reject(error);
    });
    return d.promise();
}
        