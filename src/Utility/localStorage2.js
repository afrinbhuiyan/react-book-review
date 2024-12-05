const getStoredBookWishlist = () => {
    const storedbookWishlist = localStorage.getItem('book-wishlist')
    if(storedbookWishlist){
        return JSON.parse(storedbookWishlist)
    }
    return [];
}

const seveBookWishlist = bookId => {
    const storedbookWishlist = getStoredBookWishlist();
    const exists = storedbookWishlist.find(bookedId => bookedId === bookId );
    if(!exists){
        storedbookWishlist.push(bookId)
        localStorage.setItem('book-wishlist', JSON.stringify(storedbookWishlist))
    }

}

export { getStoredBookWishlist, seveBookWishlist}