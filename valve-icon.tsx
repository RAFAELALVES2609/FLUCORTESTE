import { cn } from "@/lib/utils"

type ValveIconProps = {
  status?: "open" | "closed" | "partial" | "maintenance"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ValveIcon({ status = "open", size = "md", className }: ValveIconProps) {
  const getStatusColor = () => {
    switch (status) {
      case "open":
        return "stroke-green-500"
      case "closed":
        return "stroke-red-500"
      case "partial":
        return "stroke-yellow-500"
      case "maintenance":
        return "stroke-blue-500"
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

  // Ângulo de rotação para a válvula
  const getRotation = () => {
    switch (status) {
      case "open":
        return "rotate(90)"
      case "closed":
        return "rotate(0)"
      case "partial":
        return "rotate(45)"
      default:
        return "rotate(0)"
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(getSizeClass(), "inline-block", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tubulação horizontal */}
      <line x1="10" y1="50" x2="90" y2="50" className="stroke-gray-400 stroke-4" />

      {/* Corpo da válvula */}
      <circle cx="50" cy="50" r="20" className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`} />

      {/* Elemento de controle da válvula */}
      <g transform={`${getRotation()} translate(50, 50)`}>
        <line x1="-15" y1="0" x2="15" y2="0" className={`${getStatusColor()} stroke-4`} />
      </g>

      {/* Haste da válvula */}
      <line x1="50" y1="50" x2="50" y2="20" className={`${getStatusColor()} stroke-2`} />
      <circle cx="50" cy="15" r="5" className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`} />
    </svg>
  )
}
