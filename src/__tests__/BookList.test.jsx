import { fireEvent, render, screen } from "@testing-library/react"
import BookList from "../components/BookList"
import fantasy from "../data/fantasy.json"

describe("function of serach bar", () => {
    it("have to show the book i write", () => {
        render (<BookList books={fantasy}/>)
        const chosenBook =  screen.getAllByRole("img")
        expect(chosenBook.length).toBe(fantasy.length)
    })
})