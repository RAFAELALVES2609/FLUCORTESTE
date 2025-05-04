import { cn } from "@/lib/utils"

type MaintenanceIconProps = {
  type?: "repair" | "inspection" | "cleaning" | "emergency"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MaintenanceIcon({ type = "repair", size = "md", className }: MaintenanceIconProps) {
  const getTypeColor = () => {
    switch (type) {
      case "inspection":
        return "stroke-blue-500"
      case "cleaning":
        return "stroke-green-500"
      case "emergency":
        return "stroke-red-500"
      default:
        return "stroke-yellow-500"
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
      {/* Círculo de fundo */}
      <circle cx="50" cy="50" r="40" className={`${getTypeColor()} stroke-2 fill-white dark:fill-gray-800`} />

      {/* Chave inglesa */}
      <path
        d="M35,35 L65,65 M40,30 C45,25 55,25 60,30 C65,35 65,45 60,50 L50,40 L40,50 C35,45 35,35 40,30 Z"
        className={`${getTypeColor()} stroke-2 fill-none`}
      />

      {/* Engrenagem */}
      <circle cx="50" cy="50" r="10" className={`${getTypeColor()} stroke-2 fill-none`} />
      <path
        d="M50,30 L50,25 M70,50 L75,50 M50,70 L50,75 M30,50 L25,50 M65,35 L70,30 M65,65 L70,70 M35,65 L30,70 M35,35 L30,30"
        className={`${getTypeColor()} stroke-2`}
      />
    </svg>
  )
}
