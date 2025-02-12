import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";

export function RegisterPage({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const id = useId();

  return (
    <div className={`flex h-screen items-center justify-center  ${className}`} {...props}>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">
            We just need a few details to get you started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`${id}-name`}>Full Name</Label>
                <Input id={`${id}-name`} placeholder="John Doe" type="text" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-email`}>Email</Label>
                <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-password`}>Password</Label>
                <Input
                  id={`${id}-password`}
                  placeholder="Enter your password"
                  type="password"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline underline-offset-4">
                    Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
