$(document).ready(function(){
    var apiBase="https://jsonplaceholder.typicode.com/photos/";
    var id=0;
    axios.get(apiBase).then(function(response){
        console.log(response.data);
        $('#butt').on('click',function(){
            id++;
          var url=apiBase+id;
          axios.get(url).then(function(response){
              setTimeout(function(){
                    var title=response.data.title;
                    var picture=response.data.url;
                    var $title=$('<p>').html('title'+title);
                     var $picture=$('<img>').attr("src", picture).attr("alt",url);
                    $('#shows').html([$title,$picture]);
         
            },2000);
          });
       
        $('#shows').html('loading');
        });
     
    });
    
   
});