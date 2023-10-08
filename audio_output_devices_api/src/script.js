const mediaSelector =
	document.getElementById("media");

// Added code
const webCamContainer = document
	.getElementById('web-cam-container');

let selectedMedia = null;

/* Previous code
...
Added code */

const audioMediaConstraints = {
	audio: true,
	video: false
};

const videoMediaConstraints = {
	// or you can set audio to false
	// to record only video
	audio: true,
	video: true
};

function startRecording(thisButton, otherButton) {

	navigator.mediaDevices.getUserMedia(
			selectedMedia === "vid" ?
			videoMediaConstraints :
			audioMediaConstraints)
		.then(mediaStream => {
			// Use the mediaStream in
			// your application

			// Make the mediaStream global
			window.mediaStream = mediaStream;

			if (selectedMedia === 'vid') {

				// Remember to use the "srcObject"
				// attribute since the "src" attribute
				// doesn't support media stream as a value
				webCamContainer.srcObject = mediaStream;
			}

			document.getElementById(
				`${selectedMedia}-record-status`)
				.innerText = "Recording";
			thisButton.disabled = true;
			otherButton.disabled = false;
		});

}

function stopRecording(thisButton, otherButton) {

	// Stop all the tracks in the received
	// media stream i.e. close the camera
	// and microphone
	window.mediaStream.getTracks().forEach(track => {
		track.stop();
	});

	document.getElementById(
		`${selectedMedia}-record-status`)
		.innerText = "Recording done!";
		
	thisButton.disabled = true;
	otherButton.disabled = false;
}
