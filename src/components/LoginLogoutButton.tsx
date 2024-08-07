"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";

const LoginButton = ({ className }: { className?: string }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  if (user) {
    return (
      <Button
        onClick={() => {
          signout();
          setUser(null);
        }}
        className={className}
      >
        Sign Out
      </Button>
    );
  }
  return (
    <Button
      variant="default"
      onClick={() => {
        router.push("/login");
      }}
      className={className}
    >
      Get Started 
    </Button>
  );
};

export default LoginButton;
