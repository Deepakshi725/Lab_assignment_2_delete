import Item from "./Item";
import PropTypes from "prop-types";

const ItemList = ({ items, onDelete }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} />
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

export default ItemList;
