# Optional Conf

An extension to [Conf](https://github.com/sindresorhus/conf) which allows simple configuration
for your app or module while making actually persisting the config to disk optional.

When not persisting to disk, the configuration will only last for the duration of the current script execution.

## Description

This makes Conf suitable for getting and setting your config values whether or not your users
want the configuration written to disk or just stored in memory.

When not stored in memory, it can still be a great library for getting and setting runtime configuration which is passed in the initial constructor.

Use it exactly like Conf, except you can pass an additional boolean argument named `persist`
into the constructor.

- If `!!persist === true` then OptionalConf will work exactly like the parent Conf library.
- If `!!persist === false` then OptionalConf will overwrite the getter and setter of the Conf
  library transparently so that it does not read from or write to the disk in any way.

## Install

With NPM:

`npm install --save optional-conf`

With Yarn:

`yarn add optional-conf`

## Usage

See the [Usage](https://github.com/sindresorhus/conf#usage) section of the Conf library
for usage information.

## API

See the [API](https://github.com/sindresorhus/conf#api) section of the Conf library for
API information. The only difference is the `persistent` boolean which can be passed in
with the constructor options.

## Author

[bmcclure](https://github.com/bmcclure)
[Ben McClure](ben.mcclure@gmail.com)

## License

Unlicense
