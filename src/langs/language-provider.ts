import { Language } from './language';
import { LanguageMap } from './language-map';

export class LanguageProvider {
	private static current: Language = Language.English;
	private static languageMap: LanguageMap[] = [];

	static get(text: string, ...args: string[]): string {
		let value = this.languageMap
			.find((map) => map.is(text))
			?.get(this.current);
		for (let i = 0; i < args.length; i++)
			value = value.replace(`{${i}}`, args[i]);
		return value;
	}

	static add(map: LanguageMap): LanguageMap {
		this.languageMap.push(map);
		return map;
	}

	static use(lang: Language): void {
		this.current = lang;
	}
}

LanguageProvider.add(
	LanguageMap.english(
		'Multiple connections from the same computer isnt allowed.'
	).spanish('Conexiones multiples desde una misma PC no esta permitido.')
);
LanguageProvider.add(
	LanguageMap.english(
		'Welcome to the futsal bot, use !help to see commands.'
	).spanish('Bienvenido al bot de futsal, usa !help para ver los comandos.')
);
LanguageProvider.add(
	LanguageMap.english('Name taken.').spanish('Nombre tomado.')
);
LanguageProvider.add(
	LanguageMap.english('Invalid name.').spanish('Nombre invalido.')
);
LanguageProvider.add(
	LanguageMap.english('Use !x3 !x1 or !penalties to change the map.').spanish(
		'Usa !x3 !x1 ó !penalties para cambiar el mapa.'
	)
);
LanguageProvider.add(
	LanguageMap.english('You cant ban that player.').spanish(
		'No puedes banear a ese jugador.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Spamming the room is forbidden.').spanish(
		'Esta prohibido el spam en la sala.'
	)
);
LanguageProvider.add(
	LanguageMap.english('You are silenced.').spanish(
		'Te encuentras silenciado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Command not found.').spanish('Comando no encontrado.')
);
LanguageProvider.add(
	LanguageMap.english('Goaaaal by ').spanish('Gooooolazo de ')
);
LanguageProvider.add(LanguageMap.english('Assist').spanish('Asistencia'));
LanguageProvider.add(
	LanguageMap.english('Own goal by').spanish('Gol en contra del tarado de')
);
LanguageProvider.add(
	LanguageMap.english('Consecutive wins').spanish('Victorias consecutivas')
);
LanguageProvider.add(
	LanguageMap.english('Celebration message updated.').spanish(
		'Mensaje de celebracion actualizado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Welcome message updated.').spanish(
		'Mensaje de bienvenida actualizado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Player not found.').spanish('Jugador no encontrado.')
);
LanguageProvider.add(
	LanguageMap.english('Message is too short.').spanish(
		'El mensaje es muy corto.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Cant whisper to yourself.').spanish(
		'No puedes enviarte un mensaje privado a vos mismo.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Cant donate to yourself.').spanish(
		'No puedes enviarte dinero a vos mismo.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Invalid ammount to donate.').spanish(
		'Monto invalido para donar.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Sent ${0} to {1}.').spanish('Enviaste ${0} a {1}.')
);
LanguageProvider.add(
	LanguageMap.english('Received ${0} from {1}.').spanish(
		'Recibiste ${0} de {1}.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Wrong password.').spanish('Contraseña incorrecta.')
);
LanguageProvider.add(
	LanguageMap.english('Logged successfully.').spanish('Logeado exitosamente.')
);
LanguageProvider.add(
	LanguageMap.english('Insufficent votes.').spanish('Votos insuficientes.')
);
LanguageProvider.add(
	LanguageMap.english('Banvote result').spanish('Resultado del banvote')
);
LanguageProvider.add(
	LanguageMap.english(
		'Player cannot be banvoted because is playing.'
	).spanish('El jugador no puede ser banvoteado porque esta jugando.')
);
LanguageProvider.add(
	LanguageMap.english('A banvote is already running.').spanish(
		'Hay un banvote en curso aun.'
	)
);
LanguageProvider.add(
	LanguageMap.english(
		'{0} is banvoting {1}, use !yes or !no to vote.'
	).spanish('{0} banvoteó a {1}, usa !yes o !no para votar.')
);
LanguageProvider.add(
	LanguageMap.english('Someone voted yes.').spanish(
		'Alguien votó si en el banvote.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Someone voted no.').spanish(
		'Alguien votó no en el banvote.'
	)
);
LanguageProvider.add(
	LanguageMap.english('There isnt a banvote running.').spanish(
		'No hay ningun banvote en curso aun.'
	)
);
LanguageProvider.add(
	LanguageMap.english('You already voted.').spanish(
		'Ya has votado en este banvote.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Updated color to: ').spanish(
		'Has cambiado tu color a: '
	)
);
LanguageProvider.add(
	LanguageMap.english('Bans cleared.').spanish('Lista de bans limpiados.')
);
LanguageProvider.add(
	LanguageMap.english('Last team winner: ').spanish('Ultimo equipo ganador: ')
);
LanguageProvider.add(
	LanguageMap.english('{0} silenced 3m by administrator {1}.').spanish(
		'{1} ha silenciado por 3 minutos a {0}.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Cant swap while playing.').spanish(
		'No puedes intercambiar los jugadores mientras se juega.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Teams swapped.').spanish('Equipos intercambiados.')
);
LanguageProvider.add(
	LanguageMap.english('{0} avatar updated to {1}.').spanish(
		'Has cambiado el avatar de {0} a {1}.'
	)
);
LanguageProvider.add(
	LanguageMap.english('{0} avatar cleared.').spanish(
		'Has borrado el avatar de {0}.'
	)
);
LanguageProvider.add(
	LanguageMap.english('{0} removed your silence penalty.').spanish(
		'{0} te quitó el silencio.'
	)
);
LanguageProvider.add(
	LanguageMap.english('{0} isnt silenced.').spanish(
		'{0} no se encuentra silenciado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('{0} cleared the mute pentalty on everyone.').spanish(
		'{0} les quitó a todos el silencio.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Rainbow mode: enabled.').spanish(
		'Modo arcoiris: activado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Rainbow mode: disabled.').spanish(
		'Modo arcoiris: desactivado.'
	)
);
LanguageProvider.add(LanguageMap.english('Delaying: ').spanish('Retrasando: '));
LanguageProvider.add(
	LanguageMap.english('You cant be a spectator.').spanish(
		'No puedes ser un espectador.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Game isnt started.').spanish(
		'El juego no esta iniciado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Ball power updated.').spanish(
		'Potencia del balón actualizado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('No game recorded.').spanish(
		'No hay ningun juego grabado.'
	)
);
LanguageProvider.add(LanguageMap.english('Saving...').spanish('Guardando...'));
LanguageProvider.add(
	LanguageMap.english('Avatars updated.').spanish('Avatars actualizados.')
);
LanguageProvider.add(
	LanguageMap.english('Ball position updated.').spanish(
		'Posición de la pelota actualizada.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Password cleared.').spanish('Contraseña borrada.')
);
LanguageProvider.add(
	LanguageMap.english('Password updated to: ').spanish(
		'Contraseña actualizada a: '
	)
);
LanguageProvider.add(
	LanguageMap.english('Player cant be a spectator.').spanish(
		'El jugador no puede ser un espectador.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Radius updated.').spanish('Radio actualizado.')
);
LanguageProvider.add(
	LanguageMap.english('Ball stopped.').spanish('Balón detenido.')
);
LanguageProvider.add(
	LanguageMap.english('Radiuses updated.').spanish('Radios actualizados.')
);
LanguageProvider.add(
	LanguageMap.english('Player must be spectator.').spanish(
		'El jugador debe ser un espectador.'
	)
);
LanguageProvider.add(
	LanguageMap.english('{0} moved to spect position #{1}').spanish(
		'{0} ha sido movido a la posición de espectador #{1}'
	)
);
LanguageProvider.add(
	LanguageMap.english('Auth not found on db.').spanish(
		'Auth no encontrada en la base de datos.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Stats of {0} merged into {1}.').spanish(
		'Estadísticas de {0} movidas a {1}.'
	)
);
LanguageProvider.add(
	LanguageMap.english('Game cannot be started.').spanish(
		'El juego no puede estar iniciado.'
	)
);
LanguageProvider.add(
	LanguageMap.english('You removed the silence penalty of {0}.').spanish(
		'Le has quitado el silencio a {0}.'
	)
);
LanguageProvider.add(
	LanguageMap.english('You must be a spectator to enter afk mode.').spanish(
		'Debes ser un espectador para entrar en modo afk.'
	)
);
LanguageProvider.add(
	LanguageMap.english('{0} is afk now.').spanish('{0} esta afk.')
);
LanguageProvider.add(
	LanguageMap.english('{0} is not afk now.').spanish('{0} no esta afk.')
);
LanguageProvider.add(
	LanguageMap.english('{0} is afk.').spanish('{0} se encuentra afk.')
);
