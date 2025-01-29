import { createEmail } from "./action"


export default function Page() {
    return (
        <form action={createEmail}>
            <input type="email"
                name="email" />
                <button>Submit</button>
            </form>
    );
}