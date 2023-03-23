const initialState = {
    todos: [
        {
            id: 1,
            title: 'do something'
        },
        {
            id: 2,
            title: 'do homework'
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type){
        case "ADD": {
            return{
                ...state,
                todos: [...state.todos,{title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }]
            }
        }
        case "DELETE": {
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id !== action.id
                })
            }
        }
        case "IMPORTANT": {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return{
                            ...item, isImportant: !item.isImportant
                        }
                    }
                    return item
                })
            }
        }
        case "DONE": {
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return{
                            ...item, isDone: !item.isDone
                        }
                    }
                    return item
                })
            }
        }
        case "DELETEALL": {
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.title === action.title
                })
            }
        }
        default: return state
    }
}

export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({type: "ADD", title})
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        return dispatch({type: "DELETE", id})
    }
}

export const importantTodo = (id) => {
    return (dispatch) => {
        return dispatch({type: "IMPORTANT", id})
    }
}

export const doneTodo = (id) => {
    return (dispatch) => {
        return dispatch({type: "DONE", id})
    }
}

export const deleteAll = (title) => {
    return (dispatch) => {
        return dispatch({type: "DELETEALL", title})
    }
}