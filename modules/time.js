var os = require('os');
process.stdin.setEncoding('utf8');

function timeCounting() {
	var uptime = os.uptime();
	var uptimeRound = Math.round(uptime);
	var uptimeMinutes = Math.floor(uptimeRound/60);
	var uptimeHours = Math.floor(uptimeMinutes/60);
	var uptimeSeconds = uptimeRound-(uptimeMinutes*60);
	console.log('Uptime: ', + uptimeHours + " h " + uptimeMinutes + " min " + uptimeSeconds + " sec");
}

exports.timeCounting = timeCounting;