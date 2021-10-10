import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const player1 = useCharacter('Player 1', 13, 5);
  const player2 = useCharacter('Player 2', 3, 5);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
        if(e.altKey){
          player2.moveLeft(2);
        } else {
          player2.moveLeft();
        }
        break;
      case 'KeyW':
        if(e.altKey){
          player2.moveUp(2);
        } else {
          player2.moveUp();
        }
        break;
      case 'KeyD':
        if(e.altKey){
          player2.moveRight(2);
        } else {
          player2.moveRight();
        }
        break;
      case 'KeyS':
        if(e.altKey){
          player2.moveDown(2);
        } else {
          player2.moveDown();
        }
        break;
      case 'ArrowLeft':
        if(e.ctrlKey){
          player1.moveLeft(2)
        } else {
          player1.moveLeft();
        }
        break;
      case 'ArrowUp':
        if(e.ctrlKey){
          player1.moveUp(2);
        } else {
          player1.moveUp();
        }
        break;
      case 'ArrowRight':
        if(e.ctrlKey){
          player1.moveRight(2);
        } else {
          player1.moveRight();
        }
        break;
      case 'ArrowDown':
        if(e.ctrlKey){
          player1.moveDown(2);
        } else {
          player1.moveDown();
        }
        break;
    }
  }
  return (
    <C.Container>
      <C.Map>
        <Character x={player1.x} y={player1.y} side={player1.side} changeName={player1.setName} name={player1.name}  />
        <Character x={player2.x} y={player2.y} side={player2.side} changeName={player2.setName} name={player2.name} />
      </C.Map>
    </C.Container>
  );
}
export default App;