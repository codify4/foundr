import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa"
 
export default function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button variant="default" type="submit" className="w-full hover:bg-secondary">
        <FaGoogle size={20} className="mr-2" />
        Sign In with Google
      </Button>
    </form>
  )
} 