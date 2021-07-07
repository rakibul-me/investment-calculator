const calculator1 = document.getElementById("calculator1");
const calculator2 = document.getElementById("calculator2");
const calculator3 = document.getElementById("calculator3");
const calculatorTab1 = document.getElementById("calculator-tab1");
const calculatorTab2 = document.getElementById("calculator-tab2");
const calculatorTab3 = document.getElementById("calculator-tab3");

/*Calculator 1*/
const returnOnInv1 = document.getElementById("returnOnInv1");
const costOfInv1 = document.getElementById("costOfInv1");
const rsltRtnOfInv1 = document.getElementById("rsltRtnOfInv1");
const indicator1 = document.getElementById("indicator1");

returnOnInv1.addEventListener("input", calculate1);
returnOnInv1.addEventListener("keyup", goNext1);
costOfInv1.addEventListener("input", calculate1);

function calculate1() {
  if (returnOnInv1.value == "" || costOfInv1.value == "") {
    rsltRtnOfInv1.innerHTML = "&nbsp;";
    return;
  }
  const percentage = ((returnOnInv1.value / costOfInv1.value) * 100).toFixed(2);
  rsltRtnOfInv1.innerHTML = percentage + "%";
  calculateLevel1(percentage);
}
function goNext1(event) {
  if (event.key == "Enter") {
    costOfInv1.focus();
  }
}
function calculateLevel1(value) {
  if (value > 100) {
    indicator1.style.transform = "rotateZ(" + 180 + "deg)";
    return;
  }
  if (value < 0) {
    indicator1.style.transform = "rotateZ(" + 0 + "deg)";
    return;
  }
  indicator1.style.transform = "rotateZ(" + (value / 100) * 180 + "deg)";
}
function clear1() {
  returnOnInv1.value = "";
  costOfInv1.value = "";
  rsltRtnOfInv1.innerHTML = "&nbsp;";
  calculateLevel1(0);
}

/*Calculator 2*/

const operatingPrftBfrInv = document.getElementById("operatingPrftBfrInv");
const capitalInvested = document.getElementById("capitalInvested");
const rsltRtnOfInvBfrInv = document.getElementById("rsltRtnOfInvBfrInv");
const indicator2 = document.getElementById("indicator2");
const operatingPrftImprvAfInv = document.getElementById(
  "operatingPrftImprvAfInv"
);
const investmentCost = document.getElementById("investmentCost");
const rsltRtnOnInvAfInv = document.getElementById("rsltRtnOnInvAfInv");
const rsltRtnOnInv = document.getElementById("rsltRtnOnInv");

const fields = [
  operatingPrftBfrInv,
  capitalInvested,
  operatingPrftImprvAfInv,
  investmentCost,
];

operatingPrftBfrInv.addEventListener("input", calculate2);
capitalInvested.addEventListener("input", calculate2);
operatingPrftImprvAfInv.addEventListener("input", calculate2);
investmentCost.addEventListener("input", calculate2);
fields.forEach((item) => {
  item.addEventListener("keyup", next2);
});

function calculate2() {
  if (operatingPrftBfrInv.value == "" || capitalInvested.value == "") {
    rsltRtnOfInvBfrInv.innerHTML = "&nbsp;";
    return;
  }
  const percentage = (
    (operatingPrftBfrInv.value / capitalInvested.value) *
    100
  ).toFixed(2);
  rsltRtnOfInvBfrInv.innerHTML = percentage + "%";
  calculateLevel2(percentage);
  if (operatingPrftImprvAfInv.value == "" || investmentCost.value == "") {
    rsltRtnOnInvAfInv.innerHTML = "&nbsp;";
    return;
  }
  const percentage2 = (
    ((Number(operatingPrftBfrInv.value) +
      Number(operatingPrftImprvAfInv.value)) /
      (Number(capitalInvested.value) + Number(investmentCost.value))) *
    100
  ).toFixed(2);
  rsltRtnOnInvAfInv.innerHTML = percentage2 + "%";
  const percentage3 = (
    (Number(operatingPrftImprvAfInv.value) / Number(investmentCost.value)) *
    100
  ).toFixed(2);
  rsltRtnOnInv.innerHTML = percentage3 + "%";
}
function calculateLevel2(value) {
  if (value > 100) {
    indicator2.style.transform = "rotateZ(" + 180 + "deg)";
    return;
  }
  if (value < 0) {
    indicator2.style.transform = "rotateZ(" + 0 + "deg)";
    return;
  }
  indicator2.style.transform = "rotateZ(" + (value / 100) * 180 + "deg)";
}
function next2(e) {
  if (e.key == "Enter") {
    fields[fields.indexOf(e.target) + 1].focus();
  }
}
function clear2() {
  fields.forEach((item) => {
    item.value = "";
  });
  [rsltRtnOfInvBfrInv, rsltRtnOnInvAfInv, rsltRtnOnInv].forEach((item) => {
    item.innerHTML = "&nbsp;";
  });
}

