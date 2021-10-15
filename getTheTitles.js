const getTheTitles = function(arrayBooks) {
    const title = arrayBooks.map(book =>{
        return book.title;
    })

    return title;

};

module.exports = getTheTitles;
