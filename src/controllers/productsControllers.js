const productsController = async () => {
    const resp = await fetch('/src/components/data/data.json')
    const data = await resp.json()

    return data
};