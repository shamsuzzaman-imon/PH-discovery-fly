
document.getElementById('case-increase').addEventListener('click', function(){
    handleProductChange(true);   
});

document.getElementById('case-decrease').addEventListener('click', function(){
    handleProductChange(false);
});

function handleProductChange(isIncrease) {
    const ticketInput = document.getElementById("ticket-count");
    const ticketCount = parseInt(ticketInput.value);
    // const ticketNewCount = ticketCount - 1;
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
}




// trying small code

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