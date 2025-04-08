# CAPTCHA Form Component

This React component (`MyForm`) implements a simple form with a basic arithmetic CAPTCHA to prevent bot submissions. It features a dynamically generated addition problem and a 10-second timer.

## Features

-   **Dynamic CAPTCHA:** Generates a new addition problem with two random single-digit numbers each time the component renders or the timer expires.
-   **Real-time Timer:** Displays a countdown timer. If the user doesn't submit within 10 seconds, the CAPTCHA resets.
-   **Input Validation:** Checks if the user's answer matches the correct result. If incorrect, an alert message is shown, and the CAPTCHA resets.
-   **Basic Form Submission:** Upon successful CAPTCHA verification, a success alert is displayed (you can replace this with your actual form submission logic).
-   **Styled with Tailwind CSS:** Uses Tailwind CSS classes for basic styling, providing a visually appealing dark-themed form.

## How to Use

1.  **Installation:** Make sure you have React and Tailwind CSS set up in your project. If not, you can follow the official documentation for both.

    ```bash
    npm install react react-dom
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Then, configure Tailwind CSS in your `postcss.config.js` and import the CSS in your main application file.

2.  **Import the Component:** Import the `MyForm` component into the file where you want to use it.

    ```javascript
    import MyForm from './MyForm';
    ```

3.  **Render the Component:** Include the `<MyForm />` tag in your JSX to render the form.

    ```javascript
    function App() {
      return (
        <div>
          <MyForm />
        </div>
      );
    }

    export default App;
    ```

## Component Structure

-   **`generateCaptcha()`:** A function that generates two random numbers between 1 and 10 (inclusive) and returns an object containing these numbers (`num1`, `num2`) and their sum (`result`).
-   **`MyForm` Functional Component:**
    -   **`captcha` state:** Stores the current CAPTCHA object generated by `generateCaptcha()`.
    -   **`userAnswer` state:** Stores the user's input for the CAPTCHA.
    -   **`timeLeft` state:** Manages the countdown timer, initialized to 10 seconds.
    -   **`useEffect` hook (timer):**
        -   Sets up an interval that decrements `timeLeft` every second.
        -   If `timeLeft` reaches 0, it displays a "Time's up!" alert and resets the CAPTCHA, user answer, and timer.
        -   Includes a cleanup function to clear the interval when the component unmounts, preventing memory leaks.
    -   **`handleSubmit` function:**
        -   Prevents the default form submission behavior.
        -   Parses the `userAnswer` and compares it to the `captcha.result`.
        -   If the answer is incorrect, it displays a "Wrong CAPTCHA!" alert and resets the CAPTCHA, user answer, and timer.
        -   If the answer is correct, it displays a "Form submitted successfully!" alert.
    -   **JSX:** Renders the form with:
        -   A title "CAPTCHA Form".
        -   A display for the remaining time.
        -   An input field for the user's name (basic example).
        -   The CAPTCHA question in the format "{num1} + {num2} = ?".
        -   An input field for the user to enter their answer.
        -   A "Submit" button.
        -   Basic styling using Tailwind CSS classes.

## Customization

-   **Styling:** You can easily customize the appearance of the form by modifying the Tailwind CSS classes applied to the different elements.
-   **CAPTCHA Logic:** You can adjust the `generateCaptcha()` function to create more complex CAPTCHA challenges (e.g., subtraction, multiplication, or a mix of operations).
-   **Timer Duration:** Change the initial value of `timeLeft` in the `useState` hook to adjust the time limit.
-   **Form Fields:** Add more input fields to the form as needed.
-   **Submission Handling:** Modify the `handleSubmit` function to handle the form data and submit it to your backend or perform other actions upon successful CAPTCHA verification.
