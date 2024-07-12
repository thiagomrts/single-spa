import React, { useState } from "react";
import { Container, Label, Input, Button, List, ListItem } from "./styles";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Container>
      <Label htmlFor="itemInput">Add Items to List</Label>
      <Input
        type="text"
        id="itemInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleAddItem}>Add Item</Button>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
