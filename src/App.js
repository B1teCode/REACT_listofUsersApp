import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";

// const inputClick = () => console.log('Clicked');
// const mouseOver = () => console.log('Mouse Over');

// const helpText = 'Help Text!'

class App extends React.Component {

  render() {
    return (
      <div className="name">
        <Header title="Список пользователей"/>
        <main>
          <Users />
        </main>
        <aside></aside>
      </div>
    )
  }


}
export default App