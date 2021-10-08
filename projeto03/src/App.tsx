import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const player1 = useCharacter('Daniel', 13, 5);
  const player2 = useCharacter('Gisele', 3, 5);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
        player2.moveLeft();
        break;
      case 'KeyW':
        player2.moveUp();
        break;
      case 'KeyD':
        player2.moveRight();
        break;
      case 'KeyS':
        player2.moveDown();
        break;
      case 'ArrowLeft':
        player1.moveLeft();
        break;
      case 'ArrowUp':
        player1.moveUp();
        break;
      case 'ArrowRight':
        player1.moveRight();
        break;
      case 'ArrowDown':
        player1.moveDown();
        break;
    }
  }
  return (
    <C.Container>
      <C.Map>
        <Character x={player1.x} y={player1.y} side={player1.side} name={player1.name} />
        <Character x={player2.x} y={player2.y} side={player2.side} name={player2.name} />
      </C.Map>
    </C.Container>
  );
}
export default App;