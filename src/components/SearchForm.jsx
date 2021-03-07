import React, { Component } from 'react';
import QuestionList from './QuestionList';
import {
    Field,
    Label,
    Button,
    Input
} from 'bloomer';
import 'bulma/css/bulma.css'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            questionsArray: []
        }
    }

    _onChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const newQuestionData = await fetch (`https://8ball.delegator.com/magic/JSON/${this.state.question}`)
            .then(response => response.json())
        this.setState({
            questionsArray: [...this.state.questionsArray, newQuestionData]
        });
    }

    render() {
        const { questionsArray } = this.state;
        console.log('users', Array.isArray(questionsArray))
        return(
            <>
                <form onSubmit={this._handleSubmit}>
                    <Field isGrouped style={{justifyContent: "center", marginTop: 20}}>
                        <Label>
                            <Input 
                                type="text"
                                name="question"
                                placeholder="Whats your question"
                                value={this.state.question}
                                onChange={(event) => {
                                    this._onChange("question", event.target.value) 
                            }}
                            />
                        </Label>
                        <Button style={{margin: '0 20px'}}
                        className='center-button'
                        type='submit'
                        isColor='primary'>Submit</Button>
                        
                    </Field>
                </form>
                {questionsArray.length ? <QuestionList questionsArray={questionsArray} /> : <p>The Magic ⓼-Ball has not been asked any questions yet.</p>}
            </>
        );
    };
}

export default SearchForm;