import React, { useState } from "react";
import "./Home.scss";
import NavBar from "../../components/navBar/NavBar";
import LeftBar from "../../components/leftBar/leftBar";
import Welcome from "../../DSA/welcome/welcome";
import LinkedList from "../../DSA/DataStracture/Linear/linked_list/linked_list";
import BST from "../../DSA/DataStracture/non_Linear/binary_tree_search/BST";
import HashTable from "../../DSA/DataStracture/non_Linear/hash_table/hash_table";
//import Graph from "../../DSA/DataStracture/non_Linear/graph/graph";
import Graph from "../../DSA/DataStracture/non_Linear/graph/graph.js";
import LinearSearch from "../../DSA/Algorithm/search/linear_search/linear_search";
import BinarySearch from "../../DSA/Algorithm/search/binary_search/binary_search";
import BubbleSort from "../../DSA/Algorithm/sort/bubble_sort/bubble_sort";
import InsertionSort from "../../DSA/Algorithm/sort/insertion_sort/insertion_sort";
import SelectionSort from "../../DSA/Algorithm/sort/selection_sort/selection_sort";
import MergeSort from "../../DSA/Algorithm/sort/merge_sort/merge_sort";
import QuickSort from "../../DSA/Algorithm/sort/quick_sort/quick_sort";

import StackList from "../../DSA/DataStracture/Linear/stack/stackList";
import QueueList from "../../DSA/DataStracture/Linear/queue/queueList";

function Home() {
  const [selectedItem, setSelectedItem] = useState("");
  const [icon, setIcon] = useState("times");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [sidebarWidth, setSidebarWidth] = useState(240);

  // Initialize as false by default

  const toggleSidebar = () => {
    setIcon((prevIcon) => (prevIcon === "bars" ? "times" : "bars"));
    setSidebarOpen((prevState) => !prevState);
    setSidebarWidth((prevWidth) => (prevWidth === 0 ? 240 : 0));
  };

  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "stack":
        return <StackList />;
      case "queue":
        return <QueueList />;
      case "linked-list":
        return <LinkedList />;

      case "bst":
        return <BST />;
      case "hash_table":
        return <HashTable />;
      case "graph":
        return <Graph />;
      case "linear_search":
        return <LinearSearch />;
      case "binary_search":
        return <BinarySearch />;
      case "bubble_sort":
        return <BubbleSort />;
      case "insertion_sort":
        return <InsertionSort />;
      case "selection_sort":
        return <SelectionSort />;
      case "merge_sort":
        return <MergeSort />;
      case "quick_sort":
        return <QuickSort />;

      default:
        return <Welcome />;
    }
  };

  return (
    <div className="main-home">
      <div className="NavBar">
        <NavBar icon={icon} toggleSidebar={toggleSidebar} />
      </div>
      <div className="main-body">
        <div className={`left-bar ${sidebarOpen ? "open" : "closed"}`}>
          <LeftBar
            setSelectedItem={setSelectedItem}
            sidebarWidth={sidebarWidth}
          />
        </div>
        <div
          className="main-body-part"
          style={{
            marginLeft: `${sidebarWidth}px`,
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="rendered">{renderSelectedComponent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
