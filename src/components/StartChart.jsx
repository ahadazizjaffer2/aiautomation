import { useEffect, useRef } from "react"

function StatsChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up the circular progress chart
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20

    // Draw segments
    const segments = [
      { color: "#818CF8", value: 30 }, // Purple
      { color: "#F59E0B", value: 25 }, // Orange
      { color: "#10B981", value: 25 }, // Green
      { color: "#6B7280", value: 20 }, // Gray
    ]

    let startAngle = -Math.PI / 2
    segments.forEach((segment) => {
      const endAngle = startAngle + (2 * Math.PI * segment.value) / 100

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.lineWidth = 20
      ctx.strokeStyle = segment.color
      ctx.stroke()

      startAngle = endAngle
    })
  }, [])

  return (
    <div className="space-y-6">
      <canvas ref={canvasRef} width={200} height={200} className="mx-auto" />
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-semibold">200</div>
          <div className="text-sm text-muted-foreground">No's. Dialed</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">1200</div>
          <div className="text-sm text-muted-foreground">Emails sent</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">520</div>
          <div className="text-sm text-muted-foreground">Replied</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">30</div>
          <div className="text-sm text-muted-foreground">Calls Clicked</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">600</div>
          <div className="text-sm text-muted-foreground">Opened</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">10</div>
          <div className="text-sm text-muted-foreground">Opportunities</div>
        </div>
      </div>
    </div>
  )
}


export default StatsChart;