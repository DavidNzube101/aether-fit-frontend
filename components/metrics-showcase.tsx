"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { metrics } from "@/lib/fitness-metrics"

export default function MetricsShowcase() {
  const [selectedTab, setSelectedTab] = useState("Brook")

  const filteredMetrics = metrics.filter((metric) => metric.challengeLevel === selectedTab)

  return (
    <Tabs defaultValue="Brook" className="w-full" onValueChange={setSelectedTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="Brook">Brook</TabsTrigger>
        <TabsTrigger value="Ridge">Ridge</TabsTrigger>
        <TabsTrigger value="Peak">Peak</TabsTrigger>
        <TabsTrigger value="Apex">Apex</TabsTrigger>
      </TabsList>
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold">{selectedTab} Tier</h3>
        <p className="text-muted-foreground mt-2">
          {selectedTab === "Brook" && "Beginner friendly metrics for those just starting their fitness journey"}
          {selectedTab === "Ridge" && "Intermediate metrics for those looking to push their limits"}
          {selectedTab === "Peak" && "Advanced metrics for serious fitness enthusiasts"}
          {selectedTab === "Apex" && "Elite metrics for professional athletes and fitness experts"}
        </p>
      </div>
      <TabsContent value={selectedTab} className="mt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle>{metric.name}</CardTitle>
                <CardDescription>Measurement: {metric.measurement}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {metric.sensors.map((sensor, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {sensor}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
