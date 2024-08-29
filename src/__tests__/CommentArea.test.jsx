import { render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea"

describe("If CommentArea mount correct", () => {
    it("mounts correctly at lunch", () => {
        render(<CommentArea />)
        const idDiv = screen.getByTestId("divCommentArea")
        expect(idDiv).toBeInTheDocument()
    })
})