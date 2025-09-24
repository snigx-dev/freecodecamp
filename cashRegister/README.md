# Build a Cash Register

Here you'll build a cash register app that returns change to the customer based on the **price** of the item, the **amount of cash provided**, and the **cash in the drawer (cid)**.

Your app should show different messages depending on the scenario:

- **Status: INSUFFICIENT_FUNDS** – if cash-in-drawer is less than the change due, or if exact change cannot be returned.
- **Status: CLOSED** – if cash-in-drawer is equal to the change due.
- **Status: OPEN** – if cash-in-drawer is greater than the change due and change can be returned, with coins and bills listed from highest to lowest.

---

## Currency Units

| Unit              | Amount |
|------------------|--------|
| Penny             | $0.01 (PENNY) |
| Nickel            | $0.05 (NICKEL) |
| Dime              | $0.10 (DIME) |
| Quarter           | $0.25 (QUARTER) |
| Dollar            | $1 (ONE) |
| Five Dollars      | $5 (FIVE) |
| Ten Dollars       | $10 (TEN) |
| Twenty Dollars    | $20 (TWENTY) |
| One Hundred Dollars | $100 (ONE HUNDRED) |

---

## Objective
Build an app functionally similar to [Cash Register](https://cash-register.freecodecamp.rocks).

---

## User Stories

1. You should have an input element with an **id** of `cash`.
2. You should have a `div`, `span`, or `p` element with an **id** of `change-due`.
3. You should have a button element with an **id** of `purchase-btn`.
4. When the value in the `#cash` element is **less than the price**, show an alert:  
   **"Customer does not have enough money to purchase the item"**
5. When the value in the `#cash` element is **equal to the price**, display:  
   **"No change due - customer paid with exact cash"**
6. Example scenarios:

    - **Price:** 19.5, **Cash:** 20, **CID:** `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`  
      → **Change Due:** `"Status: OPEN QUARTER: $0.5"`

    - **Price:** 3.26, **Cash:** 100, **CID:** same as above  
      → **Change Due:** `"Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"`

    - **Price:** 19.5, **Cash:** 20, **CID:** `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`  
      → **Change Due:** `"Status: INSUFFICIENT_FUNDS"`

    - **Price:** 19.5, **Cash:** 20, **CID:** `[["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`  
      → **Change Due:** `"Status: CLOSED PENNY: $0.5"`

---

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-cash-register-project/build-a-cash-register

## How to Run
1. Clone this repository.
2. Open `index.html` in your browser.
3. Enter the **cash amount** and click **Purchase** to calculate change.
