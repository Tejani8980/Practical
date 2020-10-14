import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import { Table } from "react-bootstrap"
import Catagory from "../Component/Catagory"
import Pagination from "react-js-pagination";




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stokeData: [],
            top: false,
            activePage: 1
        }
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }


    showTop = (find) => {
        this.setState({ top: true, find: find })
    }

    componentDidMount = () => {
        axios.get('./StockList.json')
            .then((res) => {
                console.log(res.data)
                this.setState({ stokeData: res.data })
            }).catch((err) => {
                console.log(err);
            })
    }


    renderTableData = () => {
        return this.state.stokeData.map((stock, index) => {
            const { CA, CATEGORY, CH, CLR, COL, COLSHADE, COMMENT, CUT, Culet, DIA_MN, DIA_MX,
                DPL,
                EFCM,
                FLOURESENCE,
                GIRDLE,
                HT,
                INS,
                KTSVIEW,
                LN,
                LOC,
                LW,
                MILKY,
                NATTS,
                Origin,
                PA,
                PD,
                POL,
                SHAPE,
                STATUS_CODES,
                SYM,
                TBL,
                workerData,
                eye_clean,
                heart_and_arrow,
                measurement, type2a_name
            } = stock;
            return (
                <tr key={index}>
                    <td>{CA}</td>
                    <td>{CATEGORY}</td>
                    <td> {CH}</td>
                    <td> {CLR}</td>
                    <td> {COL}</td>
                    <td> {COLSHADE}</td>
                    <td> {COMMENT}</td>
                    <td> {CUT}</td>
                    <td> {Culet}</td>
                    <td> {DIA_MN}</td>
                    <td> {DIA_MX}</td>
                    <td>{DPL}</td>
                    <td>{EFCM}</td>
                    <td>{FLOURESENCE}</td>
                    <td>{GIRDLE}</td>
                    <td>{HT}</td>
                    <td>{INS}</td>
                    <td> {KTSVIEW}</td>
                    <td>{LN}</td>
                    <td>{LOC}</td>
                    <td>{LW}</td>
                    <td> {MILKY}</td>
                    <td>{NATTS}</td>
                    <td>{Origin}</td>
                    <td>{PA}</td>
                    <td>{PD}</td>
                    <td> {POL}</td>
                    <td>{SHAPE}</td>
                    <td>{STATUS_CODES}</td>
                    <td>{SYM}</td>
                    <td>{TBL}</td>
                    <td> {workerData}</td>
                    <td> {eye_clean}</td>
                    <td> {heart_and_arrow}</td>
                    <td>{measurement}</td>
                    <td>{type2a_name}</td>
                </tr>
            )
        })
    }

    handleTopFilter = () => {

        let a = this.state.stokeData.filter((value, i) => {
            return (value.CATEGORY === this.state.find)
        });


        return a.map((stock, i) => {
            const { CA, CATEGORY, CH, CLR, COL, COLSHADE, COMMENT, CUT, Culet, DIA_MN, DIA_MX,
                DPL,
                EFCM,
                FLOURESENCE,
                GIRDLE,
                HT,
                INS,
                KTSVIEW,
                LN,
                LOC,
                LW,
                MILKY,
                NATTS,
                Origin,
                PA,
                PD,
                POL,
                SHAPE,
                STATUS_CODES,
                SYM,
                TBL,
                workerData,
                eye_clean,
                heart_and_arrow,
                measurement, type2a_name
            } = stock;
            return (
                <tr key={i}>
                    <td>{CA}</td>
                    <td>{CATEGORY}</td>
                    <td> {CH}</td>
                    <td> {CLR}</td>
                    <td> {COL}</td>
                    <td> {COLSHADE}</td>
                    <td> {COMMENT}</td>
                    <td> {CUT}</td>
                    <td> {Culet}</td>
                    <td> {DIA_MN}</td>
                    <td> {DIA_MX}</td>
                    <td>{DPL}</td>
                    <td>{EFCM}</td>
                    <td>{FLOURESENCE}</td>
                    <td>{GIRDLE}</td>
                    <td>{HT}</td>
                    <td>{INS}</td>
                    <td> {KTSVIEW}</td>
                    <td>{LN}</td>
                    <td>{LOC}</td>
                    <td>{LW}</td>
                    <td> {MILKY}</td>
                    <td>{NATTS}</td>
                    <td>{Origin}</td>
                    <td>{PA}</td>
                    <td>{PD}</td>
                    <td> {POL}</td>
                    <td>{SHAPE}</td>
                    <td>{STATUS_CODES}</td>
                    <td>{SYM}</td>
                    <td>{TBL}</td>
                    <td> {workerData}</td>
                    <td> {eye_clean}</td>
                    <td> {heart_and_arrow}</td>
                    <td>{measurement}</td>
                    <td>{type2a_name}</td>
                </tr>
            )
        })
    }





    render() {
        return (
            <>
                <Header />
                <div style={{ zIndex: 1 }} className="mt-2">
                    <Catagory stock={this.state.stokeData} filterTop={this.showTop} />
                </div>
                <div className="m-3">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>CA</th>
                                <th>CATEGORY</th>
                                <th> CH</th>
                                <th> CLR</th>
                                <th> COL</th>
                                <th> COLSHADE</th>
                                <th> COMMENT</th>
                                <th> CUT</th>
                                <th> Culet</th>
                                <th>DIA_MN</th>
                                <th> DIA_MX</th>
                                <th>DPL</th>
                                <th>EFCM</th>
                                <th>FLOURESENCE</th>
                                <th>GIRDLE</th>
                                <th>HT</th>
                                <th>INS</th>
                                <th> KTSVIEW</th>
                                <th>LN</th>
                                <th>LOC</th>
                                <th>LW</th>
                                <th> MILKY}</th>
                                <th>NATTS</th>
                                <th>Origin</th>
                                <th>PA</th>
                                <th>PD</th>
                                <th> POL</th>
                                <th>SHAPE</th>
                                <th>STATUS_CODES</th>
                                <th>SYM</th>
                                <th>TBL</th>
                                <th> workerData</th>
                                <th> eye_clean</th>
                                <th> heart_and_arrow</th>
                                <th>measurement</th>
                                <th>type2a_name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                (this.state.top === true) ? this.handleTopFilter() :
                                    this.renderTableData()}
                        </tbody>

                    </Table>
                </div>
                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={30}
                        totalItemsCount={200}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </>
        );
    }
}

export default Home;    