import React from "react";

interface Props {
	children: React.ReactNode;
}

export default function MyButton({ children }: Props) {
	return <button style={{ background: "blue", padding: "4px" }}>{children}</button>;
}
