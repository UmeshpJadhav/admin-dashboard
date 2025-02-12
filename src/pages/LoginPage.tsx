
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import { Link} from 'react-router-dom';



const LoginPage = () => {
  
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const handleLoginSubmit = () => {
         const email = emailRef.current?.value;
         const password = passwordRef.current?.value;
         console.log("data", {email, password})
  }
  
  return (
     <section className="flex h-screen items-center justify-center px-4">
 
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                 ref={emailRef}
                 id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input ref={passwordRef} id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button  onClick={handleLoginSubmit}   variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
           <Link to={'/auth/register'} className="underline">
            Sign up    
            </Link>
            </div>
          </form>
        </CardContent>
      </Card>

    </section>   
  )
}

export default LoginPage

