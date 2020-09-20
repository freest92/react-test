import React, {useState}  from 'react';
import DatePickerComponent from "./components/DatePickerComponent"

const App: React.FunctionComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  function onNewDate(date: Date) : void {
    setStartDate(date)
  }

  return (
      <DatePickerComponent 
        isDisabled={false} 
        isInvalid={false} 
        startDate={startDate} 
        onNewDate={onNewDate}>
      </DatePickerComponent>
  );
}

export default App;
