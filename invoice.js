document.getElementById("invoice-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const companyName = document.getElementById("company-name").value;
  const clientName = document.getElementById("client-name").value;
  const invoiceDate = document.getElementById("invoice-date").value;
  const dueDate = document.getElementById("due-date").value;
  const itemDescription = document.getElementById("item-description").value;
  const itemAmount = document.getElementById("item-amount").value;

  // Output invoice
  const invoiceOutput = document.getElementById("invoice-output");
  invoiceOutput.innerHTML = `
    <div class="invoice">
      <h2>Invoice</h2>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Client Name:</strong> ${clientName}</p>
      <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
      <p><strong>Due Date:</strong> ${dueDate}</p>
      <p><strong>Item Description:</strong> ${itemDescription}</p>
      <p><strong>Item Amount:</strong> ₹${itemAmount}</p>
      <p><strong>Total Amount:</strong> ₹${itemAmount}</p>
    </div>
  `;
});
