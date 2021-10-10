import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem/Index'
import { AddArea } from './components/AddArea'

const App = () => {
  const [ list, setList ] = useState<Item[]>([
    {id: 1, name: 'Compara o pao na padaria',done: false},
    {id: 2, name: 'Compara um bolo na padaria',done: false}
  ])
  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
    console.log(list)
  }
  const handleTaskAsDone = (id: number,isDone: boolean) => {
      const newList = list.map(item=>{
        if(item.id === id ) {
          item.done = isDone
        } 
      return item
    })
    setList(newList)
  }
  return (
    <C.Container>
      <C.Content>
        <C.Title>Lista de Tarefas</C.Title>
        <AddArea onEnter={handleAddTask}></AddArea>
        {list.map((item, index) => (
            <ListItem 
                key={index}
                markAsDone={handleTaskAsDone}
                item={item}
                />
        ))}
      </C.Content>
    </C.Container>
  );
}
export default App;