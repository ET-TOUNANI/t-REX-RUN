document.addEventListener('DOMContentLoaded',()=>{
    
    const dino = document.querySelector('.dino');
    let isJumping = false

    function control(e){
        if(e.keyCode === 32){
            if(!isJumping){
                isJumping=true
                jump()
            }               
        }
    }
    document.addEventListener('keyup' ,control)

    function jump(){
        position = 0
        
        let timer= setInterval(()=>
        {

            if(position === 150)
            {
                clearInterval(timer)
                let down = setInterval(()=>
                {
                    position -=30;
                    dino.style.bottom = position + 'px'

                    if(position === 0)
                    {
                        clearInterval(down)
                        isJumping=false
                    }

                },20)
                
            }
            
            position +=30
            dino.style.bottom=position +'px'

        },20)
    }
    function obsticale(){
        
    }

})