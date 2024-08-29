import { fireEvent, render, screen } from "@testing-library/react"
import BookList from "../components/BookList"

describe("function of serach bar", () => {
    it("have to show the book i write", async () => {
        render (<BookList />)
        const searchField = screen.getByPlaceholderText(/cerca un libro/i)
        fireEvent.change(searchField, {target: {value: "ciao"}})
        const chosenBook = await screen.getByRole("img")
        expect(chosenBook).toHaveLength(1)
    })
})