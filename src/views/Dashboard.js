/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import items from "contexts/custom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle, 
  Row,
  Col,
} from "reactstrap";
import Item from "../components/Custom/Item/Item";
import MobileItem from "components/Custom/MobileItem/MobileItem";
import Search from "../components/Custom/Search/Search";
import "assets/scss/black-dashboard-react/dashboard.scss"; 
function Dashboard(props) {
  const [stateItems, setItems] = useState(items);
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [articleInput, setArticleInput] = useState("");
  const [countInput, setCountInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [showAddItems, setShowAddItems] = useState(false);

  const handleDelete = (id, shouldDelete = true) => {
    if (shouldDelete) {
      setItems(stateItems.filter((item) => item.id !== id));
    }
    setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
  };

  const handleDeleteSelected = () => {
    setItems(stateItems.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
  };

  const handleToggleChecked = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleAddItem = () => {
    if (nameInput && articleInput && countInput && priceInput) {
      const newItem = {
        id: stateItems.length + 1,
        name: nameInput,
        article: articleInput,
        count: countInput,
        price: priceInput,
      };
      setItems([...stateItems, newItem]);
      setNameInput("");
      setArticleInput("");
      setCountInput("");
      setPriceInput("");
      setShowAddItems(false);
    }
  };

  const filteredItems = stateItems.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Search onSearchInput={handleSearchInput} />
                <button
                  className="addButton"
                  onClick={() => setShowAddItems(!showAddItems)}
                >
                  add
                </button>
                {showAddItems && (
                  <div className="addItems">
                    <input
                      className="edit"
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Name"
                    />
                    <input
                      className="edit"
                      type="text"
                      value={articleInput}
                      onChange={(e) => setArticleInput(e.target.value)}
                      placeholder="Article"
                    />
                    <input
                      className="edit"
                      type="text"
                      value={countInput}
                      onChange={(e) => setCountInput(e.target.value)}
                      placeholder="Count"
                    />
                    <input
                      className="edit"
                      type="text"
                      value={priceInput}
                      onChange={(e) => setPriceInput(e.target.value)}
                      placeholder="Price"
                    />

                    <img
                      alt="done"
                      src={require("assets/img/done.png")}
                      width={"20px"}
                      height={"20px"}
                      onClick={handleAddItem}
                    />
                  </div>
                )}

                {checkedItems.length > 0 && (
                  <div className="checkedItems" onClick={handleDeleteSelected}>
                    <img width={"30px"} src={require("assets/img/trash.png")} alt="trash"/>
                    <span>Checked {checkedItems.length}</span>{" "}
                  </div>
                )}
                <div className="desktop_cards">
                  {filteredItems.map((item) => (
                    <Item
                      item={item}
                      key={item.id}
                      onDelete={handleDelete}
                      onToggleChecked={handleToggleChecked}
                      isChecked={checkedItems.includes(item.id)}
                    />
                  ))}
                </div>

                <div className="mobile_cards">
                  {filteredItems.map((item) => (
                    <MobileItem
                      item={item}
                      key={item.id}
                      onDelete={handleDelete}
                      onToggleChecked={handleToggleChecked}
                      isChecked={checkedItems.includes(item.id)}
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
