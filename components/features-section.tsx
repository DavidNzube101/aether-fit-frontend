import { Award, Smartphone, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesSection() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
          <div className="p-2 rounded-full bg-muted">
            <Award className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold">Stake & Earn</h3>
          <p className="text-sm text-muted-foreground">
            Stake cryptocurrency on your fitness challenges and earn rewards when you achieve your goals
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
          <div className="p-2 rounded-full bg-muted">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold">Verified Metrics</h3>
          <p className="text-sm text-muted-foreground">
            Your fitness data is verified through device sensors to ensure fair competition
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
          <div className="p-2 rounded-full bg-muted">
            <Smartphone className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold">Mobile First</h3>
          <p className="text-sm text-muted-foreground">
            Track your progress and compete with others directly from your smartphone
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
