import React from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list' // a plugin!

const PageNotFound = () => {
    return (
        <>
            <div>PageNotFound</div>
            <FullCalendar
                plugins={[dayGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                events={[
                    {
                        title: 'Meeting',
                        start: '2023-05-12T14:30:00',
                        end: '2023-05-15T14:30:00',
                        extendedProps: {
                            status: 'done'
                        }
                    },
                    {
                        title: 'Birthday Party',
                        start: '2023-05-13T07:00:00',
                        backgroundColor: 'green',
                        borderColor: 'green'
                    }
                ]}
                headerToolbar={{
                    start: 'prev,next today',
                    center: 'title',
                    end: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                }}
                buttonText={{
                    today: 'Today',
                    month: 'Month',
                    week: 'Week',
                    day: 'Day',
                    list: 'Events'
                }}
                eventDisplay='block'
            />
        </>
    )
}

export default PageNotFound