import React, { Fragment, Component } from "react";
import "./Stars.css";
import axios from 'axios';
import Star from '../Star/star';
class StarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starToDisplay: [],
            stars: []
        }
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                this.setState({
                    startoSidplay: response.data.results,
                    stars: response.data.results
                })
            })
            .catch(err => console.log(err));
    }
    filterList = (event) => {
        let updatedList = this.state.startoSidplay;
        updatedList = updatedList.filter(function (item) {
            return item.name.toLowerCase().indexOf(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ stars: updatedList });
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.filterList} />
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <table className="table table-hover" >
                                <thead style={{ background: '#1abc9c' }}>
                                    <tr>
                                        <th>Name</th>
                                        <th>Birth Year</th>
                                        <th>Eye Color</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                {
                                    this.state.stars.map((item, index) => {
                                        return <Star
                                            item={item}
                                            key={index}
                                            id={index+1} />
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StarsComponent;