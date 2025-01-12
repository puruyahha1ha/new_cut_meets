"use client";

import { useState } from "react";
import Form from 'next/form'
import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { actionSignup } from "@/services/auth/actionSignup";


export default function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);
  return (
    <>
      <p className="pb-4 text-left text-3xl font-semibold">
        Sign Up
        <span aria-label="emoji" className="ml-2" role="img">
          👋
        </span>
      </p>
      <Form
        className="flex flex-col gap-4"
        action={actionSignup}
      >
        <Input
          isRequired
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your username"
          type="text"
          variant="bordered"
        />
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
        <Input
          isRequired
          endContent={
            <button type="button" onClick={toggleConfirmVisibility}>
              {isConfirmVisible ? (
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
          label="Confirm Password"
          labelPlacement="outside"
          name="confirmPassword"
          placeholder="Confirm your password"
          type={isConfirmVisible ? "text" : "password"}
          variant="bordered"
        />
        {/* <Checkbox isRequired className="py-4" size="sm">
          I agree with the&nbsp;
          <Link href="#" size="sm">
            Terms
          </Link>
          &nbsp; and&nbsp;
          <Link href="#" size="sm">
            Privacy Policy
          </Link>
        </Checkbox> */}
        <Button color="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p className="text-center text-small">
        <Link href="#" size="sm">
          Already have an account? Log In
        </Link>
      </p>
    </>
  );
}
