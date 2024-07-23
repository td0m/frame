window.addEventListener("load", () => {
	// not always supported, might be disabled in incognito
	if ("serviceWorker" in navigator && !localStorage.getItem("nosw")) {
		console.log("registering...")
		const registration = navigator.serviceWorker.register("/res/js/service-worker.js", {scope: "/"})
		registration
			.then(reg => console.log("registered", reg))
			.catch(err => console.error("failed to register service-worker", err))
	}
})
