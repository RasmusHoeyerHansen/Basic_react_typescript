import React, {useRef} from 'react';

interface NewToDoProps {
    onAddToDo: (todotext:string ) => void;
};

const NewToDo : React.FC<NewToDoProps> = (props:NewToDoProps) => {
    const refText = useRef<HTMLInputElement>(null);
    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        const enteredText = refText.current!.value;
        props.onAddToDo(enteredText);
    };



    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo-next">TODO text</label>
                <input type="text" id="todo-next" ref={refText} />
            </div>
            <button type="submit"> ADD TO DO</button>
        </form>
    )
}

export default NewToDo;


