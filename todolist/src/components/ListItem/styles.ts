import styled from "styled-components";
type ContainerProps = {
    done: boolean
}
export const Container = styled.div(({done}: ContainerProps)=> (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label {
        color: #CCC;
        flex:1;
        cursor: pointer;
        text-decoration: ${done ? 'line-through': 'initial'};
    }
    input {
        cursor: pointer;
        width: 35px:
        height: 35px;
        margin-right: 5px
    }
    button {
        cursor: pointer;
    }
`
));