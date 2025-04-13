```javascript
document.getElementById("invoice-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const clientName = document.getElementById("clientName").value;
  const invoiceNumber = document.getElementById("invoiceNumber").value;
  const invoiceDate = document.getElementById("invoiceDate").value;
  const items = document.getElementById("items").value;

  const invoiceHtml = `
    <div class="invoice-card">
      <h2>Invoice</h2>
      <p><strong>Client Name:</strong> ${clientName}</p>
      <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
      <p><strong>Date:</strong> ${invoiceDate}</p>
      <p><strong>Items:</strong><br>${items.replace(/\n/g, '<br>')}</p>
    </div>
  `;

  document.getElementById("invoice-output").innerHTML = invoiceHtml;
});
```

