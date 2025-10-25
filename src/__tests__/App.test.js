import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm Michelle`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm michelle/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("displays an image of myself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of michelle/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for my biography", () => {
  render(<App />);
  const bio = screen.getByText(/i am a passionate developer/i);
  expect(bio).toBeInTheDocument();
});

test("displays links to my GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
