document.addEventListener("DOMContentLoaded", function() {

    let items = [];

    document.getElementById("add-item-btn").addEventListener("click", function() {

        let name = document.getElementById("item").value;
        let qty = document.getElementById("item-qty").value;
        let price = document.getElementById("item-price").value;

        if (name === "" || qty === "" || price === "") {
            alert("Please fill in all fields.");
            return;
        } 

        let item = {
            Item: name,
            qty: Number(qty),
            price: Number(price),
            total: Number(qty) * Number(price)
        };

        items.push(item);
        renderItems();

        document.getElementById("item").value = "";
        document.getElementById("item-qty").value = "";
        document.getElementById("item-price").value = "";
    });

    function renderItems() {
        let tbody = document.getElementById("item-body");
        tbody.innerHTML = "";


        let grandTotal = 0;

        items.forEach(function(item) {
            let row = "<tr>" +
                "<td>" + item.Item + "</td>" +
                "<td>" + item.qty + "</td>" +
                "<td>Rs. " + item.price + "</td>" +
                "<td>Rs. " + item.total + "</td>" +
                "</tr>";
            tbody.innerHTML += row;
            grandTotal += item.total;
        });

        document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
    }

    document.getElementById("print-btn").addEventListener("click",function() {

        let customerName = document.getElementById("customer-name").value;

        if(items.length === 0) {
            alert("Please add items!");
            return;
        }

        let billHTML ="<h2> Thennakoon Stores </h2>";
        billHTML +="<p>Customer:" + customerName + "</p>";
        billHTML +="<table border='1' width='100%'>";
        billHTML +="<tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>";

        items.forEach(function(item) {
            billHTML +="<tr>";
           billHTML += "<td>" + item.Item + "</td>";
        billHTML += "<td>" + item.qty + "</td>";
        billHTML += "<td>Rs. " + item.price + "</td>";
        billHTML += "<td>Rs. " + item.total + "</td>";
        billHTML += "</tr>";
    });

    billHTML += "</table>";
    billHTML += "<h3>Total: Rs. " + document.getElementById("grand-total").textContent + "</h3>";

    document.getElementById("bill-preview").innerHTML = billHTML;

    window.print();
}); 
    })

