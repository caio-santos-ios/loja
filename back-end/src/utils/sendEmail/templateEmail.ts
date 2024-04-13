import Mailgen from "mailgen";

const mailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "XikePress",
        link: "htpp://localhost:3000"
    }
})

export const templateMail = (name: string, intro: string, text: string, link: string) => {
    const mail = {
        body: {
            name,
            intro,
            action: {
                instructions: 'To get started with Mailgen, please click here:',
                button: {
                    color: '#22BC66',
                    text,
                    link
                }
            }
        }
    }

    return mail
}

export const mailBody = (name: string, intro: string, text: string, link: string) => {
    return mailGenerator.generate(templateMail(name, intro, text, link))
}