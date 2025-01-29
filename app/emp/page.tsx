async function getEmp() {
    const result = await fetch('http://localhost:3000/api/emp')
    console.log(result)
    if (!result.ok) {
        throw new Error('Something went wrong')
    }
    return  result.json()


}

export default async function Page() {
    const emps = await getEmp()
    console.log(emps)
    return (
        <div>
            {emps.map((emp, index) => (
                <div key={index}>
                    {emp.name} ||
                    {emp.age}  ||
                    {emp.salary} ||
                </div>
            )

            )}
            
        </div>
    )
}