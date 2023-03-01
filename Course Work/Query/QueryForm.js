

var popUpForm = document.getElementById("myModal");

function movebtn(){
	
	var inputName = document.getElementById("checkName").value;
	var inputEmail= document.getElementById("checkEmail").value;
	var selectRadio = document.querySelector( 'input[name="querySubject"]:checked');   
	var textArea = document.querySelector("#queryTextArea").value;
	var changeH1 = document.querySelector("h1");

	if(inputName === "" || inputEmail === "" || selectRadio === null || textArea === ''){

		alert("Please enter requer details:");

	} else {

		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if(document.getElementById("checkEmail").value.match(mailformat)){
			
			document.querySelector(".popUpForm").style.display = "block";
			document.querySelector(".emailForm").style.display = "none";
			
			changeH1.innerHTML = "Confirm to Send Query";

			document.querySelector("#namePopUp").innerHTML = inputName;

			document.querySelector("#emailPopUp").innerHTML = inputEmail;

			document.querySelector("#confoirmRadio").innerHTML = selectRadio.value;

			document.querySelector("#popUpdetails").value = textArea;

		} else {
			alert("You have entered an invalid email address!");

		}

	}
  
}

function submitCheckedForm(){
	document.getElementById("checkedQueryForm").submit();
}

function editFrame() {
	popUpForm.style.display = "none";
	document.querySelector(".emailForm").style.display = "block";
	document.querySelector("h1").innerHTML = "Query Form";
}
