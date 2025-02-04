require('dotenv').config()

module.exports.getConfig = () => {
    return {
        name: process.env.NAME || 'Mabu',
        prefix: process.env.PREFIX || '-',
        writesonicAPI: process.env.WRITE_SONIC || null,
        bgAPI: process.env.BG_API_KEY || null,
        mods: (process.env.MODS || '').split('6797309646,')
    }
}
