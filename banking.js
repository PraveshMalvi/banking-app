const bankingBtn = () => {
  var divToggle = document.getElementById("tog_div");
  var divToggle2 = document.getElementById("tog_receipt");
  var loginName = document.getElementById("name").value;
  var loginPin = document.getElementById("pin").value;
  var welcomeName = document.getElementById("welcomeName");
  if (loginName === "" || loginPin === "") {
    alert("Please fill all the input fields first");
    return;
  }
  if (
    divToggle.style.display === "flex" &&
    divToggle2.style.display === "flex"
  ) {
    divToggle.style.display = "none";
    divToggle2.style.display = "none";
  } else {
    welcomeName.innerText = loginName;
    divToggle.style.display = "flex";
    divToggle.style.alignItems = "center";
    divToggle.style.justifyContent = "space-around";
    divToggle.style.padding = "0px 20px";
    divToggle2.style.display = "flex";
    divToggle2.style.alignItems = "center";
    divToggle2.style.justifyContent = "center";
    divToggle2.style.flexDirection = "column";
  }
};

var balance = 0;
var deposit = 0;
var withdraw = 0;

const checkBalance = () => {
  var ac_balance = document.getElementById("ac_balance");
  ac_balance.innerText = "₹ " + balance;
};

const depositCash = () => {
  var deposit = document.getElementById("ac_deposit").value;
  var d_error = document.getElementById("d_error");
  if (deposit <= 0) {
    d_error.innerText = "ERROR : Amount should be more than ₹ 0.";
  } else {
    balance += parseInt(deposit);
    checkBalance();
  }
};

const withdrawCash = () => {
  var withdraw = document.getElementById("ac_withdraw").value;
  var w_error = document.getElementById("w_error");
  if (withdraw <= 0) {
    w_error.innerText = "ERROR : Amount should be more than ₹ 0.";
  } else if (balance < withdraw) {
    w_error.innerText = "ERROR : You have insufficient funds.";
  } else {
    balance -= parseInt(withdraw);
    checkBalance();
  }
};

const generateSlip = () => {
  var receipt_bal = document.getElementById("receipt_bal");
  var receipt_dep = document.getElementById("receipt_dep");
  var receipt_wit = document.getElementById("receipt_wit");
  var receipt = document.getElementById("receipt");
  if (balance <= 0) {
    receipt.innerText = "You have insufficient funds.";
  } else {
    var deposit = document.getElementById("ac_deposit").value;
    var withdraw = document.getElementById("ac_withdraw").value;

    if (withdraw <= 0) {
      receipt_dep.innerText = "Deposit Amount : ₹ " + deposit;
      receipt_bal.innerText = "Account Balance : ₹ " + balance;
      receipt_wit.innerText = "Withdraw Amount : ₹ " + 0;
    } else {
      receipt_dep.innerText = "Deposit Amount : ₹ " + deposit;
      receipt_bal.innerText = "Account Balance : ₹ " + balance;
      receipt_wit.innerText = "Withdraw Amount : ₹ " + withdraw;
    }
  }
};
