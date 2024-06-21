import { formatPrice } from "@/lib/db/format";

interface PriceTagProps {
    price: number;
    className?: string;

}

export default function Pricetag({ price, className }: PriceTagProps) {
    return <span className={'badge ${className}'}>{formatPrice(price)}</span>
}