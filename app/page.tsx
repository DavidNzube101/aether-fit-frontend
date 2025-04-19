import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import DownloadSection from "@/components/download-section"
import InstructionsSection from "@/components/instructions-section"
import FeaturesSection from "@/components/features-section"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-xs">AF</span>
              </div>
              <span className="inline-block font-bold text-xl">Aether Fit</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#tester" className="text-sm font-medium transition-colors hover:text-primary">
                Become a Tester
              </Link>
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <nav className="flex items-center space-x-2">
              <Button asChild variant="default">
                <Link href="#tester">Become a Tester</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="inline-flex">
                    Beta Testing Now Open
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Stake Crypto. Get Fit. Earn Rewards.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Aether Fit is a gamified fitness platform where you stake cryptocurrency to compete in fitness
                    challenges and earn rewards for achieving your goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#tester">Become a Tester</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="relative h-[450px] w-[280px] overflow-hidden rounded-[2.5rem] border-[8px] border-muted bg-background shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/app-screenshot.png"
                      alt="Aether Fit App Screenshot"
                      width={264}
                      height={450}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 rounded-b-lg bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Aether Fit</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Incentivizing fitness enthusiasts through crypto to achieve their fitness goals
                </p>
              </div>
            </div>
            <FeaturesSection />
          </div>
        </section>

        <section id="tester" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Become a Tester</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Help us shape the future of fitness by testing our app before it's released
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <Tabs defaultValue="download" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="download">Download</TabsTrigger>
                  <TabsTrigger value="instructions">Instructions</TabsTrigger>
                </TabsList>
                <TabsContent value="download" className="p-4 border rounded-lg mt-4">
                  <DownloadSection />
                </TabsContent>
                <TabsContent value="instructions" className="p-4 border rounded-lg mt-4">
                  <InstructionsSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="available" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What's Available</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Current features available in the beta test build
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Fitness Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Track steps, distance, and activity recognition using your device sensors
                    </p>
                    <Badge variant="secondary">Brook Tier</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Crypto Staking</h3>
                    <p className="text-sm text-muted-foreground">
                      Stake cryptocurrency on your fitness goals and challenges
                    </p>
                    <Badge variant="secondary">All Tiers</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Challenge Creation</h3>
                    <p className="text-sm text-muted-foreground">Create custom challenges or join existing ones</p>
                    <Badge variant="secondary">All Tiers</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Social Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with friends and compete in group challenges
                    </p>
                    <Badge variant="secondary">Limited</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Rewards System</h3>
                    <p className="text-sm text-muted-foreground">
                      Earn rewards for completing challenges and achieving goals
                    </p>
                    <Badge variant="secondary">Testing</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      View your progress and performance metrics over time
                    </p>
                    <Badge variant="secondary">Basic</Badge>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm bg-background">
                  <span>
                    Current Version: <strong>0.9.2 Beta</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Incentivize Fitness Through Crypto
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Aether Fit's mission is to incentivize fitness enthusiasts through crypto into attaining their
                    fitness goals.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our vision is to onboard the current and next generation of fitness enthusiasts into web3.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild variant="outline" size="lg">
                    <Link href="#tester">Join Our Beta Program</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src="/about-image.png"
                  alt="Fitness enthusiast using Aether Fit"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join the Future of Fitness?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be among the first to experience Aether Fit and help shape its future
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#tester">Become a Tester Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-xs">AF</span>
            </div>
            <span className="font-bold text-lg">Aether Fit</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Aether Fit. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
