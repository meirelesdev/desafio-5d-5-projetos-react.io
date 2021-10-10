import { formatCurrentMonth } from '../../helpers/dateFilter'
import * as C from './styles'
import { ResumeItem } from '../resumeItem'

type Props = {
    currentMonth: string,
    income: number,
    expense: number,
    onMonthChange: (newMonth: string) => void
}
export const InfoArea = ({currentMonth, income, expense, onMonthChange }: Props) => {
    const handlePrevMonth = ()=>{
        const [year, month ] = currentMonth.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    const handleNextMonth = ()=>{
        const [year, month ] = currentMonth.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth()+1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receita" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem 
                        title="Balanço"
                        color={(income - expense) < 0 ? 'red': 'green'}
                        value={income - expense}/>
            </C.ResumeArea>
        </C.Container>
    )
}