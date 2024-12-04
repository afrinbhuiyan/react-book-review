const getStoredBookApplication = () => {
    const storedbookApplication = localStorage.getItem('book-application')
    if(storedbookApplication){
        return JSON.parse(storedbookApplication)
    }
    return [];
}

const seveBookApplication = bookId => {
    const storedbookApplication = getStoredBookApplication();
    const exists = storedbookApplication.find(bookedId => bookedId === bookId );
    if(!exists){
        storedbookApplication.push(bookId)
        localStorage.setItem('book-application', JSON.stringify(storedbookApplication))
    }

}

export {seveBookApplication, getStoredBookApplication}