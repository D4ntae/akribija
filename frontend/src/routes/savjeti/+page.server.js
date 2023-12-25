export async function load() {
    let dataRes = await fetch("http://localhost:3000/api/savjeti/all");
    let data = await dataRes.json()

    return {
        data: data
    }
}
