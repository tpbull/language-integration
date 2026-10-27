export const flashCardsController = (req, res) => {
    res.send('Flashcards API endpoint');
};

export const flashCardController = (req, res) => {
    res.send('Flashcards API endpoint: ' + req.params.flashcardId);
};

export const flashCardsSearchController = (req, res) => {
    res.send('Flashcards API endpoint -> search: ' + req.query.name + ' ' + req.query.category);
    var name = req.query.name;
    var category = req.query.category;
    res.send('Flashcards API endpoint: ' + name + ' ' + category);
};