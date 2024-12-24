function getBaseUrl() {
    return `http://localhost:${process.env.PORT || 3008}/`
}

export const getTickets = async (page: number, limit: number, userType: string|null) => {
    try {
        const response = await fetch(`${getBaseUrl()}tickets?userType=${userType}&page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response && response.ok) {
            return await response.json()
        }
    } catch (err: Error | unknown) {
        console.error(err)
        // throw new Error(err)
    }
}
