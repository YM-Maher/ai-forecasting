"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import EventsDropdown from "./EventsDropdown";

const formSchema = z.object({
  excelFile: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  startDate: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  endDate: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  events: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const DashboardForm = () => {
  // 1. Define form schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      excelFile: "",
      startDate: "",
      endDate: "",
      events: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid grid-cols-2 gap-8"
      >
        {/* Excel File Field */}
        <FormField
          control={form.control}
          name="excelFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Upload Excel File</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-14 !text-[14px] rounded-lg"
                  placeholder="Username or email"
                  type="file"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Events Field */}
        <div className="w-full h-full flex flex-col justify-between">
          <FormLabel>Events</FormLabel>
          <EventsDropdown />
        </div>
        {/* Start Date Field */}
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Start Date</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-14 !text-[14px] rounded-lg"
                  placeholder="Password"
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* End Date Field */}
        <FormField
          control={form.control}
          name="events"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">End Date</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-14 !text-[14px] rounded-lg"
                  placeholder="Password"
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full h-14 text-[14px] font-light rounded-lg bg-[#5F44A6]"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default DashboardForm;
