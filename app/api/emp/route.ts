export async function GET(req: Request, res: Response) {
    const data = [
        { 'name': 'Mark', 'age': 25, 'salary': 50000 },
        { 'name': 'Toon', 'age': 25, 'salary': 50000 },
        { 'name': 'kan', 'age': 25, 'salary': 50000 },
    ]
    return Response.json(data)
}