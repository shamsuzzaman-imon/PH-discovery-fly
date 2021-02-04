// business class price 

document.getElementById('case-increase').addEventListener('click', function(){
    handleProductChange(true);   
});

document.getElementById('case-decrease').addEventListener('click', function(){
    handleProductChange(false);
});

function handleProductChange(isIncrease) {
    const ticketInput = document.getElementById("ticket-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketTotal = ticketNewCount * 150;
    document.getElementById('subtotal-amount').innerText = ticketTotal;

    const tax = ticketTotal * 0.1;
    document.getElementById('tax-total').innerText = tax;
};


// economy price 

document.getElementById('economy-increase').addEventListener('click', function(){
    handleProductCount(true);   
});

document.getElementById('economy-decrease').addEventListener('click', function(){
    handleProductCount(false);
});

function handleProductCount(isIncrease) {
    const ticketInput = document.getElementById("input-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const economyTotal = ticketNewCount * 100;
    document.getElementById('subtotal-amount').innerText = economyTotal;

    const tax = economyTotal * 0.1;
    document.getElementById('tax-total').innerText = tax;
};

// not understand

// function calculateSubTotal(){
    
//     const firstTotal = handleProductChange(isIncrease);
//     const economyTotal = handleProductCount(isIncrease);
//     const subTotal = firstTotal + economyTotal;

//     return subTotal;
// }



// this code convert to a function

// document.getElementById('case-increase').addEventListener('click', function(){
//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount + 1;
//     ticketInput.value = ticketNewCount;
//     const ticketTotal = ticketNewCount * 150;
//     document.getElementById('subtotal-amount').innerText = ticketTotal;
// });

// document.getElementById('case-decrease').addEventListener('click', function(){
//     const ticketInput = document.getElementById("ticket-count");
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount - 1;
//     ticketInput.value = ticketNewCount;
//     const ticketTotal = ticketNewCount * 150;
//     document.getElementById('subtotal-amount').innerText = ticketTotal;
    
// });