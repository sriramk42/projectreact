import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    { name: "Hagrid", message: "You are a wizard, Harry!" },
    { name: "Jon", message: "I know nothing" }
  ]);

  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
