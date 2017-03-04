var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    //console.log("Hello my memory now is : ")
	//Ceci est un commentaire ! ok la la !
    for(var name in Game.creeps) {
        //console.log("the name is now at :" + name)
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}