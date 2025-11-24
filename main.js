// cached variables
const outputEl = document.querySelector('h3');
const [c1, c2] = document.querySelectorAll('.color');
const gradientEl = document.getElementById('gradient');
const btn = document.querySelector('.btn');
const resetBtn = document.querySelector('.reset');
const copyBtn = document.querySelector('.copy');

// builder for the gradient
const gradientStr = (a, b) => `linear-gradient(to right, ${a}, ${b})`;

// read the default css
const showInitialCssBackground = () => {
	const computed = getComputedStyle(gradientEl);
	outputEl.textContent = computed.backgroundImage;
}

// helpers
const applyGradient = () => {
	gradientEl.style.background = gradientStr(c1.value, c2.value);
	outputEl.textContent = gradientEl.style.background;
}

const randByteHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');

const randHex = () => `#${randByteHex()}${randByteHex()}${randByteHex()}`;

const onRandomClick = () => {
	const c1Value = randHex();
	let c2Value = randHex();
	do {c2Value = randHex();} while (c2Value === c1Value);
	c1.value = c1Value;
	c2.value = c2Value;
	applyGradient();
}

const onCopyClick = async () => {
	const cssText = outputEl.textContent.trim();
	if (!cssText) return;

	try {
		await navigator.clipboard.writeText(cssText);
		const original = copyBtn.textContent;
		copyBtn.textContent = 'Copied!';
		setTimeout(() => (copyBtn.textContent = original), 1000);
	} catch (err) {
		console.error('Failied to copy CSS:', err);
	}
};

const reset = () => {
	gradientEl.style.removeProperty('background');
	c1.value = c1.defaultValue;
	c2.value = c2.defaultValue;
	showInitialCssBackground();
}

// events
btn.addEventListener('click', onRandomClick);
[c1, c2].forEach((el) => el.addEventListener('input', applyGradient));
resetBtn.addEventListener('click', reset);
showInitialCssBackground();
copyBtn.addEventListener('click', onCopyClick);
