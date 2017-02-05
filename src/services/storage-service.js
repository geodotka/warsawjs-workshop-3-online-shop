
export default function storageService (){
    return {
        read: (key) => {
            let result = [];
            try {
                result = JSON.parse(localStorage.getItem(key))
            } catch (e){}
            return result;
        },
        save: (key, data) => {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}
