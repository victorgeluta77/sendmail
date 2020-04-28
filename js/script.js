
const formInput = document.querySelector('.send_form');

     formInput.addEventListener('submit',(e)=>{
         e.preventDefault();
        const template_params = {
            "topic": e.target[0].value,
            "email": e.target[1].value,            
            "message": e.target[2].value,
        }
           console.log(template_params); 
           const service_id = "default_service";
           const template_id = "my_email_service";
           emailjs.send(service_id, template_id, template_params)
           .then(function(response) {
               if (response.status == 200) alert('Email successfull send !! '+response.status +' '+response.text);
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
             alert('FAILED...', error);
            console.log('FAILED...', error);
         });
        
     })