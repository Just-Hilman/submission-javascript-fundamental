import '../component/footer-section.js';
import '../component/partner.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import '../component/letter-search.js';
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
    DataSource.searchLetter();

    //menjalankan fungsi showDrink untuk menampilkan sample minuman di awal halaman
    DataSource.showDrink();

    //menjalankan fungsi seeDetail ketika menekan tombol detail
    seeDetail();


    //smooth scroll
    $('.page-scroll').on('click', function () {
        const data = $(this).attr('href');
        const elemen = $(data);

        $('html').animate({
            scrollTop: elemen.offset().top - 100
        }, 800);

    });
};


export default main;