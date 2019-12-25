
module.exports = {
  players: 4,
  spies: 1,
  locations: "Hawaii\nPrison\nFletcher's house",
  startGame: function(){
    this.spy_index = Math.floor(Math.random() * (this.players))
    this.selected_location = locations.split()[spy_index]
  },

}
