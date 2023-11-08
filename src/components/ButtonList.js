import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name='All' />
            <Button name='Shorts' />
            <Button name='Videos' />
            <Button name='Unwatched' />
            <Button name='Watched' />
            <Button name='For You' />
            <Button name='Recently Uploaded' />
            <Button name='Live' />
            <Button name='Subscriptions' />
        </div>
    )
}

export default ButtonList;