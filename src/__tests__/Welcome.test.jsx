import { render, screen } from "@testing-library/react"
import Welcome from "../components/Welcome"

// controllo tramite "h1" e tramite testo "specifico"
describe ("If Welcome mount correct", () => {
    it("mounts correctly at lunch", () => {
        render(<Welcome />)
        const h1Welcome = screen.getByRole("heading")
        expect(h1Welcome).toBeInTheDocument()
    })

    it("should show this words", () => {
        render(<Welcome />)
        const textWelcome = screen.getByText(/Benvenuti in EpiBooks!/i)
        expect(textWelcome).toBeInTheDocument()
    })
})