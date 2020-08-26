import React, { Component, Fragment } from 'react';
import '../css/stats.css'

class Stats extends Component {
    state = {
        kpi: {
            capital: 21324,
            sales: 221324,
            profit: 65335,
        }
    }
    render() {
        return (
            <Fragment>
                <div id="kpicontainer">
                    <div className="box">
                        <div>
                            <h4>MONTHLY CAPITAL</h4>
                            <p>UGX {this.state.kpi.capital}</p>
                        </div>
                        <div><i></i></div>
                    </div>
                    <div className="box">
                        <div>
                            <h4>MONTHLY SALES</h4>
                            <p>UGX {this.state.kpi.sales}</p>
                        </div>
                        <div>
                            <i></i>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <h4>MONTHLY PROFIT</h4>
                            <p>UGX {this.state.kpi.profit}</p>
                        </div>
                        <div>
                            <i></i>
                        </div>
                    </div>
                </div>
                <br></br>
            </Fragment>
        );
    }
}

export default Stats;