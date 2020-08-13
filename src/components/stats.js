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
                            <h3>MONTHLY CAPITAL</h3>
                            <p>UGX {this.state.kpi.capital}</p>
                        </div>
                        <div><i></i></div>
                    </div>
                    <div className="box">
                        <div>
                            <h3>MONTHLY SALES</h3>
                            <p>UGX {this.state.kpi.sales}</p>
                        </div>
                        <div>
                            <i></i>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <h3>MONTHLY PROFIT</h3>
                            <p>UGX {this.state.kpi.profit}</p>
                        </div>
                        <div>
                            <i></i>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Stats;