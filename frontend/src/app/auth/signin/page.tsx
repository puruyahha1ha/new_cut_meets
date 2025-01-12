"use client";

import React from "react";
import Form from 'next/form'
import { Button, Input, Checkbox, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { actionSignin } from "@/services/auth/actionSignin";


export default function Signin() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <p className="pb-4 text-left text-3xl font-semibold">
        Log In
        <span aria-label="emoji" className="ml-2" role="img">
          👋
        </span>
      </p>
      <Form
        className="flex flex-col gap-4"
        action={actionSignin}
      >
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
        />
        <Input
          isRequired
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-closed-linear"
                />
              ) : (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-bold"
                />
              )}
            </button>
          }
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />
        <div className="flex w-full items-center justify-between px-1 py-2">
          <Checkbox defaultSelected name="remember" size="sm">
            Remember me
          </Checkbox>
          <Link className="text-default-500" href="#" size="sm">
            Forgot password?
          </Link>
        </div>
        <Button className="w-full" color="primary" type="submit">
          Log In
        </Button>
      </Form>
      <p className="text-center text-small">
        <Link href="#" size="sm">
          Create an account
        </Link>
      </p>
    </>
  );
}
