import { Emoji } from './types';

export class EmojiParser {
    
    constructor(public emojis: Emoji[]) {}

    parse(string: string, callback: any): void {
        if (typeof callback !== 'function') {
            throw new Error('Callback is not a function.');
        }

        // parse string, then callback
        callback('lol');
    }

    parseAync(string: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.parse(string, (data: string) => resolve(data));
            } catch (e) {
                reject(e);
            }
        });
    }

}
