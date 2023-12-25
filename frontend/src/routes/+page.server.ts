import { render } from 'svelte-email';
import { EMAIL, PASSW } from "$env/static/private"
import Mail from '$lib/components/Mail.svelte';
//@ts-ignore
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSW
    }
});

export const actions = {
    //@ts-ignore
    default: async({ request }) => {
        const data = await request.formData();
        const file: File = data.get("file")

        const emailHtml = render({
            template: Mail,
            props: {
                name: data.get('name'),
                lastname: data.get('lastname'),
                subject: data.get('subject'),
                content: data.get('content'),
            }
        });

        const options = {
            from: 'akribijaobrt@akribija.hr',
            to: 'danko.delimar@gmail.com',
            subject: data.get("subject"),
            html: emailHtml,
            attachments: [
                {
                    filename: file.name,
                    // @ts-ignore
                    content: Buffer.from(await file.arrayBuffer(), "uft-8")
                }
            ]
        };

        console.log("[INFO] Sending mail...")
        const info = await transporter.sendMail(options);
        console.log("[INFO] Sent successfully.")
    }
}
