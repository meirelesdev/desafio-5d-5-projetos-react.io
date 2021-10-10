import { Item } from "../types/Item";

export const items: Item[] = [
    { date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 9, 12), category: 'food', title: 'Mercado', value: 40.90 },
    { date: new Date(2021, 9, 6), category: 'rent', title: 'Luz', value: 150.40 },
    { date: new Date(2021, 7, 5), category: 'rent', title: 'Alugue', value: 1800 },
    { date: new Date(2021, 7, 5), category: 'salary', title: 'Salario do Mês', value: 3000 },
    { date: new Date(2021, 9, 12), category: 'salary', title: 'Salario do Mês', value: 3000 },
]
