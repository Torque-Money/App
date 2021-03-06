import { Eyeglass } from "tabler-icons-react";

import NavLink from "../NavLink";

export default function NavLinkRenderer() {
    const links: { icon: JSX.Element; color: string; label: string; href: string; mb: string; disabled?: boolean }[] = [
        {
            icon: <Eyeglass size={16} />,
            color: "indigo",
            label: "Lens",
            href: "/lens",
            mb: "xl",
        },
    ];

    return (
        <>
            {links.map((link, index) => (
                <NavLink key={index} {...link} />
            ))}
        </>
    );
}
