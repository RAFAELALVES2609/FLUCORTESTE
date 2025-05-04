import { cn } from "@/lib/utils"

type TruckIconProps = {
  status?: "loading" | "unloading" | "moving" | "idle"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function TruckIcon({ status = "idle", size = "md", className }: TruckIconProps) {
  const getStatusColor = () => {
    switch (status) {
      case "loading":
        return "stroke-blue-500"
      case "unloading":
        return "stroke-green-500"
      case "moving":
        return "stroke-yellow-500"
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
      {/* Cabine do caminhão */}
      <rect
        x="10"
        y="50"
        width="25"
        height="20"
        rx="3"
        className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`}
      />
      {/* Tanque do caminhão */}
      <rect
        x="35"
        y="40"
        width="55"
        height="30"
        rx="5"
        className={`${getStatusColor()} stroke-2 fill-white dark:fill-gray-800`}
      />
      {/* Rodas */}
      <circle cx="20" cy="75" r="8" className="fill-gray-800" />
      <circle cx="45" cy="75" r="8" className="fill-gray-800" />
      <circle cx="80" cy="75" r="8" className="fill-gray-800" />
      {/* Detalhes */}
      <rect x="15" y="55" width="8" height="5" className="fill-blue-200" /> {/* Janela */}
      <line x1="35" y1="55" x2="90" y2="55" className="stroke-gray-400 stroke-1" /> {/* Linha do tanque */}
      {/* Conexão de descarga */}
      <rect x="60" y="70" width="5" height="10" className="fill-gray-400" />
    </svg>
  )
}
