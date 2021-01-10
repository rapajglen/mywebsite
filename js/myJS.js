
//

$( document ).ready( function(){
     // dropdown activation
    $(".dropdown-trigger").dropdown({ hover: true });

    // Side nav activation
    $('.sidenav').sidenav();
});


function myFunction() {
 document.querySelector('#myDropdown').classList.toggle("show");;
 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelector('.dropdown-cont');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//


       //   send-sms
        var Sms = document.querySelector('#send-sms');
         Sms.addEventListener( "click", ( e ) => {

                  e.preventDefault();  
         });
 


         /*
                           data.forEach( ( value )=>{  

                                textData =   textData + ' <div class="card " style=" margin-bottom: 3%;  border-radius: 7%; min-height: 200px; " > ';
                                textData =   textData + ' <div class="card-content"> ' ;
                                textData =   textData + ' <span class="card-title  grey-text text-darken-4 movement" style=" font-family: serif; " > ' + value.Titulli + ' <i class="fa fa-file-image-o  activator right clickshow " style=" font-size: xx-large; color: #088208; " ></i>   <a target="_blank" href="https://github.com/GlenRapaj/' + value.Titulli + '"> <i class="fa fa-github right " style=" font-size: xx-large; color: #088208; " > </i>  </a>    </span> ' ;  
                                textData =   textData + ' </div>  <div class="card-action card-hide "> ' ;

                                var txt = value.pershkrimi.split( " " );
                                for( let i = 0 ; i< txt.length ; i++ ){
                                       textData =   textData + ' <span style=" float: left; border-radius: 50%; color: white; font-weight: 400; font-family: cursive; " class=" badge blue darken-3 "> ' + txt[ i ] + ' </span> ' ;
                                  
                                }
                     
                                textData =   textData + ' </div> <div class="card-reveal"> ' ;
                                textData =   textData + ' <span style=" font-family: serif; " class="card-title grey-text text-darken-4"> ' + value.Titulli + '  <i class="fa fa-times right xbuton "></i> </span> ' ;
                                textData =   textData + ' <div class="card-image waves-effect waves-block waves-light"> ' ;
                                textData =   textData + ' <img style=" height: 200px;  width: auto; " class="activator" src="http://immense-caverns-77674.herokuapp.com//' + value.pathi + '" >   </div> </div> </div> ';
                                   // console.log( value.pathi );                                                                             //   <img style=" height: 200px;  width: auto; " class="activator" src="http://mywebsite.com/' + value.pathi + '" > 
                           });
         
         */
      

             fetch('/project' )
                .then( ( response ) => {

                       return response.json();
                  })
                  .then( (data) =>{
                         //  console.log( data.length );
                         let lengthOfData = data.length ;
                        var textData = '' ;
                        textData = textData + '<div class="row" style=" margin-bottom: 15%; " > ';

                           data.forEach( ( value )=>{  

                            console.log( value );

                                textData =   textData + ' <div class="col s12  l4 center-align " >';
                                textData =   textData + ' <img class="materialboxed" src="' + value.pathi + ' alt="" width="300" style=" margin-right: 3%; "  /> ' ;
                               textData =   textData + '   <h6>' + value.Titulli + '</h6> <hr/>' ;  
                               textData =   textData + '  <p class="valign-wrapper" >' + value.pershkrimi + ' </p> </div> ' ;

                            });

                            textData = textData + '</div> ';

                           document.querySelector('#write-project').innerHTML = textData ;

                  })
                  .catch(error => console.error('Error:', error));
        




                   
                     
                      
 /* 
      merr  pershtypjet nga db
 */

                         

 




                 $(document).ready( function(){

                             $.ajax({
            async: false,
            type: "GET",
            url: "/pershtypjet",
            dataType: "json",
            success: function (data) {
              //  console.log( data );

                var textData = '';

     if( data.length > 0 ){
                                 

/*

                textData = textData + '  <div class="carousel-item white-text center" href="#!" > ';
                textData = textData + ' <div class="card card-review " style=" margin-bottom: 3%;   border-radius: 7%; min-height: 50px; " > ';
                
                textData = textData + '<p class="card-content card-content-paragraf" style=" text-align: center; margin-top: 2%;  "> ';
                textData = textData + ' ' + data[i].pershtypja + '  <br>  <span style=" font-family: serif;  " class="grey-text text-darken-4">  ' + data[i].emri + '  </span> </p> ';
                textData = textData + '</div> </div> ';


*/

var pathfile = '"C:/Users/user/Desktop/local-website/images/back.jpeg" '


textData = textData + ' <div class="parallax-container"  > ';
textData = textData + ' <div class="parallax"> <img src=' + pathfile + 'width="100%" alt="" /> </div>';
textData = textData + ' </div> ';


               for( let i = 0 ; i< data.length ; i++ ){         

                                
                textData = textData + '  <div class="carousel-item white-text center" href="#!" > ';
                textData = textData + ' <h2> '  + data[i].emri + ' </h2>' ;
                textData = textData + '  <p class="white-text"> '  + data[i].pershtypja + ' </p> ' ;
                textData = textData +  ' </div> ' ;
                

               }             
                                  
                       
                         

     } else{
                               // console.log( " No data avaible" );
                                textData = textData + '  No data avaible ';
                               }

                          // document.querySelector('#rev-container').innerHTML = textData ;
                        $( "#rev-container" ).html( textData ) ;

            }
        });


 

      $('.carousel').carousel();
     // $('.materialboxed').materialbox();


      
    });
  

      


