import 'babelify/polyfill';

function loadImage(url) {

	return new Promise((resolve, reject) => {

		let image = new Image();

		image.onload = () => resolve(image);

		image.onerror = () =>
			reject(
				new Error("Cannot load Image: "
				+ url));

		image.src = url;

	});

}

export default loadImage;
