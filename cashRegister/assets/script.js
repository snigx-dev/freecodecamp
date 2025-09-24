let price = 19.5;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
];

const CURRENCY_UNIT_VALUES = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
};

document.addEventListener('DOMContentLoaded', () => {
    const cashInput = document.getElementById("cash");
    const purchaseButton = document.getElementById("purchase-btn");
    const changeDueDiv = document.getElementById("change-due");

    // Event listener for the purchase button
    purchaseButton.addEventListener('click', () => {
        const cashProvided = parseFloat(cashInput.value);

        // Customer does not have enough money
        if (cashProvided < price) {
            alert("Customer does not have enough money to purchase the item");
            return;
        }

        // Exact cash payment
        if (cashProvided === price) {
            changeDueDiv.textContent = "No change due - customer paid with exact cash";
            return;
        }

        // Main logic for calculating change
        const changeNeeded = parseFloat((cashProvided - price).toFixed(2));
        let totalCid = parseFloat(cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2));

        if (totalCid < changeNeeded) {
            changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
            return;
        }

        let changeArr = [];
        let changeDue = changeNeeded;

        // Iterate through CID in reverse (highest to lowest denomination)
        for (let i = cid.length - 1; i >= 0; i--) {
            const unitName = cid[i][0];
            const unitValue = CURRENCY_UNIT_VALUES[unitName];
            let availableInDrawer = cid[i][1];
            let amountToReturn = 0;

            while (changeDue >= unitValue && availableInDrawer > 0) {
                changeDue = parseFloat((changeDue - unitValue).toFixed(2));
                availableInDrawer = parseFloat((availableInDrawer - unitValue).toFixed(2));
                amountToReturn = parseFloat((amountToReturn + unitValue).toFixed(2));
            }

            if (amountToReturn > 0) {
                changeArr.push([unitName, amountToReturn]);
            }
        }

        // Final check to see if exact change could be made
        if (parseFloat(changeDue.toFixed(2)) > 0) {
            changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
        } else {
            if (totalCid === changeNeeded) {
                changeDueDiv.textContent = `Status: CLOSED ${formatChange(changeArr)}`;
            } else {
                changeDueDiv.textContent = `Status: OPEN ${formatChange(changeArr)}`;
            }
        }
    });
});

// Helper function to format the change array for display
const formatChange = (arr) => {
    return arr.map(([name, amount]) => `${name}: $${amount}`).join(" ");
};