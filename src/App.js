import "./App.css";
import Banner from "./UI/Banner";
import Controls from "./UI/Controls";
import Graph from "./UI/Graph";
import ItemComponent from "./Components/Item/ItemComponent";
import FormItem from "./Components/Item/FormItem/FormItem";
import Card from "./UI/Card";
import React, { useState } from "react";
import DropDown from "./UI/DropDown";

const INITIAL_LIST = [
  {
    id: "s1",
    title: "Sample 1",
    date: new Date(2021, 11, 24, 10, 33, 30, 0),
    price: 500,
  },
  {
    id: "s2",
    title: "Sample 2",
    date: new Date(2020, 8, 24, 10, 33, 30, 0),
    price: -250,
  },
];

const INITIAL_MONTHS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  const [items, updateItemList] = useState(INITIAL_LIST);
  const [hidden, setHideForm] = useState(false);
  const [year, setYear] = useState("all");

  function selectYearHandler(data) {
    setYear(data);
  }

  function makeValueArray(itemList) {
    let narr = [...INITIAL_MONTHS];

    for (let i in itemList) {
      narr.splice(
        itemList[i].date.getMonth(),
        1,
        parseInt(narr[itemList[i].date.getMonth()]) +
          parseInt(itemList[i].price)
      );
    }

    return narr;
  }

  //filtrar items por año
  //array => array
  function getItemsByYear(itemList, y) {
    let filteredList = itemList.filter(
      (elem) => elem.date.getFullYear() == y || y == "all"
    );
    return filteredList;
  }

  //transformar a porcentaje de a cuerdo al mayor elemento
  //array => array
  function toPercentArr(arr) {
    let narr = [];
    let max = Math.max(...arr);

    narr = arr.map(function (ele) {
      return (ele / max) * 100;
    });
    return narr;
  }

  function hideFormHandler() {
    let grab = hidden;
    if (!hidden) {
      setHideForm(true);
    } else {
      setHideForm(false);
    }
    return grab;
  }

  function deleteHandler(data) {
    updateItemList(function (prevItem) {
      let narr = [...prevItem];
      narr = prevItem.filter((elem) => elem.title != data);

      return narr;
    });
  }

  function saveExpenseDataHandler(data) {
    updateItemList(function (prevItem) {
      return [data, ...prevItem];
    });
  }

  function getYearsArray() {
    let narr = [];
    for (let i in items) {
      if (narr.indexOf(items[i].date.getFullYear()) == -1) {
        narr.push(items[i].date.getFullYear());
      }
    }
    narr.sort();
    return narr;
  }

  function getIncome() {
    let n = 0;
    for (let i in items) {
      if (items[i].price > 0) {
        n += parseInt(items[i].price);
      }
    }
    return n;
  }

  function getOutcome() {
    let n = 0;
    for (let i in items) {
      if (items[i].price < 0) {
        n += parseInt(items[i].price);
      }
    }
    return n;
  }

  function getTotal() {
    return getOutcome() + getIncome();
  }
  let fillChart = [];
  if (getItemsByYear(items, year).length == 0) {
    fillChart = INITIAL_MONTHS;
  } else {
    fillChart = toPercentArr(makeValueArray(getItemsByYear(items, year)));
  }
  const noItemsFound = fillChart == INITIAL_MONTHS && (
    <h2 className="noFound">No Items Found</h2>
  );
  return (
    <div className="app__wrapper">
      <Banner />

      <Graph
        fill={fillChart}
        income={getIncome}
        outcome={getOutcome}
        total={getTotal}
      />
      <Controls onHideForm={hideFormHandler}>
        <DropDown onSelectYear={selectYearHandler} yearsArr={getYearsArray} />
      </Controls>
      <div className="wrap__body">
        <Card hideThis={hidden}>
          <FormItem onSaveExpenseData={saveExpenseDataHandler} />
        </Card>
      </div>
      <div className="items__wrap">
        {noItemsFound}
        {items.map(function (x) {
          if (x.date.getFullYear() == year || year == "all") {
            return (
              <ItemComponent
                key={x.id}
                price={x.price}
                name={x.title}
                date={x.date}
                itemToDel={deleteHandler}
              />
            );
          } else return "";
        })}
      </div>
    </div>
  );
}

export default App;
