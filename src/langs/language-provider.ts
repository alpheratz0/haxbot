import { Language } from "./language";
import { LanguageMap } from "./language-map";

export class LanguageProvider {
    private static current: Language = Language.English;
    private static languageMap: LanguageMap[] = [];
    
    static get(text: string, lang: Language = this.current): string {
        return this.languageMap.find(map => map.is(text))?.get(lang);
    }

    static add(map: LanguageMap): LanguageMap {
        this.languageMap.push(map);
        return map;
    }

    static use(lang: Language): void {
        this.current = lang;
    }
}

LanguageProvider.add(LanguageMap.english('Multiple connections from the same computer isnt allowed.').spanish('Conexiones multiples desde una misma PC no esta permitido.'));