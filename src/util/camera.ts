import { room } from '../room';
import { File } from './file';

export class Camera {
	private static recording: boolean = false;
	private static lastRecording: Uint8Array = null;

	/** Starts recording the game. */
	static record(): void {
		if (this.recording) room.stopRecording();
		room.startRecording();
		this.recording = true;
	}

	/** Stops recording the game. */
	static stop(): void {
		if (!this.recording) return;
		this.lastRecording = room.stopRecording();
		this.recording = false;
	}

	/** Saves the last recording. */
	static save(): boolean {
		if (!this.lastRecording) return false;
		const blob = new Blob([this.lastRecording], {
			type: 'application/octet-stream'
		});
		const url = window.URL.createObjectURL(blob);
		const filename = `${new Date().getTime()}.hbr2`;
		File.download(url, filename);
		return true;
	}
}
