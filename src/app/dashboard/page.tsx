import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import { redirect } from "next/navigation"

async function Dashboard(){

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <div className="flex flex-col items-center justify-center w-1/5">
        <h1 className="text-primary text-3xl font-bold mb-5">Dashboard</h1>
        <p>Thank you for joining our waitlist.</p>
        <p className="text-center">This app has started the development process, when it's ready you will be able to use it.</p>
      </div>

      <Card className="mx-auto max-w-sm shadow-xl p-5">
        <CardHeader>
          <CardTitle className="text-2xl">My Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-3">
          YEEEE
        </CardContent>
      </Card>

    </div>
  )
}

export default Dashboard