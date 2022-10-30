function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Te rog introdu un nume valid";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Te rog introdu emailul corect"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Te rog introdu emailul corect"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Te rog introdu emailul corect"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Te rog introdu mesajul"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}