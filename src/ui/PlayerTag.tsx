import { Button } from "@/components/ui/button";
import type { Color } from "@/helpers";
import { User, X } from 'lucide-react';

interface RootProps
    extends Omit<React.ComponentProps<"div">, "color"> {
    color: Color;
}
const Root = ({ color, children }: RootProps) => {
    return (
        <div
            className="flex items-center md:gap-4 gap-2 w-fit md:p-4 p-2 m-1 rounded-md shadow-2xs relative"
            style={{
                backgroundColor: color?.backgroundColor ?? "#4b5563",
                borderColor: color?.borderColor ?? "#4b5563",
                color: color?.borderColor ?? "000",
                borderWidth: "1px",
            }}>
            {children}
        </div >
    )
}

const Name = ({ children }: React.ComponentProps<"div">) => {
    return (
        <div className="flex items-center gap-1.5 font-bold mr-auto md:text-base text-sm">
            <User />
            {children}
        </div>
    )
}

const Delete = ({ children, ...props }: React.ComponentProps<"button">) => {
    return (
        <Button className="rounded-full bg-muted" variant="ghost" {...props}>{<X />}</Button >
    )
}

const PlayerTag = {
    Root, Name, Delete
}

export default PlayerTag;