'use server'


export async function createEmail(formData: FormData) {
    console.log('hello form server')
    const email = formData.get('email')
    console.log(email)
}




