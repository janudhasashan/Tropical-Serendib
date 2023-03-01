function purchers(){
    var userName = document.getElementById("userFirstName").value;
    var userLastName = document.getElementById("userLastName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userAddress = document.getElementById("userAddress").value;
    var userTel = document.getElementById("userTel").value;

    var whiteT = document.querySelector(".whiteT").innerHTML;
    var blackT  = document.querySelector(".blackT").innerHTML;
    var hoddy  = document.querySelector(".hoddy").innerHTML
    var bag = document.querySelector(".bag").innerHTML
    var umbrella = document.querySelector(".umbrella").innerHTML
    var cap = document.querySelector(".cap").innerHTML;
  
    if(userName === "" || userLastName === "" || userEmail === "" || userAddress === "" || userTel === ""){
        
        alert("Please Fill Buyer Details");

    } else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (userEmail.match(mailformat)) {
            

            document.querySelector(".customerName").innerHTML = userName +" "+ userLastName;
            document.querySelector(".customerAddress").innerHTML = userAddress;
            document.querySelector(".contactNumber").innerHTML = userTel;
            document.querySelector(".emailAddress").innerHTML = userEmail;
            
            if(whiteT != "" || blackT != "" || hoddy != "" || bag != "" || umbrella != "" || cap != ""){

                addWhiteTSummary();
                addBlackTSummary();
                addHoddySummary();
                addBagSummary();
                addUmbrellaSummary();
                addCapSummary();
                addTotalPrice();
                document.querySelector(".summary").style.display = "block";

            } else {
                alert("Please add item to cart before place order!")
            }   
        } else {

            alert("Please Enter a Valid Email Address")
        }
    }
}

// WHITE T //

function whiteTShirt(){
    
    var selecQnt = document.getElementById("whiteTQuantity").value;
    var sizeOfWT = document.querySelector( 'input[name="whiteTSize"]:checked');

    if(sizeOfWT.value != "" && selecQnt > 0){
        document.querySelector(".whiteT").innerHTML = "Tropical Serendib T - White:   ";
        document.querySelector(".QtyWhiteTee").innerHTML =  "Qty: " + selecQnt
        document.querySelector("#removeWhiteT").style.display = "block";
    }

}

function removewhiteT(){
    document.querySelector(".whiteT").innerHTML = "";
    document.querySelector(".QtyWhiteTee").innerHTML =  ""
    document.querySelector("#removeWhiteT").style.display = "none";
}

function addWhiteTSummary(){
    var nameWhiteT = document.querySelector(".whiteT");
    var qtyWhiteT = document.getElementById("whiteTQuantity").value;
    var sizeOfWT = document.querySelector( 'input[name="whiteTSize"]:checked');
    const priceOfWhiteT = (parseInt(qtyWhiteT) * 1200);

    if (nameWhiteT.innerHTML != "") {
        document.querySelector(".whiteTName").innerHTML = "Tropical Serendib Tee - White";
        document.querySelector(".whiteTQty").innerHTML = qtyWhiteT;
        document.querySelector(".whiteTSize").innerHTML = sizeOfWT.value;
        document.querySelector(".whiteTTotal").innerHTML = "Rs." + priceOfWhiteT;

    }
}

// BLACK T //

function blackTShirt(){
    var sizeOfBT = document.querySelector('input[name="blackTSize"]:checked');
    var selectQnt = document.getElementById("blackTQuantity").value;

    if(sizeOfBT.value != "" && selectQnt > 0){
        document.querySelector(".blackT").innerHTML = "Tropical Serendib T - Black";
        document.querySelector(".QtyBlackTee").innerHTML = "Qty: " + selectQnt
        document.querySelector("#removeBlackT").style.display = "block";
    }

}

function removeblackT(){
    document.querySelector(".blackT").innerHTML = "";
    document.querySelector(".QtyBlackTee").innerHTML = "";
    document.querySelector("#removeBlackT").style.display = "none";
}

function addBlackTSummary(){
    var nameBlackT = document.querySelector(".blackT");
    var qtyBlackT = document.getElementById("blackTQuantity").value;
    var sizeOfBT = document.querySelector('input[name="blackTSize"]:checked');
    const priceOfBlackT = (parseInt(qtyBlackT) * 1200);

    if (nameBlackT.innerHTML != "") {
        document.querySelector(".blackTName").innerHTML = "Tropical Serendib T - Black";
        document.querySelector(".blackTQty").innerHTML = qtyBlackT;
        document.querySelector(".blackTSize").innerHTML = sizeOfBT.value;
        document.querySelector(".blackTTotal").innerHTML = "Rs. " + priceOfBlackT;
    }
}

// HOODY //

function hoody() {
    var sizeofH = document.querySelector( 'input[name="hoddySize"]:checked');
    var selectQnt = document.getElementById("hoddyQuantity").value;

    if(sizeofH.value != "" && selectQnt > 0){
        document.querySelector(".hoddy").innerHTML = "Tropical Serendib Hoody";
        document.querySelector(".Qtyhoddy").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeHoddy").style.display = "block";
    }
}

function removehoddy() {
    document.querySelector(".hoddy").innerHTML = "";
    document.querySelector(".Qtyhoddy").innerHTML = "";
    document.querySelector("#removeHoddy").style.display = "none";
}

