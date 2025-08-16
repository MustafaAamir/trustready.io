"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import validator from 'validator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Company name required").optional().or(z.literal("")),
  phone: z.string().refine(validator.isMobilePhone).optional().or(z.literal(""))
})

type FormData = z.infer<typeof formSchema>
export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
	  phone: ""
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="w-full flex justify-center items-center py-6 px-8 max-w-6xl py-10">
        <h1 className="text-7xl font-bold text-slate-900 justify-between">Trustready</h1>
      </header>

      <section className="w-full max-w-4xl text-center py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-slate-900"
        >
          Compliance Made Simple
        </motion.h2>
        <p className="mt-4 text-lg text-slate-600">
          SOC 2, ISO 27001, HIPAA, GDPR in one platform.
        </p>
      </section>

      <section className="w-full max-w-5xl py-16 px-6">
        <h3 className="text-3xl font-semibold text-center text-slate-900">
          Supported Frameworks
        </h3>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "SOC 2", desc: "Prove security to customers." },
            { title: "ISO 27001", desc: "Global security standards." },
            { title: "HIPAA", desc: "Healthcare data compliance." },
            { title: "GDPR", desc: "Protect EU customer privacy." },
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-2xl shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-lg py-16 px-6">
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-6">
          Request a Demo
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
			<FormField
				control={form.control}
				name="contact number"
				render={ ( { field } ) => (
				    <FormItem>
					<FormLabel>Phone Number</FormLabel>
					<FormControl>
					<Input placeholder="Your contact number" {...field} />
					</FormControl>
					<FormMessage />
					</FormItem>
				) }
			/>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-green-600 font-medium"
            >
              Thanks! We’ll reach out soon.
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <footer className="w-full py-6 border-t mt-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Trustready. All rights reserved.
      </footer>
    </main>
  )
}

