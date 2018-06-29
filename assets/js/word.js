
var $message = $('#message');
var $apples = $('#apples');
var $letters = $('#spaces');
var $guesses = $('#guesses');

var randomWord = function() {
  var words = ['photograph', 'gingerbread', 'bicycle', 'whistle',
 'unicorn', 'hamster', 'pull'];

  return function() {
    var idx = Math.floor(Math.random() * words.length);
    var word = words[idx];
    words.splice(idx, 1);
    return word;
  }
}();

var Game = {
  incorrectGuesses: 0,
  lettersGuessed: [],
  wrongGuessesAllowed: 6,
  createBlanks: function() {
    $letters.find('span').remove();
    var spans = this.currentWord.map(function(){
      return '<span></span>';
    }).join('');
    $letters.append(spans);
    this.$spaces = $("#spaces span");
  },
  guess: function(letter) {
    this.lettersGuessed.push(letter);
    $guesses.append('<span>' + letter + '</span>');

    var idx = this.currentWord.indexOf(letter);
    if (idx === -1) {
      this.incorrectGuesses += 1;
      this.updateApples();
      if (this.incorrectGuesses >= this.wrongGuessesAllowed) {
        this.gameStatus = 'lose';
        this.gameOver();
        return;
      }
    } else {
      this.fillBlanksFor(letter);
      if (this.$spaces.text() === this.currentWord.join('')) {
        this.gameStatus = 'win';
        this.gameOver();
      }
    }
  },
  fillBlanksFor: function(letter) {
    this.currentWord.forEach(function(char, idx) {
      if (char === letter) {
        this.$spaces[idx].innerText = letter;
      }
    }, this);
  },
  updateApples: function() {
    $apples.removeClass();
    $apples.addClass('guess_' + String(this.incorrectGuesses));
  },
  gameOver: function() {
    var msg = (this.gameStatus === 'win') ? 'You won!!' : 'You lost.';
    this.displayMessage(msg);
    $('body').addClass(this.gameStatus);
    $('a').show();
  },
  displayMessage: function(msg) {
    $message.text(msg);
  },
  init: function() {
    this.gameStatus = 'active',
    this.currentWord = randomWord().split('') || this.displayMessage("Sorry, I've run out of words."),
    this.createBlanks();
    $guesses.find('span').remove();
    $apples.removeClass();
    $('a').hide();
    $message.text('');
    $('body').removeClass();
    return this;
  },
}

var myGame = Object.create(Game).init();

$(document).keypress(function(e){
  var code = e.which
  if (code > 122 || code < 97) return;

  var letter = String.fromCharCode(code);
  if (myGame.gameStatus === 'active') {
    myGame.guess(letter);
  }
});

$('a').on('click', function(e){
  e.preventDefault();
  myGame = Object.create(Game).init();
});
