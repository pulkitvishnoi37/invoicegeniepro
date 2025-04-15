// Sample invoice data
const invoices = [];

// Function to display invoices
function displayInvoices() {
    const invoicesContainer = document.getElementById("invoicesContainer");
    invoicesContainer.innerHTML = ""; // Clear previous invoices

    invoices.forEach((invoice, index) => {
        const invoiceItem = document.createElement("div");
        invoiceItem.className = "invoice-item";
        invoiceItem.innerHTML = `
            <h3>Invoice #${index + 1}</h3>
            <p><strong>Client:</strong> ${invoice.clientName}</p>
            <p><strong>Amount:</strong> ₹${invoice.amount}</p>
            <p><strong>Due Date:</strong> ${invoice.dueDate}</p>
            <p><strong>Status:</strong> ${invoice.status}</p>
            <button onclick="deleteInvoice(${index})">Delete</button>
        `;
        invoicesContainer.appendChild(invoiceItem);
    });
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent page reload

    const clientName = document.getElementById("clientName").value;
    const amount = document.getElementById("amount").value;
    const dueDate = document.getElementById("dueDate").value;

    const newInvoice = {
        clientName,
        amount,
        dueDate,
        status: "Pending",
    };

    invoices.push(newInvoice); // Add invoice to the array
    displayInvoices(); // Refresh the displayed invoices

    // Reset form fields
    document.getElementById("clientName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("dueDate").value = "";
}

// Function to delete an invoice
function deleteInvoice(index) {
    invoices.splice(index, 1); // Remove the invoice from the array
    displayInvoices(); // Refresh the displayed invoices
}

// Event listener for form submission
document.getElementById("invoiceForm").addEventListener("submit", submitForm);
