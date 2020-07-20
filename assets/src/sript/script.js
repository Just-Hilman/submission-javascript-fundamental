//menampilkan daftar minuman di awal
$('#drink-list').html('');

$.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
    type: 'get',
    dataType: 'json',
    data: {
        'i': "11004"
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

        }

    }
});

$('#drink-list').html('');

$.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
    type: 'get',
    dataType: 'json',
    data: {
        'i': "11007"
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

        }

    }
});

$('#drink-list').html('');

$.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
    type: 'get',
    dataType: 'json',
    data: {
        'i': "11000"
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

        }

    }
});

$('#drink-list').html('');

$.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
    type: 'get',
    dataType: 'json',
    data: {
        'i': "11728"
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

        }

    }
});


//menampilkan search
function searchDrink() {
    $('#drink-list').html('');
    $('#result-length').html('');

    $.ajax({
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        type: 'get',
        dataType: 'json',
        data: {
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.drinks != null) {
                let minuman = result.drinks;
                $('#result-length').append(`
                    <h6>Found ` + minuman.length + ` Drinks</h6>
                `);

                $.each(minuman, function (i, data) {
                    $('#drink-list').append(`
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${data.strDrink}</h5>
                            <p class="card-text">${data.strCategory}</p>
                            <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.idDrink + `">Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
                $('#search-input').val('');

            } else {
                // alert("Drinks You Search Not Found!")
                $('#drink-list').html('<h3>Drinks You Search Not Found!</h3>');
                $('#search-input').val('');
            }
        }
    });
};


//ketika menekan tombol search
$('#search-button').on('click', function () {
    searchDrink();
});


//ketika menekan enter
$('#search-input').on('keyup', function (event) {
    if (event.which === 13) {
        searchDrink();
    }
});


//ketika menekan tombol detail
$('#drink-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));
    $.ajax({
        url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        type: 'get',
        dataType: 'json',
        data: {
            'i': $(this).data('id')
        },
        success: function (result) {
            if (result.drinks != null) {
                let minuman = result.drinks;
                $.each(minuman, function (i, data) {
                    // console.log(data.strDrink);
                    $('.modal-body').html(`
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="${data.strDrinkThumb}" class="img-fluid">
                                </div>

                                <div class="col-md-8">
                                    <ul class="list-group">
                                        <li class="list-group-item">Name : ${data.strDrink}</li>
                                    </ul>

                                    <ul class="list-group">
                                        <li class="list-group-item">Category : ${data.strCategory}</li>
                                    </ul>

                                    <ul class="list-group">
                                        <li class="list-group-item">Glass : ${data.strGlass}</li>
                                    </ul>

                                    <ul class="list-group">
                                        <li class="list-group-item">Instructions : ${data.strInstructions}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `);
                });
            }
        }
    });
});


//mengurutkan abjad dari a-z
for (i = 0; i < 26; i++) {
    const abjad = (i + 10).toString(36);
    $('#search-first').append(`
        <li class="list"><button type="button" class="btn first-letter btn-outline-light text-dark">${abjad}</button></li>
    `);
};


//menampilkan berdasarkan huruf pertama
$('.first-letter').on('click', function () {
    // console.log($(this).text());
    $('#drink-list').html('');
    $('#result-length').html('');

    $.ajax({
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        type: 'get',
        dataType: 'json',
        data: {
            'f': $(this).text()
        },
        success: function (result) {
            if (result.drinks != null) {
                const minuman = result.drinks;
                // menampilkan jumlah result
                // console.log(minuman.length);
                $('#result-length').append(`
                    <h6>Found ${minuman.length} Drinks</h6>
                `);

                $.each(minuman, function (i, data) {
                    $('#drink-list').append(`
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${data.strDrink}</h5>
                            <p class="card-text">${data.strCategory}</p>
                            <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.idDrink + `">Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
            } else {
                $('#result-length').html('<h6>No Drinks Found!</h6>');
            }
        }
    });
});




//scrolled
// $('.tombol-login').on('click', function () {
//     $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 800);
// });