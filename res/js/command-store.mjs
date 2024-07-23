
function CommandStore(process) {
	const target = new EventTarget()
	const all = []
	const listeners = []

	return {
		listen: f => listeners.push(f),
		push: (cmd) => {
			try {
				process(cmd)
				for (let listener of listeners) {
					listener(cmd)
				}
				all.push(cmd)
			} catch(err) {
				console.log("failed to process", err)
			}
			return cmd
		},
	}
}

export default CommandStore
