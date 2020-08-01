//mengurutkan abjad dari a-z
for (let i = 0; i < 26; i++) {
    const abjad = (i + 10).toString(36);
    $('#search-first').append(`
        <li class="list"><button type="button" class="btn first-letter btn-outline-light text-dark">${abjad}</button></li>
    `);
};