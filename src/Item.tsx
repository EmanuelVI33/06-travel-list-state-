import { ItemInt } from "./App";

interface ItemProps {
  item: ItemInt;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌&times;</button>
    </li>
  );
}
