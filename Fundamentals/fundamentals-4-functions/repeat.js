function repeated (string, times){
    function repeat(string,times){
        let result = ``;
        for (let i = 0; i<times;i++){
            result+=string;
        }
        return result;
    }
    let done = repeat(string, times);
    console.log(done);
}   

repeated("abc",5)