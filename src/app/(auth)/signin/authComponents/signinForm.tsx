import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaGoogle } from "react-icons/fa"
import SignInWithGithub from "./signinGithub"
import SignInWithGoogle from "./signinGoogle"

export function SignInForm() {
  return (
    <Card className="mx-auto max-w-sm shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
            <SignInWithGoogle />
            <SignInWithGithub />
        </div>
      </CardContent>
    </Card>
  )
}
