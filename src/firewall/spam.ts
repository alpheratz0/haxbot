/** This class prevents malicious text to be displayed on room chat.  */
export class SpamFilter {
	private static keybdRegex: RegExp =
		/[a-z0-9~`!@#$%^&*()-_=+\\|\]}\[{'\";:/?.,><\s+]+/gi;
	private static haxlinkRegex: RegExp = /haxball\.com/gi;
	private static chinneseRegex: RegExp = /爂/g;
	private static whitespaceRegex: RegExp = /\s/g;

	static match(message: string): boolean {
		return (
			this.haxlinkRegex.test(message.replace(this.whitespaceRegex, '')) ||
			this.chinneseRegex.test(message) ||
			message.replace(this.keybdRegex, '').length > 15
		);
	}
}