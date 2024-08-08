/* Components */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignInWithGoogleButton from "./SignInWithGoogleButton"

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Join our waitlist</CardTitle>
        <CardDescription>
          Choose a provider below to join the waitlist
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
            <SignInWithGoogleButton/> 
        </form>
      </CardContent>
    </Card>
  )
}
