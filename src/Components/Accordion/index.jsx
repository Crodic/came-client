import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export default function AccordionComponents({ data }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {data &&
                data.length > 0 &&
                data.map((acc) => {
                    return (
                        <Accordion
                            key={acc.key}
                            open={open === acc.key}
                            icon={<Icon id={acc.key} open={open} />}
                            className="border px-[10px] mb-[20px]"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(acc.key)}
                            >
                                {acc.header}
                            </AccordionHeader>
                            <AccordionBody>{acc.body}</AccordionBody>
                        </Accordion>
                    );
                })}
        </>
    );
}
