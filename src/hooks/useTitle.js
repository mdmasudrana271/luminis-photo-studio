import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - LUMINIS PHOTO STUDIO`;
    }, [title])
};

export default useTitle;