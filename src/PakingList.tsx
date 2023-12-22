import { useState } from "react";
import { ItemInt } from "./App";
import Item from "./Item";

interface PakingListProps {
  items: ItemInt[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}

export default function PakingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: PakingListProps) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems: ItemInt[] = [];

  if (sortBy === "input") sortItems = items;
  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
