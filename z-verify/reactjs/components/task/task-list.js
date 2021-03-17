import React from "react";
import ListItems from "./list-items";

class TaskList extends React.Component {
  constructor(props) {
    super(props); // exetends to base class

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };

    // set all bindings
    this.bindings();
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      // append current item
      const items = [...this.state.items, newItem];

      this.setState({
        items,
        currentItem: {
          // reset input
          text: "",
          key: "",
        },
      });
    }
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  deleteItem(key) {
    this.setState({
      items: this.state.items.filter((item) => item.key !== key),
    });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });

    this.setState({ items });
  }

  render() {
    return (
      <div className="mt-12 mx-auto w-1/4">
        <header>
          <form id="to-do-form" onSubmit={this.addItem} className="mb-6 flex">
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
              className="p-2 w-full border rounded outline-none"
            ></input>
            <button
              className="py-2 px-3 ml-2 text-white bg-blue-400 rounded"
              type="submit"
            >
              Add
            </button>
          </form>

          <ul>
            <ListItems
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            />
          </ul>
        </header>
      </div>
    );
  }

  bindings() {
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
}

export default TaskList;
