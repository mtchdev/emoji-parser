import { EmojiParser, Emoji } from '../src/index';

const emojis: Emoji[] = [
    {
        id: 1,
        trigger: 'smile',
        url: 'https://miitch.io/'
    }
];

console.log(emojis);

const parser = new EmojiParser(emojis);

// Parse callback
parser.parse('Hey there. smile', (response: string) => {
    console.log(response);
})
