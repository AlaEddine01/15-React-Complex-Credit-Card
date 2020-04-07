import React from "react";
import './Creditcard.css';

// Function to add slash between MM and YY:
const slash = str =>{
    if(str!=="")
        return str.slice(0,2)+"/"+str.slice(2)

}

// function to add " " every 4 characters:
const separation = str => {
    let result = ' ' ;
    for (let i = 0; i  <= str.length; i+=4) {
        result += str.slice(i, i+4) + ' '
    }
    return result.trim()
}


class Creditcard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cardNumber: '',
            cardHolder: '',
            cardExpired: ''
        }

        this.handleCardnumber = this.handleCardnumber.bind(this)
        this.handlecardHolder = this.handlecardHolder.bind(this)
        this.handlecardExpired = this.handlecardExpired.bind(this)
    }

    handleCardnumber(event) {
        this.setState({cardNumber: event.target.value})
    }

    handlecardHolder(event){
        this.setState({cardHolder:event.target.value.toUpperCase()})
    }

    handlecardExpired(event){
        this.setState({cardExpired:event.target.value})
    }

    render() {

        return(
            <div className="main">
                <div className="card">
                    <p className="company">ALA COMPANY</p>                     
                    <img className="puce" src="https://i.ya-webdesign.com/images/card-chip-png-19.png" alt="puce" />
                    <p className="number">{separation(this.state.cardNumber)}</p>                  
                    <img className="master-img" src="https://seeklogo.net/wp-content/uploads/2016/07/mastercard-vector-logo.png" alt="Logo" />
                    <p className="expire">{slash(this.state.cardExpired)}</p>                      
                    <p className="holder">{this.state.cardHolder}</p>
                </div>
                
                <div className="form-div">
                    <form >
                        <input type="text" placeholder="Card Number" maxLength="16" value={this.state.cardNumber} onChange={this.handleCardnumber} />
                        <input type="text" placeholder="Name" maxLength={20} value={this.state.cardHolder} onChange={this.handlecardHolder}/>
                        <input type="text" placeholder="MMYY" maxLength="4" value={this.state.cardExpired}  onChange={this.handlecardExpired} />
                    </form>
                </div>

            </div>
        )
    }
}
export default Creditcard;