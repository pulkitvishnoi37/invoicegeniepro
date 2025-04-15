// Array to store invoice data
const invoices = [];

// Function to display all invoices dynamically
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
            <select onchange="updateStatus(${index}, this.value)">
                <option value="Pending" ${invoice.status === "Pending" ? "selected" : ""}>Pending</option>
                <option value="Paid" ${invoice.status === "Paid" ? "selected" : ""}>Paid</option>
            </select>
        `;

        // Highlight overdue invoices
        const currentDate = new Date();
        if (new Date(invoice.dueDate) < currentDate && invoice.status !== "Paid") {
            invoiceItem.style.backgroundColor = "#ffcccc"; // Light red for overdue
        }

        invoicesContainer.appendChild(invoiceItem);
    });
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const clientName = document.getElementById("clientName").value;
    const amount = document.getElementById("amount").value;
    const dueDate = document.getElementById("dueDate").value;

    // Create new invoice object
    const newInvoice = {
        clientName,
        amount,
        dueDate,
        status: "Pending",
    };

    invoices.push(newInvoice); // Add invoice to array
    displayInvoices(); // Refresh displayed invoices

    // Reset form fields
    document.getElementById("clientName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("dueDate").value = "";
}

// Function to delete an invoice
function deleteInvoice(index) {
    invoices.splice(index, 1); // Remove invoice from array
    displayInvoices(); // Refresh displayed invoices
}

// Function to update invoice status
function updateStatus(index, status) {
    invoices[index].status = status; // Update status in array
    displayInvoices(); // Refresh displayed invoices
}

// Event listener for form submission
document.getElementById("invoiceForm").addEventListener("submit", submitForm);
