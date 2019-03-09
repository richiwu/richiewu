import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

const quoteList = {
    quotes: [
        {
            quotePhrase: 'What would you do if you were not afraid?',
            quoteAuthor: 'Unknown Author'
        },
        {
            quotePhrase: 'Every day is the first day of your life',
            quoteAuthor: 'Random Movie'
        },
        {
            quotePhrase: 'Life is too short to be a shitty person',
            quoteAuthor: 'Unknown Author'
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