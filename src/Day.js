'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var PropTypes = require('prop-types');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var Day = function Day(_ref) {
  var day = _ref.day;
  var active = _ref.active;
  var disabled = _ref.disabled;
  var dayNextMonth = _ref.dayNextMonth;
  var dayPrevMonth = _ref.dayPrevMonth;
  var selectDay = _ref.selectDay;
  var dayClassName = _ref.dayClassName;
  var dayActiveClassName = _ref.dayActiveClassName;
  var dayDisabledClassName = _ref.dayDisabledClassName;
  var dayFromOtherMonthClassName = _ref.dayFromOtherMonthClassName;

  var handleOnClick = function handleOnClick(e) {
    if (disabled) return;
    selectDay(e);
  };

  var classes = [dayClassName];

  if (day.isSame(active, 'day')) {
    classes.push(dayActiveClassName);
  }

  if (disabled) {
    classes.push(dayDisabledClassName);
  }

  if (dayPrevMonth || dayNextMonth) {
    classes.push(dayFromOtherMonthClassName);
  }

  return _react2['default'].createElement(
    'td',
    { className: classes.join(' '), onClick: handleOnClick },
    day.date()
  );
};

Day.propTypes = {
  disabled: PropTypes.bool,
  dayNextMonth: PropTypes.bool,
  dayPrevMonth: PropTypes.bool,
  selectDay: PropTypes.func,
  day: PropTypes.instanceOf(_moment2['default']),
  active: PropTypes.instanceOf(_moment2['default']),
  dayClassName: PropTypes.string,
  dayActiveClassName: PropTypes.string,
  dayDisabledClassName: PropTypes.string,
  dayFromOtherMonthClassName: PropTypes.string
};

Day.defaultProps = {
  dayClassName: 'calendar__day',
  dayActiveClassName: 'calendar__activeDay',
  dayDisabledClassName: 'calendar__disabledDay',
  dayFromOtherMonthClassName: 'calendar__dayFromOtherMonth'
};

exports['default'] = Day;
module.exports = exports['default'];
