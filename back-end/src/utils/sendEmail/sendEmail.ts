import { createTransport } from "nodemailer";

const transport = createTransport({
    host: process.env.HOST_NODEMAILER,
    port:  Number(process.env.PORT_NODEMAILER),
    auth: {
        user: process.env.USER_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER
    }
})

export const sendEmail = async (to: string, subject: string, html: any) => {
    const info = await transport.sendMail({
        from: process.env.USER_NODEMAILER,
        to,
        subject,
        html
    })

    return info
}