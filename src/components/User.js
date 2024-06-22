import React from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user">
                <div className="user_info">
                    <img src={this.user.avatar} />
                    <div className="baseInfo">
                        <h3>{this.user.first_name} {this.user.last_name}</h3>
                        <b>{this.user.email}</b>
                    </div>
                    <div>
                        <IoHammerSharp onClick={() => {
                            this.setState({
                                editForm: !this.state.editForm
                            })
                        }} className="edit-icon"/>
                        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                    </div>
                </div>
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />} 
            </div>
        )
    }
}

export default User