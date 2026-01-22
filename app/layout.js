export const metadata = {
    title: 'Car Assistant',
    description: 'Your AI car chatbot assistant',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
