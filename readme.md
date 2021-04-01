# imgtxt

CLI tool to log text from an image

## Install

```bash
npm install --global imgtxt
```

## Usage

`imgtxt [path to an image]`


> The path can be a local path to an image or a url to an image

> The local path can be encoded or not, for example `my img.png` or `my%20img.png`

For help run

`imgtxt --help`

### Example

```bash
$ imgtxt /home/user/screenshot/hello image.png

  Passed with 81% confidence
-------------------image-text-----------------------
Mild Splendour of the various-vested Night!
```
