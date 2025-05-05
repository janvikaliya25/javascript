
    let subtotal = 0;

    function addItem() {
      const name = document.getElementById("itemName").value.trim();
      const price = parseFloat(document.getElementById("itemPrice").value);
      const qty = parseInt(document.getElementById("itemQty").value);

      if (!name || isNaN(price) || isNaN(qty)) {
        alert("Please enter valid item details.");
        return;
      }

      const itemTotal = price * qty;
      subtotal += itemTotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="px-4 py-2 border text-center">${name}</td>
        <td class="px-4 py-2 border text-center">₹${price.toFixed(2)}</td>
        <td class="px-4 py-2 border text-center">${qty}</td>
        <td class="px-4 py-2 border text-center">₹${itemTotal.toFixed(2)}</td>
      `;
      document.getElementById("billBody").appendChild(row);

      updateSummary();

     
      document.getElementById("itemName").value = '';
      document.getElementById("itemPrice").value = '';
      document.getElementById("itemQty").value = '';
    }

    function updateSummary() {
      const discount = subtotal > 2000 ? subtotal * 0.10 : 0;
      const afterDiscount = subtotal - discount;
      const gst = afterDiscount * 0.05;
      const finalTotal = afterDiscount + gst;

      document.getElementById("subtotalDiv").textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
      document.getElementById("discountDiv").textContent = `Discount (10%): ₹${discount.toFixed(2)}`;
      document.getElementById("gstDiv").textContent = `GST (5%): ₹${gst.toFixed(2)}`;
      document.getElementById("finalTotal").textContent = `Final Total: ₹${finalTotal.toFixed(2)}`;
    }