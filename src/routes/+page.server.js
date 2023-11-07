import { render } from 'svelte-email';
import Mail from '$lib/components/Mail.svelte';
//@ts-ignore
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
	}
});


export const actions = {
    //@ts-ignore
    default: async({ request }) => {
        const data = await request.formData();

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
            from: 'webstranica@akribija.hr',
            to: 'danko.delimar@gmail.com',
            subject: data.get("subject"),
            html: emailHtml
        };

        console.log("[INFO] Sending mail...")
        const info = await transporter.sendMail(options);
        console.log(info)
    }
}
