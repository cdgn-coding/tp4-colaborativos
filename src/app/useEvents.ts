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
        localStorage.setItem("events", JSON.stringify([...events, event]));
        setEvents([...events, event]);
    }

    return { events, addEvent }
}