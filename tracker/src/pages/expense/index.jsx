import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction.js";

function ExpenseTracker() {
  const [description, setDesc] = useState("");
  const [transactionAmount, setAmt] = useState(0);
  const [transactionType, setTransType] = useState("expense");
  const { addTransaction } = useAddTransaction(
    description,
    transactionAmount,
    transactionType
  );
  // destructuring
  function transact(e) {
    e.preventDefault();
    try {
      addTransaction();
      setAmt(0);
      setDesc("");
      setTransType("expense");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>₹ 0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>₹ 0.00</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>₹ 0.00</p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              transact(e);
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Description (ex: haircut)"
              value={description}
            />
            <input
              type="number"
              placeholder="price "
              value={transactionAmount}
              onChange={(e) => {
                setAmt(e.target.value);
              }}
            />
            <br />
            <div>
              <input
                type="radio"
                id="expense"
                value="expense"
                onChange={(e) => {
                  setTransType(e.target.value);
                }}
                checked={transactionType === "expense"}
              />
              <label htmlFor="expense">Expense</label>
            </div>

            <div>
              <input
                type="radio"
                id="income"
                name="type"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => {
                  setTransType(e.target.value);
                }}
              />
              <label htmlFor="income">Income</label>
            </div>

            <button type="submit">Add transaction</button>
          </form>
        </div>
      </div>
      <div className="Transactions">
        <h3>Transactions</h3>
      </div>
    </>
  );
}

export default ExpenseTracker;
