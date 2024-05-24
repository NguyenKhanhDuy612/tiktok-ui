class Order {
    constructor(customerName, customerAddress, customerPhone, orderAmount, orderDate) {
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
        this.orderAmount = orderAmount;
        this.orderDate = orderDate;
    }

    printOrderDetails() {
        console.log(`Customer Name: ${this.customerName}`);
        console.log(`Customer Address: ${this.customerAddress}`);
        console.log(`Customer Phone: ${this.customerPhone}`);
        console.log(`Order Amount: ${this.orderAmount}`);
        console.log(`Order Date: ${this.orderDate}`);
    }

    applyDiscount(percentage) {
        this.orderAmount -= this.orderAmount * percentage / 100;
    }

    // Other methods
}
