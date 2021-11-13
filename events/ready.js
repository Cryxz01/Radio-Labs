const db = require('quick.db')

module.exports = async (client) => {

    console.log(`Connecté en tant que ${client.user.tag}`)
    const status = [
        `RADIO NRJ`,
        `RADIO SKYROCK`,
        `RADIO MOUV`,
        `RADIO RFM`,
        `RADIO JAZZ`,
        `RADIO BLUES`,
        `RADIO RAP`,
        `RADIO CLASSIQUE`
    ]
    let cpt = 0
    setInterval(() => {
        if (cpt === status.length) cpt = 0
        const stat = status[cpt]
        client.user.setActivity(stat, {type : 'LISTENING'})
        cpt++
    }, 5000)
}