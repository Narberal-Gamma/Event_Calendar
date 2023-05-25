import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventState } from "./types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

const initialState: EventState = {
    events: [],
    guests: []
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setGuests: (state, action: PayloadAction<IUser[]>) => {
            state.guests = action.payload
        },
        setEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
        }
    }
})

export const { setEvents, setGuests } = eventSlice.actions
export default eventSlice.reducer