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