# React Simple Date Picker

> Simple Date Picker component for React


## Install

`npm install --save react-simple-datepicker`


## Usage

Simple example on how to use Datepicker. Just import DatePicker module and styles for it.

```js
//Original Version
import React from 'react';
import DatePicker from 'react-simple-datepicker';
import 'react-simple-datepicker/dist/index.css';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      date: new Date()
    }
  }

  render () {
    return <DatePicker date={this.state.date} />;
  }
}

//Next.js version(with next-css)
import DatePicker from 'react-simple-datepicker';
import picker from '../components/index.css';  //react-simple-datepicker/dist/index.css

class App extends React.Component {

  render () {
    return (
       <DatePicker calendarClassName={picker.calendar}
                            datepickerClassName={picker.datepicker}
                            inputClassName={picker.datepicker__input}
                            prevMonthClassName={picker.calendar__prevMonth}
                            nextMonthClassName={picker.calendar__nextMonth}
                            dayClassName={picker.calendar__day}
                            dayDisabledClassName={picker.calendar__disabledDay}
                            dayActiveClassName={picker.calendar__activeDay}
                            dayFromOtherMonthClassName={picker.calendar__dayFromOtherMonth}/>
    )
  }
}

```


## Props

* `date`: (*Date*) — specifies the start date
* `minDate`: (*Date*) — specifies the minimal date
* `maxDate`: (*Date*) — specifies the maximal date
* `clickOnDate`: (*Function*) — called when the user selects a date


## ClassName Props

To specify datepicker styles you can use these props:

* `datepickerClassName`
* `inputClassName`
* `calendarClassName`
* `monthClassName`
* `prevMonthClassName`
* `nextMonthClassName`
* `dayClassName`
* `dayActiveClassName`
* `dayDisabledClassName`
* `dayFromOtherMonthClassName`


## License

MIT
