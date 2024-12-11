const ryba = require('ryba-js');

exports.renderPage = function (req, res,) {
    let text = ryba();
    if (!text) {
        text = 'Упс, закончились слова, попробуйте позже. :(';
    }
    
    console.log('Текст был создан: ' + text);

    res.render('home_page', { generatedText: text });
};