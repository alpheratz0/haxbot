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
LanguageProvider.add(LanguageMap.english('Welcome to the futsal bot, use !help to see commands.').spanish('Bienvenido al bot de futsal, usa !help para ver los comandos.'));
LanguageProvider.add(LanguageMap.english('Name taken.').spanish('Nombre tomado.'));
LanguageProvider.add(LanguageMap.english('Invalid name.').spanish('Nombre invalido.'));
LanguageProvider.add(LanguageMap.english('Use !futsal3 !futsal1 or !futsalpen to change the map.').spanish('Usa !futsal3 !futsal1 o !futsalpen para cambiar el mapa'));
LanguageProvider.add(LanguageMap.english('You cant ban that player.').spanish('No puedes banear a ese jugador.'));
LanguageProvider.add(LanguageMap.english('Spamming the room is forbidden.').spanish('Esta prohibido el spam en la sala.'));
LanguageProvider.add(LanguageMap.english('You are silenced.').spanish('Te encuentras silenciado.'));
LanguageProvider.add(LanguageMap.english('Command not found.').spanish('Comando no encontrado.'));
LanguageProvider.add(LanguageMap.english('Goaaaal by ').spanish('Gooooolazo de '));
LanguageProvider.add(LanguageMap.english('Assist').spanish('Asistencia'));
LanguageProvider.add(LanguageMap.english('Own goal by').spanish('Gol en contra del tarado de'));
LanguageProvider.add(LanguageMap.english('Consecutive wins').spanish('Victorias consecutivas'));
LanguageProvider.add(LanguageMap.english('Celebration message updated.').spanish('Mensaje de celebracion actualizado.'));
LanguageProvider.add(LanguageMap.english('Welcome message updated.').spanish('Mensaje de bienvenida actualizado.'));
LanguageProvider.add(LanguageMap.english('Player not found.').spanish('Jugador no encontrado.'))
LanguageProvider.add(LanguageMap.english('Message is too short.').spanish('El mensaje es muy corto.'));
LanguageProvider.add(LanguageMap.english('Cant whisper to yourself.').spanish('No puedes enviarte un mensaje privado a vos mismo.'));