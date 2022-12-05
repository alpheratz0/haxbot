import { Language } from './language';

export class LanguageText {
	private language: Language;
	private text: string;

	constructor(text: string, lang: Language) {
		this.language = lang;
		this.text = text;
	}

	usesLang(lang: Language): boolean {
		return this.language == lang;
	}

	get(): string {
		return this.text;
	}
}