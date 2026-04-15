async function login(){
console.log("dentro da função tela login");
  const email = document.getElementById("email").value
   const password = document.getElementById("password").value

   console.log("Email", email);
   console.log("Password", password);

   if(!email &&!password){
    alert("Campo de email e senha são obrigatorios");
    return;
   }

   if(!email){
    alert("Campo de email é obrigatorio");
    return;
   }

   if(!password){
    alert("Campo de senha é obrigatorio");
    return;
   }
   
   const response = await fetch("http://localhost:3000/api/login/login", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           email,
           password
       })
   })

   const data = await response.json()
   if(response.status === 200){
       localStorage.setItem("token", data.token)
       localStorage.setItem("role", data.role)
       alert("Login realizado com sucesso!")
       if(data.role === "admin"){
           window.location.href = "dashboard-adm.html"
       }else{
           window.location.href = "dashboard-cli.html"
       }
   }else{
       alert(data.message)
   }
}


