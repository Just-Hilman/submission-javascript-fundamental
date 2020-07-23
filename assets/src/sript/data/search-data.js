//menampilkan search
class SearchData {
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
};