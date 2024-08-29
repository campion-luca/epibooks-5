import { render, screen } from "@testing-library/react"
import AllTheBooks from "../components/AllTheBooks"

describe("number of cards", () => {
    it("have to mount a book for every file.jason", () => {
        render(<AllTheBooks />)
        const sinBook = screen.queryAllByRole("img")
        expect(sinBook).toHaveLength(150)
    })
})

