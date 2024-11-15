function name() {
    return new Promise((resolve, reject) => {
        resolve({})
    },2000)
}

async function names() {
    console.log("calling")
    const result = await name()
    console.log(result)
}
asyncnames()