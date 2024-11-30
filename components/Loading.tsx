import { OrbitProgress } from "react-loading-indicators"

function LoadingComponent() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center">
      <OrbitProgress
        variant="spokes"
        color="#32cd32"
        size="medium"
        text=""
        textColor=""
      />
    </div>
  )
}

export default LoadingComponent
