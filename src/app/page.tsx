'use client';

import {DateClickArg} from '@fullcalendar/interaction';
import Image from 'next/image'
import React from 'react'
import Calendar from './Calendar';
import useEvents from './useEvents';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import EventForm, {dataType} from './EventForm';
import {toast} from "@/components/ui/use-toast"

export default function Home() {
    const {events, addEvent} = useEvents();
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    const onClickDate = function (info: DateClickArg) {
        setSelectedDate(info.date)
        setOpen(true)
    }

    const onSubmit = (data: dataType) => {
        setOpen(false);
        addEvent({
            title: data.eventName,
            date: selectedDate,
            duration: "01:00"
        })
        toast({
            title: "Evento creado correctamente",
        })
    }

    return (
        <main>
            <h1 className="text-3xl font-bold text-slate-900 my-10">Calendario de eventos</h1>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Crear evento</DialogTitle>
                        <DialogDescription>
                            <EventForm onSubmit={onSubmit}/>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Calendar
                onClickDate={onClickDate}
                events={events}
            />
        </main>
    )
}