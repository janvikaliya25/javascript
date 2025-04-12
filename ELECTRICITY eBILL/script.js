function calculate() {
    const a = parseFloat(document.getElementById("a").value) || 0;
    const b = parseFloat(document.getElementById("b").value) || 0;
    const c = parseFloat(document.getElementById("c").value) || 0;
    const d = parseFloat(document.getElementById("d").value) || 0;

    document.getElementById("tu").innerText = d;

    const fuelCharge = d * 5;
    document.getElementById("pr").innerText = fuelCharge;

    const total = a + b + c + fuelCharge;
    document.getElementById("ttl").innerText = total.toFixed(2);

    const cgst = total * 0.05;
    const sgst = total * 0.05;
    const gst = cgst + sgst;

    document.getElementById("cgst").innerText = cgst.toFixed(2);
    document.getElementById("sgst").innerText = sgst.toFixed(2);
    document.getElementById("igst").innerText = gst.toFixed(2);

    const amount = total + gst;
    document.getElementById("am").innerText = amount.toFixed(2);
  }

  function generateBillDetails() {
    const billNo = Math.floor(1000 + Math.random() * 9000);
    const today = new Date();
    const billDate = today.toLocaleDateString('en-GB');

    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + 9);
    const lastDate = dueDate.toLocaleDateString('en-GB');

    document.getElementById("billNo").innerText = billNo;
    document.getElementById("billDate").innerText = billDate;
    document.getElementById("lastDate").innerText = lastDate;
  }

  window.onload = function () {
    generateBillDetails();
    calculate();
  };