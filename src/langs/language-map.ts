import { Language } from './language';
import { LanguageText } from './language-text';

export class LanguageMap {
	private texts: LanguageText[] = [];

	constructor(texts: LanguageText[]) {
		this.texts = texts;
	}

	get(lang: Language): string {
		return this.texts.find((text) => text.usesLang(lang)).get();
	}

	is(text: string): boolean {
		return this.texts.some((t) => t.get() == text);
	}

	add(text: LanguageText): void {
		this.texts.push(text);
	}

	translatesTo(other: LanguageText): LanguageMap {
		this.texts.push(other);
		return this;
	}

	static english(text: string): LanguageMap {
		return new LanguageMap([new LanguageText(text, Language.English)]);
	}

	static spanish(text: string): LanguageMap {
		return new LanguageMap([new LanguageText(text, Language.Spanish)]);
	}

	english(text: string): LanguageMap {
		this.add(new LanguageText(text, Language.English));
		return this;
	}

	spanish(text: string): LanguageMap {
		this.add(new LanguageText(text, Language.Spanish));
		return this;
	}
}