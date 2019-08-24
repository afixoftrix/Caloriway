import axios from 'axios'

const uri = process.env.REACT_APP_MAPBOX_API
const token = process.env.REACT_APP_ACCESS_TOKEN

export function mapboxAPI (bbox){
    return `${uri}${bbox}&access_token=${token}`;
}

export const getRestaurants = url => 
    axios.get(url).then( res => {
        return res
    })