import World from './World'
export default function Hellow(){
    return (
        <div>
            <h1 style={{
                color : '#f00',
                borderRight : '12px solid #000',
                marginBottom : '50px',
                opacity : 0.5
            }}>Hellow</h1>
            <World />
            <World />
        </div>
    );
}