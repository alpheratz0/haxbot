import { GameCommandContext, UserCommand } from '..';
import { LanguageProvider } from '../../../langs/language-provider';
import { colors } from '../../../room/configuration';
import { Banvote, Vote, VoteResult } from '../../../util/banvote';

export const noCommand = new UserCommand(
	'no',
	({ room, record, sender }: GameCommandContext) => {
		switch (Banvote.vote(record.auth, Vote.Negative)) {
			case VoteResult.Success:
				room.sendAnnouncement(
					LanguageProvider.get('Someone voted no.'),
					undefined,
					colors.user,
					'italic'
				);
				break;
			case VoteResult.NoBanvoteActive:
				room.sendAnnouncement(
					LanguageProvider.get('There isnt a banvote running.'),
					sender.id,
					colors.error
				);
				break;
			case VoteResult.AlreadyVoted:
				room.sendAnnouncement(
					LanguageProvider.get('You already voted.'),
					sender.id,
					colors.error
				);
				break;
		}
	}
);
