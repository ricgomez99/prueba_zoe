
const url = 'http://localhost:3001/advisor'

const fetchAdvisors = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json();

        if(!data) {
            throw new Error('Error while fetching data')
        }

        return data
    } catch (error) {
        console.log(error as Error)
    }
}

export default fetchAdvisors