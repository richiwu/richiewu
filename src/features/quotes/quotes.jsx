import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

const quoteList = {
    quotes: [
        {
            quotePhrase: 'What would you do if you were not afraid?',
            quoteAuthor: 'Unknown Author'
        },
        {
            quotePhrase: 'quote 2',
            quoteAuthor: 'author 2'
        },
        {
            quotePhrase: 'quote 3',
            quoteAuthor: 'author 3'
        },
        {
            quotePhrase: 'quote 4',
            quoteAuthor: 'author 4'
        },
        {
            quotePhrase: 'quote 5',
            quoteAuthor: 'author 5'
        },
        {
            quotePhrase: 'quote 6',
            quoteAuthor: 'author 6'
        },
        {
            quotePhrase: 'quote 7',
            quoteAuthor: 'author 7'
        }
    ]
}

class Quotes extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomIndex: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            randomIndex: Math.floor(Math.random() * quoteList.quotes.length)
        })
    }
    
    render(){
        return(
            <div className="quotePage">
                <div className="quoteContainer">
                    <h1>My Favourite Quotes</h1>
                    <p className="quoteText">
                        " {quoteList.quotes[this.state.randomIndex].quotePhrase} "
                    </p>
                    <p className="author">
                        - {quoteList.quotes[this.state.randomIndex].quoteAuthor}
                    </p>
                    <Button
                        onClick={this.handleClick}
                    >
                        New Quote
                    </Button>
                </div>
                
            </div>
        )
    }
}

export default Quotes