import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Cars {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuelType: string;
    color: string;
    price: string;
    description: string;
    owner: string;
    image: string;
}

async function getCars(): Promise<Cars[]> {
    const url = 'https://apimockup.vercel.app/cars/api';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.error('Failed to fetch cars:', response.status, response.statusText);
            return [];
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
    } catch (err) {
        console.error('Error fetching cars:', err);
        return [];
    }
}

export default async function Page() {
    const cars = await getCars();
    console.log("Car DATA", cars);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-gray-100 min-h-screen">
            {cars.map((car) => (
                <Card key={car.id} className="w-full shadow-lg">
                    <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-56 object-cover rounded-t-lg" />
                    <CardContent className="p-4 flex flex-col items-center">
                        <h2 className="text-lg font-bold text-center">{car.brand} {car.model}</h2>
                        <p className="text-gray-500 text-sm">{car.year} • {car.fuelType} • {car.color}</p>
                        <Link href={`/cars/${car.id}`}>
                            <Button className="mt-2 w-full">More</Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}