document.getElementById("quotation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const companyName = document.getElementById("company-name").value;
  const clientName = document.getElementById("client-name").value;
  const quotationDate = document.getElementById("quotation-date").value;
  const validUntil = document.getElementById("valid-until").value;
  const itemDescription = document.getElementById("item-description").value;
  const itemAmount = document.getElementById("item-amount").value;

  // Output quotation
  const quotationOutput = document.getElementById("quotation-output");
  quotationOutput.innerHTML = `
    <div class="quotation">
      <h2>Quotation</h2>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Client Name:</strong> ${clientName}</p>
      <p><strong>Quotation Date:</strong> ${quotationDate}</p>
      <p><strong>Valid Until:</strong> ${validUntil}</p>
      <p><strong>Item Description:</strong> ${itemDescription}</p>
      <p><strong>Item Amount:</strong> ₹${itemAmount}</p>
      <p><strong>Total Amount:</strong> ₹${itemAmount}</p>
    </div>
  `;
});
