import EmojiParser, { Emoji } from '../src/index';

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

(async () => {
    try {
        const parser = new EmojiParser(emojis);
        await parser.parseSync('Hey there :) yea :D');

        console.log('Tests passed!');
    } catch (e) {
        console.log('Test failed');
        throw new Error(e);
    }
})();
