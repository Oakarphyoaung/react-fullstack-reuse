import "./App.css";
import User from "./components/User";
import { useState } from "react";

const allUsers: User[] = [
  { name: "aung myanmar", email: "aung@gmail.com", age: 40 },
  { name: "aung kayin", email: "kayin@gmail.com", age: 24 },
  { name: "aung mon", email: "mon@gmail.com", age: 50 },
  { name: "aung chin", email: "chin@gmail.com", age: 40 },
];

const App = () => {
  const [users, setUsers] = useState<User[]>(allUsers);
  const [inputName, setInputName] = useState<string>("");
  const handleOnclick = () => {
    if (inputName) {
      const newUsers = [
        ...users,
        {
          name: inputName,
          email: `${inputName.toLowerCase().replace(" ", ".")}@example.com`,
          age: Math.floor(Math.random() * 80) + 18,
        },
      ];
      setUsers(newUsers);
      setInputName("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            value={inputName}
            onChange={(e) => {
              return setInputName(e.target.value);
            }}
          />
          <button style={{ marginTop: "10px" }} onClick={handleOnclick}>
            Add User
          </button>
          {users.map((user) => {
            return (
              <div key={user.email}>
                {user.name} <br />
                {user.email}
                <br />
                {user.age}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default App;
