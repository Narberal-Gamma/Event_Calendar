import { authActionCreators } from "./auth/action-creators";
import { eventActionCreators } from "./event/action-creators";

export const allActionCreators = {
    ...authActionCreators,
    ...eventActionCreators
}