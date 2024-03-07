import { useState } from "react"
import styled from "styled-components"
import Email from "./Email"
import Password from "./Password"
import Name from "./Name"
import Age from "./Age"
import Img from "./Img"

type stepType = "EMAIL" | "PASSWORD" | "NAME" | "AGE" | "IMG"

const Signup = () => {
    const [step, setStep] = useState<stepType>("EMAIL")
    return (
        <>
            {step === 'EMAIL' && <Email onNext={() => setStep("PASSWORD")} />}
            {step === 'PASSWORD' && <Password onNext={() => setStep("NAME")} />}
            {step === 'NAME' && <Name onNext={() => setStep("AGE")} />}
            {step === 'AGE' && <Age onNext={() => setStep("IMG")} />}
            {step === 'IMG' && <Img />}
        </>
    )
}

export default Signup