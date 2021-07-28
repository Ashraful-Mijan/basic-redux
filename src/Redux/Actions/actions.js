export const increament = () => {
    return {
        type: 'INCREAMENT'
    }
}
export const decreament = () => {
    return {
        type: 'DECREAMENT'
    }
}




//todos actions

export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload
    }
}
export const compleetTodo = (payload) => {
    return {
        type: 'REMOVE_TODO',
        payload
    }
}