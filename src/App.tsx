import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PakingList from "./PakingList";
import Stats from "./Stats";

export interface ItemInt {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<ItemInt[]>([]);

  const handleAddItem = (item: ItemInt) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item: ItemInt) => item.id !== id));
  };

  const handleToggleItem = (id: number) => {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PakingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
