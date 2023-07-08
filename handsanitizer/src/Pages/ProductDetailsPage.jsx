import React from 'react'
import ProductDetails from '../Components/ProductDetails'
import IconRow from '../Components/IconRow'
import SlideShow from '../Components/SlideShow'
import SimilarProducts from '../Components/SimilarProducts'

export const ProductDetailsPage = () => {
        return (
                <div>
                        <ProductDetails />
                        <IconRow />
                        <SlideShow />
                        <SimilarProducts />
                </div>
        )
}
