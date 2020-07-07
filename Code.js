class AddItemForm extends React.Component {
    constructor() {
        state={
                    name: '',
                    description: '',
                    price: ''
                    }
           
    }

    onItemNameChangeHandler=(event)=> {
        this.setState({ name: event.target.value});
    }

    onDescriptionChangeHandler=(event)=> {
        this.setState({ description: event.target.value});
    }

    onPriceChangeHandler=(event)=> {
        this.setState({ price: event.target.value});
    }

    onSubmitClick = () => {
        return <ItemDetails name={this.state.name} description={this.state.description} price={this.state.price} />
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onSubmitClick}>
                <label>  Name:  </label> 
                <input type="text" value= this.state.name onChange={this.onItemNameChangeHandler} /> <br/>

                <label> Description: </label>
                <input type="text" value=this.state.description onChange={this.onDescriptionChangeHandler} /> <br/>

                <label> Price: </label>
                <input type="number" value=this.state.price onChange={this.onPriceChangeHandler} /> <br/> 

                <input type="submit" value="Submit" />
                  
            </form>
            </div>
        )
    }

    
}



class ItemDetails extends React.Component {
    constructor(){
        state={
            name: this.props.name,
            description: this.props.description,
            price: this.props.price
        }
    }
    
    onDeleteClickHandler=()=>{
        this.setState({ name: '', description: '', price: '' })
    }

    render(){
        return(
            <div>
                <h1> Name: {this.state.name} </h1>
                <h1> Description: {this.state.description} </h1>
                <h1> Price: {this.state.price} </h1>

                <button onClick={this.onDeleteClickHandler}>Delete </button>
            </div>

        )
    }
}