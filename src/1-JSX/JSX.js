import Car from "../2-Props/Car"



const JSX = () => {

    const deneme = <Car/>

    const myElement = <h1>I love JSX</h1>

    const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>

    const myElement3 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    )

    const myElement4 = <input type="text"/>

    const myElement5 = <h1 className="myclass">Hello world</h1>

    const x = 12;
    const myElement6 = <h1>{ x<10 ? "Hello" : "Goodbye"}</h1>

    return(
        <div>
            {myElement}
            {myElement2}
            {myElement3}
            {myElement4}
            {myElement6}
            Bu benim JSX componentim
        </div>
    )
} 

export default JSX