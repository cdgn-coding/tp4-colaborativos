import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction" // needed for dayClick
import esLocale from '@fullcalendar/core/locales/es';

type Event = {
    title: string,
    start: string,
    duration: string
}

export default function Calendar({ onClickDate, events }: { onClickDate: (info: DateClickArg) => void, events: Event[]}) {
    return (
        <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView={'timeGridDay'}
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'timeGridDay,timeGridWeek' // user can switch between the two
            }}
            allDaySlot={false}
            locale={esLocale}
            events={events}
            dateClick={onClickDate}
        />
    )
}