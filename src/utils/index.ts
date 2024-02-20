export const getData = async(url:string) => {
    try {
        const res = await fetch(url)
        const data = res.json()
        return data
    } catch (error) {
        console.log('Error fetching data:', error)
    }
}