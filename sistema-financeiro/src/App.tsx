import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categorys'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/tableItems'
import { InfoArea } from './components/infoArea/index'
import { InputArea } from './components/InputArea'

const App = () => {

  const [ list, setList ] = useState(items )
  const [ filteredList, setFilteredList ] = useState<Item[]>([])
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ income, setIncome ] = useState(0)
  const [ expense, setExpense ] = useState(0)

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [ list, currentMonth ])

  useEffect(()=>{
    let incomeCount = 0
    let expenseCount = 0
    for( let i in filteredList ){
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }
  const handleAddItem = (item: Item) => {
    setList([...list, item])
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro.</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
          />
        <InputArea onAddItem={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App