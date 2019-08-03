import { Emoji } from './types';

export class EmojiParser {
    
    constructor(public emojis: Emoji[]) {}

    parse(string: string, callback: any): string {
        // parse string
        return '';
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
