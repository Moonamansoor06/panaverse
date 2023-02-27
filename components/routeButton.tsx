"use-client"
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';

interface Props{
    buttonName:string,
    url:string
}
const RouteButton = (props:Props) => {
    const router=useRouter()
    return (
        <Button  onClick={() => router.push(props.url)} size="md" variant='solid' bgColor='gray.100' color='blue.700'>
            {props.buttonName}</Button>  )
}

export default RouteButton