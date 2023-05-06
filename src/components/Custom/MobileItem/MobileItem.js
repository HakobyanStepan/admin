import React,{useState} from "react";
import "./MobileItem.scss";

const MobileItem = ({ item, onDelete, onToggleChecked, isChecked }) => {
	const [editMode, setEditMode] = useState(false);
	const [editedItem, setEditedItem] = useState(item);
  
	const handleDelete = () => {
	  onDelete(item.id);
	};
  
	const handleToggle = () => {
	  onToggleChecked(item.id);
	};
  
	const handleEditClick = () => {
	  setEditMode(true);
	};
  
	const handleInputChange = (event) => {
	  const { name, value } = event.target;
	  setEditedItem({ ...editedItem, [name]: value });
	};
  
	const handleSaveClick = () => {
	  setEditMode(false);
	  item.name = editedItem.name;
	  item.article = editedItem.article;
	  item.count = editedItem.count;
	  item.price = editedItem.price;
	};
  return (
    <div className="mobile_item">
      <div className="checkbox_block">
	  <input type="checkbox" checked={isChecked} onChange={handleToggle} />
	  <img
            alt="delete"
            src={require("assets/img/trash.png")}
            width={"20px"}
            onClick={handleDelete}
          />
          <img
            alt="edit"
            src={require("assets/img/edit.png")}
            width={"20px"}
            onClick={handleEditClick}
          />
      </div>
	  {editMode ? (
        <>
		<div className="mobile_card_item">
        <span>Name</span>
		<input
            className="edit"
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleInputChange}
          />
      </div>
	  <div className="mobile_card_item">
        <span>Article</span> 
        <input
            className="edit"
            type="text"
            name="article"
            value={editedItem.article}
            onChange={handleInputChange}
          />
      </div>
	  <div className="mobile_card_item">
        <span>Count</span>  
		<input
            className="edit"
            type="text"
            name="count"
            value={editedItem.count}
            onChange={handleInputChange}
          />
      </div>
      <div className="mobile_card_item">
        <span>Price</span>  <input
            className="edit"
            type="text"
            name="price"
            value={editedItem.price}
            onChange={handleInputChange}
          />
      </div>
          
        
         
          <img
		  className="done"
            alt="done"
            src={require("assets/img/done.png")}
            width={"20px"}
            height={"20px"}
            onClick={handleSaveClick}
          />
        </>
      ) : (
		<>
      <div className="mobile_card_item">
        <span>Name</span>
        <span className="mobile_name">{item.name}</span>
      </div>
      <div className="mobile_card_item">
        <span>Article</span>{" "}
        <span className="mobile_article">{item.article}</span>
      </div>
      <div className="mobile_card_item">
        <span>Count</span> <span className="mobile_count">{item.count}</span>
      </div>
      <div className="mobile_card_item">
        <span>Price</span> <span className="mobile_price">{item.price}</span>
      </div>
	 
	  </>
	  
)}
</div>);
}
export default MobileItem;
