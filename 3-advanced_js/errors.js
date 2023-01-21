 ((async function() {
    try {
        await Promise.resolve('oops 1')
    } catch (err) {
        console.log(err.m)
    }
 }))