import React from "react";
import { useProduct } from "vtex.product-context";

const AddButtonAndAddList = ({ AddButton, AddList })=>{
    const product = useProduct();
    const active = product.selectedItem.sellers[0].commertialOffer.AvailableQuantity > 0;

    if(active){
        return(
            <>
                <AddButton />
                <AddList />
            </>
        );
    } else return null;
}

export { AddButtonAndAddList }