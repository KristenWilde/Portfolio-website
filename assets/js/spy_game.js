
const $spies_input = $('#spies')
const $players_input = $('#players')
const $locations_field = $('#locations')
const $email_button = $('#email_button')
const $start_button = $('#start_button')


const game = {
  players: $players_input.val(),
  spies: $spies_input.val(),
  locations: $locations_field.val(),
  updateSpies: (e) => {
    this.spies = e.target.value
    console.log('spies value', this.spies)
  },
  updatePlayers: (e) => {
    this.players = e.target.value
  },
  updateLocations: (e) => {
    this.locations = e.target.value
    console.log('locations', this.locations)
  },
  sendEmail: (e) => {
    e.stopPropagation()
    console.log('locations', $locations_field.val())
    const href = `mailto:?body=${encodeURIComponent($locations_field.val())}`
    console.log(href)
    $email_button.attr("href", href)
  },
  startGame: (e) => {
    console.log('starting game')
    this.started = true
    this.spy_index = Math.floor(Math.random() * (this.players))
    this.selected_location = locations.split()[spy_index]
    console.log(this.selected_location)
  },
  showPlayer: function(e){
    let span = e.target
    alert('called')
  },
  hidePlayer: function(player_index){
    let span = document.getElementById(`player-${player_index}-hide`)
  },
}

console.log(game.locations)

$spies_input.on('change', game.updateSpies)
$players_input.on('change', game.updatePlayers)
$locations_field.on('change', game.updateLocations)
$email_button.on('click', game.sendEmail)

 // <% for(var p = 0; p < game.players; p += 1) { %>
 //        <div>
 //          <span id="player-<%= p %>-show">
 //            Player <%= p + 1 %>
 //          </span>
 //          <input type="checkbox" id="player-<%= p %>-hide"/>
 //        </div>
 //      <% } %>
