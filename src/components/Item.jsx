import PropTypes from "prop-types";

const Item = ({ item, onDelete }) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <span>{item.name} ({item.status})</span>
        <button onClick={() => onDelete(item.id)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
          Delete
        </button>
      </div>
    );
  };

  Item.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  
  export default Item;
  