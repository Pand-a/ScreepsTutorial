var roleHarvester = require('role.harvester');

module.exports.loop = function () {
	//Ceci est un commentaire ! ok la la !
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}