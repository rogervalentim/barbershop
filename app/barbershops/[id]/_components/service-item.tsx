import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client"
import Image from "next/image";

interface ServiceItemProps {
    service: Service;
}
const ServiceItem = ({ service }: ServiceItemProps) => {
    return (
        <Card>
            <CardContent>
                <div className="relative">
                <Image src={service.imageUrl} alt={service.name} fill style={{
                    objectFit: "cover",
                }} />
                </div>
            </CardContent>
        </Card>
    )
}

export default ServiceItem