import { EmojiParser, Emoji } from '../src/index';

const emojis: Emoji[] = [
    {
        trigger: ':)',
        url: 'smile.png'
    },
    {
        trigger: ':D',
        url: 'happy.png'
    }
];

console.log(emojis);

const parser = new EmojiParser(emojis);

// Parse callback
parser.parse('Hey there :) :) yea :) hows ur day? :D', (response: string) => {
    console.log(response);
});

(async () => {
    console.log(await parser.parseSync('Hey there :) yea :D'));
})();
