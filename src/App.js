import React ,{Component} from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Form';


var config = {
  headers:{
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	  "x-rapidapi-key": "768eca3f26msh7690703b4fd8819p1880dbjsnf044f41e03ad"
	
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
  }

componentDidMount() {
    axios.get('https://the-cocktail-db.p.rapidapi.com/list.php?i=list',config)
    .then(ingredients => {
      this.setState({ 
      ingredients: ingredients 
    })
    })
    .catch(e=>{
      console.log(e)
      this.setState({...this.state,isFetching:false});
    });
  };
  
  
  render() {
    return (
      <div>
        <Form ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

export default App;



