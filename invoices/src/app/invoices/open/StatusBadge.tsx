import "./style.css";

type StatusBadgeProps = {
    status: string
}

export default function StatusBadge({status}: StatusBadgeProps) {
    return (
        <span className={`status-badge status-${status.toLocaleLowerCase()}`}>
            {status}
        </span>
    )
}