import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = (propName: string, x: number, y: number) => {
    const [name, setName] = useState(propName);
    const [pos, setPos] = useState({ x, y });
    const [side, setSide] = useState<CharacterSides>('down');
    const moveLeft = (x = 1) => {
        setPos(pos => ({
            x: canMove(pos.x - x, pos.y) ? pos.x - x : pos.x,
            y: pos.y
        }));
        setSide('left');
    }
    const moveRight = (x = 1) => {
        setPos(pos => ({
            x: canMove(pos.x + x, pos.y) ? pos.x + x : pos.x,
            y: pos.y
        }));
        setSide('right');
    }
    const moveDown = (y = 1) => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + y) ? pos.y + y : pos.y
        }));
        setSide('down');
    }
    const moveUp = (y = 1) => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - y) ? pos.y - y : pos.y
        }));
        setSide('up');
    }
    const canMove = (x: number, y: number) => {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) return (mapSpots[y][x] === 1);
    }
    return {
        name,
        x: pos.x,
        y: pos.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp,
        setName
    };
}