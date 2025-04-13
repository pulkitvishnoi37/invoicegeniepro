function generateQuotation() {
    const clientName = document.getElementById("quoteClientName").value;
    const quoteDate = document.getElementById("quoteDate").value;
    const quoteAmount = document.getElementById("quoteAmount").value;

    if (!clientName || !quoteDate || !quoteAmount) {
        alert("Please fill all fields!");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(`Quotation`, 20, 20);
    doc.text(`Client: ${clientName}`, 20, 40);
    doc.text(`Date: ${quoteDate}`, 20, 60);
    doc.text(`Estimated Amount: $${quoteAmount}`, 20, 80);
    doc.save("Quotation.pdf");
}
