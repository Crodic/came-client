import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarAdmin({ value, onChange }) {
    return (
        <div>
            <Calendar onChange={onChange} value={value} locale="vi-VN" />
        </div>
    );
}

export default CalendarAdmin;
