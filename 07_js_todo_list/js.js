

setTimeout(() => {
    let toDos = [];
    let currentInput = prompt("What would you like to do?");

    while (currentInput !== "quit") {
        if (currentInput === "new") {
            let newTodo = prompt("What would you like to add? ('cancel' to cancel adding)");
            if (newTodo !== "cancel") {
                toDos.push(newTodo);
            }
        }
        else if (currentInput === "list") {
            console.log("***************");
            console.log("YOUR TODOS ARE:");
            for ([idx, i] of toDos.entries()) {
                console.log(`${idx}: ${i}`);
            }
            console.log("***************");
        }
        else if (currentInput === "delete") {
            let newDelete = prompt(`Wich item (index) would you like to delete? (0 to ${toDos.length - 1}) ('cancel' to cancel)`);
            while (!Number.isInteger(parseInt(newDelete)) & newDelete !== "cancel") {
                newDelete = prompt(`Please enter a valid index! (0 to ${toDos.length - 1})`);
            }
            if (newDelete !== "cancel") {
                console.log(`Deleted: ${toDos.splice(parseInt(newDelete), 1)} `);

            }
        }
        else {
            currentInput = alert("I don't recognise this command")
        }
        currentInput = prompt("What would you like to do next?")
    }
}, 100)




