
const $spies_input = $('#spies')
const $players_input = $('#players')
const $locations_field = $('#locations')
const $email_button = $('#email_button')
const $start_button = $('#start_button')
const $player_list = $('#player_list')

const game = {
  players: parseInt($players_input.val(), 10),
  spies: parseInt($spies_input.val(), 10),
  locations: $locations_field.val(),
  updateSpies: (e) => {
    game.spies = parseInt(e.target.value, 10)
  },
  updatePlayers: (e) => {
    game.players = parseInt(e.target.value, 10)
  },
  updateLocations: (e) => {
    game.locations = e.target.value
  },
  sendEmail: (e) => {
    e.stopPropagation()
    const href = `mailto:?body=${encodeURIComponent($locations_field.val())}`
    $email_button.attr("href", href)
  },
  startGame: (e) => {
    const locations = $locations_field.val().trim().split('\n')
    game.started = true
    const players = parseInt($players_input.val(), 10)
    let spy_indexes = []

    while (spy_indexes.length < game.spies){
      let index = Math.floor(Math.random() * (players))
      if (!spy_indexes.includes(index)){
        spy_indexes.push(index)
      }
    }
    game.spy_indexes = spy_indexes

    const location_index = Math.floor(Math.random() * (locations.length))
    const selected_location = locations[location_index]
    game.selected_location = selected_location

    for(let player_index = 0; player_index < game.players; player_index++){
      const res = $player_list.append(`
        <li>
          <span id="player-${player_index}-show" data="${player_index}"">
            Player ${player_index + 1}
          </span>
          <input type="checkbox" id="player-${player_index}-hide" data="${player_index}"/>
        </li>
      `)
      const $span = $(`#player-${player_index}-show`)
      $span.on('click', game.showPlayer)

      const $checkbox = $(`#player-${player_index}-hide`)
      $checkbox.on('click', game.hidePlayer)
    }
  },
  showPlayer: function(e){
    const id = e.target.getAttribute('id')
    const $span = $("#" + id)
    const player_index = Number(id.match(/\d/)[0])
    let text = game.selected_location
    if (game.spy_indexes.includes(player_index)){
      text = "Spy"
    }
    $span.text(text)
  },
  hidePlayer: function(e){
    const hide_id = e.target.getAttribute('id')
    const player_index = Number(hide_id.match(/\d/)[0])
    const show_id = `player-${player_index}-show`
    const $span = $('#' + show_id)
    const $checkbox = $('#' + hide_id)
    $span.text(`Player ${player_index + 1}`)
    $checkbox.setChecked(true)
  },
}
console.log(game)

$spies_input.on('change', game.updateSpies)
$players_input.on('change', game.updatePlayers)
$locations_field.on('blur', game.updateLocations)
$email_button.on('click', game.sendEmail)
$start_button.on('click', game.startGame)

 // <% for(var p = 0; p < game.players; p += 1) { %>
 //        <div>
 //          <span id="player-<%= p %>-show">
 //            Player <%= p + 1 %>
 //          </span>
 //          <input type="checkbox" id="player-<%= p %>-hide"/>
 //        </div>
 //      <% } %>
