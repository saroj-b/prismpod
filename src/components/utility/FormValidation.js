function validateForm(event, state) {
    // clear all error messages
    const inputs = document.getElementsByClassName("is-danger");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("is-danger");
      }
    }
  
    //Registation Page and Login Page
    if (state.hasOwnProperty("username") && state.username === "") {
      document.getElementById("username").classList.add("is-danger");
      return { blankfield: true };
    }
    
    if (state.hasOwnProperty("firstname") && state.firstname === "") {
      document.getElementById("firstname").classList.add("is-danger");
      return { blankfield: true };
    }
    
    if (state.hasOwnProperty("lastname") && state.lastname === "") {
      document.getElementById("lastname").classList.add("is-danger");
      return { blankfield: true };
    }

    if (state.hasOwnProperty("email") && state.email === "") {
      document.getElementById("email").classList.add("is-danger");
      return { blankfield: true };
    }

    if (
      state.hasOwnProperty("verificationcode") &&
      state.verificationcode === ""
    ) {
      document.getElementById("verificationcode").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("password") && state.password === "") {
      document.getElementById("password").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("oldpassword") && state.oldpassword === "") {
      document.getElementById("oldpassword").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("newpassword") && state.newpassword === "") {
      document.getElementById("newpassword").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("confirmpassword") && state.confirmpassword === "") {
      document.getElementById("confirmpassword").classList.add("is-danger");
      return { blankfield: true };
    }
    if (
      state.hasOwnProperty("password") &&
      state.hasOwnProperty("confirmpassword") &&
      state.password !== state.confirmpassword
    ) {
      document.getElementById("password").classList.add("is-danger");
      document.getElementById("confirmpassword").classList.add("is-danger");
      return { passwordmatch: true };
    }
    if (
      state.hasOwnProperty("newpassword") &&
      state.hasOwnProperty("confirmpassword") &&
      state.newpassword !== state.confirmpassword
    ) {
      document.getElementById("newpassword").classList.add("is-danger");
      document.getElementById("confirmpassword").classList.add("is-danger");
      return { passwordmatch: true };
    }

    //Employee Project Req
    if (state.hasOwnProperty("projectObjective") && state.projectObjective === "") {
      document.getElementById("projectObjective").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("selectedOption") && state.selectedOption === "") {
      document.getElementById("remoteEngModel").classList.add("is-danger");
      return { blankfield: true };
    }
    // if (state.hasOwnProperty("frontendTechSkills") && state.frontendTechSkills === "") {
    //   document.getElementById("frontendTechSkills").classList.add("is-danger");
    //   return { blankfield: true };
    // }
    // if (state.hasOwnProperty("backendTechSkills") && state.backendTechSkills === "") {
    //   document.getElementById("backendTechSkills").classList.add("is-danger");
    //   return { blankfield: true };
    // }
    // if (state.hasOwnProperty("mobileTechSkills") && state.mobileTechSkills === "") {
    //   document.getElementById("mobileTechSkills").classList.add("is-danger");
    //   return { blankfield: true };
    // }
    // if (state.hasOwnProperty("remoteEngineerModelPreference") && state.remoteEngineerModelPreference === "") {
    //   document.getElementById("remoteEngineerModelPreference").classList.add("is-danger");
    //   return { blankfield: true };
    // }

    

    //add candidate
    if (state.hasOwnProperty("fname") && state.fname === "") {
      document.getElementById("fname").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("candidateemail") && state.candidateemail === "") {
      document.getElementById("candidateemail").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("area") && state.area === "") {
      document.getElementById("area").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("oexpertise") && state.oexpertise === "") {
      document.getElementById("oexpertise").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("portfolio") && state.portfolio === "") {
      document.getElementById("portfolio").classList.add("is-danger");
      return { blankfield: true };
    }
    return;
  }
  
  export default validateForm;