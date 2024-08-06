/* Components */
import Link from "next/link"
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
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Choose a sign in method with any of the providers below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="">
            <SignInWithGoogleButton/> 
        </form>
      </CardContent>
    </Card>
  )
}
