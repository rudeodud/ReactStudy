function main(value){
    console.log(1);
    console.log(2);
    value();
}

function sub(){
    console.log("i am sub");
}

main(sub); 