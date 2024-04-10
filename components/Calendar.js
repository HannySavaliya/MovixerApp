import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import DateComponent from "./Date";
import moment from "moment";

const Calendar = ({ selected, onSelectedDate }) => {
  const [dates, setDates] = useState([]);

  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 5; i++) {
      const date = moment().add(i, "days");
      myDates.push(date);
    }
    setDates(myDates);
  };
  console.log(selected);

  useEffect(() => {
    getDates();
  }, []);

  return (
    <View>
      <ScrollView horizontal>
        {dates.map((date, index) => (
          <DateComponent
            key={index}
            date={date}
            selected={selected}
            onSelectDate={onSelectedDate} 
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Calendar;
