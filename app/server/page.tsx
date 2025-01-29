
export default function Page() {
    async function create(formData: FormData) {
        console.log('hello form server');
        const email = formData.get('email');
        console.log(email);
    }

    return (
        <div>
            <form action={create}>
                <input type="email" name="email" />
                <button>Submit</button>
            </form>
        </div>
    );
}