import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

export const rules = {
    required: (message: string = 'Обязательное поле') => ({
        required: true,     
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Dayjs) {
            // Alternate option --- в таком случае не нужно подключать и писать` dayjs.extend(isSameOrAfter)
            // if (value.isSame(dayjs()) || value.isAfter(dayjs())){
            if (value.isSameOrAfter(dayjs())){
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
} 