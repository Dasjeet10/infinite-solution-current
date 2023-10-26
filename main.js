let submitBtn = document.getElementById("submit");

function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    phone_Number: document.getElementById("phone").value,
    Deadline: document.getElementById("projectDeadline").value,
  };
  const servcieId = "service_wmztftb";
  const templateId = "template_4k9h7kg";

  emailjs.send(servcieId, templateId, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("projectDeadline").value = "";
    console.log("Success",res);
    alert("Your message sent successfully :)")
  })
  .catch((err) => {
    console.log("___Error__",err);
    alert("Something error occured check the logs :(")
  })
}
submitBtn.addEventListener('click', SendMail())
