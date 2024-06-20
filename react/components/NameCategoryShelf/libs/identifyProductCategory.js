const identifyProductCategory = (value)=>{
    const len = value.length;
    const [ fBar, name, Sbar ] = value[len - 1].split("/");

    return name;
}

export default identifyProductCategory;