import React, { useContext } from "react";
import { ProductContext } from "vtex.product-context";
import identifyProductCategory from "./libs/identifyProductCategory";

import styles from "./styles.css";

const NameCategoryShelf = ()=>{
    const productContext = useContext(ProductContext);
    const { product } = productContext;
    const categoryName = identifyProductCategory(product?.categories);
    
    return(
        <div className={styles["contentCategoryName"]}>
            <span className={styles["categoryName"]}>{categoryName}</span>
            <em className={styles["redLine"]}></em>
        </div>
    );
}

export default NameCategoryShelf;
