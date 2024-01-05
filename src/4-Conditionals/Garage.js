import React from 'react'

const Garage = ({cars}) => {
    
  return (
    <div>
        <h1>Garage</h1>
        {cars?.length > 0 && <h2>You have {cars.length} cars in your garage</h2>}
    </div>
  )
}

// eğer ? eklenirse hata vermez çünkü eğer varsa kontrol et demek istemiştir.

export default Garage