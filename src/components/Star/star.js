import React, { Fragment, Component } from 'react';
import ShowModal from '../Modal/modal';
class StarItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    closeModal = () => {
        this.setState({ open: false })
    }
    showModal = () => {
            this.setState({ open: true })
            console.log(this.state.open)
    }
    render() {
        
        return (
            <Fragment>
                <tbody>
                    <tr onClick={() => {console.log('open'); this.showModal()}}>
                        <td className="left-Align">{this.props.item.name}</td>
                        <td className="left-Align">{this.props.item.birth_year}</td>
                        <td className="left-Align">{this.props.item.eye_color}</td>
                        <td className="left-Align">{this.props.item.gender}</td>
                    </tr>
                </tbody>               
                 <ShowModal open={this.state.open} onClose={this.closeModal} item={this.props.item} />

            </Fragment>
        )
    }

}
export default StarItem;