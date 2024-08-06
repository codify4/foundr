'use client'

import { Button } from "@/components/ui/button"
import { signInWithGoogle } from "@/lib/auth-actions"

const SignInWithGoogleButton = () => {
  return (
    <Button 
        type="button" 
        variant="default"
        className="w-full hover:bg-secondary"
        onClick={() => {
            signInWithGoogle();
        }}
    >
        Sign In with Google
    </Button>
  )
}

export default SignInWithGoogleButton