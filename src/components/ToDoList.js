import ToDoItem from "./ToDoItem";

let list3 = [
    {
        id: 0,
        completed: false,
        task: 'Iran'
    },
    {
        id: 1,
        completed: true,
        task: 'Turkey'
    },
    {
        id: 2,
        completed: true,
        task: 'Russia'
    },
    {
        id: 3,
        completed: false,
        task: 'Italy'
    },
    {
        id: 4,
        completed: false,
        task: 'Sweden'
    },
    {
        id: 5,
        completed: false,
        task: 'Marokko'
    },
    {
        id: 6,
        completed: true,
        task: 'Tunisia'
    },
    {
        id: 7,
        completed: true,
        task: 'France'
    },
    {
        id: 8,
        completed: true,
        task: 'Tajikistan'
    },
    {
        id: 9,
        completed: false,
        task: 'Israel'
    },
    {
        id: 10,
        completed: true,
        task: 'England'
    },
    {
        id: 11,
        completed: false,
        task: 'Tansania'
    },
    {
        id: 12,
        completed: false,
        task: 'Egypt'
    },
    {
        id: 13,
        completed: false,
        task: 'Vietnam'
    },
];

const ToDoList = () => {

    return (<div>
        <h1>PLACES TO SEE BEFORE I DIE</h1>
        <div>{list3.map((elt) =>
            <ToDoItem
                key={elt.id}
                task={elt.task}
                completed={elt.completed} />)}
        </div>
    </div>);
}

export default ToDoList;