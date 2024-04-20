"use client"

import { Tlogin } from "@/@types/account";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { setCookie } from 'cookies-next';
import { useState } from "react";
import { useRouter } from "next/navigation";

type inputsLogin = {
    email: string;
    password: string;
}

export const FormLogin = () => {
    const { register, handleSubmit } = useForm<inputsLogin>()
    const [loginErro, setLoginErro] = useState<string>("")
    const router = useRouter()

    const login = async (data: Tlogin) => {
        try {
            setLoginErro("")
            const res = await api.post("/accounts/login", data)
            setCookie('token', res.data);
            router.push("/")
        } catch (error: any) {
            if(error.response.status === 400) {
                setLoginErro(error.response.data.message)
            }
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Faça login em sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(login)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            E-mail
                        </label>
                        <div className="mt-2">
                            <input
                            {...register("email", { required: true })}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Senha
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>
                        <div className="mt-2">
                            <input
                            {...register("password", { required: true })}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <span className="text-red-500">{ loginErro && loginErro }</span>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Entrar
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                    </a>
                </p>
            </div>
      </div>
    )
}