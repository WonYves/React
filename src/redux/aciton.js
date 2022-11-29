const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
  };

  export function add(num) {
    return {
        type: 'add', data: num
    }
}

export function del(num) {
    return {
        type: 'del', data: num
    }
} 