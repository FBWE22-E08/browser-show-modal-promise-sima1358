 const paragraph = document.querySelector('.modal')
const paragraphPromise = () => {
    return new Promise ((resolved) => {
        setTimeout (() => {
            resolved ( "block")
        }, 60000)

        })
};

const resolvedPromise = async ()=>{
    let result = await paragraphPromise ();
    paragraph.style.display = result
};

resolvedPromise();