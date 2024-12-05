const getStoredBookApplication = () => {
    const storedbookApplication = localStorage.getItem('book-applications')
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
        localStorage.setItem('book-applications', JSON.stringify(storedbookApplication))
    }

}

export { getStoredBookApplication, seveBookApplication}