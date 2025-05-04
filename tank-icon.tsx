import { cn } from "@/lib/utils"

type TankIconProps = {
  fillLevel?: number // 0 a 100
  status?: "normal" | "warning" | "critical" | "maintenance"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function TankIcon({ fillLevel = 70, status = "normal", size = "md", className }: TankIconProps) {
  const getStatusColor = () => {
    switch (status) {
      case "warning":
        return "stroke-yellow-500"
      case "critical":
        return "stroke-red-500"
      case "maintenance":
        return "stroke-blue-500"
      default:
        return "stroke-green-500"
    }
  }

  const getFillColor = () => {
    switch (status) {
      case "warning":
        return "fill-yellow-200"
      case "critical":
        return "fill-red-200"
      case "maintenance":
        return "fill-blue-200"
      default:
        return "fill-green-200"
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

  // Garantir que o nível de preenchimento esteja entre 0 e 100
  const normalizedFillLevel = Math.max(0, Math.min(100, fillLevel))
  // Calcular a altura do preenchimento (invertido porque o SVG começa de cima)
  const fillHeight = 70 - (normalizedFillLevel * 50) / 100

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(getSizeClass(), "inline-block", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo do tanque */}
      <rect
        x="20"
        y="20"
        width="60"
        height="70"
        rx="5"
        className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`}
      />

      {/* Nível de preenchimento */}
      <rect x="20" y={fillHeight} width="60" height="70" rx="0" className={getFillColor()} clipPath="url(#tank-clip)" />

      {/* Clip path para o preenchimento */}
      <clipPath id="tank-clip">
        <rect x="20" y="20" width="60" height="70" rx="5" />
      </clipPath>

      {/* Conexões do tanque */}
      <rect x="40" y="10" width="20" height="10" className="fill-gray-400" />
      <rect x="45" y="90" width="10" height="10" className="fill-gray-400" />

      {/* Marcações de nível */}
      <line x1="85" y1="30" x2="90" y2="30" className="stroke-gray-400 stroke-2" />
      <line x1="85" y1="45" x2="90" y2="45" className="stroke-gray-400 stroke-2" />
      <line x1="85" y1="60" x2="90" y2="60" className="stroke-gray-400 stroke-2" />
      <line x1="85" y1="75" x2="90" y2="75" className="stroke-gray-400 stroke-2" />
    </svg>
  )
}
