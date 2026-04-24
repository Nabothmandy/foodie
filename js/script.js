let header = document.querySelector('#head')

window.addEventListener('scroll', function(){
    if (window.scrollY > 80){
        header.style.width = '100%';
        header.style.backgroundColor = "orangered";
        header.classList.add('animate__fadeInDown')
    }
    else{
        header.style.width = '90%';
        header.style.backgroundColor = "white";
       header.classList.remove('animate__fadeInDown')
    }

})

let foodBtn = document.querySelectorAll('.food')
        foodBtn[0].style.backgroundColor = 'orangered';
        foodBtn[0].style.color = 'white';


foodBtn.forEach(function(btn) {

    btn.addEventListener('mouseenter', function(){
            btn.style.backgroundColor = 'orangered';
            btn.style.color = 'white'
            btn.style.transform = " translateX(0) scale(1.05)"
        // btn.style.backgroundColor = 'orangered';
        // btn.style.color = 'white'
        // btn.style.transform = "translateX(10px) scale(1.05)"
    });


    btn.addEventListener('mouseleave', function(){
        btn.style.backgroundColor = 'white';
        btn.style.color = 'grey'
        btn.style.transform = " translateX(0) scale(1)"

    });
});

//foodBtn.addEventListener('mouseleave', function(){
//foodBtn.style.backgroundColor = 'white'
//});

let hamburgerContainer = document.querySelector('#menu-icon');
let dropdownbox = document.querySelector('#dropdownbox');
let exitIcon = document.querySelector('#exitIcon');
let allAnchorTags = document.querySelector('.anchor');

if (hamburgerContainer){
    
    hamburgerContainer.addEventListener('click', function(){
       
        dropdownbox.style.display = 'flex'
        
    })
}
 

if(exitIcon){
    
    exitIcon.addEventListener('click', function(){
        
        dropdownbox.style.display = 'none';
        dropdownbox.classList.remove ('animate__bounceInDown');
    })
}

if(allAnchorTags){
    
    allAnchorTags.forEach(allAnchorTags =>{
        allAnchorTags.addEventListener('click', function(){
            
            dropdownbox.style.display = 'none'
        })
    });
}

