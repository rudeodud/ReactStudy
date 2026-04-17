export default function Hellow(){
    function showName(){
        console.log("Mike");
    }
    function showAge(age){
        console.log(age);
    }
    function showText(txt){
        console.log(txt);
    }
    return (
        <div>
            <h1>Hellow</h1>
            <button onClick={showName}>show name</button>
            <button onClick={()=>{
                    showAge(10)
                }
            }>show age</button>
            <input type="text" onChange={(e)=>{
                const txt = e.target.value;
                showText(txt);
            }
            }/>
        </div>
    );}