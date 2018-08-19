import React, { Component } from 'react';

class ExpenseForm extends Component {
    state = {
        description: '',
        note: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // USING REGEX to ENFORCE
        if ( amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => {{ amount }});
        }
    };

    render() {
        return (
            <div>
                <h1>ExpenseForm title</h1>
                <form>
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>
                <input
                    type="number"
                    placeholder="Description" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                <textarea 
                    placeholder="Add a note"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <button> Add expense </button>
                </form>
            </div>
        )
    };
};

export default ExpenseForm;