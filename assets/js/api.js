
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/AlmeidaRafaelFeh/meuPrimeiroPortifolio/main/data/profile.json';
    const fechting = await fetch(url)
    return await fechting.json()
}
