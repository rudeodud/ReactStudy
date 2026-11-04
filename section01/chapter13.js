function main(value){
    value();
}

main(() => {
//    console.log("i am sub");

});

function repeat(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx);
    }    
}

function repeatDouble(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx * 2);
    }    
}

function repeatTriple(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx * 3);
    }    
}

repeat(5)
repeatDouble(5);
repeatTriple(5);