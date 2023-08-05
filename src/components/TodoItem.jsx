import './TodoItem.css'
import MaterialIcon from 'material-icons-react'
// eslint-disable-next-line react/prop-types
export default function TodoItem({ title, isCompleted, onDelete, onComplete }) {
    // eslint-disable-next-line no-unused-vars
    function onDeleteClick(_event) {
        console.log(title)
        onDelete(title);
    }

    // eslint-disable-next-line no-unused-vars
    function onCompleteClick(_event) {
        onComplete(title);
    }
    return (
        <div className='todo-item'>
            <div className='todo-title'>{title}</div>
            <div className='icons-group'>
                {!isCompleted && <div className='todo-delete' onClick={onCompleteClick}>
                    <MaterialIcon icon='task_alt' color='red' />
                </div>}
                <div className='todo-delete' onClick={onDeleteClick}>
                    <MaterialIcon icon='delete' color='red' />
                </div>
            </div>
        </div>
    )
}