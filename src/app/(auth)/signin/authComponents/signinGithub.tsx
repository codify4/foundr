import { signIn } from "@/auth"
import { Button } from "../../../../components/ui/button"
import { FaGithub } from "react-icons/fa"
 
export default function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button variant="default" type="submit" className="w-full hover:bg-secondary">
        <FaGithub size={20} className="mr-2" />
        Sign In with GitHub
      </Button>
    </form>
  )
} 