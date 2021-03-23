import { useHistory } from 'react-router-dom'

const useFollowLink = () => {
    const history = useHistory()
    return (pathname) => {
        history.push(pathname)
        window.scrollTo(0, 0)
    }
}

export default useFollowLink