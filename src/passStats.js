const {ipcRenderer} = require('electron');

// pass the stats if asked for (asynchronous)
// https://github.com/electron/electron/blob/master/docs/api/ipc-main.md#sending-messages

play_btn.btnf.click();

ipcRenderer.on('getStats', (event, args) => {
	result = []

	args.forEach(function (item, index, array) {
    	result.push(eval(item))
  	})

	event.sender.send('replyStats', result)
});
