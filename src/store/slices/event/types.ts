import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
    events: IEvent[],
    guests: IUser[]
}