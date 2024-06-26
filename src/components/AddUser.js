import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            avatar: "",
        }
    }

    handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                <input type="file" accept="image/*" onChange={this.handleFileUpload} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
}

export default AddUser