const taskData = [
    {
        taskNotes: `Playwright says do task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: null
    },
    {
        taskNotes: `Playwright says do task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: null
    },
    {
        taskNotes: `Playwright says do task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: null
    },
    {
        taskNotes: `Playwright says do task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: null
    }
]

const editData = [
    {
        taskNotes: `Playwright updating task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: true
    },
    {
        taskNotes: `Playwright updating task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: true
    },
    {
        taskNotes: `Playwright updating task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: true
    },
    {
        taskNotes: `Playwright updating task ${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`, 
        addCase: true
    }
]

module.exports = {
    taskData,
    editData
};