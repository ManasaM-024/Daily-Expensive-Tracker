import React from 'react';

function ExpenseList({ expenses, deleteExpense, handleEdit }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      Food: '🍔',
      Transport: '🚗',
      Entertainment: '🎬',
      Utilities: '💡',
      Healthcare: '🏥',
      Shopping: '🛒',
      Education: '📚',
      Other: '📌'
    };
    return emojis[category] || '📌';
  };

  if (expenses.length === 0) {
    return (
      <div className="no-expenses">
        <p>No expenses found. Add your first expense above!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <div className="expense-table">
        <div className="table-header">
          <div className="col-name">Expense Name</div>
          <div className="col-amount">Amount</div>
          <div className="col-date">Date</div>
          <div className="col-category">Category</div>
          <div className="col-actions">Actions</div>
        </div>
        
        {expenses.map((expense) => (
          <div key={expense._id} className="table-row">
            <div className="col-name">{expense.name}</div>
            <div className="col-amount">${expense.amount.toFixed(2)}</div>
            <div className="col-date">{formatDate(expense.date)}</div>
            <div className="col-category">
              <span className="category-badge">
                {getCategoryEmoji(expense.category)} {expense.category}
              </span>
            </div>
            <div className="col-actions">
              <button 
                onClick={() => handleEdit(expense)}
                className="btn btn-edit"
                title="Edit"
              >
                ✏️
              </button>
              <button 
                onClick={() => deleteExpense(expense._id)}
                className="btn btn-delete"
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
