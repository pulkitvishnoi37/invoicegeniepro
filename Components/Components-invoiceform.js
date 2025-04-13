import { useState } from 'react';

export default function InvoiceForm() {
  const [items, setItems] = useState([{ name: "", price: 0 }]);

  return (
    <div className="space-y-4 p-6">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4">
          <input
            type="text"
            value={item.name}
            onChange={(e) => {
              const newItems = [...items];
              newItems[i].name = e.target.value;
              setItems(newItems);
            }}
            placeholder="Item name"
            className="border p-2"
          />
          <input
            type="number"
            value={item.price}
            onChange={(e) => {
              const newItems = [...items];
              newItems[i].price = e.target.value;
              setItems(newItems);
            }}
            placeholder="Price"
            className="border p-2"
          />
        </div>
      ))}
      <button 
        onClick={() => setItems([...items, { name: "", price: 0 }])}
        className="bg-blue-600 text-white px-4 py-2"
      >
        + Add Item
      </button>
    </div>
  );
}
