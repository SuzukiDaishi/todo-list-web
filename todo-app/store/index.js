export const state = () => ({
    todoList: [
        {
            index: 0,
            title: 'トイレットペーパー',
            content: 'トイレのやつなくなってたので買ってくる(2まい)'
        },
        {
            index: 1,
            title: '醤油',
            content: '今日の夜はエリンギを焼きたい'
        },
        {
            index: 2,
            title: 'TODOリスト作成',
            content: 'これ作らねば...'
        },
    ]
})
export const mutations = {
    deleteTodo(state, index) {
        state.todoList = state.todoList
            .filter(i => i.index !== index)
            .map(i =>
                i.index > index ?
                {
                    index: i.index - 1,
                    title: i.title,
                    content: i.content
                } :
                i
            )
    },
    addTodo(state, {title, content}) {
        state.todoList.push({
            index: state.todoList.length,
            title: title,
            content: content 
        })
    }
}