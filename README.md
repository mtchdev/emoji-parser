# Emoji Parser
This is just a simple emoji parser that I built to get more experience in writing npm packages. You can view it here: [simple-emoji-parser](https://www.npmjs.com/package/simple-emoji-parser)

## API
This is a very *light-weight* package, so there's not much to it.

### `Emoji` | Interface
The main type that describes emojis.
```ts
interface Emoji {
    name?: string, // optional - unique naming
    id?: number, // optional - useful if you have duplicates
    trigger: string, // the trigger word
    url: string // the image URL to replace the trigger
}
```

The `id` parameter is totally optional and is only useful for duplicates and/or where you need to manually tamper with the `Emojis` array directly from the parser.

### `EmojiParser(emojis: Array<Emoji>)` | Class
The central class of the package - where all the magic happens.

You need to initialize the class and pass the emojis array as a variable:
```ts
const parser = new EmojiParser(emojis);
```

#### Methods

`parse(string: string, callback: (result: string) => void): void` | Parse a message that may contain emoji triggers and will return the parsed string in a callback.  

`parseSync(string: string): Promise<string>` | An asychronous method of the regular callback `parse()` method.

#### Variables

You can access the emojis array through the **getters** &amp; **setters** in `EmojiParser`:  
```ts
// Get all current emojis in the object
get emojis(): Array<Emoji> {
    return this._emojis;
}

// Replace all current emojis
set emojis(emoji: Array<Emoji>) {
    this._emojis = emoji;
}
```

# Contributing
All contribution is done through the official [GitHub Repository](https://github.com/spliitzx/emoji-parser). As usual, create a branch, do your work, and make a pull request.  

<3