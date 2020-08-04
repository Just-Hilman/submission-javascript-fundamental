//menampilkan sample daftar minuman di awal
function showDrink() {
    $('#drink-list').html('');
    let coba = ["11004", "11728", "11000", "11007"];
    // console.log(...coba)

    // for (let i = 0; i < coba.length; i++) {
    //     console.log(coba[i]);

    // };


    for (let i = 0; i < coba.length; i++) {
        // console.log(coba[i]);
        $.ajax({
            url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
            type: 'get',
            dataType: 'json',
            data: {
                'i': coba[i]
            },
            success: function (tampil) {
                if (tampil.drinks != null) {
                    const awal = tampil.drinks;
                    $.each(awal, function (i, data) {
                        // console.log(data.idDrink);
                        $('#drink-list').append(`
                            <div class="col-md-3">
                                <div class="card mb-4">
                                    <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${data.strDrink}</h5>
                                    <p class="card-text">${data.strCategory}</p>
                                    <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.idDrink}">Detail</a>
                                    </div>
                                </div>
                            </div>
                        `);
                    });

                };

            }
        });
    };
};

export default showDrink;