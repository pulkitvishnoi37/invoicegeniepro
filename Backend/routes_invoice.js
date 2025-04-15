const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

// Create Invoice
router.post("/", async (req, res) => {
    try {
        const newInvoice = new Invoice(req.body);
        const savedInvoice = await newInvoice.save();
        res.status(201).json(savedInvoice);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Invoices
router.get("/", async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
