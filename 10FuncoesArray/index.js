c('normal')
const MyFavoriteGames = ["Celeste", "Minecraft", "Sonic"]
console.log(MyFavoriteGames)

c('push')
MyFavoriteGames.push("Horizon Chase Turbo")
console.log(MyFavoriteGames)

c('filter')
const filteredArray = MyFavoriteGames.filter(game => !game.toLowerCase().startsWith('c'))
console.log(filteredArray)

c('find')
const FindMinecraft = MyFavoriteGames.find(game => game === "Minecraft")
console.log(FindMinecraft)

c('includes')
const found = MyFavoriteGames.includes("Celeste", 1)
console.log(found)

c('spread')
const MyNewFavoriteGames = [...MyFavoriteGames, "Undertale"]
console.log(MyNewFavoriteGames)

c('slice')
const twoGames = MyFavoriteGames.slice(0,2)
console.log(twoGames)

c('pop')
MyFavoriteGames.pop()
console.log(MyFavoriteGames)

c('map')
const CelesteOnly = MyFavoriteGames.map(g => g = "Celeste")
console.log(CelesteOnly)

c('reverse')
const reverseGames = [...MyFavoriteGames].reverse()
console.log(reverseGames)

c('forEach')
MyFavoriteGames.forEach(game => console.log((MyFavoriteGames.indexOf(game) + 1) + " - " + game))

function c(name){
    console.log(`\n============ ${name} ============`)
}