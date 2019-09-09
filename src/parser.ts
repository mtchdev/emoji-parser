import { Emoji } from './types';

export class EmojiParser {

    private _emojis: Array<Emoji>;
    
    constructor(emojis: Array<Emoji>) {
        this._emojis = emojis;
    }

    /**
     * Get all emojis in the class
     * @returns Emoji[]
     */
    get emojis(): Array<Emoji> {
        return this._emojis;
    }

    /**
     * Set the emoji array
     * @param emoji: Emoji[]
     */
    set emojis(emoji: Array<Emoji>) {
        this._emojis = emoji;
    }

    /**
     * Parse a string to display HTML-supported images inline with text
     * @param string The string to parse
     * @param callback Callback function with final result
     */
    parse(string: string, callback: (result: string) => void): void {
        for (let i in this._emojis) {
            if (!string.includes(this._emojis[i].trigger)) { continue; }
            string = string.split(this._emojis[i].trigger).join(this._emojis[i].url);
            // string = string.replace(new RegExp(this._emojis[i].trigger, 'g'), this._emojis[i].url);
        }

        // parse string, then callback
        callback(string);
    }

    /**
     * Asynchronously parse a string to display HTML-supported images inline with text
     * @param string The string to parse
     */
    parseSync(string: string): Promise<string> {
        return new Promise((resolve, reject): void => {
            try {
                this.parse(string, (data: string) => resolve(data));
            } catch (e) {
                reject(e);
            }
        });
    }

}
