        
   /* burger*/
    let navbarLinks = document.getElementById('navBarlinks');
     let Burger = document.getElementById('burgerbar');

     Burger.addEventListener('click', function()  {
           navbarLinks.classList.toggle('active');
        })
        
        
        
        
        
        
        
        /* slider  */
 var counter = 1;
    setInterval(function(){
        document.getElementById('radio'+counter).checked=true;
        counter++;
        if(counter > 4){
           counter=1;
        }
    }, 5000);
  