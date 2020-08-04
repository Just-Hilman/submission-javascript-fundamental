import DataSource from '../component/search-bar.js';
import searchLetter from '../data/search-data.js';
import '../component/letter-search.js';
import showDrink from '../component/drink-list.js';
import seeDetail from '../component/detail.js';

const main = () => {
    //ketika menekan tombol search
    $('#search-button').on('click', () => DataSource.searchDrink());


    //ketika menekan enter
    $('#search-input').on('keyup', event => {
        if (event.which === 13) {
            return DataSource.searchDrink();
        }
    });


    //menjalankan fungsi searchLetter untuk mencari data berdasarkan huruf pertama
    searchLetter();

    //menjalankan fungsi showDrink untuk menampilkan sample minuman di awal halaman
    showDrink();

    //menjalankan fungsi seeDetail ketika menekan tombol detail
    seeDetail();
};


export default main;