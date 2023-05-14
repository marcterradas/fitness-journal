import Link from "next/link";

export default function InfrastructureLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}
