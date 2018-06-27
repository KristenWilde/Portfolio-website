module.exports = [
  {
    title: 'Subtraction App',
    img: 'subtraction_app.png',
    img_url: 'http://subtract.online',
    description: 'A game-like educational web app. Tracks progress toward mastering basic arithmetic, as well as time spent and problems practiced per day.',
    more: "Vue modules respond to data, user interaction, and optional query parameters. Designed to protect children's privacy.",
    tech: 'Ruby on Rails, Vue.js, HTML, SCSS',
    links: [
      { name: 'Live site',
        url: 'http://subtract.online'},
      { name: 'Github: sample Rails controller',
        url: 'https://github.com/KristenWilde/First-grade-math/blob/master/app/controllers/users_controller.rb'},
      { name: 'Github: sample Rails model',
        url: 'https://github.com/KristenWilde/First-grade-math/blob/master/app/models/user.rb' },
      { name: 'Github: Vue modules',
        url: 'https://github.com/KristenWilde/First-grade-math/tree/master/app/javascript'}
    ],
  },
  {
    title: 'Todo Manager',
    img: 'todo_manager.png',
    img_url: '/images/todo_manager.png',
    description: 'Allows user to manage items with CRUD actions, displays lists sorted by due date and completion.',
    tech: "custom JavaScript classes, jQuery, HTML, SCSS",
    more: 'Pixel-perfect HTML/CSS from Photoshop files',
    links: [
      { name: 'Github: framework-free font-end JS',
        url: 'https://github.com/KristenWilde/Todo_Manager/blob/master/public/javascripts/todos.js' },
    ]
  },
  { title: 'Todo Tracker',
    img: 'todo_tracker.png',
    img_url: 'https://glacial-woodland-26684.herokuapp.com/',
    description: 'Another todo app--with CRUD actions for items and lists.',
    tech: 'Sinatra, SQL',
    more: '',
    links: [
      { name: 'Live demo',
        url: 'https://glacial-woodland-26684.herokuapp.com/' },
      { name: 'Github',
        url: 'https://github.com/KristenWilde/Todo-tracker'},
    ],
  },
  {
    title: 'Book Viewer',
    img: 'book_viewer.png',
    img_url: 'https://ls-book-viewer-170.herokuapp.com/search',
    description: 'Reads content from text files, performs searches using query parameters.',
    tech: 'Ruby, Sinatra',
    more: '',
    links: [
      { name: 'Live demo',
        url: 'https://ls-book-viewer-170.herokuapp.com/search' },
      { name: 'Github',
        url: 'https://github.com/KristenWilde/Launch-School-Ruby/tree/master/sinatra/book_viewer' }
    ]
  },
  {
    title: 'Command line apps',
    img: 'ruby_games.png',
    img_url: '/images/ruby_games.png',
    description: 'Challenge your computer to a game of tic-tac-toe or twenty-one. Or save some recipes to your own database.',
    more: '',
    tech: 'Ruby, Rubocop',
    links: [
      { name: 'Github: Ruby games',
        url: 'https://github.com/KristenWilde/Launch-School-Ruby/blob/master/object_oriented_ruby/lesson_5/otherttt.rb'}
    ]
  },
]

