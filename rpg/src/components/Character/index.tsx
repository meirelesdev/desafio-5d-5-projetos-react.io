import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';
import { convertToObject } from 'typescript';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
    changeName: (name: string)=>void
}
export const Character = ({x, y, side, name, changeName}: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }
    const handleName = ()=>{
        const newName = prompt("Digite um novo nome?")
        if(!newName) {
            alert("Nome invalido.")
            return
        }
        changeName(newName)
    }
    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side] ?? 0}
        >
            <C.NameBox title="Clique para trocar o nome." onClick={handleName}>{name}</C.NameBox>
        </C.Container>
    );
}