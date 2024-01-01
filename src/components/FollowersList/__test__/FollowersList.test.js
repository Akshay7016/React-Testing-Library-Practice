import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
};

describe("FollowersList", () => {

    beforeEach(() => {
        console.log("RUNNING BEFORE EACH TEST");
    });

    beforeAll(() => {
        console.log("RAN ONCE BEFORE ALL TESTS");
    });

    afterEach(() => {
        console.log("RUNNING AFTER EACH TEST");
    });

    afterAll(() => {
        console.log("RAN ONCE AFTER ALL TESTS");

    })

    it("should fetch followers data", async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    it("should fetch 5 followers data", async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    });
})