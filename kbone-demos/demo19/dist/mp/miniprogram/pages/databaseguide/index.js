const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~chooselib~databaseguide~deployfunctions~index~storageconsole~userconsole.js')(window, document);require('../../common/default~databaseguide~storageconsole~userconsole.js')(window, document);require('../../common/databaseguide.js')(window, document)}

Page({
    ...getBaseConfig(mp, config, init),
    
    
    
})
