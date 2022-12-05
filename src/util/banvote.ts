import { LanguageProvider } from '../langs/language-provider';
import { room } from '../room';
import { colors } from '../room/configuration';

export interface IVotes {
	positives: number;
	negatives: number;
	totalVotes: number;
}

export enum Vote {
	Positive,
	Negative
}

export enum VoteResult {
	AlreadyVoted,
	NoBanvoteActive,
	Success
}

export class Banvote {
	private static available: boolean = true;
	private static current: Banvote;
	private static votingTime: number = 1000 * 15;
	private static whoVoted: string[] = [];

	private callback: (result: IVotes) => void;

	public id: number;
	public votes: IVotes;

	constructor(id: number, callback: (result: IVotes) => void) {
		this.id = id;
		this.votes = { positives: 0, negatives: 0, totalVotes: 0 };
		this.callback = callback;
	}

	static canRun(): boolean {
		return this.available;
	}

	static isRunning(): boolean {
		return !this.available;
	}

	static vote(auth: string, vote: Vote): VoteResult {
		if (this.whoVoted.includes(auth)) return VoteResult.AlreadyVoted;
		if (this.available) return VoteResult.NoBanvoteActive;

		this.whoVoted.push(auth);

		if (vote == Vote.Positive) this.current.votes.positives++;
		else this.current.votes.negatives++;

		this.current.votes.totalVotes++;

		return VoteResult.Success;
	}

	static start(id: number): void {
		if (!this.available) return;

		this.current = new Banvote(id, (result) => {
			if (result.totalVotes < 4) {
				room.sendAnnouncement(
					LanguageProvider.get('Insufficent votes.'),
					undefined,
					colors.error
				);
				return;
			}
			if (result.negatives > result.positives && room.getPlayer(id))
				room.kickPlayer(id, 'Banvote.', true);
			room.sendAnnouncement(
				`${LanguageProvider.get('Banvote result')}: ${Math.floor(
					(result.positives * 100) / result.totalVotes
				)}%`,
				undefined,
				colors.user
			);
		});

		this.available = false;

		this.current.id = window.setTimeout(() => {
			this.current.callback(this.current.votes);
			this.current = null;
			this.available = true;
			this.whoVoted = [];
		}, this.votingTime);
	}
}
