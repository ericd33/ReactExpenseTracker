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
    title: "Mambru",
    date: new Date(2021, 11, 24, 10, 33, 30, 0),
    price: 100,
  },
  {
    id: "s2",
    title: "Food",
    date: new Date(2020, 11, 24, 10, 33, 30, 0),
    price: 1000,
  },
  {
    id: "s3",
    title: "pipi",
    date: new Date(2023, 6, 24, 10, 33, 30, 0),
    price: 500,
  },
  {
    id: "s4",
    title: "Value",
    date: new Date(2022, 8, 24, 10, 33, 30, 0),
    price: 100,
  },
  {
    id: "s5",
    title: "value neg",
    date: new Date(2022, 8, 24, 10, 33, 30, 0),
    price: -50,
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

  //filtrar items por anio
  //array => array
  function getItemsByYear(itemList, y) {
    let filteredList = itemList.filter(
      (elem) => elem.date.getFullYear() == y || y == "all"
    );
    return filteredList;
  }

  //transformar a porcentaje de a cuerdo a el mayor elemento
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

  function saveExpenseDataHandler(data) {
    updateItemList(function (prevItem) {
      return [data, ...prevItem];
    });
  }
  let fillChart = toPercentArr(makeValueArray(getItemsByYear(items, year)));
  return (
    <div className="app__wrapper">
      <Banner />
      <DropDown onSelectYear={selectYearHandler} />
      <Graph fill={fillChart} />
      <Controls onHideForm={hideFormHandler}></Controls>
      <div className="wrap__body">
        <Card hideThis={hidden}>
          <FormItem onSaveExpenseData={saveExpenseDataHandler} />
        </Card>
      </div>
      <div className="items__wrap">
        {items.map(function (x) {
          if (x.date.getFullYear() == year || year == "all") {
            return (
              <ItemComponent
                key={x.id}
                price={x.price}
                name={x.title}
                date={x.date}
              />
            );
          } else return "";
        })}
      </div>
    </div>
  );
}

export default App;

// function calculateChartArr(data) {
//   let nchart = [...INITIAL_MONTHS];
//   let filteredItems = items.filter(
//     (elem) => elem.date.getFullYear() == data || data == "all"
//   );
//   for (let i in filteredItems) {
//     nchart[filteredItems[i].date.getMonth()].total += filteredItems[i].price;
//   }
//   return nchart;
// }