function addHoddySummary(){
    var nameHoddy = document.querySelector(".hoddy");
    var qtyHoddy = document.getElementById("hoddyQuantity").value;
    var sizeOfH = document.querySelector('input[name="hoddySize"]:checked');
    const priceOfHoddy = parseInt(qtyHoddy) * 2000;

    if (nameHoddy.innerHTML != "") {
        document.querySelector(".hoddyName").innerHTML = "Tropical Serendib Hoody";
        document.querySelector(".hoddyQty").innerHTML = qtyHoddy;
        document.querySelector(".hoddySize").innerHTML = sizeOfH.value;
        document.querySelector(".hoddyTotal").innerHTML = "Rs. " + priceOfHoddy;
    }
}

// BAG //

function bag(){
    var selectQnt = document.getElementById("bagQuantity").value;

    if (selectQnt > 0){

        document.querySelector(".bag").innerHTML = "Tropical Serendib Bag";
        document.querySelector(".Qtybag").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeBag").style.display = "block";
    }
}

function removebag(){
    document.querySelector(".bag").innerHTML = "";
    document.querySelector(".Qtybag").innerHTML = "";
    document.querySelector("#removeBag").style.display = "none";
}

function addBagSummary(){
    var nameBag = document.querySelector(".bag");
    var qtyBag = document.getElementById("bagQuantity").value;
    const priceOfBag = parseInt(qtyBag) * 2500;

    if (nameBag.innerHTML != "") {
        document.querySelector(".bagName").innerHTML = "Tropical Serendib Bag";
        document.querySelector(".bagQty").innerHTML = qtyBag;
        document.querySelector(".bagSize").innerHTML = "Regular";
        document.querySelector(".bagTotal").innerHTML = "Rs. " + priceOfBag;
    }

}

// UMBRELLA // 

function umbrella(){
    var selectQnt = document.getElementById("umbrellaquantity").value;

    if (selectQnt > 0) {
        document.querySelector(".umbrella").innerHTML = "Tropical Serendib Umbrella";
        document.querySelector(".Qtyumbrella").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeUmbrella").style.display = "block";
    }
}

function removeumbrella() {
    document.querySelector(".umbrella").innerHTML = "";
    document.querySelector(".Qtyumbrella").innerHTML = "";
    document.querySelector("#removeUmbrella").style.display = "";
}

function addUmbrellaSummary(){
    var nameUmbrella = document.querySelector(".umbrella");
    var qtyUmbrella = document.getElementById("umbrellaquantity").value;
    const priceOfUmbrella = parseInt(qtyUmbrella) * 1500;

    if(nameUmbrella.innerHTML != "") {
        document.querySelector(".umbrellaName").innerHTML = "Tropical Serendib Umbrella";
        document.querySelector(".umbrellaQty").innerHTML = qtyUmbrella;
        document.querySelector(".umbrellaSize").innerHTML = "Regular";
        document.querySelector(".umbrellaTotal").innerHTML = "Rs. " + priceOfUmbrella;
    }
}

// CAP //

function cap(){
    var selectQnt = document.getElementById("capquantity").value;

    if (selectQnt > 0) {
        document.querySelector(".cap").innerHTML = "Tropical Serendib Cap";
        document.querySelector(".Qtycap").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeCap").style.display = "block";
    }
}

function removecap(){
    document.querySelector(".cap").innerHTML = "";
    document.querySelector(".Qtycap").innerHTML = "";
    document.querySelector("#removeCap").style.display = "none";
}

function addCapSummary(){
    var nameCap = document.querySelector(".cap");
    var qtyCap = document.getElementById("capquantity").value;
    const priceOfCap = parseInt(qtyCap) * 750;

    if(nameCap.innerHTML != ""){
        document.querySelector(".capName").innerHTML = "Tropical Serendib Cap";
        document.querySelector(".capQty").innerHTML = qtyCap;
        document.querySelector(".capSize").innerHTML = "Regular";
        document.querySelector(".capTotal").innerHTML = priceOfCap;
    }
}

// TOTAL PRICE //

function addTotalPrice(){
    var qtyWhiteT = document.getElementById("whiteTQuantity").value;
    const priceOfWhiteT = (parseInt(qtyWhiteT) * 1200);

    var qtyBlackT = document.getElementById("blackTQuantity").value;
    const priceOfBlackT = (parseInt(qtyBlackT) * 1200);
    
    var qtyHoddy = document.getElementById("hoddyQuantity").value;
    const priceOfHoddy = parseInt(qtyHoddy) * 2000;

    var qtyBag = document.getElementById("bagQuantity").value;
    const priceOfBag = parseInt(qtyBag) * 2500;

    var qtyUmbrella = document.getElementById("umbrellaquantity").value;
    const priceOfUmbrella = parseInt(qtyUmbrella) * 1500;

    var qtyCap = document.getElementById("capquantity").value;
    const priceOfCap = parseInt(qtyCap) * 750;

    document.querySelector(".totalPrice").innerHTML = "Rs. " + parseInt(priceOfWhiteT + priceOfBlackT + priceOfHoddy + priceOfBag + priceOfUmbrella + priceOfCap);
}

// EDIT BUTTON //
function editbtn(){
    document.querySelector(".summary").style.display = "none";
}

function BuyItem(){
    document.querySelector(".summary").submit();
}