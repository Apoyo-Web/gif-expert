import React, { useState } from 'react'
import { AddCategory } from './addCategory/AddCategory'
import { GifGrid } from './GifGrid/GifGrid'

export const GiftExpertApp = () => {

    
    const [categories, setCategories] = useState([])
    return (
        <div>
            <h2>Gift Expert App</h2>
            <hr />
            <h3>Busca tus personajes favoritos:</h3>
            <AddCategory setCategories={setCategories} />
            
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />)
                }
            </ol>
        </div>
    )
}

export default GiftExpertApp;