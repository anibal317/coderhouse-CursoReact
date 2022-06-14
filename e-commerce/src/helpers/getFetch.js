const arrData = [
	{
		id: "1",
		name: "Coca Cola 2Lts",
		description: "Refresco de cola",
		stock: 150,
        img:'https://continuum.aeped.es/img/200x200.gif'
	},
	{
		id: "2",
		name: "Sprite 1Lts 1/4",
		description: "Refresco de cola",
		stock: 50,
        img:'https://continuum.aeped.es/img/200x200.gif'
	},
	{
		id: "3",
		name: "Agua mineral 500c.c",
		description: "Agua sin gas",
		stock: 150,
        img:'https://continuum.aeped.es/img/200x200.gif'
	},
];

export const getFetch = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arrData);
		}, 3000);
	});
};

export const getFetchById = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arrData[0]);
		}, 3000);
	});
};