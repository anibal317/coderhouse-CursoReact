const arrData = [
	{
		id: 1,
		name: "Coca Cola 2Lts",
		description: "Refresco de cola",
		stock: 150,
        img:'productPlaceHolder(1).png'
	},
	{
		id: 2,
		name: "Sprite 1Lts 1/4",
		description: "Refresco de cola",
		stock: 50,
        img:'productPlaceHolder(1).png'
	},
	{
		id: 3,
		name: "Agua mineral 500c.c",
		description: "Agua sin gas",
		stock: 150,
        img:'productPlaceHolder.png'
	},
	{
		id: 4,
		name: "Gatorade 500c.c",
		description: "Bebida energiznate",
		stock: 550,
        img:'productPlaceHolder200x300.png'
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