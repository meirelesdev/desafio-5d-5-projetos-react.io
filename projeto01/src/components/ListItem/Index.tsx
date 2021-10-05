import { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
    item: Item,
    markAsDone: (id:number, isDone:boolean) => void
}

export const ListItem = ({ item, markAsDone }: Props) => {
    const [ isChecked, setIsChecked ] = useState(item.done)

    const handleDone = (id: Number, isDone: boolean) => {
        setIsChecked(!isDone)
        markAsDone(item.id, !isDone)
    }
    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={() => handleDone(item.id, !isChecked )}
                />
            <label
                onClick={() => handleDone(item.id, isChecked )}>{item.name}</label>
        </C.Container>
    )
}