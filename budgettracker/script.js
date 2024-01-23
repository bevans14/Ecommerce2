class BudgetTracker {
    constructor() { // constructor is the skeleton
      this.budgetInput = document.getElementById('budgetAmount');
      this.submitBudgetButton = document.getElementById('button1');
      this.billInput = document.getElementById('bill');
      this.amountInput = document.getElementById('amount');
      this.submitExpenseButton = document.getElementById('button2');
      this.budgetDisplay = document.getElementById('budget');
      this.expensesDisplay = document.getElementById('expenses');
      this.amountLeftDisplay = document.getElementById('amountleftdisplay');
      this.expenseList = document.getElementById('expenseList');
      this.amountLeftParagraph = document.getElementById('amountleftdisplay');
  
      this.budget = 0;
      this.expenses = 0;
  
      this.buttons();
    }
  
    buttons() {
      this.submitBudgetButton.addEventListener('click', (event) => {
        event.preventDefault(); // when the buttons are clicked, the page does not reload
        this.setBudget();
      });
  
      this.submitExpenseButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.addExpense(); // calling functions to run once the buttons are clicked
      });
    }
  
    setBudget() {
      const budgetAmount = parseFloat(this.budgetInput.value);
      if (!isNaN(budgetAmount) && budgetAmount >= 0) { // makes sure the value's inputted are greater than 0
        this.budget = budgetAmount;
        this.updateBudget();
        this.budgetInput.value = '';
      } else {
        alert('Enter a valid budget amount!!!! ):<');
      }
    }
  
    addExpense() {
      const expenseAmount = parseFloat(this.amountInput.value);
      if (!isNaN(expenseAmount) && expenseAmount >= 0) {
        this.expenses += expenseAmount;
        this.updateBudget();
        this.clearExpenseForm();
      } else {
        alert('Enter a valid expense amount!!!! ):<');
      }
    }
  
    updateBudget() {
      const amountLeft = this.budget - this.expenses;
  
      this.budgetDisplay.textContent = this.budget.toFixed(2);
      this.expensesDisplay.textContent = this.expenses.toFixed(2);
      this.amountLeftDisplay.textContent = amountLeft.toFixed(2);
  
      this.amountLeftDisplay.style.color = amountLeft >= 0 ? 'green' : 'red';
    }
  
    clearExpenseForm() {
      this.billInput.value = '';
      this.amountInput.value = '';
    }



  }
  const budgetTracker = new BudgetTracker();
  