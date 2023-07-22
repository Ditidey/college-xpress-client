import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}|CollegeXpress`
    },[title])
}

export default useTitle;