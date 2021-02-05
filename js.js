const targetID = "3"

const arr = [
    {
        text:"test1",
        id: "1",
    },
    {
        text:"test2",
        id: "2",
    },
    {
        text:"test3",
        id: "3",
    }
]
const index = arr.findIndex(note => {
return (note.id === targetID)

}) 
arr.splice(index, 1)

console.log(arr)