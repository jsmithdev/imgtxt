import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import test from 'ava';
import {execa} from 'execa';

test('main', async test => {
	const {stdout} = await execa('./cli.js', [__dirname+'/test/eng_bw.png']);
	test.is(stdout, response());
});

function response(){
	return `
	Passed with 90% confidence
-------------------image-text-----------------------
Mild Splendour of the various-vested Night!
Mother of wildly-working visions! haill
I watch thy gliding, while with watery light
Thy weak eye glimmers through a fleecy veil;
And when thou lovest thy pale orb to shroud
Behind the gather’d blackness lost on high;
And when thou dartest from the wind-rent cloud
Thy placid lightning o’er the awaken’d sky.
`
}