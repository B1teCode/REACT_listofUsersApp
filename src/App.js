import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
// import axios from "axios";

// const inputClick = () => console.log('Clicked');
// const mouseOver = () => console.log('Mouse Over');

// const helpText = 'Help Text!'

// const baseurl = 'https://reqres.in/api/users?page=1'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Bob",
          lastname: "Marley",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          age: 40,
          isHappy: true
        },
        {
          id: 2,
          firstname: "John",
          lastname: "Doe",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          age: 22,
          isHappy: false
        },
      ]
    }

    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  render() {
    return (
      <div className="name">
        <Header title="Список пользователей" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    )
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] })
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }

}
export default App