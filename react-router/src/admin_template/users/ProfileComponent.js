import { useParams } from 'react-router-dom'

export default function ProfileComponent() {
    let { id, subject } = useParams();

    return (
        <div>
            Profile Component
            <br />
            The ID of user is {id} & Subject is {subject}
        </div>
    )
}