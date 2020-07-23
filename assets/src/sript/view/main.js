const main = () => {
    //ketika menekan tombol search
    $('#search-button').on('click', () => searchDrink());


    //ketika menekan enter
    $('#search-input').on('keyup', event => {
        if (event.which === 13) {
            return searchDrink();
        }
    });
};

export default main;