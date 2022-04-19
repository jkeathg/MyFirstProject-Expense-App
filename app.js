// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)




const submitExpense = document.getElementById('enterExpense');
const expenseList = document.getElementById('expenseList');


const uList = document.createElement('ul');

submitExpense.addEventListener('click', () => {
    const liDiv = document.createElement('div');
    liDiv.classList = 'expenseEntry';
    liDiv.id = 'newEntry';
    const liExpenseName = document.createElement('li');
    liExpenseName.classList = 'expenseEntry';
    const liExpenseDate = document.createElement('li');
    liExpenseDate.classList = 'expenseEntry';
    const liExpenseAmt = document.createElement('li');
    liExpenseAmt.classList = 'expenseEntry';
    const liClrBtn = document.createElement('input');
    liClrBtn.type = 'button';
    liClrBtn.classList = 'expenseEntry';
    liClrBtn.value = "Clear Entry";
    liClrBtn.id = 'clearEntry';
    const addExpenseName = document.getElementById('expenseName').value;
    liExpenseName.appendChild(document.createTextNode(addExpenseName));
    const addExpenseDate = document.getElementById('expenseDate').value;
    liExpenseDate.appendChild(document.createTextNode(addExpenseDate));
    const addExpenseAmt = document.getElementById('expenseAmt').value;
    liExpenseAmt.appendChild(document.createTextNode(addExpenseAmt));

    uList.appendChild(liDiv);
    liDiv.appendChild(liExpenseName);
    liDiv.appendChild(liExpenseDate);
    liDiv.appendChild(liExpenseAmt);
    liDiv.appendChild(liClrBtn);
    expenseList.appendChild(uList);

  
});



// removing a single line

uList.addEventListener('click', deleteLine);


function deleteLine(e) {
    const item = e.target;
    if (item.id === 'clearEntry') {
        const clr = item.parentElement;
        clr.remove();
    }
}