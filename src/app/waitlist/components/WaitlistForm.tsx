'use client'

import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react";


export function WailistForm() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([email]),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                console.log(data);
                setMessage('Email sent successfully! Thank you for joining the waitlist!');
            } else {
                console.log(data.error);
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setMessage('The email could not be sent.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card className="w-full max-w-sm shadow-xl">
            <CardHeader>
                <CardTitle className="text-2xl">Join our waitlist</CardTitle>
                <CardDescription>
                    Enter your email below to join the waitlist.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="m@example.com" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button 
                        type="submit"
                        variant="default" 
                        className="w-full hover:bg-secondary"
                    >
                        {loading ? (
                            <span>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                <p>Please Wait</p>
                            </span>
                        ) : 'Join Waitlist'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
