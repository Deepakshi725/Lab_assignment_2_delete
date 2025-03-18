import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch list items from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Handle deletion
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
