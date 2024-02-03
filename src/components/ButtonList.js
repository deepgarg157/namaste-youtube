import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name='All' title="All"/>
            <Button name='Shorts' title="Shorts"/>
            <Button name='Videos' title="Videos"/>
            <Button name='Unwatched' title="Unwatched"/>
            <Button name='Watched' title="Watched"/>
            <Button name='For You' title="For You"/>
            <Button name='Recently Uploaded' title="Recently Uploaded" />
            <Button name='Live' title="Live"/>
            <Button name='Subscriptions' title="Subscriptions"/>
        </div>
    )
}

export default ButtonList;