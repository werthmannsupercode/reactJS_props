const ToDoItem = (props) => {
    return (<div>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p>{props.task}</p>

    </div>);
}

export default ToDoItem;