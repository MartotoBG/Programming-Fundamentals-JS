function chat(array) {
    let result = [];
    let arrayAction = array.shift().split(` `);
    let arrayCommand = arrayAction.shift();
    while (arrayCommand != "end") {
        switch (arrayCommand) {
            case "Chat": result.push(arrayAction[0]); break;
            
            case "Delete": for (let i = 0; i < result.length; i++) {
                if (result[i] == arrayAction[0]) {
                    result.splice(i, 1);
                    break;
                }
            };
            
            break;
            case "Edit": for (let i = 0; i < result.length; i++) {
                if (result[i] == arrayAction[0]) {
                    result.splice(i, 1, arrayAction[1]);
                    break;
                }
            };
             break;

            case "Pin": for (let i = 0; i < result.length; i++) {
                if (result[i] == arrayAction[0]) {
                    let pinned = result[i];
                    result.splice(i, 1);
                    result.push(pinned);
                    break;
                }
            };
             break;

            case "Spam" : for (let i = 0 ; i<arrayAction.length; i++){
                result.push(arrayAction[i]);
            };
             break;
    }
    arrayAction = array.shift().split(` `);
    arrayCommand = arrayAction.shift();
    }

    for (let i = 0 ; i< result.length; i++){
        console.log(result[i]);
    }
}

chat (["Chat Hello","Delete Hello","Chat Hello","Spam hello s f o","Pin Hello","Edit Hello h3ll0","end"])