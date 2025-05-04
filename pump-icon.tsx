import { cn } from "@/lib/utils"

type PumpIconProps = {
  status?: "running" | "stopped" | "maintenance" | "fault"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function PumpIcon({ status = "running", size = "md", className }: PumpIconProps) {
  const getStatusColor = () => {
    switch (status) {
      case "running":
        return "stroke-green-500"
      case "stopped":
        return "stroke-gray-500"
      case "maintenance":
        return "stroke-yellow-500"
      case "fault":
        return "stroke-red-500"
      default:
        return "stroke-gray-500"
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-8 h-8"
      case "lg":
        return "w-16 h-16"
      default:
        return "w-12 h-12"
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(getSizeClass(), "inline-block", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo da bomba */}
      <circle cx="50" cy="50" r="30" className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`} />

      {/* Entrada */}
      <rect
        x="10"
        y="45"
        width="20"
        height="10"
        className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`}
      />

      {/* Saída */}
      <rect
        x="70"
        y="45"
        width="20"
        height="10"
        className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`}
      />

      {/* Pás da bomba (indicador de status) */}
      <path d="M50,50 L50,30 M50,50 L70,50 M50,50 L50,70 M50,50 L30,50" className={`${getStatusColor()} stroke-3`} />

      {/* Círculo central */}
      <circle cx="50" cy="50" r="5" className={getStatusColor().replace("stroke", "fill")} />
    </svg>
  )
}
