import React from 'react';
import DatePicker from 'react-datepicker';
import './DatePicker.scss'
import ru from 'date-fns/locale/ru';

import "react-datepicker/dist/react-datepicker.css";

interface IApp {
    isDisabled: boolean
    isInvalid: boolean
    startDate: Date
    onNewDate(date : Date) : void
}

const DatePickerComponent: React.FunctionComponent<IApp> = (props) => {

    const todayDate = () => {
        let date: Date = new Date(); 
        let dateArr = [date.getUTCDate(), "", date.getUTCFullYear()];

        switch (date.getUTCMonth())
        {
            case 0: dateArr[1] = "01"; break;
            case 1: dateArr[1] = "02"; break;
            case 2: dateArr[1] = "03"; break;
            case 3: dateArr[1] = "04"; break;
            case 4: dateArr[1] = "05"; break;
            case 5: dateArr[1] = "06"; break;
            case 6: dateArr[1] = "07"; break;
            case 7: dateArr[1] = "08"; break;
            case 8: dateArr[1] = "09"; break;
            case 9: dateArr[1] = "10"; break;
            case 10: dateArr[1] = "11"; break;
            case 11: dateArr[1] = "12"; break;
        }
        
        return dateArr.join(".")
    }
    return (
        <div className="root__date-picker">
            <DatePicker 
                todayButton= { "Сегодня " + todayDate() }
                selected={ props.startDate } 
                className = { props.isInvalid?"input--is-invalid":""}
                disabled={props.isDisabled}
                dateFormat="dd.MM.yyyy"
                onChange={ (date: Date) => props.onNewDate(date)} 
                locale={ru}
            />
            <p className="root__input-icon"></p>
        </div>
    );
}
  
export default DatePickerComponent;