import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast"
import * as z from "zod"
import TextInput from "./TextInput"

const formSchema = z.object({
    eventName: z.string().min(5, { message: "El nombre debe tener al menos 5 caracteres" }),
})

export type dataType = z.infer<typeof formSchema>

export default function EventForm({ onSubmit }: {onSubmit: (data: dataType) => void}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventName: "",
        },
    })

    return (
        <div className="max-w-2xl m-auto p-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <TextInput
                        form={form}
                        name="eventName"
                        placeholder=""
                        description=""
                        label="Nombre del evento"
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            </Form>
        </div>
    )
}
