document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const clientName = document.getElementById("clientName").value;
  const service = document.getElementById("service").value;
  const amount = document.getElementById("amount").value;

  const html = `
    <p><strong>Client Name:</strong> ${clientName}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Amount:</strong> ₹${amount}</p>
    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
  `;

  const previewBox = document.getElementById("previewBox");
  previewBox.innerHTML = html;
  document.getElementById("invoicePreview").style.display = "block";
});

function downloadInvoice() {
  const invoice = document.getElementById("previewBox").innerHTML;
  const blob = new Blob([invoice], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "invoice.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
