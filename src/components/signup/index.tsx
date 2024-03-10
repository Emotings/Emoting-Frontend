import { useState } from "react"
import Email from "./Email"
import Password from "./Password"
import Name from "./Name"
import Age from "./Age"
import Img from "./Img"
import { useInput } from "@/hooks/useInput"

type stepType = "EMAIL" | "PASSWORD" | "NAME" | "AGE" | "IMG"

export interface FormType {
    email: string;
    password: string;
    repassword: string;
    nickname: string;
    age: number | undefined;
    img: File | null

}

const Signup = () => {
    const [step, setStep] = useState<stepType>("EMAIL")
    const { form, setForm, onChange } = useInput<FormType>({
        email: "",
        password: "",
        repassword: "",
        nickname: "",
        age: undefined,
        img: null
    })

    return (
        <>
            {step === 'EMAIL' && <Email onNext={() => setStep("PASSWORD")} form={form} onChange={onChange} />}
            {step === 'PASSWORD' && <Password onNext={() => setStep("NAME")} form={form} onChange={onChange} />}
            {step === 'NAME' && <Name onNext={() => setStep("AGE")} form={form} onChange={onChange} />}
            {step === 'AGE' && <Age onNext={() => setStep("IMG")} form={form} onChange={onChange} />}
            {step === 'IMG' && <Img form={form} setForm={setForm} />}
        </>
    )
}

export default Signup