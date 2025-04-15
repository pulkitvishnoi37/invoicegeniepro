const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, default: "Pending" },
    items: [
        {
            description: String,
            quantity: Number,
            price: Number,
        },
    ],
});

module.exports = mongoose.model("Invoice", invoiceSchema);
