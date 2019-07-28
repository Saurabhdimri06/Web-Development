const state = [{
    title: "Radiohead",
    striked: false
}]

const render = (state) => {
    state.reduce((acc, todo) => {
        return acc +  `<li> ${todo.striked ? 'class = "striked"': " "} > ${todo.title}</li>`
    }, " ")
}