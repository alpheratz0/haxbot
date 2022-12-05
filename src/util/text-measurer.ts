export class TextMeasurer {
	private m_ctx: CanvasRenderingContext2D;

	/** Creates a new instance of the class.
	 * @param fontFamily The font family to use.
	 * @param fontSize The font size in pixels.
	 * @param fontUrl The font url for browsers which the font isnt default. Be careful to wait until the font is fully downloaded or it may cause measure and padding bugs.
	 */
	constructor(fontFamily: string, fontSize: number, fontUrl?: string) {
		if (fontUrl) {
			const link = document.createElement('link');
			link.href = fontUrl;
			link.rel = 'stylesheet';
			document.head.appendChild(link);
		}

		const canvas = document.createElement('canvas');

		canvas.width = 1024;
		canvas.height = 300;
		canvas.style.zIndex = '8';
		canvas.style.position = 'absolute';
		canvas.hidden = true;

		document.body.appendChild(canvas);

		this.m_ctx = canvas.getContext('2d');
		this.m_ctx.font = `${fontSize}px ${fontFamily}`;
	}

	/** Measures the text width.
	 * @param text The text to measure.
	 */
	measure(text: string): number {
		return this.m_ctx.measureText(text).width;
	}

	/** Pads whitespaces to the left until it reaches the specified width.
	 * @param text The text.
	 * @param width The width to reach.
	 * @param char The padding char.
	 */
	padLeft(text: string, width: number, char?: string): string {
		if (char) {
			while (this.measure(text) < width) text = (char[0] || ' ') + text;
			return text;
		}

		const longSpaceAvailable = width - this.measure(text);
		const longSpacesCount =
			longSpaceAvailable / this.measure(' ') -
			((longSpaceAvailable / this.measure(' ')) % 1);

		const shortSpaceAvailable =
			longSpaceAvailable - longSpacesCount * this.measure(' ');
		const shortSpacesCount =
			shortSpaceAvailable / this.measure(' ') -
			((shortSpaceAvailable / this.measure(' ')) % 1);

		return text
			.padStart(longSpacesCount + text.length, ' ')
			.padStart(shortSpacesCount + text.length + longSpacesCount, ' ');
	}

	/** Pads whitespaces to the right until it reaches the specified width.
	 * @param text The text.
	 * @param width The width to reach.
	 * @param char The padding char.
	 */
	padRight(text: string, width: number, char?: string): string {
		if (char) {
			while (this.measure(text) < width) text += char[0] || ' ';
			return text;
		}

		const longSpaceAvailable = width - this.measure(text);
		const longSpacesCount =
			longSpaceAvailable / this.measure(' ') -
			((longSpaceAvailable / this.measure(' ')) % 1);

		const shortSpaceAvailable =
			longSpaceAvailable - longSpacesCount * this.measure(' ');
		const shortSpacesCount =
			shortSpaceAvailable / this.measure(' ') -
			((shortSpaceAvailable / this.measure(' ')) % 1);

		return text
			.padEnd(longSpacesCount + text.length, ' ')
			.padEnd(shortSpacesCount + text.length + longSpacesCount, ' ');
	}

	/** Pads whitespaces to both right and left until it reaches the specified width.
	 * @param text The text.
	 * @param width The width to reach.
	 * @param char The padding char.
	 */
	padBoth(text: string, width: number, char?: string): string {
		const startWidth = this.measure(text);
		const spaceAvailable = width - startWidth;

		return this.padLeft(
			this.padRight(text, startWidth + spaceAvailable / 2, char),
			startWidth + spaceAvailable,
			char
		);
	}
}
