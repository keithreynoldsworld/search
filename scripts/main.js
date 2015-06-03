$(document).ready(function() {
    var App = Backbone.Router.extend({
        routes: {
            '': 'home',
            'search/:query': 'search',
        },

        home: function() {
            $('.page').hide();
            $('#home').show();
            console.log('home');
        },
        search: function(query) {
            console.log('search', query);
            $('.page').hide();
            $('#search').show();
        }
    });

    var myRouter = new App();
	var array= [];
    Backbone.history.start();

    $('button').click(inputform);

    function inputform(event) {

        event.preventDefault();
                var goToPage = "search/" + $('#input-box').val();
        myRouter.navigate(goToPage, {trigger: true});
        $.get('http://www.omdbapi.com/?t='+$('#input-box').val()+'&r=json',onReceivedMovies);
        
        function onReceivedMovies(movies) {

            								$('#search').html("<span class = 'result'>"+movies.Title+"</span>");
        									 $('#home').show();
        									$('.result').on("click",doSomething);
       										 function doSomething(){console.log('your movies was clicked on');
       																var object = {title: movies.Title};
       																for(var i = 0;i<array.length;i++){if(object.title===array[i].title){object=1;}}
       																if(object!==1){array.push(object);}
       																console.log(array);	
       																									 						
       										 						
       										 				
        														    }
        									}					    
    }
});