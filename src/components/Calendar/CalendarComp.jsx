import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import { CalendarFrame, CalendarResetButton } from './CalendarComp-styled';
import 'react-calendar/dist/Calendar.css';

function CalendarComp({ selectedDate, setSelectedDate }) {
  return (
    <CalendarFrame
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <Calendar
        value={selectedDate ? new Date(selectedDate) : new Date()}
        onChange={(date) => setSelectedDate(date)}
      />
      <CalendarResetButton
        onClick={() => setSelectedDate(null)}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '1000px',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        Clear date selection
      </CalendarResetButton>
    </CalendarFrame>
  );
}

CalendarComp.propTypes = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func.isRequired,
};

export default CalendarComp;
