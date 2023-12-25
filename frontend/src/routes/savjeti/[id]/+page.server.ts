type Params = {
    id: Number
}

let blank = {
	id: 0,
	title: "",
	desc: "",
	img: "",
}

export async function load({ params }: {params: Params}) {
	let dataRes = await fetch(`http://localhost:3000/api/savjeti/${params.id}`)
	try {
		let data = await dataRes.json()
		console.log(data)
		return data;
	} catch (err){
		return blank
	}

}
