const fs = require('fs');
const { CaptchaGenerator, Captcha } = require('../js-script');

(async () => {
	const captcha = new CaptchaGenerator();
	fs.writeFileSync('./examples/default.png', captcha.generateSync());
	/* Set dimension method example*/
	captcha.setDimension(200, 400);
	fs.writeFileSync('./examples/dimension.png', captcha.generateSync());
	/* Set Captcha Method example*/
	captcha.setCaptcha({
		color: 'deeppink',
		font: 'Candara',
		size: '60',
		characters: 8,
	})
		.setDimension(150, 450);
	fs.writeFileSync('./examples/captcha.png', captcha.generateSync());
	console.log(captcha.text);
	/* All methods at once*/
	captcha
		.setCaptcha({ color: 'deeppink', size: 60, text: 'CUSTOM05' })
		.setDecoy({ opacity: 0.5 })
		.setTrace({ color: 'deeppink', size: 5 });
	fs.writeFileSync('./examples/all.png', await captcha.generate());
	// console text of captcha
	console.log(captcha.text);
	// example captcha
	const exmCaptcha = new Captcha(600, 200, 8);
	exmCaptcha.addDecoy({ total: 20, size: 40 });
	exmCaptcha.drawCaptcha({ size: 40 });
	exmCaptcha.addDecoy();
	exmCaptcha.drawTrace();

	exmCaptcha.async = false;
	console.log('Example captcha text: ' + exmCaptcha.text);

	fs.writeFileSync('./examples/example.png', exmCaptcha.png);
})();

