
/*
  Adding mail.js feature to this web

*/
  //creating variables for storing states.
  let is_submit=document.getElementById("submit")
  let text=document.getElementById("text");
  
  let user_email=document.getElementById("inp-email");
  let text_name=document.getElementById("input-name");
  let mobile_num=document.getElementById("mobile_num");
  
  
  function SendEmail(){    
  if(text_name.value!="" && text.value !="" && (user_email.value!="" || mobile_num.value!="") ){
      console.log(text_name.value);
      console.log(text.value);
      console.log(user_email.value);
      var params={
          user_name: text_name.value,
          email_id: user_email.value,
          mobile_num: mobile_num.value,
          message: text.value
      }
      const ServiceId="sservice_8l6hflk"; //service_ebncry7
      const TemplateId="template_7yiam1l"; //to dasjeet10@gmail.com
      emailjs.send("service_8l6hflk","template_7yiam1l");then((res)=>{
          text_name.value=""
          text.value="";
          mobile_num.value=""
          user_email.value=""
          alert("Message Sent");
  
      })
      .catch((err)=> console.log(err));
  }
  else{
    console.log("IT works");
    if(text_name==""){
      alert("Please fill your name")
    }
    else if(text.value==""){
      alert("Fill your query")
    }
    else{
      alert("Write either email or phone number")
    }
  }
     
      
  }
      
  is_submit.addEventListener("click",SendEmail);
  