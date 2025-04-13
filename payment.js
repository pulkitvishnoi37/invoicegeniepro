function selectPlan(planType) {
    localStorage.setItem("userPlan", planType);
    alert(`You have selected the ${planType} plan.`);
}

function startPayment(planType) {
    const paymentAmount = planType === "pro" ? 999 : 1999;

    // Razorpay Payment Integration
    const options = {
        key: "YOUR_RAZORPAY_API_KEY",
        amount: paymentAmount * 100, // Convert to paise
        currency: "INR",
        name: "Invoice Genie",
        description: `Subscription for ${planType} plan`,
        handler: function (response) {
            localStorage.setItem("userPlan", planType);
            alert("Payment successful! Plan activated.");
        }
    };

    const paymentGateway = new Razorpay(options);
    paymentGateway.open();
}
