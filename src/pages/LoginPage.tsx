import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { login } from "@/http/api";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      alert(error.message || "Login failed");
    },
  });

  const handleLoginSubmit = () => {
    const email = emailRef.current?.value?.trim();
    const password = passwordRef.current?.value?.trim();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Sending login request:", { email, password });
    mutation.mutate({ email, password });
  };

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
          <form onSubmit={(e) => e.preventDefault()}>
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
              <Button onClick={handleLoginSubmit} type="button" className="w-full">
                  {mutation.isPending ? "Logging in..." : "Login"}
              </Button>

              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
