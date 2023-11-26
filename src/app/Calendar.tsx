import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction" // needed for dayClick
import esLocale from '@fullcalendar/core/locales/es';
import {TrashIcon} from '@radix-ui/react-icons';
import {Button} from "@/components/ui/button"


type Event = {
    title: string,
    start: string,
    duration: string
}

export default function Calendar({onClickDate, events, onDeleteEvent}: {
    onClickDate: (info: DateClickArg) => void,
    events: Event[],
    onDeleteEvent: (eventInfo: any) => void
}) {
    function EventContent(eventInfo: any) {
        return (
            <div className={"flex flex-row content-center items-center h-full px-4 space-x-4"}>
                <span className="text-md">{eventInfo.event.title}</span>
                <Button variant="secondary" className="px-2 py-0" onClick={() => onDeleteEvent(eventInfo)}><TrashIcon
                    className="w-4 h-4"/></Button>
            </div>
        )
    }

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
            eventContent={EventContent}
        />
    )
}