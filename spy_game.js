
module.exports = {
  players: 4,
  spies: 1,
  locations: "Hawaii\nPrison\nFletcher's house",
  status: "setup",
  startGame: function(e){
    alert('starting game')
    this.spy_index = Math.floor(Math.random() * (this.players))
    this.selected_location = locations.split()[spy_index]
    this.started = true
  },
  showPlayer: function(e){
    let span = e.target
    alert('called')
  },
  hidePlayer: function(player_index){
    let span = document.getElementById(`player-${player_index}-hide`)
  },
}
