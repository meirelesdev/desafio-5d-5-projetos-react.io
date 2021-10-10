import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let [ year, month ] = date.split('-')
    return list.filter(item => {
        return (item.date.getFullYear() === parseInt(year)) && ((item.date.getMonth() + 1) === parseInt(month))
    })
}
export const formatDate = (date: Date): string =>{
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}
export const formatCurrentMonth = (currentMonth: string): string => {
    const [ year, month ] = currentMonth.split('-')
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month)-1]} de ${year}`
}
const addZeroToDate = (n: Number): string => n < 10 ? `0${n}`: `${n}`