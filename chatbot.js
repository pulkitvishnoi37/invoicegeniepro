const faqAnswers = {
    invoice: "Go to 'Create Invoice' on the home page, fill the form, and click 'Download PDF'.",
    quotation: "Visit the Tools section, select 'Create Quotation', fill in details, and export as PDF.",
    wordtopdf: "Click on 'Word to PDF' in tools, upload your file, and automatic conversion will start.",
    subscription: "All Pro and Premium features unlock instantly after payment in the Pricing section."
};

function toggleChat() {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
}

function getAnswer() {
    const selectedQuestion = document.getElementById("faqSelect").value;
    document.getElementById("chatAnswer").innerText = faqAnswers[selectedQuestion] || "";
}
