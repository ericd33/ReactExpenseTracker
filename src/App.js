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
    price: 100,
  },
  {
    id: "s3",
    title: "pipi",
    date: new Date(2023, 11, 24, 10, 33, 30, 0),
    price: 100,
  },
  {
    id: "s4",
    title: "Jesica",
    date: new Date(2022, 11, 24, 10, 33, 30, 0),
    price: 100,
  },
];

const INITIAL_MONTHS = [
  {
      month: 'Jan',
      val: '0%',
      total: 0,
  },
  {
      month: 'Feb',
      val: '0%',
      total: 0,
  },
  {
      month: 'Mar',
      val: '0%',
      total: 0,
  },
  {
      month: 'Apr',
      val: '0%',
      total: 0,
  },
  {
      month: 'May',
      val: '0%',
      total: 0,
  },
  {
      month: 'Jun',
      val: '0%',
      total: 0,
  },
  {
      month: 'Jul',
      val: '0%',
      total: 0,
  },
  {
      month: 'Aug',
      val: '0%',
      total: 0,
  },
  {
      month: 'Sep',
      val: '0%',
      total: 0,
  },
  {
      month: 'Oct',
      val: '0%',
      total: 0,
  },
  {
      month: 'Nov',
      val: '0%',
      total: 0,
  },
  {
      month: 'Dic',
      val: '0%',
      total: 0,
  },
]

function App() {
  const [items, updateItemList] = useState(INITIAL_LIST);
  const [hidden, setHideForm] = useState(false);
  const [year,setYear] = useState("all");
  const [chart,setChartArr] = useState(INITIAL_MONTHS);
  
  function calculateChartArr(data) {
    let nchart = [...INITIAL_MONTHS];
    let filteredItems = items.filter(elem => elem.date.getFullYear() == data || data == "all")
    for(let i in filteredItems) {
      nchart[filteredItems[i].date.getMonth()].total += filteredItems[i].price;
    }
    return nchart;
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



  function selectYearHandler(data) {
    console.log("got "+data);
    setYear(data);
    setChartArr(calculateChartArr(data));
  }

  return (
    <div className="app__wrapper">
      <Banner />
      <DropDown onSelectYear={selectYearHandler}/>
          <Graph chartData={chart}/>
          <Controls onHideForm={hideFormHandler}></Controls>
          <div className="wrap__body">
          <Card hideThis={hidden}>
            <FormItem onSaveExpenseData={saveExpenseDataHandler} />
          </Card>
      </div>
          <div className="items__wrap">
            {items.map(function(x) {
                if (x.date.getFullYear() == year || year == "all") {
                  return <ItemComponent key={x.id} price={x.price} name={x.title} date={x.date}/>
                }else return "";
              }
            )}
          </div>
      
    </div>
  );
}

export default App;
