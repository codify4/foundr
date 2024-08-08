'use client'

import { Button } from "@/components/ui/button"
import { signInWithGoogle } from "@/lib/auth-actions"
import { FaGoogle } from "react-icons/fa";

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
      <FaGoogle size={20} className="mr-2" />
      <span>Join with Google</span>
    </Button>
  )
}

export default SignInWithGoogleButton