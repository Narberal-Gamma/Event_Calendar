import { setEvents, setGuests } from ".";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export const eventActionCreators = {
    setEvent: (payload: IEvent[]) => setEvents(payload),
    setGuests: (payload: IUser[]) => setGuests(payload), 
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const reponse = await UserService.getUsers()
            dispatch(setGuests(reponse.data))
        } catch (e){
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e){
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currectUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(setEvents(currectUserEvents))
        } catch (e){
            console.log(e)
        }
    }
}