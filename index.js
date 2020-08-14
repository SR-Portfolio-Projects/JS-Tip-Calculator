function calculateTip() {
    var cost = document.getElementById("cost").value;
    var tipPercent = document.getElementById("tipPercent").value;
   
    if (cost === "" || tipPercent == 0) {
      alert("Please enter bill amount");
      return;
    }

    var numOfBills = document.getElementById("numOfBills").value;
 
    if (numOfBills === "" || numOfBills <= 1) {
      numOfBills = 1;
      document.getElementById("finalTipAmount").style.display = "none";
    } else {
      document.getElementById("finalTipAmount").style.display = "block";
    }
  
   
    var total = (cost * tipPercent) / numOfBills;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tipAmount-container").style.display = "block";
    document.getElementById("tipAmount").innerHTML = total;
  
  }

  document.getElementById("tipAmount-container").style.display = "none";
  document.getElementById("finalTipAmount").style.display = "none";
  

  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };