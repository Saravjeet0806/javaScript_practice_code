//function scope example
function one(){
    const username = "saravjeet"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

 one()

 //read about mini hoisting in function
