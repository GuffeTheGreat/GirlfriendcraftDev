ServerEvents.loaded(event => {
    event.server.gameRules.set("doInsomnia", false)
    event.server.gameRules.set("keepInventory", true)
    event.server.gameRules.set("playersSleepingPercentage", 50)
})