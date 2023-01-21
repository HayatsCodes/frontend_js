 ((async function() {
    try {
        await Promise.resolve('oops 1');
        await Promise.reject('oops 2');
    } catch (err) {
        console.log(err.message);
    }
 }))