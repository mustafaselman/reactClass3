import React from 'react'
import Car from './Car'

const Garage = () => {

    // const cars = ["Ford","BMW","Audi"]

    const cars2 = [
        { id: 1, brand: "Ford" },
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" }
    ]

    return (
        <div>
            <h2>Garajımdaki arabalar...</h2>
            {/* <ul>
            {
                cars.map((car,value) => <Car brand={car} value={value}/>)
            }
        </ul> */}
            {/* <ul>
            {
                cars.map((car,value) => <Car key={value} brand={car} value={value}/>)
            }
        </ul> */}
            {/* <ul>
            {
                cars2.map((car,value) => <Car key={car.id} brand={car.brand} value={value}/>)
            }
        </ul> */}
            {/* <ul>
            {
                cars2.map((car,value) => {
                let saveCar = car
                let saveCarLogo = "lovely" + saveCar.brand
                return <Car key={car.id} brand={saveCarLogo} value={value}/>
            })
            }
        </ul> */}
            <ul>
                {
                    cars2.map((car, value) => {
                        let saveCar = car
                        let saveCarLogo = "lovely" + saveCar.brand
                        return (
                            <div key={car.id + 20}>
                                <Car key={car.id} brand={saveCarLogo} value={value} />
                                <Car key={car.id + 10} brand={saveCarLogo} value={value} />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Garage