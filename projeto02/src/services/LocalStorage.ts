import { Category } from "../types/Category"
import { Item } from "../types/Item"

const getLocalStorage = (key: string): [] => {
    const data = localStorage.getItem(key)
    if(!data ) return []
    return JSON.parse(data)
}
const setLocalStorage = (key: string, values: string): void => {
    localStorage.setItem(key, values)
}
export const getAllItems = ():Item[] | [] => {
    const itemData = getLocalStorage('items')
    if(itemData.length == 0) return itemData
    return itemData.map((data:Item):Item=>{
            return {
                date: new Date(data.date),
                category: data.category,
                title: data.title,
                value: data.value
            }
        })
}
export const saveItem = (item: Item ):Item[] => {
    const items = getAllItems()
    if(items.length === 0) return items
    const listaItems = items.map((item:Item): Item => {
        return {
            date: item.date,
            category: item.category, 
            title: item.title,
            value: item.value
        }
    })
    listaItems.push(item)
    setLocalStorage('items', JSON.stringify(listaItems))
    return listaItems
}
export const getAllCategories = ():Category[] | [] => {
    const categoriesData = getLocalStorage('categories')
    if(categoriesData.length == 0) return categoriesData
    return categoriesData.map((data:Category):Category=>{
            return data
        })
}
// export const saveCategory = (category: Category) => {
//     const categoriesData = getAllCategories()
//     categoriesData.push(category)
//     setLocalStorage('categories', JSON.stringify(categoriesData))
//     return categoriesData
// }