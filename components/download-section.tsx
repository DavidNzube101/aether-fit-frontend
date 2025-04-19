import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DownloadSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.566 11.996c-.141.144-.376.373-.566.564l-4 4c-.49.49-1.286.49-1.776 0s-.49-1.286 0-1.776l1.889-1.888H8c-.552 0-1-.448-1-1s.448-1 1-1h5.113l-1.889-1.888c-.49-.49-.49-1.286 0-1.776s1.286-.49 1.776 0l4 4c.19.19.425.42.566.564.047.048.09.1.13.156.124.178.21.392.21.624s-.086.446-.21.624c-.04.056-.083.108-.13.156z" />
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Android</h3>
          <p className="text-sm text-muted-foreground text-center">
            Download the APK file and install it on your Android device
          </p>
          <Button asChild className="w-full">
            <a href="/downloads/app.apk" download>
              <Download className="mr-2 h-4 w-4" />
              Download APK
            </a>
          </Button>
          <div className="text-xs text-muted-foreground">Version 0.9.2 Beta</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">iOS</h3>
          <p className="text-sm text-muted-foreground text-center">
            Download the IPA file and install it using TestFlight
          </p>
          <Button asChild className="w-full">
            <a href="/downloads/app.ipa" download>
              <Download className="mr-2 h-4 w-4" />
              Download IPA
            </a>
          </Button>
          <div className="text-xs text-muted-foreground">Version 0.9.2 Beta</div>
        </CardContent>
      </Card>
    </div>
  )
}