/*Calculator 3*/
const valueOfInv = document.getElementById("valueOfInv");
const targetedReturn = document.getElementById("targetedReturn");
const holdTime = document.getElementById("holdTime");
const residualValue = document.getElementById("residualValue");
/**/
const staffCosts = document.getElementById("staffCosts");
const energyCosts = document.getElementById("energyCosts");
const maintenanceCosts = document.getElementById("maintenanceCosts");
const otherCosts = document.getElementById("otherCosts");
const salesRevenue = document.getElementById("salesRevenue");
/* */
const rsltNetIncome = document.getElementById("rsltNetIncome");
const ttlRtnPrsntVluMthd = document.getElementById("ttlRtnPrsntVluMthd");
const internalRate = document.getElementById("internalRate");
const paybackTime = document.getElementById("paybackTime");

const fields2 = [
  valueOfInv,
  targetedReturn,
  holdTime,
  residualValue,
  staffCosts,
  energyCosts,
  maintenanceCosts,
  otherCosts,
  salesRevenue,
];

fields2.forEach((item) => {
  item.addEventListener("input", calculate3);
  item.addEventListener("keyup", next3);
});

function calculate3() {
  if (
    salesRevenue.value == "" ||
    staffCosts.value == "" ||
    energyCosts.value == "" ||
    maintenanceCosts.value == "" ||
    otherCosts.value == ""
  ) {
    rsltNetIncome.innerHTML = "&nbsp;";
    return;
  }
  const value1 =
    salesRevenue.value -
    staffCosts.value -
    energyCosts.value -
    maintenanceCosts.value -
    otherCosts.value;
  rsltNetIncome.innerHTML = value1 || "Wrong";
  if (
    valueOfInv.value == "" ||
    targetedReturn.value == "" ||
    holdTime.value == "" ||
    residualValue.value == "" ||
    rsltNetIncome.innerHTML == "&nbsp;" ||
    rsltNetIncome.innerHTML == " "
  ) {
    ttlRtnPrsntVluMthd.innerHTML = "&nbsp;";
    return;
  }
  ttlRtnPrsntVluMthd.innerHTML =
    "€" +
    (
      PV(
        targetedReturn.value / 100,
        holdTime.value,
        -Number(rsltNetIncome.innerHTML),
        residualValue.value
      ) - valueOfInv.value
    ).toFixed(2);
  let netIncome = Number(rsltNetIncome.innerHTML);
  internalRate.innerHTML = Math.round(
    IRR([-valueOfInv.value, netIncome, netIncome, netIncome, netIncome]) * 100
  );
  paybackTime.innerHTML = Math.round(
    valueOfInv.value / rsltNetIncome.innerHTML
  );
}

function PV(rate, periods, payment, future, type) {
  // Initialize type
  var type = typeof type === "undefined" ? 0 : type;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return present value
  if (rate === 0) {
    return -payment * periods - future;
  } else {
    return (
      (((1 - Math.pow(1 + rate, periods)) / rate) *
        payment *
        (1 + rate * type) -
        future) /
      Math.pow(1 + rate, periods)
    );
  }
}

function IRR(values, guess) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Calculates the resulting amount
  var irrResult = function (values, dates, rate) {
    var r = rate + 1;
    var result = values[0];
    for (var i = 1; i < values.length; i++) {
      result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
    }
    return result;
  };

  // Calculates the first derivation
  var irrResultDeriv = function (values, dates, rate) {
    var r = rate + 1;
    var result = 0;
    for (var i = 1; i < values.length; i++) {
      var frac = (dates[i] - dates[0]) / 365;
      result -= (frac * values[i]) / Math.pow(r, frac + 1);
    }
    return result;
  };

  // Initialize dates and check that values contains at least one positive value and one negative value
  var dates = [];
  var positive = false;
  var negative = false;
  for (var i = 0; i < values.length; i++) {
    dates[i] = i === 0 ? 0 : dates[i - 1] + 365;
    if (values[i] > 0) positive = true;
    if (values[i] < 0) negative = true;
  }

  // Return error if values does not contain at least one positive value and one negative value
  if (!positive || !negative) return "#NUM!";

  // Initialize guess and resultRate
  var guess = typeof guess === "undefined" ? 0.1 : guess;
  var resultRate = guess;

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;

  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var newRate, epsRate, resultValue;
  var iteration = 0;
  var contLoop = true;
  do {
    resultValue = irrResult(values, dates, resultRate);
    newRate =
      resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    epsRate = Math.abs(newRate - resultRate);
    resultRate = newRate;
    contLoop = epsRate > epsMax && Math.abs(resultValue) > epsMax;
  } while (contLoop && ++iteration < iterMax);

  if (contLoop) return "#NUM!";

  // Return internal rate of return
  return resultRate;
}

function next3(e) {
  if (e.key == "Enter") {
    fields2[fields2.indexOf(e.target) + 1].focus();
  }
}

function clear3() {
  fields2.forEach((item) => {
    item.value = "";
  });
  [rsltNetIncome, ttlRtnPrsntVluMthd, internalRate, paybackTime].forEach(
    (item) => {
      item.innerHTML = "&nbsp;";
    }
  );
}

function changeCalculator(to) {
  [calculator1, calculator2, calculator3].forEach((item) => {
    item.style.display = "none";
  });
  [calculatorTab1, calculatorTab2, calculatorTab3].forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById("calculator" + to.toString()).style.display = "unset";
  document
    .getElementById("calculator-tab" + to.toString())
    .classList.add("active");
  switch (to) {
    case 1: {
      returnOnInv1.focus();
      break;
    }
    case 2: {
      operatingPrftBfrInv.focus();
      break;
    }
    case 3: {
      valueOfInv.focus();
      break;
    }
  }
}
