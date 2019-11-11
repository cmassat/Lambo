import React, { Component} from 'react';
import './style.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <a href="https://www.gofundme.com/f/bills-lambo">
                <div className="cloud-container">
                    <img 
                        src={require('../images/cloud.svg')}
                        width="20%"
                        height="20%" 
                    />
                    <div>Click to contribute to my lambo fund</div>
                </div> </a>
                <div className="car-container" >
                    <div className="me-car--container">
                        <div className="me-car-me">
                            <img 
                                src={require('../images/billNoBackground.png')}
                                height="25%"
                                width="25%"
                            />
                        </div>
                        <div  className="me-car-car">
                            <img
                                src={require('../images/TheStructorr_Lamborghini_Gallardo.svg')}
                                height="100%"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


