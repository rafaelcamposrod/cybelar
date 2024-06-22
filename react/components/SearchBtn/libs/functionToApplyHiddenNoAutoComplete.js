const functionToApplyHiddenNoAutoComplete = ()=>{
    const searchBtn = document.querySelector(".vtex-store-components-3-x-searchBarIcon");
    const autoComplete = document.querySelector(".vtex-search-1-x-biggy-autocomplete");
    const inputElement = document.querySelector(".vtex-styleguide-9-x-input");

    searchBtn.addEventListener("click", function(){
        autoComplete.classList.add("vtex-search-1-x-biggy-js-container--hidden");
    });

    inputElement.addEventListener("keypress", function(event){
        if(event.keyCode === 13) autoComplete.classList.add("vtex-search-1-x-biggy-js-container--hidden");
    });
}   

export default functionToApplyHiddenNoAutoComplete;