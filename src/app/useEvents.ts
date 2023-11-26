import {useEffect, useState } from "react";

export default function useEvents() {
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        // load events from local storage
        const events = localStorage.getItem("events");
        if (events) {
            setEvents(JSON.parse(events));
        }
    }, [])

    const addEvent = (event: any) => {
        const eventWithId = { ...event, id: Date.now() };
        localStorage.setItem("events", JSON.stringify([...events, eventWithId]));
        setEvents([...events, event]);
    }

    const deleteEvent = (eventInfo: any) => {
        const newEvents = events.filter((event) => event.id !== eventInfo.id);
        localStorage.setItem("events", JSON.stringify(newEvents));
        setEvents(newEvents);
    }

    return { events, addEvent, deleteEvent }
}