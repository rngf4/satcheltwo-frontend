function errorNotification(message) {
    console.error(message)
}

export function useNotification() {
    return { errorNotification }
}