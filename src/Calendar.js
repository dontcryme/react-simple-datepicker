'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var PropTypes = require('prop-types');

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var DatePicker = (function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), 'constructor', this).call(this, props);

    this.state = {
      date: (0, _moment2['default'])(props.date),
      isCalendarOpen: false
    };
  }

  _createClass(DatePicker, [{
    key: 'componentDidMount ',
    value: function componentDidMount () {
      document.addEventListener('mousedown', this.onClickOutside.bind(this));
      document.addEventListener('touchstart', this.onClickOutside.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onClickOutside.bind(this));
      document.removeEventListener('touchstart', this.onClickOutside.bind(this));
    }
  }, {
    key: 'onClickOutside',
    value: function onClickOutside(e) {
      var calendar = _reactDom2['default'].findDOMNode(this.refs.calendar);
      var dateInput = _reactDom2['default'].findDOMNode(this.refs.dateInput);

      if (!calendar) return;

      if (!calendar.contains(e.target) && !dateInput.contains(e.target)) {
        this.setState({
          isCalendarOpen: false
        });
      }
    }
  }, {
    key: 'toggleCalendar',
    value: function toggleCalendar() {
      this.setState({
        isCalendarOpen: !this.state.isCalendarOpen
      });
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var _props = this.props;
      var minDate = _props.minDate;
      var maxDate = _props.maxDate;
      var calendarClassName = _props.calendarClassName;
      var dayClassName = _props.dayClassName;
      var dayActiveClassName = _props.dayActiveClassName;
      var dayDisabledClassName = _props.dayDisabledClassName;
      var dayFromOtherMonthClassName = _props.dayFromOtherMonthClassName;
      var monthClassName = _props.monthClassName;
      var prevMonthClassName = _props.prevMonthClassName;
      var nextMonthClassName = _props.nextMonthClassName;

      if (!this.state.isCalendarOpen) {
        return null;
      }

      return _react2['default'].createElement(_Calendar2['default'], { ref: 'calendar',
        date: this.state.date,
        minDate: minDate,
        maxDate: maxDate,
        selectDay: this.selectDay.bind(this),
        calendarClassName: calendarClassName,
        dayClassName: dayClassName,
        dayActiveClassName: dayActiveClassName,
        dayDisabledClassName: dayDisabledClassName,
        dayFromOtherMonthClassName: dayFromOtherMonthClassName,
        monthClassName: monthClassName,
        prevMonthClassName: prevMonthClassName,
        nextMonthClassName: nextMonthClassName });
    }
  }, {
    key: 'selectDay',
    value: function selectDay(date) {
      var _props2 = this.props;
      var clickOnDate = _props2.clickOnDate;
      var name = _props2.name;

      if (clickOnDate) {
        this.setState({
          isCalendarOpen: false
        });
        return clickOnDate(date, name);
      }

      this.setState({
        isCalendarOpen: false,
        date: date
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var datepickerClassName = _props3.datepickerClassName;
      var inputClassName = _props3.inputClassName;

      return _react2['default'].createElement(
        'div',
        { className: datepickerClassName },
        _react2['default'].createElement(_DateInput2['default'], { ref: 'dateInput',
          inputValue: this.state.date,
          inputOnClick: this.toggleCalendar.bind(this),
          inputClassName: inputClassName }),
        this.renderCalendar()
      );
    }
  }]);

  return DatePicker;
})(_react.Component);

exports['default'] = DatePicker;

DatePicker.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(_moment2['default']), PropTypes.instanceOf(Date)]),
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(_moment2['default']), PropTypes.instanceOf(Date)]),
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(_moment2['default']), PropTypes.instanceOf(Date)]),
  clickOnDate: PropTypes.func,
  name: PropTypes.string,
  datepickerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  calendarClassName: PropTypes.string,
  monthClassName: PropTypes.string,
  prevMonthClassName: PropTypes.string,
  nextMonthClassName: PropTypes.string,
  dayClassName: PropTypes.string,
  dayActiveClassName: PropTypes.string,
  dayDisabledClassName: PropTypes.string,
  dayFromOtherMonthClassName: PropTypes.string
};

DatePicker.defaultProps = {
  date: new Date(),
  datepickerClassName: 'datepicker'
};
module.exports = exports['default'];
