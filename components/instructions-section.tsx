import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstructionsSection() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="android" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="android">Android</TabsTrigger>
          <TabsTrigger value="ios">iOS</TabsTrigger>
        </TabsList>
        <TabsContent value="android" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Installing on Android</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Download the APK file to your Android device</li>
                <li>
                  Enable "Install from Unknown Sources" in your device settings:
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>Go to Settings &gt; Security</li>
                    <li>Toggle "Unknown Sources" to allow installation</li>
                  </ul>
                </li>
                <li>Open the downloaded APK file</li>
                <li>Follow the on-screen instructions to complete installation</li>
                <li>Open the app and create an account or sign in</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reporting Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                If you encounter any bugs or issues while testing, please report them through the app's feedback form or
                email us at <span className="font-medium">beta@aetherfit.com</span> with the following information:
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                <li>Device model and Android version</li>
                <li>App version (found in Settings &gt; About)</li>
                <li>Detailed description of the issue</li>
                <li>Steps to reproduce the issue</li>
                <li>Screenshots (if applicable)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ios" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Installing on iOS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Download the IPA file to your computer</li>
                <li>Install TestFlight on your iOS device from the App Store</li>
                <li>
                  You'll need to be invited to the beta test:
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>Check your email for an invitation link</li>
                    <li>Or use the code provided by the Aether Fit team</li>
                  </ul>
                </li>
                <li>Open TestFlight and accept the invitation</li>
                <li>Install the Aether Fit beta app through TestFlight</li>
                <li>Open the app and create an account or sign in</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reporting Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                If you encounter any bugs or issues while testing, please report them through TestFlight's built-in
                feedback system or email us at <span className="font-medium">beta@aetherfit.com</span> with the
                following information:
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                <li>Device model and iOS version</li>
                <li>App version (found in TestFlight)</li>
                <li>Detailed description of the issue</li>
                <li>Steps to reproduce the issue</li>
                <li>Screenshots (if applicable)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">After installing the app, follow these steps to get started:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create an account or sign in</li>
            <li>Complete your profile and fitness assessment</li>
            <li>Connect your wallet to enable staking (optional for testing)</li>
            <li>Join a challenge or create your own</li>
            <li>Start tracking your fitness metrics</li>
            <li>Provide feedback on your experience</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Note: This is a beta version, and some features may be limited or still in development. Your feedback is
            valuable in helping us improve the app.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
