import { useState } from "react";
import { ItemInt } from "./App";

interface FormProps {
  onAddItem: (item: ItemInt) => void;
}

export default function Form({ onAddItem }: FormProps) {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene la carga de la página

    if (!description) return;

    const item = { quantity, description, packed: false, id: Date.now() };
    onAddItem(item);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you 😍 trip?</h3>

      {/* Creamos un array de 20 y luego iteramos para retornar option */}
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        name=""
        id=""
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
